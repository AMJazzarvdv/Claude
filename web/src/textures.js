// Procedural PBR texture generation. Every surface in the game is painted here
// pixel by pixel: albedo, a normal map derived from a height field, and a
// packed roughness/metalness map (G = roughness, B = metalness, like glTF ORM).
import * as THREE from 'three';
import { Noise, mulberry32, clamp, lerp, smoothstep } from './noise.js';

const N = new Noise(1337);
const N2 = new Noise(7331);

function makeData(size) {
  return {
    size,
    col: new Float32Array(size * size * 3),
    h: new Float32Array(size * size),
    rough: new Float32Array(size * size).fill(0.9),
    metal: new Float32Array(size * size),
  };
}

function toTex(arr, size, srgb, channels = 4) {
  const t = new THREE.DataTexture(arr, size, size, THREE.RGBAFormat);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.magFilter = THREE.LinearFilter;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  t.generateMipmaps = true;
  t.anisotropy = 8;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  t.needsUpdate = true;
  return t;
}

function finish(d, normalStrength = 4) {
  const { size, col, h, rough, metal } = d;
  const a = new Uint8Array(size * size * 4);
  const n = new Uint8Array(size * size * 4);
  const o = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const i = y * size + x;
      a[i * 4] = clamp(Math.pow(col[i * 3], 1 / 2.2) * 255, 0, 255);
      a[i * 4 + 1] = clamp(Math.pow(col[i * 3 + 1], 1 / 2.2) * 255, 0, 255);
      a[i * 4 + 2] = clamp(Math.pow(col[i * 3 + 2], 1 / 2.2) * 255, 0, 255);
      a[i * 4 + 3] = 255;
      const xl = (x - 1 + size) % size, xr = (x + 1) % size;
      const yd = (y - 1 + size) % size, yu = (y + 1) % size;
      const dx = (h[y * size + xr] - h[y * size + xl]) * normalStrength;
      const dy = (h[yu * size + x] - h[yd * size + x]) * normalStrength;
      const len = Math.hypot(dx, dy, 1);
      n[i * 4] = (-dx / len * 0.5 + 0.5) * 255;
      n[i * 4 + 1] = (-dy / len * 0.5 + 0.5) * 255;
      n[i * 4 + 2] = (1 / len * 0.5 + 0.5) * 255;
      n[i * 4 + 3] = 255;
      o[i * 4] = 255;
      o[i * 4 + 1] = clamp(rough[i], 0.04, 1) * 255;
      o[i * 4 + 2] = clamp(metal[i], 0, 1) * 255;
      o[i * 4 + 3] = 255;
    }
  }
  return { map: toTex(a, size, true), normalMap: toTex(n, size, false), ormMap: toTex(o, size, false) };
}

function setCol(d, i, r, g, b) { d.col[i * 3] = r; d.col[i * 3 + 1] = g; d.col[i * 3 + 2] = b; }

// ---------------------------------------------------------------- ground
function ground(size = 512) {
  const d = makeData(size);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = x / size, v = y / size, i = y * size + x;
    const base = N.fbm(u * 6, v * 6, 5, 6);
    const grass = smoothstep(-0.15, 0.3, N.fbm(u * 3 + 11, v * 3 + 3, 4, 3));
    const grain = N2.noise(u * 96, v * 96, 96);
    const straw = N2.noise(u * 140, v * 18, 140) * 0.5 + N2.noise(u * 22, v * 160, 22) * 0.5;
    const pebble = N.worley(u * 24, v * 24, 24);
    const peb = smoothstep(0.3, 0.2, pebble.d1) * (pebble.id % 9 === 0 ? 1 : 0);
    const mud = [0.075, 0.058, 0.045], dry = [0.24, 0.215, 0.13], moss = [0.085, 0.11, 0.05];
    const mossM = smoothstep(0.1, 0.5, N2.fbm(u * 5, v * 5, 3, 5));
    let r = lerp(mud[0], lerp(dry[0], moss[0], mossM), grass);
    let g = lerp(mud[1], lerp(dry[1], moss[1], mossM), grass);
    let b = lerp(mud[2], lerp(dry[2], moss[2], mossM), grass);
    const k = 0.75 + base * 0.35 + grain * 0.08 + straw * 0.12 * grass;
    r *= k; g *= k; b *= k;
    r = lerp(r, 0.11, peb * 0.6); g = lerp(g, 0.105, peb * 0.6); b = lerp(b, 0.1, peb * 0.6);
    setCol(d, i, r, g, b);
    const wet = smoothstep(-0.2, -0.45, base) * (1 - grass);
    d.h[i] = base * 0.4 + grain * 0.05 + straw * 0.12 * grass + peb * 0.35;
    d.rough[i] = lerp(0.95, 0.35, wet);
  }
  return finish(d, 6);
}

