import { copyFileSync, cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const rootAssets = resolve(root, 'assets');

if (!existsSync(resolve(dist, 'index.html'))) {
  throw new Error('Expected dist/index.html to exist. Run vite build first.');
}

rmSync(rootAssets, { recursive: true, force: true });
mkdirSync(rootAssets, { recursive: true });
cpSync(resolve(dist, 'assets'), rootAssets, { recursive: true });
copyFileSync(resolve(dist, 'index.html'), resolve(root, 'index.html'));
