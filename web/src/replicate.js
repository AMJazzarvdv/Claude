// What the host tells the guests about the vigil, about fifteen times a
// second: a snapshot of every moving part, plus the one-off events (sounds,
// dust, messages) since the last one. Guests keep the same objects the host
// has and dress them from these snapshots.
import * as THREE from 'three';
import { RELIQUARY_POSES } from './models.js';
import { Sentinel } from './killer.js';
import { Hatch, V } from './entities.js';
import { Votive, buildItemModel } from './items.js';
import { setView } from './control.js';

const HEALTH = ['healthy', 'injured', 'downed', 'hooked', 'carried', 'dead', 'escaped'];
const ACTIONS = ['', 'ring', 'heal', 'selfheal', 'unhook', 'gate', 'shroud', 'bandage', 'search', 'drop', 'hatch'];
const KACTIONS = ['', 'swing', 'pickup', 'canonize', 'hook', 'break', 'vault', 'kick', 'plant'];
const KSTATES = ['patrol', 'chase', 'search', 'investigate', 'carry'];
const ITEM_IDS = ['', 'mirror', 'candle', 'holy', 'bandage'];
const POSES = Object.keys(RELIQUARY_POSES);
const PSTATE = { up: 'u', down: 'd', broken: 'b' }, PNAME = { u: 'up', d: 'down', b: 'broken' };

const r1 = (x) => Math.round(x * 10) / 10;
const r2 = (x) => Math.round(x * 100) / 100;
const r3 = (x) => Math.round(x * 1000) / 1000;
const ix = (list, v) => Math.max(0, list.indexOf(v));

// Sounds and effects the simulation fires that every player should get.
export const MIRROR_AUDIO = new Set(['toll', 'chime', 'creak', 'scream', 'groan', 'hit', 'palletDrop', 'palletBreak', 'vault', 'crack', 'chains', 'gurgle', 'boom', 'stoneShift', 'settle', 'ironGate', 'choir', 'ascend', 'tollCharge', 'tollRelease', 'fizzle', 'shatter', 'splash', 'thunder', 'cawAt', 'flap', 'chestCreak', 'chestOpen']);
export const MIRROR_FX = new Set(['dust', 'splinters', 'blood', 'sink', 'crack', 'shockwave', 'debris', 'splash']);

// Vector3 <-> [x, y, z] for event arguments.
export const encArg = (a) => (a && typeof a === 'object' && 'x' in a && 'z' in a ? [r2(a.x), r2(a.y || 0), r2(a.z)] : typeof a === 'number' ? r3(a) : a);
export const decArg = (a) => (Array.isArray(a) && a.length === 3 && typeof a[0] === 'number' ? new THREE.Vector3(a[0], a[1], a[2]) : a);

// The host: wrap an engine so chosen calls are also recorded as events.
export function mirrored(target, names, tag, record) {
  return new Proxy(target, {
    get(t, p) {
      const v = t[p];
      if (typeof v !== 'function') return v;
      if (!names.has(p)) return v.bind(t);
      return (...args) => { record(tag, p, ...args.map(encArg)); return v.apply(t, args); };
    },
  });
}
// A guest: the same calls made by local code are dropped (the host's will arrive).
export function muted(target, names) {
  return new Proxy(target, {
    get(t, p) {
      const v = t[p];
      if (typeof v !== 'function') return v;
      return names.has(p) ? () => {} : v.bind(t);
    },
  });
}

