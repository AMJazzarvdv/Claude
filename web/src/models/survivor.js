// Survivor rigs: sculpted procedural humans + procedural animation.
//
// Every survivor is built from a small geometry kit: lofted superellipse
// profiles (torsos, sleeves, trouser legs, boots), tubes along curves (fingers,
// straps, brows, braids), sculpted sphere grids (heads, hair, caps) and solid
// slabs (pockets, lapels, brims, scarf tails). Static parts are merged per
// joint + material. Long coats, the cassock and the priest's cape are cloth
// meshes deformed on the CPU every frame so they follow the legs / arms
// instead of being pierced by them.
import * as THREE from 'three';
import { mergeGeometries, mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { Noise, mulberry32 } from '../noise.js';
import { MergeBucket, pivot } from './common.js';

// --------------------------------------------------------------- survivor
export const SURVIVORS = [
  { id: 'wren', short: 'Wren', name: 'Wren Ashdown', title: 'Peat Cutter', jacket: 0x4b5232, pants: 0x3a2e22, skin: 0xd9b08c, hair: 0x5a3b22, extra: 'cap', voice: 1.25,
    bio: 'Cut turf on the moor since she was nine. Knows where the ground will hold.',
    accent: 0x8a2620, hat: 0x46413a, leather: 0x5a3a22, boots: 0x2e2118, eyes: 0x5c3a1e },
  { id: 'ilias', short: 'Ilias', name: 'Father Ilias Moro', title: 'Defrocked Priest', jacket: 0x18171a, pants: 0x18171a, skin: 0xc79a78, hair: 0x9a9a98, extra: 'cassock', voice: 0.82,
    bio: 'He rang the parish bells the night the village sank. He has not slept since.',
    accent: 0xd8d6cf, hat: 0x0e0d10, leather: 0x141210, boots: 0x141210, eyes: 0x56666c },
  { id: 'juno', short: 'Juno', name: 'Juno Okafor', title: 'Lightkeeper\'s Daughter', jacket: 0xb8902a, pants: 0x262a30, skin: 0x6a4630, hair: 0x140e0a, extra: 'oilskin', voice: 1.18,
    bio: 'Followed a lantern inland from the drowned lighthouse. The lantern was not hers.',
    accent: 0x5e3c20, hat: 0x140e0a, leather: 0x1c1714, boots: 0x1c1714, eyes: 0x3a2412 },
  { id: 'tey', short: 'Tey', name: 'Teodor "Tey" Vas', title: 'Grave-Robber', jacket: 0x2e2420, pants: 0x2b2b2b, skin: 0xe0b896, hair: 0x2a1a10, extra: 'bandana', voice: 0.95,
    bio: 'Dug up the wrong saint. Has been running ever since.',
    accent: 0x8a1e1a, hat: 0x8a1e1a, leather: 0x4a3524, boots: 0x3a2a1e, eyes: 0x4a5034 },
];

// Per-survivor sculpt + costume parameters (geometry only; colours live on the defs).
const STYLE = {
  wren: { id: 'wren', fem: true, seed: 11, hs: [0.077, 0.108, 0.095], jaw: 0.36, brow: 0.55, cheek: 1.15, age: 0, blush: 1.0, freckles: 1, stubble: 0, lipFull: 0.95,
    neckR: 0.041, bulk: 0.015, hair: 'bob', hat: 'cap', ears: true, earScale: 0.7, earFlare: 0.08, hand: 'glove', bootTop: -0.245, mud: 0.36, trouserEnd: -0.25, roll: true },
  ilias: { id: 'ilias', fem: false, seed: 23, hs: [0.08, 0.114, 0.099], jaw: 0.27, brow: 1.1, cheek: 0.9, age: 1, blush: 0.55, freckles: 0, stubble: 0.35, lipFull: 0.8,
    neckR: 0.046, bulk: 0.011, hair: 'receding', beard: true, hat: null, ears: true, hand: 'bare', bootTop: -0.415, mud: 0.14, trouserEnd: -0.43, flare: true },
  juno: { id: 'juno', fem: true, seed: 37, skinRough: 0.42, skinLift: 1.12, hs: [0.076, 0.107, 0.094], jaw: 0.34, brow: 0.6, cheek: 1.2, age: 0, blush: 0.35, freckles: 0, stubble: 0, lipFull: 1.25,
    neckR: 0.04, bulk: 0.017, hair: 'bun', hat: null, ears: true, hand: 'bare', bootTop: -0.06, mud: 0.22, trouserEnd: -0.12 },
  tey: { id: 'tey', fem: false, seed: 41, hs: [0.08, 0.113, 0.099], jaw: 0.25, brow: 1.0, cheek: 0.95, age: 0.25, blush: 0.75, freckles: 0, stubble: 0.85, lipFull: 0.9,
    neckR: 0.047, bulk: 0.016, hair: 'messy', hat: 'bandana', ears: true, hand: 'fingerless', bootTop: -0.28, mud: 0.3, trouserEnd: -0.37, flare: true },
};

// --------------------------------------------------------------- math
const TAU = Math.PI * 2;
const sat = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
const sst = (a, b, x) => { const t = sat((x - a) / (b - a)); return t * t * (3 - 2 * t); };
const lerp = (a, b, t) => a + (b - a) * t;
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const g2 = (a, b) => Math.exp(-0.5 * (a * a + b * b));
const seS = (a, p) => { const s = Math.sin(a); return Math.sign(s) * Math.pow(Math.abs(s), 2 / p); };
const seC = (a, p) => { const c = Math.cos(a); return Math.sign(c) * Math.pow(Math.abs(c), 2 / p); };
const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const cr = (p0, p1, p2, p3, t) => { const t2 = t * t, t3 = t2 * t; return 0.5 * (2 * p1 + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (-p0 + 3 * p1 - 3 * p2 + p3) * t3); };
const NZS = new Noise(4711);

// --------------------------------------------------------------- local textures (built once, shared)
let TX = null;
const enc = (c) => Math.round(Math.pow(sat(c), 1 / 2.2) * 255);
function mkTex(w, h, data, srgb) {
  const t = new THREE.DataTexture(data, w, h, THREE.RGBAFormat);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.magFilter = THREE.LinearFilter; t.minFilter = THREE.LinearMipmapLinearFilter;
  t.generateMipmaps = true; t.anisotropy = 4;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.needsUpdate = true;
  return t;
}
function toNormal(H, w, h, k) {
  const n = new Uint8Array(w * h * 4);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const i = y * w + x;
    const dx = (H[y * w + ((x + 1) % w)] - H[y * w + ((x - 1 + w) % w)]) * k;
    const dy = (H[((y + 1) % h) * w + x] - H[((y - 1 + h) % h) * w + x]) * k;
    const l = Math.hypot(dx, dy, 1);
    n[i * 4] = (-dx / l * 0.5 + 0.5) * 255; n[i * 4 + 1] = (-dy / l * 0.5 + 0.5) * 255; n[i * 4 + 2] = (1 / l * 0.5 + 0.5) * 255; n[i * 4 + 3] = 255;
  }
  return n;
}
function paint(w, h, fn, k, rough = false) {
  const col = new Uint8Array(w * h * 4), H = new Float32Array(w * h), o = [1, 1, 1, 0, 1], rg = rough ? new Uint8Array(w * h * 4) : null;
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const i = y * w + x; o[0] = o[1] = o[2] = 1; o[3] = 0; o[4] = 1;
    fn((x + 0.5) / w, (y + 0.5) / h, o);
    col[i * 4] = enc(o[0]); col[i * 4 + 1] = enc(o[1]); col[i * 4 + 2] = enc(o[2]); col[i * 4 + 3] = 255; H[i] = o[3];
    if (rg) { rg[i * 4] = 255; rg[i * 4 + 1] = Math.round(sat(o[4]) * 255); rg[i * 4 + 2] = 0; rg[i * 4 + 3] = 255; }
  }
  return { map: mkTex(w, h, col, true), normalMap: k ? mkTex(w, h, toNormal(H, w, h, k), false) : null, roughnessMap: rg ? mkTex(w, h, rg, false) : null };
}
function texKit() {
  if (TX) return TX;
  const N = new Noise(5151);
  TX = {
    // hair: strands run along v
    hair: paint(64, 128, (u, v, o) => {
      const s = 0.5 * N.noise(u * 24, 0.37, 24) + 0.38 * N.noise(u * 64, 5.1, 64) + 0.1 * N.noise(u * 8 + 3, v * 8, 8);
      const c = 0.8 + 0.2 * s; o[0] = c; o[1] = c * 0.975; o[2] = c * 0.95; o[3] = s * 0.5;
    }, 2),
    // leather: fine grain + creases
    leather: paint(128, 128, (u, v, o) => {
      const g = N.fbm(u * 16, v * 16, 3, 16), c = Math.pow(N.ridged(u * 4 + 7, v * 4, 3, 4), 5);
      const k = 0.82 + 0.1 * g - 0.22 * c; o[0] = k; o[1] = k * 0.98; o[2] = k * 0.95; o[3] = g * 0.25 - c * 0.7;
    }, 2.2),
    // oilskin: crinkled waxed cotton with worn creases
    oil: paint(128, 128, (u, v, o) => {
      const c = Math.pow(N.ridged(u * 3, v * 3, 3, 3), 4), f = N.fbm(u * 24, v * 24, 2, 24), w = N.fbm(u * 4 + 5, v * 4, 3, 4);
      const k = 0.94 - 0.12 * c + 0.03 * f + 0.04 * w; o[0] = k; o[1] = k * 0.97; o[2] = k * 0.9; o[3] = c * 0.5 + f * 0.04;
    }, 1.6),
    boot: new Map(), face: new Map(),
  };
  return TX;
}
// boots: an atlas. v < 0.1 is the sole; above it leather with mud creeping up.
function bootTex(def, st) {
  const kit = texKit();
  if (kit.boot.has(def.id)) return kit.boot.get(def.id);
  const N = new Noise(st.seed * 3 + 1), base = new THREE.Color(def.boots ?? 0x2e2118), mud = st.mud;
  const t = paint(64, 128, (u, v, o) => {
    if (v < 0.1) { const k = 0.05 + 0.02 * N.noise(u * 16, v * 40, 16); o[0] = k; o[1] = k * 0.92; o[2] = k * 0.85; o[3] = 0; o[4] = 0.85; return; }
    const g = N.fbm(u * 8, v * 8, 3, 8), cz = Math.pow(N.ridged(u * 4, v * 6, 2, 4), 6);
    const k = 0.8 + 0.25 * g - 0.3 * cz;
    let r = base.r * k, gg = base.g * k, b = base.b * k;
    const edge = 0.1 + mud * (0.75 + 0.35 * N.fbm(u * 6 + 9, v * 3, 3, 6));
    const spots = sst(0.25, 0.45, N.fbm(u * 10, v * 10, 3, 10)) * (1 - sst(0.1, 0.1 + mud * 2.2, v));
    const m = Math.max(1 - sst(edge - 0.06, edge + 0.02, v), spots * 0.9);
    const dry = 0.75 + 0.6 * sst(0.2, 0.6, N.noise(u * 14 + 4, v * 14, 14));
    r = lerp(r, 0.05 * dry, m * 0.92); gg = lerp(gg, 0.034 * dry, m * 0.92); b = lerp(b, 0.019 * dry, m * 0.92);
    o[0] = r; o[1] = gg; o[2] = b; o[3] = m * 0.4 - cz * 0.3; o[4] = lerp(0.5 + 0.15 * g, 0.97, m);
  }, 2, true);
  kit.boot.set(def.id, t);
  return t;
}
// direction on the (undeformed) head sphere -> face texture UV (SphereGeometry layout, front +z at u = 0.25)
function dirUV(x, y, z) {
  let ph = Math.atan2(z, -x); if (ph < 0) ph += TAU;
  return [ph / TAU, 1 - Math.acos(clamp(y, -1, 1)) / Math.PI];
}
// face: a multiplier map painted in head-sphere direction space (blush, sockets, stubble, freckles, lines)
function faceTex(def, st) {
  const kit = texKit();
  if (kit.face.has(def.id)) return kit.face.get(def.id);
  const N = new Noise(st.seed);
  const t = paint(256, 128, (u, v, o) => {
    const th = Math.PI * (1 - v), ph = u * TAU;
    const x = -Math.cos(ph) * Math.sin(th), y = Math.cos(th), z = Math.sin(ph) * Math.sin(th);
    const ax = Math.abs(x), fr = sst(0.05, 0.55, z);
    let r = 0.95, g = 0.95, b = 0.95;
    const mott = 1 + 0.035 * N.noise(u * 40, v * 20, 40) + 0.02 * N.noise(u * 120, v * 60, 120);
    r *= mott; g *= mott; b *= mott;
    const ch = g2((ax - 0.52) / 0.17, (y + 0.17) / 0.14) * fr * st.blush;
    r *= 1 - 0.01 * ch; g *= 1 - 0.11 * ch; b *= 1 - 0.1 * ch;
    const ns = g2(x / 0.13, (y + 0.22) / 0.13) * fr * st.blush;
    g *= 1 - 0.07 * ns; b *= 1 - 0.07 * ns;
    const ear = sst(0.8, 0.95, ax) * sst(0.35, 0.1, Math.abs(y)) * sst(0.4, 0.0, Math.abs(z));
    g *= 1 - 0.08 * ear * st.blush; b *= 1 - 0.08 * ear * st.blush;
    const es = g2((ax - 0.37) / 0.18, (y - 0.06) / 0.1) * fr;
    const ek = 1 - (0.2 + 0.12 * st.age) * es; r *= ek; g *= ek * 0.985; b *= ek * 0.99;
    const ue = g2((ax - 0.36) / 0.13, (y + 0.06) / 0.05) * fr;
    r *= 1 - 0.07 * ue * (0.5 + st.age); g *= 1 - 0.08 * ue * (0.5 + st.age); b *= 1 - 0.05 * ue * (0.5 + st.age);
    const bs = g2((ax - 0.32) / 0.24, (y - 0.23) / 0.05) * fr;
    r *= 1 - 0.05 * bs; g *= 1 - 0.05 * bs; b *= 1 - 0.05 * bs;
    const lp = g2(x / 0.3, (y + 0.52) / 0.09) * fr;
    g *= 1 - 0.06 * lp; b *= 1 - 0.05 * lp;
    const nos = g2((ax - 0.05) / 0.028, (y + 0.345) / 0.022) * fr;           // nostrils (seen on the nose underside)
    const ksh = 1 - 0.75 * nos; r *= ksh; g *= ksh; b *= ksh;
    const ala = g2((ax - 0.1) / 0.05, (y + 0.3) / 0.05) * fr;               // crease round the nose wings
    r *= 1 - 0.12 * ala; g *= 1 - 0.14 * ala; b *= 1 - 0.13 * ala;
    const tip = g2(x / 0.06, (y + 0.24) / 0.06) * fr;
    g *= 1 - 0.05 * tip * st.blush; b *= 1 - 0.05 * tip * st.blush;
    if (st.stubble) {
      const jaw = sst(-0.12, -0.32, y + 0.12 * (1 - ax)) * sst(-0.25, 0.15, z) * (1 - g2(x / 0.25, (y + 0.52) / 0.05));
      const fleck = N.noise(u * 220, v * 110, 220) > 0.05 ? 1 : 0.55;
      const k = 1 - st.stubble * jaw * (0.22 + 0.14 * fleck);
      r *= k; g *= k; b *= k * 1.02;
    }
    if (st.age) {
      const fh = sst(0.33, 0.4, y) * sst(0.66, 0.56, y) * g2(x / 0.38, 0) * fr;
      const ln = Math.pow(0.5 + 0.5 * Math.sin(y * 120 + N.noise(u * 30, v * 30, 30) * 2), 6);
      r *= 1 - 0.09 * fh * ln * st.age; g *= 1 - 0.1 * fh * ln * st.age; b *= 1 - 0.1 * fh * ln * st.age;
      const crow = g2((ax - 0.62) / 0.06, (y - 0.05) / 0.06) * fr * Math.pow(0.5 + 0.5 * Math.sin(Math.atan2(y - 0.05, ax - 0.62) * 9), 4);
      r *= 1 - 0.07 * crow * st.age; g *= 1 - 0.08 * crow * st.age; b *= 1 - 0.08 * crow * st.age;
      const nl = g2((ax - 0.25) / 0.05, (y + 0.36 + (ax - 0.25) * 1.2) / 0.1) * fr;
      r *= 1 - 0.08 * nl * st.age; g *= 1 - 0.09 * nl * st.age; b *= 1 - 0.09 * nl * st.age;
    }
    if (st.freckles) {
      const fz = g2(x / 0.42, (y + 0.1) / 0.13) * fr;
      const w = N.worley(u * 160, v * 80, 160, 0.9);
      const sp = sst(0.32, 0.12, w.d1) * ((w.id & 3) === 0 ? 1 : 0.35);
      r *= 1 - 0.1 * sp * fz; g *= 1 - 0.17 * sp * fz; b *= 1 - 0.2 * sp * fz;
    }
    o[0] = r; o[1] = g; o[2] = b;
  });
  kit.face.set(def.id, t.map);
  return t.map;
}

