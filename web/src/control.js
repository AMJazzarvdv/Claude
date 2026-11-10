// How a person steers a survivor. The same code serves the player at this
// machine and, on the host, every player connected over the network: each
// has an Input (keys held, keys just pressed, where their camera points).
import * as THREE from 'three';
import { V, angDiff, yawTo, flatDist } from './entities.js';
import { HolyFlask, Votive, ITEMS } from './items.js';
import { clamp } from './noise.js';

export class Input {
  constructor(local = false) {
    this.local = local;
    this.keys = new Set(); this.pressed = new Set();
    this.mouseDown = false; this.rightDown = false;
    this.camYaw = 0; this.camPitch = 0;
    this.holdLatch = false; this.skillT = 3; this.escapeCD = 0; this.lastWiggleKey = null; this.lockT = 0;
    this.promptText = ''; this.promptProg = null; this.promptHeal = false;
    this.skill = null; // the toll-check widget this person sees (local UI, or a remote stand-in)
    this.move = null; // remote: the latest movement report from that person's machine
  }
  // where the camera looks (for throws)
  lookDir(out = new THREE.Vector3()) {
    const cp = Math.cos(this.camPitch);
    return out.set(Math.sin(this.camYaw) * cp, Math.sin(this.camPitch), Math.cos(this.camYaw) * cp);
  }
  // camera-relative movement wish on the ground plane (not normalized; zero when no key is held)
  moveDir(out = new THREE.Vector3()) {
    const k = this.keys;
    let mx = 0, mz = 0;
    if (k.has('KeyW') || k.has('ArrowUp')) mz += 1;
    if (k.has('KeyS') || k.has('ArrowDown')) mz -= 1;
    if (k.has('KeyD')) mx += 1;
    if (k.has('KeyA')) mx -= 1;
    const sy = Math.sin(this.camYaw), cy = Math.cos(this.camYaw);
    return out.set(sy * mz - cy * mx, 0, cy * mz + sy * mx);
  }
  get sprint() { return this.keys.has('ShiftLeft') || this.keys.has('ShiftRight'); }
  get hold() { return this.keys.has('KeyE') || this.mouseDown; }
}

// The cameras a person's gaze is tested with. This machine's player uses the real
// ones; everyone else gets stand-ins posed from what their machine reports.
export function makeView() {
  return { cam: new THREE.PerspectiveCamera(64, 16 / 9, 0.05, 900), mirror: new THREE.PerspectiveCamera(50, 1.667, 0.05, 400), ready: false, yaw: 0, pitch: 0, aspect: 16 / 9 };
}
export function setView(v, s, x, y, z, yaw, pitch, aspect) {
  const cam = v.cam;
  aspect = clamp(aspect || 16 / 9, 1, 2.4);
  if (Math.abs(cam.aspect - aspect) > 0.001) { cam.aspect = aspect; cam.updateProjectionMatrix(); }
  // a camera can only be so far from its owner
  const dx = x - s.pos.x, dz = z - s.pos.z, d = Math.hypot(dx, dz);
  if (d > 5) { x = s.pos.x + dx / d * 5; z = s.pos.z + dz / d * 5; }
  y = clamp(y, 0.2, s.pos.y + 5);
  cam.position.set(x, y, z);
  const cp = Math.cos(pitch);
  cam.lookAt(x + Math.sin(yaw) * cp, y + Math.sin(pitch), z + Math.cos(yaw) * cp);
  cam.updateMatrixWorld();
  const fx = Math.sin(yaw), fz = Math.cos(yaw), m = v.mirror;
  m.position.set(s.pos.x - fx * 0.2, s.pos.y + (s.crouch ? 1.05 : 1.65), s.pos.z - fz * 0.2);
  m.lookAt(m.position.x - fx * 10, m.position.y - 0.4, m.position.z - fz * 10);
  m.updateMatrixWorld();
  v.yaw = yaw; v.pitch = pitch; v.aspect = aspect; v.ready = true;
}

const ACTION_NAMES = { ring: 'Ringing', selfheal: 'Mending', bandage: 'Binding your wounds', search: 'Searching', unhook: 'Unbinding', gate: 'Opening', shroud: 'Shrouding', hatch: 'Descending', drop: '' };

