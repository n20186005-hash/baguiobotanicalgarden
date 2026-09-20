import { readdir, mkdir, rename, unlink } from 'node:fs/promises';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dir = join(root, 'public/gallery');
const tmp = join(root, 'public/gallery/__tmp');
await mkdir(tmp, { recursive: true });

const MAX_W = 1600;
const MAX_H = 1200;

const files = (await readdir(dir)).filter((f) => /\.jpe?g$/i.test(f)).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

let before = 0;
let after = 0;

for (const file of files) {
  const src = join(dir, file);
  const image = sharp(src, { failOn: 'error' });
  const meta = await image.metadata();
  before += meta.width * meta.height * 3;
  const out = join(tmp, file.replace(/\.jpe?g$/i, '.jpg'));
  await image
    .rotate()
    .resize({ width: MAX_W, height: MAX_H, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 72, progressive: true, mozjpeg: true, chromaSubsampling: '4:2:0' })
    .toFile(out);
  const outMeta = await sharp(out).metadata();
  after += outMeta.width * outMeta.height * 3;
  const { size } = await import('node:fs').then((fs) => ({ size: fs.statSync(out).size }));
  console.log(`${file}  ${meta.width}x${meta.height} -> ${outMeta.width}x${outMeta.height}  ${Math.round(size / 1024)}KB`);
}

for (const file of files) {
  const src = join(dir, file);
  const out = join(tmp, file.replace(/\.jpe?g$/i, '.jpg'));
  await unlink(src);
  await rename(out, src);
}
await import('node:fs').then((fs) => fs.rmSync(tmp, { recursive: true, force: true }));

console.log('done');
