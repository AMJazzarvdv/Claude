// Props and scenery: the Mourning Bell, pallets, Weeping Posts, Lychgates, the
// Drowned Well, shrouds, reliquary coffers, crows, votive candles and the
// survivors' small relics, moor clutter (carts, coffins, fences, lantern posts),
// church masonry (tracery frames, buttresses), dead trees, rocks, gravestones.
//
// Everything is built from primitives, lathes, extrusions and swept tubes, with
// static parts merged per material (MergeBucket). The few bespoke textures
// (bell inscription, rope, feathers, a moonlit environment for metal and
// glass) are baked lazily once and cached at module level.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { Noise, mulberry32, clamp, smoothstep } from '../noise.js';
import { NZ, mesh, pivot, MergeBucket } from './common.js';

const TAU = Math.PI * 2;
const UP = new THREE.Vector3(0, 1, 0);
const V3 = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
const _m4 = new THREE.Matrix4(), _q = new THREE.Quaternion(), _e = new THREE.Euler();
const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _c = new THREE.Vector3();
const randSeed = () => Math.floor(Math.random() * 1e9);

// ================================================================ geometry helpers
// Transform a geometry in place: translate, Euler XYZ rotate, scale.
function xf(g, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = sx, sz = sx) {
  _m4.compose(_a.set(x, y, z), _q.setFromEuler(_e.set(rx, ry, rz, 'XYZ')), _b.set(sx, sy, sz));
  return g.applyMatrix4(_m4);
}

// Cylinder from a to b (radius r0 at a, r1 at b).
function rod(a, b, r0, r1 = r0, seg = 6, open = false) {
  _c.subVectors(b, a);
  const len = _c.length();
  const g = new THREE.CylinderGeometry(r1, r0, len, seg, 1, open);
  g.translate(0, len / 2, 0);
  g.applyQuaternion(_q.setFromUnitVectors(UP, _c.normalize()));
  return g.translate(a.x, a.y, a.z);
}

// Box from a to b with a w x d cross-section.
function beam(a, b, w, d, roll = 0) {
  _c.subVectors(b, a);
  const len = _c.length();
  const g = new THREE.BoxGeometry(w, len, d);
  if (roll) g.rotateY(roll);
  g.translate(0, len / 2, 0);
  g.applyQuaternion(_q.setFromUnitVectors(UP, _c.normalize()));
  return g.translate(a.x, a.y, a.z);
}

// Box with all twelve edges chamfered by c (timber, cut stone).
function bevBox(w, h, d, c, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  c = Math.min(c, w * 0.3, h * 0.3, d * 0.3);
  const hw = w / 2 - c, hh = h / 2 - c;
  const s = new THREE.Shape();
  s.moveTo(-hw, -hh); s.lineTo(hw, -hh); s.lineTo(hw, hh); s.lineTo(-hw, hh); s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: d - 2 * c, bevelEnabled: true, bevelThickness: c, bevelSize: c, bevelSegments: 1, curveSegments: 1 });
  g.translate(0, 0, -(d - 2 * c) / 2);
  return xf(g, x, y, z, rx, ry, rz);
}

// Box whose top face is shrunk to wt x dt (plinth weatherings, caps).
function taper(w, h, d, wt, dt, x = 0, y = 0, z = 0) {
  const g = new THREE.BoxGeometry(w, h, d);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) if (p.getY(i) > 0) { p.setX(i, p.getX(i) * wt / w); p.setZ(i, p.getZ(i) * dt / d); }
  g.computeVertexNormals();
  return xf(g, x, y, z);
}

// Subdivided box eroded with noise and chipped along its edges. Displacement is
// a pure function of position, so the split vertices of BoxGeometry stay welded.
// corners: [[sx, sy, sz, depth]] cleaves a flat facet off that corner.
function roughBox(w, h, d, o = {}) {
  const res = o.res ?? 0.1;
  const g = new THREE.BoxGeometry(w, h, d, Math.max(1, Math.ceil(w / res)), Math.max(1, Math.ceil(h / res)), Math.max(1, Math.ceil(d / res)));
  const f = o.freq ?? 7, amp = o.amp ?? 0.006, chip = o.chip ?? 0.025, sd = o.seed ?? 0, band = o.band ?? 0.1;
  const keepBottom = o.keepBottom ?? true;
  const hw = w / 2, hh = h / 2, hd = d / 2;
  const p = g.attributes.position;
  const cn = (o.corners || []).map(([sx, sy, sz, dep]) => ({ c: V3(sx * hw, sy * hh, sz * hd), n: V3(sx, sy * 0.7, sz).normalize(), dep }));
  for (let i = 0; i < p.count; i++) {
    let x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const kx = smoothstep(hw - band, hw, Math.abs(x)), ky = smoothstep(hh - band, hh, Math.abs(y)), kz = smoothstep(hd - band, hd, Math.abs(z));
    const n1 = NZ.noise(x * f + sd, y * f - z * f * 0.7 + sd * 0.37) * 0.5 + 0.5;
    const n2 = NZ.noise(z * f * 0.6 + x * f * 0.45 - sd, y * f * 0.6 + 3.1 + sd * 0.5);
    const edge = Math.min(1, kx * ky + ky * kz + kz * kx);
    const inward = amp * n1 + chip * Math.max(0, n2 * 1.6 - 0.15) * edge;
    const by = keepBottom && y < 0 ? 0 : 1;
    x -= Math.sign(x) * inward * kx; z -= Math.sign(z) * inward * kz; y -= Math.sign(y) * inward * ky * by;
    for (const C of cn) {
      _a.set(x, y, z);
      const s = _b.subVectors(C.c, _a).dot(C.n);
      if (s < C.dep) { _a.addScaledVector(C.n, s - C.dep); x = _a.x; y = _a.y; z = _a.z; }
    }
    p.setXYZ(i, x, y, z);
  }
  g.computeVertexNormals();
  return g;
}

function lathe(pts, seg = 12, uRep = 1, vRep = 1, phiStart = 0, phiLen = TAU) {
  const g = new THREE.LatheGeometry(pts.map(([r, y]) => new THREE.Vector2(r, y)), seg, phiStart, phiLen);
  if (uRep !== 1 || vRep !== 1) {
    const uv = g.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * uRep, uv.getY(i) * vRep);
  }
  return g;
}

function torus(R, r, rs, ts, arc = TAU) { return new THREE.TorusGeometry(R, r, rs, ts, arc); }
function sphere(r, ws = 8, hs = 6) { return new THREE.SphereGeometry(r, ws, hs); }

// Smooth swept tube along a spine with twisting flutes, noise burls and an end
// treatment: 'point' (taper to nothing via r(1) = 0), 'cap' (flat cut) or
// 'jag' (splintered break). Indexed, attributes position/normal/uv.
class Tube {
  constructor(spine, o) {
    this.o = o;
    this.curve = spine.isCurve ? spine : new THREE.CatmullRomCurve3(spine, false, 'centripetal');
    this.segs = o.segs ?? 8; this.rad = o.radial ?? 6;
    this.fr = this.curve.computeFrenetFrames(this.segs, false);
    this.len = this.curve.getLength();
  }
  radius(t, a) {
    const o = this.o;
    let k = 1;
    if (o.fluteAmp) k += o.fluteAmp * Math.sin((o.flutes ?? 4) * a + (o.twist ?? 0) * t * TAU) * (o.fluteMask ? o.fluteMask(t) : 1);
    if (o.bump) { const bf = o.bumpFreq ?? 2; k += o.bump * NZ.noise(Math.cos(a) * bf + (o.seed ?? 0), Math.sin(a) * bf + t * this.len * (o.bumpLen ?? 2.5) + (o.seed ?? 0) * 0.71); }
    return o.r(t) * k + (o.extra ? o.extra(t, a) : 0);
  }
  // surface point at (t, angle) and the outward direction there
  at(t, a, out, nrm) {
    t = clamp(t, 0, 1);
    const j = Math.round(t * this.segs);
    this.curve.getPointAt(t, out);
    const n = this.fr.normals[j], b = this.fr.binormals[j], ca = Math.cos(a), sa = Math.sin(a);
    nrm.set(n.x * ca + b.x * sa, n.y * ca + b.y * sa, n.z * ca + b.z * sa);
    return out.addScaledVector(nrm, this.radius(t, a));
  }
  center(t, out) { return this.curve.getPointAt(clamp(t, 0, 1), out); }
  tangent(t, out) { return this.curve.getTangentAt(clamp(t, 0, 1), out); }
  geo() {
    const o = this.o, segs = this.segs, rad = this.rad, R1 = rad + 1;
    const pos = [], uv = [], idx = [];
    const c = new THREE.Vector3();
    const uRep = o.uRep ?? 1, vLen = o.vLen ?? 1;
    for (let j = 0; j <= segs; j++) {
      const t = j / segs;
      this.curve.getPointAt(t, c);
      const n = this.fr.normals[j], b = this.fr.binormals[j];
      for (let i = 0; i <= rad; i++) {
        const a = (i / rad) * TAU, ca = Math.cos(a), sa = Math.sin(a), rr = this.radius(t, a);
        pos.push(c.x + (n.x * ca + b.x * sa) * rr, c.y + (n.y * ca + b.y * sa) * rr, c.z + (n.z * ca + b.z * sa) * rr);
        uv.push((i / rad) * uRep, (t * this.len) / vLen);
      }
    }
    for (let j = 0; j < segs; j++) for (let i = 0; i < rad; i++) {
      const a = j * R1 + i, b = a + R1;
      idx.push(a, a + 1, b, b, a + 1, b + 1);
    }
    let cap = -1;
    if (o.end === 'cap' || o.end === 'jag') {
      const T = this.fr.tangents[segs], last = segs * R1;
      const rnd = mulberry32(((o.seed ?? 0) * 977 + 13) | 0);
      const jag = o.end === 'jag' ? (o.jag ?? o.r(1) * 1.4) : 0;
      const offs = [];
      for (let i = 0; i < rad; i++) offs.push(jag ? (rnd() - 0.32) * jag * (i % 2 ? 0.55 : 1) : 0);
      offs.push(offs[0]);
      for (let i = 0; i <= rad; i++) { const k = (last + i) * 3; pos[k] += T.x * offs[i]; pos[k + 1] += T.y * offs[i]; pos[k + 2] += T.z * offs[i]; }
      cap = pos.length / 3;
      for (let i = 0; i <= rad; i++) { const k = (last + i) * 3; pos.push(pos[k], pos[k + 1], pos[k + 2]); const a = (i / rad) * TAU; uv.push(0.5 + Math.cos(a) * 0.3, 0.5 + Math.sin(a) * 0.3); }
      this.curve.getPointAt(1, c);
      const cen = cap + R1;
      pos.push(c.x - T.x * jag * 0.2, c.y - T.y * jag * 0.2, c.z - T.z * jag * 0.2); uv.push(0.5, 0.5);
      for (let i = 0; i < rad; i++) idx.push(cen, cap + i, cap + i + 1);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx);
    g.computeVertexNormals();
    const nr = g.attributes.normal;
    const weld = (i0, i1) => { _a.fromBufferAttribute(nr, i0).add(_b.fromBufferAttribute(nr, i1)).normalize(); nr.setXYZ(i0, _a.x, _a.y, _a.z); nr.setXYZ(i1, _a.x, _a.y, _a.z); };
    for (let j = 0; j <= segs; j++) weld(j * R1, j * R1 + rad);
    if (cap >= 0) weld(cap, cap + rad);
    return g;
  }
}
const tube = (spine, o) => new Tube(spine, o).geo();

// Thin swept iron/rope along points (CatmullRom).
function wire(pts, r, tub = 24, rs = 4, closed = false) {
  return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts, closed, 'centripetal'), tub, r, rs, closed);
}

// Two-centred pointed arch from (-w/2 - grow, y0) over the apex to (w/2 + grow, y0);
// grow > 0 gives the extrados of an arch ring with the same centres.
function archPts(w, y0, rise, n = 10, grow = 0) {
  const R = (rise * rise + w * w / 4) / w, Rg = R + grow, cx = R - w / 2;
  const apexY = Math.sqrt(Math.max(0, Rg * Rg - cx * cx));
  const aTop = Math.atan2(apexY, -cx);
  const pts = [];
  for (let k = 0; k <= n; k++) { const a = Math.PI + (aTop - Math.PI) * (k / n); pts.push(new THREE.Vector2(cx + Math.cos(a) * Rg, y0 + Math.sin(a) * Rg)); }
  for (let k = 1; k <= n; k++) { const a = (Math.PI - aTop) * (1 - k / n); pts.push(new THREE.Vector2(-cx + Math.cos(a) * Rg, y0 + Math.sin(a) * Rg)); }
  return pts;
}

// Extrude a shape along z, centred on z = 0, total depth `depth`. With inset,
// the bevel cuts into the outline instead of growing it (V-grooved joints).
function extrude(shape, depth, bevel = 0, curveSegs = 8, inset = false) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: Math.max(0.001, depth - 2 * bevel), bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel, bevelOffset: inset ? -bevel : 0, bevelSegments: 1, curveSegments: curveSegs });
  g.translate(0, 0, -Math.max(0.001, depth - 2 * bevel) / 2);
  return g;
}

function merge(list) {
  const g = mergeGeometries(list.map((x) => {
    const q = x.index ? x.toNonIndexed() : x;
    for (const k of Object.keys(q.attributes)) if (!['position', 'normal', 'uv'].includes(k)) q.deleteAttribute(k);
    return q;
  }), false);
  return g;
}

// ================================================================ baked textures
function dtex(arr, W, H, srgb, wrapT = THREE.RepeatWrapping) {
  const t = new THREE.DataTexture(arr, W, H, THREE.RGBAFormat);
  t.wrapS = THREE.RepeatWrapping; t.wrapT = wrapT;
  t.magFilter = THREE.LinearFilter; t.minFilter = THREE.LinearMipmapLinearFilter;
  t.generateMipmaps = true; t.anisotropy = 4;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.needsUpdate = true;
  return t;
}

// fn(u, v, out) fills linear colour r/g/b, height h, rough, metal.
function bake(W, H, fn, nStr = 3, wrapT = THREE.RepeatWrapping) {
  const n = W * H, col = new Float32Array(n * 3), hh = new Float32Array(n), ro = new Float32Array(n), me = new Float32Array(n);
  const o = { r: 0, g: 0, b: 0, h: 0, rough: 0.9, metal: 0 };
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    o.r = o.g = o.b = 0.5; o.h = 0; o.rough = 0.9; o.metal = 0;
    fn((x + 0.5) / W, (y + 0.5) / H, o, x, y);
    const i = y * W + x;
    col[i * 3] = o.r; col[i * 3 + 1] = o.g; col[i * 3 + 2] = o.b; hh[i] = o.h; ro[i] = o.rough; me[i] = o.metal;
  }
  const A = new Uint8Array(n * 4), Nn = new Uint8Array(n * 4), O = new Uint8Array(n * 4);
  const wrapY = wrapT === THREE.RepeatWrapping;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const i = y * W + x;
    for (let c = 0; c < 3; c++) A[i * 4 + c] = clamp(Math.pow(Math.max(0, col[i * 3 + c]), 1 / 2.2) * 255, 0, 255);
    A[i * 4 + 3] = 255;
    const xl = (x - 1 + W) % W, xr = (x + 1) % W;
    const yd = wrapY ? (y - 1 + H) % H : Math.max(0, y - 1), yu = wrapY ? (y + 1) % H : Math.min(H - 1, y + 1);
    const dx = (hh[y * W + xr] - hh[y * W + xl]) * nStr, dy = (hh[yu * W + x] - hh[yd * W + x]) * nStr;
    const len = Math.hypot(dx, dy, 1);
    Nn[i * 4] = (-dx / len * 0.5 + 0.5) * 255; Nn[i * 4 + 1] = (-dy / len * 0.5 + 0.5) * 255; Nn[i * 4 + 2] = (1 / len * 0.5 + 0.5) * 255; Nn[i * 4 + 3] = 255;
    O[i * 4] = 255; O[i * 4 + 1] = clamp(ro[i], 0.03, 1) * 255; O[i * 4 + 2] = clamp(me[i], 0, 1) * 255; O[i * 4 + 3] = 255;
  }
  return { map: dtex(A, W, H, true, wrapT), normalMap: dtex(Nn, W, H, false, wrapT), ormMap: dtex(O, W, H, false, wrapT) };
}

const TEX = {};

// Moonlit sky as an equirectangular environment, so bronze, iron and glass have
// something to reflect (the game has no scene environment).
function envTex() {
  if (TEX.env) return TEX.env;
  const W = 128, H = 64, data = new Uint8Array(W * H * 4);
  const md = V3(-0.45, 0.42, -0.78).normalize(), d = V3();
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const u = (x + 0.5) / W, v = (y + 0.5) / H;
    const ph = (u - 0.5) * TAU, th = (v - 0.5) * Math.PI;
    d.set(Math.cos(ph) * Math.cos(th), Math.sin(th), Math.sin(ph) * Math.cos(th));
    let r, g, b;
    if (d.y < 0) { const k = smoothstep(0, -0.25, d.y); r = 62 - k * 40; g = 64 - k * 44; b = 70 - k * 54; }
    else { const k = Math.pow(d.y, 0.6); r = 74 - k * 44; g = 82 - k * 46; b = 98 - k * 48; }
    const c = Math.max(0, d.dot(md));
    const glow = Math.pow(c, 40) * 0.9 + Math.pow(c, 6) * 0.22 + (c > 0.9993 ? 2.5 : 0);
    r += glow * 170; g += glow * 180; b += glow * 200;
    const n = NZ.fbm(u * 8, v * 6, 3) * (d.y > 0.05 ? 10 : 4);
    const i = (y * W + x) * 4;
    data[i] = clamp(r + n, 0, 255); data[i + 1] = clamp(g + n, 0, 255); data[i + 2] = clamp(b + n * 1.1, 0, 255); data[i + 3] = 255;
  }
  const t = new THREE.DataTexture(data, W, H, THREE.RGBAFormat);
  t.mapping = THREE.EquirectangularReflectionMapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.magFilter = THREE.LinearFilter; t.minFilter = THREE.LinearFilter;
  t.needsUpdate = true;
  return (TEX.env = t);
}

// Cast bronze for the bell (lathe UVs: u around, v from mouth to crown): dark
// warm metal, a little hammer pitting, grey-green patina gathered on the
// shoulder and crown and running down in streaks, the sound bow worn brighter.
function bellTex() {
  if (TEX.bell) return TEX.bell;
  TEX.bell = bake(256, 256, (u, v, o) => {
    const n = NZ.fbm(u * 6, v * 5, 4, 6) * 0.5 + 0.5;
    const pit = NZ.worley(u * 48, v * 30, 48).d1;
    const streak = NZ.fbm(u * 36, v * 1.6 + 3, 4, 36) * 0.5 + 0.5;
    const crown = smoothstep(0.55, 0.95, v);
    const pat = clamp(crown * 0.85 + smoothstep(0.55, 0.78, streak) * smoothstep(0.08, 0.6, v) * 0.75 + smoothstep(0.62, 0.8, n) * 0.35, 0, 1);
    const worn = smoothstep(0.14, 0.02, v);
    const k = 0.75 + n * 0.4 + worn * 0.35;
    let r = 0.27 * k, g = 0.17 * k, b = 0.085 * k;
    r += (0.085 - r) * pat; g += (0.13 - g) * pat; b += (0.11 - b) * pat;
    o.r = r; o.g = g; o.b = b;
    o.h = pit * 0.25 + pat * 0.35 + n * 0.1;
    o.rough = 0.36 + pat * 0.5 + (1 - n) * 0.08;
    o.metal = 0.9 - pat * 0.75;
  }, 3);
  return TEX.bell;
}

// Emission ramp for candles: lathe/capsule v runs bottom (0) to top (1), so
// the wax glows near the flame like a lit candle's translucent rim.
function waxGlowTex() {
  if (TEX.waxGlow) return TEX.waxGlow;
  const H = 64, d = new Uint8Array(4 * H * 4);
  for (let y = 0; y < H; y++) { const v = (y + 0.5) / H, k = Math.pow(smoothstep(0.5, 1.0, v), 1.6) * 255; for (let x = 0; x < 4; x++) { const i = (y * 4 + x) * 4; d[i] = k; d[i + 1] = k; d[i + 2] = k; d[i + 3] = 255; } }
  const t = new THREE.DataTexture(d, 4, H, THREE.RGBAFormat);
  t.colorSpace = THREE.SRGBColorSpace; t.magFilter = THREE.LinearFilter; t.minFilter = THREE.LinearFilter; t.needsUpdate = true;
  return (TEX.waxGlow = t);
}
const flatUV = (g) => { const uv = g.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, 0.5, 0.02); return g; };

// Lombardic stroke font for the bell's inscription (grid: 6 units tall, y up).
const ell = (cx, cy, rx, ry, a0, a1, n) => Array.from({ length: n + 1 }, (_, k) => { const a = (a0 + (a1 - a0) * k / n) * Math.PI / 180; return [cx + Math.cos(a) * rx, cy + Math.sin(a) * ry]; });
const GLYPH = {
  V: [4, [[[0, 6], [2, 0], [4, 6]]]],
  I: [2, [[[1, 0], [1, 6]], [[0, 0], [2, 0]], [[0, 6], [2, 6]]]],
  O: [4, [ell(2, 3, 2, 3, 0, 360, 16)]],
  S: [4, [[[3.8, 5.2], [3, 6], [1, 6], [0.2, 5.1], [0.4, 3.9], [2, 3.1], [3.6, 2.3], [3.9, 1], [3, 0], [1, 0], [0.1, 0.9]]]],
  C: [4, [ell(2.2, 3, 2.2, 3, 45, 315, 12)]],
  M: [5, [[[0, 0], [0.4, 6], [2.5, 1.6], [4.6, 6], [5, 0]]]],
  R: [4, [[[0, 0], [0, 6], [2.8, 6], [3.8, 5.1], [3.8, 4], [2.8, 3.1], [0, 3.1]], [[2, 3.1], [4, 0]]]],
  T: [4, [[[0, 6], [4, 6]], [[2, 6], [2, 0]]]],
  P: [4, [[[0, 0], [0, 6], [2.8, 6], [3.8, 5.1], [3.8, 4], [2.8, 3.1], [0, 3.1]]]],
  L: [3.6, [[[0, 6], [0, 0], [3.6, 0]]]],
  A: [4, [[[0, 0], [2, 6], [4, 0]], [[0.8, 2.3], [3.2, 2.3]]]],
  N: [4, [[[0, 0], [0, 6], [4, 0], [4, 6]]]],
  G: [4.4, [ell(2.2, 3, 2.2, 3, 45, 330, 12), [[2.4, 2.6], [4.3, 2.6], [4.3, 0.6]]]],
  F: [3.6, [[[3.6, 6], [0, 6], [0, 0]], [[0, 3.1], [2.8, 3.1]]]],
  '+': [4, [[[2, 0.3], [2, 5.7]], [[0, 3], [4, 3]]]],
};
const INSCRIPTION = '+ VIVOS VOCO + MORTVOS PLANGO + FVLGVRA FRANGO ';

