// Survivor rigs: jointed procedural humans + procedural animation.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { Noise, mulberry32 } from '../noise.js';
import { NZ, mesh, pivot, MergeBucket, boxGeo, worldUV, displaceFolds } from './common.js';

// --------------------------------------------------------------- survivor
export const SURVIVORS = [
  { id: 'wren', short: 'Wren', name: 'Wren Ashdown', title: 'Peat Cutter', jacket: 0x4b5232, pants: 0x3a2e22, skin: 0xd9b08c, hair: 0x5a3b22, extra: 'cap', voice: 1.25,
    bio: 'Cut turf on the moor since she was nine. Knows where the ground will hold.' },
  { id: 'ilias', short: 'Ilias', name: 'Father Ilias Moro', title: 'Defrocked Priest', jacket: 0x18171a, pants: 0x18171a, skin: 0xc79a78, hair: 0x9a9a98, extra: 'cassock', voice: 0.82,
    bio: 'He rang the parish bells the night the village sank. He has not slept since.' },
  { id: 'juno', short: 'Juno', name: 'Juno Okafor', title: 'Lightkeeper\'s Daughter', jacket: 0xb8902a, pants: 0x262a30, skin: 0x6a4630, hair: 0x140e0a, extra: 'oilskin', voice: 1.18,
    bio: 'Followed a lantern inland from the drowned lighthouse. The lantern was not hers.' },
  { id: 'tey', short: 'Tey', name: 'Teodor "Tey" Vas', title: 'Grave-Robber', jacket: 0x2e2420, pants: 0x2b2b2b, skin: 0xe0b896, hair: 0x2a1a10, extra: 'bandana', voice: 0.95,
    bio: 'Dug up the wrong saint. Has been running ever since.' },
];

