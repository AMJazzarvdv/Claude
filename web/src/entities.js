// Survivors (player + AI teammates) and the objects of the moor: Mourning
// Bells, pallets, Weeping Posts, Lychgates and the Drowned Well.
import * as THREE from 'three';
import { buildSurvivor, animateSurvivor, auraClone, buildBell, buildPallet, buildPost, buildGate, buildHatch } from './models.js';
import { HALF } from './world.js';
import { clamp } from './noise.js';

export const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
export const angDiff = (a, b) => { let d = b - a; while (d > Math.PI) d -= Math.PI * 2; while (d < -Math.PI) d += Math.PI * 2; return d; };
export const yawTo = (from, to) => Math.atan2(to.x - from.x, to.z - from.z);
export const flatDist = (a, b) => Math.hypot(a.x - b.x, a.z - b.z);
const UP = V(0, 1, 0);

// ================================================================ Bell
export class Bell {
  constructor(G, spot, id) {
    this.G = G; this.id = id; this.pos = V(spot.x, 0, spot.z);
    this.model = buildBell(G.M); this.model.position.copy(this.pos); this.model.rotation.y = spot.rot;
    G.world.root.add(this.model);
    this.progress = 0; this.ringers = new Set(); this.done = false; this.regress = false;
    this.milestone = 0; this.creakT = 0; this.doneSwing = 0;
    this.slots = [[0, 1.3], [0, -1.3], [1.35, 0], [-1.35, 0]].map(([x, z]) => V(x, 0, z).applyAxisAngle(UP, spot.rot).add(this.pos));
  }
  slotBlocked(s) {
    const G = this.G;
    if (G.sentinels.some((st) => flatDist(st.pos, s) < 1.0)) return true;
    if (G.memorials.some((m) => flatDist(m.pos, s) < 0.9)) return true;
    return !!(G.killer && flatDist(G.killer.pos, s) < 1.0);
  }
  freeSlot(from, avoid = null) {
    let best = null, bd = 1e9;
    for (const s of this.slots) {
      if (s === avoid || this.slotBlocked(s)) continue;
      if ([...this.ringers].some((r) => flatDist(r.pos, s) < 0.6)) continue;
      const d = flatDist(s, from); if (d < bd) { bd = d; best = s; }
    }
    return best;
  }
  update(dt) {
    const G = this.G, n = this.ringers.size, ud = this.model.userData, t = G.time;
    if (!this.done) {
      if (n > 0) {
        const eff = [0, 1, 1.65, 2.1, 2.45][Math.min(n, 4)];
        let rate = (eff / (G.diff?.bellTime ?? 72)) * G.bellRateMult();
        if (n === 1) { const s = [...this.ringers][0]; if (s.hasPerk('ropeburn')) rate *= 1.15; if (!s.isPlayer) rate *= 0.92; }
        this.progress += rate * dt; this.regress = false;
        this.creakT -= dt; if (this.creakT < 0) { this.creakT = 1.3; G.audio.creak(this.pos.clone().setY(2), 0.35); }
        if (Math.random() < dt * 0.4) G.noise(this.pos, 26, 'bell');
      } else if (this.regress) {
        this.progress = Math.max(0, this.progress - 0.0035 * dt);
        if (this.progress <= 0) this.regress = false;
      }
      const ms = Math.floor(this.progress * 4);
      if (ms > this.milestone && ms < 4) { this.milestone = ms; G.audio.chime(this.pos.clone().setY(3), 520 + ms * 110, 0.3); }
      if (ms < this.milestone) this.milestone = ms;
      if (this.progress >= 1) this.complete();
    }
    if (this.done) this.doneSwing = Math.max(0.04, this.doneSwing - dt * 0.06);
    const amp = this.done ? this.doneSwing : (n > 0 ? 0.13 + this.progress * 0.08 : 0) + (this.regress ? 0.02 : 0);
    ud.swing.rotation.z = Math.sin(t * 2.6) * amp;
    ud.clap.rotation.z = Math.sin(t * 2.6 - 0.7) * amp * 1.5;
    ud.rope.position.y = -0.05 + (n > 0 ? Math.sin(t * 2.4) * 0.12 : 0);
    const fl = 0.85 + Math.sin(t * 13 + this.id) * 0.07 + Math.sin(t * 23.7 + this.id * 3) * 0.05 + (Math.random() - 0.5) * 0.08;
    ud.light.intensity = (this.done ? 7 : 1.4 + this.progress * 1.8) * fl;
    ud.light.distance = this.done ? 16 : 9;
    ud.light.color.setHex(this.done ? 0xffd9a0 : 0xffa050);
    for (const c of ud.candles) c.scale.set(0.06 * (this.done ? 1.7 : 1), (0.12 + Math.random() * 0.02) * (this.done ? 1.9 : 1), 1);
    ud.halo.material.opacity = (this.done ? 0.55 : 0.25) * fl;
    if (this.done) ud.holy.material.opacity = 0.22 + Math.sin(t * 1.5) * 0.05;
  }
  complete() {
    this.done = true; this.progress = 1; this.doneSwing = 0.7;
    if (this.ringers.has(this.G.player)) this.G.addScore('objectives', 300, 'Bell rung');
    for (const r of [...this.ringers]) r.cancelAction();
    this.ringers.clear();
    this.G.audio.toll(this.pos.clone().setY(3), 196 * (0.9 + this.id * 0.04), 0.9, 8);
    this.G.onBellRung(this);
  }
}