function inscriptionTex() {
  if (TEX.insc) return TEX.insc;
  const W = 2048, H = 64, unit = 7, gap = 1.7;
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const g = c.getContext('2d');
  g.fillStyle = '#000'; g.fillRect(0, 0, W, H);
  g.fillStyle = g.strokeStyle = '#fff'; g.lineCap = 'round'; g.lineJoin = 'round'; g.lineWidth = unit * 0.95;
  g.fillRect(0, 3, W, 3); g.fillRect(0, H - 6, W, 3);
  let nat = 0, spaces = 0;
  for (const ch of INSCRIPTION) { if (ch === ' ') { nat += 3; spaces++; } else nat += GLYPH[ch][0] + gap; }
  const extra = (W / unit - nat) / spaces;
  let x0 = 4;
  const base = H - 11;
  for (const ch of INSCRIPTION) {
    if (ch === ' ') { x0 += (3 + extra) * unit; continue; }
    const [w, strokes] = GLYPH[ch];
    for (const st of strokes) {
      g.beginPath();
      st.forEach(([sx, sy], k) => { const X = x0 + sx * unit, Y = base - sy * unit; if (k) g.lineTo(X, Y); else g.moveTo(X, Y); });
      g.stroke();
    }
    x0 += (w + gap) * unit;
  }
  const img = g.getImageData(0, 0, W, H).data;
  const hgt = new Float32Array(W * H);
  // data row 0 is v = 0 (bottom), so flip the canvas rows; soften with a 3x3 blur
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    let s = 0;
    for (let oy = -1; oy <= 1; oy++) for (let ox = -1; ox <= 1; ox++) {
      const cy = clamp(H - 1 - y + oy, 0, H - 1), cx = (x + ox + W) % W;
      s += img[(cy * W + cx) * 4];
    }
    hgt[y * W + x] = s / (9 * 255);
  }
  TEX.insc = bake(W, H, (u, v, o, x, y) => {
    const h = hgt[y * W + x];
    const n = NZ.fbm(u * 60, v * 3, 3) * 0.5 + 0.5;
    const ver = clamp(0.55 + NZ.fbm(u * 18 + 3, v * 2, 3) * 0.6, 0, 1) * (1 - h);
    o.r = 0.44 * h + (0.12 + n * 0.05) * (1 - h); o.g = 0.29 * h + (0.17 + n * 0.04) * (1 - h); o.b = 0.13 * h + (0.13 + n * 0.03) * (1 - h);
    o.r = o.r * (1 - ver * 0.4); o.g = o.g * (1 - ver * 0.1); o.b *= 1 - ver * 0.15;
    o.h = h * 0.9 + n * 0.05;
    o.rough = 0.35 + (1 - h) * 0.5;
    o.metal = 0.25 + h * 0.65;
  }, 5, THREE.ClampToEdgeWrapping);
  return TEX.insc;
}

function ropeTex() {
  if (TEX.rope) return TEX.rope;
  TEX.rope = bake(32, 64, (u, v, o) => {
    const s = ((u * 3 + v * 1) % 1 + 1) % 1;
    const strand = Math.pow(Math.sin(s * Math.PI), 0.6);
    const fib = NZ.noise(u * 40 + v * 13, v * 50) * 0.5 + 0.5;
    const k = 0.45 + strand * 0.45 + fib * 0.15;
    o.r = 0.34 * k; o.g = 0.28 * k; o.b = 0.18 * k; o.h = strand * 0.7 + fib * 0.2; o.rough = 1;
  }, 3);
  return TEX.rope;
}

function sallyTex() {
  if (TEX.sally) return TEX.sally;
  const cols = [[0.2, 0.028, 0.022], [0.38, 0.34, 0.27], [0.03, 0.04, 0.1]];
  TEX.sally = bake(32, 64, (u, v, o) => {
    const s = ((u + v * 2) * 3 % 3 + 3) % 3, band = Math.floor(s), f = s - band;
    const fuzz = NZ.noise(u * 50, v * 90) * 0.5 + 0.5;
    const c = cols[band], k = 0.75 + fuzz * 0.35;
    o.r = c[0] * k; o.g = c[1] * k; o.b = c[2] * k;
    o.h = smoothstep(0, 0.08, f) * smoothstep(1, 0.92, f) * 0.5 + fuzz * 0.4; o.rough = 1;
  }, 2);
  return TEX.sally;
}

// Glossy black body feathers: overlapping rounded scales with fine barbs.
function featherTex() {
  if (TEX.feather) return TEX.feather;
  TEX.feather = bake(128, 128, (u, v, o) => {
    const fy = v * 30, row = Math.floor(fy), cy = fy - row;
    const fx = u * 28 + (row % 2) * 0.5, cx = fx - Math.floor(fx);
    const d = Math.hypot((cx - 0.5) * 1.1, cy * 0.9);
    const edge = smoothstep(0.62, 0.5, d);
    const barb = Math.sin((cx * 9 + cy * 4) * TAU) * 0.5 + 0.5;
    const n = NZ.noise(u * 20, v * 20) * 0.5 + 0.5;
    const k = 0.008 + edge * 0.005 + barb * 0.002 + n * 0.005;
    o.r = k * 0.92; o.g = k * 0.95; o.b = k * 1.2;
    o.h = edge * (1 - cy) * 0.45 + barb * 0.05;
    o.rough = 0.42 + (1 - edge) * 0.15 + n * 0.08;
  }, 2.2);
  return TEX.feather;
}

// Wing sheet: u along the span, v across the chord (v = 1 at the leading edge).
function wingTex() {
  if (TEX.wing) return TEX.wing;
  TEX.wing = bake(128, 128, (u, v, o) => {
    const n = NZ.noise(u * 24, v * 24) * 0.5 + 0.5;
    let h, k;
    if (v > 0.64) {
      const fy = (v - 0.64) * 30, row = Math.floor(fy), cy = fy - row;
      const fx = u * 16 + (row % 2) * 0.5, cx = fx - Math.floor(fx);
      const e = smoothstep(0.6, 0.45, Math.hypot(cx - 0.5, cy));
      h = e * (1 - cy); k = 0.012 + e * 0.01;
    } else {
      const f = u * 11 + v * 1.5, cx = f - Math.floor(f);
      const groove = smoothstep(0.0, 0.08, cx) * smoothstep(1.0, 0.9, cx);
      const shaft = smoothstep(0.06, 0.0, Math.abs(cx - 0.42));
      const barb = Math.sin((cx * 7 - v * 18) * TAU) * 0.5 + 0.5;
      h = groove * 0.7 + shaft * 0.3 + barb * 0.06; k = 0.01 + groove * 0.012 + shaft * 0.012;
    }
    k += n * 0.005;
    o.r = k * 0.9; o.g = k * 0.94; o.b = k * 1.3; o.h = h; o.rough = 0.36 + n * 0.12;
  }, 4);
  return TEX.wing;
}

// Black eye with a painted catch-light (front of a SphereGeometry is u = 0.25).
function eyeTex() {
  if (TEX.eye) return TEX.eye;
  const W = 64, H = 32, data = new Uint8Array(W * H * 4);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const u = (x + 0.5) / W, v = (y + 0.5) / H, i = (y * W + x) * 4;
    const d = Math.hypot((u - 0.29) * 2, v - 0.66);
    const gl = smoothstep(0.075, 0.035, d), ring = smoothstep(0.2, 0.12, Math.hypot((u - 0.25) * 2, v - 0.5)) * 0.06;
    const c = Math.max(gl, ring) * 255 + 3;
    data[i] = c; data[i + 1] = c; data[i + 2] = c * 0.97; data[i + 3] = 255;
  }
  const t = new THREE.DataTexture(data, W, H, THREE.RGBAFormat);
  t.colorSpace = THREE.SRGBColorSpace; t.magFilter = THREE.LinearFilter; t.minFilter = THREE.LinearFilter; t.needsUpdate = true;
  return (TEX.eye = t);
}

// ================================================================ materials
// Extra materials, built once per material set and shared by every instance.
const LIBS = new WeakMap();
function lib(M) {
  let L = LIBS.get(M);
  if (L) return L;
  const T = M.T, env = envTex(), I = inscriptionTex(), R = ropeTex(), S = sallyTex(), F = featherTex(), Wt = wingTex();
  const std = (o) => new THREE.MeshStandardMaterial(o);
  const BT = bellTex();
  const bellBronze = std({ map: BT.map, normalMap: BT.normalMap, roughnessMap: BT.ormMap, metalnessMap: BT.ormMap, roughness: 1, metalness: 1, envMap: env, envMapIntensity: 0.9 });
  const bronzeEnv = std({ color: 0x8a5c30, roughness: 0.34, metalness: 0.9, normalMap: T.bronze.normalMap, normalScale: new THREE.Vector2(0.35, 0.35), envMap: env, envMapIntensity: 1.2 });
  const ironEnv = M.iron.clone(); ironEnv.envMap = env; ironEnv.envMapIntensity = 0.7;
  L = {
    env, bellBronze, bronzeEnv, ironEnv,
    band: std({ map: I.map, normalMap: I.normalMap, roughnessMap: I.ormMap, metalnessMap: I.ormMap, roughness: 1, metalness: 1, envMap: env, envMapIntensity: 1.0 }),
    rope: std({ map: R.map, normalMap: R.normalMap, normalScale: new THREE.Vector2(0.8, 0.8), roughness: 1, metalness: 0 }),
    sally: std({ map: S.map, normalMap: S.normalMap, roughness: 1, metalness: 0 }),
    bone: std({ color: 0x7c705a, roughness: 0.8, normalMap: T.statue.normalMap, normalScale: new THREE.Vector2(0.6, 0.6) }),
    wax: std({ color: 0xa8987a, roughness: 0.55, emissive: 0xff9440, emissiveMap: waxGlowTex(), emissiveIntensity: 0.55 }),
    clay: std({ color: 0x5e3a26, roughness: 0.82, side: THREE.DoubleSide, normalMap: T.stoneClean.normalMap, normalScale: new THREE.Vector2(0.35, 0.35) }),
    petal: std({ color: 0x3a1510, roughness: 0.9, side: THREE.DoubleSide }),
    rag: std({ color: 0x9a9080, map: T.cloth.map, normalMap: T.cloth.normalMap, roughness: 1, side: THREE.DoubleSide }),
    ragRed: std({ color: 0x6a1c16, map: T.cloth.map, normalMap: T.cloth.normalMap, roughness: 1, side: THREE.DoubleSide }),
    cattail: std({ color: 0x3c2616, roughness: 0.95, normalMap: T.bark.normalMap }),
    mud: std({ color: 0x140e09, roughness: 0.3, metalness: 0, normalMap: T.ground.normalMap, vertexColors: true, transparent: true, depthWrite: false }),
    feather: new THREE.MeshPhysicalMaterial({ map: F.map, normalMap: F.normalMap, roughnessMap: F.ormMap, roughness: 1, metalness: 0, iridescence: 0.25, iridescenceIOR: 1.35, iridescenceThicknessRange: [180, 420], envMap: env, envMapIntensity: 0.6 }),
    wing: new THREE.MeshPhysicalMaterial({ map: Wt.map, normalMap: Wt.normalMap, roughnessMap: Wt.ormMap, roughness: 1, metalness: 0, iridescence: 0.25, iridescenceIOR: 1.35, iridescenceThicknessRange: [180, 420], envMap: env, envMapIntensity: 0.6, side: THREE.DoubleSide }),
    keratin: std({ color: 0x18181a, roughness: 0.32, metalness: 0, envMap: env, envMapIntensity: 0.6 }),
    eye: new THREE.MeshBasicMaterial({ map: eyeTex() }),
    velvet: std({ color: 0x4a0c12, map: T.cloth.map, normalMap: T.cloth.normalMap, normalScale: new THREE.Vector2(0.5, 0.5), roughness: 0.95 }),
    darkWood: std({ color: 0x2a1e16, map: T.planks.map, normalMap: T.planks.normalMap, roughness: 0.95 }),
    linen: std({ color: 0xe0d8c4, map: T.cloth.map, normalMap: T.cloth.normalMap, normalScale: new THREE.Vector2(0.7, 0.7), roughness: 0.95 }),
    flaskGlass: std({ color: 0xd8e4ea, roughness: 0.06, metalness: 0, transparent: true, opacity: 0.32, envMap: env, envMapIntensity: 1.6, depthWrite: false }),
    holyLiquid: std({ color: 0x9cc0ec, emissive: 0x4f86c8, emissiveIntensity: 0.9, roughness: 0.15, transparent: true, opacity: 0.85 }),
    blood: std({ color: 0x3a0806, roughness: 0.6 }),
    cork: std({ color: 0x6a4a2e, roughness: 0.95, normalMap: T.ground.normalMap }),
    sealWax: std({ color: 0x6e0f0c, roughness: 0.45 }),
    lead: std({ color: 0x4a4c50, roughness: 0.5, metalness: 0.6, envMap: env, envMapIntensity: 0.5 }),
  };
  LIBS.set(M, L);
  return L;
}

// ================================================================ shared small parts
// A melted votive candle (wax body + drips into `wax`, wick into `wick`).
// Returns the wick tip position; flames sit ~0.4 x their height above it.
function addCandle(B, wax, wick, x, y, z, h, r, rnd, drips = 3) {
  const prof = [[0, 0], [r * 1.3, 0], [r * 1.1, 0.006], [r, 0.02], [r * 0.985, h * 0.62], [r, h - 0.006], [r * 0.9, h + 0.002], [r * 0.7, h - 0.004], [0, h - 0.009]];
  B.add(wax, xf(lathe(prof, 8), x, y, z, 0, rnd() * TAU, 0));
  for (let k = 0; k < drips; k++) {
    const a = rnd() * TAU, len = 0.012 + rnd() * h * 0.45, dr = 0.0032 + rnd() * 0.003;
    B.add(wax, xf(new THREE.CapsuleGeometry(dr, len, 1, 4), x + Math.cos(a) * (r + dr * 0.3), y + h - 0.006 - len / 2 - dr, z + Math.sin(a) * (r + dr * 0.3)));
  }
  B.add(wick, xf(new THREE.CylinderGeometry(0.0016, 0.0022, 0.02, 4), x, y + h + 0.002, z, (rnd() - 0.5) * 0.4, 0, (rnd() - 0.5) * 0.4));
  return V3(x, y + h + 0.012, z);
}

function waxPool(B, wax, x, y, z, r, rnd) {
  B.add(wax, flatUV(xf(new THREE.CylinderGeometry(r * 0.62, r * 0.66, 0.004, 10), x, y + 0.002, z)));
  for (let k = 0; k < 4; k++) { const a = rnd() * TAU, d = r * (0.4 + rnd() * 0.4); B.add(wax, flatUV(xf(sphere(r * (0.22 + rnd() * 0.2), 6, 3), x + Math.cos(a) * d, y, z + Math.sin(a) * d, 0, rnd() * 3, 0, 1, 0.12, 0.7))); }
}

function boneGeo(len, r) {
  return lathe([[0, 0], [r * 1.2, 0.003], [r * 1.55, len * 0.05], [r * 1.25, len * 0.12], [r, len * 0.22], [r * 0.88, len * 0.5], [r, len * 0.78], [r * 1.25, len * 0.88], [r * 1.5, len * 0.95], [r * 1.1, len - 0.002], [0, len]], 6);
}

// Human skull (no mandible), origin at its base, facing +z. Cranium, face,
// brow ridge, cheekbones, upper teeth; sockets and nasal hole as dark inserts.
function skullGeo(s = 1) {
  const cr = sphere(1, 16, 12).scale(0.068, 0.066, 0.088).translate(0, 0.088, -0.012);
  const face = sphere(1, 12, 8).scale(0.05, 0.042, 0.04).translate(0, 0.046, 0.056);
  const brow = new THREE.CapsuleGeometry(0.0115, 0.056, 2, 6).rotateZ(Math.PI / 2).translate(0, 0.077, 0.071);
  const cheeks = [-1, 1].map((x) => sphere(1, 6, 5).scale(0.016, 0.011, 0.024).translate(x * 0.043, 0.05, 0.05));
  const max = new THREE.BoxGeometry(0.04, 0.016, 0.02).translate(0, 0.021, 0.08);
  const teeth = new THREE.BoxGeometry(0.036, 0.01, 0.012).translate(0, 0.01, 0.085);
  const bone = merge([cr, face, brow, ...cheeks, max, teeth]);
  const holes = merge([sphere(0.0165, 8, 6).translate(-0.023, 0.058, 0.081), sphere(0.0165, 8, 6).translate(0.023, 0.058, 0.081), xf(new THREE.ConeGeometry(0.009, 0.022, 5), 0, 0.037, 0.093, Math.PI)]);
  for (const q of [bone, holes]) q.scale(s, s, s);
  return { bone, holes };
}

function bolt(B, mat, x, y, z, axis = 'z', r = 0.013, l = 0.014) {
  const g = new THREE.CylinderGeometry(r, r, l, 6);
  if (axis === 'z') g.rotateX(Math.PI / 2); else if (axis === 'x') g.rotateZ(Math.PI / 2);
  B.add(mat, g.translate(x, y, z));
}

// ================================================================ Mourning Bell
// Outer and inner bell profile (radius, height above the mouth), thick lip and
// sound bow at the bottom, waist, shoulder, flat crown.
const BELL_OUT = [[0.445, 0], [0.452, 0.012], [0.455, 0.03], [0.448, 0.052], [0.43, 0.076], [0.4, 0.11], [0.362, 0.16], [0.332, 0.22], [0.311, 0.29], [0.297, 0.37], [0.288, 0.45], [0.281, 0.52], [0.272, 0.575], [0.256, 0.605], [0.226, 0.626], [0.16, 0.638], [0.08, 0.643], [0, 0.645]];
const BELL_IN = [[0, 0.6], [0.1, 0.596], [0.18, 0.585], [0.226, 0.565], [0.246, 0.53], [0.253, 0.47], [0.259, 0.4], [0.269, 0.32], [0.29, 0.24], [0.32, 0.17], [0.355, 0.115], [0.385, 0.07], [0.4, 0.035], [0.405, 0]];
function bellR(yb) {
  for (let k = 0; k < BELL_OUT.length - 1; k++) {
    const [r0, y0] = BELL_OUT[k], [r1, y1] = BELL_OUT[k + 1];
    if (yb >= y0 && yb <= y1) return r0 + (r1 - r0) * (yb - y0) / (y1 - y0);
  }
  return 0;
}

