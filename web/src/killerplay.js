// Playing the Reliquary yourself. You look out through its eyes; you move
// only while no survivor can see you; everything it does as an AI is here
// under your hands: strike, carry and bind, canonize, break pallets, silence
// bells, plant Sentinels and step through them.
import * as THREE from 'three';
import { V, angDiff, yawTo, flatDist } from './entities.js';
import { clamp } from './noise.js';

const $ = (id) => document.getElementById(id);
const tmp = new THREE.Vector3();

export const KillerControl = {
  // How fast the stone moves right now (the same rule for the host and for a guest predicting itself).
  killerSpeed(k, inp) {
    const mult = (this.diff?.killerSpeed ?? 1) * (1 + (k.tier - 1) * 0.05);
    if (k.cooldown > 0) return 1.4;
    if (k.carrying) return 3.9;
    let sp = 5.0 * mult;
    // it surges when prey is close ahead
    const f = this.killerFocus(k, inp, 6.5, 0.9);
    if (f) sp = 7.2 * mult;
    if (k.releaseT > 0) sp = Math.max(sp, 8.2 + (k.tier - 1) * 0.4);
    return sp;
  },

  // The survivor in front of the Reliquary's eyes, within range and a cone (radians).
  killerFocus(k, inp, range, cone, standingOnly = false) {
    let best = null, bd = range;
    for (const s of this.survivors) {
      if (!s.alive || s.health === 'hooked' || s.health === 'carried') continue;
      if (standingOnly && !s.standing) continue;
      const d = flatDist(s.pos, k.pos);
      if (d >= bd || Math.abs(angDiff(inp.camYaw, yawTo(k.pos, s.pos))) > cone) continue;
      if (!this.world.lineOfSight(k.eye(), s.chest())) continue;
      bd = d; best = s;
    }
    return best;
  },

  // What the Reliquary could do right now.
  killerOptions(k, inp) {
    const o = { e: null, space: null, f: null, q: null };
    const fwd = V(Math.sin(inp.camYaw), 0, Math.cos(inp.camYaw));
    if (k.carrying) {
      let best = null, bd = 2.2;
      for (const p of this.posts) { if (p.occupant) continue; const d = flatDist(V(p.hang.x, 0, p.hang.z), k.pos); if (d < bd) { bd = d; best = p; } }
      if (best) o.e = { text: 'Bind them to the post', fn: () => { k.yaw = yawTo(k.pos, best.hang); k.action = { type: 'hook', t: 0, dur: 1.0, post: best }; } };
      return o;
    }
    let bd = 1.8;
    for (const s of this.survivors) {
      if (s.health !== 'downed') continue;
      const d = flatDist(s.pos, k.pos);
      if (d >= bd) continue;
      bd = d;
      o.e = s.hookCount >= 2
        ? { text: `Canonize ${s.def.short}`, fn: () => { k.yaw = yawTo(k.pos, s.pos); k.action = { type: 'canonize', t: 0, dur: 3.2, target: s }; s.beginCanonize(); this.onCanonizeStart(s); } }
        : { text: `Lift ${s.def.short}`, fn: () => { k.action = { type: 'pickup', t: 0, dur: 1.1, target: s }; } };
    }
    if (!o.e) for (const p of this.pallets) {
      if (p.state !== 'down' || p.lateral(k.pos) > p.w / 2 + 0.4 || p.normalDist(k.pos) > 1.5) continue;
      o.e = { text: 'Break the pallet', fn: () => { k.action = { type: 'break', t: 0, dur: 2.4, pallet: p }; this.audio.settle(p.center.clone().setY(0.8)); } };
    }
    if (!o.e) for (const b of this.bells) {
      if (b.done || b.progress < 0.05 || b.regress || b.ringers.size || flatDist(b.pos, k.pos) > 3) continue;
      o.e = { text: 'Silence the bell', fn: () => { k.yaw = yawTo(k.pos, b.pos); k.action = { type: 'kick', t: 0, dur: 1.6, bell: b }; } };
    }
    for (const w of this.world.windows) {
      const sd = (k.pos.x - w.x) * w.nx + (k.pos.z - w.z) * w.nz, ld = Math.abs((k.pos.x - w.x) * w.ax + (k.pos.z - w.z) * w.az);
      if (Math.abs(sd) > 1.3 || ld > w.halfW + 0.3 || (w.x - k.pos.x) * fwd.x + (w.z - k.pos.z) * fwd.z < 0.1) continue;
      const side = Math.sign(sd || 1);
      o.space = { text: 'Climb through', fn: () => { k.yaw = Math.atan2(-side * w.nx, -side * w.nz); k.action = { type: 'vault', t: 0, dur: 1.5, from: k.pos.clone(), to: V(w.x - w.nx * side * 0.9, 0, w.z - w.nz * side * 0.9) }; } };
    }
    if (k.plantCD <= 0 && this.sentinels.length < 6) o.q = { text: 'Leave a Sentinel', fn: () => { k.action = { type: 'plant', t: 0, dur: 1.5 }; } };
    // step into the statue nearest the centre of your view, if nobody is looking at it
    if (k.transferCD <= 0) {
      const body = this.killerTransferTarget(k, inp);
      if (body) o.f = { text: body.isMemorial ? 'Step out of their statue' : 'Step into the Sentinel', body, fn: () => { k.transferInto(body, body.pos.clone().addScaledVector(fwd, 2)); k.camSnap = true; } };
    }
    return o;
  },

  killerTransferTarget(k, inp) {
    const look = inp.lookDir(tmp.set(0, 0, 0)).clone();
    let best = null, ba = 0.3;
    const eye = k.eye();
    for (const st of [...this.sentinels, ...this.memorials]) {
      if (st.shroud > 0) continue;
      const to = V(st.pos.x - eye.x, 1.4 - eye.y, st.pos.z - eye.z), d = to.length();
      if (d < 4) continue;
      const a = Math.acos(clamp(to.dot(look) / d, -1, 1));
      if (a < ba && !this.isWatched(st.samplePoints())) { ba = a; best = st; }
    }
    return best;
  },

  killerPrompt(k, inp, o) {
    const parts = [];
    if (k.carrying && !o.e) parts.push('Carry them to a Weeping Post');
    if (o.e) parts.push(`<kbd>E</kbd> ${o.e.text}`);
    if (o.space) parts.push(`<kbd>Space</kbd> ${o.space.text}`);
    if (o.f) parts.push(`<kbd>F</kbd> ${o.f.text}`);
    inp.promptText = parts.join('&nbsp;&nbsp;&nbsp;'); inp.promptProg = null; inp.promptHeal = false;
  },

  killerActionPrompt(k, inp) {
    const a = k.action;
    inp.promptText = { swing: '', pickup: 'Lifting', hook: 'Binding', canonize: 'Canonizing', break: 'Breaking', vault: 'Climbing', kick: 'Silencing', plant: 'Leaving a Sentinel' }[a.type] || '';
    inp.promptProg = a.type === 'swing' ? null : a.t / (a.dur || 1); inp.promptHeal = false;
  },

  // The Reliquary under a person's hands (runs where the rules run; only ever called while it is unseen and unstunned).
  killerControl(k, dt, inp) {
    const pressed = inp.pressed;
    k.camYaw = inp.camYaw; k.camPitch = inp.camPitch;
    if (k.action) { k.doAction(dt); if (k.action) this.killerActionPrompt(k, inp); else { inp.promptText = ''; inp.promptProg = null; } return; }
    const o = this.killerOptions(k, inp);
    this.killerPrompt(k, inp, o);
    if (pressed.has('KeyE') && o.e) return o.e.fn();
    if (pressed.has('Space') && o.space) return o.space.fn();
    if (pressed.has('KeyQ') && o.q) return o.q.fn();
    if (pressed.has('KeyF') && o.f) return o.f.fn();
    if (pressed.has('Mouse0') && k.cooldown <= 0 && !k.carrying) {
      const t = this.killerFocus(k, inp, 2.7, 1.1, true);
      if (t) k.yaw = yawTo(k.pos, t.pos);
      k.action = { type: 'swing', t: 0, dur: 0.28, target: t && !t.vault ? t : null };
      return;
    }
    // what it is hunting (drives the chase music survivors hear, and its pose)
    const prey = this.killerFocus(k, inp, 14, 1.0);
    k.target = prey; k.state = k.carrying ? 'carry' : prey ? 'chase' : 'patrol';
    const dir = inp.moveDir(V()), sp = this.killerSpeed(k, inp);
    const from = V(k.pos.x, 0, k.pos.z);
    if (inp.local) { if (dir.lengthSq() > 0) k.step(dir, sp, dt); k.yaw = inp.camYaw; }
    else {
      k.moving = this.net.acceptMove(k, inp, sp, dt);
      const mv = flatDist(from, k.pos);
      k.trailAcc += mv;
      if (k.trailAcc > 1.1) { k.trailAcc = 0; k.trailSide = -k.trailSide; this.fx.crack(k.pos.x + Math.cos(k.yaw) * 0.2 * k.trailSide, k.pos.z - Math.sin(k.yaw) * 0.2 * k.trailSide, Math.random() * 6.28, 0.7 + Math.random() * 0.5); }
    }
  },

  // A guest playing the Reliquary: it moves itself at once (the host checks the result)
  // and stops itself the moment it can tell someone is looking.
  clientKillerControl(k, dt, inp) {
    const own = this.net.own;
    k.camYaw = inp.camYaw; k.camPitch = inp.camPitch;
    inp.lockT = Math.max(0, inp.lockT - dt);
    if (own.corr.lengthSq() > 1e-6) { const c = Math.min(1, dt * 14); k.pos.addScaledVector(own.corr, c); own.corr.multiplyScalar(1 - c); }
    if (k.action) { this.killerActionPrompt(k, inp); return; }
    const o = this.killerOptions(k, inp);
    this.killerPrompt(k, inp, o);
    const taps = inp.pressed;
    if ((taps.has('KeyE') && o.e) || (taps.has('Space') && o.space) || (taps.has('KeyQ') && o.q) || (taps.has('KeyF') && o.f) || taps.has('Mouse0')) inp.lockT = 0.3;
    this.killerSeen = this.isWatched(k.samplePoints());
    if (!own.free || k.petrified || this.killerSeen || k.stunT > 0 || inp.lockT > 0) { if (own.free) { k.moving = false; k.speed = 0; } return; }
    const dir = inp.moveDir(V()), sp = this.killerSpeed(k, inp);
    k.moving = false; k.speed = 0;
    if (dir.lengthSq() > 0) k.step(dir, sp, dt);
    k.yaw = inp.camYaw;
  },

  // First person, from behind the mask.
  killerCamera(dt, camera) {
    const k = this.killer;
    const cp = Math.cos(this.camPitch);
    const look = tmp.set(Math.sin(this.camYaw) * cp, Math.sin(this.camPitch), Math.cos(this.camYaw) * cp);
    const eye = this.camPos;
    const want = V(k.pos.x, k.pos.y + 2.12, k.pos.z);
    if (k.camSnap || eye.distanceToSquared(want) > 9) { eye.copy(want); k.camSnap = false; } else eye.lerp(want, 1 - Math.exp(-dt * 40));
    camera.position.copy(eye);
    const shake = this.hitShake * 0.05 + (k.stunT > 0 ? 0.01 : 0);
    this.hitShake = Math.max(0, this.hitShake - dt * 2.5);
    camera.position.x += (Math.random() - 0.5) * shake; camera.position.y += (Math.random() - 0.5) * shake;
    this.fovKick -= Math.sign(this.fovKick) * Math.min(Math.abs(this.fovKick), dt * 9);
    const fov = 72 + (k.moving && k.speed > 6.5 ? 5 : 0) + this.fovKick;
    if (Math.abs(camera.fov - fov) > 0.01) { camera.fov += (fov - camera.fov) * Math.min(1, dt * 6); camera.updateProjectionMatrix(); }
    camera.lookAt(eye.x + look.x, eye.y + look.y, eye.z + look.z);
    camera.updateMatrixWorld();
    this.audioLocal.setListener(camera.position, look);
  },

  // A sound reached the Reliquary: a person playing it gets a mark on screen.
  killerHeard(pos, r, type) {
    const k = this.killer;
    if (!k || !k.human || type === 'toll' || flatDist(pos, k.pos) > r) return;
    if (type === 'bell' && this.time - (this.bellHeardT || -9) < 6) return;
    if (type === 'bell') this.bellHeardT = this.time;
    if (k === this.me) this.killerHeardShow(pos.x, pos.z, type);
    else if (k.peer) this.net?.eventTo(k.peer, 'heard', Math.round(pos.x * 10) / 10, Math.round(pos.z * 10) / 10, type);
  },
  killerHeardShow(x, z, type) {
    (this.pings || (this.pings = [])).push({ x, z, type, t: performance.now() });
    if (this.pings.length > 8) this.pings.shift();
    this.audioLocal.chime(null, type === 'crack' || type === 'scream' ? 300 : 420, 0.12);
  },

  // What the person playing the Reliquary sees and hears.
  presentKiller(dt, u) {
    const k = this.killer, inp = this.inp;
    const seen = k.petrified || (this.mode === 'client' && this.killerSeen);
    k.aura.visible = false;
    for (const s of this.survivors) s.aura.visible = s.alive && (s.health === 'hooked' || (s.health === 'downed' && flatDist(s.pos, k.pos) < 24));
    this.audioLocal.update(dt, { listener: this.camera.position, chase: k.state === 'chase' && !seen ? 0.55 : 0, breath: 0, lament: k.lament ? 0.6 : 0 });
    // the grade: cold and heavy while held, a red edge while stunned
    u.uBlink.value = 0; u.uHurt.value = 0;
    u.uLow.value += ((seen ? 0.62 : 0) - u.uLow.value) * Math.min(1, dt * 9);
    u.uLament.value += ((k.lament ? 0.7 : 0) - u.uLament.value) * Math.min(1, dt * 3);
    u.uHit.value = Math.max(this.hitShake, k.stunT > 0 ? 0.35 : 0);
    u.uWarn.value += ((k.toll ? 0.5 : 0) - u.uWarn.value) * Math.min(1, dt * 6);
    this.fadeIn = clamp((performance.now() - this.matchStart) / 1800, 0, 1);
    u.uFade.value = 1 - this.fadeIn;
    if (this.endT !== null) { this.endT -= dt; u.uFade.value = Math.max(u.uFade.value, clamp(1 - this.endT / 2.5, 0, 1)); if (this.endT <= 0) this.showEnd(); }
    $('lookAway').hidden = true;

    // HUD
    const hud = $('killerHud');
    $('kSeen').classList.toggle('on', seen);
    $('kSeenText').textContent = k.stunT > 0 ? 'STUNNED' : seen ? (k.toll ? 'TOLLING' : k.lament ? 'LAMENTING' : `WATCHED${k.watchers > 1 ? ' ×' + k.watchers : ''}`) : '';
    const thr = k.tier >= 3 ? 4 : 5;
    $('kLament').style.width = (100 * clamp(k.toll ? k.toll.t / 1.8 : k.frozenT / thr, 0, 1)) + '%';
    $('kLament').parentElement.classList.toggle('toll', !!k.toll);
    const cd = (el, v, max) => { el.querySelector('.cd').style.height = (100 * clamp(v / max, 0, 1)) + '%'; el.classList.toggle('ready', v <= 0); };
    cd($('kStrike'), k.cooldown, 2); cd($('kPlant'), this.sentinels.length >= 6 ? 1 : k.plantCD, 40); cd($('kStep'), k.transferCD, 30);
    hud.hidden = false;
    this.ui.prompt(k.stunT > 0 ? 'Stunned' : seen && !k.action ? 'They see you. You are stone.' : inp.promptText, k.stunT > 0 || seen ? null : inp.promptProg, false);
    $('wiggle').style.display = 'none';
    this.ui.updateHud(this);

    // marks on screen: sounds it heard, bodies it can step into, the bound and the fallen
    const marks = [], now = performance.now();
    if (this.pings) { this.pings = this.pings.filter((p) => now - p.t < 4500); for (const p of this.pings) marks.push({ x: p.x, y: 1.2, z: p.z, cls: 'ping', text: '!' }); }
    const tgt = k.transferCD <= 0 && !k.carrying && !seen ? this.killerTransferTarget(k, inp) : null;
    for (const st of [...this.sentinels, ...this.memorials]) if (st.shroud <= 0 || st.isMemorial) marks.push({ x: st.pos.x, y: 2.5, z: st.pos.z, cls: 'body' + (st === tgt ? ' aim' : ''), text: st === tgt ? 'F' : '' });
    for (const s of this.survivors) if (s.health === 'hooked' && s.post) marks.push({ x: s.post.hang.x, y: 2.9, z: s.post.hang.z, cls: 'bound', text: '' });
    if (k.carrying) for (const p of this.posts) if (!p.occupant && flatDist(p.pos, k.pos) < 60) marks.push({ x: p.hang.x, y: 3.0, z: p.hang.z, cls: 'post', text: '' });
    this.drawMarks(marks);
  },

  // Small on-screen markers pinned to places in the world (clamped to the screen edge when out of view).
  drawMarks(list) {
    const box = $('markers'), cam = this.camera;
    while (box.children.length < list.length) box.appendChild(document.createElement('i'));
    for (let i = 0; i < box.children.length; i++) {
      const el = box.children[i], m = list[i];
      if (!m) { el.style.display = 'none'; continue; }
      tmp.set(m.x, m.y, m.z).project(cam);
      let x = tmp.x, y = tmp.y;
      const behind = tmp.z > 1;
      if (behind) { x = -x; y = -y; }
      const off = behind || Math.abs(x) > 0.94 || Math.abs(y) > 0.9;
      if (off) { const s = Math.max(Math.abs(x) / 0.94, Math.abs(y) / 0.9) || 1; x /= s; y /= s; if (behind) { const n = Math.hypot(x, y) || 1; x = x / n * 0.94; y = y / n * 0.9; } }
      el.style.display = 'block';
      el.className = m.cls + (off ? ' off' : '');
      el.textContent = m.text;
      el.style.transform = `translate(${((x * 0.5 + 0.5) * innerWidth).toFixed(1)}px, ${((-y * 0.5 + 0.5) * innerHeight).toFixed(1)}px)`;
    }
  },
};
