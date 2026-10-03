// The Reliquary: a 2.5 m saint's statue carved to hold a relic that was never a
// saint's bone. Model, poses, three ascension tiers and cheap per-frame FX.
//
//   buildReliquary(M, { alive }) -> Group (base at y = 0, facing +z)
//     userData: { chest, head, arms: { l|r: { sh, el, hand, fingers[] } }, relic, alive, tier, rel }
//   poseReliquary(model, nameOrPose)        pose names in RELIQUARY_POSES
//   setReliquaryTier(model, 1 | 2 | 3)      Penitent / Martyr / Saint Unbound
//   updateReliquaryFX(model, { time, glow, relic, wings, halo })   every frame, allocation free
//   setReliquaryLook(model, yaw, pitch)     additive head turn on top of the pose
//
// All instances share one set of geometries (built once, lazily); every instance
// owns only the few materials whose glow it drives.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { Noise, mulberry32 } from '../noise.js';
import { NZ, pivot, worldUV } from './common.js';

// ------------------------------------------------------------------ poses
// { lean, twist, hx, hy, hz, l: [shX, shZ, elX], r: [shX, shZ, elX], curl }
export const RELIQUARY_POSES = {
  pray: { lean: 0.05, twist: 0, hx: 0.35, hy: 0, hz: 0, l: [-0.95, -0.55, -1.45], r: [-0.95, 0.55, -1.45], curl: 0.6 },
  reach: { lean: 0.38, twist: 0, hx: -0.15, hy: 0, hz: 0.1, l: [-1.5, -0.12, -0.1], r: [-1.55, 0.1, -0.15], curl: 0.05 },
  lunge: { lean: 0.62, twist: 0.35, hx: -0.25, hy: -0.2, hz: 0.25, l: [-1.15, -0.2, -0.3], r: [-2.5, 0.25, -0.7], curl: 0.15 },
  claw: { lean: 0.15, twist: -0.1, hx: -0.4, hy: 0, hz: -0.15, l: [-2.85, -0.4, -0.5], r: [-2.8, 0.45, -0.55], curl: 0.9 },
  tilt: { lean: 0.18, twist: 0.1, hx: 0.25, hy: 0.3, hz: 0.75, l: [-0.1, 0.3, -0.3], r: [-0.06, -0.33, -0.22], curl: 0.3 },
  beckon: { lean: 0.1, twist: -0.25, hx: 0.05, hy: 0.45, hz: 0.2, l: [-0.7, -0.6, -1.6], r: [-1.25, 0.75, -0.8], curl: 0.45 },
  stalk: { lean: 0.95, twist: 0.05, hx: -0.75, hy: 0.15, hz: -0.1, l: [-0.55, -0.15, -0.25], r: [-0.5, 0.2, -0.2], curl: 0.7 },
  carry: { lean: 0.25, twist: 0.2, hx: 0.1, hy: -0.3, hz: 0.1, l: [-0.4, -0.2, -1.9], r: [-0.9, 0.5, -0.4], curl: 0.8 },
  weep: { lean: 0.3, twist: 0, hx: 0.75, hy: 0, hz: 0.05, l: [-1.7, -0.75, -2.0], r: [-1.65, 0.7, -2.05], curl: 0.5 },
  // Saint Unbound: both arms raised wide in judgement
  judgement: { lean: -0.06, twist: 0, hx: -0.32, hy: 0, hz: 0, l: [-2.3, 0.78, -0.32], r: [-2.3, -0.78, -0.32], curl: 0.12 },
  // stooping to lay both hands on someone kneeling
  canonize: { lean: 0.55, twist: 0, hx: 0.5, hy: 0, hz: 0.12, l: [-0.78, 0.1, -0.4], r: [-0.84, -0.08, -0.32], curl: 0.35 },
  // the bell-toll: arms thrown out, head flung back
  toll: { lean: -0.12, twist: 0, hx: -0.55, hy: 0, hz: 0, l: [-0.25, 1.32, -0.15], r: [-0.25, -1.32, -0.15], curl: 0.05 },
};

export const RELIQUARY_TIERS = { 1: 'Penitent', 2: 'Martyr', 3: 'Saint Unbound' };

// ------------------------------------------------------------------ math helpers
const TAU = Math.PI * 2, HPI = Math.PI / 2;
const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
const lerp = (a, b, t) => a + (b - a) * t;
const sstep = (a, b, v) => { const t = clamp01((v - a) / (b - a)); return t * t * (3 - 2 * t); };
const gauss = (x, s) => Math.exp(-(x * x) / (s * s));
const angDist = (a, b) => { const d = Math.abs(a - b) % TAU; return d > Math.PI ? TAU - d : d; };
const wrapPI = (a) => { a = ((a % TAU) + TAU) % TAU; return a > Math.PI ? a - TAU : a; };

// Catmull-Rom through a [[x, y], ...] table (x ascending), clamped at the ends.
function curve(tbl) {
  const n = tbl.length;
  return (x) => {
    if (x <= tbl[0][0]) return tbl[0][1];
    if (x >= tbl[n - 1][0]) return tbl[n - 1][1];
    let i = 0;
    while (x > tbl[i + 1][0]) i++;
    const p0 = tbl[Math.max(0, i - 1)][1], p1 = tbl[i][1], p2 = tbl[i + 1][1], p3 = tbl[Math.min(n - 1, i + 2)][1];
    const t = (x - tbl[i][0]) / (tbl[i + 1][0] - tbl[i][0]), t2 = t * t, t3 = t2 * t;
    return 0.5 * (2 * p1 + (p2 - p0) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (3 * p1 - p0 - 3 * p2 + p3) * t3);
  };
}

// ------------------------------------------------------------------ silhouette profiles
// Root space (static skirt). Cross-sections are ellipses: x = sin(a) r, z = cos(a) r ZS, a = 0 at the front.
const ZS = 0.9;
const MANTLE_TOP = 1.42;
const MANTLE_R = curve([[0, 0.462], [0.12, 0.45], [0.35, 0.42], [0.6, 0.376], [0.85, 0.322], [1.05, 0.272], [1.18, 0.245], [1.3, 0.258], [1.42, 0.25]]);
const MANTLE_GAP = curve([[0, 0.8], [0.4, 0.64], [0.8, 0.5], [1.1, 0.39], [1.42, 0.31]]);
const mantleAmp = (y) => 0.004 + 0.046 * Math.pow(clamp01(1 - y / 1.2), 1.4);
const TUNIC_R = curve([[0, 0.412], [0.3, 0.388], [0.6, 0.343], [0.9, 0.29], [1.1, 0.248], [1.25, 0.232], [1.42, 0.224]]);
const tunicAmp = (y) => 0.007 + 0.013 * clamp01(1 - y / 1.3);
const BELT_Y = 1.19;
// Chest space (moves with lean).
const TORSO_R = curve([[-0.2, 0.24], [0.0, 0.236], [0.18, 0.246], [0.3, 0.238], [0.4, 0.19], [0.47, 0.122], [0.54, 0.088]]);
const TXS = 1.1, TZS = 0.82;
const CAPE_TOP = 0.52;
const CAPE_R = curve([[-0.05, 0.384], [0.08, 0.374], [0.2, 0.362], [0.3, 0.348], [0.36, 0.326], [0.42, 0.272], [0.47, 0.212], [0.52, 0.155]]);
const CAPE_GAP = curve([[-0.05, 0.66], [0.1, 0.56], [0.3, 0.44], [0.52, 0.34]]);
const CXS = 1.07;
const capeZS = (y) => lerp(0.8, 0.95, sstep(0.3, 0.52, y));

function mantleFold(a, y) {
  const ph = NZ.noise(a * 1.3, y * 1.7) * 0.9;
  const s1 = 0.5 + 0.5 * Math.sin(a * 8 + ph + y * 0.6);
  const s2 = 0.5 + 0.5 * Math.sin(a * 15 + 1.7 + ph * 1.5);
  return mantleAmp(y) * (s1 * 0.8 + s2 * 0.2 * clamp01(1.1 - y));
}
const NOTCH = (() => { const r = mulberry32(311), o = []; for (let k = 0; k < 9; k++) o.push({ a: 1.0 + r() * (TAU - 2.0), w: 0.16 + r() * 0.14, d: 0.05 + r() * 0.11 }); return o; })();
function mantleHem(a, gap) {
  let h = 0.006 + (NZ.noise(a * 2.1, 3.3) * 0.5 + 0.5) * 0.028 + Math.max(0, NZ.noise(a * 6.3, 8.1)) * 0.03;
  for (const n of NOTCH) { const d = angDist(a, n.a); if (d < n.w) h += n.d * Math.pow(1 - d / n.w, 1.6); }
  // the mantle's front corners lift away from the ground
  h += 0.075 * sstep(gap + 0.4, gap - 0.02, Math.min(a, TAU - a));
  return h;
}
function pleat(a, y) {
  const f = (a * 30) / TAU + NZ.noise(a * 2.0 + 5, y * 2.5) * 0.18;
  return Math.pow(1 - Math.abs((f - Math.floor(f)) * 2 - 1), 0.8);
}
function tunicHem(a) {
  let h = 0.014 + Math.max(0, NZ.noise(a * 5.3 + 2, 2.2)) * 0.03;
  h += 0.04 * gauss(a - 0.25, 0.12) + 0.036 * gauss(a + 0.26, 0.12); // resting on the feet
  h += 0.06 * gauss(a + 0.01, 0.045); // a torn notch between them
  return h;
}
// radius of the skirt's outermost surface at angle a (for things lying on it)
function surfR(a, y) {
  const as = wrapPI(a), gap = MANTLE_GAP(y);
  if (Math.abs(as) < gap - 0.03) return TUNIC_R(y) + tunicAmp(y);
  return MANTLE_R(y) + mantleFold(((as % TAU) + TAU) % TAU, y) + 0.028;
}
const groundAO = (y) => 0.5 + 0.5 * sstep(0.0, 0.32, y);
const underCapeAO = (y) => 1 - 0.5 * sstep(1.27, 1.42, y);

// ------------------------------------------------------------------ geometry helpers
const KEEP = new Set(['position', 'normal', 'uv', 'uv1', 'color']);
const UV_HOT = [0.984, 0.984], UV_BLACK = [0.516, 0.984]; // reserved texels in the crack map
const regG = (u, v, out) => { out[0] = 0.505 + clamp01(u) * 0.46; out[1] = 0.505 + clamp01(v) * 0.445; return out; };
const _uvTmp = [0, 0];