// ---------------------------------------------------------------- encode (host)
function encSurvivor(G, s) {
  const a = s.action;
  let aref = -1;
  if (a) {
    if (a.bell) aref = a.bell.id; else if (a.gate) aref = a.gate.id; else if (a.chest) aref = a.chest.id;
    else if (a.target) aref = a.target === G.killer ? 99 : G.survivors.includes(a.target) ? G.survivors.indexOf(a.target) : 100 + a.target.id;
  }
  const fl = (s.watching ? 1 : 0) | (s.crouch ? 2 : 0) | (s.backpedal ? 4 : 0) | (s.mirrorUp ? 8 : 0) | (s.canonizing ? 16 : 0) | (s.canonized ? 32 : 0)
    | (s.vault ? 64 : 0) | (s.hareBoost ? 128 : 0) | (s.secondWakeUsed ? 256 : 0) | (s.model.visible ? 512 : 0) | (s.net && s.net.free ? 1024 : 0);
  const out = [r2(s.pos.x), r2(s.pos.y), r2(s.pos.z), r2(s.yaw), ix(HEALTH, s.health), fl, r1(s.speed), r1(s.resolve), r2(Math.max(0, s.blinkT)), r2(s.blinkDur),
    a ? ix(ACTIONS, a.type) : 0, a ? r2(a.t) : 0, aref, s.hookCount, s.hookPhase, r1(s.hookTimer), s.post ? s.post.id : -1, r1(s.bleed), r3(s.healProg), s.healers.size,
    ix(ITEM_IDS, s.item || ''), r1(s.itemCharges || 0), r2(s.wiggle), r2(s.stone || 0), r2(s.throwT || 0), r1(s.boost), r1(s.exhausted), r1(s.noBlink), s.escapeAttempts,
    s.net ? s.net.epoch : 0];
  const v = s.view;
  if (v && v.ready && s.human) out.push(r2(v.cam.position.x), r2(v.cam.position.y), r2(v.cam.position.z), r2(v.yaw), r2(v.pitch), r2(v.aspect));
  else if (s.human) out.push(0, 0, 0, r2(s.lookYaw || 0), r2(s.lookPitch || 0), 0);
  return out;
}

function encKiller(G, k) {
  const a = k.action;
  const fl = (k.petrified ? 1 : 0) | (k.lament ? 2 : 0) | (k.moving ? 4 : 0) | (k.veilT > 0 ? 8 : 0) | (k.net && k.net.free ? 16 : 0);
  return [r2(k.pos.x), r2(k.pos.y), r2(k.pos.z), r2(k.yaw), k.tier, fl, r1(k.speed), k.toll ? r2(k.toll.t) : -1, r1(k.tolledT || 0), ix(POSES, k.poseName),
    r2(k.lookYaw), r2(k.lookPitch), a ? ix(KACTIONS, a.type) : 0, a ? r2(a.t) : 0, a ? r2(a.dur || 1) : 0, k.carrying ? G.survivors.indexOf(k.carrying) : -1,
    k.target ? G.survivors.indexOf(k.target) : -1, ix(KSTATES, k.state), r1(Math.max(0, k.stunT)), r1(Math.max(0, k.transferCD)), r1(Math.max(0, k.plantCD)),
    r1(k.cooldown), r1(k.frozenT), k.net ? k.net.epoch : 0, k.watchers, r1(k.releaseT || 0), r2(k.camYaw || 0), r2(k.camPitch || 0)];
}

export function encodeSnapshot(G, events) {
  const k = G.killer, c = G.candle;
  return {
    t: 's', T: r3(G.time),
    g: [G.bellsRung, G.gatesPowered ? 1 : 0, G.collapseT === null ? -1 : r1(G.collapseT), G.hatch ? 1 : 0, G.hookEvents, G.deaths, G.over ? 1 : 0],
    S: G.survivors.map((s) => encSurvivor(G, s)),
    K: encKiller(G, k),
    B: G.bells.map((b) => [r3(b.progress), (b.done ? 1 : 0) | (b.locked ? 2 : 0) | (b.regress ? 4 : 0), b.ringers.size]),
    P: G.pallets.map((p) => PSTATE[p.state]).join(''),
    G: G.gates.map((g) => [r3(g.progress), g.open ? 1 : 0]),
    C: G.chests.map((ch) => [r2(ch.progress), ch.opened ? 1 : 0]),
    Z: G.sentinels.map((st) => [st.id, r2(st.pos.x), r2(st.pos.z), r2(st.yaw), ix(POSES, st.pose), st.shroud > 0 ? 1 : 0, r2(st.lookYaw), r2(st.lookPitch)]),
    F: G.projectiles.filter((p) => !p.done).map((p) => [p.id, r2(p.pos.x), r2(p.pos.y), r2(p.pos.z)]),
    V: c ? [r2(c.pos.x), r2(c.pos.z), r1(c.t)] : 0,
    e: events,
  };
}

