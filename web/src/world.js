// Map generation, static collision, line-of-sight and A* navigation.
// The parish of Hollowmoor: a ruined church at the centre, a graveyard,
// stone ruins, peat stacks and shacks scattered over the moor.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { mulberry32, Noise, clamp } from './noise.js';
import {
  MergeBucket, boxGeo, worldUV, treeGeometry, rockGeometry, gravestoneGeometries,
} from './models.js';
import * as PM from './models/props.js';

export const HALF = 50;
const CELL = 0.5;
const GN = Math.ceil((HALF * 2 + 4) / CELL);
const ORIGIN = -(HALF + 2);

export const FREE = 0, BLOCK = 1, WINDOW = 2, PALLET = 3;

export class World {
  constructor(scene, M, T, seed, quality) {
    this.scene = scene; this.M = M; this.T = T; this.seed = seed; this.quality = quality;
    this.rnd = mulberry32(seed);
    this.noise = new Noise(seed);
    this.root = new THREE.Group(); scene.add(this.root);
    this.boxes = []; this.circles = []; this.dynBoxes = [];
    this.windows = []; this.palletSpots = []; this.bellSpots = []; this.postSpots = []; this.gateSpots = [];
    this.chestSpots = []; this.perches = []; this.decorLights = [];
    this.bucket = new MergeBucket();
    this.occupied = []; // {x,z,r} for decor placement
    this.grid = new Uint8Array(GN * GN);
    this.gridObj = new Int16Array(GN * GN).fill(-1);
    this.build();
  }

  dispose() {
    this.scene.remove(this.root);
    this.root.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
  }

  // ------------------------------------------------------------ geometry helpers
  addBox(minX, maxX, minY, maxY, minZ, maxZ, mat, kind = 'wall', uv = 0.36, visual = true) {
    const b = { minX, maxX, minY, maxY, minZ, maxZ, kind, sight: kind !== 'nosight' };
    this.boxes.push(b);
    if (visual && mat) this.bucket.add(mat, boxGeo(maxX - minX, maxY - minY, maxZ - minZ, (minX + maxX) / 2, (minY + maxY) / 2, (minZ + maxZ) / 2), uv);
    return b;
  }

  // Axis-aligned wall with openings. openings: [{at, w, type: 'window'|'pallet'|'door'}]
  wall(x1, z1, x2, z2, o = {}) {
    const h = o.h ?? 2.8, t = o.t ?? 0.55, mat = o.mat ?? this.M.stone, ruin = o.ruin ?? 0.7;
    const alongX = Math.abs(z2 - z1) < 1e-6;
    const len = alongX ? Math.abs(x2 - x1) : Math.abs(z2 - z1);
    const dir = alongX ? Math.sign(x2 - x1) : Math.sign(z2 - z1);
    const P = (s) => (alongX ? [x1 + dir * s, z1] : [x1, z1 + dir * s]);
    const ops = (o.openings || []).slice().sort((a, b) => a.at - b.at);
    const solid = []; let cur = 0;
    for (const op of ops) { solid.push([cur, op.at - op.w / 2]); cur = op.at + op.w / 2; }
    solid.push([cur, len]);
    const seg = (s0, s1, y0, y1, kind = 'wall', m = mat, vis = true) => {
      if (s1 - s0 < 0.02) return;
      const [ax, az] = P(s0), [bx, bz] = P(s1);
      if (alongX) this.addBox(Math.min(ax, bx), Math.max(ax, bx), y0, y1, az - t / 2, az + t / 2, m, kind, 0.36, !!m);
      else this.addBox(ax - t / 2, ax + t / 2, y0, y1, Math.min(az, bz), Math.max(az, bz), m, kind, 0.36, !!m);
    };
    const seed = this.rnd() * 100;
    const hAt = (sv) => {
      if (o.even) return h - this.rnd() * ruin * 0.15;
      const [wx, wz] = P(sv);
      const n = this.noise.noise((wx + wz) * 0.17 + seed, seed * 0.3) * 0.5 + 0.5;
      const dip = Math.max(0, this.noise.noise((wx - wz) * 0.09 + seed, 7.7) - 0.3) * 2.2;
      return Math.max(0.9, h - ruin * (0.1 + n * 0.8) - dip * ruin * 0.7 + (this.rnd() - 0.5) * 0.18);
    };
    for (const [s0, s1] of solid) {
      const n = Math.max(1, Math.round((s1 - s0) / 0.6));
      for (let k = 0; k < n; k++) {
        const a = s0 + ((s1 - s0) * k) / n, b = s0 + ((s1 - s0) * (k + 1)) / n;
        const hh = hAt((a + b) / 2);
        const [ax, az] = P(a), [bx, bz] = P(b);
        const cx = (ax + bx) / 2, cz = (az + bz) / 2, L = Math.abs(b - a) + 0.002;
        this.bucket.add(mat, boxGeo(alongX ? L : t, hh, alongX ? t : L, cx, hh / 2, cz), 0.36);
        seg(a, b, 0, hh, 'wall', null);
        if (this.rnd() < 0.18 && hh > 1.4) {
          this.bucket.add(mat, boxGeo(0.25 + this.rnd() * 0.25, 0.18, Math.min(t, 0.35), cx + (this.rnd() - 0.5) * 0.2, hh + 0.06, cz, this.rnd(), 0, (this.rnd() - 0.5) * 0.5), 0.36);
        }
      }
      // rubble at the foot of ruined walls
      if (!o.even && (s1 - s0) > 1.5) {
        for (let k = 0; k < Math.floor((s1 - s0) / 2.5); k++) {
          const sv = s0 + this.rnd() * (s1 - s0), side = this.rnd() < 0.5 ? -1 : 1;
          const [rx, rz] = P(sv), off = (t / 2 + 0.15 + this.rnd() * 0.3) * side;
          const sz = 0.15 + this.rnd() * 0.25;
          this.bucket.add(mat, boxGeo(sz * 1.4, sz, sz, rx + (alongX ? 0 : off), sz / 2 - 0.03, rz + (alongX ? off : 0), this.rnd() * 3, this.rnd() * 0.4, this.rnd() * 0.4), 0.36);
        }
      }
    }
    for (const op of ops) {
      const [cx, cz] = P(op.at);
      const nx = alongX ? 0 : 1, nz = alongX ? 1 : 0;
      const ax = alongX ? 1 : 0, az = alongX ? 0 : 1;
      if (op.type === 'window') {
        seg(op.at - op.w / 2, op.at + op.w / 2, 0, 0.88, 'sill');
        if (h > 2.6) seg(op.at - op.w / 2 - 0.05, op.at + op.w / 2 + 0.05, 2.2, h - this.rnd() * 0.3);
        // timber frame
        for (const s of [-1, 1]) {
          const fx = cx + ax * s * (op.w / 2 - 0.06), fz = cz + az * s * (op.w / 2 - 0.06);
          this.bucket.add(this.M.timber, boxGeo(alongX ? 0.1 : t + 0.06, 1.35, alongX ? t + 0.06 : 0.1, fx, 1.55, fz), 0.7);
        }
        this.windows.push({ x: cx, z: cz, nx, nz, ax, az, halfW: op.w / 2, id: this.windows.length });
      } else {
        if (h > 2.7 && op.type !== 'open') seg(op.at - op.w / 2 - 0.05, op.at + op.w / 2 + 0.05, 2.35, h - this.rnd() * 0.2);
        if (op.type === 'pallet') this.palletSpots.push({ x: cx, z: cz, ax, az, nx, nz, w: op.w });
      }
    }
  }