export function buildSurvivor(def, M) {
  const root = new THREE.Group();
  const body = pivot(root);
  const jacket = M.cloth(def.jacket), pants = M.cloth(def.pants), skin = M.skin(def.skin), hair = M.cloth(def.hair);
  const boot = new THREE.MeshStandardMaterial({ color: 0x1a1410, roughness: 0.7 });
  const j = {};
  j.hips = pivot(body, 0, 0.95, 0);
  mesh(new THREE.BoxGeometry(0.34, 0.2, 0.21), pants, j.hips, 0, 0.02, 0);
  j.spine = pivot(j.hips, 0, 0.06, 0);
  const torso = mesh(new THREE.CapsuleGeometry(0.16, 0.3, 6, 14), jacket, j.spine, 0, 0.27, 0);
  torso.scale.set(1.18, 1, 0.78);
  const hem = mesh(new THREE.CylinderGeometry(0.19, 0.21, 0.16, 16, 1, true), jacket, j.hips, 0, -0.02, 0);
  hem.material = jacket.clone(); hem.material.side = THREE.DoubleSide; hem.scale.set(1, 1, 0.8);
  const belt = mesh(new THREE.CylinderGeometry(0.185, 0.185, 0.035, 16, 1, true), new THREE.MeshStandardMaterial({ color: 0x1e1610, roughness: 0.6, side: THREE.DoubleSide }), j.hips, 0, 0.07, 0);
  belt.scale.set(1, 1, 0.8);
  mesh(new THREE.BoxGeometry(0.04, 0.035, 0.02), M.iron, j.hips, 0, 0.07, 0.15);
  const collar = mesh(new THREE.TorusGeometry(0.075, 0.022, 6, 16), jacket, j.spine, 0, 0.52, 0);
  collar.rotation.x = Math.PI / 2;
  j.neck = pivot(j.spine, 0, 0.55, 0);
  mesh(new THREE.CylinderGeometry(0.045, 0.05, 0.08, 10), skin, j.neck, 0, 0.02, 0);
  j.head = pivot(j.neck, 0, 0.07, 0);
  const head = mesh(new THREE.SphereGeometry(0.105, 20, 16), skin, j.head, 0, 0.1, 0.005);
  head.scale.set(0.92, 1.12, 1);
  const hairCap = mesh(new THREE.SphereGeometry(0.11, 18, 12, 0, Math.PI * 2, 0, Math.PI * 0.55), hair, j.head, 0, 0.115, -0.008);
  hairCap.scale.set(0.95, 1.08, 1.04);
  // back of the head: hair down to the nape
  const back = mesh(new THREE.SphereGeometry(0.108, 16, 12, Math.PI * 1.15, Math.PI * 0.7, 0.2, Math.PI * 0.62), hair, j.head, 0, 0.1, -0.012);
  back.scale.set(0.96, 1.14, 1.06);
  mesh(new THREE.BoxGeometry(0.025, 0.04, 0.03), skin, j.head, 0, 0.085, 0.1);
  const brow = M.cloth(def.hair);
  for (const sx of [-1, 1]) {
    mesh(new THREE.SphereGeometry(0.012, 6, 6), M.black, j.head, sx * 0.036, 0.115, 0.093, false);
    mesh(new THREE.BoxGeometry(0.035, 0.008, 0.01), brow, j.head, sx * 0.037, 0.135, 0.097, false).rotation.z = sx * -0.15;
    mesh(new THREE.SphereGeometry(0.022, 8, 6), skin, j.head, sx * 0.097, 0.1, 0.0).scale.set(0.45, 1, 0.8);
  }
  mesh(new THREE.BoxGeometry(0.04, 0.006, 0.01), new THREE.MeshStandardMaterial({ color: 0x4a2a24, roughness: 0.7 }), j.head, 0, 0.055, 0.098, false);

  for (const side of ['L', 'R']) {
    const sx = side === 'L' ? 1 : -1;
    const sh = (j['sh' + side] = pivot(j.spine, sx * 0.215, 0.47, 0));
    mesh(new THREE.CapsuleGeometry(0.055, 0.2, 4, 10), jacket, sh, 0, -0.14, 0);
    const el = (j['el' + side] = pivot(sh, 0, -0.29, 0));
    mesh(new THREE.CapsuleGeometry(0.047, 0.19, 4, 10), jacket, el, 0, -0.12, 0);
    mesh(new THREE.SphereGeometry(0.052, 10, 8), skin, el, 0, -0.275, 0.005).scale.set(0.85, 1.25, 0.6);
    mesh(new THREE.SphereGeometry(0.02, 6, 6), skin, el, sx * -0.035, -0.26, 0.02);
    const hp = (j['hip' + side] = pivot(j.hips, sx * 0.1, -0.02, 0));
    mesh(new THREE.CapsuleGeometry(0.075, 0.28, 4, 10), pants, hp, 0, -0.21, 0);
    const kn = (j['kn' + side] = pivot(hp, 0, -0.43, 0));
    mesh(new THREE.CapsuleGeometry(0.06, 0.3, 4, 10), pants, kn, 0, -0.2, 0);
    mesh(new THREE.BoxGeometry(0.1, 0.075, 0.25), boot, kn, 0, -0.43, 0.045);
  }

  if (def.extra === 'cap') {
    mesh(new THREE.CylinderGeometry(0.115, 0.115, 0.05, 16), M.cloth(0x3a3428), j.head, 0, 0.19, 0);
    mesh(new THREE.BoxGeometry(0.2, 0.012, 0.09), M.cloth(0x3a3428), j.head, 0, 0.17, 0.1);
    const scarf = mesh(new THREE.TorusGeometry(0.075, 0.03, 8, 16), M.cloth(0x7a2420), j.neck, 0, 0.0, 0);
    scarf.rotation.x = Math.PI / 2;
  } else if (def.extra === 'cassock') {
    mesh(new THREE.CylinderGeometry(0.2, 0.3, 0.75, 16, 1, true), jacket, j.hips, 0, -0.33, 0).material.side = THREE.DoubleSide;
    const collar = mesh(new THREE.TorusGeometry(0.058, 0.014, 6, 16), new THREE.MeshStandardMaterial({ color: 0xeeeeea, roughness: 0.6 }), j.neck, 0, 0.0, 0);
    collar.rotation.x = Math.PI / 2;
    const rosary = mesh(new THREE.TorusGeometry(0.12, 0.006, 4, 20), M.bronze, j.spine, 0, 0.32, 0.12);
    rosary.rotation.x = 0.3;
  } else if (def.extra === 'oilskin') {
    const skirt = mesh(new THREE.CylinderGeometry(0.2, 0.26, 0.4, 16, 1, true), jacket, j.hips, 0, -0.14, 0);
    skirt.material = jacket.clone(); skirt.material.side = THREE.DoubleSide; skirt.material.roughness = 0.45;
    const hood = mesh(new THREE.SphereGeometry(0.12, 14, 10, 0, Math.PI * 2, 0, Math.PI / 2), jacket, j.spine, 0, 0.52, -0.08);
    hood.rotation.x = -1.2;
    mesh(new THREE.SphereGeometry(0.06, 10, 8), hair, j.head, 0, 0.17, -0.09);
  } else if (def.extra === 'bandana') {
    const band = mesh(new THREE.CylinderGeometry(0.113, 0.113, 0.04, 16, 1, true), M.cloth(0x8a1e1a), j.head, 0, 0.16, 0);
    band.material.side = THREE.DoubleSide;
    mesh(new THREE.BoxGeometry(0.16, 0.2, 0.08), M.cloth(0x4a3a28), j.hips, -0.2, -0.05, 0.02);
    const strap = mesh(new THREE.TorusGeometry(0.3, 0.012, 4, 24), M.cloth(0x2a2018), j.spine, -0.03, 0.2, 0);
    strap.rotation.set(0, Math.PI / 2, 0.7);
    mesh(new THREE.CylinderGeometry(0.2, 0.25, 0.45, 14, 1, true), jacket, j.hips, 0, -0.18, 0).material.side = THREE.DoubleSide;
  }

  root.userData = { j, body, pose: {}, def };
  root.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
  return root;
}