// ================================================================ Pallet
export class Pallet {
  constructor(G, spot, id) {
    this.G = G; this.id = id; this.state = 'up';
    this.a = V(spot.ax, 0, spot.az); this.n = V(spot.nx, 0, spot.nz); this.w = spot.w;
    this.center = V(spot.x, 0, spot.z);
    this.model = buildPallet(G.M);
    this.model.position.copy(this.center).addScaledVector(this.a, -(spot.w / 2 - 0.06));
    this.model.rotation.y = Math.atan2(this.a.x, this.a.z);
    this.angle = -0.1; this.target = -0.1;
    this.model.userData.pivot.rotation.x = this.angle;
    G.world.root.add(this.model);
    const hx = Math.abs(this.a.x) * spot.w / 2 + Math.abs(this.n.x) * 0.6, hz = Math.abs(this.a.z) * spot.w / 2 + Math.abs(this.n.z) * 0.6;
    this.box = { minX: spot.x - hx, maxX: spot.x + hx, minY: 0, maxY: 0.9, minZ: spot.z - hz, maxZ: spot.z + hz, kind: 'pallet', sight: false };
  }
  side(p) { return Math.sign((p.x - this.center.x) * this.n.x + (p.z - this.center.z) * this.n.z) || 1; }
  lateral(p) { return Math.abs((p.x - this.center.x) * this.a.x + (p.z - this.center.z) * this.a.z); }
  normalDist(p) { return Math.abs((p.x - this.center.x) * this.n.x + (p.z - this.center.z) * this.n.z); }
  drop(by) {
    if (this.state !== 'up') return;
    const G = this.G;
    this.state = 'down'; this.target = 1.13;
    G.world.dynBoxes.push(this.box);
    G.world.setPalletNav(this, true);
    G.audio.palletDrop(this.center.clone().setY(0.5));
    G.noise(this.center, 35, 'pallet');
    const k = G.killer;
    if (k && this.lateral(k.pos) < this.w / 2 + 0.7 && this.normalDist(k.pos) < 1.3) {
      k.stun(2.4, 'pallet');
      if (by?.isPlayer) G.addScore('boldness', 1000, 'Pallet stun');
    }
    // shove anyone standing in the footprint to their side
    for (const s of G.survivors) if (s !== by && s.alive && this.lateral(s.pos) < this.w / 2 && this.normalDist(s.pos) < 0.7) s.pos.addScaledVector(this.n, this.side(s.pos) * 0.8);
    if (by && this.lateral(by.pos) < this.w / 2 + 0.3 && this.normalDist(by.pos) < 0.75) by.pos.addScaledVector(this.n, this.side(by.pos) * (0.8 - this.normalDist(by.pos)));
  }
  break() {
    if (this.state !== 'down') return;
    const G = this.G;
    this.state = 'broken';
    const i = G.world.dynBoxes.indexOf(this.box); if (i >= 0) G.world.dynBoxes.splice(i, 1);
    G.world.setPalletNav(this, false);
    G.audio.palletBreak(this.center.clone().setY(0.5));
    G.fx.splinters(this.center.clone().setY(0.5));
    G.world.root.remove(this.model);
  }
  update(dt) {
    this.angle += (this.target - this.angle) * Math.min(1, dt * 16);
    this.model.userData.pivot.rotation.x = this.angle;
  }
}

// ================================================================ Weeping Post
export class Post {
  constructor(G, spot, id) {
    this.G = G; this.id = id; this.pos = V(spot.x, 0, spot.z);
    this.model = buildPost(G.M); this.model.position.copy(this.pos); this.model.rotation.y = spot.rot;
    G.world.root.add(this.model);
    this.hang = this.model.userData.hangPoint.clone().applyAxisAngle(UP, spot.rot).add(this.pos);
    this.occupant = null; this.tend = 0;
  }
  update(dt) {
    const ud = this.model.userData, o = this.occupant;
    const want = o && o.hookPhase === 2 ? 1 : 0;
    this.tend += (want - this.tend) * Math.min(1, dt * 0.8);
    ud.tendrils.visible = this.tend > 0.01;
    ud.tendrils.scale.y = Math.max(0.001, this.tend * (1 + Math.sin(this.G.time * 2) * 0.05));
    ud.tendrils.rotation.y += dt * 0.1;
  }
}

// ================================================================ Lychgate
export class Gate {
  constructor(G, spot, id) {
    this.G = G; this.id = id; this.spot = spot;
    this.pos = V(spot.x, 0, spot.z);
    this.model = buildGate(G.M);
    this.model.position.copy(this.pos);
    this.model.rotation.y = spot.out > 0 ? Math.PI : 0;
    G.world.root.add(this.model);
    this.lever = V(3.4, 0, 1.2).applyAxisAngle(UP, this.model.rotation.y).add(this.pos);
    this.inward = V(0, 0, -spot.out);
    this.progress = 0; this.open = false; this.openers = new Set(); this.doorA = 0;
  }
  update(dt) {
    const G = this.G, ud = this.model.userData;
    if (!this.open && G.gatesPowered && this.openers.size > 0) {
      this.progress += dt / 18;
      if (this.progress >= 1) this.doOpen();
    }
    const lit = this.open ? 3 : Math.floor(this.progress * 3.0001);
    ud.lamps.forEach((l, i) => { l.material = i < lit ? (this.open ? this.G.M.lanternLit : this.G.M.lanternRed) : this.G.M.lanternGlass; });
    ud.light.intensity = G.gatesPowered ? (this.open ? 4 : 1 + this.progress * 2) : 0;
    ud.light.color.setHex(this.open ? 0xd8e8ff : 0xff4020);
    ud.lever.rotation.x = -0.6 + (this.open ? 1.2 : this.progress * 1.2);
    if (this.open) {
      this.doorA = Math.min(1.75, this.doorA + dt * 0.9);
      ud.doors[0].rotation.y = -this.doorA; ud.doors[1].rotation.y = this.doorA;
      ud.beyond.material.opacity = Math.min(0.9, ud.beyond.material.opacity + dt * 0.3);
    }
  }
  doOpen() {
    this.open = true; this.progress = 1;
    for (const s of [...this.openers]) s.cancelAction();
    this.G.world.openGateNav(this.id);
    this.G.audio.ironGate(this.pos.clone().setY(1.5));
    this.G.onGateOpened(this);
  }
}

export class Hatch {
  constructor(G, p) {
    this.G = G; this.pos = V(p.x, 0, p.z);
    this.model = buildHatch(G.M); this.model.position.copy(this.pos);
    // swap the model's own light for a pre-allocated one (no shader recompile mid-match)
    const own = []; this.model.traverse((o) => { if (o.isPointLight) own.push(o); });
    for (const L of own) {
      const b = G.borrowLight(L.color.getHex(), L.distance, L.intensity);
      b.position.copy(L.position).add(this.pos);
      L.parent.remove(L);
    }
    G.world.root.add(this.model);
    G.audio.boom(this.pos, 70, 0.4);
  }
}

