// THE RELIQUARY — a saint carved to hold a relic that was never a saint's bone.
// It is stone while any survivor has it on screen with clear line of sight.
// Unwatched, it is fast and silent but for the grinding of stone.
import * as THREE from 'three';
import { buildReliquary, poseReliquary, auraClone, buildShroud, RELIQUARY_POSES } from './models.js';
import * as RM from './models/reliquary.js';
import { V, angDiff, yawTo, flatDist, copyPose } from './entities.js';
import { clamp } from './noise.js';

// Model hooks for tiers / glow / head-turn (optional until the upgraded model lands).
const setTier = (m, t) => RM.setReliquaryTier?.(m, t);
const setLook = (m, y, p) => RM.setReliquaryLook?.(m, y, p);
const fxUpdate = (m, fx) => RM.updateReliquaryFX?.(m, fx);
const hasFX = () => typeof RM.updateReliquaryFX === 'function';
const pose = (m, name, fallback = 'claw') => poseReliquary(m, RELIQUARY_POSES[name] ? name : fallback);

export const TIER_NAMES = ['', 'Penitent', 'Martyr', 'Saint Unbound'];

const POSES = {
  chaseNear: ['lunge', 'claw', 'reach'],
  chaseFar: ['reach', 'stalk', 'lunge'],
  search: ['stalk', 'tilt', 'beckon'],
  patrol: ['tilt', 'beckon', 'stalk', 'weep', 'pray'],
};

let SENT_ID = 0;
export class Sentinel {
  constructor(G, pos, yaw, pose) {
    this.G = G; this.id = SENT_ID++;
    this.pos = pos.clone(); this.pos.y = 0; this.yaw = yaw; this.pose = pose;
    this.model = buildReliquary(G.M, { alive: false });
    setTier(this.model, G.killer ? G.killer.tier : 1);
    this.cloth = buildShroud(G.M); this.cloth.visible = false;
    G.world.root.add(this.model); G.world.root.add(this.cloth);
    this.circle = { x: 0, z: 0, r: 0.45 };
    this.shroud = 0; this.lookT = Math.random() * 0.25; this.fx = { time: 0, glow: 0, relic: 0, wings: 0.4, halo: 0 };
    this.moveTo(this.pos, yaw, pose);
  }
  moveTo(p, yaw, pose) {
    this.pos.set(p.x, 0, p.z); this.yaw = yaw; this.pose = RELIQUARY_POSES[pose] ? pose : 'pray';
    this.model.position.copy(this.pos); this.model.rotation.y = yaw;
    poseReliquary(this.model, this.pose);
    this.cloth.position.copy(this.pos);
    this.circle.x = p.x; this.circle.z = p.z;
  }
  setShroud(t) { this.shroud = t; this.cloth.visible = true; this.G.audio.vault(this.pos.clone().setY(1.5), false); }
  update(dt) {
    const G = this.G;
    if (this.shroud > 0) { this.shroud -= dt; if (this.shroud <= 0) this.cloth.visible = false; }
    // the decoys turn their heads toward you too, but only while nobody is looking
    this.lookT -= dt;
    if (this.lookT <= 0 && this.shroud <= 0) {
      this.lookT = 0.25;
      if (!G.isWatched(this.samplePoints())) {
        const s = nearestSurvivor(G, this.pos, 12);
        if (s) setLook(this.model, angDiff(this.yaw, yawTo(this.pos, s.pos)), Math.atan2(s.eye().y - 2.3, Math.max(0.5, flatDist(s.pos, this.pos))));
        else setLook(this.model, 0, 0);
      }
    }
    if (hasFX() && G.killer) { this.fx.time = G.time; this.fx.wings = G.killer.tier >= 3 ? 0.4 : 0; fxUpdate(this.model, this.fx); }
  }
  samplePoints() { return [V(this.pos.x, 1.95, this.pos.z), V(this.pos.x, 1.1, this.pos.z)]; }
}

function nearestSurvivor(G, pos, maxD) {
  let best = null, bd = maxD;
  for (const s of G.survivors) {
    if (!s.alive || s.health === 'carried') continue;
    const d = flatDist(s.pos, pos);
    if (d < bd) { bd = d; best = s; }
  }
  return best;
}

