// Online play. One player's machine (the host) runs the vigil; the others
// (guests) send it what their hands are doing and draw what it sends back.
// A small relay server introduces them and passes their messages along.
import * as THREE from 'three';
import { Input, setView } from './control.js';
import { encodeSnapshot, applySnapshot, applyMotion, mirrored, muted, decArg, MIRROR_AUDIO, MIRROR_FX } from './replicate.js';

export const PROTOCOL = 1;
const SNAP_DT = 1 / 15, INPUT_DT = 1 / 20, RENDER_DELAY = 0.11;
const SEATS = 5; // four survivors and the Reliquary

// keys a guest holds (sent as bits) and keys it tapped since its last message (sent as a list)
const HELD = ['KeyW', 'KeyS', 'KeyA', 'KeyD', 'ShiftLeft', 'KeyC', 'KeyE', 'KeyR', 'KeyF', 'KeyQ'];
const TAPS = ['Space', 'KeyB', 'KeyF', 'Mouse2', 'KeyA', 'KeyD', 'Mouse0', 'KeyE', 'KeyQ', 'KeyG'];

// The toll-check dial of a player who is somewhere else: asked over the wire, answered over the wire.
class RemoteSkill {
  constructor(net, peer) { this.net = net; this.peer = peer; this.active = false; this.cb = null; this.id = 0; this.t = 0; }
  start(cb, opts = {}) { this.active = true; this.cb = cb; this.id++; this.t = performance.now(); this.net.eventTo(this.peer, 'skill', this.id, opts); }
  cancel() { if (!this.active) return; this.active = false; this.cb = null; this.net.eventTo(this.peer, 'skillCancel'); }
  result(id, r) { if (!this.active || id !== this.id) return; this.active = false; const cb = this.cb; this.cb = null; cb?.(r === 'great' || r === 'good' ? r : 'miss'); }
  // nobody answered (they lagged out mid-check): it counts as a miss
  expire() { if (this.active && performance.now() - this.t > 6000) this.result(this.id, 'miss'); }
}

export class Net {
  constructor(G, hooks) {
    this.G = G; this.hooks = hooks; // hooks: lobby(state), start(cfg), closed(reason), status(text)
    this.ws = null; this.id = null; this.hostId = null; this.code = ''; this.server = '';
    this.peers = new Map(); // id -> { name }
    this.lobby = null; this.inMatch = false;
    this.inputs = new Map(); this.events = []; this.priv = new Map(); this.loaded = new Set();
    this.snaps = []; this.offset = null; this.snapT = 0; this.inputT = 0; this.taps = [];
    const own = this.own = {
      epoch: 0, free: false, corr: new THREE.Vector3(),
      // the host's word on this machine's avatar: whether we may steer it, and where it must be if the host moved it
      epochSeen: (e, free, d) => {
        const me = this.G.me;
        if (e !== own.epoch) {
          own.epoch = e;
          if (free && me) { own.corr.set(d[0] - me.pos.x, 0, d[2] - me.pos.z); if (own.corr.lengthSq() > 9) { me.pos.set(d[0], d[1], d[2]); own.corr.set(0, 0, 0); } }
        }
        own.free = free;
      },
    };
  }

  get isHost() { return this.id !== null && this.id === this.hostId; }
  get connected() { return !!this.ws && this.ws.readyState === 1; }

  // ---------------------------------------------------------------- connection
  static httpBase(server) { return server.replace(/^ws/, 'http').replace(/\/+$/, ''); }
  static wsBase(server) { return server.replace(/^http/, 'ws').replace(/\/+$/, ''); }

  static async newCode(server, quick = false) {
    const r = await fetch(`${Net.httpBase(server)}/api/${quick ? 'quick' : 'new'}`, { cache: 'no-store' });
    if (!r.ok) throw new Error('The server did not answer');
    return (await r.json()).code;
  }