// ---------------------------------------------------------------- stone blocks
function stoneBlocks(size = 512, mossy = true) {
  const d = makeData(size);
  const rnd = mulberry32(mossy ? 42 : 77);
  // uneven course heights
  const rowsH = [0.3, 0.22, 0.26, 0.22]; const rowY = [0]; for (const h of rowsH) rowY.push(rowY[rowY.length - 1] + h);
  const rows = rowsH.map(() => {
    const n = 2 + Math.floor(rnd() * 2);
    const ws = []; let acc = 0; for (let k = 0; k < n; k++) { const w = 0.6 + rnd() * 0.8; ws.push(w); acc += w; }
    const cuts = []; let s0 = rnd(); for (let k = 0; k < n; k++) { cuts.push(s0 % 1); s0 += ws[k] / acc; }
    cuts.sort((a, b) => a - b);
    return { cuts, tint: Array.from({ length: n }, () => [0.75 + rnd() * 0.4, rnd()]) };
  });
  const mw = 0.01;
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = x / size, v = y / size, i = y * size + x;
    let row = 0; while (row < rows.length - 1 && v >= rowY[row + 1]) row++;
    const fy = (v - rowY[row]) / rowsH[row];
    const R = rows[row];
    let k = R.cuts.length - 1;
    for (let c = 0; c < R.cuts.length; c++) if (u >= R.cuts[c]) k = c;
    const left = R.cuts[k], right = R.cuts[(k + 1) % R.cuts.length] + (k + 1 >= R.cuts.length ? 1 : 0);
    let du = u - left; if (du < 0) du += 1;
    let dr = right - u; if (dr > 1) dr -= 1;
    const chip = N.fbm(u * 22, v * 22, 3, 22) * 0.012;
    const ex = Math.min(du, dr), ey = Math.min(fy, 1 - fy) * rowsH[row];
    const e = Math.min(ex, ey) + chip;
    const mortar = e < mw;
    const bevel = smoothstep(mw, mw + 0.045, e);
    const surf = N.fbm(u * 8 + k * 3.1, v * 8 + row, 5, 8);
    const pit = N2.noise(u * 90, v * 90, 90);
    const crack = smoothstep(0.94, 0.985, N.ridged(u * 4 + row * 0.3, v * 4, 4, 4));
    const [tint, warm] = R.tint[k];
    let c = mortar ? 0.055 : (0.19 + surf * 0.06 + pit * 0.012) * tint * (0.7 + bevel * 0.3);
    c *= 1 - crack * 0.6;
    let r = c * (1.0 + warm * 0.06), g = c * (0.98), b = c * (0.94 - warm * 0.05);
    const mossN = N2.fbm(u * 6 + 3, v * 6, 4, 6);
    const mossM = mossy ? clamp(smoothstep(-0.05, 0.4, mossN) * (mortar ? 1 : (1 - bevel) * 0.8 + smoothstep(0.7, 1.0, fy) * 0.5), 0, 1) : 0;
    r = lerp(r, 0.045, mossM * 0.85); g = lerp(g, 0.07, mossM * 0.85); b = lerp(b, 0.025, mossM * 0.85);
    const streak = smoothstep(0.15, 0.7, N.fbm(u * 20, v * 1.6, 3, 20)) * 0.4;
    r *= 1 - streak; g *= 1 - streak; b *= 1 - streak * 0.9;
    setCol(d, i, r, g, b);
    d.h[i] = mortar ? 0 : bevel * 0.55 + surf * 0.25 + pit * 0.05 - crack * 0.35 + mossM * 0.06;
    d.rough[i] = mortar ? 0.98 : 0.86 + mossM * 0.1 - streak * 0.25;
  }
  return finish(d, 6);
}