// --------------------------------------------------------------- geometry kit
const _s = [0, 0, 0, 0, 0, 0], _p1 = V(), _p2 = V(), _ta = V(), _ty = V();

// Superellipse section profile. keys: [y, rx, rz, cx, cz, p]; y is interpolated
// linearly, the rest with Catmull-Rom, uniformly over the key index.
class Prof {
  constructor(keys) {
    this.k = keys.map((k) => [k[0], k[1], k[2] ?? k[1], k[3] ?? 0, k[4] ?? 0, k[5] ?? 2]);
    this.S = [];
    for (let i = 0; i <= 160; i++) this.S.push(this.at(i / 160, []));
    this.up = this.S[160][0] > this.S[0][0];
  }
  at(t, o) {
    const k = this.k, n = k.length - 1, f = sat(t) * n, i = Math.min(n - 1, Math.floor(f)), u = f - i;
    const a = k[Math.max(0, i - 1)], b = k[i], c = k[i + 1], d = k[Math.min(n, i + 2)];
    o[0] = b[0] + (c[0] - b[0]) * u;
    for (let q = 1; q < 6; q++) o[q] = cr(a[q], b[q], c[q], d[q], u);
    return o;
  }
  atY(y, o) {
    const S = this.S, n = S.length - 1, up = this.up;
    let A, B;
    if (up ? y <= S[0][0] : y >= S[0][0]) A = B = S[0];
    else if (up ? y >= S[n][0] : y <= S[n][0]) A = B = S[n];
    else {
      let lo = 0, hi = n;
      while (hi - lo > 1) { const m = (lo + hi) >> 1; if ((S[m][0] < y) === up) lo = m; else hi = m; }
      A = S[lo]; B = S[hi];
    }
    const u = A === B ? 0 : (y - A[0]) / (B[0] - A[0]);
    for (let q = 0; q < 6; q++) o[q] = A[q] + (B[q] - A[q]) * u;
    o[0] = y;
    return o;
  }
  pt(y, a, off, out) { const s = this.atY(y, _s); return out.set(s[3] + (s[1] + off) * seS(a, s[5]), y, s[4] + (s[2] + off) * seC(a, s[5])); }
  nrm(y, a, out) {
    const e = 0.004;
    this.pt(y, a + e, 0, _p1); this.pt(y, a - e, 0, _p2); _ta.subVectors(_p1, _p2);
    this.pt(y + e, a, 0, _p1); this.pt(y - e, a, 0, _p2); _ty.subVectors(_p1, _p2);
    return out.crossVectors(_ta, _ty).normalize();
  }
  // arc length per radian at (y, a), to convert metres <-> angle
  rate(y, a) { this.pt(y, a + 0.01, 0, _p1); this.pt(y, a - 0.01, 0, _p2); return _p1.distanceTo(_p2) / 0.02; }
  geo(nr, ns, o = {}) {
    const off = o.off ?? 0, s = [], fold = o.fold;
    return loft(nr, ns, (t, a, out) => {
      this.at(t, s);
      let d = off;
      if (fold) d += fold(t, a);
      out.set(s[3] + (s[1] + d) * seS(a, s[5]), s[0], s[4] + (s[2] + d) * seC(a, s[5]));
    }, o);
  }
}

function weldSeam(g, rows, cols) {
  const n = g.attributes.normal;
  for (let r = 0; r < rows; r++) {
    const a = r * cols, b = r * cols + cols - 1;
    const x = n.getX(a) + n.getX(b), y = n.getY(a) + n.getY(b), z = n.getZ(a) + n.getZ(b), l = Math.hypot(x, y, z) || 1;
    n.setXYZ(a, x / l, y / l, z / l); n.setXYZ(b, x / l, y / l, z / l);
  }
}

// Generic loft: fn(t, a, out, ring, col) gives each vertex. Auto-orients outward.
function loft(nr, ns, fn, o = {}) {
  const a0 = o.a0 ?? 0, a1 = o.a1 ?? TAU, full = Math.abs(a1 - a0 - TAU) < 1e-6;
  const cols = ns + 1, cnt = (nr + 1) * cols;
  const pos = new Float32Array(cnt * 3), uv = new Float32Array(cnt * 2), p = V();
  for (let r = 0; r <= nr; r++) for (let i = 0; i <= ns; i++) {
    fn(r / nr, a0 + (a1 - a0) * (i / ns), p, r, i);
    const q = (r * cols + i) * 3; pos[q] = p.x; pos[q + 1] = p.y; pos[q + 2] = p.z;
  }
  const D = (A, B) => Math.hypot(pos[A * 3] - pos[B * 3], pos[A * 3 + 1] - pos[B * 3 + 1], pos[A * 3 + 2] - pos[B * 3 + 2]);
  const us = o.uv ?? 3;
  for (let r = 0; r <= nr; r++) { let acc = 0; for (let i = 0; i <= ns; i++) { const A = r * cols + i; if (i) acc += D(A, A - 1); uv[A * 2] = acc * us; } }
  for (let i = 0; i <= ns; i++) { let acc = 0; for (let r = 0; r <= nr; r++) { const A = r * cols + i; if (r) acc += D(A, A - cols); uv[A * 2 + 1] = acc * us; } }
  const idx = [];
  for (let r = 0; r < nr; r++) for (let i = 0; i < ns; i++) { const a = r * cols + i, b = a + 1, c = a + cols, d = c + 1; idx.push(a, b, c, b, d, c); }
  let g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals();
  // orientation: normals should point away from each ring's centroid
  const N = g.attributes.normal.array, cen = [];
  let score = 0;
  for (let r = 0; r <= nr; r++) {
    let cx = 0, cy = 0, cz = 0;
    for (let i = 0; i < cols; i++) { const q = (r * cols + i) * 3; cx += pos[q]; cy += pos[q + 1]; cz += pos[q + 2]; }
    cx /= cols; cy /= cols; cz /= cols; cen.push([cx, cy, cz]);
    for (let i = 0; i < cols; i++) { const q = (r * cols + i) * 3; score += (pos[q] - cx) * N[q] + (pos[q + 1] - cy) * N[q + 1] + (pos[q + 2] - cz) * N[q + 2]; }
  }
  if ((score < 0) !== !!o.inward) {
    for (let q = 0; q < idx.length; q += 3) { const t = idx[q + 1]; idx[q + 1] = idx[q + 2]; idx[q + 2] = t; }
    g.setIndex(idx); g.computeVertexNormals();
  }
  if (full) weldSeam(g, nr + 1, cols);
  const caps = [];
  for (const [flag, r, rn] of [[o.capS, 0, Math.min(1, nr)], [o.capE, nr, Math.max(0, nr - 1)]]) {
    if (!flag) continue;
    const c = cen[r], dir = V(c[0] - cen[rn][0], c[1] - cen[rn][1], c[2] - cen[rn][2]).normalize();
    const cp = [c[0], c[1], c[2]], ci = [];
    for (let i = 0; i < cols; i++) { const q = (r * cols + i) * 3; cp.push(pos[q], pos[q + 1], pos[q + 2]); }
    for (let i = 1; i < cols; i++) ci.push(0, i, i + 1);
    const cg = new THREE.BufferGeometry();
    cg.setAttribute('position', new THREE.Float32BufferAttribute(cp, 3));
    cg.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array((cols + 1) * 2), 2));
    // orient the fan along dir
    const P = cg.attributes.position;
    if (ci.length >= 3) {
      _p1.fromBufferAttribute(P, ci[1]).sub(_p2.fromBufferAttribute(P, ci[0]));
      _ta.fromBufferAttribute(P, ci[2]).sub(_p2);
      if (_p1.cross(_ta).dot(dir) < 0) for (let q = 0; q < ci.length; q += 3) { const t = ci[q + 1]; ci[q + 1] = ci[q + 2]; ci[q + 2] = t; }
    }
    cg.setIndex(ci);
    const nn = new Float32Array((cols + 1) * 3);
    for (let i = 0; i <= cols; i++) { nn[i * 3] = dir.x; nn[i * 3 + 1] = dir.y; nn[i * 3 + 2] = dir.z; }
    cg.setAttribute('normal', new THREE.BufferAttribute(nn, 3));
    caps.push(cg);
  }
  if (caps.length) g = mergeGeometries([g, ...caps], false);
  return g;
}

// Tube along a Catmull-Rom curve. rad(t) -> r or [rWidth, rNormal]. Frames are
// transported along the curve; o.upFn(t, p) can pin the "normal" axis (ribbons).
function tube(pts, ns, rad, o = {}) {
  const curve = new THREE.CatmullRomCurve3(pts, !!o.closed, 'centripetal');
  const nr = o.nr ?? Math.max(4, pts.length * 4);
  const P = [], N = [], B = [];
  let prev = null;
  for (let r = 0; r <= nr; r++) {
    const t = r / nr, p = curve.getPointAt(t), tg = curve.getTangentAt(t).normalize();
    let up = o.upFn ? o.upFn(t, p) : prev ? prev.clone() : (o.up ? o.up.clone() : (Math.abs(tg.y) < 0.9 ? V(0, 1, 0) : V(1, 0, 0)));
    up.addScaledVector(tg, -up.dot(tg));
    if (up.lengthSq() < 1e-10) up = Math.abs(tg.x) < 0.9 ? V(1, 0, 0).cross(tg) : V(0, 1, 0).cross(tg);
    up.normalize();
    P.push(p); N.push(up); B.push(V().crossVectors(tg, up)); prev = up;
  }
  return loft(nr, ns, (t, a, out, r) => {
    const rr = rad(t), ru = Array.isArray(rr) ? rr[0] : rr, rv = Array.isArray(rr) ? rr[1] : rr;
    out.copy(P[r]).addScaledVector(B[r], ru * Math.sin(a)).addScaledVector(N[r], rv * Math.cos(a));
  }, { uv: o.uv ?? 20, capS: o.capS, capE: o.capE });
}

function steps(a, b, fn) {
  const out = [a]; let x = a;
  while (x < b - 1e-9) { x += fn(x); out.push(x); }
  const k = (b - a) / (out[out.length - 1] - a);
  return out.map((v) => a + (v - a) * k);
}

// Sphere grid with arbitrary phi/theta spacing (SphereGeometry layout + UVs).
// fn(dir, out) returns a mask value; faces are kept when any corner mask > 0.
function sphereGrid(phis, thetas, fn, masked = false) {
  const W = phis.length - 1, H = thetas.length - 1, cols = W + 1, cnt = (H + 1) * cols;
  const pos = new Float32Array(cnt * 3), uv = new Float32Array(cnt * 2), mask = new Float32Array(cnt);
  const d = V(), o = V();
  for (let iy = 0; iy <= H; iy++) for (let ix = 0; ix <= W; ix++) {
    const th = thetas[iy], ph = phis[ix], i = iy * cols + ix;
    d.set(-Math.cos(ph) * Math.sin(th), Math.cos(th), Math.sin(ph) * Math.sin(th));
    mask[i] = fn(d, o, ph, th);
    pos[i * 3] = o.x; pos[i * 3 + 1] = o.y; pos[i * 3 + 2] = o.z;
    uv[i * 2] = ph / TAU; uv[i * 2 + 1] = 1 - th / Math.PI;
  }
  if (masked) {
    // move bare vertices that border hair onto the zero crossing of the mask: smooth hairlines
    const dir = (i, out) => { const th = thetas[Math.floor(i / cols)], ph = phis[i % cols]; return out.set(-Math.cos(ph) * Math.sin(th), Math.cos(th), Math.sin(ph) * Math.sin(th)); };
    const dv = V(), dn = V(), acc = V();
    for (let iy = 0; iy <= H; iy++) for (let ix = 0; ix <= W; ix++) {
      const i = iy * cols + ix; if (mask[i] > 0) continue;
      acc.set(0, 0, 0); let cnt = 0;
      for (const [ox, oy] of [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, -1]]) {
        let nx = ix + ox; const ny = iy + oy;
        if (ny < 0 || ny > H) continue;
        if (nx < 0) nx = W - 1; else if (nx > W) nx = 1;
        const n = ny * cols + nx; if (!(mask[n] > 0)) continue;
        const f = mask[i] / (mask[i] - mask[n]);
        acc.add(dir(i, dv).lerp(dir(n, dn), clamp(f, 0, 0.98)).normalize()); cnt++;
      }
      if (!cnt) continue;
      fn(acc.normalize(), o);
      pos[i * 3] = o.x; pos[i * 3 + 1] = o.y; pos[i * 3 + 2] = o.z;
    }
  }
  const idx = [];
  for (let iy = 0; iy < H; iy++) for (let ix = 0; ix < W; ix++) {
    const a = iy * cols + ix + 1, b = iy * cols + ix, c = (iy + 1) * cols + ix, e = (iy + 1) * cols + ix + 1;
    if ((iy !== 0 || thetas[0] > 0) && (!masked || mask[a] > 0 || mask[b] > 0 || mask[e] > 0)) idx.push(a, b, e);
    if ((iy !== H - 1 || thetas[H] < Math.PI) && (!masked || mask[b] > 0 || mask[c] > 0 || mask[e] > 0)) idx.push(b, c, e);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  g.setIndex(idx); g.computeVertexNormals();
  if (Math.abs(phis[W] - phis[0] - TAU) < 1e-6) weldSeam(g, H + 1, cols);
  const n = g.attributes.normal;
  for (const iy of [0, H]) {
    if (thetas[iy] > 1e-6 && thetas[iy] < Math.PI - 1e-6) continue;
    let x = 0, y = 0, z = 0;
    for (let ix = 0; ix < cols; ix++) { const i = iy * cols + ix; x += n.getX(i); y += n.getY(i); z += n.getZ(i); }
    const l = Math.hypot(x, y, z) || 1;
    for (let ix = 0; ix < cols; ix++) n.setXYZ(iy * cols + ix, x / l, y / l, z / l);
  }
  return g;
}

// Solid slab around a mid-surface fn(u, v, out). th: thickness (number or fn).
// bias 0 centres it on the surface; bias 0.5 puts the whole thickness outside.
function slab(nu, nv, fn, th, o = {}) {
  const cu = nu + 1, cnt = (nv + 1) * cu, bias = o.bias ?? 0;
  const M = new Float32Array(cnt * 3), p = V();
  for (let v = 0; v <= nv; v++) for (let u = 0; u <= nu; u++) { fn(u / nu, v / nv, p); M.set([p.x, p.y, p.z], (v * cu + u) * 3); }
  const at = (u, v, out) => out.set(M[(v * cu + u) * 3], M[(v * cu + u) * 3 + 1], M[(v * cu + u) * 3 + 2]);
  const top = new Float32Array(cnt * 3), bot = new Float32Array(cnt * 3), du = V(), dv = V(), q = V(), n = V();
  for (let v = 0; v <= nv; v++) for (let u = 0; u <= nu; u++) {
    at(Math.min(nu, u + 1), v, du); du.sub(at(Math.max(0, u - 1), v, q));
    at(u, Math.min(nv, v + 1), dv); dv.sub(at(u, Math.max(0, v - 1), q));
    n.crossVectors(du, dv); if (n.lengthSq() < 1e-14) n.copy(o.nHint ?? V(0, 0, 1)); n.normalize();
    if (o.flip) n.negate();
    const t = typeof th === 'function' ? th(u / nu, v / nv) : th;
    at(u, v, p);
    const i = (v * cu + u) * 3;
    top[i] = p.x + n.x * t * (0.5 + bias); top[i + 1] = p.y + n.y * t * (0.5 + bias); top[i + 2] = p.z + n.z * t * (0.5 + bias);
    bot[i] = p.x - n.x * t * (0.5 - bias); bot[i + 1] = p.y - n.y * t * (0.5 - bias); bot[i + 2] = p.z - n.z * t * (0.5 - bias);
  }
  const pos = [], idx = [];
  const addGrid = (src, flip) => {
    const base = pos.length / 3;
    for (let i = 0; i < cnt * 3; i++) pos.push(src[i]);
    for (let v = 0; v < nv; v++) for (let u = 0; u < nu; u++) {
      const a = base + v * cu + u, b = a + 1, c = a + cu, d = c + 1;
      if (!flip) idx.push(a, b, c, b, d, c); else idx.push(a, c, b, b, c, d);
    }
  };
  const fl = !!o.flip;
  addGrid(top, fl); addGrid(bot, !fl);
  // side walls (separate verts for crisp edges)
  const wall = (list, rev) => {
    const base = pos.length / 3;
    for (const i of list) pos.push(top[i * 3], top[i * 3 + 1], top[i * 3 + 2], bot[i * 3], bot[i * 3 + 1], bot[i * 3 + 2]);
    for (let k = 0; k < list.length - 1; k++) {
      const t0 = base + k * 2, b0 = t0 + 1, t1 = t0 + 2, b1 = t0 + 3;
      if (!rev) idx.push(t0, b0, t1, t1, b0, b1); else idx.push(t0, t1, b0, t1, b1, b0);
    }
  };
  const e0 = [], e1 = [], e2 = [], e3 = [];
  for (let u = 0; u <= nu; u++) { e0.push(u); e1.push(nv * cu + u); }
  for (let v = 0; v <= nv; v++) { e2.push(v * cu); e3.push(v * cu + nu); }
  wall(e0, fl); wall(e1, !fl);
  if (!o.closedU) { wall(e2, !fl); wall(e3, fl); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx); g.computeVertexNormals();
  boxUV(g, o.uv ?? 3);
  return g;
}