  connect(server, code, name) {
    this.leave();
    this.server = server; this.code = code; this.name = name;
    return new Promise((resolve, reject) => {
      let settled = false;
      const fail = (why) => { if (!settled) { settled = true; reject(new Error(why)); } };
      let ws;
      try { ws = new WebSocket(`${Net.wsBase(server)}/room/${encodeURIComponent(code)}?name=${encodeURIComponent(name)}&v=${PROTOCOL}`); } catch (e) { return fail('Could not reach the server'); }
      this.ws = ws;
      const timer = setTimeout(() => { fail('The server did not answer'); try { ws.close(); } catch { /* ignore */ } }, 10000);
      ws.onmessage = (e) => {
        const msg = e.data, i = msg.indexOf('|');
        if (i < 1) return;
        const from = msg.slice(0, i);
        let m; try { m = JSON.parse(msg.slice(i + 1)); } catch { return; }
        if (from === '!') {
          if (m.t === 'hello') { clearTimeout(timer); settled = true; this.onHello(m); resolve(m); }
          else if (m.t === 'refused') { clearTimeout(timer); fail({ locked: 'That vigil has already begun', full: 'That room is full', version: 'This copy of the game is older or newer than the server' }[m.reason] || 'The room refused the connection'); }
          else this.onServer(m);
        } else this.onPeer(from, m);
      };
      ws.onerror = () => { clearTimeout(timer); fail('Could not reach the server'); };
      ws.onclose = () => { clearTimeout(timer); fail('The connection closed'); if (this.ws === ws) this.dropped('lost'); };
    });
  }

  leave() {
    const ws = this.ws;
    this.ws = null;
    if (ws) { ws.onclose = null; ws.onmessage = null; ws.onerror = null; try { ws.close(); } catch { /* ignore */ } }
    this.id = null; this.hostId = null; this.peers.clear(); this.lobby = null; this.inMatch = false;
    this.inputs.clear(); this.snaps = []; this.offset = null;
  }

  dropped(reason) {
    this.ws = null;
    const was = this.id;
    this.id = null; this.hostId = null; this.inMatch = false;
    if (was) this.hooks.closed(reason);
  }

  raw(to, obj) { if (this.connected) this.ws.send(to + '|' + JSON.stringify(obj)); }
  toHost(obj) { this.raw('h', obj); }
  toAll(obj) { this.raw('a', obj); }

  onHello(m) {
    this.id = m.id; this.code = m.code;
    this.peers.clear();
    for (const p of m.peers) { this.peers.set(p.id, { name: p.name }); if (p.host) this.hostId = p.id; }
    this.peers.set(m.id, { name: this.name });
    if (m.host) {
      this.hostId = m.id;
      this.lobby = { code: m.code, pub: false, diff: 'vigil', seats: new Array(SEATS).fill(null), players: {} };
      this.lobby.players[m.id] = { name: this.name, perks: [], ready: true };
      this.lobby.seats[0] = m.id;
      this.announce();
      this.hooks.lobby(this.lobby);
    }
  }

  onServer(m) {
    if (m.t === 'join') {
      this.peers.set(m.id, { name: m.name });
      if (this.isHost && this.lobby) {
        this.lobby.players[m.id] = { name: m.name, perks: [], ready: false };
        if (!this.inMatch) { const free = this.lobby.seats.indexOf(null); if (free >= 0) this.lobby.seats[free] = m.id; }
        this.pushLobby();
      }
    } else if (m.t === 'leave') {
      const name = this.peers.get(m.id)?.name || 'Someone';
      this.peers.delete(m.id);
      if (this.isHost && this.lobby) {
        delete this.lobby.players[m.id];
        this.lobby.seats = this.lobby.seats.map((s) => (s === m.id ? null : s));
        if (this.inMatch) this.peerGone(m.id, name);
        this.pushLobby();
      }
    } else if (m.t === 'closed') {
      this.dropped('host');
    }
  }