// A survivor the Reliquary turned to stone. It stands where they fell and the
// Reliquary can step out of it as if it were one of its own Sentinels.
export class Memorial {
  constructor(G, s) {
    this.G = G; this.survivor = s; this.model = s.model; this.isMemorial = true;
    this.pos = s.pos.clone(); this.pos.y = 0; this.yaw = s.yaw;
    this.circle = { x: this.pos.x, z: this.pos.z, r: 0.38 };
  }
  samplePoints() { return [V(this.pos.x, 1.5, this.pos.z), V(this.pos.x, 0.9, this.pos.z)]; }
  shatter() {
    const G = this.G;
    this.model.visible = false;
    G.fx.debris(this.pos); G.audio.shatter(this.pos.clone().setY(1));
    const i = G.memorials.indexOf(this); if (i >= 0) G.memorials.splice(i, 1);
  }
}

export class Killer {
  constructor(G) {
    this.G = G;
    this.model = buildReliquary(G.M, { alive: true });
    G.scene.add(this.model);
    this.aura = auraClone(this.model, G.M.aura); this.aura.visible = false; G.scene.add(this.aura);
    this.cloth = buildShroud(G.M); this.cloth.visible = false; G.scene.add(this.cloth);
    this.pos = V(); this.yaw = 0;
    this.watchers = 0; this.petrified = false; this.frozenT = 0; this.unwatchedT = 0; this.lament = false;
    this.state = 'patrol'; this.action = null; this.target = null; this.lastSeen = null; this.lastSeenT = -99;
    this.path = null; this.pathT = 0; this.goal = null; this.goalBell = null; this.thinkT = 0;
    this.cooldown = 0; this.stunT = 0; this.veilT = 0; this.carrying = null;
    this.transferCD = 25; this.plantCD = 20; this.moving = false; this.speed = 0;
    this.poseName = 'tilt'; this.variant = 0; this.heardT = -99; this.stuckT = 0; this.lastPos = V();
    this.circle = { x: 0, z: 0, r: 0.45 };
    this._pts = [V(), V(), V(), V(), V(), V()];
    // ascension, Toll of Stone, visuals
    this.tier = 1; this.tollCD = 25; this.toll = null; this.watchedT = 0;
    this.glow = 0; this.wings = 0; this.trailAcc = 0; this.trailSide = 1; this.releaseT = 0;
    this.fx = { time: 0, glow: 0, relic: 1, wings: 0, halo: 0 };
    setTier(this.model, 1);
    // afterimage left behind when it moves during your blink
    this.ghostMat = new THREE.MeshBasicMaterial({ color: 0xaeb8c6, transparent: true, opacity: 0, depthWrite: false });
    this.ghost = auraClone(this.model, this.ghostMat); this.ghost.visible = false; G.scene.add(this.ghost);
    this.ghostT = 0; this.ghostPending = false; this.ghostPos = V();
    poseReliquary(this.model, 'tilt');
  }

  // Grow into the next form of the statue.
  ascend(tier) {
    const G = this.G;
    if (tier <= this.tier) return;
    this.tier = tier;
    setTier(this.model, tier);
    for (const st of G.sentinels) setTier(st.model, tier);
    this.glow = 1;
    G.audio.ascend(this.headPos());
    G.fx.dust(this.pos.clone().setY(1.6), 50);
    G.fx.shockwave(this.pos, 10, 0xffb070);
    G.onAscend(this, tier);
  }

  // The player's eyes are closing: remember where the stone stood.
  snapGhost() {
    copyPose(this.model, this.ghost);
    this.ghost.position.copy(this.model.position); this.ghost.rotation.copy(this.model.rotation);
    this.ghostPos.copy(this.pos); this.ghostPending = true;
  }

  scald() {
    const G = this.G;
    this.stun(3, 'holy');
    this.transferCD = Math.max(this.transferCD, 30);
    if (this.toll) { this.toll = null; G.audio.fizzle(this.headPos()); }
    this.tollCD = Math.max(this.tollCD, 15);
    G.toast('The holy water scalds the Reliquary', 'good');
  }

  nearestWatcherDist() {
    let d = 1e9;
    for (const s of this.G.survivors) if (s.watching) d = Math.min(d, flatDist(s.pos, this.pos));
    return d;
  }