// ---------------------------------------------------------------- apply (guest)
// The parts of a snapshot that are states rather than motion, applied the moment it arrives.
export function applySnapshot(G, snap, net) {
  const g = snap.g, k = G.killer, me = G.me;
  G.bellsRung = g[0]; G.gatesPowered = !!g[1]; G.collapseT = g[2] < 0 ? null : g[2]; G.hookEvents = g[4]; G.deaths = g[5];
  if (g[3] && !G.hatch) G.hatch = new Hatch(G, G.world.hatchSpot);
  if (Math.abs(G.time - snap.T) > 0.5) G.time = snap.T;

  for (const p of G.posts) p.occupant = null;
  snap.S.forEach((d, i) => {
    const s = G.survivors[i]; if (!s) return;
    const mine = s === me, fl = d[5];
    const was = s.health;
    s.health = HEALTH[d[4]];
    s.watching = !!(fl & 1); s.mirrorUp = !!(fl & 8); s.canonizing = !!(fl & 16);
    s.vault = fl & 64 ? (s.vault || { kind: 'window' }) : null;
    s.hareBoost = !!(fl & 128); s.secondWakeUsed = !!(fl & 256);
    const free = !!(fl & 1024);
    // this machine's own avatar moves by its own hand while the host lets it
    if (!(mine && free)) { s.crouch = !!(fl & 2); s.backpedal = !!(fl & 4); s.speed = d[6]; }
    s.resolve = d[7];
    if (d[8] > 0 && s.blinkT <= 0 && mine) { G.audioLocal.blink(); G.onPlayerBlink(); }
    s.blinkT = d[8]; s.blinkDur = d[9];
    const at = ACTIONS[d[10]];
    if (!at) s.action = null;
    else {
      const a = s.action && s.action.type === at ? s.action : (s.action = { type: at, t: 0 });
      a.t = d[11];
      const ref = d[12];
      a.bell = at === 'ring' ? G.bells[ref] : undefined;
      a.gate = at === 'gate' ? G.gates[ref] : undefined;
      a.chest = at === 'search' ? G.chests[ref] : undefined;
      a.target = at === 'heal' || at === 'unhook' ? G.survivors[ref] : at === 'shroud' ? (ref === 99 ? k : G.sentinels.find((st) => st.id === ref - 100)) : undefined;
    }
    s.hookCount = d[13]; s.hookPhase = d[14]; s.hookTimer = d[15];
    s.post = d[16] >= 0 ? G.posts[d[16]] : null;
    if (s.post && s.health === 'hooked') s.post.occupant = s;
    s.bleed = d[17]; s.healProg = d[18]; s.nHeal = d[19];
    const item = ITEM_IDS[d[20]] || null;
    if (item !== s.item) { s.item = item; G.attachHeld(s); if (mine) G.updateItemHud(); }
    s.itemCharges = d[21]; s.wiggle = d[22];
    if (d[23] !== (s.stone || 0)) s.setStone(d[23]);
    s.throwT = Math.max(s.throwT || 0, d[24]) > 0 && d[24] > 0 ? d[24] : 0;
    s.boost = d[25]; s.exhausted = d[26]; s.noBlink = d[27]; s.escapeAttempts = d[28];
    const vis = !!(fl & 512);
    if (s.model.visible !== vis) { s.model.visible = vis; if (!vis) s.aura.visible = false; }
    const canon = !!(fl & 32);
    if (canon && !s.canonized) { s.canonized = true; s.setStone(1); s.pos.set(d[0], d[1], d[2]); s.yaw = d[3]; s.syncModel(0); G.addMemorial(s); }
    if (mine) net.own.epochSeen(d[29], free, d);
    if (d.length > 30) {
      if (s.view && !mine && d[35]) setView(s.view, { pos: V(d[0], d[1], d[2]), crouch: !!(fl & 2) }, d[30], d[31], d[32], d[33], d[34], d[35]);
      if (!mine) { s.lookYaw = Math.max(-1.1, Math.min(1.1, angle(d[33] - d[3]))); s.lookPitch = Math.max(-0.6, Math.min(0.6, -d[34])); }
    }
    if (was !== s.health && (s.health === 'dead' || s.health === 'escaped') && !canon) s.aura.visible = false;
  });
  if (G.memorials.some((m) => !m.model.visible)) G.memorials = G.memorials.filter((m) => m.model.visible);

  // the Reliquary
  {
    const d = snap.K, fl = d[5];
    if (d[4] !== k.tier) { const up = d[4] > k.tier; k.showTier(d[4]); if (up) G.ascendFelt(k, d[4]); }
    k.petrified = !!(fl & 1); k.lament = !!(fl & 2);
    k.veilT = fl & 8 ? 1 : 0; k.cloth.visible = !!(fl & 8);
    const mine = k === me, free = !!(fl & 16);
    if (!(mine && free)) { k.moving = !!(fl & 4); k.speed = d[6]; }
    k.toll = d[7] >= 0 ? { t: d[7], dur: 1.8, lost: 0 } : null;
    k.tolledT = d[8];
    k.netPose = POSES[d[9]] || 'tilt'; k.netLook = [d[10], d[11]];
    const at = KACTIONS[d[12]];
    k.action = at ? { type: at, t: d[13], dur: d[14] } : null;
    k.carrying = d[15] >= 0 ? G.survivors[d[15]] : null;
    k.target = d[16] >= 0 ? G.survivors[d[16]] : null;
    k.state = KSTATES[d[17]];
    k.stunT = d[18]; k.transferCD = d[19]; k.plantCD = d[20]; k.cooldown = d[21]; k.frozenT = d[22]; k.watchers = d[24]; k.releaseT = d[25];
    if (!mine) { k.camYaw = d[26]; k.camPitch = d[27]; }
    if (mine) net.own.epochSeen(d[23], free, d);
  }

  snap.B.forEach((d, i) => {
    const b = G.bells[i]; if (!b) return;
    b.progress = d[0]; b.nRing = d[2];
    const done = !!(d[1] & 1);
    if (done && !b.done) b.doneSwing = 0.7;
    b.done = done; b.locked = !!(d[1] & 2); b.regress = !!(d[1] & 4);
  });
  for (let i = 0; i < G.pallets.length; i++) G.pallets[i].setNet(PNAME[snap.P[i]] || 'up');
  snap.G.forEach((d, i) => {
    const gt = G.gates[i]; if (!gt) return;
    gt.progress = d[0];
    if (d[1] && !gt.open) { gt.open = true; G.world.openGateNav(gt.id); }
  });
  snap.C.forEach((d, i) => { const c = G.chests[i]; if (c) { c.progress = d[0]; c.opened = !!d[1]; } });

  // Sentinels come and go
  const seen = new Set();
  for (const d of snap.Z) {
    seen.add(d[0]);
    let st = G.sentinels.find((x) => x.id === d[0]);
    const pose = POSES[d[4]] || 'pray';
    if (!st) { st = new Sentinel(G, V(d[1], 0, d[2]), d[3], pose); st.id = d[0]; G.sentinels.push(st); }
    st.net = d;
  }
  for (const st of G.sentinels) if (!seen.has(st.id)) { G.world.root.remove(st.model); G.world.root.remove(st.cloth); }
  if (G.sentinels.some((st) => !seen.has(st.id))) G.sentinels = G.sentinels.filter((st) => seen.has(st.id));

  // thrown flasks
  const fl = G.netFlasks || (G.netFlasks = new Map());
  const live = new Set();
  for (const d of snap.F) {
    live.add(d[0]);
    let f = fl.get(d[0]);
    if (!f) { f = { model: buildItemModel('holy', G.M), to: V(d[1], d[2], d[3]) }; f.model.position.copy(f.to); G.scene.add(f.model); fl.set(d[0], f); }
    f.to.set(d[1], d[2], d[3]);
  }
  for (const [id, f] of fl) if (!live.has(id)) { G.scene.remove(f.model); fl.delete(id); }

  // the votive candle
  const cv = snap.V;
  if (!cv && G.candle) { G.candle.dispose(); G.candle = null; }
  else if (cv) {
    if (G.candle && (Math.abs(G.candle.pos.x - cv[0]) > 0.1 || Math.abs(G.candle.pos.z - cv[1]) > 0.1)) { G.candle.dispose(); G.candle = null; }
    if (!G.candle) G.candle = new Votive(G, V(cv[0], 0, cv[1]));
    G.candle.t = cv[2];
  }
}