function boxUV(g, s) {
  const p = g.attributes.position, n = g.attributes.normal, uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i)), az = Math.abs(n.getZ(i));
    let u, v;
    if (ay >= ax && ay >= az) { u = p.getX(i); v = p.getZ(i); } else if (ax >= az) { u = p.getZ(i); v = p.getY(i); } else { u = p.getX(i); v = p.getY(i); }
    uv[i * 2] = u * s; uv[i * 2 + 1] = v * s;
  }
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return g;
}
function constUV(g, u, v) {
  const uv = new Float32Array(g.attributes.position.count * 2);
  for (let i = 0; i < uv.length; i += 2) { uv[i] = u; uv[i + 1] = v; }
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return g;
}
// face-map UVs for parts glued onto the head (nose, ears, lids): sample the map in the direction they sit
function dirUVs(g, sx, sy, sz) {
  const p = g.attributes.position, uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const x = (p.getX(i) - HC.x) / sx, y = (p.getY(i) - HC.y) / sy, z = (p.getZ(i) - HC.z) / sz, l = Math.hypot(x, y, z) || 1;
    const [u, v] = dirUV(x / l, y / l, z / l); uv[i * 2] = u; uv[i * 2 + 1] = v;
  }
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  return g;
}
function ell(rx, ry, rz, ws = 12, hs = 8) { const g = new THREE.SphereGeometry(1, ws, hs); g.scale(rx, ry, rz); return g; }
function rbox(w, h, d, r, seg = 4) {
  const g = new THREE.BoxGeometry(w, h, d, seg, seg, seg), p = g.attributes.position;
  const hx = w / 2 - r, hy = h / 2 - r, hz = d / 2 - r, v = V(), q = V();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i); q.set(clamp(v.x, -hx, hx), clamp(v.y, -hy, hy), clamp(v.z, -hz, hz)); v.sub(q);
    if (v.lengthSq() > 1e-12) v.normalize().multiplyScalar(r);
    p.setXYZ(i, q.x + v.x, q.y + v.y, q.z + v.z);
  }
  g.deleteAttribute('normal'); g.deleteAttribute('uv');
  const m = mergeVertices(g, 1e-5); m.computeVertexNormals();
  return boxUV(m, 3);
}
const _m4 = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler(), _sc = V();
function xf(g, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, s = 1) {
  if (typeof s === 'number') _sc.set(s, s, s); else _sc.copy(s);
  g.applyMatrix4(_m4.compose(_p1.set(x, y, z), _q.setFromEuler(_e.set(rx, ry, rz)), _sc));
  return g;
}
// orient a geometry so its +z axis points along n (and +y roughly along up)
function orient(g, pos, n, up = V(0, 1, 0)) {
  const z = n.clone().normalize(), x = V().crossVectors(up, z);
  if (x.lengthSq() < 1e-8) x.set(1, 0, 0);
  x.normalize(); const y = V().crossVectors(z, x);
  g.applyMatrix4(_m4.makeBasis(x, y, z).setPosition(pos));
  return g;
}
function clean(g) {
  for (const k of Object.keys(g.attributes)) if (!['position', 'normal', 'uv'].includes(k)) g.deleteAttribute(k);
  if (!g.attributes.uv) constUV(g, 0, 0);
  if (!g.index) { const n = g.attributes.position.count, ix = new Uint32Array(n); for (let i = 0; i < n; i++) ix[i] = i; g.setIndex(new THREE.BufferAttribute(ix, 1)); }
  return g;
}

// --------------------------------------------------------------- head
const HC = V(0, 0.098, 0.012); // head sphere centre in head-pivot space
function headFn(st) {
  const [sx, sy, sz] = st.hs, jt = st.jaw, br = st.brow, ck = st.cheek, age = st.age;
  return function (d, out, socket = true) {
    let x = d.x, y = d.y, z = d.z;
    const fr = sst(0.0, 0.55, z), low = sst(0.05, -0.95, y);
    if (z < 0) z *= 1 + 0.12 * sst(-0.6, 0.3, y);
    const nape = sst(-0.25, -0.85, y) * sst(0.3, -0.55, z);
    z *= 1 - 0.3 * nape;
    x *= 1 - jt * Math.pow(low, 1.3) * (0.55 + 0.45 * fr);
    if (z > 0) z -= 0.15 * z * z * z;
    const ax = Math.abs(x);
    let dz = 0;
    dz += 0.055 * br * g2(x / 0.5, (y - 0.22) / 0.07) * sst(0.55, 0.85, z);
    dz += 0.025 * g2(x / 0.11, (y - 0.13) / 0.07) * fr;
    if (socket) dz -= (0.08 + 0.025 * age) * g2((ax - 0.37) / 0.155, (y - 0.07) / 0.1) * fr;
    dz -= 0.022 * g2((ax - 0.27 - (y + 0.35) * 0.35) / 0.035, (y + 0.36) / 0.1) * fr * (0.6 + age);   // nasolabial fold
    dz -= 0.012 * g2(x / 0.045, (y + 0.42) / 0.035) * fr;   // philtrum
    dz += 0.025 * (1 - (st.fem ? 0.6 : 0)) * g2((ax - 0.72) / 0.12, (y + 0.6) / 0.12) * sst(-0.2, 0.4, z);   // jaw angle
    dz += 0.04 * ck * g2((ax - 0.56) / 0.16, (y + 0.08) / 0.11) * fr;
    dz -= 0.035 * age * g2((ax - 0.52) / 0.14, (y + 0.36) / 0.12) * fr;
    dz += 0.045 * g2(x / 0.36, (y + 0.5) / 0.18) * fr;
    dz += 0.06 * g2(x / 0.25, (y + 0.8) / 0.12) * fr;
    z += dz;
    x *= 1 + 0.03 * ck * g2((ax - 0.75) / 0.2, (y + 0.08) / 0.12) - 0.045 * g2((y - 0.34) / 0.2, (z - 0.5) / 0.3);
    return out.set(HC.x + x * sx, HC.y + y * sy, HC.z + z * sz);
  };
}

function buildHead(K, j, def, st) {
  const H = headFn(st), m = K.m, hp = j.head, [sx, sy, sz] = st.hs;
  const phis = steps(0, TAU, (p) => 0.06 + 0.17 * (1 - Math.cos(p - Math.PI / 2)) / 2);
  const thetas = steps(0, Math.PI, (t) => 0.058 + 0.09 * (1 - sst(0.5, 0.75, t) * sst(2.75, 2.5, t)));
  K.add(hp, m.face, sphereGrid(phis, thetas, (d, o) => { H(d, o); return 1; }));
  const dd = V();
  const sp = (x, y, z, out = V(), sock = true) => H(dd.set(x, y, z).normalize(), out, sock);
  const en = (x, y, z) => V(x / (sx * sx), y / (sy * sy), z / (sz * sz)).normalize(); // ellipsoid normal for a direction
  const nAt = (x, y, z, sock = true) => {
    const d0 = V(x, y, z).normalize(), t1 = V(0, 1, 0).cross(d0);
    if (t1.lengthSq() < 1e-6) t1.set(1, 0, 0);
    t1.normalize(); const t2 = V().crossVectors(d0, t1);
    const P0 = H(d0.clone(), V(), sock), P1 = H(d0.clone().addScaledVector(t1, 0.01).normalize(), V(), sock), P2 = H(d0.clone().addScaledVector(t2, 0.01).normalize(), V(), sock);
    const n = V().crossVectors(P1.sub(P0), P2.sub(P0)).normalize();
    if (n.dot(d0) < 0) n.negate();
    return n;
  };
  // front meridian (x = 0) sampled for the nose: height -> surface z
  const mer = [];
  for (let b = -1.25; b <= 0.7; b += 0.02) { const P = sp(0, Math.sin(b), Math.cos(b), V(), false); mer.push([P.y, P.z]); }
  const zAt = (y) => { for (let i = 1; i < mer.length; i++) if (mer[i][0] >= y) { const [y0, z0] = mer[i - 1], [y1, z1] = mer[i]; return lerp(z0, z1, (y - y0) / (y1 - y0 || 1)); } return mer[mer.length - 1][1]; };

  // nose: a deformed sphere whose back half sinks into the face
  {
    const yb = HC.y - 0.36 * sy, yt = HC.y + 0.1 * sy, Hn = yt - yb, g = new THREE.SphereGeometry(1, 12, 14), p = g.attributes.position;
    const nk = st.fem ? 0.92 : 1.08;
    const wid = (t) => nk * (0.0047 + 0.0013 * Math.sin(t * Math.PI) + 0.0082 * sst(0.45, 0.07, t) - 0.0014 * sst(0.1, 0.0, t));
    const pro = (t) => nk * (0.0038 + 0.0145 * sst(0.95, 0.25, t) - 0.0095 * sst(0.16, 0.0, t) + 0.0032 * g2((t - 0.17) / 0.07, 0));
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), y = p.getY(i), z = p.getZ(i), t = (y + 1) / 2, Y = yb + t * Hn;
      const zs = zAt(Y) - 0.0035;
      p.setXYZ(i, x * wid(t), Y, zs + (z > 0 ? z * pro(t) : z * 0.004));
    }
    g.computeVertexNormals();
    K.add(hp, m.face, dirUVs(g, sx, sy, sz));
  }
  // eyes
  const re = 0.0118;
  for (const s of [-1, 1]) {
    const dx = s * 0.37, dy = 0.065, dz = 0.93;
    const P = sp(dx, dy, dz, V(), false);
    const c = V(P.x - s * 0.0006, P.y, P.z - re - 0.0008);
    K.add(hp, m.eyeW, xf(ell(re, re, re, 14, 10), c.x, c.y, c.z));
    const gy = -0.06, gx = -s * 0.03; // gaze: slightly down, slightly converged
    const ir = new THREE.SphereGeometry(re * 1.004, 14, 3, 0, TAU, 0, 0.5);
    ir.rotateX(Math.PI / 2 - gy); ir.rotateY(gx);
    K.add(hp, m.iris, xf(ir, c.x, c.y, c.z));
    const lidU = new THREE.SphereGeometry(re + 0.0011, 16, 7, 0, TAU, 0, 1.15);
    K.add(hp, m.face, dirUVs(xf(lidU, c.x, c.y, c.z, 0.2 + 0.07 * st.age, 0, 0), sx, sy, sz));
    const lidL = new THREE.SphereGeometry(re + 0.0008, 16, 5, 0, TAU, 0, 1.0);
    K.add(hp, m.face, dirUVs(xf(lidL, c.x, c.y, c.z, Math.PI - 0.24, 0, 0), sx, sy, sz));
    const pu = new THREE.SphereGeometry(re * 1.008, 10, 2, 0, TAU, 0, 0.2);
    pu.rotateX(Math.PI / 2 - gy); pu.rotateY(gx);
    K.add(hp, m.dark, xf(pu, c.x, c.y, c.z));
    // brow
    const bp = [];
    for (let k = 0; k <= 5; k++) {
      const f = k / 5, bx = s * lerp(0.12, 0.64, f), by = 0.225 + 0.055 * Math.sin(f * 2.4) - (st.fem ? -0.005 : 0.012) - 0.035 * f * f;
      bp.push(sp(bx, by, 0.9).addScaledVector(nAt(bx, by, 0.9), 0.0012));
    }
    const bw = st.fem ? 0.0024 : 0.0031;
    K.add(hp, m.hair, tube(bp.map((p) => p.addScaledVector(en(p.x - HC.x, p.y - HC.y, p.z - HC.z), -0.0004)), 6, (t) => [bw * (1 - 0.65 * t) * (0.7 + 0.3 * sst(0, 0.22, t)) + 0.0005, 0.0006], { nr: 14, upFn: (t, p) => en(p.x - HC.x, p.y - HC.y, p.z - HC.z) }));
    // ear
    if (st.ears) {
      const g = new THREE.SphereGeometry(1, 12, 10), p = g.attributes.position;
      for (let i = 0; i < p.count; i++) {
        let x = p.getX(i), y = p.getY(i), z = p.getZ(i);
        const cup = x > 0 ? 0.75 * g2(y / 0.55, (z + 0.05) / 0.55) : 0;
        const lobe = y < -0.5 ? 0.8 : 1;
        const es = st.earScale ?? 1;
        p.setXYZ(i, (x - cup) * 0.0065 * es, y * 0.03 * es, (z * 0.0175 * lobe + (y > 0 ? -0.004 * y : 0)) * es);
      }
      g.computeVertexNormals();
      const E = sp(s * 1, 0.02, -0.08);
      xf(g, 0, 0, 0, -0.12, 0, 0);
      if (s < 0) xf(g, 0, 0, 0, 0, Math.PI, 0);
      xf(g, E.x + s * 0.003 * (st.earScale ?? 1), E.y - 0.002, E.z - 0.004, 0, s * -(st.earFlare ?? 0.28), 0);
      K.add(hp, m.face, dirUVs(g, sx, sy, sz));
    }
  }
  // lips + mouth line
  {
    const lipPath = (y0, w, cupid) => {
      const pts = [];
      for (let k = 0; k <= 8; k++) { const f = k / 8 * 2 - 1, x = f * w, y = y0 + cupid * (Math.abs(f) < 0.35 ? -0.012 * Math.cos(f / 0.35 * Math.PI) : 0) - 0.012 * f * f; pts.push(sp(x, y, 0.94).addScaledVector(nAt(x, y, 0.94), 0.0005)); }
      return pts;
    };
    const lf = st.lipFull, up = (t, p) => en(p.x - HC.x, p.y - HC.y, p.z - HC.z);
    const prof = (a, b) => (t) => { const e = Math.sin(t * Math.PI); return [a * lf * (0.35 + 0.65 * Math.pow(e, 0.6)), b * lf * (0.3 + 0.7 * Math.pow(e, 0.7))]; };
    K.add(hp, m.lips, tube(lipPath(-0.48, 0.27, 1), 8, prof(0.0034, 0.0028), { nr: 16, upFn: up }));
    K.add(hp, m.lips, tube(lipPath(-0.555, 0.25, 0), 8, prof(0.0044, 0.0034), { nr: 16, upFn: up }));
    K.add(hp, m.dark, tube(lipPath(-0.515, 0.26, 0.4).map((p, i, a) => p.addScaledVector(nAt(p.x - HC.x, p.y - HC.y, p.z - HC.z), 0.0005)), 5, () => [0.0007, 0.0012], { nr: 16, upFn: up }));
  }
  buildHair(K, j, def, st, H, en);
}

// offset shell over the head. mask(d) is a signed distance in direction space
// (> 0 where covered); th(d, e) gives the thickness there.
function shell(H, en, mask, th, ws = 40, hs = 28, extra, tiles = [6, 3]) {
  const phis = steps(0, TAU, () => TAU / ws), thetas = steps(0, Math.PI, () => Math.PI / hs);
  const g = sphereGrid(phis, thetas, (d, o) => {
    const e = mask(d), t = e > 0 ? th(d, e) : 0;
    H(d, o, false);
    o.addScaledVector(en(d.x, d.y, d.z), Math.max(0, t) + 0.0013);
    if (extra) extra(d, o, t, e);
    return e;
  }, true);
  const uv = g.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * tiles[0], uv.getY(i) * tiles[1]);
  return g;
}

