// Props and scenery: bells, pallets, Weeping Posts, Lychgates, the Drowned Well,
// shrouds, dead trees, rocks, gravestones, grass.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { Noise, mulberry32 } from '../noise.js';
import { NZ, mesh, pivot, MergeBucket, boxGeo, worldUV, displaceFolds } from './common.js';

// --------------------------------------------------------------- props
export function buildBell(M) {
  const g = new THREE.Group();
  const B = new MergeBucket();
  B.add(M.stoneClean, boxGeo(1.7, 0.42, 1.7, 0, 0.21, 0), 0.6);
  B.add(M.stoneClean, boxGeo(1.9, 0.08, 1.9, 0, 0.44, 0), 0.6);
  for (const sx of [-1, 1]) {
    B.add(M.timber, boxGeo(0.2, 2.9, 0.2, sx * 0.72, 1.9, 0), 0.7);
    B.add(M.timber, boxGeo(0.12, 1.1, 0.12, sx * 0.48, 1.0, 0, 0, 0, sx * 0.55), 0.7);
  }
  B.add(M.timber, boxGeo(1.9, 0.22, 0.24, 0, 3.32, 0), 0.7);
  B.add(M.timber, boxGeo(0.5, 0.18, 0.3, 0, 3.12, 0), 0.7);
  B.add(M.iron, boxGeo(0.08, 0.2, 0.08, 0, 3.0, 0), 1);
  B.build(g);
  // bronze bell on a swinging pivot
  const sw = pivot(g, 0, 3.02, 0);
  const prof = [[0.43, 0], [0.45, 0.025], [0.42, 0.07], [0.35, 0.18], [0.3, 0.36], [0.285, 0.52], [0.26, 0.62], [0.16, 0.69], [0.0, 0.71]].map(([r, y]) => new THREE.Vector2(r, y));
  const bellGeo = new THREE.LatheGeometry(prof, 40);
  const bm = mesh(bellGeo, M.bronze.clone(), sw, 0, -0.73, 0);
  bm.material.side = THREE.DoubleSide;
  const lip = mesh(new THREE.TorusGeometry(0.44, 0.02, 6, 40), M.bronze, sw, 0, -0.71, 0);
  lip.rotation.x = Math.PI / 2;
  const clap = pivot(sw, 0, -0.1, 0);
  mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.5, 6), M.iron, clap, 0, -0.27, 0);
  mesh(new THREE.SphereGeometry(0.05, 10, 8), M.iron, clap, 0, -0.55, 0);
  // rope + striped sally
  const rope = pivot(sw, 0.3, -0.05, 0);
  mesh(new THREE.CylinderGeometry(0.014, 0.014, 1.9, 6), new THREE.MeshStandardMaterial({ color: 0x8a7a5a, roughness: 1 }), rope, 0, -0.95, 0);
  const sally = mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.32, 10), M.cloth(0x8a2a22), rope, 0, -1.35, 0);
  for (const dy of [-0.08, 0.08]) mesh(new THREE.CylinderGeometry(0.042, 0.042, 0.05, 10), M.cloth(0xd8d0c0), rope, 0, -1.35 + dy, 0);
  // candles (lit when unrung, blaze when rung)
  const candles = [];
  for (const [cx, cz] of [[0.65, 0.65], [-0.65, 0.6], [0.6, -0.65], [-0.6, -0.6], [0.2, 0.75]]) {
    const h = 0.12 + Math.random() * 0.2;
    mesh(new THREE.CylinderGeometry(0.03, 0.035, h, 8), M.wax, g, cx, 0.48 + h / 2, cz);
    const fl = new THREE.Sprite(M.flame); fl.scale.set(0.06, 0.12, 1); fl.position.set(cx, 0.48 + h + 0.05, cz);
    g.add(fl); candles.push(fl);
  }
  const light = new THREE.PointLight(0xffa050, 1.6, 9, 1.6);
  light.position.set(0, 1.0, 0); g.add(light);
  const halo = new THREE.Sprite(M.glow.clone()); halo.scale.set(3.5, 3.5, 1); halo.position.set(0, 1.0, 0); g.add(halo);
  const holy = new THREE.Sprite(M.glow.clone()); holy.material.color.set(0xfff0c8); holy.material.opacity = 0; holy.scale.set(7, 7, 1); holy.position.set(0, 3.2, 0); g.add(holy);
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  g.userData = { swing: sw, clap, rope, candles, light, halo, holy };
  return g;
}

