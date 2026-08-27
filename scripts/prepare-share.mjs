import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const shareDir = join(root, 'share');
const downloadsDir = 'C:/Users/syed.mfuaad/Downloads';

mkdirSync(shareDir, { recursive: true });

const html = readFileSync(join(dist, 'index.html'), 'utf8');
const singleFile = join(shareDir, 'SparexIndia-Website.html');
writeFileSync(singleFile, html, 'utf8');

for (const file of ['sparex-logo.png', 'sparex-wordmark.png']) {
  copyFileSync(join(dist, file), join(shareDir, file));
}
copyFileSync(join(root, 'public/SHARE-README.txt'), join(shareDir, 'SHARE-README.txt'));

mkdirSync(downloadsDir, { recursive: true });
copyFileSync(singleFile, join(downloadsDir, 'SparexIndia-Website.html'));
copyFileSync(join(shareDir, 'sparex-wordmark.png'), join(downloadsDir, 'sparex-wordmark.png'));
copyFileSync(join(shareDir, 'sparex-logo.png'), join(downloadsDir, 'sparex-logo.png'));
copyFileSync(join(shareDir, 'SHARE-README.txt'), join(downloadsDir, 'SHARE-README.txt'));

const zipPath = join(downloadsDir, 'SparexIndia-Website.zip');
try {
  execSync(
    `powershell -NoProfile -Command "Compress-Archive -Path '${shareDir}\\*' -DestinationPath '${zipPath}' -Force"`,
    { stdio: 'inherit' },
  );
} catch {
  // zip is optional
}

console.log('Shareable HTML ready:');
console.log(`  ${singleFile}`);
console.log(`  ${join(downloadsDir, 'SparexIndia-Website.html')}`);
console.log(`  ${zipPath}`);