  place(p) { this.pos.set(p.x, 0, p.z); this.sync(0); }
  forward() { return V(Math.sin(this.yaw), 0, Math.cos(this.yaw)); }
  headPos() { return V(this.pos.x, 2.3, this.pos.z); }
  eye() { return V(this.pos.x, 2.2, this.pos.z); }

  // World-space points that count as "seeing" the Reliquary.
  samplePoints() {
    const ud = this.model.userData;
    this.model.updateMatrixWorld(true);
    ud.head.getWorldPosition(this._pts[0]);
    ud.relic.getWorldPosition(this._pts[1]);
    ud.arms.l.hand.getWorldPosition(this._pts[2]);
    ud.arms.r.hand.getWorldPosition(this._pts[3]);
    this._pts[4].set(this.pos.x, 0.9, this.pos.z);
    this._pts[5].set(this.pos.x, 0.25, this.pos.z);
    return this._pts;
  }

  stun(t, why) {
    this.stunT = Math.max(this.stunT, t);
    if (this.action?.type === 'canonize') this.action.target.endCanonize(false);
    if (this.toll) { this.toll = null; this.G.audio.fizzle(this.headPos()); this.tollCD = Math.max(this.tollCD, 8); }
    this.action = null; this.path = null;
    if (this.carrying) this.dropCarried(false);
    this.G.audio.stoneShift(this.pos.clone().setY(1.5), 0.6);
    this.G.fx.dust(this.pos.clone().setY(1.8), 30);
    if (why === 'pallet') this.G.toast('The Reliquary is stunned', 'good');
  }

  veil() {
    this.veilT = 5; this.cloth.visible = true;
    this.stun(5, 'veil');
    this.G.toast('You veiled the Reliquary', 'good');
  }

  dropCarried(wiggled) {
    const s = this.carrying; if (!s) return;
    this.carrying = null;
    s.health = 'injured'; s.wiggle = 0;
    s.pos.copy(this.pos).addScaledVector(this.forward(), 0.9); s.pos.y = 0;
    this.G.world.collide(s.pos, 0.32);
    s.boost = 2; s.immune = 0;
    if (wiggled) { this.stunT = Math.max(this.stunT, 3); this.G.toast(`${s.name} wriggled free`, 'good'); if (s.isPlayer) this.G.addScore('survival', 1200, 'Wiggled free'); }
  }

  // ---------------------------------------------------------------- perception
  detect(s) {
    if (!s.alive || s.health === 'hooked' || s.health === 'carried') return false;
    const d = flatDist(s.pos, this.pos);
    if (d > 28) return false;
    if (s.crouch && d > 9 && !(s.speed > 3)) return false;
    if (d > 7 && Math.abs(angDiff(this.yaw, yawTo(this.pos, s.pos))) > 1.35) return false;
    return this.G.world.lineOfSight(this.eye(), s.chest());
  }

