import fs from 'fs';
import path from 'path';

const guidesDir = path.join(process.cwd(), 'data', 'guides');

export function getAllGuides() {
  if (!fs.existsSync(guidesDir)) return [];

  const files = fs.readdirSync(guidesDir).filter((f) => f.endsWith('.json'));

  const guides = files.map((file) => {
    const raw = fs.readFileSync(path.join(guidesDir, file), 'utf-8');
    return JSON.parse(raw);
  });

  return guides.sort(
    (a, b) => new Date(b.publishedDate) - new Date(a.publishedDate)
  );
}

export function getGuideBySlug(slug) {
  const filePath = path.join(guidesDir, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

export function getAllGuideSlugs() {
  if (!fs.existsSync(guidesDir)) return [];

  return fs
    .readdirSync(guidesDir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace('.json', ''));
}