const lineDir = (a, fn, off) => {
  const d = V(Math.sin(a), 0, Math.cos(a));
  for (let i = 0; i < 3; i++) { const y = clamp(fn(d) + off, -0.99, 0.99), r = Math.sqrt(1 - y * y); d.set(r * Math.sin(a), y, r * Math.cos(a)); }
  return d;
};
function buildHair(K, j, def, st, H, en) {
  const m = K.m, hp = j.head, R = mulberry32(st.seed * 7);
  const surf = (x, y, z, off) => { const d = V(x, y, z).normalize(); return H(d, V(), false).addScaledVector(en(d.x, d.y, d.z), off); };
  const nz = (d, f) => NZS.noise(d.x * f + d.z * 1.7, d.y * f - d.z * 2.3);
  if (st.hair === 'bob') {
    const line = (d) => (d.z > 0 ? lerp(0.3, -0.06, sst(0.1, 0.8, Math.abs(d.x))) : lerp(-0.06, -0.2, sst(0, -0.6, d.z)));
    K.add(hp, m.hair, shell(H, en, (d) => d.y - line(d), (d, e) => 0.008 * sst(0, 0.12, e) + 0.0015 * nz(d, 7)));
    // curtain: drops from the widest ring to the jaw, tapering in and curling under
    const rAt = (a) => { const P = H(V(Math.sin(a), 0.08, Math.cos(a)).normalize(), V(), false); return [P.x - HC.x, P.z - HC.z]; };
    const keys = [[0.125, 0.003], [0.098, 0.009], [0.068, 0.012], [0.038, 0.011], [0.014, 0.007], [0.0, 0.002], [0.006, -0.004], [0.03, -0.009]];
    K.add(hp, m.hair, loft(keys.length - 1, 34, (t, a, out, r) => {
      const [y, off] = keys[r], [px, pz] = rAt(a), L = Math.hypot(px, pz), back = sst(0.3, -0.9, Math.cos(a));
      const front = sst(1.7, 0.95, Math.min(a, TAU - a)), low = r / (keys.length - 1);
      const yy = y - 0.014 * front * sst(0.3, 0.6, low) + (r >= 3 ? 0.003 * NZS.noise(a * 7, 3) : 0);
      const ext = off - L * (0.05 + 0.06 * back) * sst(0.25, 0.9, low) + (r >= 2 && r <= 5 ? 0.0025 * NZS.noise(a * 11, r) : 0);
      out.set(HC.x + px * (1 + ext / L), yy, HC.z + pz * (1 + ext / L));
    }, { a0: 0.95, a1: TAU - 0.95, uv: 34 }));
  } else if (st.hair === 'receding') {
    K.add(hp, m.hair, shell(H, en, (d) => {
      const ax = Math.abs(d.x);
      const zl = 0.36 - 0.26 * g2((ax - 0.42) / 0.17, 0) + 0.12 * sst(0.62, 0.92, ax);
      const low = d.z < -0.3 ? -0.55 : lerp(-0.12, -0.55, sst(0.22, -0.3, d.z));
      return Math.min(zl - d.z, d.y - low, 1.6 - d.z * 0.0);
    }, (d, e) => (0.0016 + 0.0046 * sst(0.7, 0.15, d.y)) * sst(0, 0.12, e) + 0.0012 * nz(d, 9)));
    if (st.beard) K.add(hp, m.hair, shell(H, en, (d) => {
      const ax = Math.abs(d.x), line = lerp(-0.37, -0.08, sst(0.25, 0.95, ax)) + 0.02 * g2(ax / 0.12, 0);
      const lip = Math.max(ax - 0.27, Math.abs(d.y + 0.545) - 0.06);
      return Math.min(line - d.y, lip * 1.5, d.z + 0.12);
    }, (d, e) => (0.0042 + 0.006 * sst(-0.55, -0.95, d.y)) * sst(0, 0.07, e) + 0.0013 * nz(d, 12), 56, 40));
  } else if (st.hair === 'bun') {
    K.add(hp, m.hair, shell(H, en, (d) => {
      const line = d.z > 0 ? lerp(0.44, 0.02, sst(0.2, 0.85, Math.abs(d.x))) : lerp(0.02, -0.5, sst(0, -0.5, d.z));
      return d.y - line;
    }, (d, e) => 0.0034 * sst(0, 0.1, e) + 0.0008 * nz(d, 10)));
    const bc = V(0, HC.y + 0.062, HC.z - 0.093);
    const bun = ell(0.042, 0.037, 0.033, 16, 12);
    const p = bun.attributes.position;
    for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i), z = p.getZ(i); const k = 1 + 0.07 * Math.sin(Math.atan2(y, x) * 5 + z * 60); p.setXYZ(i, x * k, y * k, z); }
    bun.computeVertexNormals();
    K.add(hp, m.hair, xf(bun, bc.x, bc.y, bc.z, -0.55, 0, 0));
    // cornrow braids from the hairline back into the bun, and one wrapped round its base
    const braid = (pts, r) => {
      const c = new THREE.CatmullRomCurve3(pts, false, 'centripetal'), L = c.getLength(), n = Math.max(4, Math.round(L / (r * 1.2)));
      for (let k = 0; k <= n; k++) {
        const t = k / n, P = c.getPointAt(t), T = c.getTangentAt(t), s = k % 2 ? 1 : -1, rr = r * (1 - 0.25 * Math.pow(t, 3));
        const g = ell(rr * 0.85, rr * 0.5, rr * 1.45, 6, 3);
        g.applyQuaternion(new THREE.Quaternion().setFromAxisAngle(V(0, 1, 0), s * 0.6));
        g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(V(0, 0, 1), T));
        const side = V().crossVectors(T, P.clone().sub(HC)).normalize().multiplyScalar(s * rr * 0.3);
        g.translate(P.x + side.x, P.y + side.y, P.z + side.z);
        K.add(hp, m.hair, g);
      }
    };
    for (const x of [-0.5, -0.17, 0.17, 0.5]) {
      const pts = [];
      for (let k = 0; k <= 6; k++) {
        const f = k / 6, el = lerp(0.36 + 0.12 * (1 - Math.abs(x)), 1.0, Math.sin(f * Math.PI / 2)) - (f > 0.5 ? (f - 0.5) * 1.6 : 0);
        const d = V(x * (1 - 0.55 * f), el, lerp(0.85, -0.7, f));
        pts.push(surf(d.x, d.y, d.z, 0.0042));
      }
      pts.push(V(x * 0.06, bc.y + 0.028 - Math.abs(x) * 0.02, bc.z + 0.01));
      braid(pts, 0.0058);
    }
    const ring = []; for (let k = 0; k <= 12; k++) { const a = k / 12 * TAU; ring.push(V(bc.x + Math.cos(a) * 0.041, bc.y - 0.006 + Math.sin(a) * 0.034, bc.z - 0.006 + Math.sin(a) * 0.012)); }
    braid(ring, 0.0068);
  } else if (st.hair === 'messy') {
    K.add(hp, m.hair, shell(H, en, (d) => {
      const line = d.z > 0 ? lerp(0.32, -0.04, sst(0.15, 0.85, Math.abs(d.x))) : lerp(-0.04, -0.5, sst(0, -0.55, d.z));
      const ph = Math.atan2(d.x, d.z);
      return d.y - line + 0.07 * Math.abs(Math.sin(ph * 7.5 + 1.3)) * sst(0.6, 0.0, d.z) + 0.04 * NZS.noise(ph * 4, 7);
    }, (d, e) => 0.0105 * sst(0, 0.1, e) + 0.004 * (0.5 + 0.5 * nz(d, 8)), 48, 32));
    const clump = (d0, dir, len, r0) => {
      const s = surf(d0.x, d0.y, d0.z, 0.006), p1 = s.clone().addScaledVector(dir, len * 0.55), p2 = s.clone().addScaledVector(dir, len).add(V(0, -len * 0.3, 0));
      K.add(hp, m.hair, tube([s.clone().addScaledVector(dir, -0.01), s, p1, p2], 5, (t) => [r0 * Math.pow(1 - t, 0.6) + 0.0018, r0 * 0.55 * Math.pow(1 - t, 0.6) + 0.0012], { nr: 7, upFn: (t, p) => en(p.x - HC.x, p.y - HC.y, p.z - HC.z) }));
    };
    for (const s of [-1, 1]) for (let k = 0; k < 3; k++) {
      const d0 = V(s * 0.97, 0.12 - k * 0.07, 0.1 - k * 0.22).normalize();
      clump(d0, V(s * 0.45, -1, -0.25 + (R() - 0.5) * 0.4).normalize(), 0.026 + R() * 0.012, 0.012);
    }
    for (let k = 0; k < 5; k++) {
      const x = lerp(-0.5, 0.36, k / 4) + (R() - 0.5) * 0.06, d0 = V(x, 0.43, 0.9).normalize();
      clump(d0, V(0.35 + x * 0.3, -1, 0.55).normalize(), 0.024 + R() * 0.014, 0.012);
    }
  }
  // ---- hats
  if (st.hat === 'cap') {
    const top = HC.y + 0.112 * 0.98 + 0.012;
    const cl = (d) => (d.z > 0 ? lerp(0.48, 0.3, sst(0.2, 0.9, Math.abs(d.x))) : lerp(0.3, 0.12, sst(0, -0.7, d.z)));
    K.add(hp, m.hat, shell(H, en, (d) => d.y - cl(d) + 0.02, (d) => 0.015 + 0.024 * sst(-0.1, 0.8, d.z) * sst(0.2, 0.75, d.y) + 0.006 * sst(0.4, 1, Math.abs(d.x)) * sst(0.3, 0.8, d.y), 48, 32, (d, o) => {
      // flat crown, pulled slightly forward
      if (o.y > top - 0.012) o.y = top - 0.012 + (o.y - top + 0.012) * 0.18;
      o.z += 0.012 * sst(0.3, 0.8, d.y) * sst(-0.3, 0.6, d.z);
    }));
    // band along the edge
    const band = []; for (let k = 0; k < 24; k++) { const d = lineDir(k / 24 * TAU, cl, -0.004); band.push(surf(d.x, d.y, d.z, 0.0145)); }
    K.add(hp, m.hat, tube(band, 6, () => [0.008, 0.004], { closed: true, nr: 48, upFn: (t, p) => V(p.x - HC.x, 0, p.z - HC.z).normalize() }));
    // brim (peak)
    K.add(hp, m.hat, slab(14, 4, (u, v, o) => {
      const d = lineDir(lerp(-0.85, 0.85, u), cl, 0.012), b = surf(d.x, d.y, d.z, 0.0145);
      const out = V(b.x - HC.x, 0, b.z - HC.z).normalize(), D = 0.062 * Math.pow(1 - Math.pow(2 * u - 1, 2), 0.55) + 0.003;
      o.copy(b).addScaledVector(out, v * D).add(V(0, -v * D * 0.42 - 0.004, 0));
    }, 0.006, { uv: 8, flip: true }));
    K.add(hp, m.hat, xf(ell(0.009, 0.005, 0.009, 8, 5), 0, top + 0.002, HC.z + 0.01));
  } else if (st.hat === 'bandana') {
    const bl = (d) => lerp(0.36, -0.24, sst(0.25, -0.6, d.z)) + 0.02 * Math.sin(Math.atan2(d.x, d.z) * 3);
    K.add(hp, m.hat, shell(H, en, (d) => d.y - bl(d) + 0.015, (d) => 0.0165 + 0.002 * nz(d, 5), 42, 28, (d, o) => {
      // knotted cloth: folds radiating from the knot at the back
      const a = Math.atan2(d.x, -d.z), f = 0.0028 * Math.sin(a * 9 + d.y * 6) * sst(0.9, -0.2, d.y) + 0.0015 * NZS.noise(d.x * 9, d.y * 9 + d.z * 5);
      o.addScaledVector(en(d.x, d.y, d.z), f);
    }));
    const hem = []; for (let k = 0; k < 28; k++) { const d = lineDir(k / 28 * TAU, bl, 0.008); hem.push(surf(d.x, d.y, d.z, 0.0165)); }
    K.add(hp, m.hat, tube(hem, 6, () => [0.0065, 0.004], { closed: true, nr: 56, upFn: (t, p) => en(p.x - HC.x, p.y - HC.y, p.z - HC.z) }));
    const kn = surf(-0.12, -0.12, -1, 0.022);
    K.add(hp, m.hat, xf(ell(0.016, 0.013, 0.011, 10, 8), kn.x, kn.y, kn.z, 0.2, 0, 0.5));
    for (const [s, L] of [[-1, 0.055], [1, 0.045]]) {
      K.add(hp, m.hat, slab(3, 6, (u, v, o) => {
        const w = (u - 0.5) * 0.032 * (1 - v * 0.45), tw = 0.5 + v * 0.6 * s;
        o.set(kn.x + s * (0.008 + v * 0.02) + w * Math.cos(tw), kn.y - 0.006 - v * L, kn.z - 0.006 - v * 0.012 + w * Math.sin(tw));
      }, 0.004, { uv: 10 }));
    }
  }
}

// --------------------------------------------------------------- body pieces
function torsoKeys(fem, b, nr) {
  const W = fem ? 0.95 : 1, C = fem ? 0.014 : 0, wa = fem ? 0.134 : 0.147;
  return [
    [-0.075, 0.146 * W + b, 0.101 + b, 0, -0.002, 2.3],
    [0.0, 0.148 * W + b, 0.102 + b, 0, 0.0, 2.3],
    [0.12, wa + b, 0.105 + b, 0, 0.004, 2.3],
    [0.24, 0.152 * W + b, 0.113 + b + C * 0.3, 0, 0.01 + C * 0.4, 2.4],
    [0.33, 0.158 * W + b, 0.122 + b + C * 0.6, 0, 0.015 + C, 2.5],
    [0.41, 0.168 * W + b, 0.12 + b, 0, 0.01 + C * 0.4, 2.7],
    [0.47, 0.192 * W + b, 0.108 + b, 0, 0.0, 2.7],
    [0.505, 0.19 * W + b, 0.098 + b, 0, -0.005, 2.7],
    [0.53, 0.162 * W + b * 0.9, 0.087 + b * 0.8, 0, -0.007, 2.5],
    [0.55, 0.122 * W + b * 0.7, 0.077 + b * 0.6, 0, -0.008, 2.3],
    [0.568, 0.08 + b * 0.5, 0.066 + b * 0.5, 0, -0.008, 2.0],
    [0.585, nr + 0.011, nr + 0.008, 0, -0.007, 2.0],
  ];
}
function bootUV(g, yTop) {
  const p = g.attributes.position, uv = g.attributes.uv;
  for (let i = 0; i < p.count; i++) uv.setY(i, 0.1 + 0.9 * sat((p.getY(i) + 0.5) / (yTop + 0.5 + 1e-6)));
  return g;
}
function buildBoot(K, kn, st, side) {
  const m = K.m, yTop = st.bootTop, tall = yTop > -0.2;
  const shaft = new Prof(tall
    ? [[yTop, 0.067, 0.07, 0, -0.006], [yTop - 0.06, 0.064, 0.068, 0, -0.008], [-0.2, 0.058, 0.061, 0, -0.006], [-0.33, 0.052, 0.054, 0, -0.002], [-0.43, 0.05, 0.055, 0, 0.004], [-0.47, 0.046, 0.05, 0, 0.004]]
    : [[yTop, 0.057, 0.059, 0, -0.004], [yTop - 0.03, 0.055, 0.057, 0, -0.004], [-0.4, 0.05, 0.052, 0, -0.002], [-0.44, 0.05, 0.055, 0, 0.004], [-0.47, 0.046, 0.05, 0, 0.004]]);
  K.add(kn, m.boot, bootUV(shaft.geo(tall ? 8 : 5, 16, { capS: true, uv: 1 }), yTop));
  // foot: loft along z (heel -> toe)
  const fk = [[-0.068, 0.034, 0.026, -0.472], [-0.055, 0.042, 0.04, -0.458], [-0.02, 0.046, 0.051, -0.448], [0.03, 0.048, 0.045, -0.454], [0.085, 0.05, 0.034, -0.466], [0.13, 0.047, 0.027, -0.471], [0.162, 0.042, 0.024, -0.473], [0.182, 0.034, 0.02, -0.476], [0.193, 0.022, 0.015, -0.479]];
  const fp = new Prof(fk.map((k) => [k[0], k[1], k[2], 0, k[3], 3.2]));
  const s = [];
  const foot = loft(14, 16, (t, a, out) => { fp.at(t, s); out.set(s[1] * seS(a, 3.2), s[4] + s[2] * seC(a, 3.2), s[0]); }, { uv: 1, capS: true, capE: true });
  K.add(kn, m.boot, bootUV(foot, yTop));
  // sole + heel
  const sp = new Prof(fk.map((k) => [k[0], k[1] + 0.0045, 0, 0, 0, 2]));
  const sole = slab(4, 12, (u, v, out) => { sp.at(v, s); const w = Math.max(s[1], 0.026) * Math.sqrt(Math.max(0, 1 - Math.pow(Math.abs(2 * u - 1), 3))); out.set((2 * u - 1) * w, -0.493, s[0] + (v === 0 ? -0.003 : v === 1 ? 0.003 : 0)); }, 0.014, { nHint: V(0, 1, 0) });
  K.add(kn, m.boot, constUV(sole, 0.5, 0.05));
  const heel = rbox(0.072, 0.014, 0.06, 0.004, 2);
  K.add(kn, m.boot, constUV(xf(heel, 0, -0.493, -0.035), 0.5, 0.05));
  // laces / strap
  if (!tall) for (let k = 0; k < 3; k++) K.add(kn, m.boot, constUV(xf(rbox(0.05, 0.004, 0.006, 0.002, 1), 0, -0.445 - k * 0.014, 0.03 + k * 0.018, -0.9), 0.5, 0.05));
}