  // ---------------------------------------------------------------- lobby (the host keeps it)
  pushLobby() { if (!this.isHost) return; this.toAll({ t: 'lobby', L: this.lobby, m: this.inMatch }); this.announce(); this.hooks.lobby(this.lobby); }
  // tell the server whether strangers may find and join this room
  announce() { if (this.isHost && this.lobby) this.raw('!', { t: 'meta', public: this.lobby.pub, locked: this.inMatch }); }

  takeSeat(i) { if (this.isHost) this.seat(this.id, i); else this.toHost({ t: 'seat', i }); }
  setPerks(p) { if (this.isHost) { this.lobby.players[this.id].perks = p; this.pushLobby(); } else this.toHost({ t: 'perks', p }); }
  setReady(v) { if (!this.isHost) this.toHost({ t: 'ready', v }); }
  setDiff(d) { if (this.isHost) { this.lobby.diff = d; this.pushLobby(); } }
  setPublic(v) { if (this.isHost) { this.lobby.pub = !!v; this.pushLobby(); } }
  seat(peer, i) {
    const L = this.lobby;
    if (i < 0 || i >= SEATS || (L.seats[i] && L.seats[i] !== peer)) return;
    L.seats = L.seats.map((s) => (s === peer ? null : s));
    L.seats[i] = peer;
    this.pushLobby();
  }
  canStart() {
    const L = this.lobby;
    if (!this.isHost || !L || this.inMatch) return false;
    const ids = Object.keys(L.players);
    return ids.every((id) => L.seats.includes(id)) && ids.every((id) => id === this.id || L.players[id].ready);
  }

  // The host begins the vigil for everyone in the room.
  start(pick) {
    if (!this.canStart()) return false;
    const L = this.lobby;
    const who = (peer) => (peer ? { peer, name: L.players[peer]?.name || '', perks: (L.players[peer]?.perks || []).slice(0, 4) } : {});
    const cfg = { seed: pick.seed, realm: pick.realm, rain: pick.rain, diff: L.diff, survivors: [0, 1, 2, 3].map((i) => ({ def: i, ...who(L.seats[i]) })), killer: who(L.seats[4]) };
    this.toAll({ t: 'start', cfg });
    this.begin(cfg);
    return true;
  }

  begin(cfg) {
    for (const c of cfg.survivors) c.me = c.peer === this.id;
    cfg.killer.me = cfg.killer.peer === this.id;
    cfg.mode = this.isHost ? 'host' : 'client';
    this.inMatch = true; this.started = false; this.go = false;
    this.inputs.clear(); this.events = []; this.priv.clear(); this.loaded = new Set(); this.snaps = []; this.offset = null;
    this.own.epoch = 0; this.own.free = false; this.own.corr.set(0, 0, 0);
    this.builtAt = performance.now();
    if (this.isHost) { for (const id of Object.keys(this.lobby.players)) if (id !== this.id) this.lobby.players[id].ready = false; this.announce(); }
    this.hooks.start(cfg);
  }

  // Back to the room after a vigil (host), for another one with the same people.
  toLobby() {
    if (!this.isHost) return;
    this.inMatch = false;
    this.restore();
    this.pushLobby();
  }

  // ---------------------------------------------------------------- messages between players
  onPeer(from, m) {
    const G = this.G;
    if (this.isHost) {
      const L = this.lobby;
      if (!L || !L.players[from]) return;
      if (m.t === 'i') this.onInput(from, m);
      else if (m.t === 'seat') { if (!this.inMatch) this.seat(from, m.i | 0); }
      else if (m.t === 'perks') { L.players[from].perks = Array.isArray(m.p) ? m.p.filter((x) => typeof x === 'string').slice(0, 4) : []; this.pushLobby(); }
      else if (m.t === 'ready') { L.players[from].ready = !!m.v; this.pushLobby(); }
      else if (m.t === 'ld') this.loaded.add(from);
      else if (m.t === 'sk') this.inputs.get(from)?.skill?.result(m.id, m.r);
      return;
    }
    if (from !== this.hostId) return;
    if (m.t === 'lobby') {
      const was = this.inMatch;
      this.lobby = m.L;
      if (was && !m.m) { this.inMatch = false; this.restore(); }
      this.hooks.lobby(this.lobby, was && !m.m);
    } else if (m.t === 'start') this.begin(m.cfg);
    else if (m.t === 's') this.onSnapshot(m);
    else if (m.t === 'p') for (const e of m.e) this.onEvent(e, true);
  }