// ================================================================ Survivor
let SURV_ID = 0;
export class Survivor {
  static STONE = new THREE.Color(0.42, 0.41, 0.385);
  constructor(G, def, isPlayer, perks = []) {
    this.G = G; this.def = def; this.isPlayer = isPlayer; this.id = SURV_ID++;
    this.name = def.name; this.perks = new Set(perks);
    this.model = buildSurvivor(def, G.M);
    G.scene.add(this.model);
    this.aura = auraClone(this.model, G.M.auraAlly); this.aura.visible = false; G.scene.add(this.aura);
    this.pos = V(); this.yaw = 0; this.vel = V();
    this.health = 'healthy'; this.hookCount = 0; this.hookPhase = 0; this.hookTimer = 0; this.post = null;
    this.bleed = 240; this.healProg = 0; this.healers = new Set();
    this.maxResolve = this.hasPerk('unblinking') ? 140 : 100; this.resolve = this.maxResolve;
    this.blinkT = 0; this.blinkDur = 0; this.watching = false; this.watchedFor = 0;
    this.action = null; this.vault = null; this.boost = 0; this.immune = 0; this.exhausted = 0;
    this.crouch = false; this.anim = 'idle'; this.animT = Math.random() * 10; this.stepT = 0; this.scratchT = 0; this.groanT = 3;
    this.wiggle = 0; this.speed = 0; this.moveDir = V(); this.secondWakeUsed = false; this.noBlink = 0;
    this.escapeAttempts = 3;
    this.ai = { state: 'bell', t: 0, path: null, pathT: 0, goal: null, stuckT: 0, lastPos: V(), glanceT: 2 + Math.random() * 3, aware: false, bell: null, claim: null, fleeT: 0 };
  }
  hasPerk(p) { return this.perks.has(p); }
  get alive() { return this.health !== 'dead' && this.health !== 'escaped'; }
  get standing() { return this.health === 'healthy' || this.health === 'injured'; }
  get free() { return this.standing && !this.vault; }
  get blinking() { return this.blinkT > 0; }
  get eyeY() { return this.health === 'downed' ? 0.35 : this.crouch ? 1.0 : 1.6; }
  eye() { return V(this.pos.x, this.pos.y + this.eyeY, this.pos.z); }
  chest() { return V(this.pos.x, this.pos.y + (this.health === 'downed' ? 0.25 : this.crouch ? 0.6 : 1.15), this.pos.z); }
  forward() { return V(Math.sin(this.yaw), 0, Math.cos(this.yaw)); }

  place(p) { this.pos.set(p.x, 0, p.z); }

  cancelAction() {
    const a = this.action; if (!a) return;
    if (a.type === 'ring') a.bell.ringers.delete(this);
    if (a.type === 'gate') a.gate.openers.delete(this);
    if (a.type === 'heal' && a.target) a.target.healers.delete(this);
    if (a.type === 'selfheal') this.healers.delete(this);
    this.action = null;
    if (this.isPlayer) this.G.ui.skill.cancel();
  }

  startAction(type, o = {}) {
    this.cancelAction();
    this.action = { type, t: 0, ...o };
    if (type === 'ring') o.bell.ringers.add(this);
    if (type === 'gate') o.gate.openers.add(this);
    if (type === 'heal') o.target.healers.add(this);
    if (type === 'selfheal') this.healers.add(this);
  }

  forceBlink(dur) {
    if (!this.alive || this.noBlink > 0) return;
    if (this.blinkT <= 0) {
      this.blinkDur = dur; this.blinkT = dur;
      if (this.isPlayer) { this.G.audio.blink(); this.G.onPlayerBlink(); }
    } else this.blinkT = Math.max(this.blinkT, dur);
  }

  // Killer hit
  hit() {
    const G = this.G;
    if (this.immune > 0) { this.immune = 0; this.boost = 2; G.audio.hit(this.chest()); G.audio.scream(this.chest(), this.def.voice, 0.4, 0.6); return 'immune'; }
    this.cancelAction();
    if (this.health === 'healthy') this.health = 'injured';
    else if (this.health === 'injured') { this.health = 'downed'; this.bleed = 240; this.healProg = 0; this.crouch = false; }
    this.boost = this.health === 'injured' ? 2.0 : 0;
    G.audio.hit(this.chest());
    G.audio.scream(this.chest(), this.def.voice, 0.6, 1.0);
    G.noise(this.pos, 40, 'scream');
    G.fx.blood(this.chest());
    G.onHit(this);
    return this.health;
  }