  // ---------------------------------------------------------------- update
  update(dt) {
    const G = this.G;
    this.cooldown = Math.max(0, this.cooldown - dt);
    this.releaseT = Math.max(0, (this.releaseT || 0) - (this.watchers ? 0 : dt));
    this.transferCD -= dt; this.plantCD -= dt;
    if (this.veilT > 0) { this.veilT -= dt; if (this.veilT <= 0) this.cloth.visible = false; }

    const was = this.petrified;
    this.petrified = this.watchers > 0;
    if (this.petrified) {
      this.frozenT += dt * (1 + (this.watchers - 1) * 0.5); this.unwatchedT = 0;
      if (!was && flatDist(G.player.pos, this.pos) < 14) G.audio.settle(this.pos.clone().setY(1.2));
    } else {
      this.unwatchedT += dt;
      if (this.unwatchedT > 2.5) this.frozenT = 0;
      if (was) {
        this.variant = Math.floor(Math.random() * 5);
        // pent-up stone: the longer it was held, the harder it lunges when released
        if (this.frozenT > 2.5) this.releaseT = Math.min(1.0, 0.35 + this.frozenT * 0.08);
      }
    }
    // a votive candle's light keeps it from Lamenting or tolling
    const candle = G.nearCandle(this.pos);
    if (candle) this.frozenT = Math.min(this.frozenT, 3.9);
    this.lament = this.frozenT > (this.tier >= 3 ? 4 : 5);
    if (this.lament && this.petrified && Math.random() < dt * 6) G.fx.dust(this.headPos().add(V(0, -0.2, 0)), 2);

    // Toll of Stone: held under a long stare, it rings out and forces every eye shut
    this.tollCD -= dt;
    this.watchedT = this.petrified ? this.watchedT + dt : 0;
    if (!this.toll && this.tier >= 2 && this.tollCD <= 0 && this.watchedT > 3 && this.stunT <= 0 && !this.carrying && !candle && this.nearestWatcherDist() < 22) {
      this.toll = { t: 0, dur: 1.8, lost: 0 };
      G.audio.tollCharge(this.headPos(), 1.8);
      G.onTollCharge(this);
    }
    if (this.toll) {
      const tl = this.toll;
      tl.t += dt; tl.lost = this.petrified ? 0 : tl.lost + dt;
      if (tl.lost > 0.6) { this.toll = null; this.tollCD = 8; G.audio.fizzle(this.headPos()); }
      else if (tl.t >= tl.dur) {
        this.toll = null; this.tollCD = this.tier >= 3 ? 30 : 40;
        G.tollOfStone(this);
        this.releaseT = Math.max(this.releaseT, 1.0); this.frozenT = 0;
      }
    }
    // the afterimage appears once the player's eyes reopen
    if (this.ghostPending && !G.player.blinking) {
      this.ghostPending = false;
      if (flatDist(this.pos, this.ghostPos) > 1.2) { this.ghost.visible = true; this.ghostT = 1.6; }
    }
    if (this.ghostT > 0) { this.ghostT -= dt; this.ghostMat.opacity = 0.34 * Math.max(0, this.ghostT / 1.6); if (this.ghostT <= 0) this.ghost.visible = false; }

    this.moving = false; this.speed = 0;
    if (this.stunT > 0) { this.stunT -= dt; this.sync(dt); return; }
    if (this.petrified) { this.sync(dt); return; }

    this.thinkT -= dt;
    if (this.thinkT <= 0) { this.thinkT = 0.25; this.think(); }
    this.act(dt);
    this.choosePose();
    this.sync(dt);
  }

  think() {
    const G = this.G;
    if (this.action) return;
    if (this.carrying) { this.state = 'carry'; return; }
    let best = null, bs = 1e9;
    for (const s of G.survivors) {
      if (!this.detect(s)) continue;
      const d = flatDist(s.pos, this.pos);
      const sc = d + (s.health === 'downed' ? -4 : 0) + (s === this.target ? -5 : 0) + (s.health === 'injured' ? -1 : 0);
      if (sc < bs) { bs = sc; best = s; }
    }
    // The Last Rite: after four bells it senses survivors whose eyes are failing
    if (!best && G.bellsRung >= 4) {
      for (const s of G.survivors) if (s.standing && s.resolve < 25 && flatDist(s.pos, this.pos) < 40) { best = s; break; }
    }
    if (best) {
      if (this.target !== best) this.path = null;
      this.target = best; this.lastSeen = best.pos.clone(); this.lastSeenT = G.time; this.state = 'chase';
      return;
    }
    if (this.target && G.time - this.lastSeenT < 9 && this.target.alive) {
      this.state = 'search';
      // follow fresh scratch marks
      let mark = null;
      for (const m of G.scratches) if (m.t > this.lastSeenT - 1 && flatDist(m, this.pos) < 8 && (!mark || m.t > mark.t)) mark = m;
      if (mark && flatDist(mark, this.pos) > 1) this.goal = V(mark.x, 0, mark.z);
      else if (this.lastSeen && flatDist(this.lastSeen, this.pos) > 1.2) this.goal = this.lastSeen;
      else this.goal = this.target.pos.clone().add(V((Math.random() - 0.5) * 6, 0, (Math.random() - 0.5) * 6));
      return;
    }
    this.target = null;
    // noises
    let n = null;
    for (const e of G.noises) if (G.time - e.t < 5 && flatDist(e.pos, this.pos) < e.r && e.t > this.heardT && (!n || e.t > n.t)) n = e;
    if (n) { this.heardT = n.t; this.state = 'investigate'; this.goal = n.pos.clone(); this.goalBell = null; this.path = null; return; }
    if (this.state === 'investigate' && this.goal && flatDist(this.goal, this.pos) > 2) return;
    if (this.state !== 'patrol' || !this.goal) { this.state = 'patrol'; this.pickPatrol(); }
  }