const angle = (a) => { while (a > Math.PI) a -= Math.PI * 2; while (a < -Math.PI) a += Math.PI * 2; return a; };
const lerpAngle = (a, b, t) => a + angle(b - a) * t;

// Motion between two snapshots (a = older, b = newer, t in 0..1), applied every frame.
// `held`: this player is looking at the statue right now, so on this screen it must not stir.
export function applyMotion(G, a, b, t, net, held) {
  const me = G.me, own = net.own;
  for (let i = 0; i < G.survivors.length; i++) {
    const s = G.survivors[i], da = a.S[i], db = b.S[i];
    if (!da || !db || (s === me && own.free)) continue;
    if (!s.alive && s.canonized) continue;
    s.pos.set(da[0] + (db[0] - da[0]) * t, da[1] + (db[1] - da[1]) * t, da[2] + (db[2] - da[2]) * t);
    s.yaw = lerpAngle(da[3], db[3], t);
  }
  const k = G.killer;
  if (!(k === me && own.free) && !held) {
    const da = a.K, db = b.K;
    k.pos.set(da[0] + (db[0] - da[0]) * t, da[1] + (db[1] - da[1]) * t, da[2] + (db[2] - da[2]) * t);
    k.yaw = lerpAngle(da[3], db[3], t);
    if (k.netPose) k.setPose(k.netPose);
    if (k.netLook) k.look(k.netLook[0], k.netLook[1]);
  }
  for (const st of G.sentinels) {
    const d = st.net; if (!d) continue;
    st.shroud = d[5] ? 1 : 0; st.cloth.visible = !!d[5];
    if (me !== k && me && me.alive && G.canSee(me, st.samplePoints())) continue; // it does not stir while you look at it
    const pose = POSES[d[4]] || 'pray';
    if (Math.abs(st.pos.x - d[1]) > 0.01 || Math.abs(st.pos.z - d[2]) > 0.01 || st.pose !== pose || Math.abs(st.yaw - d[3]) > 0.01) st.moveTo({ x: d[1], z: d[2] }, d[3], pose);
    if (st.lookYaw !== d[6] || st.lookPitch !== d[7]) st.look(d[6], d[7]);
  }
  if (G.netFlasks) for (const f of G.netFlasks.values()) {
    f.model.position.lerp(f.to, 0.5);
    f.model.rotation.x += 0.15; f.model.rotation.z += 0.08;
    G.fxLocal.holyGlow(f.model.position);
  }
}