  // ---------------------------------------------------------------- update
  update(dt) {
    const G = this.G;
    this.animT += dt;
    if (!this.alive) return;
    if (this.blinkT > 0) this.blinkT -= dt;
    this.boost = Math.max(0, this.boost - dt); this.immune = Math.max(0, this.immune - dt);
    this.exhausted = Math.max(0, this.exhausted - dt); this.noBlink = Math.max(0, this.noBlink - dt);
    this.throwT = Math.max(0, (this.throwT || 0) - dt);

    // resolve
    if (!this.watching) {
      let regen = 16 * (this.hasPerk('tallow') ? 2 : 1);
      if (G.killer && flatDist(G.killer.pos, this.pos) < 16) regen *= 0.85; // Moorlight
      if (G.nearCandle(this.pos)) regen *= 2; // votive candlelight steadies the eyes
      this.resolve = Math.min(this.maxResolve, this.resolve + regen * dt);
      this.watchedFor = 0;
    } else this.watchedFor += dt;

    if (this.health === 'downed') {
      this.bleed -= dt * (this.healers.size ? 0 : 1);
      if (this.bleed <= 0) { this.die('bled'); return; }
    }
    if (this.health === 'hooked') { this.updateHooked(dt); if (!this.alive) return; }
    if (this.health === 'injured' && !this.hasPerk('hymn')) {
      this.groanT -= dt;
      if (this.groanT < 0) { this.groanT = 4 + Math.random() * 5; G.audio.groan(this.chest(), this.def.voice); G.noise(this.pos, 9, 'groan'); }
    }

    // healing received
    if (this.healers.size && (this.health === 'injured' || this.health === 'downed')) {
      let rate = 0;
      for (const h of this.healers) {
        const self = h === this;
        let r = self ? 1 / 32 : (this.health === 'downed' ? 1 / 12 : 1 / 16);
        if (h.hasPerk('hymn')) r *= 1.5;
        rate += r;
      }
      this.healProg += rate * dt;
      if (this.healProg >= 1) {
        this.healProg = 0;
        const was = this.health;
        this.health = was === 'downed' ? 'injured' : 'healthy';
        for (const h of [...this.healers]) { if (h.isPlayer && h !== this) G.addScore('altruism', 800, was === 'downed' ? 'Revived' : 'Healed'); h.cancelAction(); }
        this.healers.clear(); this.healClaim = null;
      }
    }

    if (this.vault) this.updateVault(dt);
    else if (this.health === 'carried') this.updateCarried(dt);
    else if (this.isPlayer) G.playerControl(this, dt);
    else this.updateAI(dt);

    // action progress (shared by player + AI)
    if (this.action) this.updateAction(dt);

    // scratch marks while sprinting
    if (this.speed > 3.2) { this.scratchT -= dt; if (this.scratchT < 0) { this.scratchT = 0.35; G.scratches.push({ x: this.pos.x, z: this.pos.z, t: G.time, s: this }); } }
    // footsteps
    if (this.speed > 0.5 && (this.standing || this.health === 'downed')) {
      this.stepT -= dt * this.speed;
      if (this.stepT < 0) { this.stepT = 1.25; G.audio.footstep(this.pos.clone().setY(0.1), this.speed > 3 ? 0.2 : 0.1, this.crouch); }
    }
    this.syncModel(dt);
  }

  updateAction(dt) {
    const a = this.action, G = this.G;
    a.t += dt;
    if (a.type === 'ring') { if (a.bell.done || a.bell.locked) this.cancelAction(); }
    else if (a.type === 'heal') {
      const tg = a.target;
      if (!tg.alive || flatDist(tg.pos, this.pos) > 2.2 || (tg.health !== 'injured' && tg.health !== 'downed')) this.cancelAction();
    } else if (a.type === 'selfheal') { if (this.health !== 'injured') this.cancelAction(); }
    else if (a.type === 'unhook') {
      const tg = a.target;
      if (tg.health !== 'hooked') { this.cancelAction(); return; }
      if (a.t >= 1.2) { this.cancelAction(); tg.unhook(this); }
    } else if (a.type === 'gate') { if (a.gate.open) this.cancelAction(); }
    else if (a.type === 'shroud') {
      if (a.t >= 2.2) {
        const tg = a.target; this.cancelAction();
        if (tg === G.killer) { G.killer.veil(); if (this.isPlayer) G.addScore('boldness', 2000, 'Veiled the Reliquary'); }
        else { tg.setShroud(45); if (this.isPlayer) G.addScore('boldness', 400, 'Shrouded a Sentinel'); }
      }
    } else if (a.type === 'bandage') {
      if (this.health !== 'injured') { this.cancelAction(); return; }
      this.healProg = Math.min(0.999, Math.max(this.healProg, a.t / 6));
      if (a.t >= 6) { this.cancelAction(); this.healProg = 0; this.health = 'healthy'; G.consumeItem(this); G.toast('Your wounds are bound', 'good'); }
    } else if (a.type === 'search') {
      const c = a.chest;
      if (c.opened) { this.cancelAction(); return; }
      c.progress = Math.min(1, c.progress + dt / 6);
      if (Math.random() < dt * 0.7) { G.audio.chestCreak(c.pos.clone().setY(0.5)); G.noise(c.pos, 14, 'chest'); }
      if (c.progress >= 1) { this.cancelAction(); c.open(this); }
    } else if (a.type === 'drop') {
      if (a.t >= 0.25) this.action = null;
    } else if (a.type === 'hatch') {
      if (a.t >= 0.8) { this.cancelAction(); this.escape('hatch'); }
    }
  }

  updateHooked(dt) {
    const G = this.G;
    const rate = this.hookPhase === 2 && this.isPlayer ? 1 : 1;
    this.hookTimer -= dt * rate;
    if (this.hookTimer <= 0) {
      if (this.hookPhase === 1) { this.hookPhase = 2; this.hookTimer = 50; G.toast(`${this.name} is struggling against the moor`, 'warn'); G.audio.gurgle(this.post.hang, 14, 2); }
      else { this.die('sacrificed'); return; }
    }
    if (this.hookPhase === 2 && Math.random() < dt * 0.6) G.audio.gurgle(this.post.pos.clone().setY(0.2), 2, 0.4);
    const sink = this.hookPhase === 2 ? 0.25 + (1 - this.hookTimer / 50) * 0.55 : (1 - this.hookTimer / 55) * 0.25;
    this.pos.set(this.post.hang.x, this.post.hang.y - 2.15 - sink, this.post.hang.z);
    this.yaw = this.post.model.rotation.y + Math.PI / 2;
    this.speed = 0;
  }

  updateCarried(dt) {
    const k = this.G.killer;
    const right = V(Math.cos(k.yaw), 0, -Math.sin(k.yaw));
    this.pos.copy(k.pos).addScaledVector(right, -0.32).add(V(0, 1.85, 0)).addScaledVector(k.forward(), 0.05);
    this.yaw = k.yaw + Math.PI / 2;
    this.speed = 0;
    if (!this.isPlayer) this.wiggle += dt * 0.055;
    if (this.wiggle >= 1) k.dropCarried(true);
  }

  updateVault(dt) {
    const v = this.vault;
    v.t += dt;
    const f = Math.min(1, v.t / v.dur);
    this.pos.lerpVectors(v.from, v.to, f);
    this.pos.y = Math.sin(f * Math.PI) * (v.kind === 'window' ? 0.75 : 0.5);
    this.yaw = v.yaw;
    this.speed = 0;
    if (f >= 1) {
      this.pos.y = 0; this.vault = null;
      if (this.hasPerk('hare') && this.exhausted <= 0 && this.G.killer && flatDist(this.G.killer.pos, this.pos) < 12) { this.boost = 3; this.exhausted = 40; this.hareBoost = true; }
    }
  }