// Parametric surface. fn(u, v, out, i, j) fills out.{x,y,z, ao, u,v, u1,v1}.
// Winding: (du x dv) is the front face; seam = true merges the normals of column 0 and nu.
const _P = { x: 0, y: 0, z: 0, ao: 1, u: 0, v: 0, u1: 0.75, v1: 0.75 };
function grid(nu, nv, fn, { seam = false } = {}) {
  const cols = nu + 1, n = cols * (nv + 1);
  const pos = new Float32Array(n * 3), uv = new Float32Array(n * 2), uv1 = new Float32Array(n * 2), col = new Float32Array(n * 3);
  for (let j = 0, k = 0; j <= nv; j++) {
    for (let i = 0; i <= nu; i++, k++) {
      _P.ao = 1; _P.u = i / nu; _P.v = j / nv; _P.u1 = 0.75; _P.v1 = 0.75;
      fn(i / nu, j / nv, _P, i, j);
      pos[k * 3] = _P.x; pos[k * 3 + 1] = _P.y; pos[k * 3 + 2] = _P.z;
      uv[k * 2] = _P.u; uv[k * 2 + 1] = _P.v; uv1[k * 2] = _P.u1; uv1[k * 2 + 1] = _P.v1;
      col[k * 3] = col[k * 3 + 1] = col[k * 3 + 2] = _P.ao;
    }
  }
  const idx = [];
  for (let j = 0; j < nv; j++) for (let i = 0; i < nu; i++) {
    const a = j * cols + i, b = a + 1, c = a + cols, d = c + 1;
    idx.push(a, b, c, b, d, c);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  g.setAttribute('uv1', new THREE.BufferAttribute(uv1, 2));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  if (seam) {
    const nr = g.attributes.normal;
    for (let j = 0; j <= nv; j++) {
      const a = j * cols, b = a + nu;
      const x = nr.getX(a) + nr.getX(b), y = nr.getY(a) + nr.getY(b), z = nr.getZ(a) + nr.getZ(b);
      const l = Math.hypot(x, y, z) || 1;
      nr.setXYZ(a, x / l, y / l, z / l); nr.setXYZ(b, x / l, y / l, z / l);
    }
  }
  return g;
}

// Loop around a horseshoe cross-section: outer arc, rolled edge, inner arc, rolled edge.
const _S = { part: 0, t: 0, k: 0 };
function shoe(i, no, ne, ni) {
  if (i <= no) { _S.part = 0; _S.t = i / no; }
  else if (i <= no + ne) { _S.part = 1; _S.k = (i - no) / ne; }
  else if (i <= no + ne + ni) { _S.part = 2; _S.t = (i - no - ne) / ni; }
  else { _S.part = 3; _S.k = (i - no - ne - ni) / ne; }
  return _S;
}
// angle, fold weight and radial offset for a horseshoe column (a0 < a1 going round the back)
const _H = { a: 0, fw: 1, dr: 0, inner: 0 };
function shoeAt(s, a0, a1, thick, r) {
  const bulge = (thick * 0.6) / r;
  if (s.part === 0) { _H.a = lerp(a0, a1, s.t); _H.fw = 1; _H.dr = 0; _H.inner = 0; }
  else if (s.part === 1) { const th = s.k * Math.PI; _H.a = a1 + Math.sin(th) * bulge; _H.fw = (1 + Math.cos(th)) / 2; _H.dr = (-thick * (1 - Math.cos(th))) / 2; _H.inner = (1 - Math.cos(th)) / 2; }
  else if (s.part === 2) { _H.a = lerp(a1, a0, s.t); _H.fw = 0; _H.dr = -thick; _H.inner = 1; }
  else { const th = s.k * Math.PI; _H.a = a0 - Math.sin(th) * bulge; _H.fw = (1 - Math.cos(th)) / 2; _H.dr = (-thick * (1 + Math.cos(th))) / 2; _H.inner = (1 + Math.cos(th)) / 2; }
  return _H;
}

// Normalise any geometry to the shared attribute set (indexed; position, normal, uv, uv1, color).
// o: { m: Matrix4, ao: number | (x,y,z,i)=>number, uv1: [u,v] | (x,y,z,out)=>out, box: uv scale }
function prep(geo, o = {}) {
  const g = geo;
  if (!g.index) {
    const n = g.attributes.position.count, idx = new Uint32Array(n);
    for (let i = 0; i < n; i++) idx[i] = i;
    g.setIndex(new THREE.BufferAttribute(idx, 1));
  }
  if (o.m) g.applyMatrix4(o.m);
  if (!g.attributes.normal) g.computeVertexNormals();
  const p = g.attributes.position, n = p.count;
  if (o.box) worldUV(g, o.box);
  else if (!g.attributes.uv) g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(n * 2), 2));
  if (!g.attributes.uv1 || o.uv1) {
    const a = new Float32Array(n * 2), f = o.uv1;
    for (let i = 0; i < n; i++) {
      const r = typeof f === 'function' ? f(p.getX(i), p.getY(i), p.getZ(i), _uvTmp) : f || [0.75, 0.75];
      a[i * 2] = r[0]; a[i * 2 + 1] = r[1];
    }
    g.setAttribute('uv1', new THREE.BufferAttribute(a, 2));
  }
  if (!g.attributes.color || o.ao !== undefined) {
    const c = new Float32Array(n * 3), f = o.ao === undefined ? 1 : o.ao;
    for (let i = 0; i < n; i++) { const v = typeof f === 'function' ? f(p.getX(i), p.getY(i), p.getZ(i), i) : f; c[i * 3] = c[i * 3 + 1] = c[i * 3 + 2] = v; }
    g.setAttribute('color', new THREE.BufferAttribute(c, 3));
  }
  for (const k of Object.keys(g.attributes)) if (!KEEP.has(k)) g.deleteAttribute(k);
  g.morphAttributes = {};
  return g;
}
function merge(list) {
  const g = mergeGeometries(list, false);
  for (const x of list) x.dispose();
  g.computeBoundingSphere(); g.computeBoundingBox();
  return g;
}
const _v = new THREE.Vector3(), _s = new THREE.Vector3();
function mat(x, y, z, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1, order = 'XYZ') {
  return new THREE.Matrix4().compose(new THREE.Vector3(x, y, z), new THREE.Quaternion().setFromEuler(new THREE.Euler(rx, ry, rz, order)), new THREE.Vector3(sx, sy, sz));
}
// matrix that maps local +Y onto dir (unit), placed at p
function alignY(p, dir, roll = 0, sx = 1, sy = 1, sz = 1) {
  const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.clone().normalize());
  if (roll) q.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), roll));
  return new THREE.Matrix4().compose(p, q, new THREE.Vector3(sx, sy, sz));
}
function mirrorX(geo) {
  const g = geo.clone();
  const p = g.attributes.position, nr = g.attributes.normal;
  for (let i = 0; i < p.count; i++) { p.setX(i, -p.getX(i)); nr.setX(i, -nr.getX(i)); }
  const ix = g.index.array;
  for (let i = 0; i < ix.length; i += 3) { const t = ix[i + 1]; ix[i + 1] = ix[i + 2]; ix[i + 2] = t; }
  g.computeBoundingSphere(); g.computeBoundingBox();
  return g;
}
// lumpy noise displacement for small carved parts
function lumpy(geo, amp, freq, seed = 0) {
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const k = 1 + NZ.noise(x * freq + seed, y * freq + z * freq * 0.7) * amp;
    p.setXYZ(i, x * k, y * k, z * k);
  }
  geo.computeVertexNormals();
  return geo;
}
class FnCurve extends THREE.Curve {
  constructor(fn) { super(); this.fn = fn; }
  getPoint(t, target = new THREE.Vector3()) { return this.fn(t, target); }
}
// displace a TubeGeometry's surface: f(i / tubular, j / radial) -> radial offset
function tubeDisplace(geo, tubular, radial, f) {
  const p = geo.attributes.position, nr = geo.attributes.normal;
  for (let i = 0; i <= tubular; i++) for (let j = 0; j <= radial; j++) {
    const k = i * (radial + 1) + j, d = f(i / tubular, j / radial);
    p.setXYZ(k, p.getX(k) + nr.getX(k) * d, p.getY(k) + nr.getY(k) * d, p.getZ(k) + nr.getZ(k) * d);
  }
  geo.computeVertexNormals();
  return geo;
}

// Flat-shaded carved feather slab: root at origin, tip along -Y, width X, thickness Z.
// broken (0..1) snaps it at that fraction with a jagged end. ao darkens toward the covered root.
function featherGeo(len, wid, thick, { broken = 0, seed = 1, bow = 0.03, aoRoot = 0.55 } = {}) {
  const rnd = mulberry32(seed);
  const ST = [0, 0.16, 0.42, 0.7, 0.9, 1.0], HW = [0.24, 0.82, 1.0, 0.86, 0.5, 0.0];
  const st = [];
  for (let k = 0; k < ST.length; k++) {
    if (broken && ST[k] >= broken) {
      const k0 = k - 1, f = (broken - ST[k0]) / (ST[k] - ST[k0]);
      st.push({ t: broken, hw: lerp(HW[k0], HW[k], f), cut: true });
      break;
    }
    st.push({ t: ST[k], hw: HW[k], cut: false });
  }
  const P = [];
  for (const s of st) {
    const y = -s.t * len, z = bow * s.t * s.t, hl = s.hw * wid * 0.42, hr = s.hw * wid * 0.58, rg = thick * 0.5 * (1 - s.t * 0.5);
    const j = s.cut ? len * 0.06 : 0;
    P.push({
      L: new THREE.Vector3(-hl, y + (s.cut ? (rnd() - 0.2) * j : 0), z), C: new THREE.Vector3(0, y - (s.cut ? rnd() * j : 0), z), R: new THREE.Vector3(hr, y + (s.cut ? (rnd() - 0.5) * j : 0), z), rg,
    });
  }
  const pos = [], tri = (a, b, c, hint) => {
    _v.subVectors(b, a); _s.subVectors(c, a); const nx = _v.y * _s.z - _v.z * _s.y, ny = _v.z * _s.x - _v.x * _s.z, nz = _v.x * _s.y - _v.y * _s.x;
    if (nx * hint[0] + ny * hint[1] + nz * hint[2] < 0) pos.push(a.x, a.y, a.z, c.x, c.y, c.z, b.x, b.y, b.z);
    else pos.push(a.x, a.y, a.z, b.x, b.y, b.z, c.x, c.y, c.z);
  };
  const quad = (a, b, c, d, hint) => { tri(a, b, c, hint); tri(a, c, d, hint); };
  const top = (q) => ({ L: q.L.clone().setZ(q.L.z + thick / 2), C: q.C.clone().setZ(q.C.z + thick / 2 + q.rg), R: q.R.clone().setZ(q.R.z + thick / 2) });
  const bot = (q) => ({ L: q.L.clone().setZ(q.L.z - thick / 2), C: q.C.clone().setZ(q.C.z - thick / 2 - q.rg * 0.7), R: q.R.clone().setZ(q.R.z - thick / 2) });
  for (let k = 0; k < P.length - 1; k++) {
    const a = top(P[k]), b = top(P[k + 1]), c = bot(P[k]), d = bot(P[k + 1]);
    quad(a.L, b.L, b.C, a.C, [0, 0, 1]); quad(a.C, b.C, b.R, a.R, [0, 0, 1]);
    quad(c.L, d.L, d.C, c.C, [0, 0, -1]); quad(c.C, d.C, d.R, c.R, [0, 0, -1]);
    quad(a.L, b.L, d.L, c.L, [-1, 0, 0]); quad(a.R, b.R, d.R, c.R, [1, 0, 0]);
  }
  { const a = top(P[0]), c = bot(P[0]); quad(a.L, a.C, c.C, c.L, [0, 1, 0]); quad(a.C, a.R, c.R, c.C, [0, 1, 0]); }
  const e = P[P.length - 1];
  if (e.L.distanceTo(e.R) > 1e-4) { const a = top(e), c = bot(e); quad(a.L, a.C, c.C, c.L, [0, -1, 0]); quad(a.C, a.R, c.R, c.C, [0, -1, 0]); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.computeVertexNormals();
  const n = pos.length / 3, col = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { const t = clamp01(-pos[i * 3 + 1] / len); col[i * 3] = col[i * 3 + 1] = col[i * 3 + 2] = lerp(aoRoot, 1, sstep(0, 0.45, t)); }
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  return g;
}

// ------------------------------------------------------------------ procedural maps (cached)
let CRACK = null, FACE = null;
const SHARED = new WeakMap();

// Tapered polyline in a few chunks (one stroke call per chunk, not per segment).
function strokeTaper(g, pts, w0, w1, dx = 0) {
  const n = pts.length, K = Math.min(4, n - 1);
  for (let c = 0; c < K; c++) {
    const i0 = Math.floor((c * (n - 1)) / K), i1 = Math.floor(((c + 1) * (n - 1)) / K);
    g.lineWidth = lerp(w0, w1, (c + 0.5) / K);
    g.beginPath(); g.moveTo(pts[i0][0] + dx, pts[i0][1]);
    for (let i = i0 + 1; i <= i1; i++) g.lineTo(pts[i][0] + dx, pts[i][1]);
    g.stroke();
  }
}
// emissive pass: ember halo, hot mid, pale core
function drawCrack(g, pts, w, dx = 0) {
  g.lineCap = 'round'; g.lineJoin = 'round';
  g.globalAlpha = 0.085; g.strokeStyle = '#ff3c10'; strokeTaper(g, pts, w * 5.5, w * 2.0, dx);
  g.globalAlpha = 0.45; g.strokeStyle = '#ff5a1e'; strokeTaper(g, pts, w * 2.2, w * 0.8, dx);
  g.globalAlpha = 1; g.strokeStyle = '#ffb070'; strokeTaper(g, pts, w, w * 0.35, dx);
}
// occlusion pass: the same hairlines, dark on white
function drawCrackAO(g, pts, w, dx = 0) {
  g.lineCap = 'round'; g.lineJoin = 'round';
  g.globalAlpha = 0.5; g.strokeStyle = '#5a5a5a'; strokeTaper(g, pts, w * 2.2, w * 0.8, dx);
  g.globalAlpha = 1; g.strokeStyle = '#2e2e2e'; strokeTaper(g, pts, w, w * 0.35, dx);
}

// Ember crack network (emissive, uv1) + matching hairline occlusion (aoMap).
// Regions: v < 0.5 skirt (wraps in u) | u < 0.5, v > 0.5 torso burst around the relic | rest: limbs, cowl, wings.
function crackMaps() {
  if (CRACK) return CRACK;
  const S = 1024, cv = document.createElement('canvas');
  cv.width = cv.height = S;
  const g = cv.getContext('2d');
  g.fillStyle = '#000'; g.fillRect(0, 0, S, S);
  const rnd = mulberry32(4242);
  const paths = [];
  const walk = (x, y, ang, len, w, inside, steer, depth) => {
    const pts = [[x, y]];
    let a = ang;
    for (let s = 0; s < len; s += 5) {
      a += (rnd() - 0.5) * 0.75 + steer(a);
      x += Math.cos(a) * 5; y += Math.sin(a) * 5;
      if (!inside(x, y)) break;
      pts.push([x, y]);
      if (depth < 2 && rnd() < 0.03) walk(x, y, a + (rnd() < 0.5 ? -1 : 1) * (0.5 + rnd() * 0.8), len * (0.2 + rnd() * 0.35), w * 0.65, inside, steer, depth + 1);
    }
    if (pts.length > 2) {
      let x0 = S, x1 = 0;
      for (const p of pts) { if (p[0] < x0) x0 = p[0]; if (p[0] > x1) x1 = p[0]; }
      paths.push({ pts, w, wrap: inside === inL, lo: x0 < w * 6, hi: x1 > S - w * 6 });
    }
  };
  const inL = (x, y) => y > 520 && y < 1022;
  const up = (a) => wrapPI(-HPI - a) * 0.08;
  for (let k = 0; k < 15; k++) walk(rnd() * S, 1020 - rnd() * 60, -HPI + (rnd() - 0.5) * 0.6, 140 + rnd() * 340, 1.3 + rnd() * 0.6, inL, up, 0);
  for (let k = 0; k < 7; k++) walk(rnd() * S, 560 + rnd() * 380, rnd() * TAU, 80 + rnd() * 160, 1.0 + rnd() * 0.5, inL, () => 0, 1);
  const inT = (x, y) => x > 4 && x < 508 && y > 4 && y < 508;
  for (let k = 0; k < 10; k++) {
    const a = (k / 10) * TAU + rnd() * 0.4;
    walk(256 + Math.cos(a) * 14, 194 + Math.sin(a) * 14, a, 160 + rnd() * 220, 1.6 + rnd() * 0.5, inT, (b) => wrapPI(a - b) * 0.05, 0);
  }
  const inG = (x, y) => x > 516 && x < 1020 && y > 40 && y < 508;
  for (let k = 0; k < 18; k++) walk(520 + rnd() * 500, 44 + rnd() * 460, rnd() * TAU, 90 + rnd() * 200, 1.1 + rnd() * 0.5, inG, () => 0, 0);
  const ao = document.createElement('canvas');
  ao.width = ao.height = S;
  const ga = ao.getContext('2d');
  ga.fillStyle = '#fff'; ga.fillRect(0, 0, S, S);
  for (const [ctx, draw] of [[g, drawCrack], [ga, drawCrackAO]]) {
    for (const p of paths) {
      if (p.wrap && (p.lo || p.hi)) {
        ctx.save(); ctx.beginPath(); ctx.rect(0, 512, S, 512); ctx.clip();
        draw(ctx, p.pts, p.w, 0); if (p.lo) draw(ctx, p.pts, p.w, S); if (p.hi) draw(ctx, p.pts, p.w, -S);
        ctx.restore();
      } else draw(ctx, p.pts, p.w, 0);
    }
    ctx.globalAlpha = 1;
  }
  // reserved texels: a white-hot block for the eyes, a black block for unlit interiors
  g.fillStyle = '#000'; g.fillRect(500, 0, 524, 34);
  g.fillStyle = '#ffa060'; g.fillRect(990, 0, 34, 34);
  const tex = (c, srgb) => {
    const t = new THREE.CanvasTexture(c);
    t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
    t.channel = 1; t.wrapS = THREE.RepeatWrapping; t.wrapT = THREE.ClampToEdgeWrapping; t.anisotropy = 4;
    return t;
  };
  CRACK = { emis: tex(cv, true), ao: tex(ao, false) };
  return CRACK;
}

// The mask's own hairline crack (reproduced from textures.js with the same seeds), set
// aglow, plus tears of fire along its streaks. Sphere UVs, like M.mask.
function faceMap() {
  if (FACE) return FACE;
  const S = 512, cv = document.createElement('canvas');
  cv.width = cv.height = S;
  const g = cv.getContext('2d');
  g.fillStyle = '#000'; g.fillRect(0, 0, S, S);
  const N1 = new Noise(1337), N2 = new Noise(7331);
  const P = (u, v) => [u * S, (1 - v) * S];
  const crack = [];
  for (let v = 0.5; v <= 0.95; v += 0.01) crack.push(P(0.262 + N1.fbm(v * 6, 1, 3) * 0.03, v));
  drawCrack(g, crack.reverse(), 1.5);
  const br = [P(0.262 + N1.fbm(0.62 * 6, 1, 3) * 0.03, 0.62)];
  for (let k = 1; k <= 8; k++) br.push(P(0.268 + k * 0.0045 + N1.noise(k * 0.7, 3) * 0.004, 0.62 - k * 0.0075));
  drawCrack(g, br, 1.1);
  const cheek = [];
  for (let k = 0; k <= 14; k++) cheek.push(P(0.19 - k * 0.002 + N1.noise(k * 0.5, 7) * 0.005, 0.53 - k * 0.012));
  drawCrack(g, cheek, 0.9);
  g.globalAlpha = 0.24; g.strokeStyle = '#ff6a28'; g.lineCap = 'round';
  for (const ex of [0.195, 0.305]) {
    g.beginPath();
    for (let v = 0.54; v > 0.16; v -= 0.01) { const [x, y] = P(ex + N2.noise(v * 14, ex * 30) * 0.008, v); if (v > 0.535) g.moveTo(x, y); else g.lineTo(x, y); }
    g.lineWidth = 3.2; g.stroke();
  }
  g.globalAlpha = 1;
  FACE = new THREE.CanvasTexture(cv);
  FACE.colorSpace = THREE.SRGBColorSpace;
  return FACE;
}

// Embroidered stole: raised border bands, beads, quatrefoils enclosing crosses, lozenges between.
// Albedo is woven from the statue stone itself so the band reads as the same carving.
function stoleMaps(statueMap) {
  const W = 128, H = 512;
  // relief height from soft distance fields (canvas-free: no readback); y is the upright canvas row
  const band = (d, hw) => sstep(hw + 0.8, hw - 0.8, Math.abs(d));
  const h = new Float32Array(W * H);
  for (let row = 0; row < H; row++) {
    const y = H - 1 - row; // texture row 0 = v 0, motifs stay upright
    for (let x = 0; x < W; x++) {
      let v = Math.max(band(x - 8.5, 4.5), band(x - (W - 8.5), 4.5), 0.6 * band(x - 1.5, 1.5), 0.6 * band(x - (W - 1.5), 1.5));
      const by = (((y - 6) % 12) + 12) % 12, bdy = Math.min(by, 12 - by);
      for (const bx of [20, W - 20]) v = Math.max(v, sstep(4.0, 2.4, Math.hypot(x - bx, bdy)));
      const k = Math.floor(y / 128), my = y - k * 128 - 64; // motif-local, centre of the quatrefoil
      for (const [dx, dy] of [[0, -17], [17, 0], [0, 17], [-17, 0]]) v = Math.max(v, band(Math.hypot(x - 64 - dx, my - dy) - 17, 2.25));
      if (Math.abs(x - 64) <= 4.8 && Math.abs(my) <= 22.8) v = Math.max(v, band(Math.abs(x - 64), 4) * band(Math.abs(my), 22));
      if (Math.abs(x - 64) <= 16.8 && Math.abs(my + 6) <= 4.8) v = Math.max(v, band(Math.abs(x - 64), 16) * band(Math.abs(my + 6), 4));
      let ly = my - 64; if (ly < -64) ly += 128; // lozenge sits between motifs, wraps over the tile seam
      v = Math.max(v, band((Math.abs(x - 64) / 12 + Math.abs(ly) / 14 - 1) * 12, 1.75), sstep(4.3, 2.7, Math.hypot(x - 64, ly)));
      h[row * W + x] = v;
    }
  }
  const alb = new Uint8Array(W * H * 4), nrm = new Uint8Array(W * H * 4);
  const sd = statueMap && statueMap.image && statueMap.image.data, sw = sd ? statueMap.image.width : 0, shh = sd ? statueMap.image.height : 0;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const i = y * W + x, hv = h[i];
    let r = 150, gg = 146, b = 138;
    if (sd) { const si = (((y * 2) % shh) * sw + ((x * 2 + 140) % sw)) * 4; r = sd[si]; gg = sd[si + 1]; b = sd[si + 2]; }
    const k = 0.55 + 0.6 * hv;
    alb[i * 4] = clamp(r * k * 1.03, 0, 255); alb[i * 4 + 1] = clamp(gg * k, 0, 255); alb[i * 4 + 2] = clamp(b * k * 0.95, 0, 255); alb[i * 4 + 3] = 255;
    const xl = (x - 1 + W) % W, xr = (x + 1) % W, yd = (y - 1 + H) % H, yu = (y + 1) % H;
    const dx = (h[y * W + xr] - h[y * W + xl]) * 3.2, dy = (h[yu * W + x] - h[yd * W + x]) * 3.2, l = Math.hypot(dx, dy, 1);
    nrm[i * 4] = (-dx / l * 0.5 + 0.5) * 255; nrm[i * 4 + 1] = (-dy / l * 0.5 + 0.5) * 255; nrm[i * 4 + 2] = (1 / l * 0.5 + 0.5) * 255; nrm[i * 4 + 3] = 255;
  }
  const mk = (data, srgb) => {
    const t = new THREE.DataTexture(data, W, H, THREE.RGBAFormat);
    t.wrapS = t.wrapT = THREE.RepeatWrapping; t.magFilter = THREE.LinearFilter; t.minFilter = THREE.LinearMipmapLinearFilter;
    t.generateMipmaps = true; t.anisotropy = 4; if (srgb) t.colorSpace = THREE.SRGBColorSpace; t.needsUpdate = true;
    return t;
  };
  return { map: mk(alb, true), normalMap: mk(nrm, false) };
}