  pickPatrol() {
    const G = this.G;
    const bells = G.bells.filter((b) => !b.done);
    if (bells.length && Math.random() < 0.85) {
      const sc = (b) => -b.progress * 30 + flatDist(b.pos, this.pos) * 0.4 + Math.random() * 18 - b.ringers.size * 25;
      const pool = bells.length > 1 ? bells.filter((b) => b !== this.lastBell) : bells;
      this.goalBell = pool.sort((a, b) => sc(a) - sc(b))[0];
      this.lastBell = this.goalBell;
      this.goal = this.goalBell.pos.clone();
    } else { this.goalBell = null; const p = G.world.randomFreePoint(Math.random, 5, 45); this.goal = V(p.x, 0, p.z); }
    this.path = null;
  }

  act(dt) {
    const G = this.G;
    if (this.action) return this.doAction(dt);
    const mult = (G.diff?.killerSpeed ?? 1) * (1 + (this.tier - 1) * 0.05);
    const rel = this.releaseT > 0 ? 8.2 + (this.tier - 1) * 0.4 : 0;
    const surge = Math.max(7.2 * mult, rel), base = Math.max(5.0 * mult, rel), slow = 1.4;
    let spd = this.cooldown > 0 ? slow : base;

    if (this.state === 'carry' && this.carrying) {
      const post = this.nearestPost();
      if (!post) { this.dropCarried(false); return; }
      const p = V(post.hang.x, 0, post.hang.z);
      if (flatDist(p, this.pos) < 1.4) { this.yaw = yawTo(this.pos, p); this.action = { type: 'hook', t: 0, dur: 1.0, post }; return; }
      this.travel(p, 3.9, dt);
      return;
    }
    if (this.state === 'chase' && this.target) {
      const t = this.target, d = flatDist(t.pos, this.pos);
      if (!t.alive || t.health === 'hooked' || t.health === 'carried') { this.target = null; this.state = 'patrol'; this.goal = null; return; }
      if (t.health === 'downed') {
        if (d < 1.4) {
          // a survivor already bound twice is not carried: it turns them to stone
          if (t.hookCount >= 2) { this.yaw = yawTo(this.pos, t.pos); this.action = { type: 'canonize', t: 0, dur: 3.2, target: t }; t.beginCanonize(); G.onCanonizeStart(t); }
          else this.action = { type: 'pickup', t: 0, dur: 1.1, target: t };
          return;
        }
        this.travel(t.pos, d < 7 ? surge : base, dt);
        return;
      }
      if (d < 2.4 && this.cooldown <= 0 && !t.vault) { this.yaw = yawTo(this.pos, t.pos); this.action = { type: 'swing', t: 0, dur: 0.28, target: t }; return; }
      if (d > 26 && this.tryTransfer(t.pos)) return;
      this.travel(t.pos, this.cooldown > 0 ? slow : d < 6 ? surge : base, dt, d < 8);
      return;
    }
    if (!this.goal) { this.pickPatrol(); return; }
    if (this.tryTransfer(this.goal)) return;
    const arrived = this.travel(this.goal, this.state === 'patrol' ? 4.0 : spd, dt) || flatDist(this.goal, this.pos) < 1.6;
    if (arrived) {
      const b = this.goalBell;
      if (b && !b.done && b.progress > 0.05 && !b.regress && b.ringers.size === 0 && flatDist(b.pos, this.pos) < 3) {
        this.yaw = yawTo(this.pos, b.pos);
        this.action = { type: 'kick', t: 0, dur: 1.6, bell: b }; return;
      }
      if (this.plantCD <= 0 && G.sentinels.length < 6 && !G.survivors.some((s) => s.alive && flatDist(s.pos, this.pos) < 14)) {
        this.action = { type: 'plant', t: 0, dur: 1.5 }; return;
      }
      this.goal = null; this.state = 'patrol';
    }
  }

