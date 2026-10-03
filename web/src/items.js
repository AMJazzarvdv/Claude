// Reliquary chests and the things inside them. Survivors carry one item.
//   Hand Mirror    hold F: watch what is behind you (your gaze counts backward)
//   Votive Candle  F: set it down; its light stops Lament and the Toll nearby
//   Holy Water     F: throw; shatters a Sentinel or scalds the Reliquary
//   Linen Bandages F: bind your wounds in six seconds
import * as THREE from 'three';
import * as PM from './models/props.js';
import { V, flatDist } from './entities.js';

export const ITEMS = {
  mirror: { name: 'Hand Mirror', hint: 'Hold <kbd>F</kbd> to watch over your shoulder', charges: 16, timed: true },
  candle: { name: 'Votive Candle', hint: '<kbd>F</kbd> Set it down', charges: 1 },
  holy: { name: 'Holy Water', hint: '<kbd>F</kbd> Throw', charges: 1 },
  bandage: { name: 'Linen Bandages', hint: '<kbd>F</kbd> Bind your wounds', charges: 1 },
};
const POOL = ['mirror', 'mirror', 'candle', 'candle', 'holy', 'holy', 'bandage', 'bandage', 'bandage'];

export const ITEM_ICONS = {
  mirror: '<svg viewBox="0 0 32 32" fill="none" stroke="#e8c88a" stroke-width="1.8"><ellipse cx="16" cy="12" rx="7" ry="9"/><path d="M16 21v8M12 29h8"/><path d="M13 8c1-2 3-3 5-2" stroke-opacity=".6"/></svg>',
  candle: '<svg viewBox="0 0 32 32" fill="none" stroke="#e8c88a" stroke-width="1.8"><rect x="11" y="14" width="10" height="13"/><path d="M8 27h16"/><path d="M16 4c3 4 3 6 0 9-3-3-3-5 0-9z" fill="#e8c88a"/></svg>',
  holy: '<svg viewBox="0 0 32 32" fill="none" stroke="#e8c88a" stroke-width="1.8"><path d="M13 4h6v5l5 8v8a3 3 0 0 1-3 3H11a3 3 0 0 1-3-3v-8l5-8z"/><path d="M9 19h14" stroke-opacity=".6"/><path d="M16 21v5M13.5 23.5h5"/></svg>',
  bandage: '<svg viewBox="0 0 32 32" fill="none" stroke="#e8c88a" stroke-width="1.8"><circle cx="13" cy="16" r="7"/><circle cx="13" cy="16" r="3"/><path d="M20 16h8v5h-8"/></svg>',
};

// Builders come from the props module when available; a plain stand-in otherwise.
function prop(name, M, ...args) {
  const fn = PM[name];
  if (typeof fn === 'function') return fn(M, ...args);
  const g = new THREE.Group();
  const m = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.16, 0.06), M.bronze); m.position.y = 0.08; g.add(m);
  g.userData = {};
  return g;
}

// How each item sits in a survivor's right hand. Hand frame: origin at the
// centre of the curled grip, +z along the grip, fingers toward -y, palm +x.
// The mirror and the flask are built upright (+y) facing +z.
const basis = (x, y, z) => new THREE.Matrix4().makeBasis(new THREE.Vector3(...x), new THREE.Vector3(...y), new THREE.Vector3(...z));
export const HOLD = {
  mirror: basis([0, 1, 0], [0, 0, 1], [1, 0, 0]), // handle along the grip, glass toward the palm
  holy: basis([0, 1, 0], [0, 0, 1], [1, 0, 0]),
};

export function buildItemModel(id, M) {
  return prop({ mirror: 'buildHandMirror', candle: 'buildVotiveCandle', holy: 'buildHolyWater', bandage: 'buildBandage' }[id], M);
}