  startVault(kind, obj, fast) {
    const c = kind === 'window' ? V(obj.x, 0, obj.z) : obj.center;
    const n = kind === 'window' ? V(obj.nx, 0, obj.nz) : obj.n;
    const side = Math.sign((this.pos.x - c.x) * n.x + (this.pos.z - c.z) * n.z) || 1;
    const lat = kind === 'window' ? V(obj.ax, 0, obj.az) : obj.a;
    const l = clamp((this.pos.x - c.x) * lat.x + (this.pos.z - c.z) * lat.z, -0.2, 0.2);
    const from = c.clone().addScaledVector(n, side * 0.75).addScaledVector(lat, l);
    const to = c.clone().addScaledVector(n, -side * (kind === 'window' ? 0.8 : 0.95)).addScaledVector(lat, l);
    this.cancelAction();
    this.vault = { kind, from: this.pos.clone().lerp(from, 0.5), to, t: 0, dur: fast ? 0.5 : (kind === 'window' ? 0.95 : 0.85), yaw: Math.atan2(-side * n.x, -side * n.z) };
    this.G.audio.vault(c.clone().setY(0.8), fast);
    if (fast) this.G.noise(c, 26, 'vault');
    if (this.isPlayer && this.G.killer && this.G.killer.target === this && flatDist(this.G.killer.pos, this.pos) < 14) this.G.addScore('boldness', 250, 'Chase vault');
  }

  hook(post) {
    this.health = 'hooked'; this.post = post; post.occupant = this;
    this.hookCount++; this.healProg = 0; this.wiggle = 0; this.escapeAttempts = 3;
    if (this.hookCount >= 3) { this.die('sacrificed'); return; }
    this.hookPhase = this.hookCount === 1 ? 1 : 2;
    this.hookTimer = this.hookPhase === 1 ? 55 : 50;
    this.G.audio.chains(post.hang); this.G.audio.scream(post.hang, this.def.voice, 0.55, 1.4);
    this.G.onSurvivorHooked(this);
  }

  unhook(by) {
    const G = this.G, post = this.post;
    post.occupant = null; this.post = null;
    this.health = 'injured'; this.hookPhase = 0;
    const away = V(post.hang.x - post.pos.x, 0, post.hang.z - post.pos.z).normalize();
    this.pos.set(post.hang.x, 0, post.hang.z).addScaledVector(away, 0.7);
    G.world.collide(this.pos, 0.32);
    this.immune = 10; this.boost = 1.5;
    if (this.hasPerk('secondwake') && !this.secondWakeUsed) { this.secondWakeUsed = true; this.noBlink = 15; this.immune = 15; }
    G.audio.chains(post.hang, 5);
    if (by && by !== this) { G.toast(`${by.name} freed ${this.name}`, 'good'); if (by.isPlayer) G.addScore('altruism', 1500, 'Unbound a survivor'); }
    else { G.toast(`${this.name} tore free of the post`, 'good'); }
  }

  die(how) {
    const G = this.G;
    this.cancelAction();
    if (this.post) { this.post.occupant = null; }
    const where = this.post ? this.post.pos.clone() : this.pos.clone();
    this.health = 'dead';
    this.model.visible = false; this.aura.visible = false;
    G.audio.boom(where.setY(0.5), 45, 0.9); G.audio.gurgle(where, 18, 2.2);
    G.fx.sink(where);
    G.onSurvivorDied(this, how);
    this.post = null;
  }

  // ------------------------------------------------------------- stone
  beginCanonize() { this.canonizing = true; this.cancelAction(); for (const h of [...this.healers]) h.cancelAction(); this.healers.clear(); }
  endCanonize(done) {
    this.canonizing = false;
    if (!done) { this.setStone(0); return; }
    const G = this.G;
    this.setStone(1);
    this.health = 'dead'; this.canonized = true; this.aura.visible = false;
    G.audio.choir(this.chest(), 3.5, 0.45, 0, 87.3); G.audio.stoneShift(this.chest(), 0.7);
    G.fx.dust(this.chest(), 50);
    G.addMemorial(this);
    G.onSurvivorDied(this, 'canonized');
  }

  // Lerp every material toward weathered stone, creeping up from the feet.
  setStone(f) {
    if (!this._stone) {
      const own = new Map(), heights = new Map(), wp = V();
      this.model.updateMatrixWorld(true);
      this.model.traverse((o) => {
        if (!o.isMesh || !o.material) return;
        if (!own.has(o.material)) {
          const c = o.material.clone();
          own.set(o.material, { m: c, color: c.color ? c.color.clone() : null, rough: c.roughness, metal: c.metalness, emissive: c.emissive ? c.emissive.clone() : null, y: 0, n: 0 });
        }
        const e = own.get(o.material);
        o.getWorldPosition(wp); e.y += wp.y - this.model.position.y; e.n++;
        heights.set(o, e);
        o.material = e.m;
      });
      this._stone = [...own.values()];
      for (const e of this._stone) e.y = e.n ? e.y / e.n : 0;
    }
    const STONE = Survivor.STONE;
    for (const e of this._stone) {
      const lf = clamp(f * 1.7 - (e.y / 1.8) * 0.7, 0, 1);
      if (e.color) e.m.color.copy(e.color).lerp(STONE, lf);
      if (e.rough !== undefined) e.m.roughness = e.rough + (0.95 - e.rough) * lf;
      if (e.metal !== undefined) e.m.metalness = e.metal * (1 - lf);
      if (e.emissive) e.m.emissive.copy(e.emissive).multiplyScalar(1 - lf);
    }
    this.stone = f;
  }

  escape(how) {
    this.cancelAction();
    this.health = 'escaped'; this.model.visible = false; this.aura.visible = false;
    this.G.onEscape(this, how);
  }