// ---------------------------------------------------------------- wood
function planks(size = 512, plankCount = 5, weathered = 0.55) {
  const d = makeData(size);
  const rnd = mulberry32(9);
  const pl = Array.from({ length: plankCount }, () => ({ tint: 0.75 + rnd() * 0.45, off: rnd() * 10, grey: rnd() }));
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = x / size, v = y / size, i = y * size + x;
    const pf = u * plankCount, p = Math.floor(pf), fx = pf - p;
    const P = pl[p];
    const warp = N.fbm(u * 3 + P.off, v * 1.5, 4, 3) * 0.6;
    const ring = Math.sin((fx * 3 + warp) * 22 + P.off) * 0.5 + 0.5;
    const fiber = N2.noise(u * 220, v * 8, 220) * 0.5 + 0.5;
    const knot = N.worley(u * 6 + P.off, v * 3, 6);
    const kn = smoothstep(0.18, 0.04, knot.d1) * (knot.id % 3 === 0 ? 1 : 0);
    const seam = smoothstep(0.03, 0.0, Math.min(fx, 1 - fx));
    let c = (0.55 + ring * 0.25 + fiber * 0.2) * P.tint;
    c *= 1 - kn * 0.55;
    let r = 0.2 * c, g = 0.13 * c, b = 0.075 * c;
    const greyM = clamp(weathered + N2.fbm(u * 4, v * 4, 3, 4) * 0.4 + (P.grey - 0.5) * 0.3, 0, 1);
    const gr = 0.15 * c;
    r = lerp(r, gr, greyM); g = lerp(g, gr * 0.96, greyM); b = lerp(b, gr * 0.9, greyM);
    r *= 1 - seam * 0.85; g *= 1 - seam * 0.85; b *= 1 - seam * 0.85;
    // nails
    const nx = (fx - 0.5) * plankCount, nyA = (v - 0.12) * 1, nyB = (v - 0.88) * 1;
    const nail = Math.min(Math.hypot(nx * 0.2, nyA * 3), Math.hypot(nx * 0.2, nyB * 3));
    const nm = smoothstep(0.018, 0.008, nail);
    r = lerp(r, 0.09, nm); g = lerp(g, 0.07, nm); b = lerp(b, 0.06, nm);
    setCol(d, i, r, g, b);
    d.h[i] = ring * 0.15 + fiber * 0.25 - seam * 0.6 - kn * 0.2 + nm * 0.2;
    d.rough[i] = 0.75 + fiber * 0.15 - nm * 0.4;
    d.metal[i] = nm * 0.8;
  }
  return finish(d, 4);
}

// ---------------------------------------------------------------- bronze
function bronze(size = 256) {
  const d = makeData(size);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = x / size, v = y / size, i = y * size + x;
    const n = N.fbm(u * 6, v * 6, 5, 6);
    const ver = smoothstep(0.05, 0.35, N2.fbm(u * 4 + 5, v * 4, 4, 4) + (1 - v) * 0.15);
    const hammer = N.worley(u * 30, v * 30, 30).d1;
    let r = 0.42 + n * 0.08, g = 0.27 + n * 0.05, b = 0.12 + n * 0.03;
    r = lerp(r, 0.16, ver); g = lerp(g, 0.34, ver); b = lerp(b, 0.28, ver);
    setCol(d, i, r, g, b);
    d.h[i] = hammer * 0.25 + ver * 0.2;
    d.rough[i] = lerp(0.38 + n * 0.1, 0.85, ver);
    d.metal[i] = lerp(1, 0.1, ver);
  }
  return finish(d, 3);
}