export function buildBell(M) {
  const L = lib(M);
  const g = new THREE.Group();
  const rnd = mulberry32(randSeed());
  const B = new MergeBucket();
  const TOP = 0.46;
  // ---- stepped, chipped plinth (1.7 m block on a wider footing course)
  B.add(M.stone, xf(roughBox(1.86, 0.17, 1.86, { res: 0.26, amp: 0.008, chip: 0.05, seed: rnd() * 90, band: 0.12, corners: [[1, 1, 1, 0.07]] }), 0, 0.065, 0), 0.55);
  B.add(M.stoneClean, xf(roughBox(1.7, 0.27, 1.7, { res: 0.22, amp: 0.006, chip: 0.04, seed: rnd() * 90, band: 0.1, corners: [[-1, 1, 1, 0.05]] }), 0, 0.27, 0), 0.6);
  B.add(M.stoneClean, xf(roughBox(1.78, 0.07, 1.78, { res: 0.2, amp: 0.003, chip: 0.03, seed: rnd() * 90, band: 0.05, corners: [[1, 1, 1, 0.08], [-1, 1, -1, 0.05]] }), 0, 0.425, 0), 0.6);
  B.add(M.stoneClean, xf(roughBox(0.19, 0.08, 0.14, { res: 0.05, chip: 0.03, seed: 7 }), 1.02, 0.025, 1.0, 0.2, 0.7, 0.15), 0.6);
  B.add(M.stone, xf(roughBox(0.12, 0.06, 0.1, { res: 0.05, chip: 0.02, seed: 9 }), -1.06, 0.015, 0.98, 0.1, 1.9, -0.2), 0.6);

  // ---- carved timber frame: posts on sole plates with raking struts, an
  // ogee-ended crossbeam on corbels, turned finials and an iron ring cross
  for (const sx of [-1, 1]) {
    const X = sx * 0.72;
    B.add(M.timber, bevBox(0.2, 3.36 - TOP + 0.02, 0.2, 0.022, X, (TOP - 0.02 + 3.36) / 2, 0), 0.7);
    B.add(M.timber, bevBox(0.24, 0.15, 1.14, 0.02, X, TOP + 0.07, 0), 0.7);
    for (const sz of [-1, 1]) B.add(M.timber, beam(V3(X, 0.53, sz * 0.5), V3(X, 1.47, 0), 0.11, 0.11), 0.7);
    const cs = new THREE.Shape();
    cs.moveTo(sx * 0.82, 2.96); cs.lineTo(sx * 0.845, 2.96); cs.quadraticCurveTo(sx * 0.86, 3.16, sx * 0.975, 3.185); cs.lineTo(sx * 0.975, 3.21); cs.lineTo(sx * 0.82, 3.21); cs.closePath();
    B.add(M.timber, extrude(cs, 0.13, 0.008, 6), 0.7);
    B.add(M.timber, bevBox(0.17, 0.05, 0.17, 0.012, X, 3.47, 0), 0.7);
    B.add(M.timber, xf(lathe([[0, 0], [0.07, 0], [0.072, 0.03], [0.05, 0.05], [0.042, 0.08], [0.068, 0.12], [0.076, 0.16], [0.063, 0.205], [0.034, 0.235], [0.027, 0.26], [0.04, 0.275], [0.012, 0.36], [0, 0.37]], 8), X, 3.495, 0, 0, Math.PI / 8, 0), 0.7);
  }
  const cb = new THREE.Shape();
  cb.moveTo(-0.96, 3.43); cb.lineTo(0.96, 3.43); cb.lineTo(0.96, 3.33);
  cb.quadraticCurveTo(0.9, 3.33, 0.87, 3.28); cb.quadraticCurveTo(0.84, 3.225, 0.77, 3.225); cb.lineTo(-0.77, 3.225);
  cb.quadraticCurveTo(-0.84, 3.225, -0.87, 3.28); cb.quadraticCurveTo(-0.9, 3.33, -0.96, 3.33); cb.closePath();
  B.add(M.timber, extrude(cb, 0.24, 0.015, 6), 0.7);

  // ---- iron: bearings, strap plates, bolts, the ring cross, candle wicks
  for (const sx of [-1, 1]) {
    const X = sx * 0.72;
    B.add(M.iron, bevBox(0.05, 0.13, 0.16, 0.008, sx * 0.595, 3.02, 0));
    bolt(B, M.iron, sx * 0.595, 3.075, 0.085, 'z', 0.011); bolt(B, M.iron, sx * 0.595, 2.965, -0.085, 'z', 0.011);
    for (const sz of [-1, 1]) {
      B.add(M.iron, xf(new THREE.BoxGeometry(0.075, 0.3, 0.008), X, 3.04, sz * 0.104));
      B.add(M.iron, xf(new THREE.BoxGeometry(0.075, 0.19, 0.008), X, 3.33, sz * 0.124));
      B.add(M.iron, xf(new THREE.BoxGeometry(0.075, 0.26, 0.008), X, 0.74, sz * 0.104));
      for (const y of [2.95, 3.1, 3.29, 3.38, 0.66, 0.82]) bolt(B, M.iron, X, y, sz * (y > 3.2 ? 0.132 : 0.112), 'z');
      bolt(B, M.iron, X + sx * 0.122, 0.53, sz * 0.5, 'x', 0.012);
    }
  }
  B.add(M.iron, bevBox(0.12, 0.02, 0.1, 0.005, 0, 3.455, 0));
  B.add(M.iron, new THREE.BoxGeometry(0.03, 0.46, 0.03).translate(0, 3.69, 0));
  B.add(M.iron, new THREE.BoxGeometry(0.27, 0.03, 0.03).translate(0, 3.77, 0));
  B.add(M.iron, torus(0.078, 0.009, 4, 20).translate(0, 3.77, 0));
  for (const [x, y, rz] of [[0, 3.94, 0], [0.15, 3.77, -Math.PI / 2], [-0.15, 3.77, Math.PI / 2]]) B.add(M.iron, xf(new THREE.ConeGeometry(0.025, 0.05, 4), x, y, 0, 0, Math.PI / 4, rz));

  // ---- candles, wax and offerings at the plinth corners
  const candles = [];
  const flame = (p, k = 1) => { const f = new THREE.Sprite(M.flame); f.scale.set(0.06 * k, 0.12 * k, 1); f.position.set(p.x, p.y + 0.045 * k, p.z); g.add(f); candles.push(f); };
  const T0 = TOP - 0.004;
  // corner A (+x,+z): two candles, a stub, a wax pool spilling over the edge
  waxPool(B, L.wax, 0.68, T0, 0.7, 0.12, rnd);
  flame(addCandle(B, L.wax, M.iron, 0.68, T0, 0.7, 0.2, 0.032, rnd, 4));
  flame(addCandle(B, L.wax, M.iron, 0.57, T0, 0.78, 0.13, 0.026, rnd, 3));
  flame(addCandle(B, L.wax, M.iron, 0.8, T0, 0.62, 0.07, 0.03, rnd, 2), 0.85);
  for (const [x, len] of [[0.63, 0.035], [0.7, 0.06], [0.76, 0.025]]) {
    B.add(L.wax, flatUV(xf(new THREE.CapsuleGeometry(0.0065, len, 1, 4), x, TOP - 0.004 - len / 2, 0.892, 0, 0, 0, 1, 1, 0.7)));
    B.add(L.wax, flatUV(xf(sphere(0.009, 5, 4), x, TOP - 0.008 - len, 0.893, 0, 0, 0, 1, 1.25, 0.7)));
  }
  B.add(L.wax, flatUV(xf(new THREE.CapsuleGeometry(0.009, 0.1, 1, 4), 0.7, TOP + 0.001, 0.835, Math.PI / 2, 0, 0, 1.2, 1, 0.3)));
  // corner B (-x,+z): a cracked clay bowl of coins, its shard, one candle
  {
    const prof = [[0, 0], [0.04, 0], [0.066, 0.012], [0.086, 0.035], [0.096, 0.056], [0.098, 0.062], [0.091, 0.062], [0.083, 0.043], [0.061, 0.022], [0.03, 0.011], [0, 0.009]];
    const p0 = 0.5, gap = 0.75;
    B.add(L.clay, xf(lathe(prof, 18, 1, 1, p0, TAU - gap), -0.64, TOP, 0.64, 0, 0.3, 0.05));
    const cut = new THREE.Shape(prof.map(([r, y]) => new THREE.Vector2(r, y)));
    for (const ph of [p0, p0 + TAU - gap]) B.add(L.clay, xf(new THREE.ShapeGeometry(cut).rotateY(ph - Math.PI / 2), -0.64, TOP, 0.64, 0, 0.3, 0.05));
    B.add(L.clay, xf(lathe(prof.slice(0, 6).concat([[0.088, 0.062], [0.08, 0.04], [0.06, 0.02]]), 3, 1, 1, 0, gap * 0.8), -0.5, TOP + 0.045, 0.58, Math.PI / 2 + 0.3, 1.1, 0));
    for (const [x, z, y, t] of [[-0.64, 0.63, 0.013, 0.2], [-0.62, 0.66, 0.016, 0.5], [-0.66, 0.65, 0.014, -0.3], [-0.52, 0.72, 0.001, 0], [-0.75, 0.55, 0.001, 0.1]]) B.add(M.bronze, xf(new THREE.CylinderGeometry(0.012, 0.012, 0.0025, 10), x, TOP + y, z, t, 0, t * 0.5));
    flame(addCandle(B, L.wax, M.iron, -0.48, T0, 0.78, 0.15, 0.027, rnd, 3));
  }
  // corner C (+x,-z): a skull crowned with a candle stub, two long bones
  {
    const sk = skullGeo(1);
    const place = (q) => xf(q, 0.62, TOP - 0.004, -0.66, -0.12, 2.35, 0.05);
    B.add(L.bone, place(sk.bone)); B.add(M.black, place(sk.holes));
    const top = TOP + 0.112;
    flame(addCandle(B, L.wax, M.iron, 0.62, top, -0.664, 0.06, 0.022, rnd, 2), 0.85);
    for (let k = 0; k < 4; k++) { const a = k * 1.7 + 0.4; B.add(L.wax, xf(new THREE.CapsuleGeometry(0.005, 0.03 + k * 0.012, 1, 4), 0.62 + Math.cos(a) * 0.036, top - 0.025 - k * 0.006, -0.664 + Math.sin(a) * 0.036, Math.sin(a) * 0.5, 0, -Math.cos(a) * 0.5)); }
    B.add(L.bone, xf(boneGeo(0.36, 0.013), 0.34, TOP + 0.02, -0.8, 0, 0.25, Math.PI / 2));
    B.add(L.bone, xf(boneGeo(0.27, 0.011), 0.47, TOP + 0.017, -0.5, 0, -0.5, Math.PI / 2 + 0.05));
  }
  // corner D (-x,-z): a bundle of dried roses tied with twine, two candles
  {
    const tie = V3(-0.42, TOP + 0.012, -0.72);
    for (let k = 0; k < 9; k++) {
      const a = Math.PI + 0.32 + (k - 4) * 0.055 + (rnd() - 0.5) * 0.04, len = 0.2 + rnd() * 0.07;
      const end = V3(tie.x + Math.cos(a) * len, TOP + 0.018 + rnd() * 0.016, tie.z + Math.sin(a) * len * 0.9 + 0.05);
      B.add(M.reed, rod(V3(tie.x + 0.06, tie.y - 0.004, tie.z - 0.01), end, 0.0036, 0.003, 4));
      if (k % 3 !== 1) {
        B.add(L.petal, xf(sphere(0.012 + rnd() * 0.004, 6, 5), end.x, end.y + 0.004, end.z, rnd(), rnd(), rnd(), 1, 0.8, 1.2));
        B.add(L.petal, xf(new THREE.ConeGeometry(0.009, 0.018, 5), end.x - Math.cos(a) * 0.01, end.y + 0.003, end.z - Math.sin(a) * 0.01, 0, -a, Math.PI / 2));
      } else B.add(M.reed, xf(sphere(0.007, 5, 4), end.x, end.y, end.z));
      if (k % 2) B.add(L.petal, xf(new THREE.ConeGeometry(0.008, 0.035, 3), (tie.x + end.x) / 2, end.y - 0.003, (tie.z + end.z) / 2, Math.PI / 2, -a + 0.6, 0, 1, 1, 0.25));
    }
    B.add(L.rope, xf(torus(0.02, 0.0045, 4, 10), tie.x + 0.02, tie.y + 0.006, tie.z, 0, Math.PI / 2 + 0.32, 0));
    flame(addCandle(B, L.wax, M.iron, -0.4, T0, -0.62, 0.17, 0.028, rnd, 3));
    flame(addCandle(B, L.wax, M.iron, -0.24, T0, -0.79, 0.1, 0.03, rnd, 3));
    waxPool(B, L.wax, -0.24, T0, -0.79, 0.07, rnd);
  }
  B.build(g);

  // ---- the bell, on a swing pivot. The pivot is turned a quarter about y so
  // its animated rotation.z swings the bell on an axle running between the
  // posts (toward the +-z ringing slots), like a real bell frame.
  const sw = pivot(g, 0, 3.02, 0);
  sw.rotation.y = Math.PI / 2;
  const Y0 = -0.74;
  const SB = new MergeBucket();
  SB.add(L.bellBronze, lathe(BELL_OUT.map(([r, y]) => [r, y + Y0]), 40));
  SB.add(L.bellBronze, lathe(BELL_IN.map(([r, y]) => [r, y + Y0]), 40, 1, 0.12));
  SB.add(L.bellBronze, lathe([[0.405, Y0], [0.445, Y0]], 40, 1, 0.02));
  for (const [yb, tb] of [[0.088, 0.007], [0.33, 0.0045], [0.494, 0.005], [0.592, 0.005], [0.613, 0.006]]) SB.add(L.bellBronze, xf(torus(bellR(yb) + tb * 0.3, tb, 4, 40), 0, yb + Y0, 0, Math.PI / 2));
  for (let k = 0; k < 6; k++) { const a = (k / 6) * TAU + 0.26; SB.add(L.bellBronze, xf(torus(0.03, 0.011, 4, 8, Math.PI), Math.cos(a) * 0.085, Y0 + 0.641, -Math.sin(a) * 0.085, 0, a, 0)); }
  SB.add(L.bellBronze, xf(torus(0.036, 0.013, 4, 9, Math.PI), 0, Y0 + 0.643, 0, 0, Math.PI / 2, 0));
  // raised crosses on the waist, facing the ringing slots
  {
    const yb = 0.3, r = bellR(yb), tilt = Math.atan((bellR(yb - 0.03) - bellR(yb + 0.03)) / 0.06);
    for (const side of [1, -1]) {
      const cr = merge([new THREE.BoxGeometry(0.016, 0.085, 0.008), new THREE.BoxGeometry(0.056, 0.016, 0.008).translate(0, 0.014, 0)]);
      cr.rotateX(-tilt); cr.translate(0, yb + Y0, r + 0.002); cr.rotateY(side * Math.PI / 2);
      SB.add(L.bellBronze, cr);
    }
  }
  // headstock with iron straps, gudgeons, clapper staple
  {
    const hs = new THREE.Shape();
    hs.moveTo(-0.5, -0.05); hs.lineTo(0.5, -0.05); hs.lineTo(0.5, 0.05); hs.lineTo(0.42, 0.098); hs.lineTo(-0.42, 0.098); hs.lineTo(-0.5, 0.05); hs.closePath();
    SB.add(M.timber, extrude(hs, 0.19, 0.008, 1).rotateY(Math.PI / 2), 0.8);
    for (const zz of [-0.085, 0.085]) {
      for (const s of [-1, 1]) SB.add(M.iron, new THREE.BoxGeometry(0.008, 0.215, 0.034).translate(s * 0.1, -0.015, zz));
      SB.add(M.iron, new THREE.BoxGeometry(0.21, 0.008, 0.034).translate(0, 0.11, zz));
      SB.add(M.iron, rod(V3(-0.118, 0.03, zz), V3(0.118, 0.03, zz), 0.007, 0.007, 5));
      for (const s of [-1, 1]) bolt(SB, M.iron, s * 0.109, 0.03, zz, 'x', 0.014, 0.012);
    }
    for (const s of [-1, 1]) SB.add(M.iron, rod(V3(0, 0, s * 0.44), V3(0, 0, s * 0.6), 0.022, 0.022, 8));
    SB.add(M.iron, rod(V3(0, -0.13, 0), V3(0, -0.285, 0), 0.01, 0.01, 5));
    SB.add(M.iron, torus(0.019, 0.007, 4, 10).translate(0, -0.3, 0).rotateY(Math.PI / 2));
  }
  // half wheel on the headstock with the rope running in its groove
  const WZ = 0.545, WR = 0.55, A0 = (160 / 180) * Math.PI, ARC = (220 / 180) * Math.PI;
  {
    for (const dz of [-0.022, 0.022]) SB.add(M.timber, xf(torus(WR, 0.014, 4, 36, ARC), 0, 0, WZ + dz, 0, 0, A0), 0.8);
    SB.add(M.timber, xf(torus(0.524, 0.021, 5, 36, ARC), 0, 0, WZ, 0, 0, A0), 0.8);
    for (const deg of [215, 270, 325]) { const a = (deg / 180) * Math.PI; SB.add(M.timber, beam(V3(0, 0, WZ), V3(Math.cos(a) * 0.52, Math.sin(a) * 0.52, WZ), 0.042, 0.036), 0.8); }
    SB.add(M.timber, new THREE.CylinderGeometry(0.065, 0.065, 0.08, 10).rotateX(Math.PI / 2).translate(0, 0, WZ), 0.8);
    SB.add(M.iron, new THREE.CylinderGeometry(0.045, 0.045, 0.012, 8).rotateX(Math.PI / 2).translate(0, 0, WZ + 0.045));
    for (const a of [A0, A0 + ARC]) SB.add(M.iron, xf(new THREE.BoxGeometry(0.03, 0.05, 0.07), Math.cos(a) * 0.535, Math.sin(a) * 0.535, WZ, 0, 0, a));
    SB.add(L.rope, xf(torus(0.547, 0.013, 5, 20, (2 / 3) * Math.PI), 0, 0, WZ, 0, 0, Math.PI));
    const ta = (300 / 180) * Math.PI;
    SB.add(M.iron, xf(torus(0.02, 0.006, 4, 8), Math.cos(ta) * 0.53, Math.sin(ta) * 0.53, WZ, 0, Math.PI / 2, 0));
  }
  SB.build(sw);
  const band = mesh(lathe([0, 1, 2, 3, 4].map((k) => { const yb = 0.5 + k * 0.0225; return [bellR(yb) + 0.0025, yb + Y0]; }), 64), L.band, sw);
  band.castShadow = false;

  // clapper (pivot just under the crown staple; ball and flight stay inside
  // the bell even at the full post-toll swing)
  const clap = pivot(sw, 0, -0.3, 0);
  {
    const CB = new MergeBucket();
    CB.add(M.iron, torus(0.02, 0.0075, 4, 10));
    CB.add(M.iron, rod(V3(0, -0.02, 0), V3(0, -0.26, 0), 0.016, 0.012, 6));
    CB.add(M.iron, xf(sphere(0.045, 12, 8), 0, -0.29, 0));
    CB.add(M.iron, rod(V3(0, -0.32, 0), V3(0, -0.338, 0), 0.012, 0.01, 6));
    CB.add(M.iron, xf(sphere(0.014, 6, 5), 0, -0.338, 0));
    CB.build(clap);
  }

  // rope: leaves the wheel's groove tangentially and drops to a striped sally
  const rope = pivot(sw, -0.548, -0.05, WZ);
  {
    const RB = new MergeBucket();
    const rg = new THREE.CylinderGeometry(0.0135, 0.0135, 2.0, 6, 1).translate(0, -0.93, 0);
    const uv = rg.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setY(i, uv.getY(i) * 40);
    RB.add(L.rope, rg);
    RB.add(L.rope, xf(sphere(0.022, 7, 5), 0, -1.93, 0, 0, 0, 0, 1, 0.8, 1));
    RB.add(L.rope, new THREE.ConeGeometry(0.02, 0.07, 6).translate(0, -1.975, 0));
    RB.add(L.sally, lathe([[0.0135, -1.58], [0.03, -1.555], [0.037, -1.52], [0.038, -1.37], [0.037, -1.22], [0.03, -1.185], [0.0135, -1.16]], 12, 1, 3));
    RB.build(rope);
    // A real rope hangs plumb from the wheel while the bell swings: keep the
    // rope's rotation at the frame's own (no per-frame allocation), so only
    // its attachment point rides the wheel and its height is still animated.
    const plumb = (o) => { o.matrixWorld.copy(g.matrixWorld); const e = o.matrixWorld.elements, r = rope.matrixWorld.elements; e[12] = r[12]; e[13] = r[13]; e[14] = r[14]; };
    for (const m of rope.children) {
      m.frustumCulled = false;
      m.onBeforeRender = () => plumb(m);
      m.onBeforeShadow = (_r, _o, _c, shadowCam) => { plumb(m); m.modelViewMatrix.multiplyMatrices(shadowCam.matrixWorldInverse, m.matrixWorld); };
    }
  }

  // light, warm halo, and the holy bloom when the bell has been rung
  const light = new THREE.PointLight(0xffa050, 1.6, 9, 1.6);
  light.position.set(0, 1.0, 0); g.add(light);
  const halo = new THREE.Sprite(M.glow.clone()); halo.scale.set(3.5, 3.5, 1); halo.position.set(0, 1.0, 0); g.add(halo);
  const holy = new THREE.Sprite(M.glow.clone()); holy.material.color.set(0xfff0c8); holy.material.opacity = 0; holy.scale.set(7, 7, 1); holy.position.set(0, 3.2, 0); g.add(holy);
  g.traverse((o) => { if (o.isMesh) { o.castShadow = o !== band; o.receiveShadow = true; } });
  g.userData = { swing: sw, clap, rope, candles, light, halo, holy };
  return g;
}

// ================================================================ pallet
// Stands upright beside a gap (local X = passage direction, Y = length);
// rotation.x on the pivot swings it down across the gap toward local +Z.
// Z layout: back brace -0.078..-0.06, stringers -0.06..0, slats 0..0.026.
function bowY(g, len, ax, az) {
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) { const t = p.getY(i) / (len / 2); const k = 1 - t * t; p.setX(i, p.getX(i) + ax * k); p.setZ(i, p.getZ(i) + az * k); }
  g.computeVertexNormals();
  return g;
}
function bowX(g, len, ay, az) {
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) { const t = p.getX(i) / (len / 2); const k = 1 - t * t; p.setY(i, p.getY(i) + ay * k); p.setZ(i, p.getZ(i) + az * k); }
  g.computeVertexNormals();
  return g;
}

export function buildPallet(M) {
  const L = lib(M);
  const g = new THREE.Group();
  const p = pivot(g);
  const rnd = mulberry32(randSeed());
  const B = new MergeBucket();
  for (const sx of [-0.5, 0, 0.5]) {
    const st = bowY(roughBox(0.085, 1.92, 0.06, { res: 0.12, amp: 0.004, chip: 0.012, seed: rnd() * 40, band: 0.03, keepBottom: false }), 1.92, (rnd() - 0.5) * 0.024, (rnd() - 0.5) * 0.008);
    B.add(M.timber, xf(st, sx + (rnd() - 0.5) * 0.02, 0.975, -0.03, 0, 0, (rnd() - 0.5) * 0.012), 0.8);
  }
  B.add(M.timber, beam(V3(-0.53, 0.2, -0.069), V3(0.53, 1.74, -0.069), 0.085, 0.018), 0.8);
  const slats = [];
  for (let y = 0.05; ;) {
    const w = 0.11 + rnd() * 0.06;
    if (y + w > 1.93) break;
    slats.push([y + w / 2, w]);
    y += w + 0.024 + rnd() * 0.042;
  }
  const broken = 2 + Math.floor(rnd() * (slats.length - 4));
  const nails = (x, y, w) => { for (const s of [-0.28, 0.28]) B.add(M.iron, new THREE.CylinderGeometry(0.0075, 0.0075, 0.004, 6).rotateX(Math.PI / 2).translate(x + (rnd() - 0.5) * 0.01, y + s * w, 0.028)); };
  slats.forEach(([y, w], k) => {
    const len = 1.15 + rnd() * 0.09, ox = (rnd() - 0.5) * 0.05, rz = (rnd() - 0.5) * 0.05;
    if (k === broken) {
      // split board: the left part stays nailed, only a splintered stub of the
      // right part is left on the far stringer
      const bx = 0.04 + rnd() * 0.12, sd = rnd() * 50;
      const piece = (x0, x1, brkR, brkL) => {
        const pl = new THREE.BoxGeometry(x1 - x0, w, 0.024, 8, 2, 1);
        const pp = pl.attributes.position, hx = (x1 - x0) / 2;
        for (let i = 0; i < pp.count; i++) {
          const yy = pp.getY(i), xx = pp.getX(i);
          const splinter = NZ.noise(yy * 30 + sd, 0.5) * 0.05 + Math.sin(yy * 95 + sd) * 0.018;
          if (brkR && xx > hx - 1e-4) pp.setX(i, xx + splinter);
          if (brkL && xx < -hx + 1e-4) pp.setX(i, xx - splinter * 0.8 - 0.015);
        }
        pl.computeVertexNormals();
        return pl.translate((x0 + x1) / 2, 0, 0);
      };
      B.add(M.planks, xf(piece(-0.58, bx, true, false), ox, y, 0.013, 0, 0, rz), 0.9);
      B.add(M.planks, xf(piece(0.4, 0.58, false, true), 0, y, 0.013, 0, 0, rz - 0.06), 0.9);
      nails(-0.5 + ox, y, w); nails(ox, y, w); nails(0.5, y, w);
      return;
    }
    const sl = bowX(roughBox(len, w, 0.024, { res: 0.15, amp: 0.002, chip: 0.008, seed: rnd() * 60, band: 0.02, keepBottom: false, corners: rnd() < 0.3 ? [[rnd() < 0.5 ? -1 : 1, 1, 1, 0.03]] : [] }), len, 0, (rnd() - 0.5) * 0.01);
    B.add(rnd() < 0.4 ? M.timber : M.planks, xf(sl, ox, y, 0.013, 0, 0, rz), 0.9);
    for (const sx of [-0.5, 0, 0.5]) nails(sx + ox * 0.3, y, w);
  });
  // a couple of bent nails, and rope lashings where boards worked loose
  for (let k = 0; k < 2; k++) {
    const [y] = slats[(broken + 2 + k * 3) % slats.length], x = [-0.5, 0.5][k];
    B.add(M.iron, wire([V3(x, y, 0.026), V3(x + 0.004, y + 0.004, 0.045), V3(x + 0.02, y + 0.012, 0.052)], 0.0025, 6, 3));
  }
  const lash = [[-0.5, slats[1][0]], [0.5, slats[slats.length - 2][0]], [0, slats[Math.max(0, broken - 1)][0]]];
  for (const [x, y] of lash) for (let k = 0; k < 3; k++) {
    B.add(L.rope, xf(torus(0.064, 0.0055, 4, 14), x, y - 0.025 + k * 0.022, -0.017, Math.PI / 2 + (k - 1) * 0.28, 0, 0, 0.78, 0.72, 1));
  }
  B.build(p);
  g.userData = { pivot: p };
  return g;
}

// ================================================================ cloth helpers
// Tattered strip hanging from y = 0 down to -len in the x-y plane.
function ragGeo(w, len, seed) {
  const sy = Math.max(3, Math.round(len / 0.06));
  const g = new THREE.PlaneGeometry(w, len, 4, sy);
  g.translate(0, -len / 2, 0);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), t = -y / len;
    let yy = y;
    const ix = Math.round((x / w + 0.5) * 4);
    if (t > 0.97) yy += len * (0.08 + 0.2 * Math.abs(Math.sin(ix * 2.3 + seed))) * (ix % 2 ? 1 : 0.4);
    const xx = x * (1 - t * 0.25) + Math.sin(t * 3 + seed) * 0.03 * t;
    const z = Math.sin(x / w * 7 + seed) * 0.012 * (0.4 + t) + Math.sin(t * 4.5 + seed * 2) * 0.03 * t;
    p.setXYZ(i, xx, yy, z);
  }
  g.computeVertexNormals();
  return g;
}

// Cloth draped over a horizontal bar running along x (bar centre at y0, radius r).
function drapeGeo(w, r, lenA, lenB, y0, seed) {
  const segs = 26;
  const g = new THREE.PlaneGeometry(w, 1, 7, segs);
  const p = g.attributes.position;
  const arc = Math.PI * r, total = lenA + arc + lenB;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), s = (p.getY(i) + 0.5) * total;
    let y, z;
    if (s < lenA) { z = r; y = y0 - (lenA - s); }
    else if (s < lenA + arc) { const a = (s - lenA) / r; z = Math.cos(a) * r; y = y0 + Math.sin(a) * r; }
    else { z = -r; y = y0 - (s - lenA - arc); }
    const hang = Math.max(0, y0 - y);
    const ix = Math.round((x / w + 0.5) * 7);
    z += Math.sign(z || 1) * (Math.sin(x * 40 + seed) * 0.016 * Math.min(1, hang * 3) + hang * 0.07);
    let yy = y;
    if (s < 0.03 || s > total - 0.03) yy += (0.04 + 0.16 * Math.abs(Math.sin(ix * 2.7 + seed))) * (ix % 2 ? 1 : 0.35);
    p.setXYZ(i, x * (1 - hang * 0.2) + Math.sin(hang * 5 + seed) * 0.02 * hang, yy, z);
  }
  g.computeVertexNormals();
  return g;
}