export function buildPallet(M) {
  const g = new THREE.Group();
  // Stands upright beside a gap (local X = passage direction, Y = length);
  // rotation.x on the pivot swings it down across the gap toward local +Z.
  const p = pivot(g);
  const B = new MergeBucket();
  const rnd = mulberry32(Math.floor(Math.random() * 1e6));
  for (const sx of [-0.48, 0, 0.48]) B.add(M.timber, boxGeo(0.1, 1.95, 0.08, sx, 0.97, -0.03, 0, 0, (rnd() - 0.5) * 0.02), 0.8);
  for (let k = 0; k < 9; k++) {
    const y = 0.1 + k * 0.215;
    B.add(M.planks, boxGeo(1.18 - rnd() * 0.1, 0.16, 0.035, (rnd() - 0.5) * 0.06, y, 0.03, 0, 0, (rnd() - 0.5) * 0.08), 0.9);
  }
  B.build(p);
  g.userData = { pivot: p };
  return g;
}

export function buildPost(M) {
  const g = new THREE.Group();
  const B = new MergeBucket();
  const pool = mesh(new THREE.CircleGeometry(1.5, 32), M.peat, g, 0, 0.035, 0, false);
  pool.rotation.x = -Math.PI / 2;
  const rm = mesh(new THREE.RingGeometry(1.4, 1.9, 32), new THREE.MeshStandardMaterial({ color: 0x0d0a08, roughness: 1, transparent: true, opacity: 0.9 }), g, 0, 0.03, 0, false);
  rm.rotation.x = -Math.PI / 2;
  // gnarled trunk
  let y = -0.2, x = 0;
  const rads = [0.21, 0.18, 0.15, 0.13];
  for (let k = 0; k < 4; k++) {
    const len = 0.95, rz = (k % 2 ? -1 : 1) * (0.06 + Math.random() * 0.06);
    const c = new THREE.CylinderGeometry(rads[k] * 0.9, rads[k], len * 1.06, 9);
    c.applyMatrix4(new THREE.Matrix4().makeRotationZ(rz)); c.translate(x - Math.sin(rz) * len / 2, y + len / 2, 0);
    B.add(M.bark, c);
    x += -Math.sin(rz) * len; y += len * Math.cos(rz);
  }
  // gibbet arm + brace
  const top = y - 0.12, armLen = 1.35;
  const arm = new THREE.CylinderGeometry(0.09, 0.11, armLen, 8); arm.rotateZ(Math.PI / 2 - 0.08); arm.translate(x + armLen / 2 - 0.05, top, 0);
  B.add(M.bark, arm);
  const brace = new THREE.CylinderGeometry(0.06, 0.07, 0.95, 7); brace.rotateZ(-0.8); brace.translate(x + 0.32, top - 0.33, 0);
  B.add(M.bark, brace);
  // roots into the peat
  for (let k = 0; k < 5; k++) {
    const a = (k / 5) * Math.PI * 2 + 0.4;
    const r = new THREE.ConeGeometry(0.09, 0.9, 5); r.rotateZ(Math.PI / 2 - 0.35); r.rotateY(-a); r.translate(Math.cos(a) * 0.35, 0.05, Math.sin(a) * 0.35);
    B.add(M.bark, r);
  }
  B.build(g);
  const end = new THREE.Vector3(x + armLen - 0.15, top - 0.05, 0);
  for (let k = 0; k < 9; k++) {
    const l = mesh(new THREE.TorusGeometry(0.035, 0.009, 5, 10), M.iron, g, end.x, end.y - 0.06 - k * 0.062, 0);
    l.rotation.y = k % 2 ? Math.PI / 2 : 0;
  }
  // iron hook
  const hookY = end.y - 0.62;
  const hk = mesh(new THREE.TorusGeometry(0.09, 0.018, 6, 16, Math.PI * 1.4), M.iron, g, end.x, hookY - 0.06, 0);
  hk.rotation.set(0, Math.PI / 2, Math.PI * 0.8);
  // reeds and a few bones of earlier mourners
  for (let k = 0; k < 30; k++) {
    const a = Math.random() * Math.PI * 2, r = 1.4 + Math.random() * 0.7, h = 0.5 + Math.random() * 0.9;
    const reed = mesh(new THREE.ConeGeometry(0.012, h, 3), M.reed, g, Math.cos(a) * r, h / 2, Math.sin(a) * r, false);
    reed.rotation.set((Math.random() - 0.5) * 0.3, 0, (Math.random() - 0.5) * 0.3);
  }
  const bone = new THREE.MeshStandardMaterial({ color: 0x8a8272, roughness: 0.8 });
  for (let k = 0; k < 4; k++) {
    const b = mesh(new THREE.CylinderGeometry(0.018, 0.022, 0.32, 6), bone, g, (Math.random() - 0.5) * 2, 0.04, (Math.random() - 0.5) * 2);
    b.rotation.set(Math.PI / 2, Math.random() * 3, 0);
  }
  const tendrils = pivot(g, end.x, 0, 0);
  for (let k = 0; k < 7; k++) {
    const a = (k / 7) * Math.PI * 2;
    const t = mesh(new THREE.ConeGeometry(0.07, 2.0, 6), M.tendril, tendrils, Math.cos(a) * 0.55, 1.0, Math.sin(a) * 0.55);
    t.rotation.set(Math.sin(a) * 0.35, 0, -Math.cos(a) * 0.35);
  }
  tendrils.scale.set(1, 0.001, 1); tendrils.visible = false;
  g.userData = { hangPoint: new THREE.Vector3(end.x, hookY, 0), tendrils };
  return g;
}