  // ---------------------------------------------------------------- movement
  moveTo(dir, speed, dt, face = true, faceYaw = null) {
    const G = this.G;
    if (dir.lengthSq() > 1e-6) {
      dir.normalize();
      this.pos.addScaledVector(dir, speed * dt);
      G.world.collide(this.pos, 0.32, G.agentCircles(this));
      const target = faceYaw ?? Math.atan2(dir.x, dir.z);
      if (face) this.yaw += angDiff(this.yaw, target) * Math.min(1, dt * 10);
      this.speed = speed;
    } else this.speed = 0;
    this.pos.y = 0;
  }

  runSpeed() {
    let s = this.health === 'downed' ? 0.7 : 4.0;
    if (this.boost > 0 && this.standing) s *= this.hareBoost ? 1.5 : 1.5;
    if (this.boost <= 0) this.hareBoost = false;
    return s;
  }

  syncModel(dt) {
    const m = this.model;
    m.position.copy(this.pos);
    m.rotation.y = this.yaw;
    let anim = 'idle';
    const o = { injured: this.health === 'injured', speed: this.speed };
    if (this.health === 'hooked') { anim = 'hooked'; o.struggle = this.hookPhase === 2; }
    else if (this.health === 'carried') { anim = 'carried'; o.wiggle = true; }
    else if (this.canonizing) { anim = 'petrified'; o.phase = this.stone || 0; }
    else if (this.health === 'downed') anim = 'crawl';
    else if (this.vault) anim = 'vault';
    else if (this.action) {
      const t = this.action.type;
      anim = t === 'ring' ? 'ring' : t === 'heal' || t === 'selfheal' || t === 'hatch' || t === 'bandage' || t === 'search' ? 'work' : t === 'drop' ? 'drop' : 'reach';
      o.phase = this.action.t / 0.25;
    } else if (this.mirrorUp) anim = 'hold';
    else if (this.throwT > 0) { anim = 'throw'; o.phase = 1 - this.throwT / 0.5; }
    else if (this.speed > 3.0) anim = 'run';
    else if (this.speed > 0.3) anim = this.crouch ? 'crouch' : this.backpedal ? 'back' : 'walk';
    else if (this.crouch) { anim = 'crouch'; o.speed = 0; }
    if (anim === 'crouch' && this.speed < 0.3) { this.animT -= dt; }
    if (this.isPlayer && this.lookPitch !== undefined) { o.lookPitch = this.lookPitch; o.lookYaw = this.lookYaw; }
    animateSurvivor(m, anim, this.animT, dt, o);
    if (this.health === 'carried') m.rotation.z = 0;
    if (this.aura.visible) { this.aura.position.copy(m.position); this.aura.rotation.copy(m.rotation); copyPose(m, this.aura); }
  }

  // ---------------------------------------------------------------- AI
  knowsKiller() {
    const k = this.G.killer, d = flatDist(k.pos, this.pos);
    if (this.watching) return true;
    if (k.target === this && d < 22) return true;
    if (d < 9 && k.moving) return true;
    return false;
  }

  aiPathTo(goal, dt, speed, opts = {}) {
    const G = this.G, ai = this.ai;
    ai.pathT -= dt;
    if (!ai.path || ai.pathT <= 0 || !ai.goal || flatDist(ai.goal, goal) > 1.5) {
      const found = G.world.findPath(this.pos.x, this.pos.z, goal.x, goal.z, 'survivor', 45000);
      ai.path = found || [];
      ai.goal = goal.clone ? goal.clone() : V(goal.x, 0, goal.z); ai.pathT = 1.2 + Math.random() * 0.6;
      if (!found) { ai.failT = (ai.failT || 0) + 1; if (ai.failT > 2) { ai.failT = 0; ai.bell = null; ai.slot = null; ai.fleeGoal = null; } }
      else ai.failT = 0;
    }
    return this.followPath(dt, speed, opts);
  }

  followPath(dt, speed, opts = {}) {
    const ai = this.ai, G = this.G;
    const path = ai.path;
    if (!path || !path.length) { this.speed = 0; return true; }
    let wp = path[0];
    if (wp.portal) {
      const obj = wp.portal.type === 'window' ? G.world.windows[wp.portal.id] : G.pallets[wp.portal.id];
      if (!obj || (wp.portal.type === 'pallet' && obj.state !== 'down')) { path.shift(); return false; }
      const c = wp.portal.type === 'window' ? V(obj.x, 0, obj.z) : obj.center;
      const n = wp.portal.type === 'window' ? V(obj.nx, 0, obj.nz) : obj.n;
      const sd = (this.pos.x - c.x) * n.x + (this.pos.z - c.z) * n.z;
      const lat = wp.portal.type === 'window' ? V(obj.ax, 0, obj.az) : obj.a;
      const halfW = wp.portal.type === 'window' ? obj.halfW : obj.w / 2;
      const ld = Math.abs((this.pos.x - c.x) * lat.x + (this.pos.z - c.z) * lat.z);
      const appr = c.clone().addScaledVector(n, Math.sign(sd || 1) * 0.75);
      if (flatDist(appr, this.pos) < 0.5 || (Math.abs(sd) < 0.95 && ld < halfW + 0.3)) {
        path.shift();
        this.startVault(wp.portal.type, obj, speed > 3.5);
        return false;
      }
      this.moveTo(V(appr.x - this.pos.x, 0, appr.z - this.pos.z), speed, dt);
      return false;
    }
    const d = flatDist(wp, this.pos);
    if (d < (wp.final ? 0.4 : 0.45)) { path.shift(); if (!path.length) { this.speed = 0; return true; } wp = path[0]; if (wp.portal) return false; }
    const dir = V(wp.x - this.pos.x, 0, wp.z - this.pos.z);
    this.moveTo(dir, speed, dt, !opts.faceYaw, opts.faceYaw);
    // stuck detection
    ai.stuckT += dt;
    if (ai.stuckT > 1.5) {
      if (flatDist(ai.lastPos, this.pos) < 0.4) { ai.path = null; ai.pathT = 0; this.pos.x += (Math.random() - 0.5) * 0.4; this.pos.z += (Math.random() - 0.5) * 0.4; }
      ai.lastPos.copy(this.pos); ai.stuckT = 0;
    }
    return false;
  }