// ================================================================ Weeping Post
// A dead, twisted trunk used as a gibbet: an arm with a chain and hook over a
// peat pool, iron bands, nailed votive charms, coins hammered into the bark,
// rag clooties, reeds and old bones. Thorned tendrils rise from the pool.
export function buildPost(M) {
  const L = lib(M);
  const g = new THREE.Group();
  const rnd = mulberry32(randSeed());
  const sd = rnd() * 100;
  const B = new MergeBucket();
  // ---- peat pool with a ragged edge, bubbles and a wet, fading margin
  const edgeR = (a) => 1.5 * (1 + NZ.noise(Math.cos(a) * 1.6 + sd, Math.sin(a) * 1.6) * 0.07);
  {
    const pg = new THREE.CircleGeometry(1.5, 48);
    const pp = pg.attributes.position;
    for (let i = 1; i < pp.count; i++) { const a = Math.atan2(pp.getY(i), pp.getX(i)), f = edgeR(a) / 1.5; pp.setXY(i, pp.getX(i) * f, pp.getY(i) * f); }
    pg.rotateX(-Math.PI / 2); pg.translate(0, 0.035, 0);
    B.add(M.peat, pg);
    for (let k = 0; k < 9; k++) { const a = rnd() * TAU, r = 0.35 + rnd() * 0.9, s = 0.012 + rnd() * 0.03; B.add(M.peat, xf(sphere(s, 8, 4), Math.cos(a) * r, 0.035, Math.sin(a) * r, 0, 0, 0, 1, 0.55, 1)); }
    const rg = new THREE.RingGeometry(1.25, 2.1, 48, 3);
    const rp = rg.attributes.position, col = new Float32Array(rp.count * 4);
    for (let i = 0; i < rp.count; i++) {
      const x = rp.getX(i), y = rp.getY(i), r = Math.hypot(x, y), e = edgeR(Math.atan2(y, x));
      const t = clamp((r - e + 0.12) / (2.1 - e + 0.12), 0, 1);
      col.set([1, 1, 1, Math.pow(1 - t, 1.3) * 0.95 * (0.65 + 0.35 * (NZ.noise(x * 3 + sd, y * 3) * 0.5 + 0.5))], i * 4);
    }
    rg.setAttribute('color', new THREE.BufferAttribute(col, 4));
    rg.rotateX(-Math.PI / 2); rg.translate(0, 0.028, 0);
    const rim = mesh(rg, L.mud, g, 0, 0, 0, false);
    rim.renderOrder = 1;
  }
  // ---- gnarled, twisting trunk on roots, a bolted arm and a raking brace
  const sp = [];
  const ph = rnd() * TAU;
  for (let k = 0; k <= 7; k++) {
    const t = k / 7, w = Math.sin(t * Math.PI);
    sp.push(V3(Math.sin(t * 6.5 + ph) * 0.11 * w + (rnd() - 0.5) * 0.05 * w, -0.3 + t * 3.82, Math.cos(t * 5.2 + ph) * 0.09 * w + (rnd() - 0.5) * 0.05 * w));
  }
  const burls = [0, 1, 2, 3].map(() => [0.18 + rnd() * 0.62, rnd() * TAU, 0.035 + rnd() * 0.035]);
  const angD = (a, b) => { let d = (a - b) % TAU; if (d > Math.PI) d -= TAU; if (d < -Math.PI) d += TAU; return d; };
  const trunk = new Tube(sp, {
    r: (t) => 0.15 + 0.07 * (1 - t) + 0.16 * Math.pow(1 - t, 7), radial: 16, segs: 32, flutes: 5, fluteAmp: 0.2, twist: 2.3, bump: 0.16, bumpFreq: 2.6, bumpLen: 2.4, seed: sd, uRep: 2, vLen: 1.1, end: 'jag', jag: 0.16,
    extra: (t, a) => { let e = 0; for (const [bt, ba, amp] of burls) { const dt = (t - bt) / 0.05, da = angD(a, ba) / 0.6; e += amp * Math.exp(-dt * dt - da * da); } return e; },
  });
  B.add(M.bark, trunk.geo());
  const arm = new Tube([V3(-0.12, 3.37, 0.01), V3(0.4, 3.41, -0.015), V3(0.9, 3.39, 0.01), V3(1.38, 3.35, 0)], { r: (t) => 0.105 - 0.025 * t, radial: 10, segs: 14, flutes: 3, fluteAmp: 0.08, twist: 0.5, bump: 0.08, seed: sd + 3, uRep: 1, vLen: 1.1, end: 'jag', jag: 0.07 });
  B.add(M.bark, arm.geo());
  B.add(M.bark, tube([V3(0.06, 2.6, 0), V3(0.33, 3.0, 0.025), V3(0.64, 3.34, 0)], { r: () => 0.058, radial: 7, segs: 6, bump: 0.1, seed: sd + 5, end: 'cap' }));
  for (let k = 0; k < 6; k++) {
    const a = (k / 6) * TAU + rnd() * 0.5, len = 0.75 + rnd() * 0.45, c = Math.cos(a), s = Math.sin(a), wob = (rnd() - 0.5) * 0.5;
    B.add(M.bark, tube([V3(c * 0.08, 0.3, s * 0.08), V3(c * 0.3, 0.14, s * 0.3), V3(Math.cos(a + wob * 0.3) * len * 0.62, 0.06 + rnd() * 0.04, Math.sin(a + wob * 0.3) * len * 0.62), V3(Math.cos(a + wob) * len, -0.08, Math.sin(a + wob) * len)], { r: (t) => 0.11 * Math.pow(1 - t, 1.3) + 0.008, radial: 6, segs: 8, bump: 0.15, seed: sd + k * 3, uRep: 1, vLen: 0.9 }));
  }
  // ---- iron: bands, joint strap, chain, hook, nails, charms
  const P = V3(), Nn = V3(), Tt = V3();
  const placeOn = (geo, t, a, out = 0.004) => {
    trunk.at(t, a, P, Nn);
    _q.setFromUnitVectors(_c.set(0, 0, 1), Nn);
    geo.applyQuaternion(_q);
    return geo.translate(P.x + Nn.x * out, P.y + Nn.y * out, P.z + Nn.z * out);
  };
  const tOf = (y) => (y + 0.3) / 3.82;
  for (const y of [0.95, 1.95, 2.88, 3.2]) {
    const t = tOf(y);
    let rb = 0;
    for (let k = 0; k < 28; k++) rb = Math.max(rb, trunk.radius(t, (k / 28) * TAU));
    rb += 0.006;
    const bandG = lathe([[rb - 0.006, -0.032], [rb + 0.006, -0.03], [rb + 0.009, 0], [rb + 0.006, 0.03], [rb - 0.006, 0.032]], 20);
    trunk.center(t, P); trunk.tangent(t, Tt);
    _q.setFromUnitVectors(UP, Tt);
    B.add(M.iron, bandG.applyQuaternion(_q).translate(P.x, P.y, P.z));
    for (let k = 0; k < 5; k++) { const a = (k / 5) * TAU + y; _a.set(Math.cos(a) * (rb + 0.008), 0, Math.sin(a) * (rb + 0.008)).applyQuaternion(_q).add(P); B.add(M.iron, sphere(0.009, 5, 4).translate(_a.x, _a.y, _a.z)); }
  }
  for (const x of [0.14, 0.24]) B.add(M.iron, xf(torus(0.112, 0.012, 4, 16), x, 3.385, 0, 0, Math.PI / 2, 0, 1, 1, 1.8));
  bolt(B, M.iron, 0.19, 3.385, 0.115, 'z', 0.014);
  bolt(B, M.iron, 0.64, 3.33, 0.09, 'z', 0.016); bolt(B, M.iron, 0.07, 2.6, 0.13, 'z', 0.016);
  const CX = 1.18, HX = 1.25;
  B.add(M.iron, xf(torus(0.028, 0.009, 4, 10), CX, 3.285, 0, 0, Math.PI / 2, 0));
  for (let k = 0; k < 6; k++) B.add(M.iron, xf(torus(0.022, 0.0075, 4, 10), CX, 3.255 - k * 0.05, 0, 0, k % 2 ? 0 : Math.PI / 2, 0, 1, 1.45, 1));
  B.add(M.iron, torus(0.02, 0.009, 4, 10).translate(CX, 2.955, 0));
  B.add(M.iron, rod(V3(CX, 2.94, 0), V3(CX, 2.838, 0), 0.014, 0.015, 6));
  B.add(M.iron, xf(torus(0.07, 0.016, 6, 16, (210 / 180) * Math.PI), HX, 2.84, 0, 0, 0, Math.PI));
  {
    const ea = Math.PI / 6;
    const ex = HX + Math.cos(ea) * 0.07, ey = 2.84 + Math.sin(ea) * 0.07;
    B.add(M.iron, xf(new THREE.ConeGeometry(0.016, 0.05, 6), ex - Math.sin(ea) * 0.022, ey + Math.cos(ea) * 0.022, 0, 0, 0, ea));
  }
  // frayed rope binding left on the hook
  B.add(L.rope, xf(torus(0.034, 0.007, 4, 12), HX, 2.735, 0, 0, 0.3, 0, 1, 1.25, 1));
  B.add(L.rope, rod(V3(HX + 0.02, 2.7, 0.005), V3(HX + 0.05, 2.55, 0.02), 0.006, 0.004, 4));
  // charms nailed to the trunk
  const charms = [[0.42, 0.3, 'plaque'], [0.5, 1.6, 'cross'], [0.37, 2.6, 'plaque'], [0.55, 4.1, 'shoe'], [0.46, 5.2, 'heart'], [0.33, 1.1, 'cross'], [0.6, 3.3, 'plaque'], [0.29, 4.6, 'heart']];
  for (const [t, a, kind] of charms) {
    const tilt = (rnd() - 0.5) * 0.4;
    if (kind === 'plaque') B.add(M.timber, placeOn(bevBox(0.07 + rnd() * 0.03, 0.09 + rnd() * 0.03, 0.012, 0.003).rotateZ(tilt), t, a, 0.008), 0.9);
    else if (kind === 'cross') B.add(M.iron, placeOn(merge([new THREE.BoxGeometry(0.014, 0.1, 0.008), new THREE.BoxGeometry(0.06, 0.014, 0.008).translate(0, 0.02, 0)]).rotateZ(tilt), t, a, 0.006));
    else if (kind === 'shoe') B.add(M.iron, placeOn(torus(0.045, 0.009, 4, 12, Math.PI * 1.35).rotateZ(-Math.PI * 0.175 + Math.PI).scale(1, 1.1, 0.6), t, a, 0.008));
    else {
      const h = new THREE.Shape();
      h.moveTo(0, -0.03); h.bezierCurveTo(0.045, 0.0, 0.03, 0.035, 0, 0.018); h.bezierCurveTo(-0.03, 0.035, -0.045, 0.0, 0, -0.03);
      B.add(M.bronze, placeOn(new THREE.ExtrudeGeometry(h, { depth: 0.003, bevelEnabled: false, curveSegments: 5 }).rotateZ(tilt), t, a, 0.005));
    }
    B.add(M.iron, placeOn(rod(V3(0, 0.025, -0.03), V3(0, 0.025, 0.02), 0.003, 0.003, 4), t, a, 0));
    B.add(M.iron, placeOn(new THREE.CylinderGeometry(0.008, 0.008, 0.004, 6).rotateX(Math.PI / 2).translate(0, 0.025, 0.02), t, a, 0));
  }
  // coins hammered edge-on into the bark (a wishing tree)
  for (let k = 0; k < 22; k++) {
    const t = 0.27 + rnd() * 0.12, a = rnd() * TAU;
    trunk.at(t, a, P, Nn);
    _b.crossVectors(Nn, UP).normalize();
    _q.setFromUnitVectors(UP, _b);
    const cg = new THREE.CylinderGeometry(0.0125, 0.0125, 0.0025, 10).rotateZ((rnd() - 0.5) * 0.5).applyQuaternion(_q);
    B.add(M.bronze, cg.translate(P.x + Nn.x * 0.004, P.y + Nn.y * 0.004, P.z + Nn.z * 0.004));
  }
  // bare nails, some bent
  for (let k = 0; k < 10; k++) {
    const t = 0.25 + rnd() * 0.5, a = rnd() * TAU;
    trunk.at(t, a, P, Nn);
    const tip = P.clone().addScaledVector(Nn, 0.035 + rnd() * 0.02);
    if (k % 3 === 0) tip.y -= 0.02;
    B.add(M.iron, rod(P.clone().addScaledVector(Nn, -0.01), tip, 0.0035, 0.003, 4));
  }
  // ---- rag clooties tied to the arm and a torn shroud draped over it
  const armY = (x) => 3.41 - 0.06 * Math.pow((x - 0.4) / 1.0, 2);
  for (let k = 0; k < 5; k++) {
    const x = 0.64 + k * 0.085 + rnd() * 0.02, len = 0.25 + rnd() * 0.33, w = 0.045 + rnd() * 0.04;
    const mat = k % 3 === 1 ? L.ragRed : L.rag;
    const ar = 0.105 - 0.025 * ((x + 0.12) / 1.5) + 0.016;
    B.add(mat, xf(ragGeo(w, len, k + sd), x, armY(x) - ar + 0.01, (rnd() - 0.5) * 0.04, 0, (rnd() - 0.5) * 1.2, (rnd() - 0.5) * 0.12));
    B.add(mat, xf(torus(ar - 0.008, 0.007, 4, 12), x, armY(x), 0, 0, Math.PI / 2, 0, 1, 1, 1.6));
  }
  B.add(L.rag, xf(drapeGeo(0.3, 0.112, 0.5, 0.8, 0, sd), 0.4, 3.405, 0, 0, 0, 0.02));
  // rags tied to the trunk's nails
  for (const [t, a, len] of [[0.48, 2.0, 0.35], [0.4, 4.4, 0.25]]) {
    trunk.at(t, a, P, Nn);
    const yaw = Math.atan2(Nn.x, Nn.z);
    B.add(L.rag, xf(ragGeo(0.06, len, t * 10), P.x + Nn.x * 0.025, P.y, P.z + Nn.z * 0.025, 0, yaw, 0));
  }
  // ---- reeds, bulrushes, bones, guttered candle stubs
  for (let k = 0; k < 44; k++) {
    const a = rnd() * TAU, r = 1.42 + rnd() * 0.7, h = 0.45 + rnd() * 0.9, bend = (rnd() - 0.2) * 0.25;
    const rg = new THREE.ConeGeometry(0.011, h, 3, 3).translate(0, h / 2, 0);
    const pp = rg.attributes.position;
    for (let i = 0; i < pp.count; i++) { const t = pp.getY(i) / h; pp.setX(i, pp.getX(i) + t * t * bend * h); }
    rg.computeVertexNormals();
    B.add(M.reed, xf(rg, Math.cos(a) * r, 0.0, Math.sin(a) * r, (rnd() - 0.5) * 0.15, -a, (rnd() - 0.5) * 0.12));
    if (k % 5 === 0) {
      const ch = h + 0.3;
      B.add(M.reed, rod(V3(Math.cos(a) * r, 0, Math.sin(a) * r), V3(Math.cos(a) * (r + 0.05), ch, Math.sin(a) * (r + 0.05)), 0.006, 0.004, 4));
      B.add(L.cattail, xf(new THREE.CapsuleGeometry(0.017, 0.11, 2, 6), Math.cos(a) * (r + 0.043), ch - 0.1, Math.sin(a) * (r + 0.043), 0, 0, 0.02));
    }
  }
  {
    const lay = [[0.95, 0.4, 0.38], [-0.8, -0.95, 0.3], [0.2, -1.25, 0.42], [-1.15, 0.45, 0.26], [0.65, 1.15, 0.33]];
    for (const [x, z, len] of lay) B.add(L.bone, xf(boneGeo(len, 0.012), x, 0.03, z, 0, rnd() * TAU, Math.PI / 2 + (rnd() - 0.5) * 0.3));
    for (let k = 0; k < 4; k++) B.add(L.bone, xf(torus(0.13 - k * 0.012, 0.008, 4, 10, Math.PI * 0.8), -0.95 + k * 0.06, 0.02, -0.35, Math.PI / 2 + 0.25, 0.4, 0.2));
    const sk = skullGeo(0.95);
    const place = (q) => xf(q, -1.32, -0.03, -0.62, 0.35, 0.9, 0.25);
    B.add(L.bone, place(sk.bone)); B.add(M.black, place(sk.holes));
  }
  for (let k = 0; k < 4; k++) {
    const a = 0.8 + k * 1.4 + rnd() * 0.3, r = 0.42 + rnd() * 0.12;
    addCandle(B, L.wax, M.iron, Math.cos(a) * r, 0.03, Math.sin(a) * r, 0.03 + rnd() * 0.05, 0.022 + rnd() * 0.01, rnd, 2);
  }
  B.build(g);

  // ---- thorned tendrils, rising from the pool around the hanging point
  const tendrils = pivot(g, HX, 0, 0);
  {
    const TB = new MergeBucket();
    const tp = V3(), tn = V3(), tt = V3();
    for (let k = 0; k < 8; k++) {
      const a0 = (k / 8) * TAU + rnd() * 0.4, R0 = 0.55 + rnd() * 0.25, H = 1.7 + rnd() * 0.75, spin = (rnd() < 0.5 ? 1 : -1) * (0.6 + rnd() * 0.5);
      const pts = [];
      for (let j = 0; j <= 6; j++) {
        const t = j / 6, a = a0 + spin * t * 1.5;
        const R = R0 + (0.3 - R0) * smoothstep(0.15, 0.9, t) + Math.sin(t * 7 + k) * 0.04;
        pts.push(V3(Math.cos(a) * R, -0.06 + t * H, Math.sin(a) * R));
      }
      const e = pts[6], ea = a0 + spin * 1.75;
      pts.push(V3(Math.cos(ea) * 0.24, e.y + 0.1, Math.sin(ea) * 0.24));
      const tb = new Tube(pts, { r: (t) => 0.055 * Math.pow(1 - t, 1.2) + 0.003, radial: 6, segs: 24, flutes: 3, fluteAmp: 0.22, twist: 3, seed: k * 7 + sd });
      TB.add(M.tendril, tb.geo());
      for (let j = 0; j < 10; j++) {
        const t = 0.08 + j * 0.08 + rnd() * 0.03;
        tb.at(t, rnd() * TAU, tp, tn); tb.tangent(t, tt);
        const len = 0.03 + 0.045 * (1 - t);
        _c.copy(tn).addScaledVector(tt, 0.7).normalize();
        const th = new THREE.ConeGeometry(0.004 + 0.012 * (1 - t), len, 4).translate(0, len / 2, 0);
        th.applyQuaternion(_q.setFromUnitVectors(UP, _c));
        TB.add(M.tendril, th.translate(tp.x - tn.x * 0.004, tp.y - tn.y * 0.004, tp.z - tn.z * 0.004));
      }
    }
    TB.build(tendrils);
  }
  tendrils.scale.set(1, 0.001, 1); tendrils.visible = false;
  g.traverse((o) => { if (o.isMesh && o.material !== L.mud) { o.castShadow = true; o.receiveShadow = true; } });
  g.userData = { hangPoint: new THREE.Vector3(HX, 2.72, 0), tendrils };
  return g;
}

// ================================================================ Lychgate
// C-scroll (2D points) of height h opening toward +x, curls inward at both ends.
function cScroll(h, n = 12) {
  const rs = h * 0.19, pts = [];
  for (let k = 0; k <= n; k++) { const t = k / n, a = Math.PI / 2 - (1 - t) * 1.15 * TAU, r = rs * (0.3 + 0.7 * t); pts.push([Math.cos(a) * r, h / 2 - rs + Math.sin(a) * r]); }
  for (let k = 1; k < 10; k++) { const a = Math.PI / 2 + (k / 10) * Math.PI; pts.push([Math.cos(a) * h / 2, Math.sin(a) * h / 2]); }
  for (let k = 0; k <= n; k++) { const t = k / n, a = (3 * Math.PI) / 2 + t * 1.15 * TAU, r = rs * (1 - 0.7 * t); pts.push([Math.cos(a) * r, -h / 2 + rs + Math.sin(a) * r]); }
  return pts;
}
function scrollGeo(pts2, map, r = 0.009) {
  return new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts2.map(([x, y]) => map(x, y)), false, 'catmullrom', 0.5), Math.round(pts2.length * 1.3), r, 3, false);
}

