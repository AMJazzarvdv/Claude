// Crows perch on the moor. Survivors who run past startle them (the
// Reliquary hears it); the stone itself startles them too when it moves near,
// which gives the living a warning of where it walks.
import * as THREE from 'three';
import * as PM from './models/props.js';
import { V, flatDist } from './entities.js';

function buildCrowModel(M) {
  if (typeof PM.buildCrow === 'function') return PM.buildCrow(M);
  // stand-in until the crow model exists
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: 0x0b0b0d, roughness: 0.45 });
  const body = new THREE.Group(); body.position.y = 0.1; g.add(body);
  const b = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), mat); b.scale.set(0.8, 0.8, 1.5); body.add(b);
  const head = new THREE.Group(); head.position.set(0, 0.06, 0.09); body.add(head);
  head.add(new THREE.Mesh(new THREE.SphereGeometry(0.04, 8, 6), mat));
  const wingL = new THREE.Group(); wingL.position.set(0.05, 0.02, 0); body.add(wingL);
  const wingR = new THREE.Group(); wingR.position.set(-0.05, 0.02, 0); body.add(wingR);
  for (const [w, sx] of [[wingL, 1], [wingR, -1]]) { const m = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.01, 0.1), mat); m.position.x = sx * 0.08; w.add(m); }
  const tail = new THREE.Group(); tail.position.set(0, 0, -0.1); body.add(tail);
  g.userData = { body, head, wingL, wingR, tail };
  return g;
}

export class Crows {
  constructor(G, perches) {
    this.G = G; this.list = [];
    for (const [pi, p] of perches.entries()) {
      const n = 1 + Math.floor(Math.random() * 3);
      for (let k = 0; k < n; k++) {
        const model = buildCrowModel(G.M);
        const j = p.wall ? 0.18 : 0.9;
        const home = V(p.x + (Math.random() - 0.5) * j, p.y, p.z + (Math.random() - 0.5) * j);
        const c = { model, home, pos: home.clone(), yaw: Math.random() * 6.28, state: 'perch', t: Math.random() * 10, vel: V(), respawn: 0, perch: pi, peck: 0 };
        model.position.copy(home); model.rotation.y = c.yaw;
        model.scale.setScalar(0.9 + Math.random() * 0.25);
        G.world.root.add(model);
        this.list.push(c);
      }
    }
  }

  scare(perch, from, bySurvivor) {
    const G = this.G;
    let cawed = false;
    for (const c of this.list) {
      if (c.perch !== perch || c.state !== 'perch') continue;
      c.state = 'fly'; c.t = 0;
      const away = V(c.pos.x - from.x, 0, c.pos.z - from.z);
      if (away.lengthSq() < 0.01) away.set(Math.random() - 0.5, 0, Math.random() - 0.5);
      away.normalize();
      const side = V(-away.z, 0, away.x).multiplyScalar((Math.random() - 0.5) * 1.6);
      c.vel.copy(away.add(side).normalize().multiplyScalar(4 + Math.random() * 2)); c.vel.y = 4.5 + Math.random() * 2;
      if (!cawed) { G.audio.cawAt(c.pos.clone()); cawed = true; }
    }
    if (bySurvivor) G.noise(from, 32, 'crows');
  }

  update(dt) {
    const G = this.G, k = G.killer;
    for (const c of this.list) {
      const ud = c.model.userData;
      c.t += dt;
      if (c.state === 'perch') {
        // idle: head turns and the odd peck
        c.peck -= dt;
        if (c.peck < 0) c.peck = 1.5 + Math.random() * 4;
        if (ud.head) { ud.head.rotation.y = Math.sin(c.t * 0.9 + c.home.x) * 0.7; ud.head.rotation.x = c.peck < 0.25 ? 0.9 : 0; }
        if (ud.wingL) { ud.wingL.rotation.z = 0; ud.wingR.rotation.z = 0; }
        // what startles it
        for (const s of G.survivors) {
          if (!s.standing) continue;
          const d = flatDist(s.pos, c.pos);
          if ((d < 4.5 && s.speed > 2.6) || d < 1.6) { this.scare(c.perch, s.pos, true); break; }
        }
        if (c.state === 'perch' && k && k.moving && flatDist(k.pos, c.pos) < 6) this.scare(c.perch, k.pos, false);
      } else if (c.state === 'fly') {
        c.vel.y = Math.max(1.4, c.vel.y - dt * 1.5);
        c.pos.addScaledVector(c.vel, dt);
        c.model.position.copy(c.pos);
        c.model.rotation.y = Math.atan2(c.vel.x, c.vel.z);
        const flap = Math.sin(c.t * 28) * 1.1;
        if (ud.wingL) { ud.wingL.rotation.z = flap; ud.wingR.rotation.z = -flap; }
        if (ud.body) ud.body.rotation.x = -0.35;
        if (c.t > 6) { c.state = 'gone'; c.model.visible = false; c.respawn = 50 + Math.random() * 40; }
      } else if (c.state === 'gone') {
        c.respawn -= dt;
        // return only when nobody is close enough to see it land
        if (c.respawn <= 0 && !G.survivors.some((s) => s.alive && flatDist(s.pos, c.home) < 14)) {
          c.state = 'perch'; c.pos.copy(c.home); c.t = 0;
          c.model.position.copy(c.home); c.model.visible = true;
          if (ud.body) ud.body.rotation.x = 0;
        }
      }
    }
  }
}