// Additive glow that fades into the fog instead of turning into fog-coloured haze.
const FOG_FADE = `#ifdef USE_FOG
  #ifdef FOG_EXP2
    float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
  #else
    float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
  #endif
  gl_FragColor.rgb *= 1.0 - fogFactor;
#endif`;
function additive(color) {
  const m = new THREE.MeshBasicMaterial({ color, vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide });
  m.onBeforeCompile = (sh) => { sh.fragmentShader = sh.fragmentShader.replace('#include <fog_fragment>', FOG_FADE); };
  m.customProgramCacheKey = () => 'reliquaryAdditiveFogFade';
  return m;
}

function shared(M) {
  let s = SHARED.get(M);
  if (s) return s;
  const bronze = new THREE.MeshStandardMaterial({ color: 0x9c7442, metalness: 0.38, roughness: 0.46, normalMap: M.T && M.T.bronze ? M.T.bronze.normalMap : null, vertexColors: true });
  const iron = M.iron.clone(); iron.vertexColors = true;
  const sm = stoleMaps(M.T && M.T.statue ? M.T.statue.map : null);
  const stole = new THREE.MeshStandardMaterial({ color: 0xc2b8a6, map: sm.map, normalMap: sm.normalMap, normalScale: new THREE.Vector2(1.3, 1.3), roughness: 0.86, metalness: 0, vertexColors: true });
  s = { bronze, iron, stole, cracks: crackMaps(), face: faceMap() };
  SHARED.set(M, s);
  return s;
}

const EMBER = new THREE.Color(0xff5a1e), GOLD = new THREE.Color(0xffb070);