const JOINTS = ['hips', 'spine', 'neck', 'head', 'shL', 'elL', 'shR', 'elR', 'hipL', 'knL', 'hipR', 'knR'];

// Procedural animation: compute target joint angles for an animation state,
// then blend toward them.
export function animateSurvivor(rig, anim, t, dt, o = {}) {
  const { j, body } = rig.userData;
  const T = {}; for (const k of JOINTS) T[k] = [0, 0, 0];
  let bodyY = 0, bodyRX = 0, bodyZ = 0;
  const sp = o.speed ?? 0;
  const s = Math.sin, c = Math.cos;
  switch (anim) {
    case 'idle': case 'stand': {
      const b = s(t * 1.6);
      T.spine[0] = 0.03 * b; T.shL[2] = 0.08; T.shR[2] = -0.08; T.elL[0] = -0.15; T.elR[0] = -0.15;
      T.head[0] = o.injured ? 0.25 : 0.02 * b;
      if (o.injured) { T.spine[0] = 0.25; T.shL[0] = -0.4; T.elL[0] = -1.6; }
      break;
    }
    case 'walk': case 'run': case 'back': case 'crouch': {
      const run = anim === 'run', crouch = anim === 'crouch', back = anim === 'back';
      const f = run ? 9.5 : crouch ? 5.5 : 7.2;
      const p = t * f * (back ? -1 : 1);
      const A = run ? 0.75 : crouch ? 0.45 : 0.45;
      T.hipL[0] = s(p) * A; T.hipR[0] = -s(p) * A;
      T.knL[0] = Math.max(0, -s(p + 0.6)) * (run ? 1.4 : 0.8); T.knR[0] = Math.max(0, s(p + 0.6)) * (run ? 1.4 : 0.8);
      T.shL[0] = -s(p) * (run ? 0.9 : 0.4); T.shR[0] = s(p) * (run ? 0.9 : 0.4);
      T.elL[0] = run ? -1.3 : -0.3; T.elR[0] = run ? -1.3 : -0.3;
      T.spine[0] = run ? 0.28 : 0.06; T.spine[1] = s(p) * 0.1;
      bodyY = Math.abs(s(p)) * (run ? 0.06 : 0.025);
      if (crouch) {
        bodyY = -0.38; T.hipL[0] -= 1.1; T.hipR[0] -= 1.1; T.knL[0] += 1.7; T.knR[0] += 1.7;
        T.spine[0] = 0.55; T.head[0] = -0.4; T.shL[0] = -0.5; T.shR[0] = -0.5;
      }
      if (o.injured && !crouch) { T.shL[0] = -0.4; T.elL[0] = -1.7; T.spine[2] = 0.08; T.head[0] = 0.1; }
      if (back) { T.spine[0] = -0.05; T.head[0] = -0.05; }
      break;
    }
    case 'crawl': {
      const p = t * 3 * Math.min(1, sp + 0.15);
      bodyRX = 1.35; bodyY = -0.68;
      T.head[0] = -1.0; T.neck[0] = -0.2;
      T.shL[0] = -2.6 + s(p) * 0.5; T.shR[0] = -2.6 - s(p) * 0.5; T.elL[0] = -0.4; T.elR[0] = -0.4;
      T.hipL[0] = 0.1 + s(p) * 0.2; T.hipR[0] = 0.1 - s(p) * 0.2; T.knL[0] = 0.4; T.knR[0] = 0.6;
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
      break;
    }
    case 'reach': {
      const p = t * 3;
      T.shL[0] = -1.35 + s(p) * 0.08; T.shR[0] = -1.4; T.elL[0] = -0.4; T.elR[0] = -0.5; T.spine[0] = 0.2;
      break;
    }
    case 'hooked': {
      const sw = s(t * 1.3) * (o.struggle ? 0.35 : 0.08);
      T.shL[0] = -2.95; T.shR[0] = -2.95; T.shL[2] = -0.25; T.shR[2] = 0.25; T.elL[0] = -0.2; T.elR[0] = -0.2;
      T.head[0] = 0.55; T.spine[0] = 0.1 + sw; T.spine[1] = sw;
      T.hipL[0] = 0.15 + (o.struggle ? s(t * 9) * 0.5 : 0); T.hipR[0] = -0.05 - (o.struggle ? s(t * 9) * 0.5 : 0);
      T.knL[0] = 0.4; T.knR[0] = 0.3;
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
      break;
    }
    case 'drop': {
      T.shR[0] = -1.0 - 1.4 * Math.max(0, 1 - (o.phase ?? 1)); T.shL[0] = -0.6; T.spine[0] = 0.3;
      break;
    }
  }
  if (o.lookPitch !== undefined && (anim === 'idle' || anim === 'walk' || anim === 'run' || anim === 'back' || anim === 'stand')) {
    T.head[0] += o.lookPitch * 0.5; T.neck[0] += o.lookPitch * 0.3;
    T.head[1] += (o.lookYaw ?? 0) * 0.6; T.neck[1] += (o.lookYaw ?? 0) * 0.3;
  }
  const k = 1 - Math.exp(-dt * (anim === 'vault' ? 25 : 14));
  for (const n of JOINTS) {
    const r = j[n].rotation;
    r.x += (T[n][0] - r.x) * k; r.y += (T[n][1] - r.y) * k; r.z += (T[n][2] - r.z) * k;
  }
  body.position.y += (bodyY - body.position.y) * k;
  body.rotation.x += (bodyRX - body.rotation.x) * k;
  body.position.z += (bodyZ - body.position.z) * k;
}