  updateAI(dt) {
    const G = this.G, ai = this.ai, k = G.killer;
    this.backpedal = false;
    if (this.health === 'hooked') {
      if (this.hookPhase === 1 && this.escapeAttempts > 0 && this.hookTimer < 40 && Math.random() < dt * 0.05) {
        this.escapeAttempts--;
        if (Math.random() < 0.04) { this.unhook(this); return; }
      }
      return;
    }
    if (this.health === 'downed') {
      // crawl away from the killer toward the nearest teammate
      const mate = G.survivors.filter((s) => s !== this && s.standing).sort((a, b) => flatDist(a.pos, this.pos) - flatDist(b.pos, this.pos))[0];
      if (this.healers.size || this.canonizing) { this.speed = 0; return; }
      if (k && flatDist(k.pos, this.pos) < 10) { const away = V(this.pos.x - k.pos.x, 0, this.pos.z - k.pos.z); this.moveTo(away, 0.7, dt); }
      else if (mate && flatDist(mate.pos, this.pos) > 3) this.aiPathTo(mate.pos, dt, 0.7);
      else this.speed = 0;
      return;
    }
    if (!this.standing) return;
    const dK = flatDist(k.pos, this.pos);
    const aware = this.knowsKiller();
    ai.t -= dt;

    // glance around while working: a chance to notice the stone behind you
    ai.glanceT -= dt;
    if (ai.glanceT < 0) {
      ai.glanceT = 1.5 + Math.random() * 2;
      if (dK < 16 && G.world.lineOfSight(this.eye(), k.headPos()) && Math.random() < (G.diff?.aiNotice ?? 0.3)) { ai.noticed = G.time; }
    }
    const noticed = G.time - (ai.noticed ?? -99) < 4 && dK < 22;

    // a teammate is being turned to stone: hold the Reliquary's gaze to stop it
    if (!k.toll && G.survivors.some((s) => s.canonizing) && dK < 25 && this.resolve > 15 && G.world.lineOfSight(this.eye(), k.headPos())) {
      this.setAI('watch'); this.cancelActionIfNot();
      this.yaw += angDiff(this.yaw, yawTo(this.pos, k.pos)) * Math.min(1, dt * 8);
      this.speed = 0;
      return;
    }
    // threat response
    if ((aware || noticed) && dK < 12 && !k.carrying) {
      // when its halo burns, look away before the Toll
      const canStare = !k.toll && (this.noBlink > 0 || this.resolve > (ai.state === 'watch' ? 8 : 80));
      if (canStare && dK > 1.6) {
        this.setAI('watch');
        this.cancelActionIfNot();
        const yawK = yawTo(this.pos, k.pos);
        this.yaw += angDiff(this.yaw, yawK) * Math.min(1, dt * 8);
        // back away while holding its gaze
        const away = V(this.pos.x - k.pos.x, 0, this.pos.z - k.pos.z).normalize();
        const side = V(-away.z, 0, away.x).multiplyScalar(Math.sin(G.time * 0.7 + this.id) * 0.6);
        const dir = away.add(side);
        if (dK < 9) { this.backpedal = true; this.moveTo(dir, 1.6, dt, false); } else this.speed = 0;
        return;
      }
      this.setAI('flee');
    }
    if (ai.state === 'flee') {
      ai.fleeT -= dt;
      if (dK > 24 && ai.fleeT <= 0) this.setAI('bell');
      else {
        if (!ai.fleeGoal || ai.fleeT <= 0 || flatDist(ai.fleeGoal, this.pos) < 2) {
          ai.fleeGoal = this.pickFleeGoal(); ai.fleeT = 3;
          ai.path = null;
        }
        // drop a pallet if it's right behind us
        for (const p of G.pallets) {
          if (p.state === 'up' && p.lateral(this.pos) < p.w / 2 + 0.2 && p.normalDist(this.pos) < 1.0 && dK < 5 && p.side(k.pos) !== p.side(this.pos)) {
            this.startAction('drop'); p.drop(this); break;
          }
        }
        this.cancelActionIfNot('drop');
        this.aiPathTo(ai.fleeGoal, dt, this.runSpeed());
        return;
      }
    }
    if (this.action?.type === 'drop') return;

    // altruism: free a hooked teammate if the stone is far away
    const hooked = G.survivors.find((s) => s.health === 'hooked' && (!s.rescuer || s.rescuer === this));
    if (hooked && flatDist(k.pos, hooked.pos) > 14 && (hooked.hookTimer < 45 || hooked.hookPhase === 2)) {
      hooked.rescuer = this;
      this.setAI('rescue');
      const p = V(hooked.post.hang.x, 0, hooked.post.hang.z);
      if (flatDist(p, this.pos) < 1.5) { if (this.action?.type !== 'unhook') this.startAction('unhook', { target: hooked }); this.yaw = yawTo(this.pos, p); this.speed = 0; }
      else { this.cancelAction(); this.aiPathTo(p, dt, this.runSpeed()); }
      return;
    }
    if (hooked?.rescuer === this) hooked.rescuer = null;

    // revive / heal teammates
    if (dK > 18) {
      const hurt = G.survivors.filter((s) => s !== this && (s.health === 'downed' || (s.health === 'injured' && !s.isPlayer && this.health === 'healthy')) && flatDist(s.pos, this.pos) < 25)
        .sort((a, b) => (a.health === 'downed' ? -10 : 0) + flatDist(a.pos, this.pos) - ((b.health === 'downed' ? -10 : 0) + flatDist(b.pos, this.pos)))[0];
      const playerHurt = G.player.health === 'injured' && G.player.speed < 0.2 && !G.player.action && flatDist(G.player.pos, this.pos) < 6 && this.health === 'healthy';
      const tgt = playerHurt ? G.player : hurt;
      if (tgt && (!tgt.healers.size || tgt.healers.has(this)) && (!tgt.healClaim || tgt.healClaim === this)) {
        this.setAI('heal');
        tgt.healClaim = this;
        if (flatDist(tgt.pos, this.pos) < 1.4) { if (this.action?.type !== 'heal') this.startAction('heal', { target: tgt }); this.yaw = yawTo(this.pos, tgt.pos); this.speed = 0; }
        else { this.cancelAction(); this.aiPathTo(tgt.pos, dt, 2.6); }
        return;
      }
      if (this.health === 'injured' && dK > 26 && !G.gatesPowered) {
        this.setAI('mend');
        if (this.action?.type !== 'selfheal') this.startAction('selfheal');
        this.speed = 0;
        return;
      }
    }
    const waiting = this.healClaim && this.healClaim.alive && this.healClaim.ai.state === 'heal' && flatDist(this.healClaim.pos, this.pos) < 26;
    if ((this.healers.size && !this.healers.has(this)) || waiting) { if (!this.healers.size) this.cancelAction(); this.speed = 0; return; }

    // exit gates
    if (G.gatesPowered) {
      this.setAI('gate');
      const gates = G.gates.slice().sort((a, b) => flatDist(a.pos, this.pos) - flatDist(b.pos, this.pos));
      const open = gates.find((g) => g.open);
      if (open) {
        const out = open.pos.clone().addScaledVector(open.inward, -4);
        if (this.aiPathTo(out, dt, this.runSpeed()) || flatDist(out, this.pos) < 1.5) this.speed = 0;
        return;
      }
      const g = gates[0];
      const at = g.lever.clone().addScaledVector(g.inward, 0.9);
      if (flatDist(at, this.pos) < 1.0) { if (this.action?.type !== 'gate') this.startAction('gate', { gate: g }); this.yaw = yawTo(this.pos, g.lever); this.speed = 0; }
      else { this.cancelAction(); this.aiPathTo(at, dt, this.runSpeed()); }
      return;
    }
    if (G.hatch && G.survivors.filter((s) => s.alive).length === 1) {
      if (flatDist(G.hatch.pos, this.pos) < 1.2) { if (!this.action) this.startAction('hatch'); }
      else this.aiPathTo(G.hatch.pos, dt, this.runSpeed());
      return;
    }

    // ring bells
    this.setAI('bell');
    if (!ai.bell || ai.bell.done) {
      const kp = k.pos;
      const score = (b) => flatDist(b.pos, this.pos) * 0.6 - b.progress * 20 + b.ringers.size * 6 + (flatDist(b.pos, kp) < 14 ? 40 : 0);
      ai.bell = G.bells.filter((b) => !b.done).sort((a, b) => score(a) - score(b))[0];
      ai.slot = null;
    }
    const b = ai.bell; if (!b) { this.speed = 0; return; }
    if (!ai.slot || b.slotBlocked(ai.slot) || [...b.ringers].some((r) => r !== this && flatDist(r.pos, ai.slot) < 0.6)) { ai.slot = b.freeSlot(this.pos) || b.slots[0]; ai.slotT = 0; }
    // could not reach this slot for a while: try another one, then another bell
    if (flatDist(ai.slot, this.pos) < 3 && flatDist(ai.slot, this.pos) > 0.5) {
      ai.slotT = (ai.slotT || 0) + dt;
      if (ai.slotT > 5) { ai.slotT = 0; const alt = b.freeSlot(this.pos, ai.slot); if (alt) ai.slot = alt; else ai.bell = null; ai.path = null; return; }
    }
    if (flatDist(ai.slot, this.pos) < 0.5) {
      ai.slotT = 0;
      if (this.action?.type !== 'ring') this.startAction('ring', { bell: b });
      this.yaw += angDiff(this.yaw, yawTo(this.pos, b.pos)) * Math.min(1, dt * 8);
      this.speed = 0;
      // toll-check misses make noise
      if (Math.random() < dt * 0.012) { b.progress = Math.max(0, b.progress - 0.08); G.audio.crack(b.pos.clone().setY(2.5)); G.noise(b.pos, 80, 'crack'); }
    } else {
      this.cancelAction();
      this.aiPathTo(ai.slot, dt, dK < 30 ? 2.26 : this.runSpeed());
    }
  }