function buildHand(K, hd, sx, st) {
  const m = K.m, kind = st.hand, glove = kind === 'glove' ? m.glove : kind === 'fingerless' ? m.glove : m.skin;
  const fingers = kind === 'fingerless' ? m.skin : glove;
  const gl = kind === 'glove' ? 0.0012 : 0;
  // palm (wrist at y ~ 0.1, grip axis = local z through the origin)
  const palm = rbox(0.026 + gl * 2, 0.08, 0.076 + gl * 2, 0.011, 3), p = palm.attributes.position;
  for (let i = 0; i < p.count; i++) { const y = p.getY(i), k = lerp(1.04, 0.82, sat((y + 0.04) / 0.08)); p.setZ(i, p.getZ(i) * k); if (p.getX(i) * sx < 0) p.setX(i, p.getX(i) * (1 - 0.25 * g2(y / 0.03, p.getZ(i) / 0.025))); }
  palm.computeVertexNormals();
  K.add(hd, glove, xf(palm, sx * 0.019, 0.058, 0.0));
  // thenar pad
  K.add(hd, glove, xf(ell(0.0105 + gl, 0.022, 0.015, 10, 8), sx * 0.004, 0.068, 0.02));
  // wrist plug (hidden in the cuff)
  K.add(hd, glove, new Prof([[0.088, 0.016 + gl, 0.03 + gl, sx * 0.016], [0.13, 0.019, 0.026, sx * 0.012]]).geo(2, 12, { uv: 20 }));
  const F = [[0.026, 0.93, 0.0088], [0.009, 1.0, 0.0092], [-0.009, 0.95, 0.0088], [-0.025, 0.8, 0.0078]];
  for (const [z, L, r] of F) {
    const k0 = V(sx * 0.02, 0.03, z * 0.95), k1 = V(sx * 0.021, 0.014, z), p1 = V(sx * 0.019, 0.014 - 0.03 * L, z * 1.02), p2 = V(sx * 0.0, 0.014 - 0.046 * L, z * 1.02), p3 = V(-sx * 0.012, 0.014 - 0.038 * L, z);
    if (kind === 'fingerless') {
      K.add(hd, glove, tube([k0, k1, p1.clone().lerp(p2, 0.25)], 6, () => r + 0.0013, { nr: 5, capE: true }));
      K.add(hd, m.skin, tube([p1.clone().lerp(k1, 0.2), p1, p2, p3], 6, (t) => r * (1 - 0.18 * t) * Math.pow(sat((1 - t) / 0.12), 0.35), { nr: 8 }));
    } else K.add(hd, fingers, tube([k0, k1, p1, p2, p3], 6, (t) => (r + gl) * (1 - 0.16 * t) * Math.pow(sat((1 - t) / 0.08), 0.35), { nr: 10 }));
  }
  // thumb
  const t0 = V(sx * 0.008, 0.08, 0.022), t1 = V(-sx * 0.002, 0.06, 0.04), t2 = V(-sx * 0.012, 0.036, 0.046), t3 = V(-sx * 0.019, 0.019, 0.036);
  if (kind === 'fingerless') {
    K.add(hd, glove, tube([t0, t1, t1.clone().lerp(t2, 0.4)], 6, () => 0.0118, { nr: 5, capE: true }));
    K.add(hd, m.skin, tube([t1.clone().lerp(t2, 0.2), t2, t3], 6, (t) => 0.0102 * (1 - 0.15 * t) * Math.pow(sat((1 - t) / 0.12), 0.35), { nr: 7 }));
  } else K.add(hd, fingers, tube([t0, t1, t2, t3], 6, (t) => (0.0108 + gl) * (1 - 0.15 * t) * Math.pow(sat((1 - t) / 0.1), 0.35), { nr: 9 }));
  if (kind === 'glove') K.add(hd, glove, new Prof([[0.05, 0.02, 0.036, sx * 0.018], [0.075, 0.024, 0.04, sx * 0.016], [0.1, 0.021, 0.036, sx * 0.014]]).geo(2, 14, { uv: 20 }));
}

// --------------------------------------------------------------- cloth deformation (secondary motion)
// Skirt: every vertex rotates about the hip axis by a blend of the leg angles
// (front follows the most forward thigh, back the most backward, sides their
// own leg); below the knee line it bends again by the knee angle.
const SK_AXIS = -0.02, SK_KNEE = 0.43, SKW = 7;
// cloth only needs part of the leg angle to clear the thigh; more as the angle grows
function fol(a) { return a * (0.58 + 0.32 * sst(0.3, 1.15, Math.abs(a))); }
function makeSkirt(parts) {
  const out = { parts: [], sig: NaN };
  for (const mesh of parts) {
    const g = mesh.geometry, P = g.attributes.position.array, n = P.length / 3;
    const w = new Float32Array(n * SKW);
    for (let i = 0; i < n; i++) {
      const x = P[i * 3], y = P[i * 3 + 1], z = P[i * 3 + 2], c = Math.cos(Math.atan2(x, z));
      const wf = Math.pow(Math.max(0, c), 1.6), wb = Math.pow(Math.max(0, -c), 1.6), q = i * SKW;
      w[q] = wf; w[q + 1] = wb; w[q + 2] = (1 - wf - wb) * (x >= 0 ? 1 : -1); w[q + 3] = sst(0.0, 0.1, SK_AXIS - y);
      w[q + 4] = sst(-0.1, 0.04, x); w[q + 5] = sst(0.1, -0.04, x); // lateral proximity to the left / right leg
    }
    g.boundingSphere = new THREE.Sphere(V(0, -0.35, 0.05), 1.25);
    g.attributes.position.setUsage(THREE.DynamicDrawUsage); g.attributes.normal.setUsage(THREE.DynamicDrawUsage);
    out.parts.push({ g, rest: P.slice(), restN: g.attributes.normal.array.slice(), w });
  }
  return out;
}
// Skirt: every vertex rotates about the hip axis. The front follows the most
// forward nearby thigh, the back the most backward one, the sides their own
// leg; below the knee line the cloth bends again by the knee angle.
// ground: the rig stands on the ground (not hooked / carried); a tilted (prone)
// body then gets its cloth projected onto the ground plane instead of sinking.
function deformSkirt(S, j, body, ground) {
  const hL = j.hipL.rotation.x, hR = j.hipR.rotation.x, kL = j.knL.rotation.x, kR = j.knR.rotation.x;
  const by = body.position.y, bx = body.rotation.x;
  const sig = hL * 1.3 + hR * 2.1 + kL * 3.7 + kR * 5.3 + by * 7.1 + bx * 11.3 + (ground ? 13.7 : 0);
  if (Math.abs(sig - S.sig) < 1e-5) return;
  S.sig = sig;
  const fL = fol(hL), fR = fol(hR);
  const clampGround = Math.abs(bx) < 0.4, yMin = 0.02 - 0.95 - by;
  // prone: hip-space vertex -> world height = by + (0.95 + y) cos(bx) - z sin(bx)
  const clampTilt = ground && !clampGround, cbx = Math.cos(bx), sbx = Math.sin(bx);
  for (let pi = 0; pi < S.parts.length; pi++) {
    const p = S.parts[pi];
    const R = p.rest, RN = p.restN, w = p.w, P = p.g.attributes.position.array, N = p.g.attributes.normal.array, n = R.length / 3;
    for (let i = 0; i < n; i++) {
      const q = i * 3, x = R[q], y = R[q + 1], z = R[q + 2], o = i * SKW;
      const wf = w[o], wb = w[o + 1], ws = w[o + 2], ramp = w[o + 3];
      if (ramp <= 0) { P[q] = x; P[q + 1] = y; P[q + 2] = z; N[q] = RN[q]; N[q + 1] = RN[q + 1]; N[q + 2] = RN[q + 2]; continue; }
      const lL = fL * w[o + 4], lR = fR * w[o + 5];
      let aF = 0, kF = 0, aB = 0, kB = 0;
      if (lL < aF) { aF = lL; kF = kL; } if (lR < aF) { aF = lR; kF = kR; }
      if (lL > aB) { aB = lL; kB = kL; } if (lR > aB) { aB = lR; kB = kR; }
      const wsa = ws < 0 ? -ws : ws, sideA = ws > 0 ? fL : fR, sideK = ws > 0 ? kL : kR;
      const a = (wf * aF + wb * aB + wsa * sideA) * ramp;
      const k = (wf * (kF > 0 ? kF : 0) * 0.7 + wb * kB * 0.45 + wsa * sideK * 0.55) * ramp;
      const d = SK_AXIS - y;
      let ny, nz, nny, nnz;
      const ca = Math.cos(a), sa = Math.sin(a);
      if (d <= SK_KNEE) {
        const ry = y - SK_AXIS;
        ny = SK_AXIS + ry * ca - z * sa; nz = ry * sa + z * ca;
        nny = RN[q + 1] * ca - RN[q + 2] * sa; nnz = RN[q + 1] * sa + RN[q + 2] * ca;
      } else {
        const b = clamp(a + k * (a < 0 ? 0.75 : 0.5), -1.7, 1.7), cb = Math.cos(b), sb = Math.sin(b);
        const rem = -(d - SK_KNEE);
        // knee point rotates by a; the remainder of the panel (and its offset) by b
        ny = SK_AXIS - SK_KNEE * ca + rem * cb - z * sb; nz = -SK_KNEE * sa + rem * sb + z * cb;
        nny = RN[q + 1] * cb - RN[q + 2] * sb; nnz = RN[q + 1] * sb + RN[q + 2] * cb;
      }
      let nx = x;
      if (clampGround && ny < yMin) {
        const ex = yMin - ny, r = Math.sqrt(nx * nx + nz * nz) || 1, f = 1 + ex * 1.6 / r; // sqrt, not hypot: hypot boxes its args (allocates)
        nx *= f; nz *= f; ny = yMin;
      } else if (clampTilt) {
        const ex = 0.015 - (by + (0.95 + ny) * cbx - nz * sbx);
        if (ex > 0) { ny += ex * cbx; nz -= ex * sbx; } // push straight up (world) onto the ground
      }
      P[q] = nx; P[q + 1] = ny; P[q + 2] = nz;
      N[q] = RN[q]; N[q + 1] = nny; N[q + 2] = nnz;
    }
    p.g.attributes.position.needsUpdate = true; p.g.attributes.normal.needsUpdate = true;
  }
}
// Cape: vertices over each shoulder rotate partly with that arm about the shoulder joint.
function makeCape(parts) {
  const out = { parts: [], sig: NaN };
  for (const mesh of parts) {
    const g = mesh.geometry, P = g.attributes.position.array, n = P.length / 3, w = new Float32Array(n * 2);
    for (let i = 0; i < n; i++) {
      const x = P[i * 3], y = P[i * 3 + 1], lowk = sst(0.555, 0.47, y);
      w[i * 2] = sst(0.06, 0.2, x) * lowk; w[i * 2 + 1] = sst(-0.06, -0.2, x) * lowk;
    }
    g.boundingSphere = new THREE.Sphere(V(0, 0.4, 0), 0.7);
    g.attributes.position.setUsage(THREE.DynamicDrawUsage); g.attributes.normal.setUsage(THREE.DynamicDrawUsage);
    out.parts.push({ g, rest: P.slice(), restN: g.attributes.normal.array.slice(), w });
  }
  return out;
}
function rotXZ(o, x, y, z, ax, az) { // Euler XYZ: Rx(ax) * Rz(az)
  const cz = Math.cos(az), sz = Math.sin(az), x1 = x * cz - y * sz, y1 = x * sz + y * cz;
  const cx = Math.cos(ax), sx = Math.sin(ax);
  o[0] = x1; o[1] = y1 * cx - z * sx; o[2] = y1 * sx + z * cx;
}
const _r3 = [0, 0, 0];
function deformCape(C, j) {
  const axL = clamp(j.shL.rotation.x, -1.8, 0.9) * 0.9, azL = clamp(j.shL.rotation.z, -0.3, 1.3) * 0.9;
  const axR = clamp(j.shR.rotation.x, -1.8, 0.9) * 0.9, azR = clamp(j.shR.rotation.z, -1.3, 0.3) * 0.9;
  const sig = axL * 1.7 + azL * 2.9 + axR * 4.3 + azR * 6.1;
  if (Math.abs(sig - C.sig) < 1e-5) return;
  C.sig = sig;
  for (let pi = 0; pi < C.parts.length; pi++) {
    const p = C.parts[pi];
    const R = p.rest, RN = p.restN, w = p.w, P = p.g.attributes.position.array, N = p.g.attributes.normal.array, n = R.length / 3;
    for (let i = 0; i < n; i++) {
      const q = i * 3, wl = w[i * 2], wr = w[i * 2 + 1];
      if (wl <= 0 && wr <= 0) { P[q] = R[q]; P[q + 1] = R[q + 1]; P[q + 2] = R[q + 2]; N[q] = RN[q]; N[q + 1] = RN[q + 1]; N[q + 2] = RN[q + 2]; continue; }
      const L = wl > 0, wgt = L ? wl : wr, sx = L ? 0.215 : -0.215, ax = (L ? axL : axR) * wgt, az = (L ? azL : azR) * wgt;
      rotXZ(_r3, R[q] - sx, R[q + 1] - 0.47, R[q + 2], ax, az);
      P[q] = _r3[0] + sx; P[q + 1] = _r3[1] + 0.47; P[q + 2] = _r3[2];
      rotXZ(_r3, RN[q], RN[q + 1], RN[q + 2], ax, az);
      N[q] = _r3[0]; N[q + 1] = _r3[1]; N[q + 2] = _r3[2];
    }
    p.g.attributes.position.needsUpdate = true; p.g.attributes.normal.needsUpdate = true;
  }
}