export function buildGate(M) {
  const g = new THREE.Group();
  const B = new MergeBucket();
  for (const sx of [-1, 1]) {
    B.add(M.stone, boxGeo(0.8, 3.4, 0.9, sx * 2.25, 1.7, 0), 0.5);
    B.add(M.stone, boxGeo(1.0, 0.3, 1.1, sx * 2.25, 3.5, 0), 0.5);
  }
  // gabled lychgate roof
  for (const s of [-1, 1]) B.add(M.planks, boxGeo(5.8, 0.08, 1.6, 0, 4.15, s * 0.62, 0, s * 0.62, 0), 0.5);
  B.add(M.timber, boxGeo(5.8, 0.2, 0.2, 0, 4.62, 0), 0.6);
  B.add(M.timber, boxGeo(4.0, 0.25, 0.25, 0, 3.55, 0), 0.6);
  // lever pedestal
  B.add(M.stoneClean, boxGeo(0.5, 1.0, 0.5, 3.4, 0.5, 1.2), 0.6);
  B.build(g);
  const doors = [];
  for (const s of [-1, 1]) {
    const hinge = pivot(g, s * 1.85, 0, 0);
    const D = new MergeBucket();
    for (let k = 0; k < 8; k++) D.add(M.iron, boxGeo(0.04, 2.6, 0.04, -s * (0.12 + k * 0.22), 1.4, 0), 1);
    for (const y of [0.3, 1.4, 2.6]) D.add(M.iron, boxGeo(1.8, 0.07, 0.06, -s * 0.9, y, 0), 1);
    D.add(M.iron, boxGeo(1.6, 0.05, 0.05, -s * 0.9, 1.4, 0, 0, 0, s * 0.55), 1);
    D.build(hinge);
    doors.push(hinge);
  }
  const lever = pivot(g, 3.4, 1.0, 1.2);
  mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.6, 8), M.iron, lever, 0, 0.3, 0);
  mesh(new THREE.SphereGeometry(0.06, 8, 8), M.iron, lever, 0, 0.6, 0);
  lever.rotation.x = -0.6;
  const lamps = [];
  for (let k = 0; k < 3; k++) {
    const lp = mesh(new THREE.BoxGeometry(0.16, 0.24, 0.16), M.lanternGlass, g, -0.8 + k * 0.8, 3.25, 0.2, false);
    mesh(new THREE.BoxGeometry(0.2, 0.04, 0.2), M.iron, g, -0.8 + k * 0.8, 3.39, 0.2);
    lamps.push(lp);
  }
  const light = new THREE.PointLight(0xff4020, 0, 10, 1.6); light.position.set(0, 3, 0.8); g.add(light);
  // escape light beyond the gate
  const beyond = new THREE.Sprite(M.glow.clone()); beyond.material.color.set(0xd8e8ff); beyond.material.opacity = 0; beyond.scale.set(10, 8, 1); beyond.position.set(0, 2, -4); g.add(beyond);
  g.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  g.userData = { doors, lever, lamps, light, beyond };
  return g;
}