  // ---------------------------------------------------------------- host side of a vigil
  remoteInput(peer) {
    const inp = new Input(false);
    inp.skill = new RemoteSkill(this, peer);
    inp.peer = peer; inp.cam = null;
    this.inputs.set(peer, inp);
    return inp;
  }

  onMatchBuilt() {
    const G = this.G;
    if (this.isHost) {
      G.audio = mirrored(G.audioLocal, MIRROR_AUDIO, 'a', (...e) => this.event(...e));
      G.fx = mirrored(G.fxLocal, MIRROR_FX, 'f', (...e) => this.event(...e));
    } else {
      G.audio = muted(G.audioLocal, MIRROR_AUDIO);
      G.fx = muted(G.fxLocal, MIRROR_FX);
      this.toHost({ t: 'ld' });
    }
  }
  // give the game its own ears and dust back
  restore() { const G = this.G; G.audio = G.audioLocal; G.fx = G.fxLocal; }

  // May the opening end? The host waits for every guest to finish loading; a guest waits for the host's word.
  readyToBegin() {
    if (!this.isHost) return this.go;
    if (performance.now() - this.builtAt > 20000) return true;
    for (const id of this.inputs.keys()) if (this.peers.has(id) && !this.loaded.has(id)) return false;
    return true;
  }
  onIntroEnd() { if (this.isHost && !this.started) { this.started = true; this.event('go'); } }

  event(...e) { if (this.isHost && this.inMatch) this.events.push(e); }
  eventTo(peer, ...e) {
    if (!this.isHost || !this.inMatch) return;
    let q = this.priv.get(peer); if (!q) this.priv.set(peer, q = []);
    q.push(e);
  }

  onInput(peer, m) {
    const inp = this.inputs.get(peer);
    if (!inp || !this.inMatch) return;
    const k = m.k | 0;
    inp.keys.clear();
    for (let i = 0; i < HELD.length; i++) if (k & (1 << i)) inp.keys.add(HELD[i]);
    if (Array.isArray(m.p)) for (const c of m.p) if (TAPS[c]) inp.pressed.add(TAPS[c]);
    if (Array.isArray(m.y)) { inp.camYaw = +m.y[0] || 0; inp.camPitch = Math.max(-1.3, Math.min(1.3, +m.y[1] || 0)); }
    if (Array.isArray(m.v)) inp.cam = m.v;
    if (Array.isArray(m.m)) inp.move = { e: m.m[0], x: +m.m[1], z: +m.m[2], yaw: +m.m[3] || 0, sp: +m.m[4] || 0, fl: m.m[5] | 0, fresh: true };
    // their gaze: the camera their machine says they look through
    const s = this.G.survivors.find((x) => x.peer === peer);
    if (s && s.view && inp.cam && Number.isFinite(inp.cam[0])) setView(s.view, s, inp.cam[0], inp.cam[1], inp.cam[2], inp.camYaw, inp.camPitch, inp.cam[3]);
  }