// ------------------------------------------------------------------ geometry: skirt (root)
function geoSkirt() {
  const stone = [], iron = [], stole = [];
  const uvL = (a, y, o) => { o.u1 = (((a / TAU) % 1) + 1) % 1; o.v1 = 0.012 + (y / 1.45) * 0.47; };
  // outer mantle, open at the front, rolled edges, torn hem
  {
    const NO = 50, NE = 4, NI = 16, NU = NO + 2 * NE + NI, NV = 30;
    stone.push(grid(NU, NV, (u, v, o, i) => {
      const vv = Math.pow(v, 1.22), y0 = lerp(0.05, MANTLE_TOP, vv);
      const gap = MANTLE_GAP(y0), thick = lerp(0.026, 0.018, vv);
      const H = shoeAt(shoe(i, NO, NE, NI), gap, TAU - gap, thick, MANTLE_R(y0));
      const a = H.a, y = lerp(mantleHem(a, gap), MANTLE_TOP, vv);
      const amp = mantleAmp(y), fold = mantleFold(a, y) * H.fw;
      const r = MANTLE_R(y) + fold + H.dr;
      o.x = Math.sin(a) * r; o.y = y; o.z = Math.cos(a) * r * ZS;
      o.ao = lerp(0.6 + 0.4 * (fold / amp), 0.3, H.inner) * groundAO(y) * underCapeAO(y);
      o.u = (a / TAU) * 3; o.v = y / 0.9;
      uvL(a, y, o);
    }, { seam: true }));
  }
  // inner pleated tunic, only where it can be seen (tucks under the mantle beyond the opening)
  stone.push(grid(52, 28, (u, v, o) => {
    const a = lerp(-1.2, 1.2, u), vv = Math.pow(v, 1.2);
    const y = lerp(tunicHem(a), MANTLE_TOP - 0.02, vv), gap = MANTLE_GAP(y);
    const hide = sstep(gap - 0.04, gap + 0.26, Math.abs(a)), p = pleat(a, y);
    const r = TUNIC_R(y) + tunicAmp(y) * p * (1 - hide * 0.7) - 0.035 * hide;
    o.x = Math.sin(a) * r; o.y = y; o.z = Math.cos(a) * r * ZS;
    o.ao = (0.5 + 0.5 * p) * groundAO(y) * (1 - 0.45 * hide) * (1 - 0.3 * gauss(y - BELT_Y, 0.05));
    o.u = (a / TAU) * 3 + 0.37; o.v = y / 0.9;
    uvL(a, y, o);
  }));
  // bare stone feet: toes peek from under the torn hem
  for (const sx of [1, -1]) {
    const fy = sx * 0.12;
    const mF = (x, y, z, rx, sxx, syy, szz) => {
      const m = mat(x, y, z, rx, 0, 0, sxx, syy, szz);
      return new THREE.Matrix4().makeRotationY(fy).premultiply(new THREE.Matrix4().makeTranslation(sx * 0.1, 0, 0.335)).multiply(new THREE.Matrix4().makeTranslation(-sx * 0.1, 0, -0.335)).multiply(m);
    };
    const ao = (x, y) => 0.5 + 0.5 * sstep(0.0, 0.05, y);
    const uv1 = (x, y, z, out) => { out[0] = (((Math.atan2(x, z) / TAU) % 1) + 1) % 1; out[1] = 0.012 + (y / 1.45) * 0.47; return out; };
    const foot = new THREE.SphereGeometry(1, 14, 9);
    { const p = foot.attributes.position; for (let i = 0; i < p.count; i++) { let y = p.getY(i); const z = p.getZ(i); if (y < 0) y *= 0.25; y *= 1 - 0.45 * sstep(-0.2, 1, z); p.setXYZ(i, p.getX(i) * (1 - 0.18 * sstep(0.3, 1, z)), y, z); } foot.computeVertexNormals(); }
    stone.push(prep(lumpy(foot, 0.05, 3, sx), { m: mF(sx * 0.1, 0.012, 0.345, 0, 0.044, 0.05, 0.112), ao, uv1, box: 1.4 }));
    const TX = [-0.029, -0.01, 0.006, 0.02, 0.032], TR = [0.0158, 0.0118, 0.0108, 0.0098, 0.0088], TL = [0.046, 0.042, 0.038, 0.034, 0.028], TZ = [0, -0.007, -0.014, -0.022, -0.032];
    for (let k = 0; k < 5; k++) {
      const len = TL[k], z = 0.428 + TZ[k] + len * 0.45, r = TR[k];
      stone.push(prep(new THREE.SphereGeometry(1, 8, 6), { m: mF(sx * (0.1 + TX[k] * 1.08), r * 0.8, z, 0.12, r, r * 0.78, len * 0.55), ao, uv1, box: 1.4 }));
      stone.push(prep(new THREE.SphereGeometry(1, 6, 4), { m: mF(sx * (0.1 + TX[k] * 1.08), r * 1.15, z - len * 0.12, 0, r * 0.95, r * 0.7, r * 1.1), ao, uv1, box: 1.4 }));
    }
  }
  // rope cincture: a twisted cord doubled round the waist, knotted at the front-left
  const beltR = (y) => Math.max(MANTLE_R(y) + mantleAmp(y), TUNIC_R(y) + tunicAmp(y)) + 0.011;
  {
    const R = beltR(BELT_Y);
    const c1 = new FnCurve((t, tg) => { const a = t * TAU; return tg.set(Math.sin(a) * R, BELT_Y + 0.005 * Math.sin(a * 2 + 1), Math.cos(a) * R * ZS); });
    const g1 = tubeDisplace(new THREE.TubeGeometry(c1, 120, 0.0135, 6, true), 120, 6, (s, th) => 0.0036 * Math.cos(th * TAU - s * TAU * 28));
    stone.push(prep(g1, { ao: 0.9, uv1: (x, y, z, out) => { out[0] = (((Math.atan2(x, z) / TAU) % 1) + 1) % 1; out[1] = 0.012 + (y / 1.45) * 0.47; return out; } }));
    const R2 = beltR(BELT_Y - 0.027) + 0.002;
    const c2 = new FnCurve((t, tg) => { const a = t * TAU; return tg.set(Math.sin(a) * R2, BELT_Y - 0.027 + 0.004 * Math.sin(a * 3), Math.cos(a) * R2 * ZS); });
    stone.push(prep(new THREE.TubeGeometry(c2, 60, 0.0088, 4, true), { ao: 0.75 }));
    // knot
    const ka = 0.42, kp = new THREE.Vector3(Math.sin(ka) * (R + 0.012), BELT_Y - 0.012, Math.cos(ka) * (R + 0.012) * ZS);
    stone.push(prep(lumpy(new THREE.SphereGeometry(0.026, 10, 8), 0.18, 40, 3), { m: mat(kp.x, kp.y, kp.z, 0.3, ka, 0.4, 1.15, 0.85, 0.75), ao: 0.95 }));
    stone.push(prep(lumpy(new THREE.SphereGeometry(0.019, 9, 7), 0.2, 50, 5), { m: mat(kp.x + 0.016, kp.y - 0.02, kp.z + 0.004, 0.2, ka, -0.3, 1, 1.2, 0.8), ao: 0.85 }));
    stone.push(prep(new THREE.TorusGeometry(0.022, 0.0085, 5, 14, Math.PI * 1.35), { m: mat(kp.x - 0.012, kp.y + 0.012, kp.z + 0.008, 0, ka, 1.9), ao: 0.9 }));
    // two tassel cords hang over the mantle edge, knotted twice, with frayed brushes
    for (const [a0, a1, yEnd] of [[0.4, 0.37, 0.6], [0.46, 0.55, 0.7]]) {
      const pts = [];
      for (let k = 0; k <= 9; k++) {
        const s = k / 9, y = lerp(BELT_Y - 0.02, yEnd, s), a = lerp(a0, a1, s);
        const r = Math.max(surfR(a, y), surfR(a - 0.06, y), surfR(a + 0.06, y)) + 0.012;
        pts.push(new THREE.Vector3(Math.sin(a) * r, y, Math.cos(a) * r * ZS));
      }
      const cv = new THREE.CatmullRomCurve3(pts);
      stone.push(prep(tubeDisplace(new THREE.TubeGeometry(cv, 30, 0.0082, 5), 30, 5, (s, th) => 0.0022 * Math.cos(th * TAU - s * TAU * 9)), { ao: 0.88 }));
      for (const s of [0.36, 0.64]) { const p = cv.getPoint(s); stone.push(prep(lumpy(new THREE.SphereGeometry(0.0145, 8, 6), 0.15, 60), { m: mat(p.x, p.y, p.z), ao: 0.95 })); }
      const pe = cv.getPoint(1), te = cv.getTangent(1);
      const brush = new THREE.CylinderGeometry(0.009, 0.026, 0.085, 10, 2);
      { const p = brush.attributes.position; for (let i = 0; i < p.count; i++) { const x = p.getX(i), z = p.getZ(i), k = 1 + 0.18 * Math.cos(Math.atan2(z, x) * 5) * clamp01(0.5 - p.getY(i) / 0.085); p.setX(i, x * k); p.setZ(i, z * k); } brush.computeVertexNormals(); }
      stone.push(prep(brush, { m: alignY(pe.clone().addScaledVector(te, 0.035), te.clone().negate()), ao: (x, y) => 0.85 }));
      stone.push(prep(new THREE.TorusGeometry(0.0115, 0.0035, 4, 10), { m: alignY(pe.clone().addScaledVector(te, 0.004), te).multiply(new THREE.Matrix4().makeRotationX(HPI)), ao: 0.9 }));
    }
  }
  // the penitent's chain: iron links draped across the right thigh, ending in a broken shackle
  {
    const pts = [];
    for (let k = 0; k <= 12; k++) {
      const s = k / 12, y = lerp(BELT_Y - 0.01, 0.62, s), a = lerp(-0.8, -1.12, s) + Math.sin(s * Math.PI) * -0.05;
      const r = Math.max(surfR(a, y), surfR(a - 0.07, y), surfR(a + 0.07, y)) + 0.014;
      pts.push(new THREE.Vector3(Math.sin(a) * r, y, Math.cos(a) * r * ZS));
    }
    const cv = new THREE.CatmullRomCurve3(pts), L = cv.getLength(), n = Math.floor(L / 0.047);
    for (let k = 0; k < n; k++) {
      const s = (k + 0.5) / n, p = cv.getPointAt(s), t = cv.getTangentAt(s).normalize();
      const out = new THREE.Vector3(p.x, 0, p.z / ZS).normalize(), side = new THREE.Vector3().crossVectors(t, out).normalize();
      const nrm = new THREE.Vector3().crossVectors(side, t).normalize();
      const X = k % 2 ? side : nrm, Z = new THREE.Vector3().crossVectors(X, t).normalize();
      const m = new THREE.Matrix4().makeBasis(X, t, Z).setPosition(p.clone().addScaledVector(nrm, k % 2 ? 0.003 : 0.008));
      iron.push(prep(new THREE.TorusGeometry(0.0185, 0.0056, 5, 10), { m: m.multiply(new THREE.Matrix4().makeScale(1, 1.5, 1)), ao: 0.85 }));
    }
    const pe = cv.getPointAt(1), te = cv.getTangentAt(1).normalize();
    const out = new THREE.Vector3(pe.x, 0, pe.z / ZS).normalize(), side = new THREE.Vector3().crossVectors(te, out).normalize();
    const c = pe.clone().addScaledVector(te, 0.05).addScaledVector(out, 0.01);
    const m = new THREE.Matrix4().makeBasis(side, te.clone().negate(), new THREE.Vector3().crossVectors(side, te.clone().negate())).setPosition(c);
    iron.push(prep(new THREE.TorusGeometry(0.044, 0.0115, 6, 18, TAU * 0.78), { m: m.clone().multiply(new THREE.Matrix4().makeRotationZ(HPI + 0.9)), ao: 0.9 }));
    iron.push(prep(new THREE.CylinderGeometry(0.013, 0.013, 0.034, 8), { m: m.clone().multiply(new THREE.Matrix4().makeTranslation(0, 0.044, 0)).multiply(new THREE.Matrix4().makeRotationZ(HPI)), ao: 0.8 }));
    iron.push(prep(new THREE.CylinderGeometry(0.006, 0.006, 0.03, 6), { m: m.clone().multiply(new THREE.Matrix4().makeTranslation(-0.03, -0.035, 0)).multiply(new THREE.Matrix4().makeRotationZ(0.7)), ao: 0.8 }));
  }
  // lower stole ends, held by the cincture, flared and fringed
  {
    const bandAt = (y, c, endY) => { const sd = (BELT_Y - 0.02 - y) / (BELT_Y - 0.02 - endY); return c * (0.12 + 0.05 * sd); };
    const COL = [0, 0.03, 0.34, 0.66, 0.97, 1];
    for (const [c, endY] of [[1, 0.47], [-1, 0.51]]) {
      stole.push(grid(5, 26, (u, v, o, i) => {
        const y = lerp(endY, BELT_Y - 0.01, v), sd = (BELT_Y - 0.01 - y) / (BELT_Y - 0.01 - endY);
        const R = TUNIC_R(y) + tunicAmp(y) + 0.008, flare = 1 + 0.32 * sstep(0.82, 1, sd), hw = (0.05 * flare) / R;
        const a = bandAt(y, c, endY) + lerp(-hw, hw, COL[i]), r = R - (i === 0 || i === 5 ? 0.009 : 0);
        o.x = Math.sin(a) * r; o.y = y; o.z = Math.cos(a) * r * ZS;
        o.u = COL[i]; o.v = (BELT_Y - y) / 0.5; o.ao = 0.9 * (1 - 0.35 * gauss(y - BELT_Y, 0.06)) * groundAO(y);
      }));
      const R = TUNIC_R(endY) + tunicAmp(endY) + 0.008, hw = (0.05 * 1.32) / R;
      for (let k = 0; k < 8; k++) {
        const a = bandAt(endY, c, endY) + lerp(-hw * 0.9, hw * 0.9, k / 7), x = Math.sin(a) * R, z = Math.cos(a) * R * ZS;
        stole.push(prep(new THREE.BoxGeometry(0.007, 0.04, 0.005), { m: mat(x, endY - 0.018, z, 0.05, a, 0), ao: 0.75, box: 2 }));
      }
    }
  }
  // embroidered orphreys down both front edges of the mantle
  {
    const COL = [0, 0.03, 0.34, 0.66, 0.97, 1];
    for (const c of [0, 1]) {
      const ya = mantleHem(c === 0 ? MANTLE_GAP(0.1) + 0.05 : TAU - MANTLE_GAP(0.1) - 0.05, MANTLE_GAP(0.1)) + 0.03;
      stole.push(grid(5, 32, (u, v, o, i) => {
        const y = lerp(ya, MANTLE_TOP - 0.03, v), gap = MANTLE_GAP(y), R0 = MANTLE_R(y), w = 0.058 / R0, d0 = 0.012 / R0;
        const a = c === 0 ? gap + d0 + COL[i] * w : TAU - gap - d0 - w + COL[i] * w;
        const r = R0 + mantleFold(a, y) + (i === 0 || i === 5 ? -0.003 : 0.0045);
        o.x = Math.sin(a) * r; o.y = y; o.z = Math.cos(a) * r * ZS;
        o.u = c === 0 ? COL[i] : 1 - COL[i]; o.v = y / 0.5; o.ao = 0.92 * groundAO(y) * underCapeAO(y);
      }));
    }
  }
  return { stone: merge(stone), iron: merge(iron), stole: merge(stole) };
}

// ------------------------------------------------------------------ geometry: chest
const BOX_POS = new THREE.Vector3(0, 0.25, 0.222);
const RELIC_LOCAL = new THREE.Vector3(0, -0.006, 0.0);
function relicCore(scale) {
  const g = new THREE.IcosahedronGeometry(0.02, 1);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const k = 1 + NZ.noise(x * 90 + 3, y * 90 + z * 60) * 0.3;
    p.setXYZ(i, x * k * 0.8 * scale, y * k * 1.65 * scale + Math.sin(y * 120) * 0.002, z * k * 0.72 * scale);
  }
  g.computeVertexNormals();
  return g;
}
const torsoZ = (x, y, off) => { const r = TORSO_R(y) + 0.004 + off, ex = r * TXS, ez = r * TZS; return ez * Math.sqrt(Math.max(0, 1 - (x / ex) * (x / ex))); };