export function buildHatch(M) {
  const g = new THREE.Group();
  const ring = mesh(new THREE.CylinderGeometry(0.9, 1.0, 0.5, 20, 1, true), M.stone, g, 0, 0.25, 0);
  ring.material = M.stone.clone(); ring.material.side = THREE.DoubleSide;
  mesh(new THREE.TorusGeometry(0.95, 0.12, 8, 24), M.stone, g, 0, 0.5, 0).rotation.x = Math.PI / 2;
  const water = mesh(new THREE.CircleGeometry(0.9, 24), new THREE.MeshBasicMaterial({ color: 0x9ab8d8 }), g, 0, 0.3, 0, false);
  water.rotation.x = -Math.PI / 2;
  const glow = new THREE.Sprite(M.glow.clone()); glow.material.color.set(0xa8c8ff); glow.material.opacity = 0.7; glow.scale.set(4, 4, 1); glow.position.y = 1; g.add(glow);
  const light = new THREE.PointLight(0x9ab8ff, 3, 10, 1.5); light.position.y = 1.2; g.add(light);
  return g;
}

export function buildShroud(M) {
  const geo = new THREE.ConeGeometry(0.75, 2.6, 18, 6, true);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const y = p.getY(i), a = Math.atan2(p.getZ(i), p.getX(i));
    const k = (1.3 - y) / 2.6;
    p.setX(i, p.getX(i) * (1 + Math.sin(a * 7) * 0.08 * k));
    p.setZ(i, p.getZ(i) * (1 + Math.sin(a * 7) * 0.08 * k));
  }
  geo.computeVertexNormals();
  const m = new THREE.Mesh(geo, M.shroud); m.position.y = 1.3; m.castShadow = true;
  const g = new THREE.Group(); g.add(m);
  return g;
}