export class Chest {
  constructor(G, spot, id) {
    this.G = G; this.id = id; this.pos = V(spot.x, 0, spot.z); this.rot = spot.rot;
    this.model = prop('buildChest', G.M);
    this.model.position.copy(this.pos); this.model.rotation.y = spot.rot;
    G.world.root.add(this.model);
    this.front = V(Math.sin(spot.rot), 0, Math.cos(spot.rot));
    this.progress = 0; this.opened = false; this.lidA = 0;
  }
  open(by) {
    const G = this.G;
    this.opened = true;
    G.audio.chestOpen(this.pos.clone().setY(0.5));
    if (!by.isPlayer) return;
    if (by.item) { G.toast('Your hands are already full', 'warn'); return; }
    const id = POOL[Math.floor(Math.random() * POOL.length)];
    G.giveItem(by, id);
  }
  update(dt) {
    const ud = this.model.userData;
    const want = this.opened ? 1 : this.progress * 0.25;
    this.lidA += (want - this.lidA) * Math.min(1, dt * 6);
    if (ud.lid) ud.lid.rotation.x = -this.lidA * 1.9;
    if (ud.glow) {
      const o = this.opened ? Math.max(0, 0.6 - this.lidA * 0.6 + 0.05) : 0.25 + this.progress * 0.6;
      if (ud.glow.material) ud.glow.material.opacity = o;
    }
  }
}

// A thrown flask of holy water.
export class HolyFlask {
  constructor(G, from, vel) {
    this.G = G; this.pos = from.clone(); this.vel = vel.clone(); this.t = 0; this.done = false;
    this.model = buildItemModel('holy', G.M); this.model.position.copy(this.pos);
    G.scene.add(this.model);
  }
  update(dt) {
    if (this.done) return;
    const G = this.G;
    const prev = this.pos.clone();
    this.vel.y -= 9.8 * dt;
    this.pos.addScaledVector(this.vel, dt);
    this.t += dt;
    this.model.position.copy(this.pos);
    this.model.rotation.x += dt * 9; this.model.rotation.z += dt * 5;
    G.fx.holyGlow(this.pos);
    // statues first: the Reliquary, its Sentinels, canonized survivors
    const hitR = (p, r, h) => {
      const dx = this.pos.x - p.x, dz = this.pos.z - p.z;
      return dx * dx + dz * dz < r * r && this.pos.y < h && this.pos.y > -0.1;
    };
    const k = G.killer;
    if (k && hitR(k.pos, 0.75, 2.7)) return this.burst(k);
    for (const st of G.sentinels) if (hitR(st.pos, 0.75, 2.6)) return this.burst(st);
    for (const m of G.memorials) if (hitR(m.pos, 0.6, 1.9)) return this.burst(m);
    const blocked = G.world.raycast(prev, this.pos) < 0.999;
    if (this.pos.y <= 0.02 || blocked || this.t > 4) this.burst(null);
  }
  burst(target) {
    const G = this.G;
    this.done = true;
    G.scene.remove(this.model);
    G.audio.splash(this.pos);
    G.fx.splash(this.pos);
    // a near miss still splashes whatever stands within a step of the impact
    if (!target) {
      const near = (p, r) => flatDist(p, this.pos) < r && this.pos.y < 3;
      if (G.killer && near(G.killer.pos, 1.6)) target = G.killer;
      else target = G.sentinels.find((st) => near(st.pos, 1.5)) || G.memorials.find((m) => near(m.pos, 1.3)) || null;
    }
    if (target) G.holyHit(target);
  }
}

// A candle set down on the moor.
export class Votive {
  constructor(G, pos) {
    this.G = G; this.pos = pos.clone(); this.pos.y = 0; this.t = 75; this.r = 7;
    this.model = buildItemModel('candle', G.M);
    this.model.position.copy(this.pos);
    G.world.root.add(this.model);
    // a pre-allocated light: adding lights mid-match would recompile every shader
    this.light = G.borrowLight(0xffb060, 9);
    this.light.position.set(this.pos.x, 0.6, this.pos.z);
    this.halo = new THREE.Sprite(G.M.glow.clone()); this.halo.material.opacity = 0.45; this.halo.scale.set(2.2, 2.2, 1);
    this.halo.position.set(this.pos.x, 0.45, this.pos.z);
    G.world.root.add(this.halo);
  }
  update(dt) {
    this.t -= dt;
    const fade = Math.min(1, this.t / 5);
    const fl = 0.85 + Math.sin(this.G.time * 13) * 0.07 + (Math.random() - 0.5) * 0.08;
    this.light.intensity = 2.6 * fade * fl;
    this.halo.material.opacity = 0.45 * fade * fl;
    const fs = this.model.userData.flame;
    if (fs) fs.scale.set(0.07 * fade, (0.14 + Math.random() * 0.02) * fade, 1);
    return this.t > 0;
  }
  dispose() {
    const root = this.G.world.root;
    root.remove(this.model); root.remove(this.halo);
    this.G.returnLight(this.light);
  }
}