// --------------------------------------------------------------- materials
function makeMats(def, st, M) {
  const kit = texKit(), cl = M.T.cloth, mats = {}, id = st.id;
  const cloth = (color, o = {}) => new THREE.MeshStandardMaterial({ color: new THREE.Color(color).multiplyScalar(1.22), map: cl.map, normalMap: cl.normalMap, normalScale: new THREE.Vector2(0.6, 0.6), roughness: 0.95, ...o });
  const leather = (color, o = {}) => new THREE.MeshStandardMaterial({ color, map: kit.leather.map, normalMap: kit.leather.normalMap, normalScale: new THREE.Vector2(0.7, 0.7), roughness: 0.55, ...o });
  const skinC = new THREE.Color(def.skin);
  const sr = st.skinRough ?? 0.6;
  skinC.multiplyScalar(st.skinLift ?? 1);
  mats.skin = new THREE.MeshStandardMaterial({ color: skinC.clone(), roughness: sr + 0.02 });
  mats.face = new THREE.MeshStandardMaterial({ color: skinC.clone().multiplyScalar(1 / 0.95), map: faceTex(def, st), roughness: sr });
  mats.lips = new THREE.MeshStandardMaterial({ color: skinC.clone().multiply(new THREE.Color(st.fem ? 0.8 : 0.84, st.fem ? 0.55 : 0.62, st.fem ? 0.55 : 0.6)), roughness: 0.42 });
  mats.eyeW = new THREE.MeshStandardMaterial({ color: 0xa0968a, roughness: 0.25 });
  mats.iris = new THREE.MeshStandardMaterial({ color: def.eyes ?? 0x3a2616, roughness: 0.15 });
  mats.dark = new THREE.MeshStandardMaterial({ color: 0x050403, roughness: 0.2 });
  mats.hair = new THREE.MeshStandardMaterial({ color: id === 'ilias' ? 0x8e8a84 : def.hair, map: kit.hair.map, normalMap: kit.hair.normalMap, normalScale: new THREE.Vector2(0.4, 0.4), roughness: 0.6, side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -2 });
  mats.top = cloth(def.jacket, { side: THREE.DoubleSide });
  mats.pants = cloth(def.pants);
  const bt = bootTex(def, st);
  mats.boot = new THREE.MeshStandardMaterial({ color: 0xffffff, map: bt.map, normalMap: bt.normalMap, roughnessMap: bt.roughnessMap, normalScale: new THREE.Vector2(0.6, 0.6), roughness: 1 });
  mats.glove = st.hand === 'fingerless' ? cloth(0x2a2622, { roughness: 1 }) : leather(def.leather ?? 0x5a3a22);
  mats.metal = new THREE.MeshStandardMaterial({ color: 0x8a7a5a, roughness: 0.38, metalness: 0.85 });
  if (id === 'wren') {
    mats.hat = cloth(def.hat ?? 0x46413a, { normalScale: new THREE.Vector2(1, 1) });
    mats.accent = cloth(def.accent ?? 0x8a2620, { roughness: 1 });
    mats.patch = leather(0x4a3424, { roughness: 0.75 });
    mats.button = new THREE.MeshStandardMaterial({ color: 0x2a1e16, roughness: 0.45 });
  } else if (id === 'ilias') {
    mats.top.roughness = 0.88;
    mats.white = new THREE.MeshStandardMaterial({ color: 0xc8c5bc, roughness: 0.55 });
    mats.button = new THREE.MeshStandardMaterial({ color: 0x0c0b0e, roughness: 0.3 });
    mats.silk = new THREE.MeshStandardMaterial({ color: 0x141317, roughness: 0.42, map: cl.map, normalMap: cl.normalMap, normalScale: new THREE.Vector2(0.3, 0.3) });
    mats.bead = new THREE.MeshStandardMaterial({ color: 0x2a1a10, roughness: 0.32 });
    mats.metal.color.set(0xb09468);
  } else if (id === 'juno') {
    mats.top = new THREE.MeshPhysicalMaterial({ color: def.jacket, map: kit.oil.map, normalMap: kit.oil.normalMap, normalScale: new THREE.Vector2(0.45, 0.45), roughness: 0.42, clearcoat: 0.28, clearcoatRoughness: 0.48, side: THREE.DoubleSide }); // glossy but never blown out at grazing moonlight (prone back, collar edges)
    mats.button = new THREE.MeshStandardMaterial({ color: def.accent ?? 0x5e3c20, roughness: 0.4 });
  } else if (id === 'tey') {
    mats.hat = cloth(def.hat ?? 0x8a1e1a, { roughness: 1 });
    mats.shirt = cloth(0x9a9076);
    mats.strap = leather(def.leather ?? 0x4a3524);
    mats.wood = new THREE.MeshStandardMaterial({ color: 0x9a8064, map: M.T.timber?.map ?? null, normalMap: M.T.timber?.normalMap ?? null, roughness: 0.8 });
    mats.iron = new THREE.MeshStandardMaterial({ color: 0x8a8a86, map: M.T.iron?.map ?? null, normalMap: M.T.iron?.normalMap ?? null, roughness: 0.65, metalness: 0.7 });
    mats.button = new THREE.MeshStandardMaterial({ color: 0x1e1812, roughness: 0.4 });
  }
  return mats;
}

// --------------------------------------------------------------- builder
export function buildSurvivor(def, M) {
  const st = STYLE[def.id] ?? STYLE.wren;  // unknown defs fall back to Wren's sculpt + costume
  const root = new THREE.Group();
  const body = pivot(root);
  const j = {};
  j.hips = pivot(body, 0, 0.95, 0);
  j.spine = pivot(j.hips, 0, 0.06, 0);
  j.neck = pivot(j.spine, 0, 0.55, 0);
  j.head = pivot(j.neck, 0, 0.07, 0);
  for (const side of ['L', 'R']) {
    const sx = side === 'L' ? 1 : -1;
    j['sh' + side] = pivot(j.spine, sx * 0.215, 0.47, 0);
    j['el' + side] = pivot(j['sh' + side], 0, -0.29, 0);
    j['hand' + side] = pivot(j['el' + side], 0, -0.29, 0);
    j['hip' + side] = pivot(j.hips, sx * 0.1, -0.02, 0);
    j['kn' + side] = pivot(j['hip' + side], 0, -0.43, 0);
  }
  const buckets = new Map();
  const K = {
    m: makeMats(def, st, M), st, def,
    add(piv, mat, geo, uvs) {
      if (!geo) return;
      if (!mat) throw new Error('buildSurvivor: missing material for ' + def.id);
      if (!buckets.has(piv)) buckets.set(piv, new MergeBucket());
      clean(geo);
      buckets.get(piv).add(mat, geo, uvs);
    },
  };
  const sec = {};
  buildBodyAndCostume(K, j, def, st, sec);
  buildHead(K, j, def, st);
  for (const [p, b] of buckets) b.build(p);
  const mats = [];
  root.traverse((o) => {
    if (!o.isMesh) return;
    o.castShadow = true; o.receiveShadow = true;
    const list = Array.isArray(o.material) ? o.material : [o.material];
    for (const mt of list) if (!mats.includes(mt)) mats.push(mt);
  });
  root.userData = { j, body, pose: {}, def, mats, sec };
  return root;
}

function deformMesh(piv, mat, geos) {
  const g = mergeGeometries(geos.map(clean), false);
  g.computeBoundingBox();
  const m = new THREE.Mesh(g, mat);
  m.castShadow = m.receiveShadow = true;
  piv.add(m);
  return m;
}

// surface-hugging slab on a profile: u across (metres, centred on a0), v along y
function onProf(prof, a0, y0, y1, w0, w1, th, off = 0.0015, o = {}) {
  return slab(o.nu ?? 6, o.nv ?? 6, (u, v, out) => {
    const y = lerp(y0, y1, v), w = lerp(w0, w1, v), a = a0 + (u - 0.5) * w / prof.rate(y, a0) + (o.skew ? o.skew * v : 0);
    prof.pt(y, a, off + (o.puff ? o.puff * Math.sin(u * Math.PI) * Math.sin(v * Math.PI) : 0), out);
  }, th, { bias: 0.3, uv: o.uv ?? 3, flip: y1 < y0 });
}
function buttonAt(prof, a, y, r, off, flat = 0.45) {
  const P = prof.pt(y, a, off, V()), n = prof.nrm(y, a, V());
  return orient(ell(r, r, r * flat, 7, 4), P, n);
}