function geoChest() {
  const stone = [], stole = [], bronze = [];
  const uvT = (x, y, o) => { o.u1 = clamp(0.25 + x * 0.62, 0.006, 0.494); o.v1 = clamp(0.5 + (y + 0.25) * 0.62, 0.506, 0.994); };
  // inner tunic: chest, shoulders, neck
  stone.push(grid(40, 16, (u, v, o) => {
    const a = u * TAU, y = lerp(-0.2, 0.54, v), p = pleat(a, y + 3);
    const r = TORSO_R(y) + (0.002 + 0.005 * clamp01((0.3 - y) / 0.5)) * p;
    o.x = Math.sin(a) * r * TXS; o.y = y; o.z = Math.cos(a) * r * TZS;
    o.ao = (0.62 + 0.38 * p) * (1 - 0.35 * sstep(0.35, 0.53, y)) * (1 - 0.4 * sstep(0.8, 1.6, Math.abs(wrapPI(a))));
    o.u = u * 2; o.v = y / 0.9;
    uvT(o.x, y, o);
  }, { seam: true }));
  // shoulder cape (mozzetta), open at the front, scalloped and torn at the hem
  {
    const NO = 46, NE = 3, NI = 16, NU = NO + 2 * NE + NI, NV = 18;
    const capeBottom = (a) => lerp(0.07, -0.02, (1 - Math.cos(a)) / 2) + 0.075 * Math.sin(a) * Math.sin(a) - 0.022 * Math.pow(Math.abs(Math.sin(a * 6)), 0.6) - Math.max(0, NZ.noise(a * 4.1, 9.2)) * 0.03;
    const capeFold = (a, y) => (0.003 + 0.02 * clamp01((0.3 - y) / 0.36)) * (0.5 + 0.5 * Math.sin(a * 10 + NZ.noise(a * 1.1 + 3, y * 2) * 0.8));
    stone.push(grid(NU, NV, (u, v, o, i) => {
      const y0 = lerp(0.05, CAPE_TOP, v), gap = CAPE_GAP(y0), thick = 0.02;
      const H = shoeAt(shoe(i, NO, NE, NI), gap, TAU - gap, thick, CAPE_R(y0));
      const a = H.a, y = lerp(capeBottom(a), CAPE_TOP, Math.pow(v, 0.92));
      const fold = capeFold(a, y) * H.fw, amp = 0.003 + 0.02 * clamp01((0.3 - y) / 0.36);
      const r = CAPE_R(y) + fold + H.dr;
      o.x = Math.sin(a) * r * CXS; o.y = y; o.z = Math.cos(a) * r * capeZS(y);
      o.ao = lerp(0.66 + 0.34 * (fold / amp), 0.3, H.inner) * (1 - 0.25 * sstep(0.46, 0.52, y));
      o.u = (a / TAU) * 2.2; o.v = y / 0.9;
      uvT(o.x, y, o);
    }, { seam: true }));
    // orphreys down the cape's front edges
    const COL = [0, 0.03, 0.34, 0.66, 0.97, 1];
    for (const c of [0, 1]) {
      stole.push(grid(5, 16, (u, v, o, i) => {
        const yb = capeBottom(c === 0 ? 0.62 : TAU - 0.62) + 0.012;
        const y = lerp(yb, CAPE_TOP - 0.04, v), gap = CAPE_GAP(y), R0 = CAPE_R(y), w = 0.05 / (R0 * CXS), d0 = 0.01 / R0;
        const a = c === 0 ? gap + d0 + COL[i] * w : TAU - gap - d0 - w + COL[i] * w;
        const r = R0 + capeFold(a, y) + (i === 0 || i === 5 ? -0.003 : 0.004);
        o.x = Math.sin(a) * r * CXS; o.y = y; o.z = Math.cos(a) * r * capeZS(y);
        o.u = c === 0 ? COL[i] : 1 - COL[i]; o.v = y / 0.5 + 0.3; o.ao = 0.95;
      }));
    }
  }
  // embroidered stole down the breast, under the cincture
  {
    const COL = [0, 0.03, 0.34, 0.66, 0.97, 1];
    for (const c of [1, -1]) {
      stole.push(grid(5, 22, (u, v, o, i) => {
        const y = lerp(-0.085, 0.47, v), xc = c * lerp(0.072, 0.088, (y + 0.085) / 0.555), x = xc + (COL[i] - 0.5) * 0.07;
        o.x = x; o.y = y; o.z = torsoZ(x, y, i === 0 || i === 5 ? 0.001 : 0.009);
        o.u = COL[i]; o.v = (0.47 - y) / 0.5 + 0.6; o.ao = 0.92 * (1 - 0.3 * sstep(0.38, 0.47, y));
      }));
    }
  }
  // the reliquary box: gabled, pinnacled, filigreed bronze with a pointed-arch glass window
  {
    const bm = (x, y, z, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1) => mat(x + BOX_POS.x, y + BOX_POS.y, z + BOX_POS.z, rx, ry, rz, sx, sy, sz);
    const B = (w, h, d, x, y, z, ao = 1) => bronze.push(prep(new THREE.BoxGeometry(w, h, d), { m: bm(x, y, z), ao, box: 28 }));
    B(0.1, 0.13, 0.012, 0, 0, -0.022, 0.25);
    B(0.012, 0.13, 0.058, 0.044, 0, 0, 0.75); B(0.012, 0.13, 0.058, -0.044, 0, 0, 0.75);
    B(0.106, 0.012, 0.064, 0, 0.068, 0); B(0.12, 0.016, 0.072, 0, -0.072, 0.002); B(0.1, 0.01, 0.062, 0, -0.06, 0, 0.8);
    B(0.014, 0.122, 0.012, 0.04, -0.004, 0.026); B(0.014, 0.122, 0.012, -0.04, -0.004, 0.026);
    B(0.07, 0.016, 0.012, 0, -0.056, 0.026);
    B(0.03, 0.03, 0.008, 0.026, 0.05, 0.024, 0.9); B(0.03, 0.03, 0.008, -0.026, 0.05, 0.024, 0.9);
    // pointed arch
    const R = 0.045, th0 = Math.acos(-0.012 / R);
    bronze.push(prep(new THREE.TorusGeometry(R, 0.0048, 4, 10, Math.PI - th0), { m: bm(0.012, 0.02, 0.029, 0, 0, th0), ao: 1 }));
    bronze.push(prep(new THREE.TorusGeometry(R, 0.0048, 4, 10, Math.PI - th0), { m: bm(-0.012, 0.02, 0.029), ao: 1 }));
    bronze.push(prep(new THREE.TorusGeometry(0.008, 0.0019, 3, 12), { m: bm(0, 0.043, 0.027), ao: 1 }));
    for (let k = 0; k < 4; k++) { const a = (k / 4) * TAU + Math.PI / 4; bronze.push(prep(new THREE.TorusGeometry(0.0062, 0.0015, 3, 10), { m: bm(Math.cos(a) * 0.0075, 0.087 + Math.sin(a) * 0.0075, 0.037), ao: 1 })); }
    bronze.push(prep(new THREE.SphereGeometry(0.0042, 6, 4), { m: bm(0, 0.087, 0.038), ao: 0.15 }));
    for (const s of [-1, 1]) for (const y of [0.02, 0.05]) bronze.push(prep(new THREE.SphereGeometry(0.0045, 5, 4), { m: bm(s * 0.064, y, 0.026), ao: 1 }));
    for (const s of [-1, 1]) bronze.push(prep(new THREE.SphereGeometry(0.0115, 8, 6), { m: bm(s * 0.043, -0.079, 0.03, -HPI * 0.2, 0, 0, 1, 0.5, 0.8), ao: 0.9 }));
    // gable roof with crockets and a snapped cross
    {
      const sh = new THREE.Shape(); sh.moveTo(-0.058, 0); sh.lineTo(0.058, 0); sh.lineTo(0, 0.05); sh.closePath();
      bronze.push(prep(new THREE.ExtrudeGeometry(sh, { depth: 0.07, bevelEnabled: false }), { m: bm(0, 0.074, -0.035), ao: 0.95, box: 28 }));
      for (const s of [-1, 1]) for (let k = 1; k <= 3; k++) {
        const t = k / 4;
        bronze.push(prep(new THREE.SphereGeometry(0.0062, 6, 4), { m: bm(s * 0.058 * (1 - t), 0.074 + 0.05 * t + 0.004, 0.036), ao: 1 }));
      }
      B(0.008, 0.05, 0.008, 0, 0.142, 0); B(0.03, 0.008, 0.008, -0.004, 0.152, 0);
      bronze.push(prep(new THREE.ConeGeometry(0.005, 0.012, 4), { m: bm(0.012, 0.153, 0, 0, 0, -1.3), ao: 1 }));
    }
    // pinnacles
    for (const s of [-1, 1]) {
      B(0.012, 0.11, 0.012, s * 0.057, 0.0, 0.026);
      bronze.push(prep(new THREE.ConeGeometry(0.0095, 0.048, 4), { m: bm(s * 0.057, 0.079, 0.026, 0, Math.PI / 4, 0), ao: 1 }));
      bronze.push(prep(new THREE.SphereGeometry(0.006, 6, 4), { m: bm(s * 0.057, 0.105, 0.026), ao: 1 }));
    }
    // filigree scrolls on the plinth and the side walls
    for (const s of [-1, 1]) {
      bronze.push(prep(new THREE.TorusGeometry(0.011, 0.0018, 3, 14, Math.PI * 1.5), { m: bm(s * 0.03, -0.076, 0.039, 0, 0, s > 0 ? 0 : Math.PI), ao: 1 }));
      for (const y of [0.025, -0.028]) bronze.push(prep(new THREE.TorusGeometry(0.012, 0.0018, 3, 14, Math.PI * 1.6), { m: bm(s * 0.051, y, 0, 0, HPI, y > 0 ? 0.5 : 2.6), ao: 1 }));
    }
    bronze.push(prep(new THREE.ConeGeometry(0.014, 0.03, 6), { m: bm(0, -0.095, 0, Math.PI, 0, 0), ao: 0.9 }));
    bronze.push(prep(new THREE.SphereGeometry(0.0072, 6, 5), { m: bm(0, -0.114, 0), ao: 1 }));
    // dark garnets on the pillars and the relic's own dark husk
    for (const s of [-1, 1]) for (const y of [0.032, -0.034]) bronze.push(prep(new THREE.SphereGeometry(0.0062, 7, 5), { m: bm(s * 0.04, y, 0.034, 0, 0, 0, 1, 1, 0.7), ao: 0.12 }));
    bronze.push(prep(relicCore(1), { m: bm(RELIC_LOCAL.x, RELIC_LOCAL.y, RELIC_LOCAL.z), ao: 0.1 }));
    // neck chain: two bead strands from the gable up round the neck
    for (const s of [-1, 1]) {
      const pts = [[0.05, 0.31, 0.215], [0.07, 0.37, 0.2], [0.085, 0.43, 0.15], [0.09, 0.48, 0.08], [0.08, 0.52, -0.01]].map(([x, y, z]) => new THREE.Vector3(s * x, y, z));
      const cv = new THREE.CatmullRomCurve3(pts);
      bronze.push(prep(tubeDisplace(new THREE.TubeGeometry(cv, 28, 0.0036, 5), 28, 5, (t) => 0.0024 * Math.abs(Math.sin(t * Math.PI * 14))), { ao: 0.9 }));
    }
  }
  return { stone: merge(stone), stole: merge(stole), bronze: merge(bronze) };
}

// The burning relic (additive): core, inner glow, glass sheen, spill over the frame, blaze rays, garnet glints.
function geoRelic(alive) {
  if (!alive) return merge([prep(relicCore(1.06), { ao: 1 })]);
  const parts = [];
  const radial = (g, rad, c0, c1, pw = 1.6) => {
    const p = g.attributes.position, c = new Float32Array(p.count * 3);
    for (let i = 0; i < p.count; i++) { const t = clamp01(Math.hypot(p.getX(i), p.getY(i)) / rad); const v = lerp(c0, c1, Math.pow(t, 1 / pw)) * Math.pow(1 - t, pw); c[i * 3] = c[i * 3 + 1] = c[i * 3 + 2] = v; }
    g.setAttribute('color', new THREE.BufferAttribute(c, 3));
    return g;
  };
  parts.push(prep(relicCore(1.14), { ao: 0.8 }));
  parts.push(prep(radial(new THREE.CircleGeometry(0.046, 20), 0.046, 0.42, 0.0, 1.2), { m: mat(0, 0, 0.014) }));
  { const g = new THREE.PlaneGeometry(0.066, 0.104); g.setAttribute('color', new THREE.BufferAttribute(new Float32Array(g.attributes.position.count * 3).fill(0.07), 3)); parts.push(prep(g, { m: mat(0, 0.006, 0.021) })); }
  parts.push(prep(radial(new THREE.CircleGeometry(0.1, 24), 0.1, 0.17, 0.0, 2.0), { m: mat(0, 0, 0.042) }));
  const rays = [], rnd = mulberry32(77);
  for (let k = 0; k < 11; k++) {
    const a = (k / 11) * TAU + rnd() * 0.3, len = 0.08 + rnd() * 0.12, w = 0.005 + rnd() * 0.004;
    const ca = Math.cos(a), sa = Math.sin(a);
    rays.push(0.02 * ca - w * sa, 0.02 * sa + w * ca, 0, 0.02 * ca + w * sa, 0.02 * sa - w * ca, 0, len * ca, len * sa, 0);
  }
  { const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(rays, 3)); const c = new Float32Array(rays.length); for (let i = 0; i < rays.length / 3; i++) { const v = i % 3 === 2 ? 0 : 0.22; c[i * 3] = c[i * 3 + 1] = c[i * 3 + 2] = v; } g.setAttribute('color', new THREE.BufferAttribute(c, 3)); g.computeVertexNormals(); parts.push(prep(g, { m: mat(0, 0, 0.043) })); }
  for (const s of [-1, 1]) for (const y of [0.032, -0.034]) parts.push(prep(radial(new THREE.CircleGeometry(0.012, 8), 0.012, 0.55, 0, 1), { m: mat(s * 0.04 - RELIC_LOCAL.x, y - RELIC_LOCAL.y, 0.039) }));
  return merge(parts);
}