  occupy(x, z, r) { this.occupied.push({ x, z, r }); }
  isFree(x, z, r) {
    if (Math.abs(x) > HALF - r - 1 || Math.abs(z) > HALF - r - 1) return false;
    for (const o of this.occupied) if (Math.hypot(o.x - x, o.z - z) < o.r + r) return false;
    return true;
  }

  // ------------------------------------------------------------ layout
  build() {
    const R = this.rnd, M = this.M;
    this.buildGround();
    this.buildBoundary();
    this.buildChurch();

    // bells: one inside the church, six on a ring
    this.bellSpots.push({ x: 4.5, z: 0, rot: Math.PI / 2 });
    const a0 = R() * Math.PI * 2;
    for (let k = 0; k < 6; k++) {
      for (let tries = 0; tries < 30; tries++) {
        const a = a0 + (k / 6) * Math.PI * 2 + (R() - 0.5) * 0.5;
        const r = 27 + R() * 12;
        const x = Math.cos(a) * r, z = Math.sin(a) * r;
        if (!this.isFree(x, z, 5)) continue;
        if (this.gateSpots.some((g) => Math.hypot(g.x - x, g.z - z) < 14)) continue;
        this.bellSpots.push({ x, z, rot: Math.floor(R() * 4) * Math.PI / 2 });
        this.occupy(x, z, 4);
        break;
      }
    }
    for (const b of this.bellSpots) {
      const { x, z } = b, alongZ = Math.round(b.rot / (Math.PI / 2)) % 2 === 1;
      this.addBox(x - 0.85, x + 0.85, 0, 0.5, z - 0.85, z + 0.85, null, 'prop', 0, false);
      for (const sgn of [-1, 1]) {
        if (alongZ) this.addBox(x - 0.12, x + 0.12, 0, 3.4, z + sgn * 0.6 - (sgn > 0 ? 0 : 0.25), z + sgn * 0.6 + (sgn > 0 ? 0.25 : 0), null, 'nosight', 0, false);
        else this.addBox(x + sgn * 0.6 - (sgn > 0 ? 0 : 0.25), x + sgn * 0.6 + (sgn > 0 ? 0.25 : 0), 0, 3.4, z - 0.12, z + 0.12, null, 'nosight', 0, false);
      }
    }
    // weeping posts
    const pa = R() * Math.PI * 2;
    for (let k = 0; k < 6; k++) {
      for (let tries = 0; tries < 40; tries++) {
        const a = pa + (k / 6) * Math.PI * 2 + (R() - 0.5) * 0.6;
        const r = k % 2 ? 18 + R() * 5 : 38 + R() * 6;
        const x = Math.cos(a) * r, z = Math.sin(a) * r;
        if (!this.isFree(x, z, 3.5)) continue;
        this.postSpots.push({ x, z, rot: R() * Math.PI * 2 });
        this.occupy(x, z, 3);
        this.circles.push({ x, z, r: 0.2, h: 3.6 });
        break;
      }
    }
    // loop tiles
    const types = ['longWindow', 'lPallet', 'tWindow', 'shack', 'peat', 'corner', 'lPallet', 'longWindow', 'shack', 'peat', 'tWindow', 'corner'];
    let ti = 0;
    const cands = [];
    for (let gx = -42; gx <= 42; gx += 12) for (let gz = -42; gz <= 42; gz += 12) cands.push([gx + (R() - 0.5) * 5, gz + (R() - 0.5) * 5]);
    cands.sort(() => R() - 0.5);
    let placed = 0;
    for (const [x, z] of cands) {
      if (placed >= 22) break;
      if (!this.isFree(x, z, 5.5)) continue;
      this.tile(types[ti++ % types.length], x, z, Math.floor(R() * 4));
      this.occupy(x, z, 5.5);
      placed++;
    }
    this.buildGraveyard();
    this.buildDecor();
    this.buildTrees();
    this.buildRocks();
    this.buildPools();
    this.bucket.build(this.root);
    this.buildNav();
    this.buildPerches();
    this.buildGrass();
    this.buildSky();
    this.buildMist();
    this.spawns();
  }