  cancelActionIfNot(type) { if (this.action && this.action.type !== type) this.cancelAction(); }

  setAI(s) {
    if (this.ai.state === s) return;
    this.ai.state = s; this.ai.path = null;
    if (s !== 'bell') this.ai.slot = null;
    for (const o of this.G.survivors) { if (o.rescuer === this && s !== 'rescue') o.rescuer = null; if (o.healClaim === this && s !== 'heal') o.healClaim = null; }
  }

  pickFleeGoal() {
    const G = this.G, k = G.killer;
    let best = null, bs = -1e9;
    for (let i = 0; i < 10; i++) {
      const a = Math.random() * Math.PI * 2, r = 8 + Math.random() * 10;
      const p = { x: this.pos.x + Math.cos(a) * r, z: this.pos.z + Math.sin(a) * r };
      if (Math.abs(p.x) > HALF - 3 || Math.abs(p.z) > HALF - 3) continue;
      const c = G.world.cellIndex(p.x, p.z); if (c < 0 || G.world.grid[c] !== 0) continue;
      let s = flatDist(p, k.pos) * 1.5 - flatDist(p, this.pos) * 0.3;
      const toK = V(k.pos.x - this.pos.x, 0, k.pos.z - this.pos.z).normalize();
      const toP = V(p.x - this.pos.x, 0, p.z - this.pos.z).normalize();
      s -= Math.max(0, toK.dot(toP)) * 25;
      for (const pl of G.pallets) if (pl.state === 'up' && flatDist(pl.center, p) < 4) s += 6;
      for (const w of G.world.windows) if (flatDist(w, p) < 4) s += 4;
      if (s > bs) { bs = s; best = p; }
    }
    return best ? V(best.x, 0, best.z) : V(-k.pos.x, 0, -k.pos.z);
  }
}

// copy joint rotations from one rig clone to another
export function copyPose(src, dst) {
  const a = [], b = [];
  src.traverse((o) => a.push(o)); dst.traverse((o) => b.push(o));
  for (let i = 0; i < a.length && i < b.length; i++) { b[i].position.copy(a[i].position); b[i].rotation.copy(a[i].rotation); b[i].scale.copy(a[i].scale); b[i].visible = a[i].visible; }
}