// ---------------------------------------------------------------- iron
function iron(size = 256) {
  const d = makeData(size);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = x / size, v = y / size, i = y * size + x;
    const n = N.fbm(u * 8, v * 8, 5, 8);
    const rust = smoothstep(-0.05, 0.3, N2.fbm(u * 5, v * 5, 5, 5));
    let r = lerp(0.13, 0.32, rust), g = lerp(0.12, 0.15, rust), b = lerp(0.115, 0.07, rust);
    r *= 0.85 + n * 0.3; g *= 0.85 + n * 0.3; b *= 0.85 + n * 0.3;
    setCol(d, i, r, g, b);
    d.h[i] = rust * 0.3 + n * 0.2;
    d.rough[i] = lerp(0.45, 0.95, rust);
    d.metal[i] = lerp(0.9, 0.2, rust);
  }
  return finish(d, 4);
}

// ---------------------------------------------------------------- statue stone
function statueStone(size = 512) {
  const d = makeData(size);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = x / size, v = y / size, i = y * size + x;
    const n = N.fbm(u * 5, v * 5, 6, 5);
    const pore = N2.noise(u * 120, v * 120, 120);
    const grime = smoothstep(0.1, 0.6, N.fbm(u * 18, v * 1.2 + 4, 4, 18)) * 0.55 + smoothstep(0.2, -0.4, n) * 0.25;
    const lich = N2.worley(u * 14, v * 14, 14);
    const lm = smoothstep(0.45, 0.2, lich.d1) * smoothstep(0.1, 0.4, N2.fbm(u * 3, v * 3, 3, 3));
    const orange = lich.id % 4 === 0;
    let c = 0.36 + n * 0.06 + pore * 0.02;
    let r = c, g = c * 0.98, b = c * 0.93;
    r = lerp(r, 0.09, grime); g = lerp(g, 0.09, grime); b = lerp(b, 0.08, grime);
    if (orange) { r = lerp(r, 0.3, lm * 0.35); g = lerp(g, 0.2, lm * 0.35); b = lerp(b, 0.1, lm * 0.35); }
    else { r = lerp(r, 0.18, lm * 0.45); g = lerp(g, 0.21, lm * 0.45); b = lerp(b, 0.1, lm * 0.45); }
    setCol(d, i, r, g, b);
    d.h[i] = n * 0.3 + pore * 0.05 + lm * 0.12;
    d.rough[i] = 0.88 - grime * 0.1;
  }
  return finish(d, 4);
}

// ---------------------------------------------------------------- bark
function bark(size = 256) {
  const d = makeData(size);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = x / size, v = y / size, i = y * size + x;
    const warp = N.fbm(u * 2, v * 2, 3, 2) * 0.4;
    const ridge = N2.ridged(u * 6 + warp, v * 1.2, 5, 6);
    const n = N.fbm(u * 16, v * 16, 4, 16);
    const c = 0.05 + ridge * 0.13 + n * 0.03;
    const lich = smoothstep(0.25, 0.5, N.fbm(u * 6 + 9, v * 6, 4, 6));
    setCol(d, i, lerp(c * 1.05, 0.14, lich * 0.5), lerp(c * 0.95, 0.16, lich * 0.5), lerp(c * 0.85, 0.1, lich * 0.5));
    d.h[i] = ridge * 0.8 + n * 0.1;
    d.rough[i] = 0.95;
  }
  return finish(d, 5);
}