  doAction(dt) {
    const G = this.G, a = this.action;
    a.t += dt;
    if (a.type === 'swing') {
      if (a.t >= a.dur) {
        const t = a.target;
        this.action = null;
        if (t.standing && !t.vault && flatDist(t.pos, this.pos) < 3.0 && G.world.lineOfSight(this.eye(), t.chest())) {
          const r = t.hit();
          this.cooldown = 2.0;
          G.fx.dust(t.chest(), 8);
          if (r === 'downed') G.toast(`${t.name} is down`, 'bad');
        } else { this.cooldown = 1.4; G.audio.vault(this.pos.clone().setY(1.5), false); }
      }
    } else if (a.type === 'pickup') {
      const t = a.target;
      if (t.health !== 'downed' || flatDist(t.pos, this.pos) > 2) { this.action = null; return; }
      if (a.t >= a.dur) {
        this.action = null;
        t.cancelAction(); for (const h of [...t.healers]) h.cancelAction(); t.healers.clear();
        t.health = 'carried'; t.wiggle = 0; t.vault = null;
        this.carrying = t; this.state = 'carry'; this.path = null;
        G.audio.stoneShift(this.pos.clone().setY(1), 0.3);
      }
    } else if (a.type === 'canonize') {
      const t = a.target;
      if (t.health !== 'downed' || flatDist(t.pos, this.pos) > 2.2) { this.action = null; t.endCanonize(false); return; }
      t.setStone(a.t / a.dur);
      if (Math.random() < dt * 10) G.fx.dust(t.chest(), 2);
      if (a.t >= a.dur) {
        this.action = null; t.endCanonize(true);
        this.target = null; this.state = 'patrol'; this.goal = null;
      }
    } else if (a.type === 'hook') {
      if (a.t >= a.dur) {
        this.action = null;
        const s = this.carrying; this.carrying = null;
        if (s && !a.post.occupant) s.hook(a.post); else if (s) { s.health = 'downed'; s.pos.copy(this.pos); }
        this.target = null; this.state = 'patrol'; this.goal = null;
      }
    } else if (a.type === 'break') {
      if (a.pallet.state !== 'down') { this.action = null; return; }
      if (a.t >= a.dur) { this.action = null; a.pallet.break(); }
    } else if (a.type === 'vault') {
      const f = Math.min(1, a.t / a.dur);
      this.pos.lerpVectors(a.from, a.to, f); this.pos.y = Math.sin(f * Math.PI) * 0.6;
      if (f >= 1) { this.pos.y = 0; this.action = null; }
    } else if (a.type === 'kick') {
      if (a.t >= a.dur) {
        this.action = null;
        a.bell.regress = true; a.bell.progress = Math.max(0, a.bell.progress - 0.04);
        G.audio.chime(a.bell.pos.clone().setY(2.5), 140, 0.5); G.audio.settle(a.bell.pos.clone().setY(1));
        this.goal = null; this.state = 'patrol';
      }
    } else if (a.type === 'plant') {
      if (a.t >= a.dur) {
        this.action = null; this.plantCD = 35 + Math.random() * 15;
        const p = this.pos.clone().addScaledVector(this.forward(), 1.4);
        const c = G.world.cellIndex(p.x, p.z);
        const nearBell = G.bells.some((b) => flatDist(b.pos, p) < 2.8);
        if (c >= 0 && G.world.grid[c] === 0 && !nearBell) {
          const poses = ['pray', 'tilt', 'beckon', 'reach', 'weep'];
          G.sentinels.push(new Sentinel(G, p, this.yaw + Math.PI + (Math.random() - 0.5), poses[Math.floor(Math.random() * poses.length)]));
          G.audio.stoneShift(p.clone().setY(1), 0.35);
        }
        this.goal = null; this.state = 'patrol';
      }
    }
  }

  nearestPost() {
    let best = null, bd = 1e9;
    for (const p of this.G.posts) { if (p.occupant) continue; const d = flatDist(p.pos, this.pos); if (d < bd) { bd = d; best = p; } }
    return best;
  }