export function buildGate(M) {
  const g = new THREE.Group();
  const rnd = mulberry32(randSeed());
  const B = new MergeBucket();
  // ---- stone pillars: plinth (flush on the opening side), shaft with raised
  // pointed-arch panels, moulded three-step caps
  for (const sx of [-1, 1]) {
    const X = sx * 2.25;
    B.add(M.stone, xf(roughBox(0.89, 0.44, 1.08, { res: 0.15, chip: 0.04, seed: rnd() * 50 }), X + sx * 0.045, 0.2, 0), 0.45);
    B.add(M.stone, taper(0.89, 0.1, 1.08, 0.8, 0.94, X + sx * 0.045, 0.47, 0), 0.45);
    B.add(M.stone, xf(roughBox(0.8, 2.74, 0.9, { res: 0.2, chip: 0.03, amp: 0.004, seed: rnd() * 50 }), X, 1.87, 0), 0.45);
    B.add(M.stoneClean, xf(roughBox(0.86, 0.06, 0.96, { res: 0.12, chip: 0.015, seed: rnd() * 50 }), X, 3.25, 0), 0.6);
    B.add(M.stoneClean, taper(0.88, 0.1, 0.98, 1.02, 1.12, X, 3.33, 0), 0.6);
    B.add(M.stoneClean, xf(roughBox(1.06, 0.08, 1.16, { res: 0.12, chip: 0.035, seed: rnd() * 50, corners: [[sx, 1, 1, 0.05]] }), X, 3.42, 0), 0.6);
    const outer = [new THREE.Vector2(-0.25, 0.8), new THREE.Vector2(0.25, 0.8), ...archPts(0.5, 2.25, 0.32, 8).reverse()];
    const inner = [new THREE.Vector2(-0.205, 0.845), new THREE.Vector2(0.205, 0.845), ...archPts(0.41, 2.25, 0.26, 8).reverse()];
    const sh = new THREE.Shape(outer); sh.holes.push(new THREE.Path(inner));
    for (const sz of [-1, 1]) {
      B.add(M.stoneClean, extrude(sh, 0.03, 0.006, 4).translate(X, 0, sz * 0.462), 0.6);
      B.add(M.stoneClean, bevBox(0.05, 0.62, 0.025, 0.006, X, 1.75, sz * 0.46), 0.6);
      B.add(M.stoneClean, bevBox(0.26, 0.05, 0.025, 0.006, X, 1.88, sz * 0.46), 0.6);
    }
  }
  // ---- timber roof: lintel, tie beams on corbel brackets, wall plates,
  // king-post trusses, rafters, ridge, shingles, cusped bargeboards, finials
  const TH = Math.atan(0.809), cT = Math.cos(TH), sT = Math.sin(TH);
  const roofY = (z) => 4.575 - 0.809 * Math.abs(z);
  B.add(M.timber, bevBox(3.9, 0.16, 0.22, 0.015, 0, 3.38, 0), 0.6);
  for (const x of [-2.25, 0, 2.25]) B.add(M.timber, bevBox(0.16, 0.16, 2.12, 0.015, x, 3.54, 0), 0.6);
  for (const sz of [-1, 1]) B.add(M.timber, bevBox(5.9, 0.14, 0.14, 0.015, 0, 3.69, sz * 0.95), 0.6);
  for (const X of [-2.25, 2.25]) {
    for (const sz of [-1, 1]) {
      const z = (v) => -sz * v;
      const s = new THREE.Shape();
      s.moveTo(z(0.45), 2.92); s.lineTo(z(0.5), 2.92); s.quadraticCurveTo(z(0.53), 3.38, z(1.0), 3.4); s.lineTo(z(1.0), 3.462); s.lineTo(z(0.45), 3.462); s.closePath();
      B.add(M.timber, extrude(s, 0.12, 0.006, 8).rotateY(Math.PI / 2).translate(X, 0, 0), 0.6);
      B.add(M.timber, beam(V3(X, 3.62, sz * 0.05), V3(X, 4.07, sz * 0.58), 0.08, 0.08), 0.6);
    }
    B.add(M.timber, bevBox(0.12, 0.86, 0.12, 0.012, X, 4.05, 0), 0.6);
  }
  for (let x = -2.78; x <= 2.79; x += 0.556) for (const sz of [-1, 1]) {
    B.add(M.timber, beam(V3(x, roofY(1.32) - 0.064, sz * 1.32), V3(x, roofY(0.03) - 0.064, sz * 0.03), 0.065, 0.1), 0.6);
  }
  B.add(M.timber, bevBox(5.95, 0.15, 0.1, 0.012, 0, 4.47, 0), 0.6);
  for (const sz of [-1, 1]) for (let s = 0.3; s < 1.7; s += 0.3) B.add(M.timber, xf(new THREE.BoxGeometry(5.9, 0.018, 0.05), 0, roofY(s * cT) + 0.004, sz * s * cT, sz * TH, 0, 0), 0.6);
  // shingles: each course overlaps the one below, butts lifted, a few missing or slipped
  for (const sz of [-1, 1]) {
    const sMax = 1.36 / cT;
    for (let row = 0; ; row++) {
      const butt = sMax - row * 0.15;
      if (butt < 0.12) break;
      const len = Math.min(0.36, butt + 0.02);
      let x = -2.93 + (row % 2 ? 0.1 + rnd() * 0.08 : 0);
      if (row % 2) { const w0 = x + 2.93; B.add(M.planks, xf(new THREE.BoxGeometry(w0 - 0.01, 0.018, len), -2.93 + w0 / 2, roofY((butt - len / 2) * cT) + 0.016, sz * (butt - len / 2) * cT, sz * (TH - 0.045), 0, 0), 0.7); }
      while (x < 2.92) {
        let w = 0.17 + rnd() * 0.13;
        if (x + w > 2.93) w = 2.93 - x;
        if (w < 0.05) break;
        if (rnd() > 0.035 || row < 1) {
          const slip = rnd() < 0.04 ? 0.04 + rnd() * 0.06 : 0;
          const sc = butt - len / 2 + slip;
          B.add(rnd() < 0.28 ? M.timber : M.planks, xf(new THREE.BoxGeometry(w - 0.012, 0.018, len), x + w / 2, roofY(sc * cT) + 0.016, sz * sc * cT, sz * (TH - 0.045) + (rnd() - 0.5) * 0.04, (rnd() - 0.5) * 0.05, (rnd() - 0.5) * 0.03), 0.7);
        }
        x += w;
      }
    }
    B.add(M.planks, xf(new THREE.BoxGeometry(5.98, 0.022, 0.18), 0, 4.632 - 0.09 * sT, sz * 0.09 * cT, sz * TH, 0, 0), 0.7);
  }
  for (const sx of [-1, 1]) {
    const pts = [];
    const N = 28;
    for (let k = 0; k <= N; k++) { const z = -1.38 + (2.76 * k) / N; pts.push([z, roofY(z) + 0.06]); }
    for (let k = N; k >= 0; k--) {
      const z = -1.38 + (2.76 * k) / N, f = (Math.abs(z) / 0.2) % 1;
      const dep = Math.abs(z) > 1.3 ? 0.14 : 0.2 - 0.075 * (1 - (2 * f - 1) * (2 * f - 1));
      pts.push([z, roofY(z) + 0.06 - dep]);
    }
    const bs = new THREE.Shape(pts.map(([z, y]) => new THREE.Vector2(-z, y)));
    B.add(M.timber, extrude(bs, 0.045, 0, 1).rotateY(Math.PI / 2).translate(sx * 2.975, 0, 0), 0.6);
    B.add(M.timber, xf(lathe([[0, 0], [0.06, 0], [0.06, 0.06], [0.04, 0.08], [0.055, 0.14], [0.03, 0.2], [0.035, 0.24], [0.012, 0.36], [0, 0.37]], 8), sx * 2.975, 4.6, 0, 0, Math.PI / 8, 0), 0.6);
    B.add(M.timber, xf(lathe([[0, 0], [0.012, 0.0], [0.04, 0.07], [0.03, 0.13], [0.045, 0.2], [0, 0.22]], 8), sx * 2.975, 4.2, 0, 0, Math.PI / 8, 0), 0.6);
  }
  // ---- wrought iron: overthrow, lantern brackets and housings, pintles, linkage
  {
    for (const y of [2.985, 3.28]) B.add(M.iron, new THREE.BoxGeometry(3.7, 0.035, 0.025).translate(0, y, 0));
    for (let k = -5; k <= 5; k++) if (k !== 0) B.add(M.iron, new THREE.BoxGeometry(0.02, 0.3, 0.02).translate(k * 0.33, 3.13, 0));
    B.add(M.iron, torus(0.12, 0.013, 4, 24).translate(0, 3.13, 0));
    B.add(M.iron, new THREE.BoxGeometry(0.02, 0.22, 0.02).translate(0, 3.13, 0));
    B.add(M.iron, new THREE.BoxGeometry(0.16, 0.02, 0.02).translate(0, 3.15, 0));
    const cs = cScroll(0.24);
    for (let k = -5; k < 5; k++) {
      const cx = (k + 0.5) * 0.33;
      if (Math.abs(cx) < 0.2) continue;
      const dir = (k % 2 ? 1 : -1);
      B.add(M.iron, scrollGeo(cs, (x, y) => V3(cx + dir * (x + 0.025), 3.13 + y, 0), 0.008));
    }
  }
  const lamps = [];
  for (const x of [-1.05, 0, 1.05]) {
    const z = 0.3;
    B.add(M.iron, new THREE.BoxGeometry(0.03, 0.03, 0.25).translate(x, 3.385, 0.225));
    B.add(M.iron, scrollGeo(cScroll(0.12).slice(0, 18), (u, v) => V3(x, 3.31 + v * 0.6, 0.17 - u * 0.6), 0.006));
    B.add(M.iron, rod(V3(x, 3.37, z), V3(x, 3.345, z), 0.006, 0.006, 4));
    B.add(M.iron, torus(0.018, 0.005, 4, 8).translate(x, 3.33, z));
    B.add(M.iron, new THREE.CylinderGeometry(0.02, 0.025, 0.035, 8).translate(x, 3.3, z));
    B.add(M.iron, new THREE.ConeGeometry(0.112, 0.1, 4).rotateY(Math.PI / 4).translate(x, 3.235, z));
    B.add(M.iron, new THREE.BoxGeometry(0.15, 0.02, 0.15).translate(x, 3.005, z));
    B.add(M.iron, new THREE.ConeGeometry(0.03, 0.04, 4).rotateX(Math.PI).translate(x, 2.975, z));
    for (const [dx, dz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) B.add(M.iron, new THREE.BoxGeometry(0.014, 0.2, 0.014).translate(x + dx * 0.066, 3.1, z + dz * 0.066));
    const lp = mesh(new THREE.BoxGeometry(0.12, 0.17, 0.12), M.lanternGlass, g, x, 3.1, z, false);
    lamps.push(lp);
  }
  for (const sx of [-1, 1]) for (const y of [0.29, 2.29]) {
    B.add(M.iron, new THREE.BoxGeometry(0.07, 0.035, 0.06).translate(sx * 1.87, y, 0));
    B.add(M.iron, new THREE.CylinderGeometry(0.011, 0.011, 0.07, 6).translate(sx * 1.85, y + 0.05, 0));
  }
  B.add(M.iron, rod(V3(3.3, 0.06, 0.98), V3(2.72, 0.06, 0.42), 0.014, 0.014, 5));
  for (const t of [0.15, 0.85]) B.add(M.iron, new THREE.BoxGeometry(0.05, 0.05, 0.05).translate(3.3 + (2.72 - 3.3) * t, 0.04, 0.98 + (0.42 - 0.98) * t));
  // ---- lever pedestal with a toothed quadrant
  B.add(M.stoneClean, xf(roughBox(0.42, 0.86, 0.42, { res: 0.12, chip: 0.03, seed: rnd() * 50 }), 3.4, 0.41, 1.2), 0.6);
  B.add(M.stoneClean, taper(0.48, 0.1, 0.48, 0.36, 0.36, 3.4, 0.89, 1.2), 0.6);
  {
    const qs = new THREE.Shape(), Rq = 0.17, n = 14;
    for (let k = 0; k <= n; k++) { const a = -0.78 + (1.56 * k) / n, r = k % 2 ? Rq - 0.018 : Rq; const pt = [-Math.sin(a) * r, Math.cos(a) * r]; if (k) qs.lineTo(...pt); else qs.moveTo(...pt); }
    qs.lineTo(-0.07, -0.045); qs.lineTo(0.07, -0.045); qs.closePath();
    for (const dx of [-0.048, 0.048]) B.add(M.iron, extrude(qs, 0.012, 0, 1).rotateY(Math.PI / 2).translate(3.4 + dx, 1.0, 1.2));
    B.add(M.iron, new THREE.BoxGeometry(0.16, 0.02, 0.3).translate(3.4, 0.95, 1.2));
    B.add(M.iron, new THREE.CylinderGeometry(0.018, 0.018, 0.13, 6).rotateZ(Math.PI / 2).translate(3.4, 1.0, 1.2));
  }
  B.build(g);

  // ---- door leaves on hinge pivots (each leaf runs 1.8 m from its hinge)
  const doors = [];
  for (const s of [-1, 1]) {
    const hinge = pivot(g, s * 1.85, 0, 0);
    const D = new MergeBucket();
    const X = (u) => -s * u;
    const yTop = (u) => 2.55 + 0.25 * (u / 1.8) * (u / 1.8);
    D.add(M.iron, bevBox(0.045, 2.68, 0.045, 0.006, X(0.035), 1.4, 0));
    D.add(M.iron, xf(sphere(0.028, 8, 6), X(0.035), 2.77, 0));
    D.add(M.iron, xf(new THREE.ConeGeometry(0.014, 0.06, 4), X(0.035), 2.82, 0, 0, Math.PI / 4, 0));
    D.add(M.iron, bevBox(0.045, yTop(1.77) - 0.03, 0.045, 0.006, X(1.77), (yTop(1.77) + 0.03) / 2 + 0.03, 0));
    D.add(M.iron, xf(sphere(0.028, 8, 6), X(1.77), yTop(1.77) + 0.06, 0));
    D.add(M.iron, xf(new THREE.ConeGeometry(0.014, 0.06, 4), X(1.77), yTop(1.77) + 0.11, 0, 0, Math.PI / 4, 0));
    for (const y of [0.12, 0.42, 1.35, 2.2]) D.add(M.iron, new THREE.BoxGeometry(1.74, 0.045, 0.022).translate(X(0.9), y, 0));
    const tp = [];
    for (let k = 0; k <= 12; k++) { const u = 0.035 + ((1.77 - 0.035) * k) / 12; tp.push(V3(X(u), yTop(u), 0)); }
    D.add(M.iron, wire(tp, 0.016, 24, 4));
    for (let k = 0; k < 11; k++) {
      const u = 0.18 + k * 0.147, top = yTop(u) + 0.05;
      D.add(M.iron, new THREE.BoxGeometry(0.02, top - 0.12, 0.02).translate(X(u), (top + 0.12) / 2, 0));
      D.add(M.iron, xf(new THREE.ConeGeometry(0.024, 0.075, 4), X(u), top + 0.035, 0, 0, Math.PI / 4, 0));
      D.add(M.iron, new THREE.BoxGeometry(0.032, 0.02, 0.03).translate(X(u), 2.2, 0));
      if (k < 10) D.add(M.iron, new THREE.BoxGeometry(0.016, 0.3, 0.016).translate(X(u + 0.0735), 0.27, 0));
      if (k < 10) {
        const cs = cScroll(Math.min(0.26, yTop(u) - 2.27), 10), uc = u + 0.0735, dir = k % 2 ? 1 : -1;
        const ym = 2.2 + (yTop(u + 0.0735) - 2.2) / 2;
        D.add(M.iron, scrollGeo(cs, (x, y) => V3(X(uc + dir * (x * 0.52 + 0.02)), ym + y, 0)));
      }
    }
    D.add(M.iron, torus(0.25, 0.014, 4, 32).translate(X(0.9), 1.775, 0));
    D.add(M.iron, new THREE.BoxGeometry(0.02, 0.48, 0.02).translate(X(0.9), 1.775, 0));
    D.add(M.iron, new THREE.BoxGeometry(0.34, 0.02, 0.02).translate(X(0.9), 1.84, 0));
    D.add(M.iron, xf(sphere(0.035, 8, 6), X(0.9), 1.84, 0, 0, 0, 0, 1, 1, 0.6));
    D.add(M.iron, beam(V3(X(0.06), 0.45, 0), V3(X(1.74), 1.32, 0), 0.04, 0.02));
    for (const y of [0.35, 2.35]) {
      D.add(M.iron, new THREE.CylinderGeometry(0.024, 0.024, 0.1, 8).translate(0, y, 0));
      D.add(M.iron, new THREE.BoxGeometry(0.5, 0.04, 0.03).translate(X(0.25), y, 0));
      for (const u of [0.15, 0.32, 0.46]) bolt(D, M.iron, X(u), y, 0.018, 'z', 0.01, 0.01);
    }
    if (s > 0) {
      D.add(M.iron, xf(torus(0.05, 0.008, 4, 14), X(1.62), 1.07, 0.04, 0, 0, 0));
      D.add(M.iron, new THREE.CylinderGeometry(0.04, 0.04, 0.008, 10).rotateX(Math.PI / 2).translate(X(1.62), 1.12, 0.017));
      D.add(M.iron, new THREE.BoxGeometry(0.2, 0.025, 0.012).translate(X(1.72), 1.25, 0.018));
    }
    D.build(hinge);
    doors.push(hinge);
  }
  // ---- the lever
  const lever = pivot(g, 3.4, 1.0, 1.2);
  {
    const LB = new MergeBucket();
    LB.add(M.iron, new THREE.CylinderGeometry(0.035, 0.035, 0.06, 10).rotateZ(Math.PI / 2));
    LB.add(M.iron, rod(V3(0, 0, 0), V3(0, 0.47, 0), 0.02, 0.017, 6));
    LB.add(M.timber, new THREE.CylinderGeometry(0.03, 0.034, 0.17, 8).translate(0, 0.555, 0), 0.8);
    LB.add(M.iron, torus(0.034, 0.008, 4, 10).rotateX(Math.PI / 2).translate(0, 0.468, 0));
    LB.add(M.iron, xf(sphere(0.045, 10, 8), 0, 0.665, 0));
    LB.build(lever);
  }
  lever.rotation.x = -0.6;
  const light = new THREE.PointLight(0xff4020, 0, 10, 1.6); light.position.set(0, 3, 0.8); g.add(light);
  // escape light beyond the gate
  const beyond = new THREE.Sprite(M.glow.clone()); beyond.material.color.set(0xd8e8ff); beyond.material.opacity = 0; beyond.scale.set(10, 8, 1); beyond.position.set(0, 2, -4); g.add(beyond);
  g.traverse((o) => { if (o.isMesh) { o.castShadow = !lamps.includes(o); o.receiveShadow = true; } });
  g.userData = { doors, lever, lamps, light, beyond };
  return g;
}

// ================================================================ Drowned Well (hatch)
export function buildHatch(M) {
  const L = lib(M);
  const g = new THREE.Group();
  const rnd = mulberry32(randSeed());
  const B = new MergeBucket();
  const n = 14, R = 0.98;
  for (let c = 0; c < 2; c++) for (let k = 0; k < n; k++) {
    const a = ((k + c * 0.5 + 0.5) / n) * TAU, chord = 2 * R * Math.sin(Math.PI / n) - 0.012;
    const h = c ? 0.22 : 0.26, y = c ? 0.24 + h / 2 : h / 2 - 0.02;
    B.add(M.stone, xf(roughBox(chord, h, 0.26, { res: 0.1, chip: 0.03, amp: 0.004, seed: k * 3 + c * 50, keepBottom: c === 0 }), Math.cos(a) * R, y, Math.sin(a) * R, 0, -a + Math.PI / 2, 0), 0.5);
  }
  for (let k = 0; k < n; k++) {
    if (k === 3 || k === 9) continue;
    const a = ((k + 0.5) / n) * TAU + (rnd() - 0.5) * 0.03, chord = 2 * 1.0 * Math.sin(Math.PI / n);
    B.add(M.stoneClean, xf(roughBox(chord, 0.08, 0.34, { res: 0.1, chip: 0.03, seed: k * 7 + 3 }), Math.cos(a) * 1.0, 0.5 + rnd() * 0.01, Math.sin(a) * 1.0, (rnd() - 0.5) * 0.04, -a + Math.PI / 2, (rnd() - 0.5) * 0.05), 0.6);
  }
  {
    const a = ((9 + 0.5) / n) * TAU;
    B.add(M.stoneClean, xf(roughBox(0.44, 0.08, 0.34, { res: 0.1, chip: 0.04, seed: 77 }), Math.cos(a) * 1.42, 0.06, Math.sin(a) * 1.42, 0.25, -a + 1.9, 0.1), 0.6);
  }
  // broken windlass: one post leaning, roller with rope, a tipped bucket
  B.add(M.timber, bevBox(0.13, 1.5, 0.13, 0.015, 1.16, 0.73, 0, 0, 0, 0.02), 0.7);
  B.add(M.timber, bevBox(0.13, 1.38, 0.13, 0.015, -1.17, 0.66, 0.03, 0.04, 0, -0.16), 0.7);
  B.add(M.timber, xf(new THREE.CylinderGeometry(0.065, 0.065, 2.2, 10), 0.03, 1.3, 0.01, 0, 0, Math.PI / 2 + 0.055), 0.7);
  for (let k = 0; k < 9; k++) B.add(L.rope, xf(torus(0.072, 0.011, 4, 12), -0.2 + k * 0.024, 1.29 + k * 0.024 * 0.055, 0.01, 0, Math.PI / 2, 0));
  B.add(L.rope, rod(V3(0.0, 1.24, 0.06), V3(0.05, 0.3, 0.12), 0.01, 0.01, 5));
  B.add(M.iron, wire([V3(1.25, 1.3, 0.01), V3(1.33, 1.3, 0.01), V3(1.33, 1.12, 0.02), V3(1.42, 1.1, 0.03)], 0.012, 10, 4));
  {
    const put = (q) => xf(q, 1.45, 0.135, 0.55, 0, 0.6, Math.PI / 2 - 0.12);
    B.add(M.planks, put(lathe([[0, 0], [0.12, 0], [0.135, 0.22], [0.125, 0.225], [0.11, 0.02], [0, 0.02]], 14)), 0.9);
    for (const y of [0.05, 0.17]) B.add(M.iron, put(torus(0.1235 + y * (0.015 / 0.22) + 0.003, 0.006, 3, 18).rotateX(Math.PI / 2).translate(0, y, 0)));
    B.add(M.iron, put(wire([V3(-0.13, 0.2, 0), V3(-0.08, 0.33, 0), V3(0.08, 0.33, 0), V3(0.13, 0.2, 0)], 0.005, 10, 3)));
  }
  B.build(g);
  const water = mesh(new THREE.CircleGeometry(0.86, 28), new THREE.MeshBasicMaterial({ color: 0x9ab8d8 }), g, 0, 0.3, 0, false);
  water.rotation.x = -Math.PI / 2;
  const glow = new THREE.Sprite(M.glow.clone()); glow.material.color.set(0xa8c8ff); glow.material.opacity = 0.7; glow.scale.set(4, 4, 1); glow.position.y = 1; g.add(glow);
  const light = new THREE.PointLight(0x9ab8ff, 3, 10, 1.5); light.position.y = 1.2; g.add(light);
  g.traverse((o) => { if (o.isMesh && o !== water) { o.castShadow = true; o.receiveShadow = true; } });
  g.userData = { water, glow, light };
  return g;
}

// ================================================================ shroud
// A sheet thrown over a statue: hood, shoulders, deep folds, a ragged hem.
// 2.6 m tall, ~0.8 m hem radius, origin at the hem centre.
export function buildShroud(M) {
  const prof = [[0.8, 0.0], [0.79, 0.25], [0.72, 0.8], [0.62, 1.35], [0.52, 1.72], [0.46, 1.9], [0.38, 2.02], [0.28, 2.12], [0.255, 2.25], [0.235, 2.42], [0.16, 2.54], [0.07, 2.59], [0, 2.6]];
  const geo = lathe(prof, 40, 3, 4);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i), r = Math.hypot(x, z);
    if (r < 1e-4) continue;
    const a = Math.atan2(z, x), k = Math.pow(1 - y / 2.6, 1.6);
    const fold = Math.sin(a * 9 + y * 1.3) * 0.055 * k + NZ.noise(Math.cos(a) * 2.5, y * 2.2 + Math.sin(a) * 2.5) * 0.05 * k;
    const nr = r + fold;
    let yy = y;
    if (y < 0.01) yy += 0.045 * Math.abs(Math.sin(a * 5.5)) + Math.max(0, NZ.noise(Math.cos(a) * 4, Math.sin(a) * 4)) * 0.04;
    p.setXYZ(i, (x / r) * nr, yy, (z / r) * nr);
  }
  geo.computeVertexNormals();
  const m = new THREE.Mesh(geo, M.shroud); m.castShadow = true; m.receiveShadow = true;
  const g = new THREE.Group(); g.add(m);
  return g;
}

