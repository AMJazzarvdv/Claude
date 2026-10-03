// The Reliquary: the statue killer's model, poses and per-frame visuals.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { Noise, mulberry32 } from '../noise.js';
import { NZ, mesh, pivot, MergeBucket, boxGeo, worldUV, displaceFolds } from './common.js';

// --------------------------------------------------------------- Reliquary
export const RELIQUARY_POSES = {
  pray: { lean: 0.05, twist: 0, hx: 0.35, hy: 0, hz: 0, l: [-0.95, -0.55, -1.45], r: [-0.95, 0.55, -1.45], curl: 0.6 },
  reach: { lean: 0.38, twist: 0, hx: -0.15, hy: 0, hz: 0.1, l: [-1.5, -0.12, -0.1], r: [-1.55, 0.1, -0.15], curl: 0.05 },
  lunge: { lean: 0.62, twist: 0.35, hx: -0.25, hy: -0.2, hz: 0.25, l: [-1.15, -0.2, -0.3], r: [-2.5, 0.25, -0.7], curl: 0.15 },
  claw: { lean: 0.15, twist: -0.1, hx: -0.4, hy: 0, hz: -0.15, l: [-2.85, -0.4, -0.5], r: [-2.8, 0.45, -0.55], curl: 0.9 },
  tilt: { lean: 0.18, twist: 0.1, hx: 0.25, hy: 0.3, hz: 0.75, l: [0.08, -0.08, -0.15], r: [0.05, 0.1, -0.1], curl: 0.3 },
  beckon: { lean: 0.1, twist: -0.25, hx: 0.05, hy: 0.45, hz: 0.2, l: [-0.7, -0.6, -1.6], r: [-1.25, 0.75, -0.8], curl: 0.45 },
  stalk: { lean: 0.95, twist: 0.05, hx: -0.75, hy: 0.15, hz: -0.1, l: [-0.55, -0.15, -0.25], r: [-0.5, 0.2, -0.2], curl: 0.7 },
  carry: { lean: 0.25, twist: 0.2, hx: 0.1, hy: -0.3, hz: 0.1, l: [-0.4, -0.2, -1.9], r: [-0.9, 0.5, -0.4], curl: 0.8 },
  weep: { lean: 0.3, twist: 0, hx: 0.75, hy: 0, hz: 0.05, l: [-1.7, -0.75, -2.0], r: [-1.65, 0.7, -2.05], curl: 0.5 },
};

