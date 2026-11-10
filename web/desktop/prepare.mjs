// Copy the built game (../dist) into ./app for packaging.
import { cpSync, rmSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
const here = dirname(fileURLToPath(import.meta.url));
const dist = join(here, '..', 'dist');
if (!existsSync(join(dist, 'game.js'))) { console.error('Build the game first: run "npm run build" in web/'); process.exit(1); }
rmSync(join(here, 'app'), { recursive: true, force: true });
mkdirSync(join(here, 'app'));
for (const f of ['index.html', 'game.js']) cpSync(join(dist, f), join(here, 'app', f));
console.log('desktop/app is ready');