  // Swap bodies with an unwatched Sentinel near the goal.
  tryTransfer(goal) {
    const G = this.G;
    if (this.transferCD > 0 || this.carrying || !goal || flatDist(this.pos, goal) < 26) return false;
    let best = null, bd = 14;
    for (const s of G.sentinels) {
      if (s.shroud > 0) continue;
      const d = flatDist(s.pos, goal);
      if (d < bd && flatDist(s.pos, this.pos) > 15 && !G.isWatched(s.samplePoints())) { bd = d; best = s; }
    }
    // it can also step out of the statue of someone it canonized
    for (const m of G.memorials) {
      const d = flatDist(m.pos, goal);
      if (d < bd && flatDist(m.pos, this.pos) > 15 && !G.isWatched(m.samplePoints())) { bd = d; best = m; }
    }
    if (!best) return false;
    const op = this.pos.clone(), oy = this.yaw, opose = this.poseName;
    if (best.isMemorial) {
      const dir = V(goal.x - best.pos.x, 0, goal.z - best.pos.z).normalize();
      const p = best.pos.clone().addScaledVector(dir, 1.1);
      G.world.collide(p, 0.45, G.killerCircles());
      this.pos.copy(p); this.yaw = Math.atan2(dir.x, dir.z);
      if (G.sentinels.length < 6) G.sentinels.push(new Sentinel(G, op, oy, opose));
    } else {
      this.pos.copy(best.pos); this.yaw = best.yaw; this.poseName = best.pose;
      pose(this.model, this.poseName, 'pray');
      best.moveTo(op, oy, opose);
    }
    G.audio.stoneShift(op.clone().setY(1.2), 0.5); G.audio.stoneShift(this.pos.clone().setY(1.2), 0.5);
    this.transferCD = 30; this.path = null;
    return true;
  }

  // Move toward a point using the nav grid; handles windows and pallets.
  travel(goal, speed, dt, direct = false) {
    const G = this.G;
    if (direct && G.world.walkable(this.pos, goal)) {
      return this.step(V(goal.x - this.pos.x, 0, goal.z - this.pos.z), speed, dt, flatDist(goal, this.pos));
    }
    this.pathT -= dt;
    if (!this.path || this.pathT <= 0 || !this.pathGoal || flatDist(this.pathGoal, goal) > 1.2) {
      this.path = G.world.findPath(this.pos.x, this.pos.z, goal.x, goal.z, 'killer', 45000);
      this.pathGoal = V(goal.x, 0, goal.z); this.pathT = this.state === 'chase' ? 0.35 : 1.2;
      if (!this.path) { this.path = []; this.pathT = 0.6; if (this.state === 'patrol') this.pickPatrol(); return true; }
    }
    const path = this.path;
    if (!path.length) return true;
    let wp = path[0];
    if (wp.portal) {
      const isWin = wp.portal.type === 'window';
      const obj = isWin ? G.world.windows[wp.portal.id] : G.pallets[wp.portal.id];
      if (!obj || (!isWin && obj.state !== 'down')) { path.shift(); return false; }
      const c = isWin ? V(obj.x, 0, obj.z) : obj.center, n = isWin ? V(obj.nx, 0, obj.nz) : obj.n;
      const lat = isWin ? V(obj.ax, 0, obj.az) : obj.a;
      const sd = (this.pos.x - c.x) * n.x + (this.pos.z - c.z) * n.z;
      const ld = Math.abs((this.pos.x - c.x) * lat.x + (this.pos.z - c.z) * lat.z);
      const appr = c.clone().addScaledVector(n, Math.sign(sd || 1) * 0.9);
      if (flatDist(appr, this.pos) < 0.5 || (Math.abs(sd) < 1.2 && ld < (isWin ? obj.halfW : obj.w / 2) + 0.4)) {
        path.shift();
        this.yaw = Math.atan2(-Math.sign(sd || 1) * n.x, -Math.sign(sd || 1) * n.z);
        if (isWin) this.action = { type: 'vault', t: 0, dur: 1.5, from: this.pos.clone(), to: c.clone().addScaledVector(n, -Math.sign(sd || 1) * 0.9) };
        else { this.action = { type: 'break', t: 0, dur: 2.4, pallet: obj }; G.audio.settle(c.clone().setY(0.8)); }
        return false;
      }
      return this.step(V(appr.x - this.pos.x, 0, appr.z - this.pos.z), speed, dt, 9);
    }
    const d = flatDist(wp, this.pos);
    if (d < 0.5) { path.shift(); return !path.length; }
    this.step(V(wp.x - this.pos.x, 0, wp.z - this.pos.z), speed, dt, d);
    this.stuckT += dt;
    if (this.stuckT > 1.5) { if (flatDist(this.lastPos, this.pos) < 0.4) { this.path = null; this.pos.x += (Math.random() - 0.5) * 0.5; this.pos.z += (Math.random() - 0.5) * 0.5; } this.lastPos.copy(this.pos); this.stuckT = 0; }
    return false;
  }