export function buildReliquary(M, { alive = true } = {}) {
  const root = new THREE.Group();
  const S = M.relStone;
  // lower robe — tall, narrow, deeply folded, torn at the hem
  const prof = [[0.5, 0], [0.47, 0.08], [0.4, 0.45], [0.32, 0.85], [0.26, 1.12], [0.235, 1.27], [0.22, 1.3]].map(([r, y]) => new THREE.Vector2(r, y));
  const lower = new THREE.LatheGeometry(prof, 64);
  displaceFolds(lower, 11, 0.04, 1.3);
  { const p = lower.attributes.position; for (let i = 0; i < p.count; i++) if (p.getY(i) < 0.01) { const a = Math.atan2(p.getZ(i), p.getX(i)); p.setY(i, Math.max(0, NZ.noise(a * 4, 3) * 0.08 + 0.02)); } lower.computeVertexNormals(); }
  mesh(lower, S, root);
  for (let k = 0; k < 6; k++) {
    const a = (k / 6) * Math.PI * 2 + 0.3;
    const sh = mesh(new THREE.ConeGeometry(0.05, 0.22, 4), S, root, Math.cos(a) * 0.5, 0.04, Math.sin(a) * 0.5);
    sh.rotation.set(Math.PI / 2 + 0.5, 0, -a);
  }
  const chest = pivot(root, 0, 1.24, 0);
  const mprof = [[0.22, 0], [0.26, 0.14], [0.29, 0.28], [0.3, 0.38], [0.24, 0.48], [0.1, 0.55], [0.0, 0.56]].map(([r, y]) => new THREE.Vector2(r, y));
  const mantle = new THREE.LatheGeometry(mprof, 48);
  displaceFolds(mantle, 7, 0.018, 0.56);
  const mm = mesh(mantle, S, chest);
  mm.scale.set(1.08, 1, 0.78);
  // a stole hanging down the front
  for (const sx of [-1, 1]) {
    const st = mesh(new THREE.BoxGeometry(0.07, 0.95, 0.02), S, chest, sx * 0.09, -0.1, 0.24);
    st.rotation.x = -0.12;
  }
  // reliquary box set into the chest: the relic smoulders inside the real one
  const box = pivot(chest, 0, 0.27, 0.215);
  mesh(new THREE.BoxGeometry(0.13, 0.17, 0.07), M.bronze, box);
  mesh(new THREE.ConeGeometry(0.085, 0.07, 4), M.bronze, box, 0, 0.12, 0).rotation.y = Math.PI / 4;
  const relic = mesh(new THREE.PlaneGeometry(0.07, 0.1), alive ? M.relic.clone() : M.relicDead, box, 0, 0, 0.036, false);
  for (const sx of [-1, 1]) mesh(new THREE.BoxGeometry(0.01, 0.12, 0.015), M.bronze, box, sx * 0.04, 0, 0.04);
  const chain = mesh(new THREE.TorusGeometry(0.25, 0.016, 6, 40), M.iron, root, 0, 1.08, 0);
  chain.rotation.x = Math.PI / 2 + 0.12; chain.scale.set(1.1, 0.85, 1);
  // peaked cowl with the mask recessed in its shadow
  const head = pivot(chest, 0, 0.55, 0.03);
  const cowlGeo = new THREE.SphereGeometry(0.2, 32, 24, Math.PI * 0.82, Math.PI * 1.36, 0, Math.PI * 0.72);
  { const p = cowlGeo.attributes.position; for (let i = 0; i < p.count; i++) { const y = p.getY(i); if (y > 0) { const k = y / 0.2; p.setY(i, y * (1 + 0.45 * k * k)); p.setZ(i, p.getZ(i) - 0.07 * k * k); } } cowlGeo.computeVertexNormals(); }
  const hood = mesh(cowlGeo, S, head, 0, 0.1, -0.01);
  hood.scale.set(1, 1.12, 1.2);
  const hoodIn = mesh(cowlGeo.clone(), new THREE.MeshStandardMaterial({ color: 0x020202, roughness: 1, side: THREE.BackSide }), head, 0, 0.1, -0.012, false);
  hoodIn.scale.set(0.985, 1.1, 1.18);
  const face = mesh(new THREE.SphereGeometry(0.12, 28, 22), M.mask, head, 0, 0.085, 0.045);
  face.scale.set(0.78, 1.2, 0.6);
  for (const sx of [-1, 1]) {
    const eye = mesh(new THREE.SphereGeometry(0.024, 10, 8), M.black, head, sx * 0.04, 0.11, 0.108, false);
    eye.scale.set(1.15, 0.7, 0.6);
  }
  const halo = pivot(head, 0, 0.2, -0.22);
  const ring = mesh(new THREE.TorusGeometry(0.34, 0.02, 8, 64, Math.PI * 1.45), M.bronze, halo);
  ring.rotation.z = 0.9;
  const frag = mesh(new THREE.TorusGeometry(0.34, 0.02, 8, 12, 0.45), M.bronze, halo, 0.03, -0.05, 0.02);
  frag.rotation.z = -0.25;
  const rnd = mulberry32(17);
  for (let k = 0; k < 9; k++) {
    const a = (k / 9) * Math.PI * 2;
    const len = 0.08 + rnd() * 0.18;
    const ray = mesh(new THREE.ConeGeometry(0.011, len, 4), M.bronze, halo, Math.cos(a) * (0.36 + len / 2), Math.sin(a) * (0.36 + len / 2), 0);
    ray.rotation.z = a - Math.PI / 2;
  }
  // long arms: open sleeves, thin stone forearms, spindly fingers
  const arms = {};
  for (const side of ['l', 'r']) {
    const sx = side === 'l' ? 1 : -1;
    const sh = pivot(chest, sx * 0.3, 0.38, 0);
    const sleeve = new THREE.CylinderGeometry(0.075, 0.15, 0.44, 18, 4, true);
    displaceFolds(sleeve, 5, 0.012, 0.44, true);
    const sm = mesh(sleeve, S, sh, 0, -0.2, 0);
    sm.material = S.clone(); sm.material.side = THREE.DoubleSide;
    const el = pivot(sh, 0, -0.38, 0);
    mesh(new THREE.CylinderGeometry(0.036, 0.027, 0.52, 10), S, el, 0, -0.26, 0);
    const hand = pivot(el, 0, -0.53, 0);
    mesh(new THREE.BoxGeometry(0.068, 0.1, 0.026), S, hand, 0, -0.04, 0);
    const fingers = [];
    for (let f = 0; f < 4; f++) {
      const fp = pivot(hand, -0.025 + f * 0.017, -0.088, 0);
      const len = [0.19, 0.24, 0.23, 0.18][f];
      const seg1 = mesh(new THREE.CylinderGeometry(0.0075, 0.0065, len * 0.55, 5), S, fp, 0, -len * 0.27, 0);
      const k2 = pivot(fp, 0, -len * 0.55, 0);
      mesh(new THREE.CylinderGeometry(0.0065, 0.003, len * 0.5, 5), S, k2, 0, -len * 0.25, 0);
      fp.userData.k2 = k2;
      fingers.push(fp);
    }
    const th = pivot(hand, sx * 0.038, -0.03, 0.01);
    mesh(new THREE.CylinderGeometry(0.008, 0.005, 0.11, 5), S, th, 0, -0.055, 0);
    th.rotation.z = sx * 0.7;
    arms[side] = { sh, el, hand, fingers };
  }
  root.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  root.userData = { chest, head, arms, relic, alive };
  return root;
}


export function poseReliquary(model, pose) {
  const P = typeof pose === 'string' ? RELIQUARY_POSES[pose] : pose;
  const { chest, head, arms } = model.userData;
  chest.rotation.set(P.lean, P.twist, 0);
  head.rotation.set(P.hx, P.hy, P.hz);
  for (const side of ['l', 'r']) {
    const a = arms[side], v = P[side];
    a.sh.rotation.set(v[0], 0, v[1]);
    a.el.rotation.set(v[2], 0, 0);
    a.hand.rotation.set(-P.curl * 0.3, 0, 0);
    for (const f of a.fingers) { f.rotation.x = -P.curl * 0.8; if (f.userData.k2) f.userData.k2.rotation.x = -P.curl * 1.0; }
  }
}

// Ghostly copy for aura reveals (rendered through walls).
