import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleBySlug, getAllArticleSlugs } from '@/data/articles';
import { getSEOTags, getBreadcrumbSchema, getSpeakableSchema } from '@/libs/seo';
import config from '@/config';
import './article.css';

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return getSEOTags({
    title: article.title,
    description: article.meta_description,
    keywords: article.tags,
    canonicalUrlRelative: `/blog/${slug}`,
    openGraph: {
      title: article.title,
      description: article.meta_description,
      url: `https://${config.domainName}/blog/${slug}`,
      type: 'article',
      ...(article.image_url && {
        images: [{ url: article.image_url, alt: article.title }],
      }),
    },
    extraTags: {
      other: {
        'article:published_time': article.created_at,
        ...(article.tags?.length > 0 && { 'article:tag': article.tags.join(',') }),
      },
    },
  });
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const articleUrl = `https://${config.domainName}/blog/${slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.meta_description,
    datePublished: article.created_at,
    ...(article.image_url && { image: article.image_url }),
    author: {
      '@type': 'Organization',
      name: config.appName,
      url: `https://${config.domainName}`,
    },
    publisher: {
      '@type': 'Organization',
      name: config.appName,
      logo: {
        '@type': 'ImageObject',
        url: `https://${config.domainName}/icon.png`,
      },
    },
    mainEntityOfPage: articleUrl,
  };

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: 'Blog', url: `https://${config.domainName}/blog` },
    { name: article.title, url: articleUrl },
  ]);

  const speakableSchema = getSpeakableSchema(articleUrl, [
    'h1',
    '.article-content h2',
    '.article-content p:first-of-type',
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      <article className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-[13px] text-[#9ca3af]">
            <li>
              <Link href="/" className="hover:text-black transition-colors no-underline text-[#9ca3af]">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-black transition-colors no-underline text-[#9ca3af]">
                Blog
              </Link>
            </li>
            <li>/</li>
            <li className="text-[#6b7280] truncate max-w-[200px]">{article.title}</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-10">
          {article.tags?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[12px] font-medium text-[#7196f4] bg-[#695AF2]/10 px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-semibold tracking-tight leading-[1.1] text-black mb-4">
            {article.title}
          </h1>
          <time
            dateTime={article.created_at}
            className="text-[14px] text-[#9ca3af]"
          >
            {new Date(article.created_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </header>

        {/* Featured image */}
        {article.image_url && (
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-10 bg-gray-100">
            {/* Article images come from an external CMS with arbitrary domains, so
                next/image (which requires whitelisted hosts) isn't suitable here. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={article.image_url}
              alt={article.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        )}

        {/* Article content */}
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.content_html }}
        />

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[#695AF2] hover:gap-3 transition-all no-underline"
          >
            ← Back to blog
          </Link>
        </div>
      </article>
    </>
  );
}