// ------------------------------------------------------------------ geometry: head
const HEAD_POS = new THREE.Vector3(0, 0.555, 0.03);
const FC = new THREE.Vector3(0, 0.085, 0.05), FR = new THREE.Vector3(0.088, 0.142, 0.082);
const EYE_DPHI = 0.3456, EYE_TH = 0.44 * Math.PI, MOUTH_TH = 0.64 * Math.PI;
function facePoint(phi, th, out) { return out.set(-FR.x * Math.cos(phi) * Math.sin(th), FR.y * Math.cos(th), FR.z * Math.sin(phi) * Math.sin(th)); }
function faceNormal(p, out) { return out.set(p.x / (FR.x * FR.x), p.y / (FR.y * FR.y), p.z / (FR.z * FR.z)).normalize(); }

function geoHead() {
  const stone = [];
  // cowl: a peaked hood shell, thick rolled brim, black within
  {
    const NO = 38, NE = 4, NI = 14, NU = NO + 2 * NE + NI, NV = 20;
    const G = curve([[0, 0.86], [0.2, 0.8], [0.4, 0.74], [0.6, 0.58], [0.75, 0.42], [0.88, 0.18], [1, 0.0]]);
    const rr = (t) => 0.203 * Math.pow(Math.max(0, 1 - Math.pow(t, 3)), 0.5) + 0.024 * Math.pow(1 - t, 4);
    stone.push(grid(NU, NV, (u, v, o, i) => {
      const t = v, gap = G(t), r0 = Math.max(0.02, rr(t)), thick = 0.022;
      const H = shoeAt(shoe(i, NO, NE, NI), gap, TAU - gap, thick, r0);
      const a = H.a, fn = (0.5 + 0.5 * Math.sin(a * 4 + 1 + t * 1.6)) * 0.8 + (0.5 + 0.5 * Math.sin(a * 9 + 2.2)) * 0.2;
      const fold = (0.013 * (1 - t * t) * fn + 0.003 * NZ.noise(a * 3, t * 5)) * H.fw;
      const r = Math.max(0, rr(t) + fold + H.dr);
      const edge = sstep(0.55, 0, Math.min(angDist(a, gap), angDist(a, TAU - gap))) * sstep(0.95, 0.5, t) * (1 + 0.35 * NZ.noise(t * 14, a * 2 + 7));
      o.x = Math.sin(a) * r;
      o.y = lerp(-0.105, 0.4, t);
      o.z = -0.02 - 0.075 * t * t + Math.cos(a) * r * 1.12 + edge * 0.03;
      o.ao = lerp((0.55 + 0.45 * fn) * (0.7 + 0.3 * sstep(0.1, 0.8, t)), 0.04, Math.pow(H.inner, 0.6));
      o.u = (a / TAU) * 1.6; o.v = o.y / 0.7;
      regG((a / TAU) * 0.9, 0.2 + t * 0.6, _uvTmp); o.u1 = H.inner > 0.6 ? UV_BLACK[0] : _uvTmp[0]; o.v1 = H.inner > 0.6 ? UV_BLACK[1] : _uvTmp[1];
    }, { seam: true }));
  }
  // eye voids, ember pupils and the open mouth slit, sunk into the mask's sockets
  const pe = new THREE.Vector3(), ne = new THREE.Vector3();
  for (const s of [-1, 1]) {
    facePoint(HPI + s * EYE_DPHI, EYE_TH, pe); faceNormal(pe, ne); pe.add(FC);
    const c = pe.clone().addScaledVector(ne, -0.036);
    stone.push(prep(new THREE.SphereGeometry(1, 12, 8), { m: mat(c.x, c.y, c.z, 0, 0, 0, 0.0165, 0.0098, 0.012), ao: 0.02, uv1: UV_BLACK }));
    const pp = pe.clone().addScaledVector(ne, -0.0246);
    stone.push(prep(new THREE.SphereGeometry(0.0029, 8, 6), { m: mat(pp.x, pp.y, pp.z), ao: 0.0, uv1: UV_HOT }));
  }
  facePoint(HPI, MOUTH_TH, pe); faceNormal(pe, ne); pe.add(FC);
  { const c = pe.clone().addScaledVector(ne, -0.0105); stone.push(prep(new THREE.SphereGeometry(1, 12, 6), { m: mat(c.x, c.y, c.z, 0.35, 0, 0, 0.026, 0.0062, 0.009), ao: 0.02, uv1: UV_BLACK })); }
  // the mask: deep sockets, sharp nose bridge, sunken cheeks, a slack slit of a mouth
  const eyeC = [-1, 1].map((s) => facePoint(HPI + s * EYE_DPHI, EYE_TH, new THREE.Vector3()));
  const mouthC = facePoint(HPI, MOUTH_TH, new THREE.Vector3());
  const bp = new THREE.Vector3(), bn = new THREE.Vector3();
  const face = grid(42, 34, (u, v, o) => {
    const phi = lerp(HPI - 2.15, HPI + 2.15, u), th = lerp(0.94 * Math.PI, 0.0, v);
    facePoint(phi, th, bp); faceNormal(bp, bn);
    let d = 0, bowl = 0;
    for (const e of eyeC) {
      const dx = (bp.x - e.x) * 0.8, dy = (bp.y - e.y) * 1.1, dz = bp.z - e.z, k = sstep(0.042, 0.0, Math.hypot(dx, dy, dz));
      d -= 0.037 * Math.pow(k, 0.9); bowl = Math.max(bowl, k);
    }
    const dp = phi - HPI;
    d += 0.009 * gauss(th - (EYE_TH - 0.22), 0.07) * gauss(dp, 0.5) * (1 - bowl);
    d += 0.016 * gauss(dp, 0.08) * sstep(EYE_TH - 0.08, EYE_TH + 0.08, th) * sstep(0.58 * Math.PI, 0.53 * Math.PI, th);
    d -= 0.012 * (gauss(dp - 0.56, 0.24) + gauss(dp + 0.56, 0.24)) * gauss(th - 0.575 * Math.PI, 0.13);
    let slit = 0;
    { const mx = bp.x - mouthC.x, my = bp.y - mouthC.y; slit = gauss(my, 0.0075) * sstep(0.034, 0.02, Math.abs(mx)); d -= 0.011 * slit; }
    d += 0.007 * gauss(th - 0.77 * Math.PI, 0.08) * gauss(dp, 0.3);
    // the brow of the mask leans back into the cowl
    const back = sstep(0.32 * Math.PI, 0.0, th) * 0.03 + sstep(1.2, 2.15, Math.abs(dp)) * 0.02;
    bp.addScaledVector(bn, d).add(FC); bp.z -= back;
    o.x = bp.x; o.y = bp.y; o.z = bp.z; o.u = phi / TAU; o.v = 1 - th / Math.PI;
    o.ao = clamp(1 + d * 15, 0.32, 1) * (1 - 0.45 * Math.pow(bowl, 1.5)) * (1 - 0.5 * slit) * lerp(0.25, 1, sstep(1.85, 0.85, Math.abs(dp))) * lerp(0.4, 1, sstep(0.04 * Math.PI, 0.28 * Math.PI, th));
  });
  return { stone: merge(stone), face: merge([prep(face)]) };
}

// ------------------------------------------------------------------ geometry: halo
const HALO_POS = new THREE.Vector3(0, 0.21, -0.3), HALO_R = 0.33;
function geoHalo() {
  const ring = (R, tube, rs, ts, arc = TAU) => new THREE.TorusGeometry(R, tube, rs, ts, arc).scale(1, 1, 0.5);
  const ray = (len, w, trunc = 0) => new THREE.CylinderGeometry(w * trunc, w, len, 4).scale(1, 1, 0.42);
  const rayM = (a, r, len, bend = 0) => mat(Math.cos(a) * (r + len / 2), Math.sin(a) * (r + len / 2), 0, 0, 0, a - HPI + bend);
  // tier 1: a broken crescent with snapped rays and a fallen fragment
  const broken = [];
  {
    const a0 = 0.62, arc = 3.85, rnd = mulberry32(17);
    broken.push(prep(ring(HALO_R, 0.017, 6, 54, arc), { m: mat(0, 0, 0, 0, 0, a0), ao: 1 }));
    broken.push(prep(ring(0.272, 0.0075, 5, 30, 2.3), { m: mat(0, 0, 0, 0, 0, 1.2), ao: 0.9 }));
    for (const a of [a0, a0 + arc]) broken.push(prep(lumpy(new THREE.OctahedronGeometry(0.021, 0), 0.35, 30, a), { m: mat(Math.cos(a) * HALO_R, Math.sin(a) * HALO_R, 0, 0.4, 0.2, a), ao: 1 }));
    broken.push(prep(ring(HALO_R, 0.017, 6, 10, 0.55), { m: mat(0.035, -0.06, 0.012, 0.15, -0.1, a0 + arc + 0.55), ao: 1 }));
    for (let k = 0; k < 12; k++) {
      const a = a0 + 0.12 + (k / 11) * (arc - 0.24), len = 0.05 + rnd() * 0.15;
      broken.push(prep(ray(len, 0.012 + rnd() * 0.006, 0.3 + rnd() * 0.4), { m: rayM(a, HALO_R + 0.01, len, (rnd() - 0.5) * 0.35), ao: 1 }));
    }
  }
  // tier 2+: the full double ring with tracery, long rays and four crosslets
  const full = [];
  {
    full.push(prep(ring(HALO_R, 0.0175, 6, 72), { ao: 1 }));
    full.push(prep(ring(0.272, 0.0078, 5, 60), { ao: 0.95 }));
    for (let k = 0; k < 16; k++) { const a = (k / 16) * TAU; full.push(prep(new THREE.BoxGeometry(0.006, 0.058, 0.009), { m: mat(Math.cos(a) * 0.301, Math.sin(a) * 0.301, 0, 0, 0, a - HPI), ao: 0.9 })); }
    for (let k = 0; k < 16; k++) { const a = ((k + 0.5) / 16) * TAU; full.push(prep(new THREE.OctahedronGeometry(0.0095, 0), { m: mat(Math.cos(a) * 0.301, Math.sin(a) * 0.301, 0, 0, 0, a, 1, 1, 0.6), ao: 1 })); }
    for (let k = 0; k < 24; k++) {
      const a = (k / 24) * TAU + HPI, long = k % 2 === 0, len = long ? (k % 6 === 0 ? 0.32 : 0.26) : 0.13;
      full.push(prep(ray(len, long ? 0.022 : 0.015), { m: rayM(a, HALO_R + 0.012, len), ao: 1 }));
    }
    for (let k = 0; k < 4; k++) { const a = (k / 4) * TAU + HPI, r = HALO_R + 0.012 + 0.32 + 0.02; full.push(prep(new THREE.OctahedronGeometry(0.02, 0), { m: mat(Math.cos(a) * r, Math.sin(a) * r, 0, 0, 0, a, 0.8, 1.3, 0.5), ao: 1 })); }
  }
  // soft annulus of light behind the ring
  const glow = new THREE.RingGeometry(0.15, 0.66, 72, 3);
  {
    const p = glow.attributes.position, c = new Float32Array(p.count * 3);
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), y = p.getY(i), r = Math.hypot(x, y), a = Math.atan2(y, x);
      const v = (gauss(r - HALO_R, 0.06) * 0.8 + gauss(r - HALO_R, 0.17) * 0.22) * (0.72 + 0.28 * Math.cos(a * 24)) * sstep(0.66, 0.5, r) * sstep(0.15, 0.22, r);
      c[i * 3] = c[i * 3 + 1] = c[i * 3 + 2] = v;
    }
    glow.setAttribute('color', new THREE.BufferAttribute(c, 3));
  }
  // tier 3: stone shards hovering round the halo
  const shards = [];
  {
    const rnd = mulberry32(91);
    for (let k = 0; k < 7; k++) {
      const a = (k / 7) * TAU + rnd() * 0.5, r = 0.43 + rnd() * 0.09;
      const g = new THREE.OctahedronGeometry(0.03 + rnd() * 0.02, 0);
      const p = g.attributes.position;
      for (let i = 0; i < p.count; i++) p.setXYZ(i, p.getX(i) * (0.6 + rnd() * 0.7), p.getY(i) * (1.2 + rnd() * 0.9), p.getZ(i) * (0.5 + rnd() * 0.5));
      g.computeVertexNormals();
      shards.push(prep(g, { m: mat(Math.cos(a) * r, Math.sin(a) * r, (rnd() - 0.5) * 0.12, rnd() * 3, rnd() * 3, rnd() * 3), ao: 0.95, box: 2.5, uv1: regG(0.1 + k * 0.12, 0.85, [0, 0]) }));
    }
  }
  return { broken: merge(broken), full: merge(full), glow: merge([prep(glow)]), shards: merge(shards) };
}

