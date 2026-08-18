import fs from 'fs';
import path from 'path';

const articlesDir = path.join(process.cwd(), 'data', 'articles');

export function getAllArticles() {
  if (!fs.existsSync(articlesDir)) return [];

  const files = fs.readdirSync(articlesDir).filter((f) => f.endsWith('.json'));

  const articles = files.map((file) => {
    const raw = fs.readFileSync(path.join(articlesDir, file), 'utf-8');
    return JSON.parse(raw);
  });

  return articles.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
}

export function getArticleBySlug(slug) {
  const filePath = path.join(articlesDir, `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(raw);
}

export function getAllArticleSlugs() {
  if (!fs.existsSync(articlesDir)) return [];

  return fs
    .readdirSync(articlesDir)
    .filter((f) => f.endsWith('.json'))
    .map((f) => f.replace('.json', ''));
}