// Dead tree from recursive branching, merged into one geometry.
export function treeGeometry(seed) {
  const rnd = mulberry32(seed);
  const parts = [];
  const up = new THREE.Vector3(0, 1, 0);
  function branch(start, dir, len, rad, depth) {
    const segs = 3;
    let p = start.clone(), d = dir.clone();
    for (let s = 0; s < segs; s++) {
      const l = len / segs;
      const r0 = rad * (1 - s / segs * 0.45), r1 = rad * (1 - (s + 1) / segs * 0.45);
      const c = new THREE.CylinderGeometry(r1, r0, l * 1.05, depth > 1 ? 7 : 4, 1);
      c.translate(0, l / 2, 0);
      const q = new THREE.Quaternion().setFromUnitVectors(up, d.clone().normalize());
      c.applyQuaternion(q); c.translate(p.x, p.y, p.z);
      parts.push(c);
      p = p.add(d.clone().normalize().multiplyScalar(l));
      d.x += (rnd() - 0.5) * 0.5; d.z += (rnd() - 0.5) * 0.5; d.y += 0.05; d.normalize();
    }
    if (depth <= 0 || rad < 0.02) return;
    const n = 2 + Math.floor(rnd() * 2);
    for (let k = 0; k < n; k++) {
      const a = rnd() * Math.PI * 2, tilt = 0.5 + rnd() * 0.7;
      const nd = new THREE.Vector3(Math.cos(a) * Math.sin(tilt), Math.cos(tilt), Math.sin(a) * Math.sin(tilt)).lerp(d, 0.3).normalize();
      branch(p.clone(), nd, len * (0.55 + rnd() * 0.2), rad * 0.6, depth - 1);
    }
  }
  const h = 4 + rnd() * 3;
  branch(new THREE.Vector3(0, -0.3, 0), new THREE.Vector3((rnd() - 0.5) * 0.2, 1, (rnd() - 0.5) * 0.2), h, 0.22 + rnd() * 0.12, 3);
  // root flare
  for (let k = 0; k < 5; k++) {
    const a = (k / 5) * Math.PI * 2 + rnd();
    const c = new THREE.ConeGeometry(0.12, 0.9, 5); c.rotateZ(Math.PI / 2 - 0.25); c.rotateY(-a); c.translate(Math.cos(a) * 0.3, 0.05, Math.sin(a) * 0.3);
    parts.push(c);
  }
  const g = mergeGeometries(parts.map((p) => { const q = p.index ? p.toNonIndexed() : p; return q; }), false);
  return g;
}

export function rockGeometry(seed, sx = 1, sy = 0.7, sz = 1) {
  const g = new THREE.IcosahedronGeometry(1, 3);
  const N = new Noise(seed);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const v = new THREE.Vector3(p.getX(i), p.getY(i), p.getZ(i));
    const d = 1 + N.fbm(v.x * 1.5 + v.z, v.y * 1.5 + v.x, 4) * 0.35;
    v.multiplyScalar(d); v.x *= sx; v.y *= sy; v.z *= sz;
    if (v.y < -0.1) v.y = -0.1;
    p.setXYZ(i, v.x, v.y, v.z);
  }
  g.computeVertexNormals();
  return g;
}

export function gravestoneGeometries() {
  const a = new THREE.BoxGeometry(0.55, 0.8, 0.12); a.translate(0, 0.4, 0);
  const top = new THREE.CylinderGeometry(0.275, 0.275, 0.12, 16, 1, false, 0, Math.PI); top.rotateX(Math.PI / 2); top.rotateZ(Math.PI / 2); top.translate(0, 0.8, 0);
  const slab = mergeGeometries([a.toNonIndexed(), top.toNonIndexed()]);
  const v = new THREE.BoxGeometry(0.12, 1.1, 0.12); v.translate(0, 0.55, 0);
  const h = new THREE.BoxGeometry(0.55, 0.12, 0.12); h.translate(0, 0.78, 0);
  const cross = mergeGeometries([v.toNonIndexed(), h.toNonIndexed()]);
  const ob = new THREE.CylinderGeometry(0.08, 0.2, 1.5, 4); ob.translate(0, 0.75, 0);
  const obb = new THREE.BoxGeometry(0.45, 0.25, 0.45); obb.translate(0, 0.12, 0);
  const obelisk = mergeGeometries([ob.toNonIndexed(), obb.toNonIndexed()]);
  return [slab, cross, obelisk];
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