// ------------------------------------------------------------------ geometry: arms, hands, fingers
const SH_POS = new THREE.Vector3(0.27, 0.33, -0.01);
const FINGER_LEN = [0.21, 0.245, 0.23, 0.185]; // index -> little
const FINGER_X = [0.026, 0.009, -0.008, -0.025]; // for the left hand (thumb at +x); mirrored on the right
function geoArm() {
  const uvArm = (x, y, z, out) => regG((Math.atan2(x, z) / TAU + 0.5) * 0.5, 0.95 + y * 0.8, out);
  // bell sleeve: a thick shell, folded, with a ragged cuff
  const prof = [[0.066, 0.0], [0.084, -0.1], [0.106, -0.2], [0.128, -0.32], [0.146, -0.405], [0.158, -0.43], [0.168, -0.425], [0.162, -0.4], [0.14, -0.32], [0.118, -0.2], [0.096, -0.1], [0.08, 0.0]];
  const sleeve = grid(22, prof.length - 1, (u, v, o, i, j) => {
    const a = u * TAU, [r0, y0] = prof[j], cuff = sstep(-0.3, -0.43, y0);
    const fold = (0.004 + 0.014 * cuff) * (0.5 + 0.5 * Math.sin(a * 5 + 0.7)) + NZ.noise(a * 1.6, 4) * 0.004;
    const y = y0 - cuff * (0.02 + NZ.noise(a * 2.3, 1.9) * 0.025);
    o.x = Math.sin(a) * (r0 + fold); o.y = y; o.z = Math.cos(a) * (r0 + fold) * 0.92;
    o.ao = j >= 6 ? lerp(0.5, 0.25, sstep(6, 9, j)) : (0.62 + 0.38 * (fold / (0.018 + 1e-6))) * (j === 5 ? 0.8 : 1);
    o.u = u * 1.4; o.v = y / 0.6;
    uvArm(o.x, y, o.z, _uvTmp); o.u1 = _uvTmp[0]; o.v1 = _uvTmp[1];
  }, { seam: true });
  // spindly forearm with a ridged ulna and a knobbed wrist
  const fore = new THREE.CylinderGeometry(0.033, 0.0225, 0.62, 9, 7, true);
  {
    const p = fore.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), y = p.getY(i), z = p.getZ(i), a = Math.atan2(z, x);
      const k = 1 + 0.12 * gauss(wrapPI(a - 2.6), 0.5) * sstep(0.3, -0.25, y) + NZ.noise(a * 1.5, y * 6) * 0.06;
      p.setXYZ(i, x * k, y, z * k * 0.9);
    }
    fore.computeVertexNormals();
  }
  const foreList = [prep(fore, { m: mat(0, -0.228, 0), ao: (x, y) => lerp(0.55, 1, sstep(0.05, -0.15, y)), uv1: uvArm, box: 2 })];
  foreList.push(prep(new THREE.SphereGeometry(0.026, 9, 6), { m: mat(0.003, -0.515, 0, 0, 0, 0, 1.1, 0.8, 0.9), ao: 0.95, uv1: uvArm, box: 2 }));
  // palm, tendons, knuckles and a two-jointed thumb (left hand; the right is mirrored)
  const hand = [];
  hand.push(prep(lumpy(new THREE.SphereGeometry(1, 12, 8), 0.05, 2), { m: mat(0, -0.052, 0, 0, 0, 0, 0.037, 0.056, 0.0145), ao: 0.95, uv1: uvArm, box: 2 }));
  hand.push(prep(new THREE.CylinderGeometry(0.021, 0.023, 0.05, 9, 1, true), { m: mat(0, 0.0, 0, 0, 0, 0, 1, 1, 0.75), ao: 0.8, uv1: uvArm, box: 2 }));
  for (let f = 0; f < 4; f++) {
    hand.push(prep(new THREE.SphereGeometry(0.0098, 7, 5), { m: mat(FINGER_X[f], -0.088, 0.001), ao: 1, uv1: uvArm, box: 2 }));
    const tg = new THREE.CylinderGeometry(0.0028, 0.0034, 0.075, 4, 1);
    hand.push(prep(tg, { m: mat(FINGER_X[f] * 0.75, -0.05, -0.0115, 0, 0, FINGER_X[f] * -1.5), ao: 1, uv1: uvArm, box: 2 }));
  }
  {
    const base = new THREE.Vector3(0.03, -0.028, 0.006), d1 = new THREE.Vector3(0.55, -0.75, 0.38).normalize();
    hand.push(prep(new THREE.CylinderGeometry(0.0085, 0.01, 0.062, 6, 1), { m: alignY(base.clone().addScaledVector(d1, 0.031), d1), ao: 0.95, uv1: uvArm, box: 2 }));
    const j1 = base.clone().addScaledVector(d1, 0.062), d2 = new THREE.Vector3(0.25, -0.85, 0.46).normalize();
    hand.push(prep(new THREE.SphereGeometry(0.0092, 6, 5), { m: mat(j1.x, j1.y, j1.z), ao: 1, uv1: uvArm, box: 2 }));
    hand.push(prep(new THREE.CylinderGeometry(0.0035, 0.0082, 0.06, 6, 1), { m: alignY(j1.clone().addScaledVector(d2, 0.03), d2.clone().negate()), ao: 1, uv1: uvArm, box: 2 }));
  }
  const handL = merge(hand);
  // finger segments (the same for both hands): proximal + knuckle, distal + claw tip
  const seg1 = [], seg2 = [];
  for (let f = 0; f < 4; f++) {
    const len = FINGER_LEN[f], L1 = len * 0.55, L2 = len * 0.5;
    seg1.push(merge([
      prep(new THREE.CylinderGeometry(0.0072, 0.0078, L1, 6, 1, true), { m: mat(0, -L1 / 2, 0), ao: 0.95, uv1: uvArm, box: 2 }),
      prep(new THREE.SphereGeometry(0.0083, 6, 4), { m: mat(0, -L1, 0, 0, 0, 0, 1, 1.2, 1), ao: 1, uv1: uvArm, box: 2 }),
    ]));
    seg2.push(merge([
      prep(new THREE.CylinderGeometry(0.0046, 0.0066, L2 * 0.84, 6, 1, true), { m: mat(0, -L2 * 0.42, 0), ao: 0.95, uv1: uvArm, box: 2 }),
      prep(new THREE.ConeGeometry(0.0046, L2 * 0.2, 6), { m: mat(0, -L2 * 0.84 - L2 * 0.1, 0.0005, Math.PI, 0, 0), ao: 1, uv1: uvArm, box: 2 }),
    ]));
  }
  const sleeveG = merge([prep(sleeve)]), foreG = merge(foreList);
  return { sleeve: sleeveG, fore: foreG, handL, handR: mirrorX(handL), seg1, seg2 };
}

// ------------------------------------------------------------------ geometry: wings
// Two segments per wing. Local frame: bone along +X, feathers hang along -Y. Segment A stacks its coverts
// on -Z and the hand (B) on +Z, so when B folds back over A every layer stacks away from the body.
const WING_LA = 0.46, WING_LB = 0.45;
const WING_MOUNT = new THREE.Vector3(0.1, 0.34, -0.335), WING_TILT = 0.22;
// folded (0) and spread (1) Euler angles for the left wing; the right one mirrors y and z
const WA_F = [0.0, 0.16, -0.46], WA_S = [0.06, -0.04, 0.74];
const WB_F = [0.0, 3.02, 0.3], WB_S = [0.0, -0.12, -0.5];
function geoWing() {
  const uvW = (x, y, z, out) => regG((x + 0.15) / 1.4, (y + 0.95) / 1.05, out);
  const A = [], B = [];
  let seed = 1;
  const F = (list, x, y, z, len, wid, phi, opt = {}) => {
    const g = featherGeo(len, wid, opt.thick || 0.022, { broken: opt.broken || 0, seed: seed++, bow: opt.bow ?? 0.035, aoRoot: opt.aoRoot ?? 0.55 });
    list.push(prep(g, { m: mat(x + (opt.dx || 0), y + (opt.dy || 0), z + (opt.dz || 0), opt.pitch || 0, opt.roll || 0, -phi, 1, 1, 1, 'ZYX'), uv1: uvW, box: 2.2 }));
  };
  // segment A: arched bone, three rows of coverts, nine broad secondaries (one gone, two snapped)
  {
    const bone = new THREE.CylinderGeometry(0.028, 0.04, WING_LA, 10, 4);
    { const p = bone.attributes.position; for (let i = 0; i < p.count; i++) { const y = p.getY(i); p.setX(i, p.getX(i) + 0.012 * Math.sin(((y + WING_LA / 2) / WING_LA) * Math.PI)); } bone.computeVertexNormals(); }
    A.push(prep(bone, { m: mat(WING_LA / 2, 0.0, -0.03, 0, 0, -HPI), ao: 1, uv1: uvW, box: 2.2 }));
    A.push(prep(lumpy(new THREE.SphereGeometry(0.05, 10, 8), 0.08, 20), { m: mat(-0.01, 0, -0.02), ao: 0.9, uv1: uvW, box: 2.2 }));
    A.push(prep(lumpy(new THREE.SphereGeometry(0.036, 10, 8), 0.08, 22, 4), { m: mat(WING_LA, 0.006, -0.062, 0, 0, 0, 1, 1, 1.9), ao: 1, uv1: uvW, box: 2.2 }));
    for (let k = 0; k < 7; k++) F(A, lerp(0.02, WING_LA - 0.01, k / 6), 0.04, -0.054 - (k % 2) * 0.003, 0.12 + k * 0.003, 0.085, 0.24, { thick: 0.016, roll: (k % 2 ? 0.08 : -0.06), aoRoot: 0.85, bow: -0.02 });
    for (let k = 0; k < 7; k++) F(A, lerp(0.01, WING_LA, k / 6), 0.004, -0.04 - (k % 2) * 0.003, 0.18 + k * 0.004, 0.095, 0.24, { thick: 0.017, roll: (k % 2 ? -0.07 : 0.06), aoRoot: 0.7, bow: -0.03 });
    for (let k = 0; k < 7; k++) F(A, lerp(0.0, WING_LA, k / 6), -0.03, -0.027 - (k % 2) * 0.003, 0.25 + k * 0.005, 0.105, 0.24, { thick: 0.018, roll: (k % 2 ? 0.07 : -0.06), aoRoot: 0.62, bow: -0.03 });
    for (let k = 0; k < 9; k++) {
      const x = lerp(-0.01, WING_LA, k / 8), len = lerp(0.39, 0.5, k / 8), phi = lerp(0.32, 0.08, k / 8);
      if (k === 4) { F(A, x, -0.045, -0.012, len, 0.125, phi + 0.28, { dy: -0.075, dz: -0.07, roll: 0.42, pitch: -0.18, bow: -0.035 }); continue; } // broke loose, hovering
      F(A, x, -0.045, -0.012 - (k % 2) * 0.004, len, 0.125, phi, { broken: k === 2 ? 0.62 : k === 7 ? 0.76 : 0, roll: (k % 2 ? 0.08 : -0.08), bow: -0.035 });
    }
  }
  // segment B: hand bone, coverts, seven broad primaries fanning to the tip (one loose, two snapped)
  {
    const bone = new THREE.CylinderGeometry(0.019, 0.029, WING_LB - 0.05, 9, 3);
    B.push(prep(bone, { m: mat((WING_LB - 0.05) / 2, 0, 0.0, 0, 0, -HPI), ao: 1, uv1: uvW, box: 2.2 }));
    B.push(prep(lumpy(new THREE.SphereGeometry(0.021, 8, 6), 0.1, 30), { m: mat(WING_LB - 0.05, 0, 0.0), ao: 1, uv1: uvW, box: 2.2 }));
    for (let k = 0; k < 5; k++) F(B, lerp(0.02, WING_LB - 0.03, k / 4), 0.034, 0.05 + (k % 2) * 0.003, 0.11, 0.078, 0.12 - k * 0.1, { thick: 0.015, roll: (k % 2 ? 0.08 : -0.06), aoRoot: 0.85, bow: 0.02 });
    for (let k = 0; k < 5; k++) F(B, lerp(0.01, WING_LB - 0.01, k / 4), -0.012, 0.035 + (k % 2) * 0.003, 0.2 + k * 0.012, 0.092, 0.06 - k * 0.14, { thick: 0.017, roll: (k % 2 ? -0.07 : 0.07), aoRoot: 0.68 });
    const PX = [0.0, 0.075, 0.15, 0.225, 0.3, 0.375, 0.44], PL = [0.55, 0.63, 0.71, 0.79, 0.86, 0.92, 0.95], PF = [0.1, -0.02, -0.14, -0.26, -0.38, -0.5, -0.62], PW = [0.13, 0.13, 0.128, 0.124, 0.118, 0.11, 0.1];
    for (let k = 0; k < 7; k++) {
      if (k === 4) { F(B, PX[k], -0.032, 0.008, PL[k] * 0.72, PW[k], PF[k] + 0.22, { dy: -0.13, dz: 0.075, roll: -0.45, pitch: 0.22, broken: 0.82 }); continue; }
      F(B, PX[k], -0.032, 0.006 + k * 0.004, PL[k], PW[k], PF[k], { broken: k === 1 ? 0.6 : k === 6 ? 0.8 : 0, roll: (k % 2 ? 0.07 : -0.07) });
    }
    // a chip of covert drifting off the hand
    F(B, 0.2, 0.07, 0.1, 0.07, 0.05, 0.6, { dz: 0.035, roll: 0.9, pitch: 0.6, broken: 0.7, thick: 0.014 });
  }
  const aL = merge(A), bL = merge(B);
  return { aL, bL, aR: mirrorX(aL), bR: mirrorX(bL) };
}

function buildGeometries() {
  return { skirt: geoSkirt(), chest: geoChest(), relicLive: geoRelic(true), relicDead: geoRelic(false), head: geoHead(), halo: geoHalo(), arm: geoArm(), wing: geoWing() };
}
let GEO = null;

// ------------------------------------------------------------------ build
function addMesh(geo, material, parent, cast = true, receive = true) {
  const m = new THREE.Mesh(geo, material);
  m.castShadow = cast; m.receiveShadow = receive;
  parent.add(m);
  return m;
}