  step(dir, speed, dt, maxD = 99) {
    if (dir.lengthSq() < 1e-6) return true;
    dir.normalize();
    const mv = Math.min(speed * dt, maxD);
    this.pos.addScaledVector(dir, mv);
    const circles = this.G.killerCircles();
    this.G.world.collide(this.pos, 0.42, circles);
    this.yaw += angDiff(this.yaw, Math.atan2(dir.x, dir.z)) * Math.min(1, dt * 12);
    this.moving = true; this.speed = speed;
    // cracked footprints where the stone dragged itself
    this.trailAcc += mv;
    if (this.trailAcc > 1.1) {
      this.trailAcc = 0; this.trailSide = -this.trailSide;
      const rx = Math.cos(this.yaw) * 0.2 * this.trailSide, rz = -Math.sin(this.yaw) * 0.2 * this.trailSide;
      this.G.fx.crack(this.pos.x + rx, this.pos.z + rz, Math.random() * 6.28, 0.7 + Math.random() * 0.5);
    }
    return mv >= maxD - 1e-4;
  }

  choosePose() {
    const a = this.action;
    let p;
    if (a) p = { swing: 'lunge', pickup: 'stalk', hook: 'carry', break: 'claw', kick: 'claw', vault: 'stalk', plant: 'pray', canonize: RELIQUARY_POSES.canonize ? 'canonize' : 'reach' }[a.type];
    else if (this.carrying) p = 'carry';
    else if (this.state === 'chase' && this.target) {
      const list = flatDist(this.target.pos, this.pos) < 5 ? POSES.chaseNear : POSES.chaseFar;
      p = list[this.variant % list.length];
    } else if (this.state === 'search' || this.state === 'investigate') p = POSES.search[this.variant % POSES.search.length];
    else p = POSES.patrol[this.variant % POSES.patrol.length];
    if (!RELIQUARY_POSES[p]) p = 'claw';
    if (p !== this.poseName) { this.poseName = p; poseReliquary(this.model, p); }
    // its head always turns to the nearest survivor: whenever you look back, it is staring at you
    const s = nearestSurvivor(this.G, this.pos, 18);
    if (s) setLook(this.model, angDiff(this.yaw, yawTo(this.pos, s.pos)), Math.atan2(s.eye().y - 2.3, Math.max(0.5, flatDist(s.pos, this.pos))));
  }

  sync(dt) {
    const G = this.G, m = this.model;
    m.position.copy(this.pos); m.rotation.y = this.yaw;
    this.circle.x = this.pos.x; this.circle.z = this.pos.z;
    this.cloth.position.copy(this.pos);
    const pulse = 0.6 + Math.sin(G.time * (this.lament ? 9 : 2.2)) * 0.25;
    const k = Math.min(1, dt * 3);
    const glowWant = this.tier >= 2 ? (this.toll ? 1 : this.moving ? 0.85 : 0.2) : 0;
    this.glow += (glowWant - this.glow) * k;
    // wings only move while unseen (it is stone when watched)
    if (!this.petrified) this.wings += ((this.tier >= 3 ? (this.moving || this.action ? 1 : 0.45) : 0) - this.wings) * Math.min(1, dt * 4);
    if (hasFX()) {
      const f = this.fx; f.time = G.time; f.glow = this.glow; f.relic = clamp(pulse * (this.lament ? 1.6 : 1), 0, 1);
      f.wings = this.wings; f.halo = this.toll ? 1 : this.tier >= 2 ? 0.25 : 0;
      fxUpdate(m, f);
    } else {
      m.userData.relic.material.color.setRGB(0.55 * pulse * (this.lament ? 1.8 : 1), 0.11 * pulse, 0.02 * pulse);
    }
    const loud = G.player.hasPerk('stonehearing') ? 1.7 : 1;
    G.audio.grind('killer', this.pos.clone().setY(0.6), this.moving ? Math.min(1, this.speed / 5) * loud : 0);
    const dP = flatDist(G.player.pos, this.pos);
    G.audio.whisper('killer', this.headPos(), !this.petrified && G.player.alive && dP < 13 ? (1 - dP / 13) * loud : 0);
    if (this.aura.visible) { this.aura.position.copy(m.position); this.aura.rotation.copy(m.rotation); copyPose(m, this.aura); }
  }
}
