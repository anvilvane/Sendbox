import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { revalidatePath } from 'next/cache';

export async function POST(request) {
  // Validate webhook secret
  const secret = request.headers.get('x-webhook-secret');
  if (!process.env.WEBHOOK_SECRET || secret !== process.env.WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  if (body.event_type !== 'publish_articles') {
    return NextResponse.json({ error: 'Unsupported event type' }, { status: 400 });
  }

  const articles = body.data?.articles;
  if (!Array.isArray(articles) || articles.length === 0) {
    return NextResponse.json({ error: 'No articles provided' }, { status: 400 });
  }

  const articlesDir = path.join(process.cwd(), 'data', 'articles');
  if (!fs.existsSync(articlesDir)) {
    fs.mkdirSync(articlesDir, { recursive: true });
  }

  const saved = [];

  for (const article of articles) {
    if (!article.slug) continue;

    const data = {
      id: article.id,
      title: article.title,
      content_html: article.content_html,
      content_markdown: article.content_markdown,
      meta_description: article.meta_description,
      created_at: article.created_at || new Date().toISOString(),
      image_url: article.image_url,
      slug: article.slug,
      tags: article.tags || [],
    };

    const filePath = path.join(articlesDir, `${article.slug}.json`);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    saved.push(article.slug);
  }

  // Revalidate blog pages and sitemap
  revalidatePath('/blog');
  revalidatePath('/sitemap.xml');
  for (const slug of saved) {
    revalidatePath(`/blog/${slug}`);
  }

  return NextResponse.json({ success: true, articles_saved: saved });
}