export function buildReliquary(M, { alive = true } = {}) {
  const G = GEO || (GEO = buildGeometries());
  const SH = shared(M);
  const root = new THREE.Group();
  root.name = 'reliquary';
  // per-instance materials: the cracked stone, the weeping mask, the halo, the relic and its aureole
  const stone = M.relStone.clone();
  stone.vertexColors = true;
  stone.emissive = new THREE.Color(0xffffff); stone.emissiveMap = SH.cracks.emis; stone.emissiveIntensity = 0;
  stone.aoMap = SH.cracks.ao; stone.aoMapIntensity = 0.85;
  const mask = M.mask.clone();
  mask.vertexColors = true; mask.color.set(0xdcd4c8);
  mask.emissive = new THREE.Color(0xffffff); mask.emissiveMap = SH.face; mask.emissiveIntensity = 0;
  const haloMat = SH.bronze.clone();
  haloMat.emissive = GOLD.clone(); haloMat.emissiveIntensity = 0;
  const relicMat = alive ? additive(0xff5a1e) : M.relicDead;
  const haloGlowMat = additive(0xffb070);

  // skirt: mantle, tunic, feet, cincture, chain, stole ends
  const base = [addMesh(G.skirt.stone, stone, root), addMesh(G.skirt.iron, SH.iron, root), addMesh(G.skirt.stole, SH.stole, root)];
  // chest
  const chest = pivot(root, 0, 1.24, 0);
  addMesh(G.chest.stone, stone, chest);
  addMesh(G.chest.stole, SH.stole, chest);
  addMesh(G.chest.bronze, SH.bronze, chest);
  const relic = addMesh(alive ? G.relicLive : G.relicDead, relicMat, chest, !alive, !alive);
  relic.position.copy(BOX_POS).add(RELIC_LOCAL);
  if (alive) relic.renderOrder = 2;
  // head
  const head = pivot(chest, HEAD_POS.x, HEAD_POS.y, HEAD_POS.z);
  addMesh(G.head.stone, stone, head);
  addMesh(G.head.face, mask, head);
  const halo = pivot(head, HALO_POS.x, HALO_POS.y, HALO_POS.z);
  const haloBroken = addMesh(G.halo.broken, SH.bronze, halo);
  const haloGlow = addMesh(G.halo.glow, haloGlowMat, halo, false, false);
  haloGlow.position.z = -0.014; haloGlow.renderOrder = 2; haloGlow.visible = false;
  const haloSpin = pivot(halo);
  const haloFull = addMesh(G.halo.full, haloMat, haloSpin);
  const shardsPivot = pivot(halo);
  const shards = addMesh(G.halo.shards, stone, shardsPivot);
  // arms
  const arms = {};
  for (const side of ['l', 'r']) {
    const sx = side === 'l' ? 1 : -1;
    const sh = pivot(chest, sx * SH_POS.x, SH_POS.y, SH_POS.z);
    addMesh(G.arm.sleeve, stone, sh);
    const el = pivot(sh, 0, -0.38, 0);
    addMesh(G.arm.fore, stone, el);
    const hand = pivot(el, 0, -0.535, 0);
    addMesh(side === 'l' ? G.arm.handL : G.arm.handR, stone, hand);
    const fingers = [];
    for (let f = 0; f < 4; f++) {
      const fp = pivot(hand, sx * FINGER_X[f], -0.09, 0);
      addMesh(G.arm.seg1[f], stone, fp);
      const k2 = pivot(fp, 0, -FINGER_LEN[f] * 0.55, 0);
      addMesh(G.arm.seg2[f], stone, k2);
      fp.userData.k2 = k2;
      fingers.push(fp);
    }
    arms[side] = { sh, el, hand, fingers };
  }
  // wings (Saint Unbound only)
  const wings = [], wingMeshes = [], wingMounts = [];
  for (const side of ['l', 'r']) {
    const s = side === 'l' ? 1 : -1;
    const mount = pivot(chest, s * WING_MOUNT.x, WING_MOUNT.y, WING_MOUNT.z);
    mount.rotation.x = WING_TILT; mount.visible = false;
    const A = pivot(mount); A.rotation.order = 'YZX';
    const B = pivot(A, s * WING_LA, 0, -0.09);
    wingMeshes.push(addMesh(s > 0 ? G.wing.aL : G.wing.aR, stone, A), addMesh(s > 0 ? G.wing.bL : G.wing.bR, stone, B));
    wings.push({ A, B, s });
    wingMounts.push(mount);
  }
  const rel = {
    tier: 1, headBase: { x: 0, y: 0, z: 0 }, look: { yaw: 0, pitch: 0 },
    stone, mask, haloMat, relicMat, haloGlowMat,
    halo, haloBroken, haloSpin, haloFull, haloGlow, shardsPivot, shards,
    wings, wingMounts, wingMeshes, wingAmt: 0, lastT: null, haloPhase: 0, shardPhase: 0,
    baseMeshes: base, clearance: wingClearance,
  };
  root.userData = { chest, head, arms, relic, alive, tier: 1, rel };
  setReliquaryTier(root, 1);
  applyWings(rel, 0);
  poseReliquary(root, 'tilt');
  updateReliquaryFX(root, { time: 0, glow: 0, relic: 0.65, wings: 0, halo: 0.3 });
  return root;
}

// ------------------------------------------------------------------ pose / look / tier / fx
const FSPREAD = [0.1, 0.03, -0.04, -0.12], FCURL = [0.85, 1.0, 1.05, 1.15];
const _qa = new THREE.Quaternion(), _qb = new THREE.Quaternion(), _qc = new THREE.Quaternion();
const _eu = new THREE.Euler(), AX = new THREE.Vector3(1, 0, 0), AY = new THREE.Vector3(0, 1, 0);

function applyHead(model) {
  const ud = model.userData, R = ud.rel;
  _eu.set(R.headBase.x, R.headBase.y, R.headBase.z, 'XYZ');
  _qa.setFromEuler(_eu);
  _qb.setFromAxisAngle(AY, R.look.yaw);
  _qc.setFromAxisAngle(AX, -R.look.pitch); // positive pitch looks up
  ud.head.quaternion.copy(_qb).multiply(_qc).multiply(_qa);
  // keep the halo nearer upright when the head pitches hard
  R.halo.rotation.x = -0.4 * (R.headBase.x - R.look.pitch);
}

export function poseReliquary(model, pose) {
  const P = typeof pose === 'string' ? RELIQUARY_POSES[pose] : pose;
  if (!P || !model || !model.userData.chest) return;
  const ud = model.userData, R = ud.rel;
  ud.chest.rotation.set(P.lean || 0, P.twist || 0, 0);
  if (R) { R.headBase.x = P.hx || 0; R.headBase.y = P.hy || 0; R.headBase.z = P.hz || 0; applyHead(model); }
  else ud.head.rotation.set(P.hx || 0, P.hy || 0, P.hz || 0);
  const curl = P.curl || 0;
  for (const side of ['l', 'r']) {
    const a = ud.arms[side], v = P[side] || [0, 0, 0], sx = side === 'l' ? 1 : -1;
    a.sh.rotation.set(v[0], 0, v[1]);
    a.el.rotation.set(v[2], 0, 0);
    a.hand.rotation.set(-curl * 0.3, 0, 0);
    for (let i = 0; i < a.fingers.length; i++) {
      const f = a.fingers[i], k = FCURL[i] ?? 1;
      f.rotation.set(-curl * 0.8 * k, 0, sx * (FSPREAD[i] ?? 0) * (1 - curl * 0.6));
      if (f.userData.k2) f.userData.k2.rotation.x = -curl * 1.0 * k;
    }
  }
}

export function setReliquaryLook(model, yaw = 0, pitch = 0) {
  const R = model && model.userData.rel;
  if (!R) return;
  R.look.yaw = clamp(+yaw || 0, -1.2, 1.2);
  R.look.pitch = clamp(+pitch || 0, -0.6, 0.6);
  applyHead(model);
}

function applyWings(R, w) {
  const a = sstep(0, 0.78, w), b = sstep(0.22, 1, w);
  for (let i = 0; i < R.wings.length; i++) {
    const W = R.wings[i];
    W.A.rotation.set(lerp(WA_F[0], WA_S[0], a), W.s * lerp(WA_F[1], WA_S[1], a), W.s * lerp(WA_F[2], WA_S[2], a));
    W.B.rotation.set(lerp(WB_F[0], WB_S[0], b), W.s * lerp(WB_F[1], WB_S[1], b), W.s * lerp(WB_F[2], WB_S[2], b));
  }
}

export function setReliquaryTier(model, tier) {
  const ud = model && model.userData, R = ud && ud.rel;
  if (!R) return;
  const t = tier >= 3 ? 3 : tier >= 2 ? 2 : 1;
  R.tier = t; ud.tier = t;
  R.haloBroken.visible = t === 1;
  R.haloFull.visible = t >= 2;
  R.shards.visible = t === 3;
  for (let i = 0; i < R.wingMounts.length; i++) R.wingMounts[i].visible = t === 3;
  if (t === 1) { R.stone.emissiveIntensity = 0; R.mask.emissiveIntensity = 0; }
  if (t === 1 || !ud.alive) { R.haloMat.emissiveIntensity = 0; R.haloGlow.visible = false; }
  applyWings(R, R.wingAmt);
}

export function updateReliquaryFX(model, fx) {
  const ud = model && model.userData, R = ud && ud.rel;
  if (!R || !fx) return;
  const time = +fx.time || 0;
  let dt = R.lastT === null ? 0 : time - R.lastT;
  if (!(dt > 0)) dt = 0; else if (dt > 0.25) dt = 0.25;
  R.lastT = time;
  const tier = R.tier, alive = ud.alive;
  const glow = clamp01(+fx.glow || 0), relic = clamp01(+fx.relic || 0), halo = clamp01(+fx.halo || 0), wings = clamp01(+fx.wings || 0);
  // ember cracks (and the eyes, the mask's crack and its tears) from the Martyr tier on
  let ci = 0;
  if (alive && tier >= 2 && glow > 0) ci = glow * (tier === 3 ? 1.4 : 0.85) * (0.84 + 0.09 * Math.sin(time * 7.3) + 0.07 * Math.sin(time * 17.9 + 1.3));
  R.stone.emissiveIntensity = ci;
  R.mask.emissiveIntensity = ci * 1.15;
  // the relic burns ember-red; it blazes once unbound
  if (alive) R.relicMat.color.copy(EMBER).multiplyScalar(relic * (tier === 3 ? 2.6 : tier === 2 ? 1.5 : 1.0));
  // halo: turns and kindles once it has reformed
  R.haloPhase = (R.haloPhase + dt * (tier >= 2 ? 0.06 + halo * 1.1 : 0)) % TAU;
  R.haloSpin.rotation.z = R.haloPhase;
  const hb = alive && tier >= 2 ? halo : 0;
  R.haloMat.emissiveIntensity = hb * (tier === 3 ? 0.6 : 0.4);
  R.haloGlow.visible = hb > 0.01;
  R.haloGlowMat.color.copy(GOLD).multiplyScalar(hb * (tier === 3 ? 0.22 : 0.14));
  if (tier === 3) {
    R.shardPhase = (R.shardPhase - dt * (0.2 + halo * 0.55)) % TAU;
    R.shardsPivot.rotation.z = R.shardPhase;
    R.shardsPivot.position.z = Math.sin(time * 1.3) * 0.02;
    R.wingAmt = wings;
    applyWings(R, wings);
  }
}

// Preview/debug helper: minimum distance (m, minus a safety margin) between wing vertices and the robe's
// surfaces over every pose and unfold amount. It leaves the model in the last pose; re-pose afterwards.
function wingClearance(model, poseNames) {
  const R = model.userData.rel, chest = model.userData.chest;
  const v = new THREE.Vector3(), inv = new THREE.Matrix4();
  let minRoot = 9, minCape = 9, worst = '', worstCape = '';
  for (const pn of poseNames) {
    poseReliquary(model, pn);
    for (const w of [0, 0.2, 0.4, 0.6, 0.8, 1]) {
      applyWings(R, w);
      model.updateMatrixWorld(true);
      inv.copy(model.matrixWorld).invert();
      const invC = new THREE.Matrix4().copy(chest.matrixWorld).invert();
      R.wingMeshes.forEach((m, mi) => {
        const p = m.geometry.attributes.position;
        for (let i = 0; i < p.count; i += 3) {
          v.fromBufferAttribute(p, i);
          if (mi % 2 === 0 && v.length() < 0.13) continue;
          v.applyMatrix4(m.matrixWorld);
          const lr = v.clone().applyMatrix4(inv);
          if (lr.y > 0 && lr.y < MANTLE_TOP) {
            const r = Math.hypot(lr.x, lr.z / ZS), c = r - (MANTLE_R(lr.y) + mantleAmp(lr.y) + 0.03);
            if (c < minRoot) { minRoot = c; worst = `${pn} w=${w} root y=${lr.y.toFixed(2)}`; }
          }
          const lc = v.clone().applyMatrix4(invC);
          if (lc.y > -0.05 && lc.y < CAPE_TOP && lc.z < 0) {
            const r = Math.hypot(lc.x / CXS, lc.z / capeZS(lc.y)), c = r - (CAPE_R(lc.y) + 0.025);
            if (c < minCape) { minCape = c; worstCape = `${pn} w=${w} mesh${mi} local(${p.getX(i).toFixed(2)},${p.getY(i).toFixed(2)},${p.getZ(i).toFixed(2)}) chest(${lc.x.toFixed(2)},${lc.y.toFixed(2)},${lc.z.toFixed(2)})`; }
          }
        }
      });
    }
  }
  applyWings(R, R.wingAmt);
  return { minRoot: +minRoot.toFixed(3), minCape: +minCape.toFixed(3), worst, worstCape };
}