function buildBodyAndCostume(K, j, def, st, sec) {
  const m = K.m, b = st.bulk, id = st.id, fem = st.fem;
  // ---- torso (spine)
  const torso = new Prof(torsoKeys(fem, b, st.neckR));
  K.add(j.spine, m.top, torso.geo(22, 40, { capE: true, uv: 3 }));
  // ---- neck
  const nr = st.neckR;
  K.add(j.neck, m.skin, new Prof([[-0.07, nr + 0.004, nr + 0.002, 0, -0.004], [0.0, nr + 0.001, nr - 0.001, 0, -0.004], [0.06, nr, nr - 0.002, 0, -0.006], [0.125, nr, nr - 0.003, 0, -0.002]]).geo(5, 16, { uv: 4 }));
  // ---- pelvis (hips)
  const longCoat = id !== 'wren';
  const pelvis = new Prof([[0.13, 0.138 * (fem ? 0.95 : 1), 0.098], [0.06, 0.148, 0.102, 0, -0.004], [0.0, (fem ? 0.166 : 0.16), 0.107, 0, -0.008], [-0.06, (fem ? 0.168 : 0.162), 0.108, 0, -0.01], [-0.11, 0.146, 0.097, 0, -0.008], [-0.15, 0.09, 0.07], [-0.165, 0.03, 0.03]]);
  K.add(j.hips, m.pants, pelvis.geo(10, 32, { capE: true }));
  // ---- arms
  for (const side of ['L', 'R']) {
    const sx = side === 'L' ? 1 : -1, sh = j['sh' + side], el = j['el' + side], hd = j['hand' + side];
    const ab = b * 0.6, ar = fem ? 0.94 : 1;
    const rs = 0.043 * ar + ab;
    K.add(sh, m.top, ell(rs, rs * 0.94, rs * 0.97, 18, 14), 3);
    const fold = (t, a) => 0.0022 * Math.sin(a * 3 + t * 9) * sst(0.6, 1, t);
    K.add(sh, m.top, new Prof([[0.0, rs - 0.002, rs * 0.97 - 0.002], [-0.06, 0.043 * ar + ab, 0.042 * ar + ab], [-0.17, 0.042 * ar + ab, 0.041 * ar + ab, 0, 0.003], [-0.29, 0.04 * ar + ab, 0.039 * ar + ab]]).geo(8, 16, { fold, uv: 3 }));
    K.add(el, m.top, ell(0.04 * ar + ab, 0.04 * ar + ab, 0.039 * ar + ab, 14, 10), 3);
    const cuffR = id === 'juno' ? 0.007 : 0.004;
    const fore = new Prof([[0.0, 0.04 * ar + ab, 0.039 * ar + ab], [-0.07, 0.04 * ar + ab, 0.039 * ar + ab, 0, 0.002], [-0.15, 0.036 * ar + ab, 0.035 * ar + ab], [-0.19, 0.035 * ar + ab + cuffR * 0.5, 0.034 * ar + ab + cuffR * 0.5], [-0.215, 0.036 * ar + ab + cuffR, 0.035 * ar + ab + cuffR]]);
    K.add(el, m.top, fore.geo(9, 16, { capE: true, uv: 3, fold: (t, a) => 0.002 * Math.sin(a * 4 + t * 7) * sst(0, 0.35, t) * sst(0.8, 0.5, t) }));
    if (id === 'wren') K.add(el, m.patch, onProf(fore, Math.PI, 0.025, -0.075, 0.062, 0.058, 0.004, 0.0008, { puff: 0.002 }));
    buildHand(K, hd, sx, st);
    // ---- legs
    const hp = j['hip' + side], kn = j['kn' + side];
    K.add(hp, m.pants, ell(0.083, 0.083, 0.086, 16, 12), 3);
    K.add(hp, m.pants, new Prof([[0.05, 0.08, 0.083], [-0.02, 0.083, 0.086, 0, -0.004], [-0.15, 0.081, 0.083, 0, 0.002], [-0.3, 0.069, 0.072, 0, 0.004], [-0.43, 0.061, 0.063]]).geo(10, 18, { uv: 3, fold: (t, a) => 0.002 * Math.sin(a * 2 + t * 11) * sst(0.6, 1, t) }));
    K.add(kn, m.pants, ell(0.061, 0.061, 0.063, 14, 10), 3);
    const te = st.trouserEnd, flare = st.flare ? 0.008 : 0;
    const shinKeys = [[0.0, 0.061, 0.063], [-0.08, 0.059, 0.064, 0, -0.006], [-0.17, 0.056, 0.06, 0, -0.006]];
    if (te < -0.25) shinKeys.push([-0.3, 0.056 + flare * 0.5, 0.058 + flare * 0.5, 0, -0.002], [te, 0.058 + flare, 0.06 + flare, 0, 0.002]);
    else shinKeys.push([te, 0.056, 0.059, 0, -0.004]);
    const shin = new Prof(shinKeys);
    K.add(kn, m.pants, shin.geo(8, 18, { uv: 3, capE: te > -0.2, fold: (t, a) => 0.0025 * Math.sin(a * 3 + t * 13) * sst(0.4, 1, t) }));
    if (st.roll) {
      K.add(kn, m.pants, tube(Array.from({ length: 14 }, (_, k) => shin.pt(te + 0.012, k / 14 * TAU, 0.006 + 0.0015 * Math.sin(k * 2.3), V())), 8, () => [0.018, 0.009], { closed: true, nr: 28 }), 3);
      K.add(kn, m.pants, tube(Array.from({ length: 14 }, (_, k) => shin.pt(te + 0.03, k / 14 * TAU, 0.004 + 0.0015 * Math.sin(k * 1.7 + 1), V())), 6, () => [0.012, 0.007], { closed: true, nr: 28 }), 3);
    }
    buildBoot(K, kn, st, sx);
  }

  // ======================================================== costumes
  const up = (t, p) => torso.nrm(p.y, Math.atan2(p.x, p.z), V());
  if (id === 'wren') {
    // jacket hem over the hips
    const hem = new Prof([[0.08, 0.14 + b, 0.097 + b, 0, -0.001, 2.3], [0.02, 0.162 + b, 0.108 + b, 0, -0.003, 2.4], [-0.04, 0.179 + b, 0.116 + b, 0, -0.005, 2.4], [-0.11, 0.187 + b, 0.121 + b, 0, -0.006, 2.4], [-0.175, 0.191 + b, 0.124 + b, 0, -0.006, 2.4], [-0.182, 0.184 + b, 0.118 + b, 0, -0.006, 2.4], [-0.17, 0.176 + b, 0.112 + b, 0, -0.006, 2.4]]);
    K.add(j.hips, m.top, hem.geo(6, 40, { uv: 3, fold: (t, a) => 0.003 * Math.sin(a * 6) * sst(0.3, 0.7, t) }));
    // pockets with flaps
    for (const s of [-1, 1]) {
      K.add(j.hips, m.top, onProf(hem, s * 0.78, -0.035, -0.135, 0.105, 0.11, 0.005, 0.0012, { puff: 0.003 }));
      K.add(j.hips, m.top, onProf(hem, s * 0.78, -0.03, -0.062, 0.115, 0.118, 0.007, 0.006));
    }
    K.add(j.spine, m.top, onProf(torso, 0.62, 0.36, 0.28, 0.07, 0.072, 0.005, 0.001, { puff: 0.002 }));
    K.add(j.spine, m.top, onProf(torso, 0.62, 0.365, 0.338, 0.078, 0.08, 0.006, 0.005));
    // front edge (overlap) + horn buttons
    K.add(j.spine, m.top, onProf(torso, -0.05, 0.5, -0.07, 0.016, 0.016, 0.005, 0.0008, { nu: 2, nv: 12 }));
    K.add(j.hips, m.top, onProf(hem, -0.05, 0.0, -0.18, 0.016, 0.016, 0.005, 0.0008, { nu: 2, nv: 6 }));
    for (let k = 0; k < 4; k++) K.add(j.spine, m.button, buttonAt(torso, 0.07, 0.43 - k * 0.11, 0.0085, 0.005));
    // lapels
    for (const s of [-1, 1]) K.add(j.spine, m.top, onProf(torso, s * 0.3, 0.535, 0.39, 0.075, 0.02, 0.006, 0.004, { nv: 8, skew: -s * 0.18 }));
    // scarf: two wraps round the neck, a knot, and tails on a gravity pivot
    const wrap = (y0, r0, ph, w) => Array.from({ length: 16 }, (_, k) => { const a = k / 16 * TAU; return V(Math.sin(a) * (r0 + 0.004 * Math.sin(a * 3 + ph)), y0 + 0.012 * Math.sin(a + ph), Math.cos(a) * (r0 * 0.94) - 0.006); });
    K.add(j.spine, m.accent, tube(wrap(0.575, 0.068, 0, 1), 8, () => [0.02, 0.016], { closed: true, nr: 32 }), 4);
    K.add(j.spine, m.accent, tube(wrap(0.548, 0.08, 1.7, 1), 8, () => [0.021, 0.017], { closed: true, nr: 32 }), 4);
    const knot = V(0.032, 0.528, 0.104);
    K.add(j.spine, m.accent, xf(ell(0.026, 0.024, 0.02, 12, 10), knot.x, knot.y, knot.z, 0.3, 0.3, 0.4), 4);
    const tp = V(knot.x, knot.y - 0.012, knot.z - 0.004);
    const tails = pivot(j.spine, tp.x, tp.y, tp.z);
    sec.tails = tails;
    for (const [dx, len, w, tw] of [[0.014, 0.3, 0.07, 0.25], [-0.022, 0.24, 0.064, -0.3]]) {
      const tailPt = (u, v, o) => {
        const xc = knot.x + dx * sst(0, 0.3, v) + v * tw * 0.05, y = tp.y - v * len;
        const P = torso.pt(y, xc / torso.rate(y, 0), 0.012 + 0.004 * v, V()), k = sst(0.0, 0.35, v);
        o.set(lerp(knot.x + dx * 0.5, P.x, k) + (u - 0.5) * w * (1 - 0.15 * v), P.y, lerp(knot.z, P.z, k) + (u - 0.5) * 0.008 * Math.sin(v * 3 + tw));
        return o.sub(tp);
      };
      K.add(tails, m.accent, slab(4, 10, tailPt, 0.009, { uv: 4, flip: true }));
      for (let f = 0; f < 6; f++) {
        const P = tailPt((f + 0.5) / 6, 1, V());
        K.add(tails, m.accent, tube([P.clone().add(V(0, 0.004, 0)), P.clone().add(V(0, -0.012, 0.001)), P.clone().add(V(0.002 * (f - 2.5), -0.026, 0.002))], 4, (t) => 0.0024 * (1 - 0.5 * t), { nr: 3 }), 4);
      }
    }
  } else if (id === 'ilias') {
    // cassock skirt (deformed by the legs) with buttons
    const sk = new Prof([[0.1, 0.146 + b, 0.103 + b, 0, -0.002, 2.3], [0.03, 0.164 + b, 0.112 + b, 0, -0.005, 2.3], [-0.05, 0.186 + b, 0.126 + b, 0, -0.006, 2.3], [-0.17, 0.198 + b, 0.136 + b, 0, -0.006, 2.3], [-0.35, 0.212, 0.15, 0, -0.004, 2.2], [-0.55, 0.232, 0.165, 0, 0.0, 2.1], [-0.67, 0.246, 0.176, 0, 0.002, 2.1], [-0.685, 0.24, 0.17, 0, 0.002, 2.1], [-0.67, 0.228, 0.16, 0, 0.002, 2.1]]);
    const folds = (t, a) => (0.007 * Math.sin(a * 7 + 0.6) + 0.004 * Math.sin(a * 13 + 2)) * sst(0.2, 0.75, t);
    const skirt = deformMesh(j.hips, m.top, [sk.geo(18, 48, { fold: folds, uv: 3 })]);
    const btn = [];
    for (let k = 0; k < 19; k++) { const y = 0.04 - k * 0.037; btn.push(buttonAt(sk, 0, y, 0.0058, 0.004 + folds(sat((0.1 - y) / 0.78), 0))); }
    const skb = deformMesh(j.hips, m.button, btn);
    sec.skirt = makeSkirt([skirt, skb]);
    for (let k = 0; k < 16; k++) K.add(j.spine, m.button, buttonAt(torso, 0, 0.53 - k * 0.037, 0.0058, 0.003));
    // cincture
    K.add(j.hips, m.silk, loft(3, 40, (t, a, out) => sk.pt(lerp(0.085, 0.035, t), a, 0.004 + 0.002 * Math.sin(t * Math.PI), out), { uv: 3 }));
    // pellegrina: short cape over the shoulders, open at the front, following the arms
    const ck = new Prof([[0.588, nr + 0.018, nr + 0.014, 0, -0.007, 2.0], [0.565, 0.1 + b, 0.08 + b, 0, -0.008, 2.1], [0.54, 0.15 + b, 0.096 + b, 0, -0.008, 2.4], [0.512, 0.205 + b, 0.115 + b, 0, -0.006, 2.6], [0.482, 0.252 + b, 0.132 + b, 0, -0.003, 2.6], [0.44, 0.272 + b, 0.142 + b, 0, 0.0, 2.5], [0.37, 0.282 + b, 0.15 + b, 0, 0.004, 2.4], [0.3, 0.288 + b, 0.154 + b, 0, 0.006, 2.4], [0.292, 0.282 + b, 0.149 + b, 0, 0.006, 2.4], [0.305, 0.274 + b, 0.143 + b, 0, 0.006, 2.4]]);
    const capeFold = (t, a) => 0.005 * Math.sin(a * 9 + 1) * sst(0.4, 0.8, t);
    const cape = deformMesh(j.spine, m.top, [ck.geo(16, 48, { a0: 0.2, a1: TAU - 0.2, fold: capeFold, uv: 3 })]);
    sec.cape = makeCape([cape]);
    // roman collar: black stand collar, white band and tab
    K.add(j.neck, m.top, new Prof([[0.0, nr + 0.016, nr + 0.014, 0, -0.004], [0.012, nr + 0.01, nr + 0.008, 0, -0.004], [0.036, nr + 0.0075, nr + 0.0055, 0, -0.004]]).geo(3, 24, { capE: true, uv: 4 }));
    K.add(j.neck, m.white, new Prof([[0.03, nr + 0.0055, nr + 0.0035, 0, -0.004], [0.045, nr + 0.005, nr + 0.003, 0, -0.004]]).geo(1, 24, { capE: true }));
    K.add(j.neck, m.white, orient(rbox(0.02, 0.024, 0.004, 0.0015, 2), V(0, 0.025, nr + 0.0042), V(0, 0.08, 1)));
    // rosary: beads round the neck, over the cape, down to a cross
    const outer = (y, a) => { const P = torso.pt(y, a, 0.007, V()); if (y > 0.292) { const Q = ck.pt(y, a, 0.009, V()); if (Math.hypot(Q.x, Q.z) > Math.hypot(P.x, P.z) && Math.abs(a) > 0.2) return Q; } return P; };
    const rp = [];
    for (let k = 0; k < 30; k++) {
      const f = k / 30, a = lerp(-Math.PI, Math.PI, f), front = Math.cos(a);
      const y = 0.56 - 0.3 * Math.pow(Math.max(0, front), 2.2) - 0.012 * (1 - front);
      const r = outer(y, a * (front > 0 ? lerp(1, 0.75, front) : 1));
      rp.push(r);
    }
    const rc = new THREE.CatmullRomCurve3(rp, true, 'centripetal');
    const L = rc.getLength(), nb = Math.floor(L / 0.0125);
    for (let k = 0; k < nb; k++) { const P = rc.getPointAt(k / nb); K.add(j.spine, m.bead, xf(k % 11 === 0 ? new THREE.IcosahedronGeometry(0.0058, 0) : new THREE.OctahedronGeometry(0.0046, 0), P.x, P.y, P.z, k * 0.7, k * 1.3, 0)); }
    const bot = rc.getPointAt(0.5), bn = torso.nrm(bot.y, 0, V());
    const c0 = bot.clone().add(V(0, -0.012, 0)).addScaledVector(bn, 0.003);
    K.add(j.spine, m.bead, tube([bot, c0, c0.clone().add(V(0, -0.012, 0))], 4, () => 0.0012, { nr: 4 }));
    const cross = mergeGeometries([clean(rbox(0.0065, 0.038, 0.004, 0.0012, 1)), clean(xf(rbox(0.024, 0.0065, 0.004, 0.0012, 1), 0, 0.007, 0))], false);
    K.add(j.spine, m.metal, orient(cross, c0.clone().add(V(0, -0.03, 0)), bn));
  } else if (id === 'juno') {
    // knee-length oilskin skirt (deformed), storm flap, toggles, pockets
    const sk = new Prof([[0.1, 0.146 + b, 0.103 + b, 0, -0.002, 2.3], [0.03, 0.164 + b, 0.113 + b, 0, -0.005, 2.3], [-0.05, 0.184 + b, 0.126 + b, 0, -0.006, 2.3], [-0.16, 0.196 + b, 0.136 + b, 0, -0.006, 2.3], [-0.29, 0.207 + b, 0.147 + b, 0, -0.004, 2.2], [-0.43, 0.222 + b, 0.158 + b, 0, -0.002, 2.1], [-0.445, 0.216 + b, 0.152 + b, 0, -0.002, 2.1], [-0.43, 0.205 + b, 0.144 + b, 0, -0.002, 2.1]]);
    const folds = (t, a) => (0.006 * Math.sin(a * 6 + 1.3) + 0.003 * Math.sin(a * 11)) * sst(0.25, 0.8, t);
    const parts = [sk.geo(14, 48, { fold: folds, uv: 3 })];
    parts.push(onProf(sk, -0.07, 0.08, -0.44, 0.04, 0.04, 0.006, 0.004, { nu: 2, nv: 12 }));
    for (const s of [-1, 1]) {
      parts.push(onProf(sk, s * 1.05, -0.06, -0.19, 0.12, 0.13, 0.005, 0.006, { puff: 0.004 }));
      parts.push(onProf(sk, s * 1.05, -0.05, -0.085, 0.135, 0.14, 0.008, 0.01));
    }
    const tg = [];
    for (const y of [0.0, -0.16]) {
      const P = sk.pt(y, -0.02, 0.012, V()), n = sk.nrm(y, -0.02, V());
      tg.push(orient(xf(new THREE.CylinderGeometry(0.0065, 0.0065, 0.036, 8), 0, 0, 0, 0, 0, Math.PI / 2), P, n));
      parts.push(orient(tube([V(-0.03, 0.006, 0), V(-0.012, 0.008, 0.003), V(0.0, 0.0, 0.004), V(-0.012, -0.008, 0.003), V(-0.03, -0.006, 0)], 4, () => 0.0022, { nr: 10 }), P.clone().addScaledVector(n, -0.004), n));
    }
    const skirt = deformMesh(j.hips, m.top, parts), skt = deformMesh(j.hips, m.button, tg);
    sec.skirt = makeSkirt([skirt, skt]);
    K.add(j.spine, m.top, onProf(torso, -0.07, 0.56, -0.07, 0.04, 0.04, 0.006, 0.004, { nu: 2, nv: 14 }));
    for (const y of [0.46, 0.34, 0.22, 0.1]) {
      const P = torso.pt(y, -0.02, 0.012, V()), n = torso.nrm(y, -0.02, V());
      K.add(j.spine, m.button, orient(xf(new THREE.CylinderGeometry(0.0065, 0.0065, 0.036, 8), 0, 0, 0, 0, 0, Math.PI / 2), P, n));
      K.add(j.spine, m.top, orient(tube([V(-0.03, 0.006, 0), V(-0.012, 0.008, 0.003), V(0.0, 0.0, 0.004), V(-0.012, -0.008, 0.003), V(-0.03, -0.006, 0)], 4, () => 0.0022, { nr: 10 }), P.clone().addScaledVector(n, -0.004), n));
    }
    // stand collar, open at the throat
    K.add(j.spine, m.top, slab(20, 3, (u, v, o) => {
      const a = lerp(0.42, TAU - 0.42, u), y = lerp(0.545, 0.615, v), r = lerp(0.088, 0.083, v);
      o.set(Math.sin(a) * r, y, Math.cos(a) * r * 0.92 - 0.008);
    }, 0.008, { uv: 3 }));
    // hood down: a draped pouch hanging from the collar over the shoulder blades, rolled rim at the opening
    const hood = (u, v, o, extra = 0) => {
      const c = 2 * u - 1, wv = 1 - 0.72 * Math.pow(v, 1.4), a = Math.PI + c * 1.3 * wv;
      const y = lerp(0.6, 0.33, v) + 0.03 * c * c * (1 - v);
      const puff = 0.016 + 0.058 * Math.pow(Math.sin(Math.min(1, v * 1.1) * Math.PI), 0.8) * (1 - c * c * 0.85) - 0.018 * g2(c / 0.1, 0) * v + extra;
      return torso.pt(y, a, puff + 0.004 * NZS.noise(u * 5, v * 4), o);
    };
    K.add(j.spine, m.top, slab(12, 9, hood, 0.007, { uv: 3 }));
    K.add(j.spine, m.top, tube(Array.from({ length: 9 }, (_, k) => hood(k / 8, 0.04, V(), 0.006)), 6, (t) => 0.011 + 0.003 * Math.sin(t * Math.PI), { nr: 24, capS: true, capE: true }));
  } else if (id === 'tey') {
    // long coat skirt to mid-calf (deformed), buttons, pockets
    const sk = new Prof([[0.1, 0.146 + b, 0.103 + b, 0, -0.002, 2.3], [0.03, 0.164 + b, 0.113 + b, 0, -0.005, 2.3], [-0.05, 0.185 + b, 0.126 + b, 0, -0.006, 2.3], [-0.17, 0.198 + b, 0.137 + b, 0, -0.006, 2.3], [-0.33, 0.211 + b, 0.149 + b, 0, -0.004, 2.2], [-0.5, 0.228 + b, 0.162 + b, 0, -0.002, 2.1], [-0.57, 0.234 + b, 0.166 + b, 0, 0.0, 2.1], [-0.585, 0.228 + b, 0.16 + b, 0, 0.0, 2.1], [-0.57, 0.218 + b, 0.152 + b, 0, 0.0, 2.1]]);
    const folds = (t, a) => (0.007 * Math.sin(a * 5 + 0.4) + 0.003 * Math.sin(a * 12 + 1)) * sst(0.2, 0.8, t) + 0.002 * NZS.noise(a * 3, t * 5);
    const parts = [sk.geo(16, 48, { fold: folds, uv: 3 })];
    parts.push(onProf(sk, 0.05, 0.08, -0.58, 0.022, 0.022, 0.006, 0.003, { nu: 2, nv: 12 }));
    for (const s of [-1, 1]) {
      parts.push(onProf(sk, s * 1.0, -0.05, -0.19, 0.13, 0.135, 0.005, 0.006, { puff: 0.004 }));
      parts.push(onProf(sk, s * 1.0, -0.045, -0.08, 0.14, 0.145, 0.007, 0.01));
    }
    const skirt = deformMesh(j.hips, m.top, parts);
    const bt = [buttonAt(sk, 0.1, -0.02, 0.009, 0.009), buttonAt(sk, 0.1, -0.13, 0.009, 0.011)];
    sec.skirt = makeSkirt([skirt, deformMesh(j.hips, m.button, bt)]);
    K.add(j.spine, m.top, onProf(torso, 0.05, 0.44, -0.07, 0.022, 0.022, 0.006, 0.003, { nu: 2, nv: 12 }));
    for (const y of [0.28, 0.17, 0.06]) K.add(j.spine, m.button, buttonAt(torso, 0.1, y, 0.009, 0.009));
    // wide lapels + turned-up collar
    for (const s of [-1, 1]) K.add(j.spine, m.top, onProf(torso, s * 0.27, 0.54, 0.3, 0.09, 0.025, 0.008, 0.006, { nv: 10, skew: -s * 0.2, puff: 0.004 }));
    K.add(j.spine, m.top, slab(18, 4, (u, v, o) => {
      const a = lerp(0.75, TAU - 0.75, u), y = lerp(0.552, 0.605, v), r = lerp(0.082, 0.1, v * v) + 0.004 * Math.sin(u * 9);
      o.set(Math.sin(a) * r, y - 0.012 * Math.cos(a) * 0, Math.cos(a) * r * 0.92 - 0.012);
    }, 0.008, { uv: 3 }));
    // shirt collar at the throat
    K.add(j.neck, m.shirt, new Prof([[0.012, nr + 0.012, nr + 0.01, 0, -0.004], [0.032, nr + 0.007, nr + 0.005, 0, -0.004], [0.05, nr + 0.0055, nr + 0.0035, 0, -0.004]]).geo(2, 24, { a0: 0.3, a1: TAU - 0.3, uv: 4 }));
    // satchel strap: right shoulder -> across the chest -> left hip -> across the back
    const strapPts = [];
    for (let k = 0; k <= 26; k++) {
      const f = k / 26, a = lerp(-0.62, 1.62, f) + (f > 0.5 ? 0 : 0);
      const y = lerp(0.53, 0.0, Math.pow(f, 0.95));
      strapPts.push(torso.pt(y, a, 0.009, V()));
    }
    for (let k = 1; k <= 26; k++) {
      const f = k / 26, a = lerp(1.62, Math.PI * 2 - 0.62, f);
      const y = lerp(0.0, 0.53, Math.pow(f, 1.05));
      strapPts.push(torso.pt(y, a, 0.009, V()));
    }
    strapPts.pop();
    K.add(j.spine, m.strap, tube(strapPts, 4, () => [0.019, 0.0035], { closed: true, nr: 104, upFn: up }));
    // satchel on the left hip
    const sa = 1.72, sy = -0.035, SP = torso.pt(sy, sa, 0.04, V()), SN = torso.nrm(sy, sa, V());
    const bag = rbox(0.17, 0.15, 0.06, 0.014, 4);
    K.add(j.spine, m.strap, orient(bag, SP, SN));
    K.add(j.spine, m.strap, orient(slab(6, 6, (u, v, o) => o.set((u - 0.5) * 0.176, 0.078 - v * 0.1, 0.032 + 0.004 * Math.sin(v * 2) - 0.002 * v), 0.005, { uv: 4, flip: true }), SP, SN));
    K.add(j.spine, m.metal, orient(xf(rbox(0.022, 0.018, 0.006, 0.002, 1), 0, -0.02, 0.036), SP, SN));
    // shovel tucked under the strap across the back
    const s0 = V(-0.15, 0.74, -0.148), s1 = V(0.08, 0.16, -0.15), ax = s1.clone().sub(s0).normalize();
    const mid = s0.clone().lerp(s1, 0.5); mid.z = -0.153;
    const shaft = tube([s0, mid, s1], 8, () => 0.0135, { nr: 8, capS: true, capE: true });
    K.add(j.spine, m.wood, shaft);
    // D-grip
    const gp = s0.clone().addScaledVector(ax, -0.015), gx = V(ax.y, -ax.x, 0).normalize();
    K.add(j.spine, m.wood, tube([gp.clone().addScaledVector(gx, 0.01), gp.clone().addScaledVector(ax, -0.05).addScaledVector(gx, 0.04), gp.clone().addScaledVector(ax, -0.085), gp.clone().addScaledVector(ax, -0.05).addScaledVector(gx, -0.04), gp.clone().addScaledVector(gx, -0.01)], 6, () => 0.008, { nr: 16 }));
    // blade
    const bpos = s1.clone().addScaledVector(ax, 0.02);
    K.add(j.spine, m.iron, slab(6, 8, (u, v, o) => {
      const w = 0.075 * (1 - 0.35 * v * v) * (v > 0.85 ? 1 - (v - 0.85) * 3 : 1), c = (u - 0.5) * 2;
      o.copy(bpos).addScaledVector(ax, v * 0.17).addScaledVector(gx, c * w).add(V(0, 0, -0.012 * c * c - 0.003));
    }, 0.004, { uv: 6 }));
    K.add(j.spine, m.iron, tube([s1.clone().addScaledVector(ax, -0.05), s1.clone().addScaledVector(ax, 0.03)], 8, (t) => 0.016 + 0.004 * t, { nr: 3 }));
  }
}

