// Seeded randomness + tileable gradient noise. Everything procedural in the
// game (textures, map layout, tree shapes) is driven from here.

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export class Noise {
  constructor(seed = 1) {
    const rnd = mulberry32(seed);
    this.perm = new Uint16Array(512);
    this.gx = new Float32Array(256);
    this.gy = new Float32Array(256);
    const p = [];
    for (let i = 0; i < 256; i++) {
      p.push(i);
      const a = rnd() * Math.PI * 2;
      this.gx[i] = Math.cos(a); this.gy[i] = Math.sin(a);
    }
    for (let i = 255; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]; }
    for (let i = 0; i < 512; i++) this.perm[i] = p[i & 255];
  }

  // Gradient noise in [-1,1]. If period > 0 the lattice wraps, making it tileable.
  noise(x, y, period = 0) {
    let xi = Math.floor(x), yi = Math.floor(y);
    const xf = x - xi, yf = y - yi;
    let x1 = xi + 1, y1 = yi + 1;
    if (period > 0) {
      xi = ((xi % period) + period) % period; yi = ((yi % period) + period) % period;
      x1 = ((x1 % period) + period) % period; y1 = ((y1 % period) + period) % period;
    }
    const P = this.perm;
    const g = (ix, iy, dx, dy) => { const h = P[(P[ix & 255] + iy) & 511]; return this.gx[h] * dx + this.gy[h] * dy; };
    const u = xf * xf * xf * (xf * (xf * 6 - 15) + 10);
    const v = yf * yf * yf * (yf * (yf * 6 - 15) + 10);
    const n00 = g(xi, yi, xf, yf), n10 = g(x1, yi, xf - 1, yf);
    const n01 = g(xi, y1, xf, yf - 1), n11 = g(x1, y1, xf - 1, yf - 1);
    const a = n00 + u * (n10 - n00), b = n01 + u * (n11 - n01);
    return (a + v * (b - a)) * 1.414;
  }

  fbm(x, y, oct = 5, period = 0, lac = 2, gain = 0.5) {
    let s = 0, amp = 1, norm = 0, f = 1;
    for (let i = 0; i < oct; i++) {
      s += amp * this.noise(x * f, y * f, period ? period * f : 0);
      norm += amp; amp *= gain; f *= lac;
    }
    return s / norm;
  }

  ridged(x, y, oct = 5, period = 0) {
    let s = 0, amp = 0.5, f = 1, norm = 0;
    for (let i = 0; i < oct; i++) {
      const n = 1 - Math.abs(this.noise(x * f, y * f, period ? period * f : 0));
      s += amp * n * n; norm += amp; amp *= 0.5; f *= 2;
    }
    return s / norm;
  }

  // Cellular (Worley) distance, tileable over `period` cells.
  worley(x, y, period, rnd = 0.9) {
    const xi = Math.floor(x), yi = Math.floor(y);
    let d1 = 9, d2 = 9, id = 0;
    for (let oy = -1; oy <= 1; oy++) for (let ox = -1; ox <= 1; ox++) {
      const cx = xi + ox, cy = yi + oy;
      const wx = ((cx % period) + period) % period, wy = ((cy % period) + period) % period;
      const h = this.perm[(this.perm[wx & 255] + wy) & 511];
      const h2 = this.perm[(h + 71) & 511];
      const px = cx + 0.5 + (h / 255 - 0.5) * rnd, py = cy + 0.5 + (h2 / 255 - 0.5) * rnd;
      const d = Math.hypot(px - x, py - y);
      if (d < d1) { d2 = d1; d1 = d; id = h; } else if (d < d2) d2 = d;
    }
    return { d1, d2, id };
  }
}

export const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const smoothstep = (a, b, v) => { const t = clamp((v - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