// ================================================================ reliquary coffer (chest)
// ~0.9 w x 0.5 h x 0.55 d, origin at the base centre, front +z. userData.lid is
// a hinge on the back top edge (negative rotation.x opens it), userData.glow a
// sprite inside with its own material (opacity 0 until searched).
export function buildChest(M) {
  const L = lib(M);
  const g = new THREE.Group();
  const B = new MergeBucket();
  const W = 0.9, D = 0.55, H = 0.36;
  for (const [x, z] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) B.add(M.iron, xf(sphere(0.03, 8, 6), x * 0.4, 0.024, z * 0.235, 0, 0, 0, 1.1, 0.85, 1.1));
  B.add(M.planks, bevBox(W, 0.03, D, 0.006, 0, 0.055, 0), 1.6);
  for (const sz of [-1, 1]) B.add(M.planks, bevBox(W, H - 0.07, 0.03, 0.006, 0, (0.07 + H) / 2, sz * (D / 2 - 0.015)), 1.6);
  for (const sx of [-1, 1]) B.add(M.planks, bevBox(0.03, H - 0.07, D - 0.06, 0.006, sx * (W / 2 - 0.015), (0.07 + H) / 2, 0), 1.6);
  B.add(L.velvet, new THREE.BoxGeometry(W - 0.065, 0.006, D - 0.065).translate(0, 0.073, 0));
  for (const sz of [-1, 1]) B.add(L.velvet, new THREE.BoxGeometry(W - 0.065, H - 0.08, 0.004).translate(0, (0.075 + H) / 2, sz * (D / 2 - 0.032)));
  for (const sx of [-1, 1]) B.add(L.velvet, new THREE.BoxGeometry(0.004, H - 0.08, D - 0.065).translate(sx * (W / 2 - 0.032), (0.075 + H) / 2, 0));
  // relic within: a gilt cross and a finger bone on the velvet
  B.add(L.bronzeEnv, bevBox(0.025, 0.012, 0.2, 0.003, -0.08, 0.082, 0.0));
  B.add(L.bronzeEnv, bevBox(0.11, 0.012, 0.025, 0.003, -0.08, 0.082, 0.045));
  B.add(L.bone, xf(boneGeo(0.09, 0.006), 0.12, 0.084, -0.05, 0, 0.6, Math.PI / 2));
  // iron: straps, waist band, corner angles, studs, lock plate, side rings
  const studs = (x0, y0, z0, x1, y1, z1, n) => { for (let k = 0; k <= n; k++) { const t = k / n; B.add(M.iron, sphere(0.0085, 6, 4).translate(x0 + (x1 - x0) * t, y0 + (y1 - y0) * t, z0 + (z1 - z0) * t)); } };
  for (const sx of [-0.27, 0.27]) for (const sz of [-1, 1]) {
    B.add(M.iron, new THREE.BoxGeometry(0.05, H - 0.04, 0.008).translate(sx, H / 2 + 0.02, sz * (D / 2 + 0.004)));
    studs(sx, 0.07, sz * (D / 2 + 0.009), sx, H - 0.03, sz * (D / 2 + 0.009), 4);
  }
  for (const sz of [-1, 1]) B.add(M.iron, new THREE.BoxGeometry(W + 0.012, 0.035, 0.007).translate(0, 0.14, sz * (D / 2 + 0.0035)));
  for (const sx of [-1, 1]) B.add(M.iron, new THREE.BoxGeometry(0.007, 0.035, D + 0.012).translate(sx * (W / 2 + 0.0035), 0.14, 0));
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    B.add(M.iron, new THREE.BoxGeometry(0.06, H - 0.03, 0.006).translate(sx * (W / 2 - 0.03), H / 2 + 0.015, sz * (D / 2 + 0.003)));
    B.add(M.iron, new THREE.BoxGeometry(0.006, H - 0.03, 0.06).translate(sx * (W / 2 + 0.003), H / 2 + 0.015, sz * (D / 2 - 0.03)));
    studs(sx * (W / 2 - 0.03), 0.08, sz * (D / 2 + 0.008), sx * (W / 2 - 0.03), H - 0.04, sz * (D / 2 + 0.008), 3);
  }
  {
    const ls = new THREE.Shape([new THREE.Vector2(-0.06, 0), new THREE.Vector2(0.06, 0), ...archPts(0.12, 0.09, 0.06, 6).reverse()]);
    B.add(M.iron, extrude(ls, 0.008, 0.002, 4).translate(0, 0.19, D / 2 + 0.006));
    B.add(M.black, new THREE.CylinderGeometry(0.009, 0.009, 0.006, 8).rotateX(Math.PI / 2).translate(0, 0.24, D / 2 + 0.011));
    B.add(M.black, new THREE.BoxGeometry(0.007, 0.022, 0.006).translate(0, 0.227, D / 2 + 0.011));
    for (const sx of [-1, 1]) {
      B.add(M.iron, new THREE.BoxGeometry(0.008, 0.05, 0.06).translate(sx * (W / 2 + 0.008), 0.27, 0));
      B.add(M.iron, xf(torus(0.045, 0.008, 4, 14), sx * (W / 2 + 0.016), 0.235, 0, 0, Math.PI / 2, 0, 1, 1, 1));
    }
  }
  B.build(g);
  // gabled lid on its hinge
  const lid = pivot(g, 0, H, -D / 2);
  {
    const LB = new MergeBucket();
    const zr = (v) => -v;
    const ls = new THREE.Shape();
    ls.moveTo(zr(-0.012), 0); ls.lineTo(zr(D + 0.012), 0); ls.lineTo(zr(D + 0.012), 0.035); ls.lineTo(zr(D / 2), 0.14); ls.lineTo(zr(-0.012), 0.035); ls.closePath();
    LB.add(M.planks, extrude(ls, W + 0.024, 0.006, 1).rotateY(Math.PI / 2), 1.6);
    const sl = Math.atan2(0.105, D / 2 + 0.012), sLen = Math.hypot(0.105, D / 2 + 0.012);
    for (const sx of [-0.27, 0.27]) {
      for (const side of [-1, 1]) {
        const zc = D / 2 + side * (D / 4 + 0.006), yc = 0.035 + 0.0525 + 0.0095;
        LB.add(M.iron, xf(new THREE.BoxGeometry(0.05, 0.007, sLen), sx, yc, zc, side * sl, 0, 0));
        for (let k = 1; k < 4; k++) { const t = k / 4 - 0.5; LB.add(M.iron, sphere(0.008, 6, 4).translate(sx, yc + 0.005 - t * side * 0.105, zc + t * (D / 2 + 0.012))); }
      }
      LB.add(M.iron, new THREE.BoxGeometry(0.05, 0.035, 0.007).translate(sx, 0.0175, D + 0.016));
    }
    LB.add(M.iron, new THREE.BoxGeometry(0.035, 0.07, 0.008).translate(0, -0.02, D + 0.018));
    LB.add(M.iron, torus(0.011, 0.004, 4, 8).translate(0, -0.05, D + 0.023));
    for (const sx of [-0.36, 0.36]) {
      LB.add(M.iron, new THREE.CylinderGeometry(0.012, 0.012, 0.06, 8).rotateZ(Math.PI / 2).translate(sx, 0, 0));
      LB.add(M.iron, xf(new THREE.BoxGeometry(0.04, 0.006, 0.16), sx, 0.079, 0.08, -sl, 0, 0));
    }
    for (let k = -2; k <= 2; k++) LB.add(M.iron, xf(new THREE.ConeGeometry(0.012, 0.05, 4), k * 0.17, 0.165, D / 2, 0, Math.PI / 4, 0));
    for (const sx of [-1, 1]) {
      LB.add(M.iron, new THREE.BoxGeometry(0.012, 0.09, 0.012).translate(sx * (W / 2 + 0.01), 0.18, D / 2));
      LB.add(M.iron, new THREE.BoxGeometry(0.012, 0.012, 0.055).translate(sx * (W / 2 + 0.01), 0.195, D / 2));
    }
    LB.add(M.iron, new THREE.BoxGeometry(W + 0.03, 0.014, 0.014).translate(0, 0.142, D / 2));
    LB.build(lid);
  }
  const gm = M.glow.clone(); gm.color.set(0xffd890); gm.opacity = 0;
  const glow = new THREE.Sprite(gm); glow.scale.set(1.1, 0.9, 1); glow.position.set(0, 0.3, 0); g.add(glow);
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  g.userData = { lid, glow };
  return g;
}

// ================================================================ crow
// ~0.33 m beak to tail, origin at the feet, facing +z. Pivots: body, head,
// wingL, wingR, tail. Wings are spread sheets with a "fold" morph target;
// rest pose is perched with wings folded (morph 1). Flap with rotation.z
// (wingL positive = up, wingR mirrored). poseCrow() sets it all at once.
const CROW_TILT = 0.36;
function wingGeo(side) {
  const pts = [[0, 0], [0.06, -0.004], [0.13, -0.002], [0.19, 0.006], [0.235, 0.016], [0.265, 0.03],
    [0.272, 0.046], [0.246, 0.05], [0.262, 0.066], [0.236, 0.068], [0.25, 0.088], [0.22, 0.086], [0.232, 0.106], [0.2, 0.1], [0.205, 0.12], [0.176, 0.112],
    [0.15, 0.122], [0.1, 0.125], [0.05, 0.12], [0, 0.105]];
  const sh = new THREE.Shape(pts.map(([x, y]) => new THREE.Vector2(side * x, y)));
  const geo = new THREE.ShapeGeometry(sh, 1);
  const p = geo.attributes.position, uv = geo.attributes.uv;
  const fold = new Float32Array(p.count * 3);
  const along = V3(0, -Math.sin(CROW_TILT), -Math.cos(CROW_TILT)), down = V3(0, -Math.cos(CROW_TILT), Math.sin(CROW_TILT));
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), c = p.getY(i), s = Math.abs(x) / 0.272, cf = c / 0.125;
    uv.setXY(i, s, 1 - cf);
    // spread: lie in the x-z plane (leading edge at z = 0), drooping at the tip
    p.setXYZ(i, x, -0.02 * s * s - 0.006 * cf, -c);
    // folded: along the body's flank, leading edge on top, primaries over the tail
    const out = 0.012 + 0.006 * cf - 0.047 * s * s;
    const fx = side * out, k = 0.03 + s * 0.2;
    fold[i * 3] = fx + along.x * k + down.x * cf * 0.068;
    fold[i * 3 + 1] = along.y * k + down.y * cf * 0.068;
    fold[i * 3 + 2] = along.z * k + down.z * cf * 0.068;
  }
  geo.computeVertexNormals();
  const fg = new THREE.BufferGeometry();
  fg.setAttribute('position', new THREE.BufferAttribute(fold, 3)); fg.setIndex(geo.index); fg.computeVertexNormals();
  geo.morphAttributes.position = [fg.attributes.position];
  geo.morphAttributes.normal = [fg.attributes.normal];
  return geo;
}

export function buildCrow(M) {
  const L = lib(M);
  const g = new THREE.Group();
  // legs and toes gripping the perch
  const legs = [];
  for (const sx of [-1, 1]) {
    legs.push(rod(V3(sx * 0.016, 0.003, 0.006), V3(sx * 0.018, 0.045, -0.004), 0.0038, 0.0045, 5));
    for (const a of [-0.38, 0, 0.38]) legs.push(rod(V3(sx * 0.016, 0.003, 0.006), V3(sx * 0.016 + Math.sin(a) * 0.03, 0.002, 0.006 + Math.cos(a) * 0.03), 0.0028, 0.0018, 4));
    legs.push(rod(V3(sx * 0.016, 0.003, 0.006), V3(sx * 0.016, 0.002, -0.016), 0.0028, 0.0018, 4));
  }
  mesh(merge(legs), L.keratin, g);
  const body = pivot(g, 0, 0.085, -0.01);
  {
    const bg = sphere(1, 16, 12);
    const p = bg.attributes.position;
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
      const tail = z < 0 ? 1 - 0.25 * -z : 1, chest = z > 0 && y < 0.2 ? 1.06 : 1;
      p.setXYZ(i, x * 0.05 * tail * chest, y * 0.055 * (z < 0 ? 1 - 0.2 * -z : 1), z * 0.092);
    }
    bg.computeVertexNormals();
    bg.rotateX(-CROW_TILT);
    mesh(bg, L.feather, body);
  }
  const head = pivot(body, 0, 0.06, 0.06);
  head.rotation.order = 'YXZ';
  {
    const hg = sphere(1, 14, 10);
    const p = hg.attributes.position;
    for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i), z = p.getZ(i); p.setXYZ(i, x * 0.032 * (z > 0.3 ? 0.9 : 1), y * 0.034 * (y > 0.5 ? 0.92 : 1), z * 0.043); }
    hg.computeVertexNormals();
    mesh(hg.translate(0, 0.012, 0.016), L.feather, head);
    const bk = new THREE.ConeGeometry(0.0145, 0.064, 7, 4).rotateX(Math.PI / 2);
    const bp = bk.attributes.position;
    for (let i = 0; i < bp.count; i++) { const z = bp.getZ(i), t = z / 0.032 * 0.5 + 0.5; bp.setY(i, bp.getY(i) * 1.05 - t * t * 0.009 + (bp.getY(i) > 0 ? 0.003 * (1 - t) : 0)); bp.setX(i, bp.getX(i) * 0.72); }
    bk.computeVertexNormals();
    mesh(bk.translate(0, 0.006, 0.077), L.keratin, head);
    const eyes = [];
    for (const sx of [-1, 1]) eyes.push(sphere(0.0062, 10, 8).rotateY(sx * (Math.PI / 2 - 0.55)).translate(sx * 0.0225, 0.019, 0.034));
    mesh(merge(eyes), L.eye, head, 0, 0, 0, false);
  }
  const wingL = pivot(body, 0.042, 0.03, 0.04), wingR = pivot(body, -0.042, 0.03, 0.04);
  wingL.rotation.order = wingR.rotation.order = 'ZYX';
  const wl = mesh(wingGeo(1), L.wing, wingL), wr = mesh(wingGeo(-1), L.wing, wingR);
  wl.morphTargetInfluences = [1]; wr.morphTargetInfluences = [1];
  const tail = pivot(body, 0, -0.03, -0.07);
  {
    const ts = new THREE.Shape([new THREE.Vector2(-0.016, 0), new THREE.Vector2(0.016, 0), new THREE.Vector2(0.034, 0.115), new THREE.Vector2(0.018, 0.134), new THREE.Vector2(0, 0.14), new THREE.Vector2(-0.018, 0.134), new THREE.Vector2(-0.034, 0.115)]);
    const tg = new THREE.ShapeGeometry(ts, 1);
    const p = tg.attributes.position, uv = tg.attributes.uv;
    for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i); uv.setXY(i, 0.3 + y * 4, 0.3 + x * 4); p.setXYZ(i, x, -Math.abs(x) * 0.25 + 0.004, -y); }
    tg.computeVertexNormals();
    tg.rotateX(-CROW_TILT * 0.8);
    mesh(tg, L.wing, tail);
  }
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  g.userData = { body, head, wingL, wingR, tail, wingMeshL: wl, wingMeshR: wr };
  return g;
}

// fold 1 = perched (wings folded), 0 = spread (the body levels out for flight);
// flap in radians (+ = up). Sets only existing numbers: no allocation.
export function poseCrow(crow, fold = 1, flap = 0, headYaw = 0, headPitch = 0) {
  const u = crow.userData;
  u.wingMeshL.morphTargetInfluences[0] = fold; u.wingMeshR.morphTargetInfluences[0] = fold;
  u.wingL.rotation.z = flap; u.wingR.rotation.z = -flap;
  u.head.rotation.y = headYaw; u.head.rotation.x = headPitch;
  u.body.rotation.x = CROW_TILT * 0.9 * (1 - fold);
}

// ================================================================ candles and survivor relics
// 5-9 votive candles on a small stone; userData.flames (sprites using M.flame,
// each with userData.base = [w, h] for flicker). No lights.
export function buildCandleCluster(M) {
  const L = lib(M);
  const g = new THREE.Group();
  const rnd = mulberry32(randSeed());
  const B = new MergeBucket();
  const top = 0.085;
  B.add(M.stone, xf(roughBox(0.36, 0.1, 0.28, { res: 0.06, chip: 0.03, amp: 0.006, seed: rnd() * 50, keepBottom: true, corners: [[1, 1, 1, 0.035]] }), 0, 0.035, 0, 0, (rnd() - 0.5) * 0.3, 0), 0.8);
  const n = 5 + Math.floor(rnd() * 5);
  const flames = [];
  const spots = [];
  for (let tries = 0; spots.length < n && tries < 200; tries++) {
    const r = 0.014 + rnd() * 0.014, x = (rnd() - 0.5) * 0.27, z = (rnd() - 0.5) * 0.19;
    if (spots.some((s) => Math.hypot(s[0] - x, s[1] - z) < s[2] + r + 0.01)) continue;
    spots.push([x, z, r]);
  }
  waxPool(B, L.wax, 0, top - 0.002, 0, 0.1, rnd);
  for (const [x, z, r] of spots) {
    const h = 0.035 + rnd() * rnd() * 0.13 + r;
    const tip = addCandle(B, L.wax, M.iron, x, top - 0.003, z, h, r, rnd, 2 + Math.floor(rnd() * 3));
    const f = new THREE.Sprite(M.flame);
    const fw = 0.02 + r * 1.3, fh = fw * 2;
    f.scale.set(fw, fh, 1); f.position.set(tip.x, tip.y + fh * 0.38, tip.z);
    f.userData.base = [fw, fh];
    g.add(f); flames.push(f);
  }
  B.build(g);
  g.userData = { flames };
  return g;
}

// Oval hand mirror ~0.22 m, origin at the handle grip, glass faces +z.
export function buildHandMirror(M) {
  const L = lib(M);
  const g = new THREE.Group();
  const B = new MergeBucket();
  const cy = 0.135, A = 0.058, Bv = 0.082;
  B.add(L.bronzeEnv, lathe([[0, -0.058], [0.011, -0.057], [0.0145, -0.05], [0.012, -0.043], [0.0088, -0.038], [0.0082, 0.018], [0.011, 0.025], [0.0072, 0.032], [0.0062, 0.04], [0.0105, 0.046], [0.0125, 0.052], [0.006, 0.056], [0, 0.057]], 10));
  for (let k = 0; k < 7; k++) B.add(L.bronzeEnv, torus(0.0095, 0.0016, 3, 10).rotateX(Math.PI / 2).translate(0, -0.03 + k * 0.007, 0));
  const ring = []; for (let k = 0; k < 64; k++) { const a = (k / 64) * TAU; ring.push(V3(Math.cos(a) * A, cy + Math.sin(a) * Bv, 0)); }
  B.add(L.bronzeEnv, wire(ring, 0.0068, 64, 6, true));
  for (let k = 0; k < 18; k++) { const a = (k / 18) * TAU; if (Math.abs(a - Math.PI * 1.5) < 0.3) continue; B.add(L.bronzeEnv, sphere(0.0052, 6, 5).translate(Math.cos(a) * (A + 0.0105), cy + Math.sin(a) * (Bv + 0.0105), 0)); }
  B.add(L.bronzeEnv, xf(sphere(0.016, 10, 6), 0, cy + Bv + 0.014, 0, 0, 0, 0, 1, 0.8, 0.5));
  for (const sx of [-1, 1]) B.add(L.bronzeEnv, xf(sphere(0.01, 8, 5), sx * 0.016, cy + Bv + 0.004, 0, 0, 0, 0, 1, 0.7, 0.5));
  B.add(L.bronzeEnv, xf(new THREE.ConeGeometry(0.004, 0.016, 5), 0, cy + Bv + 0.034, 0));
  B.add(L.bronzeEnv, xf(new THREE.ConeGeometry(0.014, 0.03, 8), 0, cy - Bv - 0.004, 0, Math.PI));
  B.add(L.bronzeEnv, new THREE.CircleGeometry(1, 40).scale(A + 0.002, Bv + 0.002, 1).rotateY(Math.PI).translate(0, cy, -0.0035));
  B.add(L.bronzeEnv, torus(0.03, 0.0025, 3, 24).scale(1, 1.4, 1).translate(0, cy, -0.004));
  B.build(g);
  const glassMat = new THREE.MeshStandardMaterial({ color: 0xc4ccd4, metalness: 1, roughness: 0.05, envMap: L.env, envMapIntensity: 1.5 });
  const glass = mesh(new THREE.CircleGeometry(1, 40).scale(A - 0.003, Bv - 0.003, 1).translate(0, cy, 0.0015), glassMat, g);
  const cr = [];
  for (const [a, l] of [[0.5, 0.05], [2.3, 0.035], [4.1, 0.045]]) cr.push(xf(new THREE.BoxGeometry(l, 0.0009, 0.0004), 0.018 + Math.cos(a) * l / 2, cy + 0.03 + Math.sin(a) * l / 2, 0.0022, 0, 0, a));
  mesh(merge(cr), M.black, g, 0, 0, 0, false);
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  g.userData = { glass };
  return g;
}

// Small glass flask (~0.14 m) of pale, glowing water with a cork, a wax seal
// and a little chain with a cross. Origin at the grip (centre of the bulb).
export function buildHolyWater(M) {
  const L = lib(M);
  const g = new THREE.Group();
  const B = new MergeBucket();
  B.add(L.cork, new THREE.CylinderGeometry(0.0105, 0.0092, 0.024, 10).translate(0, 0.072, 0));
  B.add(L.sealWax, xf(sphere(0.015, 10, 6), 0, 0.085, 0, 0, 0, 0, 1, 0.55, 1));
  for (const a of [0.4, 2.2, 4.0]) B.add(L.sealWax, xf(new THREE.CapsuleGeometry(0.0035, 0.012, 2, 5), Math.cos(a) * 0.012, 0.074, Math.sin(a) * 0.012));
  for (let k = 0; k < 12; k++) { const a = (k / 12) * TAU; B.add(L.bronzeEnv, xf(torus(0.0035, 0.001, 3, 6), Math.cos(a) * 0.0125, 0.058, Math.sin(a) * 0.0125, 0, -a + (k % 2 ? Math.PI / 2 : 0), 0)); }
  for (let k = 0; k < 6; k++) B.add(L.bronzeEnv, xf(torus(0.0035, 0.001, 3, 6), 0.0135 + k * 0.0012, 0.052 - k * 0.0065, 0.004 + k * 0.0015, 0, k % 2 ? Math.PI / 2 : 0, 0.1));
  B.add(L.bronzeEnv, new THREE.BoxGeometry(0.004, 0.018, 0.0018).translate(0.021, 0.006, 0.013));
  B.add(L.bronzeEnv, new THREE.BoxGeometry(0.011, 0.004, 0.0018).translate(0.021, 0.0095, 0.013));
  B.build(g);
  const liquid = mesh(lathe([[0, -0.047], [0.028, -0.047], [0.035, -0.033], [0.037, -0.01], [0.035, 0.008], [0.032, 0.012], [0, 0.012]], 18), L.holyLiquid, g, 0, 0, 0, false);
  liquid.renderOrder = 1;
  const glass = mesh(lathe([[0, -0.05], [0.03, -0.05], [0.038, -0.035], [0.04, -0.01], [0.037, 0.015], [0.027, 0.03], [0.013, 0.043], [0.0102, 0.05], [0.0104, 0.062], [0.0135, 0.064], [0.0135, 0.068], [0.0098, 0.069]], 20), L.flaskGlass, g, 0, 0, 0, false);
  glass.renderOrder = 2;
  g.traverse((o) => { if (o.isMesh) o.receiveShadow = true; });
  g.userData = { liquid, glass };
  return g;
}

// One thick candle in an iron chamberstick (~0.18 m), origin at its base;
// userData.flame is its sprite (userData.base = [w, h]).
export function buildVotiveCandle(M) {
  const L = lib(M);
  const g = new THREE.Group();
  const rnd = mulberry32(randSeed());
  const B = new MergeBucket();
  B.add(L.ironEnv, lathe([[0, 0], [0.058, 0], [0.066, 0.004], [0.069, 0.013], [0.064, 0.015], [0.058, 0.007], [0.034, 0.007], [0.031, 0.012], [0.035, 0.034], [0.032, 0.036], [0.029, 0.016], [0, 0.015]], 16));
  B.add(L.ironEnv, torus(0.016, 0.0042, 4, 12).translate(0.084, 0.024, 0));
  B.add(L.ironEnv, xf(new THREE.BoxGeometry(0.026, 0.004, 0.014), 0.072, 0.012, 0));
  B.add(L.ironEnv, xf(new THREE.BoxGeometry(0.02, 0.003, 0.016), 0.094, 0.041, 0, 0, 0, -0.3));
  const tip = addCandle(B, L.wax, M.iron, 0, 0.015, 0, 0.14, 0.0275, rnd, 4);
  waxPool(B, L.wax, 0.042, 0.007, 0.01, 0.022, rnd);
  for (const a of [0.7, 3.4]) B.add(L.wax, xf(new THREE.CapsuleGeometry(0.004, 0.012, 2, 5), Math.cos(a) * 0.036, 0.03, Math.sin(a) * 0.036, Math.sin(a) * 0.3, 0, -Math.cos(a) * 0.3));
  B.build(g);
  const flame = new THREE.Sprite(M.flame);
  flame.scale.set(0.045, 0.09, 1); flame.position.set(tip.x, tip.y + 0.034, tip.z);
  flame.userData.base = [0.045, 0.09];
  g.add(flame);
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  g.userData = { flame };
  return g;
}

// A rolled linen bandage (~0.1 m with its loose tail and pin). Origin at the
// base under the roll; the roll's axis runs along x.
export function buildBandage(M) {
  const L = lib(M);
  const g = new THREE.Group();
  const B = new MergeBucket();
  const r0 = 0.006, r1 = 0.028, turns = 4, th = 0.0042, N = turns * 26;
  const end = turns * TAU - Math.PI / 2;
  const rr = (a) => r0 + (r1 - r0) * (a / end);
  const pts = [];
  for (let k = 0; k <= N; k++) { const a = (end * k) / N; pts.push(new THREE.Vector2(Math.cos(a) * rr(a), Math.sin(a) * rr(a))); }
  for (let k = N; k >= 0; k--) { const a = (end * k) / N, r = Math.max(0.001, rr(a) - th); pts.push(new THREE.Vector2(Math.cos(a) * r, Math.sin(a) * r)); }
  const roll = new THREE.ExtrudeGeometry(new THREE.Shape(pts), { depth: 0.07, bevelEnabled: false, curveSegments: 1 });
  const uv = roll.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * 9, uv.getY(i) * 9);
  roll.translate(0, 0, -0.035).rotateY(Math.PI / 2).translate(0, r1, 0);
  B.add(L.linen, roll);
  const tail = new THREE.PlaneGeometry(0.068, 0.095, 2, 6);
  const tp = tail.attributes.position;
  for (let i = 0; i < tp.count; i++) {
    const x = tp.getX(i), y = tp.getY(i), t = y / 0.095 + 0.5;
    tp.setXYZ(i, x * (1 - t * 0.06), Math.sin(t * 6 + x * 30) * 0.0012 + 0.0012 + (t > 0.95 ? Math.abs(Math.sin(x * 140)) * 0.0015 : 0), -(t * 0.095) - (t > 0.95 ? Math.abs(Math.sin(x * 90)) * 0.006 : 0));
  }
  tail.computeVertexNormals();
  const tuv = tail.attributes.uv; for (let i = 0; i < tuv.count; i++) tuv.setXY(i, tuv.getX(i) * 0.6, tuv.getY(i) * 0.85);
  B.add(L.linen, tail);
  B.add(L.blood, xf(new THREE.CircleGeometry(1, 9), 0.008, 0.0028, -0.07, -Math.PI / 2, 0, 0.4, 0.013, 0.009, 1));
  B.add(L.blood, xf(new THREE.CircleGeometry(1, 7), -0.012, 0.0028, -0.062, -Math.PI / 2, 0, 0, 0.006, 0.004, 1));
  B.add(M.iron, wire([V3(-0.012, 0.003, -0.045), V3(0.012, 0.0035, -0.047), V3(0.016, 0.0035, -0.052), V3(0.012, 0.003, -0.057), V3(-0.014, 0.0028, -0.055)], 0.0007, 16, 3));
  B.build(g);
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return g;
}