  buildGround() {
    const size = HALF * 2 + 40, seg = 140;
    const g = new THREE.PlaneGeometry(size, size, seg, seg);
    g.rotateX(-Math.PI / 2);
    const p = g.attributes.position;
    const col = new Float32Array(p.count * 3);
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), z = p.getZ(i);
      const n = this.noise.fbm(x * 0.03, z * 0.03, 4);
      const m = this.noise.fbm(x * 0.12 + 50, z * 0.12, 3);
      const edge = Math.max(Math.abs(x), Math.abs(z)) > HALF + 1 ? 0.04 * this.noise.noise(x * 0.2, z * 0.2) + 0.15 : 0;
      p.setY(i, n * 0.05 - 0.035 + edge);
      const k = 0.72 + n * 0.35 + m * 0.12;
      col[i * 3] = k; col[i * 3 + 1] = k * (0.98 + m * 0.05); col[i * 3 + 2] = k * 0.95;
    }
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    g.computeVertexNormals();
    worldUV(g, 1 / 3.2);
    const mesh = new THREE.Mesh(g, this.M.ground);
    mesh.receiveShadow = true;
    this.root.add(mesh);
  }

  buildBoundary() {
    const R = this.rnd;
    const gxN = (R() - 0.5) * 50, gxS = (R() - 0.5) * 50;
    this.gateSpots.push({ x: gxN, z: HALF + 0.3, out: 1 }, { x: gxS, z: -HALF - 0.3, out: -1 });
    const o = { h: 3.4, t: 0.8, ruin: 0.9 };
    const L = HALF + 0.7;
    this.wall(-L, L, L, L, { ...o, openings: [{ at: gxN + L, w: 3.7, type: 'open' }] });
    this.wall(-L, -L, L, -L, { ...o, openings: [{ at: gxS + L, w: 3.7, type: 'open' }] });
    this.wall(L, -L, L, L, o);
    this.wall(-L, -L, -L, L, o);
    // gate pillars are solid
    for (const gs of this.gateSpots) {
      for (const s of [-1, 1]) this.addBox(gs.x + s * 2.25 - 0.4, gs.x + s * 2.25 + 0.4, 0, 3.4, gs.z - 0.45, gs.z + 0.45, null, 'wall', 0, false);
      this.occupy(gs.x, gs.z - gs.out * 3, 6);
    }
  }

  buildChurch() {
    const M = this.M, o = { h: 5.2, t: 0.75, ruin: 2.2 };
    // nave: x -11..11, z -6.5..6.5
    this.wall(-11, 6.5, 11, 6.5, { ...o, openings: [{ at: 6, w: 1.3, type: 'window' }, { at: 15, w: 1.3, type: 'window' }, { at: 19.5, w: 1.6, type: 'pallet' }] });
    this.wall(-11, -6.5, 11, -6.5, { ...o, openings: [{ at: 4, w: 1.3, type: 'window' }, { at: 11, w: 2.2, type: 'door' }, { at: 17, w: 1.3, type: 'window' }] });
    this.wall(-11, -6.5, -11, 6.5, { ...o, openings: [{ at: 6.5, w: 1.6, type: 'pallet' }] });
    this.wall(11, -6.5, 11, 6.5, { ...o, h: 6.5, ruin: 1.5 });
    // ruined tower stump at the SW corner
    this.wall(-15, -10.5, -11, -10.5, { h: 7, t: 0.8, ruin: 2.5 });
    this.wall(-15, -10.5, -15, -6.5, { h: 7.5, t: 0.8, ruin: 2.5, openings: [{ at: 2, w: 1.3, type: 'window' }] });
    this.wall(-15, -6.5, -12.2, -6.5, { h: 6, t: 0.8, ruin: 2 });
    // floor slabs
    for (let x = -10.5; x < 10.5; x += 1.5) for (let z = -6; z < 6; z += 1.5) {
      if (this.rnd() < 0.12) continue;
      this.bucket.add(M.stoneClean, boxGeo(1.45, 0.06, 1.45, x + 0.75, 0.03 + this.rnd() * 0.02, z + 0.75, (this.rnd() - 0.5) * 0.05), 0.6);
    }
    // altar + steps
    this.addBox(8.6, 10.2, 0, 1.05, -1.4, 1.4, M.stoneClean, 'wall', 0.6);
    this.bucket.add(M.stoneClean, boxGeo(1.9, 0.2, 3.2, 9.4, 1.1, 0), 0.6);
    this.addBox(7.6, 10.6, 0, 0.18, -2.2, 2.2, M.stoneClean, 'prop', 0.6);
    // broken pews
    for (const px of [-8.5, -5.8, -3.1]) for (const s of [-1, 1]) {
      if (this.rnd() < 0.25) continue;
      const len = 3.2 - this.rnd() * 1.2;
      const z0 = s > 0 ? 1.3 : -1.3 - len;
      this.addBox(px, px + 0.5, 0, 0.5, z0, z0 + len, M.planks, 'nosight', 0.8);
      this.bucket.add(M.planks, boxGeo(0.08, 0.6, len, px + 0.48, 0.8, z0 + len / 2, 0, 0, -0.15), 0.8);
    }
    // fallen roof beams
    for (let k = 0; k < 4; k++) {
      const x = -8 + k * 5 + this.rnd() * 2;
      this.bucket.add(M.timber, boxGeo(0.35, 0.35, 13.5, x, 4.9 + this.rnd() * 0.3, 0, 0, 0, (this.rnd() - 0.5) * 0.1), 0.6);
    }
    this.bucket.add(M.timber, boxGeo(0.35, 0.35, 9, -2, 1.6, -1, 0.5, 0.32, 0), 0.6);
    // candles on the altar
    this.altarCandles = [];
    for (let k = 0; k < 6; k++) this.altarCandles.push(new THREE.Vector3(9.4, 1.3, -1.2 + k * 0.48));
    this.occupy(0, 0, 13); this.occupy(-13, -8.5, 3.5);
  }

  tile(type, cx, cz, rot) {
    const c = [1, 0, -1, 0][rot], s = [0, 1, 0, -1][rot];
    const T = (x, z) => [cx + x * c - z * s, cz + x * s + z * c];
    const W = (x1, z1, x2, z2, o) => { const [a, b] = T(x1, z1), [d, e] = T(x2, z2); this.wall(a, b, d, e, o); };
    const M = this.M;
    switch (type) {
      case 'longWindow':
        W(-4, 0, 4, 0, { openings: [{ at: 4, w: 1.3, type: 'window' }] });
        W(-4, 0.3, -4, 2.8, { h: 2.4 });
        break;
      case 'lPallet':
        W(-4, 0, 4, 0, { openings: [{ at: 5.2, w: 1.6, type: 'pallet' }] });
        W(-4, 0.3, -4, 3.8, {});
        break;
      case 'tWindow':
        W(-3.8, 0, 3.8, 0, {});
        W(0, 0.3, 0, 5.2, { openings: [{ at: 2.9, w: 1.3, type: 'window' }] });
        break;
      case 'shack': {
        const o = { h: 2.9, t: 0.25, mat: M.planks, ruin: 0.3, even: true };
        W(-3, -2.3, 3, -2.3, { ...o, openings: [{ at: 3, w: 1.3, type: 'window' }] });
        W(3, -2.3, 3, 2.3, o);
        W(3, 2.3, -3, 2.3, { ...o, openings: [{ at: 1.6, w: 1.4, type: 'door' }] });
        W(-3, 2.3, -3, -2.3, { ...o, openings: [{ at: 2.3, w: 1.6, type: 'pallet' }] });
        for (let k = 0; k < 5; k++) {
          if (this.rnd() < 0.35) continue;
          const [x, z] = T(-2.4 + k * 1.2, 0);
          this.bucket.add(M.planks, boxGeo(rot % 2 ? 4.8 : 1.15, 0.06, rot % 2 ? 1.15 : 4.8, x, 3.0 + this.rnd() * 0.15, z, 0, (this.rnd() - 0.5) * 0.12, (this.rnd() - 0.5) * 0.12), 0.8);
        }
        const [lx, lz] = T(2.2, 1.6);
        this.lanterns = this.lanterns || []; this.lanterns.push(new THREE.Vector3(lx, 2.3, lz));
        break;
      }
      case 'peat': {
        const o = { h: 1.45, t: 1.0, mat: M.peatBlock, ruin: 0.25 };
        W(-4, -1.6, 4, -1.6, { ...o, openings: [{ at: 4, w: 1.6, type: 'pallet' }] });
        W(-4, 1.6, 4, 1.6, { ...o, openings: [{ at: 2.5, w: 1.3, type: 'door' }] });
        W(-4.6, -1.0, -4.6, 1.0, { ...o, h: 1.2 });
        break;
      }
      case 'corner':
        W(-3.5, 0, 3.5, 0, { h: 3.6, ruin: 1.6, openings: [{ at: 2.2, w: 1.3, type: 'window' }] });
        W(3.5, 0.3, 3.5, 5, { h: 3.6, ruin: 1.6, openings: [{ at: 2.6, w: 1.3, type: 'window' }] });
        break;
    }
  }

  buildGraveyard() {
    const geos = gravestoneGeometries();
    const per = [[], [], []];
    const R = this.rnd;
    for (const side of [-1, 1]) {
      for (let row = 0; row < 3; row++) for (let k = 0; k < 9; k++) {
        if (R() < 0.3) continue;
        const x = -9 + k * 2.2 + (R() - 0.5) * 0.5, z = side * (9 + row * 2.2) + (R() - 0.5) * 0.4;
        if (!this.isFree(x, z, 0.3)) continue;
        const v = Math.floor(R() * 3);
        per[v].push({ x, z, ry: (R() - 0.5) * 0.3, rx: (R() - 0.5) * 0.25, rz: (R() - 0.5) * 0.2, s: 0.85 + R() * 0.35 });
        this.addBox(x - 0.3, x + 0.3, 0, 0.9, z - 0.12, z + 0.12, null, 'nosight', 0, false);
      }
    }
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler();
    per.forEach((list, v) => {
      if (!list.length) return;
      worldUV(geos[v], 1.2);
      const im = new THREE.InstancedMesh(geos[v], this.M.stoneClean, list.length);
      list.forEach((g, i) => { q.setFromEuler(e.set(g.rx, g.ry, g.rz)); m4.compose(new THREE.Vector3(g.x, -0.05, g.z), q, new THREE.Vector3(g.s, g.s, g.s)); im.setMatrixAt(i, m4); });
      im.castShadow = true; im.receiveShadow = true;
      this.root.add(im);
    });
    this.occupy(0, 11, 4); this.occupy(0, -11, 4);
  }

  // Props placed by the map: chests, buttresses, carts, coffins, fences,
  // lantern posts and candle shrines. Builders come from models/props.js.
  placeProp(name, x, z, ry, ...args) {
    const fn = PM[name];
    if (typeof fn !== 'function') return null;
    const g = fn(this.M, ...args);
    g.position.set(x, 0, z); g.rotation.y = ry;
    this.root.add(g);
    return g;
  }

  // collision box for an object of size w (along local x) by d (along local z), rotated by a quarter-turn multiple
  propBox(x, z, ry, w, d, h, kind = 'wall') {
    const q = Math.round(ry / (Math.PI / 2)) % 2 !== 0;
    const hx = (q ? d : w) / 2, hz = (q ? w : d) / 2;
    this.addBox(x - hx, x + hx, 0, h, z - hz, z + hz, null, kind, 0, false);
  }

  buildDecor() {
    const R = this.rnd, Q = () => Math.floor(R() * 4) * Math.PI / 2;
    const far = (x, z, list, r) => list.every((p) => Math.hypot(p.x - x, p.z - z) > r);
    // church buttresses between the openings of the long walls
    for (const [x, side] of [[-9, 1], [-1.5, 1], [1.6, 1], [6.3, 1], [-9.5, -1], [-3.5, -1], [3, -1], [8.5, -1]]) {
      const z = side * (6.5 + 0.375);
      if (PM.buildButtress) this.placeProp('buildButtress', x, z, side > 0 ? 0 : Math.PI, 3.6);
      else this.bucket.add(this.M.stone, boxGeo(0.7, 3.6, 0.9, x, 1.8, z + side * 0.45), 0.36);
      this.addBox(x - 0.35, x + 0.35, 0, 3.6, Math.min(z, z + side * 0.9), Math.max(z, z + side * 0.9), null, 'wall', 0, false);
    }
    // reliquary chests
    for (let tries = 0, n = 0; tries < 300 && n < 6; tries++) {
      const x = (R() - 0.5) * (HALF * 2 - 10), z = (R() - 0.5) * (HALF * 2 - 10);
      if (!this.isFree(x, z, 1.6) || !far(x, z, this.bellSpots, 8) || !far(x, z, this.postSpots, 6) || !far(x, z, this.chestSpots, 18)) continue;
      const rot = Q();
      this.chestSpots.push({ x, z, rot });
      this.propBox(x, z, rot, 0.95, 0.6, 0.6, 'nosight');
      this.occupy(x, z, 1.4);
      n++;
    }
    // carts, coffins, fences, lantern posts, candle shrines
    const scatter = (count, r, fn) => {
      for (let tries = 0, n = 0; tries < 200 && n < count; tries++) {
        const x = (R() - 0.5) * (HALF * 2 - 8), z = (R() - 0.5) * (HALF * 2 - 8);
        if (!this.isFree(x, z, r) || !far(x, z, this.bellSpots, 6)) continue;
        if (fn(x, z) !== false) { this.occupy(x, z, r); n++; }
      }
    };
    scatter(3, 2.2, (x, z) => { if (!PM.buildCart) return false; const ry = Q(); this.placeProp('buildCart', x, z, ry); this.propBox(x, z, ry, 1.2, 2.0, 1.1); });
    scatter(4, 1.6, (x, z) => { if (!PM.buildCoffin) return false; const ry = Q(); this.placeProp('buildCoffin', x, z, ry); this.propBox(x, z, ry, 0.7, 2.0, 0.55, 'nosight'); });
    scatter(4, 5, (x, z) => {
      if (!PM.buildFence) return false;
      // centred on the free spot, so the whole run stays inside the space it reserved
      const len = 5 + Math.floor(R() * 4), ry = Q();
      const ex = Math.cos(ry) * len, ez = -Math.sin(ry) * len, x0 = x - ex / 2, z0 = z - ez / 2;
      this.placeProp('buildFence', x0, z0, ry, len);
      this.addBox(Math.min(x0, x0 + ex) - 0.08, Math.max(x0, x0 + ex) + 0.08, 0, 1.1, Math.min(z0, z0 + ez) - 0.08, Math.max(z0, z0 + ez) + 0.08, null, 'nosight', 0, false);
    });
    scatter(5, 1.2, (x, z) => {
      if (!PM.buildLanternPost) return false;
      const g = this.placeProp('buildLanternPost', x, z, R() * 6.28);
      this.circles.push({ x, z, r: 0.15, h: 2.4 });
      const lp = g.userData.lampPos;
      if (lp) this.decorLights.push(lp.clone().applyMatrix4(g.matrixWorld.compose(g.position, g.quaternion, g.scale)));
    });
    for (let k = 0; k < 9; k++) {
      // shrines of candles among the graves and by the church
      const x = -10 + R() * 20, z = (R() < 0.5 ? -1 : 1) * (7.6 + R() * 6.5);
      if (PM.buildCandleCluster && this.isFree(x, z, 0.4)) { this.placeProp('buildCandleCluster', x, z, R() * 6.28); this.occupy(x, z, 0.4); }
    }
  }

  // Where crows perch: open ground, wall tops and gravestones.
  buildPerches() {
    const R = this.rnd;
    for (let tries = 0; tries < 200 && this.perches.length < 9; tries++) {
      const x = (R() - 0.5) * (HALF * 2 - 8), z = (R() - 0.5) * (HALF * 2 - 8);
      const c = this.cellIndex(x, z);
      if (c >= 0 && this.grid[c] === FREE && this.perches.every((p) => Math.hypot(p.x - x, p.z - z) > 12)) this.perches.push({ x, y: 0, z });
    }
    const tops = this.boxes.filter((b) => b.kind === 'wall' && b.maxY > 1.3 && b.maxY < 3.3 && b.minY < 0.1 && (b.maxX - b.minX) * (b.maxZ - b.minZ) > 0.25 && Math.abs((b.minX + b.maxX) / 2) < HALF - 2 && Math.abs((b.minZ + b.maxZ) / 2) < HALF - 2);
    for (let k = 0; k < 6 && tops.length; k++) {
      const b = tops[Math.floor(R() * tops.length)];
      const x = (b.minX + b.maxX) / 2, z = (b.minZ + b.maxZ) / 2;
      if (this.perches.every((p) => Math.hypot(p.x - x, p.z - z) > 8)) this.perches.push({ x, y: b.maxY, z, wall: true });
    }
  }

  buildTrees() {
    const R = this.rnd;
    const variants = [treeGeometry(11), treeGeometry(23), treeGeometry(37), treeGeometry(51)];
    const lists = [[], [], [], []];
    let n = 0;
    for (let tries = 0; tries < 900 && n < 70; tries++) {
      const x = (R() - 0.5) * (HALF * 2 - 4), z = (R() - 0.5) * (HALF * 2 - 4);
      if (!this.isFree(x, z, 1.6)) continue;
      const cl = this.noise.fbm(x * 0.05, z * 0.05, 2);
      if (cl < -0.05 && R() < 0.7) continue;
      lists[n % 4].push({ x, z, s: 0.8 + R() * 0.6, r: R() * 6.28 });
      this.circles.push({ x, z, r: 0.3, h: 6 });
      this.occupy(x, z, 1.2);
      n++;
    }
    // dense dead treeline beyond the wall
    for (let k = 0; k < 160; k++) {
      const a = R() * Math.PI * 2, side = Math.floor(R() * 4);
      const along = (R() - 0.5) * (HALF * 2 + 30), out = HALF + 3 + R() * 14;
      const x = side < 2 ? along : (side === 2 ? out : -out), z = side < 2 ? (side === 0 ? out : -out) : along;
      if (this.gateSpots.some((g) => Math.hypot(g.x - x, g.z - z) < 7)) continue;
      lists[k % 4].push({ x, z, s: 1 + R() * 0.9, r: a });
    }
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion();
    lists.forEach((list, v) => {
      const im = new THREE.InstancedMesh(variants[v], this.M.bark, list.length);
      list.forEach((t, i) => { q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), t.r); m4.compose(new THREE.Vector3(t.x, 0, t.z), q, new THREE.Vector3(t.s, t.s, t.s)); im.setMatrixAt(i, m4); });
      im.castShadow = true; im.receiveShadow = true;
      this.root.add(im);
    });
  }

  buildRocks() {
    const R = this.rnd;
    for (let k = 0, n = 0; k < 400 && n < 26; k++) {
      const x = (R() - 0.5) * (HALF * 2 - 6), z = (R() - 0.5) * (HALF * 2 - 6);
      const s = 0.5 + R() * 1.3;
      if (!this.isFree(x, z, s + 0.5)) continue;
      const g = rockGeometry(k * 13 + 1, s * (1 + R() * 0.6), s * (0.5 + R() * 0.5), s);
      g.rotateY(R() * 6.28); g.translate(x, 0, z);
      worldUV(g, 0.6);
      this.bucket.add(this.M.statue, g);
      if (s > 0.8) this.circles.push({ x, z, r: s * 0.9, h: s * 0.8 });
      this.occupy(x, z, s);
      n++;
    }
    // fallen logs (no collision, ankle height)
    for (let k = 0; k < 12; k++) {
      const x = (R() - 0.5) * 90, z = (R() - 0.5) * 90;
      if (!this.isFree(x, z, 2)) continue;
      const c = new THREE.CylinderGeometry(0.16, 0.2, 2.5 + R() * 2, 8); c.rotateZ(Math.PI / 2); c.rotateY(R() * 6.28); c.translate(x, 0.15, z);
      this.bucket.add(this.M.bark, c);
    }
  }

  buildPools() {
    const R = this.rnd;
    this.pools = [];
    for (let k = 0, n = 0; k < 200 && n < 6; k++) {
      const x = (R() - 0.5) * 88, z = (R() - 0.5) * 88, r = 1.5 + R() * 2.5;
      if (!this.isFree(x, z, r + 1)) continue;
      const g = new THREE.CircleGeometry(r, 28);
      const p = g.attributes.position;
      for (let i = 1; i < p.count; i++) { const a = Math.atan2(p.getY(i), p.getX(i)); const f = 1 + this.noise.noise(Math.cos(a) * 2 + k, Math.sin(a) * 2) * 0.25; p.setX(i, p.getX(i) * f); p.setY(i, p.getY(i) * f); }
      const m = new THREE.Mesh(g, this.M.peat); m.rotation.x = -Math.PI / 2; m.position.set(x, 0.02, z); m.receiveShadow = true;
      this.root.add(m);
      this.pools.push({ x, z, r });
      this.occupy(x, z, r);
    }
  }

  buildGrass() {
    const count = this.quality === 'low' ? 5000 : 14000;
    // crossed alpha-tested cards, each painted with ~70 blades
    const a = new THREE.PlaneGeometry(1, 1); a.translate(0, 0.5, 0);
    const b = a.clone(); b.rotateY(Math.PI / 2);
    const c = a.clone(); c.rotateY(Math.PI / 4);
    const geo = mergeGeometries([a, b, c]);
    const nrm = geo.attributes.normal; for (let i = 0; i < nrm.count; i++) nrm.setXYZ(i, 0, 1, 0);
    const mat = new THREE.MeshStandardMaterial({ map: this.T.tuft, alphaTest: 0.42, side: THREE.DoubleSide, roughness: 0.95, metalness: 0 });
    if (this.quality !== 'low') mat.alphaToCoverage = true;
    this.grassUniforms = { uTime: { value: 0 } };
    mat.onBeforeCompile = (sh) => {
      sh.uniforms.uTime = this.grassUniforms.uTime;
      sh.vertexShader = 'uniform float uTime;\n' + sh.vertexShader.replace('#include <begin_vertex>', `#include <begin_vertex>
        vec4 ip = instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0);
        float sway = sin(uTime * 1.6 + ip.x * 0.31 + ip.z * 0.23) * 0.6 + sin(uTime * 3.7 + ip.x * 1.3) * 0.25;
        transformed.x += sway * uv.y * uv.y * 0.12;
        transformed.z += sway * uv.y * uv.y * 0.07;`);
      // both faces of a card share the same upward normal (no black backsides)
      sh.fragmentShader = sh.fragmentShader.replace('#include <normal_fragment_begin>', THREE.ShaderChunk.normal_fragment_begin.replace('normal *= faceDirection;', ''));
    };
    const im = new THREE.InstancedMesh(geo, mat, count);
    const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), col = new THREE.Color();
    const R = this.rnd;
    let n = 0;
    for (let tries = 0; tries < count * 5 && n < count; tries++) {
      const x = (R() - 0.5) * (HALF * 2), z = (R() - 0.5) * (HALF * 2);
      const d = this.noise.fbm(x * 0.06 + 7, z * 0.06, 3);
      if (d < -0.15 + R() * 0.3) continue;
      if (Math.abs(x) < 11 && Math.abs(z) < 6.5) continue;
      const ci = this.cellIndex(x, z);
      if (ci < 0 || this.grid[ci] !== FREE) continue;
      if (this.pools.some((p) => Math.hypot(p.x - x, p.z - z) < p.r)) continue;
      q.setFromAxisAngle(new THREE.Vector3(0, 1, 0), R() * 6.28);
      const w = 0.55 + R() * 0.6, h = (0.35 + R() * 0.45) * (0.75 + d * 0.6);
      m4.compose(new THREE.Vector3(x, -0.03, z), q, new THREE.Vector3(w, h, w));
      im.setMatrixAt(n, m4);
      const k = 0.75 + R() * 0.35;
      col.setRGB(k, k * (0.95 + R() * 0.1), k * 0.9);
      im.setColorAt(n, col);
      n++;
    }
    im.count = n;
    im.receiveShadow = true;
    this.root.add(im);
  }

  buildSky() {
    this.moonDir = new THREE.Vector3(-0.45, 0.42, -0.78).normalize();
    const mat = new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: { uTime: { value: 0 }, uFlash: { value: 0 }, uMoon: { value: this.moonDir }, uFog: { value: this.scene.fog ? this.scene.fog.color : new THREE.Color(0x262b33) } },
      vertexShader: 'varying vec3 vDir; void main(){ vDir = position; vec4 p = modelViewMatrix * vec4(position,1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w; }',
      fragmentShader: `
        varying vec3 vDir; uniform float uTime; uniform float uFlash; uniform vec3 uMoon; uniform vec3 uFog;
        float hash(vec3 p){ p = fract(p*0.3183099+0.1); p*=17.0; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
        float h2(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
        float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
          return mix(mix(h2(i),h2(i+vec2(1,0)),f.x), mix(h2(i+vec2(0,1)),h2(i+vec2(1,1)),f.x), f.y); }
        float fbm(vec2 p){ float s=0.0, a=0.5; for(int i=0;i<5;i++){ s+=a*vn(p); p*=2.03; a*=0.5; } return s; }
        void main(){
          vec3 d = normalize(vDir); float h = d.y;
          vec3 col = mix(uFog * 1.15, vec3(0.006,0.009,0.02), smoothstep(-0.02,0.5,h));
          float md = dot(d, uMoon);
          vec3 sd = d*260.0; vec3 c = floor(sd); float r = hash(c);
          float star = step(0.9965, r) * (1.0 - smoothstep(0.0,0.5,length(fract(sd)-0.5))) * smoothstep(0.05,0.4,h);
          col += vec3(0.8,0.85,1.0) * star * (0.5 + 0.5*sin(uTime*2.0 + r*90.0));
          vec2 uv = d.xz/(h+0.18);
          float cl = fbm(uv*0.9 + vec2(uTime*0.004, uTime*0.002));
          float cm = smoothstep(0.42,0.78,cl) * smoothstep(-0.02,0.25,h);
          float disc = smoothstep(0.99935,0.99955,md);
          col += vec3(0.95,0.97,1.0) * disc * 2.5 * (1.0 - cm*0.8);
          col += vec3(0.25,0.3,0.42) * pow(max(md,0.0), 300.0) * 1.2 + vec3(0.07,0.085,0.12) * pow(max(md,0.0), 10.0);
          vec3 ccol = uFog * 1.1 + vec3(0.2,0.22,0.27) * pow(max(md,0.0), 6.0);
          col = mix(col, ccol, cm*0.92);
          col = mix(col, uFog, 1.0 - smoothstep(-0.05,0.12,h));
          col += vec3(0.55, 0.6, 0.78) * uFlash * (0.4 + cm * 1.2);
          gl_FragColor = vec4(col, 1.0);
        }`,
    });
    this.sky = new THREE.Mesh(new THREE.SphereGeometry(400, 32, 16), mat);
    this.sky.frustumCulled = false; this.sky.renderOrder = -1;
    this.scene.add(this.sky);
    this.root.userData.sky = this.sky;
  }

  buildMist() {
    this.mistUniforms = { uTime: { value: 0 }, uCam: { value: new THREE.Vector3() } };
    const mk = (y, alpha, scale) => {
      const mat = new THREE.ShaderMaterial({
        transparent: true, depthWrite: false, fog: false,
        uniforms: { ...this.mistUniforms, uA: { value: alpha }, uS: { value: scale } },
        vertexShader: 'varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }',
        fragmentShader: `varying vec3 vW; uniform float uTime, uA, uS; uniform vec3 uCam;
          float h2(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)))*43758.5453); }
          float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
            return mix(mix(h2(i),h2(i+vec2(1,0)),f.x), mix(h2(i+vec2(0,1)),h2(i+vec2(1,1)),f.x), f.y); }
          float fbm(vec2 p){ float s=0.0, a=0.5; for(int i=0;i<4;i++){ s+=a*vn(p); p*=2.1; a*=0.5; } return s; }
          void main(){
            vec2 p = vW.xz*uS + vec2(uTime*0.03, uTime*0.017);
            float n = fbm(p + fbm(p*0.5 - uTime*0.01)*1.5);
            float d = distance(vW.xz, uCam.xz);
            float a = smoothstep(0.35,0.85,n) * uA * smoothstep(1.5,7.0,d) * (1.0 - smoothstep(35.0,70.0,d));
            gl_FragColor = vec4(vec3(0.11,0.125,0.15), a);
          }`,
      });
      const m = new THREE.Mesh(new THREE.PlaneGeometry(HALF * 2 + 30, HALF * 2 + 30), mat);
      m.rotation.x = -Math.PI / 2; m.position.y = y; m.renderOrder = 5;
      this.root.add(m);
    };
    mk(0.25, 0.55, 0.06); mk(0.7, 0.35, 0.045); mk(1.3, 0.18, 0.035);
  }

  // ------------------------------------------------------------ queries
  pointInBox(x, z, r) {
    for (const b of this.boxes) if (b.maxY > 0.3 && b.minY < 1.9 && x > b.minX - r && x < b.maxX + r && z > b.minZ - r && z < b.maxZ + r) return true;
    for (const c of this.circles) if (Math.hypot(c.x - x, c.z - z) < c.r + r) return true;
    return false;
  }

  // Push a circle out of all blocking geometry. Returns corrected position.
  collide(pos, r, extra = null) {
    for (let it = 0; it < 2; it++) {
      for (let li = 0; li < 2; li++) {
        const list = li ? this.dynBoxes : this.boxes;
        for (let bi = 0; bi < list.length; bi++) {
          const b = list[bi];
          if (b.maxY < 0.3 || b.minY > 1.9 || b.ghost) continue;
          if (pos.x < b.minX - r || pos.x > b.maxX + r || pos.z < b.minZ - r || pos.z > b.maxZ + r) continue;
          const cx = clamp(pos.x, b.minX, b.maxX), cz = clamp(pos.z, b.minZ, b.maxZ);
          const dx = pos.x - cx, dz = pos.z - cz;
          const d = Math.hypot(dx, dz);
          if (d < r) {
            if (d < 1e-5) { // inside: push out along shortest axis
              const l = pos.x - b.minX, rr = b.maxX - pos.x, f = pos.z - b.minZ, bk = b.maxZ - pos.z;
              const m = Math.min(l, rr, f, bk);
              if (m === l) pos.x = b.minX - r; else if (m === rr) pos.x = b.maxX + r; else if (m === f) pos.z = b.minZ - r; else pos.z = b.maxZ + r;
            } else { pos.x = cx + (dx / d) * r; pos.z = cz + (dz / d) * r; }
          }
        }
      }
      for (let li = 0; li < 2; li++) {
        const list = li ? extra : this.circles;
        if (!list) continue;
        for (let ci = 0; ci < list.length; ci++) {
          const c = list[ci];
          const dx = pos.x - c.x, dz = pos.z - c.z, d = Math.hypot(dx, dz), m = c.r + r;
          if (d < m && d > 1e-5) { pos.x = c.x + (dx / d) * m; pos.z = c.z + (dz / d) * m; }
        }
      }
    }
    pos.x = clamp(pos.x, -HALF - 6, HALF + 6); pos.z = clamp(pos.z, -HALF - 6, HALF + 6);
    return pos;
  }

  // Fraction [0,1] along a→b of the first sight-blocking hit (1 = clear).
  raycast(a, b, ignoreLow = 0) {
    const dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z;
    let best = 1;
    const sx = Math.min(a.x, b.x), ex = Math.max(a.x, b.x), sz = Math.min(a.z, b.z), ez = Math.max(a.z, b.z);
    for (const bx of this.boxes) {
      if (!bx.sight || bx.maxY <= ignoreLow) continue;
      if (bx.maxX < sx || bx.minX > ex || bx.maxZ < sz || bx.minZ > ez) continue;
      let t0 = 0, t1 = best;
      const slab = (o, d, mn, mx) => {
        if (Math.abs(d) < 1e-9) return o >= mn && o <= mx;
        let ta = (mn - o) / d, tb = (mx - o) / d;
        if (ta > tb) { const t = ta; ta = tb; tb = t; }
        t0 = Math.max(t0, ta); t1 = Math.min(t1, tb);
        return t0 <= t1;
      };
      if (slab(a.x, dx, bx.minX, bx.maxX) && slab(a.y, dy, bx.minY, bx.maxY) && slab(a.z, dz, bx.minZ, bx.maxZ)) best = Math.min(best, t0);
    }
    for (const c of this.circles) {
      const fx = a.x - c.x, fz = a.z - c.z;
      const A = dx * dx + dz * dz; if (A < 1e-9) continue;
      const B = 2 * (fx * dx + fz * dz), C = fx * fx + fz * fz - c.r * c.r;
      const disc = B * B - 4 * A * C; if (disc < 0) continue;
      const t = (-B - Math.sqrt(disc)) / (2 * A);
      if (t > 0 && t < best && a.y + dy * t < c.h) best = t;
    }
    return best;
  }

  lineOfSight(a, b) { return this.raycast(a, b) >= 0.999; }

  // ------------------------------------------------------------ navigation
  cellIndex(x, z) {
    const i = Math.floor((x - ORIGIN) / CELL), j = Math.floor((z - ORIGIN) / CELL);
    if (i < 0 || j < 0 || i >= GN || j >= GN) return -1;
    return j * GN + i;
  }
  cellCenter(idx) { return { x: ORIGIN + ((idx % GN) + 0.5) * CELL, z: ORIGIN + (Math.floor(idx / GN) + 0.5) * CELL }; }

  rasterBox(b, inflate, val, obj = -1, onlyFree = false) {
    const i0 = Math.max(0, Math.floor((b.minX - inflate - ORIGIN) / CELL)), i1 = Math.min(GN - 1, Math.floor((b.maxX + inflate - ORIGIN) / CELL));
    const j0 = Math.max(0, Math.floor((b.minZ - inflate - ORIGIN) / CELL)), j1 = Math.min(GN - 1, Math.floor((b.maxZ + inflate - ORIGIN) / CELL));
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      const cx = ORIGIN + (i + 0.5) * CELL, cz = ORIGIN + (j + 0.5) * CELL;
      const qx = clamp(cx, b.minX, b.maxX), qz = clamp(cz, b.minZ, b.maxZ);
      if (Math.hypot(cx - qx, cz - qz) > inflate) continue;
      const k = j * GN + i;
      if (onlyFree && this.grid[k] !== FREE) continue;
      this.grid[k] = val; this.gridObj[k] = obj;
    }
  }

  buildNav() {
    const inf = 0.4;
    this.grid.fill(FREE); this.gridObj.fill(-1);
    for (const b of this.boxes) if (b.kind === 'sill') {
      const w = this.windows.find((w) => Math.abs(w.x - (b.minX + b.maxX) / 2) < 0.8 && Math.abs(w.z - (b.minZ + b.maxZ) / 2) < 0.8);
      this.rasterBox(b, inf, WINDOW, w ? w.id : -1);
    }
    for (const b of this.boxes) if (b.kind !== 'sill' && b.maxY > 0.3 && b.minY < 1.9) this.rasterBox(b, inf, BLOCK); // lintels overhead don't block feet
    for (const c of this.circles) this.rasterBox({ minX: c.x - c.r, maxX: c.x + c.r, minZ: c.z - c.r, maxZ: c.z + c.r }, inf, BLOCK);
    // outside the boundary is off-limits except through gates
    for (let k = 0; k < GN * GN; k++) { const p = this.cellCenter(k); if (Math.abs(p.x) > HALF + 0.3 || Math.abs(p.z) > HALF + 0.3) this.grid[k] = BLOCK; }
    for (const g of this.gateSpots) this.rasterBox({ minX: g.x - 1.6, maxX: g.x + 1.6, minZ: Math.min(g.z, g.z + g.out * 4), maxZ: Math.max(g.z, g.z + g.out * 4) }, 0, FREE);
    this.gateBlock = this.gateSpots.map((g) => ({ minX: g.x - 1.9, maxX: g.x + 1.9, minY: 0, maxY: 3, minZ: g.z - 0.15, maxZ: g.z + 0.15, kind: 'gate' }));
    for (const gb of this.gateBlock) { this.dynBoxes.push(gb); this.rasterBox(gb, inf, BLOCK); }
    this.heap = new Int32Array(GN * GN * 5); this.gScore = new Float32Array(GN * GN); this.came = new Int32Array(GN * GN);
    this.stamp = new Uint32Array(GN * GN); this.closed = new Uint32Array(GN * GN); this.gen = 1;
  }

  openGateNav(i) {
    const gb = this.gateBlock[i];
    gb.ghost = true;
    this.rasterBox(gb, 0.4, FREE);
    const g = this.gateSpots[i];
    for (const s of [-1, 1]) this.rasterBox({ minX: g.x + s * 2.25 - 0.4, maxX: g.x + s * 2.25 + 0.4, minZ: g.z - 0.45, maxZ: g.z + 0.45 }, 0.4, BLOCK);
  }

  setPalletNav(p, dropped) {
    const b = p.box;
    if (dropped) this.rasterBox(b, 0.4, PALLET, 1000 + p.id, true);
    else { // broken: clear only PALLET cells
      const i0 = Math.max(0, Math.floor((b.minX - 0.5 - ORIGIN) / CELL)), i1 = Math.min(GN - 1, Math.floor((b.maxX + 0.5 - ORIGIN) / CELL));
      const j0 = Math.max(0, Math.floor((b.minZ - 0.5 - ORIGIN) / CELL)), j1 = Math.min(GN - 1, Math.floor((b.maxZ + 0.5 - ORIGIN) / CELL));
      for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) { const k = j * GN + i; if (this.grid[k] === PALLET && this.gridObj[k] === 1000 + p.id) { this.grid[k] = FREE; this.gridObj[k] = -1; } }
    }
  }

  nearestFree(idx) {
    if (idx >= 0 && this.grid[idx] === FREE) return idx;
    const ci = idx % GN, cj = Math.floor(idx / GN);
    for (let r = 1; r < 12; r++) for (let dj = -r; dj <= r; dj++) for (let di = -r; di <= r; di++) {
      if (Math.abs(di) !== r && Math.abs(dj) !== r) continue;
      const i = ci + di, j = cj + dj; if (i < 0 || j < 0 || i >= GN || j >= GN) continue;
      const k = j * GN + i; if (this.grid[k] === FREE) return k;
    }
    return -1;
  }

  // A* over the grid. kind: 'survivor' | 'killer'. Returns waypoints; window
  // and pallet crossings become {portal:{type,id}} markers.
  findPath(sx, sz, tx, tz, kind = 'survivor', maxIter = 30000) {
    let s = this.nearestFree(this.cellIndex(sx, sz)), t = this.nearestFree(this.cellIndex(tx, tz));
    if (s < 0 || t < 0) return null;
    const gen = ++this.gen;
    const G = this.gScore, came = this.came, stamp = this.stamp, closed = this.closed, heap = this.heap;
    const fScore = this._f || (this._f = new Float32Array(GN * GN));
    let hn = 0;
    const tx0 = t % GN, tz0 = Math.floor(t / GN);
    const H = (k) => { const dx = Math.abs((k % GN) - tx0), dz = Math.abs(Math.floor(k / GN) - tz0); return (dx + dz + (1.4142 - 2) * Math.min(dx, dz)); };
    const push = (k) => { if (hn >= heap.length) return; let i = hn++; heap[i] = k; while (i > 0) { const p = (i - 1) >> 1; if (fScore[heap[p]] <= fScore[k]) break; heap[i] = heap[p]; i = p; } heap[i] = k; };
    const pop = () => {
      const top = heap[0]; const last = heap[--hn]; let i = 0;
      while (true) { let l = 2 * i + 1; if (l >= hn) break; const r = l + 1; if (r < hn && fScore[heap[r]] < fScore[heap[l]]) l = r; if (fScore[heap[l]] >= fScore[last]) break; heap[i] = heap[l]; i = l; }
      heap[i] = last; return top;
    };
    stamp[s] = gen; G[s] = 0; came[s] = -1; fScore[s] = H(s); push(s);
    const winCost = kind === 'killer' ? 5 : 2.5, palCost = kind === 'killer' ? 10 : 2;
    let found = false, it = 0;
    while (hn > 0 && it++ < maxIter) {
      const cur = pop();
      if (cur === t) { found = true; break; }
      if (closed[cur] === gen) continue;
      closed[cur] = gen;
      const ci = cur % GN, cj = (cur / GN) | 0;
      for (let dj = -1; dj <= 1; dj++) for (let di = -1; di <= 1; di++) {
        if (!di && !dj) continue;
        const i = ci + di, j = cj + dj; if (i < 0 || j < 0 || i >= GN || j >= GN) continue;
        const k = j * GN + i, v = this.grid[k];
        if (v === BLOCK) continue;
        if (di && dj && (this.grid[cj * GN + i] === BLOCK || this.grid[j * GN + ci] === BLOCK)) continue;
        let c = di && dj ? 1.4142 : 1;
        if (v === WINDOW) { if (di && dj) continue; c += winCost; }
        else if (v === PALLET) { if (di && dj) continue; c += palCost; }
        const ng = G[cur] + c;
        if (stamp[k] !== gen || ng < G[k]) { stamp[k] = gen; G[k] = ng; came[k] = cur; fScore[k] = ng + H(k); push(k); }
      }
    }
    if (!found) return null;
    const cells = []; for (let k = t; k !== -1; k = came[k]) cells.push(k);
    cells.reverse();
    // compress into waypoints + portals
    const out = [];
    let i = 0;
    while (i < cells.length) {
      const v = this.grid[cells[i]];
      if (v === WINDOW || v === PALLET) {
        const obj = this.gridObj[cells[i]];
        let j = i; while (j < cells.length && this.grid[cells[j]] === v && this.gridObj[cells[j]] === obj) j++;
        out.push({ portal: { type: v === WINDOW ? 'window' : 'pallet', id: v === WINDOW ? obj : obj - 1000 }, ...this.cellCenter(cells[Math.min(j, cells.length - 1)]) });
        i = j;
      } else { out.push(this.cellCenter(cells[i])); i++; }
    }
    // string-pull plain waypoints
    const sm = [];
    let anchor = { x: sx, z: sz };
    for (let k = 0; k < out.length; k++) {
      const p = out[k];
      if (p.portal) { if (k > 0 && !out[k - 1].portal && sm[sm.length - 1] !== out[k - 1]) sm.push(out[k - 1]); sm.push(p); anchor = p; continue; }
      const next = out[k + 1];
      if (!next || next.portal || !this.walkable(anchor, next)) { sm.push(p); anchor = p; }
    }
    sm.push({ x: tx, z: tz, final: true });
    return sm;
  }

  walkable(a, b) {
    const d = Math.hypot(b.x - a.x, b.z - a.z), n = Math.ceil(d / (CELL * 0.5));
    for (let k = 0; k <= n; k++) {
      const x = a.x + ((b.x - a.x) * k) / n, z = a.z + ((b.z - a.z) * k) / n;
      const c = this.cellIndex(x, z);
      if (c < 0 || this.grid[c] !== FREE) return false;
    }
    return true;
  }

  randomFreePoint(rnd = Math.random, minR = 0, maxR = HALF - 3, cx = 0, cz = 0) {
    for (let k = 0; k < 200; k++) {
      const a = rnd() * Math.PI * 2, r = minR + rnd() * (maxR - minR);
      const x = cx + Math.cos(a) * r, z = cz + Math.sin(a) * r;
      if (Math.abs(x) > HALF - 2 || Math.abs(z) > HALF - 2) continue;
      const c = this.cellIndex(x, z);
      if (c >= 0 && this.grid[c] === FREE) return { x, z };
    }
    return { x: cx, z: cz };
  }

  spawns() {
    const a = this.rnd() * Math.PI * 2;
    this.survivorSpawn = this.randomFreePoint(this.rnd, 0, 4, Math.cos(a) * 36, Math.sin(a) * 36);
    this.killerSpawn = this.randomFreePoint(this.rnd, 0, 4, -Math.cos(a) * 34, -Math.sin(a) * 34);
    this.hatchSpot = this.randomFreePoint(this.rnd, 15, 40);
  }
}