  // Take the position a guest's machine reports for its own avatar, if it is one the rules allow.
  acceptMove(e, inp, sp, dt) {
    const n = e.net, m = inp.move, G = this.G;
    n.free = true;
    if (m && m.fresh && m.e === n.epoch && Number.isFinite(m.x) && Number.isFinite(m.z)) {
      m.fresh = false;
      const dx = m.x - e.pos.x, dz = m.z - e.pos.z, d = Math.hypot(dx, dz);
      const el = Math.min(0.6, Math.max(dt, G.time - n.t)); n.t = G.time;
      const maxD = (sp * 1.2 + 0.4) * el + 0.3;
      let bump = false;
      if (d <= maxD) { e.pos.x = m.x; e.pos.z = m.z; } else { e.pos.x += dx / d * maxD; e.pos.z += dz / d * maxD; bump = true; }
      e.pos.y = 0;
      G.world.collide(e.pos, e === G.killer ? 0.42 : 0.32, e === G.killer ? G.killerCircles() : G.agentCircles(e));
      if (Math.hypot(e.pos.x - m.x, e.pos.z - m.z) > 0.3) bump = true;
      if (bump) n.epoch++;
      e.yaw = m.yaw;
      e.speed = m.fl & 4 ? Math.min(m.sp, sp * 1.05) : 0;
      if (e !== G.killer) { e.backpedal = !!(m.fl & 2); }
      n.last = G.time;
    } else if (G.time - (n.last || 0) > 0.4) e.speed = 0;
    n.pos.copy(e.pos);
    return e.speed > 0.05;
  }

  hostPre(dt) {
    const G = this.G;
    for (const s of G.survivors) if (s.net) s.net.free = false;
    if (G.killer.net) G.killer.net.free = false;
    for (const inp of this.inputs.values()) inp.skill?.expire();
  }

  hostPost(dt) {
    const G = this.G;
    // whoever the host moved or held this step must take the host's word for where they are
    const settle = (e) => { const n = e.net; if (!n) return; if (!n.free || e.pos.distanceToSquared(n.pos) > 1e-4) n.epoch++; };
    for (const s of G.survivors) settle(s);
    settle(G.killer);
    for (const inp of this.inputs.values()) inp.pressed.clear();
    this.snapT -= dt;
    if (this.snapT > 0 && !this.events.some((e) => e[0] === 'go' || e[0] === 'over')) return;
    this.snapT = SNAP_DT;
    this.toAll(encodeSnapshot(G, this.events));
    this.events = [];
    for (const [peer, q] of this.priv) if (q.length) { this.raw(peer, { t: 'p', e: q }); this.priv.set(peer, []); }
  }

  // A guest left mid-vigil: the game plays their part from here.
  peerGone(peer, name) {
    const G = this.G;
    this.inputs.delete(peer);
    const s = G.survivors.find((x) => x.peer === peer);
    if (s) { s.input = null; s.net = null; s.view = null; s.peer = null; s.human = false; s.playerName = ''; s.cancelAction(); }
    if (G.killer.peer === peer) { G.killer.input = null; G.killer.net = null; G.killer.peer = null; G.killer.human = false; G.killer.playerName = ''; }
    G.toast(`${name} left the vigil`, 'warn');
    G.checkAllDone();
  }

  matchOver() {
    const G = this.G, res = {};
    for (const e of [...G.survivors, G.killer]) if (e.peer && e.score) res[e.peer] = { score: e.score, log: e.scoreLog };
    this.event('over', res);
  }

  // ---------------------------------------------------------------- guest side of a vigil
  onSnapshot(snap) {
    if (!this.inMatch || !this.G.killer) return;
    const now = performance.now() / 1000;
    const off = now - snap.T;
    this.offset = this.offset === null ? off : Math.min(off, this.offset + 0.002); // slowly forget a lucky fast packet
    this.snaps.push(snap);
    if (this.snaps.length > 12) this.snaps.shift();
    applySnapshot(this.G, snap, this);
    for (const e of snap.e) this.onEvent(e, false);
  }

