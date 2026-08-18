import fs from 'fs';
import path from 'path';

// Returns the given /public path only if the file actually exists on disk,
// otherwise null. Lets server components strip references to missing assets
// (e.g. a competitor pricing screenshot that was never captured) so pages
// never render a broken <img> that crawlers flag. Server-only: relies on fs
// and runs at build/render time during static generation.
export function assetIfExists(publicPath) {
  if (!publicPath || typeof publicPath !== 'string') return null;
  try {
    const rel = publicPath.split('?')[0].replace(/^\//, '');
    return fs.existsSync(path.join(process.cwd(), 'public', rel)) ? publicPath : null;
  } catch {
    return null;
  }
}