// ---------------------------------------------------------------- cloth
function cloth(size = 256) {
  const d = makeData(size);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = x / size, v = y / size, i = y * size + x;
    const wx = Math.sin(u * Math.PI * 2 * 64), wy = Math.sin(v * Math.PI * 2 * 64);
    const weave = (wx > 0) !== (wy > 0) ? Math.abs(wx) : Math.abs(wy);
    const n = N.fbm(u * 5, v * 5, 4, 5);
    const dirt = smoothstep(0.0, 0.5, N2.fbm(u * 3, v * 3, 4, 3)) * 0.4;
    const c = (0.72 + weave * 0.18 + n * 0.12) * (1 - dirt);
    setCol(d, i, c, c * 0.97, c * 0.93);
    d.h[i] = weave * 0.3 + n * 0.1;
    d.rough[i] = 0.95;
  }
  return finish(d, 2);
}

// ---------------------------------------------------------------- reliquary face mask
function maskTex(size = 512) {
  const d = makeData(size);
  // sphere UV: front (+z) sits at u = 0.25, eyes at v ~ 0.56
  const eyes = [0.25 - 0.055, 0.25 + 0.055];
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    const u = x / size, v = y / size, i = y * size + x;
    const n = N.fbm(u * 10, v * 10, 5, 10);
    let c = 0.42 + n * 0.06;
    let tear = 0;
    for (const ex of eyes) {
      const wob = N2.noise(v * 14, ex * 30) * 0.008;
      const dx = Math.abs(u - ex - wob);
      const below = v < 0.56 ? smoothstep(0.08, 0.3, 0.56 - v) * 0.3 + 0.7 : 0;
      const width = 0.006 + (0.56 - v) * 0.02;
      tear = Math.max(tear, smoothstep(width, 0, dx) * below * (v > 0.12 ? 1 : 0));
    }
    const crack = smoothstep(0.004, 0.0, Math.abs(u - 0.262 - N.fbm(v * 6, 1, 3) * 0.03)) * (v > 0.5 && v < 0.95 ? 1 : 0);
    const mouth = smoothstep(0.004, 0.0, Math.abs(v - 0.36 - Math.sin((u - 0.25) * 60) * 0.004)) * smoothstep(0.04, 0.025, Math.abs(u - 0.25));
    c = lerp(c, 0.04, mouth);
    c = lerp(c, 0.06, tear * 0.9);
    c = lerp(c, 0.1, crack);
    setCol(d, i, c, c * 0.98, c * 0.95);
    d.h[i] = n * 0.2 - crack * 0.5 + tear * 0.05;
    d.rough[i] = lerp(0.85, 0.3, tear); // tears look wet
  }
  return finish(d, 3);
}

// ---------------------------------------------------------------- sprites
function canvasTex(size, draw) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  draw(g, size);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function mistSprite() {
  return canvasTex(256, (g, s) => {
    const img = g.createImageData(s, s);
    for (let y = 0; y < s; y++) for (let x = 0; x < s; x++) {
      const u = x / s, v = y / s;
      const r = Math.hypot(u - 0.5, v - 0.5) * 2;
      const n = N.fbm(u * 4, v * 4, 5, 4) * 0.5 + 0.5;
      const a = clamp((1 - r) * 1.4, 0, 1) * n;
      const i = (y * s + x) * 4;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = 255; img.data[i + 3] = a * a * 255;
    }
    g.putImageData(img, 0, 0);
  });
}

function flameSprite() {
  return canvasTex(128, (g, s) => {
    const grd = g.createRadialGradient(s / 2, s * 0.62, 2, s / 2, s * 0.55, s * 0.45);
    grd.addColorStop(0, 'rgba(255,250,220,1)');
    grd.addColorStop(0.25, 'rgba(255,190,90,0.95)');
    grd.addColorStop(0.6, 'rgba(230,90,20,0.45)');
    grd.addColorStop(1, 'rgba(120,20,0,0)');
    g.fillStyle = grd;
    g.beginPath();
    g.moveTo(s / 2, s * 0.04);
    g.bezierCurveTo(s * 0.78, s * 0.4, s * 0.82, s * 0.92, s / 2, s * 0.96);
    g.bezierCurveTo(s * 0.18, s * 0.92, s * 0.22, s * 0.4, s / 2, s * 0.04);
    g.fill();
  });
}