  onEvent(e, priv) {
    const G = this.G, name = e[0];
    if (name === 'a') { const f = G.audioLocal[e[1]]; if (f && MIRROR_AUDIO.has(e[1])) f.apply(G.audioLocal, e.slice(2).map(decArg)); }
    else if (name === 'f') { const f = G.fxLocal[e[1]]; if (f && MIRROR_FX.has(e[1])) f.apply(G.fxLocal, e.slice(2).map(decArg)); }
    else if (name === 'toast') { if (!e[3] || e[3] === G.role) G.ui.toast(String(e[1]), String(e[2] || '')); }
    else if (name === 'go') { this.go = true; G.endIntro(); }
    else if (name === 'over') { const mine = e[1] && e[1][this.id]; if (mine && G.me) { G.me.score = mine.score; G.me.scoreLog = mine.log; } G.over = true; if (G.endT === null) G.endT = 3; }
    else if (name === 'reveal') G.revealShow(e[1], e[2], e[3]);
    else if (name === 'lightning') { if (G.weather) { G.weather.flashes = e[1]; G.weather.flashT = 0; } G.lightningSeen(); }
    else if (name === 'crow') G.crows?.scare(e[1], { x: e[2], z: e[3] }, false);
    else if (name === 'heard') G.killerHeardShow?.(e[1], e[2], e[3]);
    else if (name === 'ping') G.pingShow(e[1], e[2], e[3], e[4]);
    else if (name === 'scr') { if (priv) G.fxLocal.scratch(e[1], e[2], e[3]); }
    else if (!priv) return;
    else if (name === 'sfx') { if (['itemUse', 'escapeChord'].includes(e[1])) G.audioLocal[e[1]](); }
    else if (name === 'feel') G.feel(G.me, e[1]);
    else if (name === 'sealed') G.sealedLocal(e[1]);
    else if (name === 'skill') G.ui.skill.start((r) => this.toHost({ t: 'sk', id: e[1], r }), e[2] || {});
    else if (name === 'skillCancel') G.ui.skill.cancel();
  }

  // Each frame: place everything between the two snapshots that bracket "a moment ago".
  clientPre(dt, held) {
    const n = this.snaps.length;
    if (!n) return;
    const rt = performance.now() / 1000 - this.offset - RENDER_DELAY;
    let i = n - 1;
    while (i > 0 && this.snaps[i - 1].T > rt) i--;
    const b = this.snaps[i], a = this.snaps[Math.max(0, i - 1)];
    const t = b.T > a.T ? Math.max(0, Math.min(1, (rt - a.T) / (b.T - a.T))) : 1;
    applyMotion(this.G, a, b, t, this, held);
  }

  // Each frame: tell the host what this player's hands and eyes are doing.
  clientPost(dt, inp, camera) {
    for (const c of inp.pressed) { const i = TAPS.indexOf(c); if (i >= 0 && !this.taps.includes(i)) this.taps.push(i); }
    this.inputT -= dt;
    if (this.inputT > 0 && !this.taps.length) return;
    this.inputT = INPUT_DT;
    const G = this.G, me = G.me;
    let k = 0;
    const keys = inp.keys;
    const down = [keys.has('KeyW') || keys.has('ArrowUp'), keys.has('KeyS') || keys.has('ArrowDown'), keys.has('KeyA'), keys.has('KeyD'), inp.sprint, keys.has('KeyC') || keys.has('ControlLeft') || keys.has('ControlRight'),
      inp.hold, keys.has('KeyR'), keys.has('KeyF') || inp.rightDown, keys.has('KeyQ')];
    for (let i = 0; i < down.length; i++) if (down[i]) k |= 1 << i;
    const r = (x) => Math.round(x * 100) / 100;
    const moving = me && me.speed > 0.05;
    const msg = { t: 'i', k, y: [r(inp.camYaw), r(inp.camPitch)], v: [r(camera.position.x), r(camera.position.y), r(camera.position.z), r(camera.aspect)] };
    if (this.taps.length) { msg.p = this.taps; this.taps = []; }
    if (me && this.own.free) msg.m = [this.own.epoch, r(me.pos.x), r(me.pos.z), r(me.yaw), r(me.speed), (me.crouch ? 1 : 0) | (me.backpedal ? 2 : 0) | (moving ? 4 : 0)];
    this.toHost(msg);
  }
}