// ================================================================ moor clutter
function boundsOf(g) { return new THREE.Box3().setFromObject(g); }

// Spoked cart wheel with its axis along x, centred at the origin.
function wheelParts(P, r = 0.55, opts = {}) {
  const broken = opts.broken || [], gap = opts.gap ?? -1;
  const ring = (r0, r1, hw, seg, a0 = 0, al = TAU) => lathe([[r0, -hw], [r1, -hw], [r1, -hw], [r1, hw], [r1, hw], [r0, hw], [r0, hw], [r0, -hw]], seg, 1, 1, a0, al).rotateZ(Math.PI / 2);
  if (gap < 0) { P.timber.push(ring(r - 0.09, r - 0.03, 0.035, 28)); P.iron.push(ring(r - 0.03, r, 0.038, 28)); }
  else {
    // a cracked felloe: leave one segment out
    P.timber.push(ring(r - 0.09, r - 0.03, 0.035, 24, gap + 0.5, TAU - 0.5)); P.iron.push(ring(r - 0.03, r, 0.038, 24, gap + 0.45, TAU - 0.4));
  }
  P.timber.push(lathe([[0.0, -0.11], [0.07, -0.11], [0.09, -0.06], [0.095, 0.0], [0.09, 0.06], [0.07, 0.11], [0.0, 0.11]], 12).rotateZ(Math.PI / 2));
  for (const x of [-0.07, 0.07]) P.iron.push(torus(0.088, 0.008, 4, 14).rotateY(Math.PI / 2).translate(x, 0, 0));
  for (let k = 0; k < 12; k++) {
    const a = (k / 12) * TAU;
    const len = broken.includes(k) ? 0.18 : r - 0.1;
    P.timber.push(beam(V3(0, 0, 0), V3(0, Math.cos(a) * len, Math.sin(a) * len), 0.035, 0.05));
  }
}

function sinkTo(geos, q, off) { for (const g of geos) g.applyQuaternion(q).translate(off.x, off.y, off.z); }

// A broken two-wheeled peat cart: one wheel off and lying in the heather, the
// axle end and shafts in the mud, peat spilling out. Origin at ground level
// below the axle, shafts toward +z. userData.bounds (local Box3).
export function buildCart(M) {
  const g = new THREE.Group();
  const rnd = mulberry32(randSeed());
  const P = { timber: [], planks: [], iron: [], peat: [] };
  // ---- the cart in its own level frame: axle along x at y = 0
  P.timber.push(bevBox(1.24, 0.11, 0.12, 0.012, 0, 0.0, 0));
  for (const s of [-1, 1]) P.iron.push(rod(V3(s * 0.6, 0, 0), V3(s * 0.75, 0, 0), 0.03, 0.026, 8));
  const wr = { timber: [], iron: [] }; wheelParts(wr, 0.55);
  for (const q of [...wr.timber, ...wr.iron]) q.translate(0.68, 0, 0);
  for (const s of [-1, 1]) P.timber.push(bevBox(0.1, 0.08, 1.7, 0.01, s * 0.4, 0.1, 0.1));
  for (const z of [-0.6, 0.1, 0.75]) P.timber.push(bevBox(1.0, 0.06, 0.08, 0.008, 0, 0.17, z));
  for (let k = 0; k < 5; k++) P.planks.push(xf(roughBox(0.195, 0.035, 1.5, { res: 0.2, chip: 0.01, seed: k * 5 }), -0.4 + k * 0.2, 0.218, 0.1));
  for (const s of [-1, 1]) {
    for (const y of [0.33, 0.5]) P.planks.push(xf(roughBox(0.035, 0.16, 1.5, { res: 0.2, chip: 0.012, seed: y * 40 + s }), s * 0.5, y, 0.1));
    for (const z of [-0.6, 0.1, 0.8]) P.timber.push(bevBox(0.06, 0.48, 0.06, 0.008, s * 0.53, 0.42, z));
  }
  P.planks.push(xf(roughBox(1.0, 0.32, 0.035, { res: 0.15, chip: 0.012, seed: 3 }), 0, 0.4, 0.86));
  for (const s of [-1, 1]) {
    const sh = [V3(s * 0.4, 0.1, -0.55), V3(s * 0.41, 0.09, 0.8), V3(s * 0.43, 0.12, 1.6), V3(s * 0.42, 0.08, 2.35)];
    P.timber.push(tube(sh, { r: (t) => 0.045 - 0.012 * t, radial: 6, segs: 10, end: 'cap', seed: s * 4 }));
    P.iron.push(rod(V3(s * 0.43, 0.115, 2.14), V3(s * 0.428, 0.11, 2.21), 0.047, 0.045, 8));
  }
  for (const [x, y, z] of [[-0.5, 0.42, 0.86], [0.5, 0.42, 0.86], [-0.5, 0.42, -0.65], [0.5, 0.42, -0.65]]) P.iron.push(new THREE.BoxGeometry(0.075, 0.3, 0.075).translate(x, y, z));
  // peat heaped in the bed
  for (let k = 0; k < 14; k++) {
    const x = (rnd() - 0.5) * 0.75, z = -0.5 + rnd() * 1.1, y = 0.28 + (k > 8 ? 0.11 : 0) + rnd() * 0.02;
    P.peat.push(xf(roughBox(0.24, 0.11, 0.12, { res: 0.08, chip: 0.02, amp: 0.008, seed: k * 3 }), x, y, z, (rnd() - 0.5) * 0.3, rnd() * 3, (rnd() - 0.5) * 0.3));
  }
  // ---- settle it: right wheel rim, left axle end and the left shaft tip on the ground
  const A = V3(0.68, -0.55, 0), Bp = V3(-0.75, 0, 0), C = V3(-0.42, 0.08, 2.35);
  const n = new THREE.Vector3().crossVectors(_a.subVectors(Bp, A), _b.subVectors(C, A)).normalize();
  if (n.y < 0) n.negate();
  const q = new THREE.Quaternion().setFromUnitVectors(n, UP);
  const Aw = A.clone().applyQuaternion(q), Bw = Bp.clone().applyQuaternion(q);
  const off = V3(-(Aw.x + Bw.x) / 2, -Aw.y - 0.03, -(Aw.z + Bw.z) / 2);
  for (const k of Object.keys(P)) sinkTo(P[k], q, off);
  sinkTo(wr.timber, q, off); sinkTo(wr.iron, q, off);
  const B = new MergeBucket();
  for (const q2 of P.timber) B.add(M.timber, q2, 0.8);
  for (const q2 of P.planks) B.add(M.planks, q2, 0.9);
  for (const q2 of P.iron) B.add(M.iron, q2);
  for (const q2 of P.peat) B.add(M.peatBlock, q2, 1.2);
  for (const q2 of wr.timber) B.add(M.timber, q2, 0.8);
  for (const q2 of wr.iron) B.add(M.iron, q2);
  // ---- the lost wheel, a fallen tailboard, spilled peat (ground frame)
  const lw = { timber: [], iron: [] };
  wheelParts(lw, 0.55, { broken: [2, 3, 7], gap: 1.2 });
  const lq = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.06, 0.4, Math.PI / 2 + 0.05));
  for (const k of ['timber', 'iron']) for (const q2 of lw[k]) { q2.applyQuaternion(lq).translate(-1.5, 0.05, 0.35); B.add(k === 'iron' ? M.iron : M.timber, q2, 0.8); }
  B.add(M.planks, xf(roughBox(1.0, 0.3, 0.035, { res: 0.15, chip: 0.02, seed: 8 }), 0.2, 0.03, -1.35, Math.PI / 2 - 0.05, 0.25, 0), 0.9);
  for (let k = 0; k < 9; k++) {
    const x = -0.85 - rnd() * 0.5, z = -1.0 + rnd() * 0.65;
    B.add(M.peatBlock, xf(roughBox(0.24, 0.11, 0.12, { res: 0.08, chip: 0.025, amp: 0.008, seed: 40 + k }), x, 0.04 + (k % 3 === 0 ? 0.08 : 0), z, (rnd() - 0.5) * 0.4, rnd() * 3, (rnd() - 0.5) * 0.4), 1.2);
  }
  B.build(g);
  g.userData = { bounds: boundsOf(g) };
  return g;
}

// Convex polygon inset (CCW or CW), miter offset t inward.
function insetPoly(pts, t) {
  let area = 0;
  for (let i = 0; i < pts.length; i++) { const a = pts[i], b = pts[(i + 1) % pts.length]; area += a.x * b.y - b.x * a.y; }
  const s = area > 0 ? 1 : -1;
  return pts.map((p, i) => {
    const a = pts[(i - 1 + pts.length) % pts.length], b = pts[(i + 1) % pts.length];
    const e1 = new THREE.Vector2().subVectors(p, a).normalize(), e2 = new THREE.Vector2().subVectors(b, p).normalize();
    const n1 = new THREE.Vector2(-e1.y * s, e1.x * s), n2 = new THREE.Vector2(-e2.y * s, e2.x * s);
    const k = t / (1 + n1.dot(n2));
    return new THREE.Vector2(p.x + (n1.x + n2.x) * k, p.y + (n1.y + n2.y) * k);
  });
}

// A weathered six-sided coffin, its lid slid askew. Long axis along z (head at
// -z), origin at the base centre. userData.lid (mesh group), userData.bounds.
export function buildCoffin(M) {
  const L = lib(M);
  const g = new THREE.Group();
  const B = new MergeBucket();
  const rnd = mulberry32(randSeed());
  // outline in (x, z); shapes use (x, -z) so rotateX(-PI/2) maps them to the ground plane
  const out = [[-0.22, -0.95], [0.22, -0.95], [0.32, -0.5], [0.16, 0.95], [-0.16, 0.95], [-0.32, -0.5]].map(([x, z]) => new THREE.Vector2(x, -z));
  const inner = insetPoly(out, 0.032);
  const toG = (geo, y) => geo.rotateX(-Math.PI / 2).translate(0, y, 0);
  const plate = (pts, depth, bevel = 0.004) => { const gg = new THREE.ExtrudeGeometry(new THREE.Shape(pts), { depth, bevelEnabled: bevel > 0, bevelSize: bevel, bevelThickness: bevel, bevelSegments: 1 }); return gg; };
  B.add(M.planks, toG(plate(insetPoly(out, -0.012), 0.035), 0.004), 1.4);
  const wallShape = new THREE.Shape(out); wallShape.holes.push(new THREE.Path(inner.slice().reverse()));
  B.add(M.planks, toG(new THREE.ExtrudeGeometry(wallShape, { depth: 0.36, bevelEnabled: false }), 0.035), 1.4);
  B.add(L.darkWood, toG(plate(insetPoly(inner, 0.002), 0.006, 0), 0.04), 1.4);
  // crumpled grave cloth inside
  {
    const cg = new THREE.PlaneGeometry(0.42, 1.55, 8, 24);
    const p = cg.attributes.position;
    const halfW = (z) => (z < -0.5 ? 0.22 + 0.1 * (z + 0.95) / 0.45 : 0.32 - 0.16 * (z + 0.5) / 1.45) - 0.05;
    for (let i = 0; i < p.count; i++) { const x = p.getX(i), y = p.getY(i); p.setXYZ(i, x * Math.min(1, halfW(-y) / 0.21), y, 0.05 + Math.max(0, NZ.fbm(x * 6 + 3, y * 4, 3)) * 0.12 + Math.sin(x * 20 + y * 6) * 0.01); }
    cg.computeVertexNormals();
    cg.rotateX(-Math.PI / 2).translate(0, 0.02, 0.0);
    B.add(M.shroud, cg);
  }
  // iron bail handles on the long sides
  for (const s of [-1, 1]) for (const t of [0.15, 0.45, 0.75]) {
    const a = new THREE.Vector2(s * 0.32, -0.5), b = new THREE.Vector2(s * 0.16, 0.95);
    const x = a.x + (b.x - a.x) * t, z = a.y + (b.y - a.y) * t;
    const yaw = Math.atan2(b.x - a.x, b.y - a.y);
    const nx = s * Math.cos(yaw), nz = -s * Math.sin(yaw);
    B.add(M.iron, xf(new THREE.BoxGeometry(0.008, 0.05, 0.12), x + nx * 0.004, 0.24, z + nz * 0.004, 0, yaw, 0));
    B.add(M.iron, xf(torus(0.05, 0.007, 4, 12, Math.PI), x + nx * 0.02, 0.215, z + nz * 0.02, 0, yaw + Math.PI / 2, Math.PI + 0.25 * s));
  }
  for (const s of [-1, 1]) B.add(M.iron, xf(torus(0.05, 0.007, 4, 12, Math.PI), 0, 0.215, s * 0.97, 0, 0, Math.PI));
  B.build(g);
  // the lid, slid aside and turned on the rim
  const lid = new THREE.Group();
  {
    const LB = new MergeBucket();
    LB.add(M.planks, toG(plate(insetPoly(out, -0.018), 0.036, 0.005), 0), 1.4);
    LB.add(M.planks, toG(plate(insetPoly(out, 0.07), 0.016, 0.004), 0.04), 1.4);
    LB.add(M.timber, bevBox(0.06, 0.02, 0.95, 0.005, 0, 0.068, -0.08), 0.8);
    LB.add(M.timber, bevBox(0.4, 0.02, 0.06, 0.005, 0, 0.068, -0.32), 0.8);
    const ring = insetPoly(out, 0.02);
    for (let i = 0; i < ring.length; i++) {
      const a = ring[i], b = ring[(i + 1) % ring.length];
      for (let k = 0; k < 4; k++) { const t = (k + 0.5) / 4; LB.add(M.iron, sphere(0.007, 5, 3).translate(a.x + (b.x - a.x) * t, 0.045, -(a.y + (b.y - a.y) * t))); }
    }
    LB.build(lid);
  }
  lid.position.set(0.24, 0.396, 0.05); lid.rotation.set(0, 0.16, -0.025);
  g.add(lid);
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  g.userData = { lid, bounds: boundsOf(g) };
  return g;
}

// Split-rail fence along +x from 0 to `length`, posts every ~1.5 m, some posts
// snapped and some rails broken or fallen. Deterministic for a given seed.
export function buildFence(M, length = 6, seed = 1) {
  const g = new THREE.Group();
  const rnd = mulberry32(seed * 7919 + 17);
  const B = new MergeBucket();
  const n = Math.max(1, Math.round(length / 1.5)), step = length / n;
  const tops = [];
  for (let i = 0; i <= n; i++) {
    const x = i * step + (i > 0 && i < n ? (rnd() - 0.5) * 0.15 : 0);
    const snapped = i > 0 && i < n && rnd() < 0.15;
    const h = snapped ? 0.55 + rnd() * 0.25 : 1.1 + rnd() * 0.18;
    const rx = (rnd() - 0.5) * 0.08, rz = (rnd() - 0.5) * 0.08;
    const post = roughBox(0.11, h + 0.15, 0.1, { res: 0.12, chip: snapped ? 0.06 : 0.02, amp: 0.004, seed: seed * 13 + i, corners: snapped ? [[1, 1, 1, 0.06], [-1, 1, -1, 0.045]] : [[1, 1, 0, 0.035], [-1, 1, 0, 0.035]] });
    B.add(M.timber, xf(post, x, (h - 0.15) / 2, 0, rx, (rnd() - 0.5) * 0.3, rz), 0.8);
    tops.push({ x, h, rx, rz });
  }
  for (let i = 0; i < n; i++) {
    const a = tops[i], b = tops[i + 1];
    for (const [yy, k] of [[0.42, 0], [0.88, 1]]) {
      const ya = Math.min(yy, a.h - 0.08) + (rnd() - 0.5) * 0.05, yb = Math.min(yy, b.h - 0.08) + (rnd() - 0.5) * 0.05;
      const z = k ? 0.075 : -0.075;
      const brk = rnd();
      const len = b.x - a.x + 0.2;
      if ((yy > a.h - 0.08 || yy > b.h - 0.08) || brk < 0.18) {
        // broken: one half still hangs from a post, its end in the grass; the other lies below
        const fromA = yy <= a.h - 0.08 && (brk < 0.09 || yy > b.h - 0.08);
        const px = fromA ? a.x : b.x, py = fromA ? ya : yb, dir = fromA ? 1 : -1;
        const pl = len * (0.35 + rnd() * 0.25);
        const dropA = Math.asin(Math.min(0.95, (py - 0.04) / pl));
        const r1 = roughBox(pl, 0.075, 0.06, { res: 0.2, chip: 0.02, seed: i * 7 + k, corners: [[dir, 1, 1, 0.05]] });
        r1.translate(dir * pl / 2, 0, 0);
        B.add(M.timber, xf(r1, px, py, z, 0, (rnd() - 0.5) * 0.2, -dir * dropA * 0.85), 0.8);
        const rl = len * (0.3 + rnd() * 0.2);
        B.add(M.timber, xf(roughBox(rl, 0.075, 0.06, { res: 0.2, chip: 0.02, seed: i * 11 + k }), (a.x + b.x) / 2 + (rnd() - 0.5) * 0.4, 0.03, z * 2.5 + (rnd() - 0.5) * 0.2, 1.4, (rnd() - 0.5) * 0.6, 0), 0.8);
        continue;
      }
      const rail = roughBox(len, 0.08, 0.065, { res: 0.25, chip: 0.02, amp: 0.004, seed: i * 5 + k * 3 });
      const sag = 0.02 + rnd() * 0.04;
      const p = rail.attributes.position;
      for (let j = 0; j < p.count; j++) { const t = p.getX(j) / (len / 2); p.setY(j, p.getY(j) - sag * (1 - t * t)); }
      rail.computeVertexNormals();
      B.add(M.timber, xf(rail, (a.x + b.x) / 2, (ya + yb) / 2, z, (rnd() - 0.5) * 0.05, 0, Math.atan2(yb - ya, b.x - a.x)), 0.8);
      for (const P of [a, b]) B.add(M.iron, xf(torus(0.07, 0.004, 3, 10), P.x, P === a ? ya : yb, z * 0.5, 0, 0, 0, 0.9, 0.9, 1));
    }
  }
  B.build(g);
  g.userData = { bounds: boundsOf(g) };
  return g;
}

// 2.4 m timber post with a gallows arm and a hanging iron lantern whose glass
// uses M.lanternLit. userData.lampPos (local Vector3 for a light), .glass,
// .lantern (pivot at the hook, free to swing).
export function buildLanternPost(M) {
  const L = lib(M);
  const g = new THREE.Group();
  const B = new MergeBucket();
  B.add(M.stone, xf(roughBox(0.42, 0.2, 0.42, { res: 0.1, chip: 0.04, seed: 5 }), 0, 0.08, 0, 0, 0.3, 0), 0.6);
  for (let k = 0; k < 4; k++) { const a = k * 1.7 + 0.4; B.add(M.stone, xf(roughBox(0.16, 0.1, 0.13, { res: 0.06, chip: 0.03, seed: 11 + k }), Math.cos(a) * 0.32, 0.03, Math.sin(a) * 0.32, 0.2, a, 0.1), 0.6); }
  B.add(M.timber, bevBox(0.15, 2.42, 0.15, 0.02, 0, 1.19, 0), 0.7);
  B.add(M.timber, taper(0.17, 0.07, 0.17, 0.02, 0.02, 0, 2.435, 0), 0.7);
  B.add(M.timber, bevBox(0.64, 0.1, 0.1, 0.012, 0.29, 2.26, 0), 0.7);
  B.add(M.timber, beam(V3(0.0, 1.82, 0), V3(0.42, 2.24, 0), 0.07, 0.07), 0.7);
  for (const s of [-1, 1]) {
    B.add(M.iron, new THREE.BoxGeometry(0.16, 0.05, 0.006).translate(0.06, 2.26, s * 0.054));
    bolt(B, M.iron, 0.02, 2.26, s * 0.06, 'z', 0.011); bolt(B, M.iron, 0.1, 2.26, s * 0.06, 'z', 0.011);
  }
  B.add(M.iron, xf(torus(0.02, 0.006, 4, 10), 0.55, 2.2, 0, 0, Math.PI / 2, 0));
  B.add(M.iron, wire([V3(0.55, 2.2, 0), V3(0.55, 2.15, 0), V3(0.57, 2.12, 0), V3(0.55, 2.1, 0)], 0.005, 10, 4));
  B.build(g);
  const lantern = pivot(g, 0.55, 2.09, 0);
  const LB = new MergeBucket();
  LB.add(L.ironEnv, torus(0.018, 0.005, 4, 8).translate(0, -0.012, 0));
  LB.add(L.ironEnv, new THREE.CylinderGeometry(0.022, 0.028, 0.04, 8).translate(0, -0.05, 0));
  LB.add(L.ironEnv, new THREE.ConeGeometry(0.125, 0.11, 4).rotateY(Math.PI / 4).translate(0, -0.12, 0));
  for (const [dx, dz] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) LB.add(L.ironEnv, new THREE.BoxGeometry(0.014, 0.23, 0.014).translate(dx * 0.074, -0.29, dz * 0.074));
  for (const y of [-0.18, -0.4]) LB.add(L.ironEnv, new THREE.BoxGeometry(0.17, 0.018, 0.17).translate(0, y, 0));
  for (const s of [-1, 1]) for (const ax of ['x', 'z']) LB.add(L.ironEnv, new THREE.BoxGeometry(ax === 'x' ? 0.006 : 0.15, 0.006, ax === 'x' ? 0.15 : 0.006).translate(ax === 'x' ? s * 0.076 : 0, -0.29, ax === 'x' ? 0 : s * 0.076));
  LB.add(L.ironEnv, new THREE.ConeGeometry(0.035, 0.05, 4).rotateX(Math.PI).translate(0, -0.434, 0));
  LB.build(lantern);
  const glass = mesh(new THREE.BoxGeometry(0.135, 0.2, 0.135), M.lanternLit, lantern, 0, -0.29, 0, false);
  g.traverse((o) => { if (o.isMesh) { o.castShadow = o !== glass; o.receiveShadow = true; } });
  g.userData = { lampPos: new THREE.Vector3(0.55, 2.09 - 0.29, 0), glass, lantern, bounds: boundsOf(g) };
  return g;
}