// Methods mixed into Game (this = the game).
export const SurvivorControl = {
  // What the survivor could do right now: { space, hold, full }.
  interactions(s, fwd, inp) {
    const out = { space: null, hold: null };
    const near = (p, r) => flatDist(p, s.pos) < r;
    const facing = (p, min = 0.25) => { const d = V(p.x - s.pos.x, 0, p.z - s.pos.z); const l = d.length(); return l < 0.7 || d.divideScalar(l).dot(fwd) > min; };
    const sprint = inp.sprint;
    let best = 1e9;
    for (const w of this.world.windows) {
      const sd = (s.pos.x - w.x) * w.nx + (s.pos.z - w.z) * w.nz, ld = Math.abs((s.pos.x - w.x) * w.ax + (s.pos.z - w.z) * w.az);
      if (Math.abs(sd) < 1.2 && ld < w.halfW + 0.2 && facing(w, 0.2) && Math.abs(sd) < best) { best = Math.abs(sd); out.space = { text: 'Vault', lock: 0.3, fn: () => s.startVault('window', w, sprint && s.speed > 3) }; }
    }
    for (const p of this.pallets) {
      if (p.state === 'broken') continue;
      const nd = p.normalDist(s.pos), ld = p.lateral(s.pos);
      if (p.state === 'up' && ld < p.w / 2 + 0.45 && nd < 1.15 && nd < best) { best = nd; out.space = { text: 'Drop pallet', lock: 0.25, fn: () => { s.startAction('drop'); p.drop(s); } }; }
      if (p.state === 'down' && ld < p.w / 2 + 0.2 && nd < 1.35 && nd > 0.55 && facing(p.center, 0.3) && nd < best) { best = nd; out.space = { text: 'Vault pallet', lock: 0.3, fn: () => s.startVault('pallet', p, sprint && s.speed > 3) }; }
    }
    best = 1e9;
    const consider = (d, text, fn) => { if (d < best) { best = d; out.hold = { text, fn }; } };
    for (const b of this.bells) if (!b.done && !b.locked && near(b.pos, 1.95) && facing(b.pos, 0)) consider(flatDist(b.pos, s.pos), 'Ring the bell', () => s.startAction('ring', { bell: b }));
    for (const o of this.survivors) {
      if (o === s) continue;
      if (o.health === 'hooked' && o.post && near(o.post.hang, 1.7)) consider(0.1, `Unbind ${o.def.short}`, () => s.startAction('unhook', { target: o }));
      if ((o.health === 'injured' || o.health === 'downed') && near(o.pos, 1.5)) consider(flatDist(o.pos, s.pos), `${o.health === 'downed' ? 'Revive' : 'Heal'} ${o.def.short}`, () => s.startAction('heal', { target: o }));
    }
    if (this.gatesPowered) for (const g of this.gates) if (!g.open && near(g.lever, 1.7)) consider(0.2, 'Open the Lychgate', () => s.startAction('gate', { gate: g }));
    for (const st of this.sentinels) if (st.shroud <= 0 && near(st.pos, 1.75) && facing(st.pos, 0.3)) consider(flatDist(st.pos, s.pos), 'Shroud the statue', () => s.startAction('shroud', { target: st }));
    const k = this.killer;
    if (k.petrified && k.veilT <= 0 && k.stunT <= 0 && near(k.pos, 1.75) && facing(k.pos, 0.3)) consider(flatDist(k.pos, s.pos), 'Shroud the statue', () => s.startAction('shroud', { target: k }));
    if (this.hatch && near(this.hatch.pos, 1.6)) consider(0, 'Descend into the Drowned Well', () => s.startAction('hatch'));
    for (const c of this.chests) if (!c.opened && near(c.pos, 1.5) && facing(c.pos, 0.2)) {
      if (s.item) { if (!out.hold) out.full = true; }
      else consider(flatDist(c.pos, s.pos), 'Search the reliquary chest', () => s.startAction('search', { chest: c }));
    }
    return out;
  },

  // The speed a survivor moves at for a given wish (shared by the host and by a client predicting itself).
  moveSpeed(s, inp, dir, fwd) {
    const back = dir.dot(fwd) < -0.35 * dir.length();
    if (s.crouch) return { sp: 1.13, back: false };
    if (back) return { sp: 1.6, back: true };
    if ((inp.sprint || s.boost > 0) && !s.mirrorUp) return { sp: s.runSpeed(), back: false };
    return { sp: 2.26, back: false };
  },

  // Move by this person's wish. Here: integrate. For a remote person: take the position their machine reports.
  applyMove(s, inp, dir, sp, dt, faceYaw = null) {
    if (!inp.local) return this.net.acceptMove(s, inp, sp, dt);
    if (dir.lengthSq() > 0) s.moveTo(dir, sp, dt, true, faceYaw); else s.speed = 0;
  },

  promptLine(s, cand) {
    const parts = [];
    if (cand.space) parts.push(`<kbd>Space</kbd> ${cand.space.text}`);
    if (cand.hold) parts.push(`<kbd>E</kbd> ${cand.hold.text}`);
    else if (cand.full) parts.push('Your hands are full');
    if (s.health === 'injured' && !cand.hold) parts.push('<kbd>R</kbd> Mend wounds');
    return parts.join('&nbsp;&nbsp;&nbsp;');
  },

  control(s, dt, inp) {
    const keys = inp.keys, pressed = inp.pressed;
    const fwd = V(Math.sin(inp.camYaw), 0, Math.cos(inp.camYaw));
    const dir = inp.moveDir(V());
    const hold = inp.hold;
    s.lookPitch = clamp(-inp.camPitch, -0.6, 0.6);
    s.lookYaw = clamp(angDiff(s.yaw, inp.camYaw), -1.1, 1.1);
    s.backpedal = false; s.mirrorUp = false;
    inp.promptText = ''; inp.promptProg = null; inp.promptHeal = false;

    if (s.health === 'hooked') return this.hookedControl(s, dt, inp);
    if (s.canonizing) { s.speed = 0; inp.promptText = 'The stone is creeping up your body…'; inp.promptProg = s.stone || 0; return; }
    if (s.health === 'downed') {
      s.crouch = false;
      this.applyMove(s, inp, dir, 0.7, dt);
      inp.promptText = s.healers.size ? 'Someone is helping you up…' : 'You are dying. Crawl to safety.';
      inp.promptProg = s.healers.size ? s.healProg : null; inp.promptHeal = true;
      return;
    }
    if (!s.standing) return;
    s.crouch = keys.has('KeyC') || keys.has('ControlLeft') || keys.has('ControlRight');

    if (s.action) {
      const a = s.action;
      const ok = { ring: hold, heal: hold, unhook: hold, gate: hold, shroud: hold, search: hold, hatch: true, bandage: true, selfheal: keys.has('KeyR'), drop: true }[a.type];
      if (!ok || (dir.lengthSq() > 0 && a.type !== 'drop' && a.type !== 'hatch')) s.cancelAction();
      else {
        s.speed = 0;
        if (a.type === 'ring') { s.yaw += angDiff(s.yaw, yawTo(s.pos, a.bell.pos)) * Math.min(1, dt * 8); this.addScore(s, 'objectives', 1000 / 80 * dt); }
        if (a.type === 'heal' || a.type === 'unhook' || a.type === 'shroud' || a.type === 'gate') {
          const tp = a.type === 'gate' ? a.gate.lever : a.target.pos;
          s.yaw += angDiff(s.yaw, yawTo(s.pos, tp)) * Math.min(1, dt * 8);
        }
        this.actionPrompt(s, a, inp);
        this.maybeSkillCheck(s, a, dt, inp);
        return;
      }
    }
    const cand = this.interactions(s, fwd, inp);
    if (pressed.has('Space') && cand.space) { cand.space.fn(); return; }
    if (hold && cand.hold && !inp.holdLatch) { cand.hold.fn(); return; }
    if (!hold) inp.holdLatch = false;
    if (keys.has('KeyR') && s.health === 'injured') { s.startAction('selfheal'); return; }
    if (pressed.has('KeyB') && !s.blinking) { s.forceBlink(0.3); s.resolve = Math.min(s.maxResolve, s.resolve + 30); }
    if (this.useItem(s, dt, inp)) return;
    inp.promptText = this.promptLine(s, cand);

    const { sp, back } = this.moveSpeed(s, inp, dir, fwd);
    s.backpedal = back && dir.lengthSq() > 0;
    this.applyMove(s, inp, dir, sp, dt, back ? inp.camYaw : null);
  },

  // F or right mouse: use whatever you carry. Returns true when it consumed the frame.
  useItem(s, dt, inp) {
    const held = inp.keys.has('KeyF') || inp.rightDown, press = inp.pressed.has('KeyF') || inp.pressed.has('Mouse2');
    if (!s.item) return false;
    if (s.item === 'mirror') {
      if (held && s.itemCharges > 0 && !s.vault) {
        s.mirrorUp = true; s.itemCharges -= dt;
        if (s.itemCharges <= 0) { this.consumeItem(s); this.toastTo(s, 'The mirror cracks', 'warn'); this.audio.shatter(s.chest()); }
      }
      return false;
    }
    if (!press) return false;
    if (s.item === 'candle') {
      if (this.candle) this.candle.dispose();
      this.candle = new Votive(this, s.pos.clone().addScaledVector(s.forward(), 0.7));
      this.consumeItem(s); this.sfxTo(s, 'itemUse');
      this.toastTo(s, 'The candle is lit. In its light the stone cannot Lament or toll.', 'good');
      return true;
    }
    if (s.item === 'holy') {
      const look = inp.lookDir(V());
      const right = V(-Math.cos(inp.camYaw), 0, Math.sin(inp.camYaw));
      const from = s.pos.clone().add(V(0, 1.55, 0)).addScaledVector(right, -0.15).addScaledVector(look, 0.4);
      const vel = look.multiplyScalar(15).add(V(0, 3.2, 0));
      this.projectiles.push(new HolyFlask(this, from, vel, s));
      s.throwT = 0.5; this.consumeItem(s); this.audio.vault(from, false);
      return true;
    }
    if (s.item === 'bandage') {
      if (s.health === 'injured') { s.startAction('bandage'); return true; }
      this.toastTo(s, 'You are not wounded', 'warn');
    }
    return false;
  },

  actionPrompt(s, a, inp) {
    let prog = null, heal = false, name = ACTION_NAMES[a.type] || '';
    if (a.type === 'ring') prog = a.bell.progress;
    else if (a.type === 'heal') { prog = a.target.healProg; heal = true; name = a.target.health === 'downed' ? 'Reviving' : 'Healing'; }
    else if (a.type === 'bandage') { prog = Math.max(s.healProg, a.t / 6); heal = true; }
    else if (a.type === 'selfheal') { prog = s.healProg; heal = true; }
    else if (a.type === 'search') prog = a.chest.progress;
    else if (a.type === 'unhook') prog = a.t / 1.2;
    else if (a.type === 'gate') prog = a.gate.progress;
    else if (a.type === 'shroud') prog = a.t / 2.2;
    inp.promptText = name; inp.promptProg = prog; inp.promptHeal = heal;
  },

  maybeSkillCheck(s, a, dt, inp) {
    const sk = inp.skill;
    if (!sk || !['ring', 'heal', 'selfheal'].includes(a.type) || sk.active) return;
    inp.skillT -= dt;
    if (inp.skillT > 0) return;
    inp.skillT = 2.5 + Math.random() * 4.5;
    if (Math.random() > 0.6) return;
    sk.start((r) => {
      const act = s.action;
      if (r === 'great') { if (act?.type === 'ring') { act.bell.progress = Math.min(0.999, act.bell.progress + 0.012); } this.addScore(s, 'objectives', 150, 'Great toll check'); }
      else if (r === 'good') this.addScore(s, 'objectives', 50);
      else {
        if (act?.type === 'ring') { act.bell.progress = Math.max(0, act.bell.progress - 0.1); this.audio.crack(act.bell.pos.clone().setY(2.5)); this.noise(act.bell.pos, 80, 'crack'); this.toastTo(s, 'The bell cracks — the Reliquary heard that', 'bad'); }
        else if (act) { const tg = act.type === 'heal' ? act.target : s; tg.healProg = Math.max(0, tg.healProg - 0.1); this.audio.groan(s.chest(), s.def.voice, 0.3); this.noise(s.pos, 12, 'groan'); }
        s.cancelAction(); inp.holdLatch = true;
      }
    });
  },

  hookedControl(s, dt, inp) {
    s.speed = 0;
    inp.escapeCD -= dt;
    if (s.hookPhase === 1) {
      inp.promptText = s.escapeAttempts > 0 ? `Bound. Wait for help, or <kbd>Space</kbd> try to tear free (${s.escapeAttempts} left)` : 'Bound. Wait for help.';
      inp.promptProg = s.hookTimer / 55;
      if (inp.pressed.has('Space') && s.escapeAttempts > 0 && inp.escapeCD <= 0) {
        s.escapeAttempts--; inp.escapeCD = 1.2;
        if (Math.random() < 0.06) { s.unhook(s); this.addScore(s, 'survival', 1500, 'Tore free'); }
        else { s.hookTimer = Math.max(1, s.hookTimer - 8); this.audio.chains(s.post.hang, 4); this.toastTo(s, 'The chains hold', 'bad'); }
      }
    } else {
      inp.promptText = 'Struggle! Hit the toll checks or the moor takes you';
      inp.promptProg = s.hookTimer / 50;
      const sk = inp.skill;
      if (sk && !sk.active) {
        inp.skillT -= dt;
        if (inp.skillT <= 0) {
          inp.skillT = 1.2 + Math.random() * 1.8;
          sk.start((r) => { if (r === 'miss' && s.health === 'hooked') { s.hookTimer -= 10; this.audio.gurgle(s.post.hang, 6, 0.5); } }, { size: 40, great: 0, dur: 1.0 });
        }
      }
    }
  },

  // carried: wiggle with alternating A / D
  wiggleInput(s, inp) {
    const key = inp.pressed.has('KeyA') ? 'A' : inp.pressed.has('KeyD') ? 'D' : null;
    if (key && key !== inp.lastWiggleKey) { s.wiggle += 0.035; inp.lastWiggleKey = key; }
  },
};