function glowSprite() {
  return canvasTex(128, (g, s) => {
    const grd = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    grd.addColorStop(0, 'rgba(255,255,255,1)');
    grd.addColorStop(0.2, 'rgba(255,255,255,0.5)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd; g.fillRect(0, 0, s, s);
  });
}

function scratchSprite() {
  return canvasTex(128, (g, s) => {
    g.clearRect(0, 0, s, s);
    const rnd = mulberry32(5);
    for (let k = 0; k < 4; k++) {
      g.strokeStyle = `rgba(${150 + rnd() * 60},${20 + rnd() * 20},${20},${0.6 + rnd() * 0.4})`;
      g.lineWidth = 2 + rnd() * 3;
      g.lineCap = 'round';
      g.beginPath();
      const x0 = 20 + k * 22 + rnd() * 8;
      g.moveTo(x0, 10 + rnd() * 20);
      g.quadraticCurveTo(x0 + 10, 64, x0 - 4 + rnd() * 10, 108 + rnd() * 10);
      g.stroke();
    }
  });
}

function dustSprite() {
  return canvasTex(64, (g, s) => {
    const grd = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
    grd.addColorStop(0, 'rgba(220,215,200,0.9)');
    grd.addColorStop(1, 'rgba(200,190,170,0)');
    g.fillStyle = grd; g.fillRect(0, 0, s, s);
  });
}

function grassTuft() {
  return canvasTex(256, (g, s) => {
    g.clearRect(0, 0, s, s);
    const rnd = mulberry32(31);
    for (let k = 0; k < 70; k++) {
      const x0 = s * (0.3 + rnd() * 0.4), lean = (rnd() - 0.5) * s * 0.7, h = s * (0.45 + rnd() * 0.5), w = 2 + rnd() * 3.5;
      const dry = rnd();
      const col = `rgb(${Math.floor(60 + dry * 70)},${Math.floor(62 + dry * 40)},${Math.floor(28 + dry * 12)})`;
      const grd = g.createLinearGradient(0, s, 0, s - h);
      grd.addColorStop(0, 'rgb(22,20,12)'); grd.addColorStop(0.5, col); grd.addColorStop(1, `rgb(${Math.floor(110 + dry * 60)},${Math.floor(100 + dry * 40)},${Math.floor(60)})`);
      g.fillStyle = grd;
      g.beginPath();
      g.moveTo(x0 - w, s);
      g.quadraticCurveTo(x0 + lean * 0.3 - w * 0.5, s - h * 0.6, x0 + lean, s - h);
      g.quadraticCurveTo(x0 + lean * 0.3 + w * 0.5, s - h * 0.6, x0 + w, s);
      g.closePath(); g.fill();
    }
  });
}

// Build everything, yielding between textures so the loading bar can animate.
export async function buildTextures(onProgress) {
  const jobs = [
    ['ground', () => ground(512)],
    ['stone', () => stoneBlocks(512, true)],
    ['stoneClean', () => stoneBlocks(256, false)],
    ['planks', () => planks(512, 5, 0.55)],
    ['timber', () => planks(256, 2, 0.75)],
    ['bronze', () => bronze(256)],
    ['iron', () => iron(256)],
    ['statue', () => statueStone(512)],
    ['bark', () => bark(256)],
    ['cloth', () => cloth(256)],
    ['mask', () => maskTex(512)],
    ['mist', mistSprite], ['flame', flameSprite], ['glow', glowSprite],
    ['scratch', scratchSprite], ['dust', dustSprite], ['tuft', grassTuft],
  ];
  const out = {};
  for (let k = 0; k < jobs.length; k++) {
    const [name, fn] = jobs[k];
    out[name] = fn();
    onProgress?.((k + 1) / jobs.length, name);
    await new Promise((r) => setTimeout(r, 0));
  }
  return out;
}