// ================================================================ church masonry
// Pointed-arch tracery frame for a wall opening w wide and h tall in a wall
// `depth` thick. Origin at the bottom centre of the opening. Jambs sit outside
// |x| > w/2 and everything else above y = h (or below 0), so the passable gap
// stays clear. The head carries Y-tracery (two lancets and a foiled oculus)
// that reads as pierced if the wall above is open, or blind if it is solid.
// opts: { rise (arch height above h), jamb (jamb/ring width), mat }.
export function buildGothicWindowFrame(M, w = 1.3, h = 1.32, depth = 0.55, opts = {}) {
  const g = new THREE.Group();
  const B = new MergeBucket();
  const mat = opts.mat ?? M.stoneClean;
  const rise = opts.rise ?? Math.min(w * 0.62, 0.9), jw = opts.jamb ?? 0.18, pr = 0.03, D = depth + pr * 2;
  const E = 0.004;
  for (const s of [-1, 1]) {
    const xc = s * (w / 2 + E + (jw - E) / 2);
    B.add(mat, bevBox(jw - E, h, D, 0.014, xc, h / 2, 0), 0.6);
    for (const sz of [-1, 1]) {
      const sx = s * (w / 2 + E + 0.04), szp = sz * (D / 2 - 0.004);
      B.add(mat, new THREE.CylinderGeometry(0.03, 0.03, h - 0.2, 10).translate(sx, h / 2 - 0.02, szp), 0.6);
      B.add(mat, bevBox(0.07, 0.08, 0.07, 0.01, sx, 0.04, szp), 0.6);
      B.add(mat, taper(0.062, 0.09, 0.062, 0.08, 0.08, sx, h - 0.075, szp), 0.6);
      B.add(mat, bevBox(0.08, 0.03, 0.08, 0.006, sx, h - 0.015, szp), 0.6);
    }
  }
  // voussoirs of the arch ring with a proud keystone
  const N = 18, inn = archPts(w, h, rise, N, 0), ext = archPts(w, h, rise, N, jw);
  const nv = 9;
  for (let j = 0; j < nv; j++) {
    const k0 = Math.round((j * 2 * N) / nv), k1 = Math.round(((j + 1) * 2 * N) / nv);
    const pts = [];
    for (let k = k0; k <= k1; k++) pts.push(inn[k]);
    for (let k = k1; k >= k0; k--) pts.push(ext[k]);
    const key = j === (nv - 1) / 2;
    B.add(mat, extrude(new THREE.Shape(pts), key ? D + 0.03 : D, 0.008, 2, true), 0.6);
  }
  // tracery plate in the head
  {
    const bar = 0.065, tt = 0.07, y0 = h + E;
    const R = (rise * rise + w * w / 4) / w, cx = R - w / 2;
    const hw = (y) => Math.sqrt(Math.max(0, R * R - (y - h) * (y - h))) - cx;
    const outline = [new THREE.Vector2(w / 2, y0), ...archPts(w, h, rise, N, 0).reverse().map((p) => new THREE.Vector2(p.x, Math.max(y0, p.y))).slice(1, -1), new THREE.Vector2(-w / 2, y0)];
    const sh = new THREE.Shape(outline);
    const apex = h + rise;
    let lancetTop = y0 + tt;
    if (w >= 0.6) {
      const l0 = y0 + tt, lh = Math.max(0.04, rise * 0.12);
      let lw = (w - 3 * bar) / 2, lp = null;
      for (let it = 0; it < 30 && lw > 0.08; it++, lw *= 0.94) {
        const lr = Math.min(lw * 0.85, rise * 0.5), xc = bar / 2 + lw / 2;
        const pts = [new THREE.Vector2(xc - lw / 2, l0), new THREE.Vector2(xc + lw / 2, l0), ...archPts(lw, l0 + lh, lr, 8, 0).reverse().map((p) => new THREE.Vector2(p.x + xc, p.y))];
        if (pts.every((p) => Math.abs(p.x) < hw(p.y) - bar * 0.9)) { lp = pts; lancetTop = l0 + lh + lr; break; }
      }
      if (lp) for (const s of [1, -1]) sh.holes.push(new THREE.Path(s > 0 ? lp : lp.map((p) => new THREE.Vector2(-p.x, p.y)).reverse()));
      const yo0 = lancetTop + bar, yo1 = apex - bar * 1.2;
      if (yo1 - yo0 > 0.12) {
        const yo = (yo0 + yo1) / 2;
        let ro = (yo1 - yo0) / 2;
        for (let k = 0; k < 20 && ro > 0.05; k++) { let fits = true; for (let a = 0; a < TAU; a += 0.3) { const px = Math.cos(a) * ro, py = yo + Math.sin(a) * ro; if (Math.abs(px) > hw(py) - bar) fits = false; } if (fits) break; ro *= 0.92; }
        if (ro > 0.05) {
          const qp = [];
          for (let k = 0; k < 40; k++) { const a = (k / 40) * TAU, r = ro * (0.72 + 0.28 * Math.cos(4 * a)); qp.push(new THREE.Vector2(Math.cos(a + Math.PI / 4) * r, yo + Math.sin(a + Math.PI / 4) * r)); }
          sh.holes.push(new THREE.Path(qp));
        }
      }
    } else {
      const lw = w - 2 * bar, l0 = y0 + tt, lr = Math.min(rise - tt - bar * 2, lw * 0.9);
      if (lr > 0.08) sh.holes.push(new THREE.Path([new THREE.Vector2(-lw / 2, l0), new THREE.Vector2(lw / 2, l0), ...archPts(lw, l0 + 0.02, lr * 0.8, 8, 0).reverse()]));
    }
    B.add(mat, extrude(sh, depth + 0.04, 0.01, 3, true), 0.6);
  }
  // hood moulds with label stops, and drip ledges under the sill
  {
    const a = archPts(w, h, rise, N, jw + 0.015), b = archPts(w, h, rise, N, jw + 0.07);
    const hs = new THREE.Shape([...a, ...b.slice().reverse()]);
    for (const sz of [-1, 1]) {
      B.add(mat, extrude(hs, 0.045, 0.008, 2).translate(0, 0, sz * (D / 2 + 0.02)), 0.6);
      for (const s of [-1, 1]) B.add(mat, bevBox(0.09, 0.1, 0.07, 0.012, s * (w / 2 + jw + 0.045), h - 0.04, sz * (D / 2 + 0.03)), 0.6);
      const sill = wedge(w + 2 * jw + 0.1, 0.075, 0.08, 0.035).translate(0, -0.075, depth / 2);
      if (sz < 0) sill.rotateY(Math.PI);
      B.add(mat, sill, 0.6);
    }
  }
  B.build(g);
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  g.userData = { bounds: boundsOf(g), top: h + rise + jw + 0.07 };
  return g;
}

// Stepped stone buttress of height h, origin at its base on the wall face,
// projecting along +z (back face slightly let into the wall at z = -0.05).
function wedge(w, hgt, d0, d1) {
  const g = new THREE.BoxGeometry(w, hgt, d0, 2, 2, 2);
  g.translate(0, hgt / 2, d0 / 2);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const y = p.getY(i) / hgt, z = p.getZ(i);
    if (y > 0) p.setZ(i, z * (1 - y * (1 - d1 / d0)));
  }
  g.computeVertexNormals();
  return g;
}
export function buildButtress(M, h = 4, opts = {}) {
  const g = new THREE.Group();
  const B = new MergeBucket();
  const bw = opts.width ?? 0.75, bd = opts.depth ?? 1.0, mat = opts.mat ?? M.stone;
  const b0 = Math.min(0.35, h * 0.12), y1 = h * 0.5, s1 = Math.min(0.22, h * 0.06), y2 = h * 0.8, d2 = bd * 0.7;
  B.add(mat, xf(roughBox(bw + 0.12, b0 + 0.05, bd + 0.06, { res: 0.18, chip: 0.04, seed: 3 }), 0, (b0 + 0.05) / 2 - 0.05, (bd + 0.06) / 2 - 0.05), 0.36);
  B.add(mat, xf(roughBox(bw, y1 - b0, bd + 0.05, { res: 0.2, chip: 0.03, seed: 7 }), 0, b0 + (y1 - b0) / 2, (bd + 0.05) / 2 - 0.05), 0.36);
  B.add(mat, wedge(bw, s1, bd + 0.05, d2 + 0.05).translate(0, y1, -0.05), 0.36);
  B.add(mat, xf(roughBox(bw * 0.92, y2 - y1 - s1, d2 + 0.05, { res: 0.2, chip: 0.03, seed: 11 }), 0, y1 + s1 + (y2 - y1 - s1) / 2, (d2 + 0.05) / 2 - 0.05), 0.36);
  B.add(mat, wedge(bw * 0.92, h - y2, d2 + 0.05, 0.1).translate(0, y2, -0.05), 0.36);
  B.add(M.stoneClean, wedge(bw + 0.04, 0.06, bd + 0.09, bd + 0.02).translate(0, b0 - 0.005, -0.06), 0.6);
  B.build(g);
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  g.userData = { bounds: boundsOf(g) };
  return g;
}

// ================================================================ dead trees
// One merged, indexed geometry (position/normal/uv), origin at the trunk base,
// 4-7 m tall. Twisted, fluted trunk with buttress roots, a leader and limbs
// that branch and taper to twigs, broken snags, sometimes a lightning-split top.
export function treeGeometry(seed) {
  const rnd = mulberry32(seed);
  const parts = [];
  const H = 4 + rnd() * 3;
  const brokenTop = rnd() < 0.3;
  const trunkH = H * (brokenTop ? 0.62 + rnd() * 0.12 : 0.42 + rnd() * 0.16);
  const r0 = 0.22 + rnd() * 0.12;
  const lean = V3((rnd() - 0.5) * 0.35, 1, (rnd() - 0.5) * 0.35).normalize();
  const tp = [];
  for (let k = 0; k <= 5; k++) {
    const t = k / 5;
    tp.push(V3(lean.x * trunkH * t + Math.sin(t * 4 + seed) * 0.12 * t, -0.35 + (trunkH + 0.35) * t, lean.z * trunkH * t + Math.cos(t * 3 + seed) * 0.12 * t));
  }
  const trunkR = (t) => r0 * (1 - 0.45 * t) * (1 + 0.85 * Math.pow(1 - t, 10));
  const trunk = new Tube(tp, { r: trunkR, radial: 12, segs: 14, flutes: 4 + Math.floor(rnd() * 3), fluteAmp: 0.14, twist: 0.8 + rnd(), bump: 0.12, bumpFreq: 2, seed: seed * 0.37, uRep: 2, vLen: 1.0, end: brokenTop ? 'jag' : 'point', jag: r0 * 1.1 });
  if (!brokenTop) trunk.o.r = (t) => (t < 0.85 ? trunkR(t) : trunkR(0.85) * (1 - (t - 0.85) / 0.15));
  parts.push(trunk.geo());
  const P = V3(), T = V3(), side = V3(), up2 = V3();
  const dirFrom = (axis, spread, upBias, out) => {
    side.set(rnd() - 0.5, (rnd() - 0.5) * 0.3, rnd() - 0.5);
    side.addScaledVector(axis, -side.dot(axis));
    if (side.lengthSq() < 1e-6) side.set(1, 0, 0).addScaledVector(axis, -axis.x);
    side.normalize();
    out.copy(axis).multiplyScalar(Math.cos(spread)).addScaledVector(side, Math.sin(spread));
    out.y += upBias;
    return out.normalize();
  };
  function branch(p0, dir, len, rad, depth) {
    const snag = depth >= 1 && depth <= 2 && rnd() < 0.14;
    const L = snag ? len * (0.25 + rnd() * 0.15) : len;
    const pts = [p0.clone()];
    const p = p0.clone(), d = dir.clone();
    const ns = depth >= 2 ? 3 : 2;
    for (let k = 1; k <= ns; k++) {
      d.x += (rnd() - 0.5) * 0.6; d.z += (rnd() - 0.5) * 0.6; d.y += depth <= 1 ? -0.03 : 0.08; d.normalize();
      p.addScaledVector(d, L / ns); pts.push(p.clone());
    }
    const radial = depth >= 3 ? 8 : depth === 2 ? 6 : depth === 1 ? 5 : 3;
    const tb = new Tube(pts, {
      r: snag ? (t) => rad * (1 - 0.25 * t) : (t) => rad * Math.pow(1 - t, 0.85) + 0.004,
      radial, segs: depth >= 2 ? 6 : depth === 1 ? 4 : 3, flutes: 3, fluteAmp: depth >= 2 ? 0.1 : 0, twist: 0.6, bump: depth >= 2 ? 0.08 : 0,
      seed: rnd() * 100, uRep: 1, vLen: 0.9, end: snag ? 'jag' : undefined, jag: rad * 1.8,
    });
    parts.push(tb.geo());
    if (snag || depth === 0) return;
    const nc = depth >= 2 ? 2 + (rnd() < 0.5 ? 1 : 0) : 2;
    for (let c = 0; c < nc; c++) {
      const t = 0.3 + ((c + rnd() * 0.8) / nc) * 0.6;
      tb.center(t, P); tb.tangent(t, T);
      const nd = dirFrom(T, 0.55 + rnd() * 0.55, depth >= 2 ? 0.15 : -0.05, V3());
      branch(P.clone(), nd, len * (0.5 + rnd() * 0.2), rad * Math.pow(1 - t, 0.85) * (0.62 + rnd() * 0.15), depth - 1);
    }
  }
  const crown = H - trunkH;
  if (!brokenTop) { trunk.center(0.86, P); trunk.tangent(0.86, T); branch(P.clone(), T.clone(), crown * 0.95, trunkR(0.86) * 0.82, 3); }
  const nl = 2 + Math.floor(rnd() * 2) + (brokenTop ? 1 : 0);
  for (let k = 0; k < nl; k++) {
    const t = 0.55 + (k / nl) * 0.38 + rnd() * 0.05;
    trunk.center(t, P); trunk.tangent(t, T);
    up2.copy(T);
    const nd = dirFrom(up2, 0.5 + rnd() * 0.45, 0.15, V3());
    branch(P.clone(), nd, crown * (0.65 + rnd() * 0.25), trunkR(t) * (0.55 + rnd() * 0.1), k === 0 && brokenTop ? 3 : 2);
  }
  for (let k = 0; k < 1 + Math.floor(rnd() * 3); k++) {
    const t = 0.25 + rnd() * 0.3;
    trunk.center(t, P); trunk.tangent(t, T);
    const nd = dirFrom(T, 1.1 + rnd() * 0.4, 0, V3());
    const rr = trunkR(t) * (0.3 + rnd() * 0.15);
    parts.push(tube([P.clone(), P.clone().addScaledVector(nd, 0.2 + rnd() * 0.3)], { r: (u) => rr * (1 - 0.2 * u), radial: 6, segs: 2, end: 'jag', jag: rr * 1.6, seed: k + seed }));
  }
  const nr = 4 + Math.floor(rnd() * 3);
  for (let k = 0; k < nr; k++) {
    const a = (k / nr) * TAU + rnd() * 0.6, len = 0.8 + rnd() * 0.8, c = Math.cos(a), s = Math.sin(a), wob = (rnd() - 0.5) * 0.6;
    parts.push(tube([V3(c * r0 * 0.3, 0.35, s * r0 * 0.3), V3(c * r0 * 1.1, 0.12, s * r0 * 1.1), V3(Math.cos(a + wob * 0.4) * len * 0.6, 0.05 + rnd() * 0.06, Math.sin(a + wob * 0.4) * len * 0.6), V3(Math.cos(a + wob) * len, -0.15, Math.sin(a + wob) * len)],
      { r: (t) => r0 * 0.5 * Math.pow(1 - t, 1.4) + 0.01, radial: 6, segs: 6, bump: 0.15, seed: seed + k * 3, uRep: 1, vLen: 0.9 }));
  }
  const geo = mergeGeometries(parts, false);
  // keep every variant inside the 4-7 m brief whatever the branches did
  geo.computeBoundingBox();
  const top = geo.boundingBox.max.y, want = clamp(top, 4.2, 6.9);
  if (Math.abs(want - top) > 0.01) geo.scale(want / top, want / top, want / top);
  return geo;
}

// ================================================================ rocks
// Weathered boulder: lumpy noise, faint bedding, flat cleavage faces. Flat
// shaded (non-indexed), so the caller's box-projected UVs stay clean.
export function rockGeometry(seed, sx = 1, sy = 0.7, sz = 1) {
  const g = new THREE.IcosahedronGeometry(1, 6);
  const N = new Noise(seed);
  const rnd = mulberry32(seed * 7 + 1);
  const planes = [];
  for (let k = 0, np = 3 + Math.floor(rnd() * 3); k < np; k++) planes.push([V3(rnd() - 0.5, rnd() * 0.9 - 0.15, rnd() - 0.5).normalize(), 0.66 + rnd() * 0.22]);
  const bed = V3(rnd() - 0.5, 2.5, rnd() - 0.5).normalize();
  const p = g.attributes.position, v = V3();
  for (let i = 0; i < p.count; i++) {
    v.set(p.getX(i), p.getY(i), p.getZ(i));
    let d = 1 + N.fbm(v.x * 1.3 + v.z * 0.7, v.y * 1.4 + v.x * 0.6, 4) * 0.3;
    d += (N.ridged(v.x * 2 + v.y, v.z * 2 - v.y, 3) - 0.5) * 0.07;
    v.multiplyScalar(d);
    const b = v.dot(bed) * 7;
    v.addScaledVector(bed, -(b - Math.floor(b)) * 0.012);
    for (const [n, off] of planes) { const k = v.dot(n) - off; if (k > 0) v.addScaledVector(n, -k * 0.9); }
    v.x *= sx; v.y *= sy; v.z *= sz;
    if (v.y < -0.1) v.y = -0.1;
    p.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  return g;
}

// ================================================================ gravestones
// Origin at the base (some stones are sunk below it), 0.5-1.5 m, used through
// InstancedMesh with M.stoneClean; the caller applies box-projected UVs.
// [0] sunken round-topped headstone, [1] celtic ring cross, [2] leaning
// obelisk, [3] cracked gothic slab, [4] old rough-hewn marker.
export function gravestoneGeometries() {
  const nonIdx = (list) => merge(list);
  // ---- [0] round-topped headstone with a moulded border, relief cross and worn lettering
  const roundTop = (hw, r, y0, yb) => { const s = new THREE.Shape(); s.moveTo(-hw, yb); s.lineTo(hw, yb); s.lineTo(hw, y0 - 0.02); s.lineTo(r, y0 - 0.005); s.absarc(0, y0, r, -0.03, Math.PI + 0.03, false); s.lineTo(-hw, y0 - 0.02); s.closePath(); return s; };
  const head = [extrude(roundTop(0.28, 0.25, 0.6, -0.22), 0.11, 0.012, 12)];
  {
    const o = new THREE.Shape(); o.moveTo(-0.235, 0.02); o.lineTo(0.235, 0.02); o.lineTo(0.235, 0.58); o.absarc(0, 0.6, 0.205, -0.1, Math.PI + 0.1, false); o.lineTo(-0.235, 0.58); o.closePath();
    const i = new THREE.Path(); i.moveTo(-0.212, 0.04); i.lineTo(0.212, 0.04); i.lineTo(0.212, 0.58); i.absarc(0, 0.6, 0.183, -0.11, Math.PI + 0.11, false); i.lineTo(-0.212, 0.58); i.closePath();
    o.holes.push(i);
    head.push(extrude(o, 0.01, 0, 10).translate(0, 0, 0.058));
    head.push(new THREE.BoxGeometry(0.026, 0.14, 0.012).translate(0, 0.6, 0.059), new THREE.BoxGeometry(0.09, 0.026, 0.012).translate(0, 0.62, 0.059));
    for (const [y, w] of [[0.42, 0.26], [0.36, 0.3], [0.3, 0.22], [0.2, 0.16]]) head.push(new THREE.BoxGeometry(w, 0.014, 0.006).translate(0, y, 0.056));
  }
  const sunken = nonIdx(head).rotateX(-0.08);
  // ---- [1] celtic ring cross on a stepped base
  const cross = [];
  {
    const cs = new THREE.Shape([[-0.07, 0.2], [0.07, 0.2], [0.062, 0.765], [0.27, 0.74], [0.27, 0.92], [0.062, 0.895], [0.075, 1.13], [-0.075, 1.13], [-0.062, 0.895], [-0.27, 0.92], [-0.27, 0.74], [-0.062, 0.765]].map(([x, y]) => new THREE.Vector2(x, y)));
    cross.push(extrude(cs, 0.1, 0.01, 1));
    const ring = new THREE.Shape(); ring.absarc(0, 0.83, 0.205, 0, TAU, false);
    const hole = new THREE.Path(); hole.absarc(0, 0.83, 0.158, 0, TAU, true); ring.holes.push(hole);
    cross.push(extrude(ring, 0.07, 0.008, 28));
    cross.push(new THREE.CylinderGeometry(0.036, 0.04, 0.112, 12).rotateX(Math.PI / 2).translate(0, 0.83, 0));
    for (const sz of [-1, 1]) for (const x of [-0.044, 0.044]) cross.push(new THREE.BoxGeometry(0.012, 0.46, 0.008).translate(x, 0.48, sz * 0.051));
    cross.push(bevBox(0.44, 0.15, 0.28, 0.015, 0, 0.035, 0), bevBox(0.3, 0.09, 0.2, 0.012, 0, 0.15, 0));
  }
  const celtic = nonIdx(cross);
  // ---- [2] obelisk on a die and plinth, settled out of true
  const ob = [
    bevBox(0.44, 0.16, 0.44, 0.015, 0, 0.04, 0), bevBox(0.32, 0.34, 0.32, 0.012, 0, 0.29, 0),
    taper(0.32, 0.06, 0.32, 0.38, 0.38, 0, 0.49, 0), bevBox(0.38, 0.03, 0.38, 0.006, 0, 0.535, 0),
    taper(0.2, 0.82, 0.2, 0.115, 0.115, 0, 0.96, 0), new THREE.ConeGeometry(0.0813, 0.1, 4).rotateY(Math.PI / 4).translate(0, 1.42, 0),
    new THREE.BoxGeometry(0.22, 0.012, 0.006).translate(0, 0.42, 0.161), new THREE.BoxGeometry(0.22, 0.012, 0.006).translate(0, 0.17, 0.161),
    new THREE.BoxGeometry(0.012, 0.25, 0.006).translate(-0.11, 0.295, 0.161), new THREE.BoxGeometry(0.012, 0.25, 0.006).translate(0.11, 0.295, 0.161),
  ];
  const obelisk = nonIdx(ob).rotateZ(0.08).rotateX(-0.045);
  // ---- [3] gothic slab broken across, the top half slipped
  let cracked;
  {
    const crack = [];
    const rr = mulberry32(31);
    for (let k = 0; k <= 7; k++) { const t = k / 7; crack.push(new THREE.Vector2(-0.29 + 0.58 * t, 0.37 + 0.13 * t + (k > 0 && k < 7 ? (rr() - 0.5) * 0.07 : 0))); }
    const lower = new THREE.Shape([new THREE.Vector2(-0.29, -0.16), new THREE.Vector2(0.29, -0.16), ...crack.slice().reverse()]);
    const upper = new THREE.Shape([...crack, new THREE.Vector2(0.29, 0.74), ...archPts(0.58, 0.74, 0.27, 6).reverse().slice(1, -1), new THREE.Vector2(-0.29, 0.74)]);
    const lo = extrude(lower, 0.1, 0.008, 1, true);
    const up = extrude(upper, 0.1, 0.008, 6, true);
    up.translate(0, -0.43, 0).rotateZ(-0.055).rotateX(0.06).translate(0.018, 0.442, 0.012);
    cracked = nonIdx([lo, up]);
  }
  // ---- [4] an old rough-hewn marker, much worn
  const rough = nonIdx([xf(roughBox(0.48, 0.78, 0.15, { res: 0.07, chip: 0.07, amp: 0.016, band: 0.14, seed: 23, keepBottom: false, corners: [[1, 1, 1, 0.09], [-1, 1, -1, 0.07], [-1, 1, 1, 0.04]] }), 0, 0.27, 0, -0.05, 0, 0.04)]);
  return [sunken, celtic, obelisk, cracked, rough];
}

export function grassBladeGeometry() {
  const g = new THREE.BufferGeometry();
  const w = 0.045, h = 1;
  const pos = [-w, 0, 0, w, 0, 0, -w * 0.7, h * 0.4, 0, w * 0.7, h * 0.4, 0, -w * 0.35, h * 0.75, 0, w * 0.35, h * 0.75, 0, 0, h, 0];
  const uv = [0, 0, 1, 0, 0, 0.4, 1, 0.4, 0, 0.75, 1, 0.75, 0.5, 1];
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setIndex([0, 1, 2, 2, 1, 3, 2, 3, 4, 4, 3, 5, 4, 5, 6]);
  g.computeVertexNormals();
  return g;
}