// --------------------------------------------------------------- animation
const JOINTS = ['hips', 'spine', 'neck', 'head', 'shL', 'elL', 'shR', 'elR', 'hipL', 'knL', 'hipR', 'knR', 'handL', 'handR'];
const TGT = {};
for (const k of JOINTS) TGT[k] = [0, 0, 0];
const NOOPT = {};
// throw keys: phase, shR(x,y,z), elR, shL(x,z), elL, spine(x,y), hipL, knL, hipR, knR, head(y), handR(x)
const THROW_KEYS = [
  [0.0, -0.5, 0, -0.25, -0.7, -0.3, 0.15, -0.3, 0.05, 0, 0, 0, 0, 0, 0, 0],
  [0.32, -2.55, 0.15, -0.45, -1.85, -1.15, 0.25, -0.35, -0.14, -0.45, -0.38, 0.28, 0.28, 0.18, 0.32, 0.5],
  [0.5, -1.8, 0, -0.2, -0.35, -0.35, 0.35, -1.05, 0.22, 0.3, -0.42, 0.25, 0.3, 0.1, -0.18, -0.3],
  [0.72, -0.75, 0, 0.3, -0.45, -0.2, 0.2, -0.9, 0.38, 0.42, -0.4, 0.3, 0.15, 0.25, -0.3, -0.2],
  [1.0, -0.3, 0, -0.1, -0.3, -0.15, 0.1, -0.35, 0.12, 0.12, -0.15, 0.1, 0.05, 0.1, -0.1, 0],
];
const THROW_J = [['shR', 0], ['shR', 1], ['shR', 2], ['elR', 0], ['shL', 0], ['shL', 2], ['elL', 0], ['spine', 0], ['spine', 1], ['hipL', 0], ['knL', 0], ['hipR', 0], ['knR', 0], ['head', 1], ['handR', 0]];

function walkLegs(T, p, A, run, crouch) {
  const s = Math.sin;
  T.hipL[0] = s(p) * A; T.hipR[0] = -s(p) * A;
  T.knL[0] = Math.max(0, -s(p + 0.6)) * (run ? 1.4 : 0.8); T.knR[0] = Math.max(0, s(p + 0.6)) * (run ? 1.4 : 0.8);
  if (!crouch) { T.knL[0] += 0.05; T.knR[0] += 0.05; }
}

// Procedural animation: compute target joint angles for an animation state,
// then blend toward them. Cloth (skirts, capes, scarf tails) follows.
export function animateSurvivor(rig, anim, t, dt, o = NOOPT) {
  const { j, body } = rig.userData;
  const T = TGT;
  for (let i = 0; i < JOINTS.length; i++) { const a = T[JOINTS[i]]; a[0] = a[1] = a[2] = 0; }
  let bodyY = 0, bodyRX = 0, bodyZ = 0;
  const sp = o.speed ?? 0;
  const s = Math.sin;
  let blend = 14;
  switch (anim) {
    case 'idle': case 'stand': {
      const b = s(t * 1.6);
      T.spine[0] = 0.03 * b; T.shL[2] = 0.08; T.shR[2] = -0.08; T.elL[0] = -0.15; T.elR[0] = -0.15;
      T.head[0] = o.injured ? 0.25 : 0.02 * b;
      T.shL[0] = 0.02 * b; T.shR[0] = 0.02 * b; T.neck[1] = 0.04 * s(t * 0.37);
      if (o.injured) { T.spine[0] = 0.25; T.shL[0] = -0.4; T.elL[0] = -1.6; T.handL[0] = -0.3; }
      break;
    }
    case 'walk': case 'run': case 'back': case 'crouch': {
      const run = anim === 'run', crouch = anim === 'crouch', back = anim === 'back';
      const f = run ? 9.5 : crouch ? 5.5 : 7.2;
      const p = t * f * (back ? -1 : 1);
      const A = run ? 0.75 : crouch ? 0.45 : 0.45;
      walkLegs(T, p, A, run, crouch);
      T.shL[0] = -s(p) * (run ? 0.9 : 0.4); T.shR[0] = s(p) * (run ? 0.9 : 0.4);
      T.shL[2] = run ? 0.1 : 0.07; T.shR[2] = run ? -0.1 : -0.07;
      T.elL[0] = run ? -1.3 : -0.3 - 0.12 * Math.max(0, -s(p)); T.elR[0] = run ? -1.3 : -0.3 - 0.12 * Math.max(0, s(p));
      T.spine[0] = run ? 0.28 : 0.06; T.spine[1] = s(p) * 0.1;
      T.head[1] = -s(p) * 0.06; T.head[0] = run ? -0.12 : 0;
      bodyY = Math.abs(s(p)) * (run ? 0.06 : 0.025);
      if (crouch) {
        bodyY = -0.36; T.hipL[0] -= 1.1; T.hipR[0] -= 1.1; T.knL[0] += 1.7; T.knR[0] += 1.7;
        T.spine[0] = 0.55; T.head[0] = -0.4; T.shL[0] = -0.5; T.shR[0] = -0.5; T.shL[2] = 0.12; T.shR[2] = -0.12;
        T.elL[0] = -0.55; T.elR[0] = -0.55;
      }
      if (o.injured && !crouch) { T.shL[0] = -0.4; T.elL[0] = -1.7; T.spine[2] = 0.08; T.head[0] = 0.1; T.handL[0] = -0.3; }
      if (back) { T.spine[0] = -0.05; T.head[0] = -0.05; }
      break;
    }
    case 'crawl': {
      const p = t * 3 * Math.min(1, sp + 0.15);
      // lie prone on the ground, centred on the survivor's position
      bodyRX = 1.35; bodyY = -0.09; bodyZ = -0.9;
      T.head[0] = -1.0; T.neck[0] = -0.2;
      // arms claw forward (the pulling hand stays on the ground, not in it); thighs are
      // flexed back enough to lie along the ground instead of sloping into it
      T.shL[0] = -2.72 + s(p) * 0.38; T.shR[0] = -2.72 - s(p) * 0.38; T.elL[0] = -0.4; T.elR[0] = -0.4;
      T.shL[2] = 0.18; T.shR[2] = -0.18;
      T.hipL[0] = 0.3 + s(p) * 0.15; T.hipR[0] = 0.3 - s(p) * 0.15; T.knL[0] = 0.3; T.knR[0] = 0.45;
      T.spine[1] = s(p) * 0.08;
      break;
    }
    case 'ring': {
      const p = t * 2.4;
      const pull = (s(p) + 1) / 2;
      T.shL[0] = -2.7 + pull * 1.0; T.shR[0] = -2.7 + pull * 1.0; T.shL[2] = -0.15; T.shR[2] = 0.15;
      T.elL[0] = -0.2 - pull * 0.9; T.elR[0] = -0.2 - pull * 0.9;
      T.spine[0] = 0.05 + pull * 0.25; T.head[0] = -0.35 + pull * 0.2;
      T.hipL[0] = -pull * 0.35; T.hipR[0] = -pull * 0.35; T.knL[0] = pull * 0.7; T.knR[0] = pull * 0.7;
      bodyY = -pull * 0.1;
      break;
    }
    case 'work': {
      const p = t * 4;
      bodyY = -0.42; T.hipL[0] = -1.5; T.knL[0] = 2.2; T.hipR[0] = 0.25; T.knR[0] = 1.65;
      T.spine[0] = 0.45; T.head[0] = 0.2;
      T.shL[0] = -1.1 + s(p) * 0.15; T.shR[0] = -1.15 + s(p + 1.5) * 0.15; T.elL[0] = -0.7; T.elR[0] = -0.7;
      T.shL[2] = 0.1; T.shR[2] = -0.1;
      break;
    }
    case 'reach': {
      const p = t * 3;
      T.shL[0] = -1.35 + s(p) * 0.08; T.shR[0] = -1.4; T.elL[0] = -0.4; T.elR[0] = -0.5; T.spine[0] = 0.2;
      T.handL[0] = 0.25; T.handR[0] = 0.25;
      break;
    }
    case 'hooked': {
      const sw = s(t * 1.3) * (o.struggle ? 0.35 : 0.08);
      T.shL[0] = -2.95; T.shR[0] = -2.95; T.shL[2] = -0.25; T.shR[2] = 0.25; T.elL[0] = -0.2; T.elR[0] = -0.2;
      T.head[0] = 0.55; T.spine[0] = 0.1 + sw; T.spine[1] = sw;
      T.hipL[0] = 0.15 + (o.struggle ? s(t * 9) * 0.5 : 0); T.hipR[0] = -0.05 - (o.struggle ? s(t * 9) * 0.5 : 0);
      T.knL[0] = 0.4; T.knR[0] = 0.3;
      T.handL[0] = 0.3; T.handR[0] = 0.3;
      break;
    }
    case 'carried': {
      const w = o.wiggle ? s(t * 12) * 0.35 : 0;
      bodyRX = 1.5;
      T.shL[0] = -2.9 + w; T.shR[0] = -2.9 - w; T.elL[0] = -0.2; T.elR[0] = -0.2;
      T.head[0] = 0.4; T.hipL[0] = -0.3 + w; T.hipR[0] = -0.3 - w; T.knL[0] = 1.2; T.knR[0] = 1.0;
      break;
    }
    case 'vault': {
      bodyY = 0.15; T.hipL[0] = -1.5; T.hipR[0] = -1.2; T.knL[0] = 1.9; T.knR[0] = 1.6;
      T.shL[0] = -1.2; T.shR[0] = -0.8; T.spine[0] = 0.45;
      blend = 25;
      break;
    }
    case 'drop': {
      T.shR[0] = -1.0 - 1.4 * Math.max(0, 1 - (o.phase ?? 1)); T.shL[0] = -0.6; T.spine[0] = 0.3;
      break;
    }
    case 'hold': {
      // right hand raised holding a small object up by the face (a hand mirror held over the shoulder)
      if (sp > 0.3) {
        const p = t * 7.2;
        walkLegs(T, p, 0.42, false, false);
        T.shL[0] = -s(p) * 0.35; T.elL[0] = -0.35; T.spine[1] = s(p) * 0.05;
        bodyY = Math.abs(s(p)) * 0.022;
      } else { const b = s(t * 1.6); T.spine[0] = 0.02 * b; T.elL[0] = -0.2; }
      T.shL[2] = 0.09;
      // hand ends up beside the right eye; grip axis (+z) tilted up, palm (+x) toward the face
      T.shR[0] = -1.45; T.shR[1] = 0.25; T.shR[2] = -0.65; T.elR[0] = -2.0;
      T.handR[0] = 0.95; T.handR[1] = -0.45; T.handR[2] = 0.25;
      T.head[0] = -0.06; T.head[1] = -0.38; T.neck[1] = -0.12; T.spine[0] += 0.04;
      break;
    }
    case 'throw': {
      const ph = clamp(o.phase ?? 0, 0, 1), K = THROW_KEYS;
      let i = 0; while (i < K.length - 2 && ph > K[i + 1][0]) i++;
      const a = K[i], b2 = K[i + 1], u = sst(0, 1, (ph - a[0]) / (b2[0] - a[0]));
      for (let q = 0; q < THROW_J.length; q++) T[THROW_J[q][0]][THROW_J[q][1]] = a[q + 1] + (b2[q + 1] - a[q + 1]) * u;
      blend = 22;
      break;
    }
    case 'petrified': {
      // seized mid-scream: back arched, arms half raised and clawing, head thrown back
      bodyY = -0.02;
      T.spine[0] = -0.34; T.spine[2] = 0.05; T.neck[0] = -0.28; T.head[0] = -0.5; T.head[1] = 0.12;
      T.shL[0] = -0.95; T.shL[2] = 0.7; T.elL[0] = -1.15; T.handL[0] = 0.55; T.handL[2] = -0.2;
      T.shR[0] = -1.3; T.shR[2] = -0.55; T.elR[0] = -0.75; T.handR[0] = 0.6; T.handR[2] = 0.2;
      T.hipL[0] = -0.22; T.knL[0] = 0.32; T.hipR[0] = 0.18; T.knR[0] = 0.12;
      blend = 30;
      break;
    }
  }
  if (o.lookPitch !== undefined && (anim === 'idle' || anim === 'walk' || anim === 'run' || anim === 'back' || anim === 'stand')) {
    T.head[0] += o.lookPitch * 0.5; T.neck[0] += o.lookPitch * 0.3;
    T.head[1] += (o.lookYaw ?? 0) * 0.6; T.neck[1] += (o.lookYaw ?? 0) * 0.3;
  }
  const k = 1 - Math.exp(-dt * blend);
  for (let i = 0; i < JOINTS.length; i++) {
    const n = JOINTS[i], jt = j[n]; if (!jt) continue;
    const r = jt.rotation, tg = T[n];
    r.x += (tg[0] - r.x) * k; r.y += (tg[1] - r.y) * k; r.z += (tg[2] - r.z) * k;
  }
  body.position.y += (bodyY - body.position.y) * k;
  body.rotation.x += (bodyRX - body.rotation.x) * k;
  body.position.z += (bodyZ - body.position.z) * k;
  // ---- secondary motion
  const sec = rig.userData.sec;
  if (sec) {
    if (sec.skirt) deformSkirt(sec.skirt, j, body, anim !== 'carried' && anim !== 'hooked');
    if (sec.cape) deformCape(sec.cape, j);
    if (sec.tails) {
      // prone on the ground the tails lie flat along the chest instead of hanging into the ground
      const lean = anim === 'crawl' ? 0 : clamp(j.spine.rotation.x + body.rotation.x, 0, 1.45);
      const sway = anim === 'run' ? s(t * 9.5) * 0.12 : anim === 'walk' ? s(t * 7.2) * 0.05 : 0;
      const tr = sec.tails.rotation;
      tr.x += (-lean * 0.9 - Math.abs(sway) * 0.5 - (anim === 'run' ? 0.25 : 0) - tr.x) * k;
      tr.z += (sway - j.spine.rotation.z * 0.8 - tr.z) * k;
    }
  }
}
