// Copy index.html into dist/, stamping the online server's address into it.
// The address comes from HOLLOWMOOR_SERVER or from web/server-url.txt (one line).
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
let server = process.env.HOLLOWMOOR_SERVER || '';
const f = join(root, 'server-url.txt');
if (!server && existsSync(f)) server = readFileSync(f, 'utf8').trim();
let html = readFileSync(join(root, 'index.html'), 'utf8');
html = html.replace('<meta name="hollowmoor-server" content="">', `<meta name="hollowmoor-server" content="${server.replace(/"/g, '')}">`);
writeFileSync(join(root, 'dist', 'index.html'), html);
console.log(server ? `dist/index.html (server: ${server})` : 'dist/index.html (no online server set)');
