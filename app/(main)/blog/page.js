import Link from 'next/link';
import { getAllArticles } from '@/data/articles';
import { getSEOTags, getBreadcrumbSchema } from '@/libs/seo';
import config from '@/config';

export const metadata = getSEOTags({
  title: 'Blog',
  description: `Cold email tips, deliverability guides, and product updates from ${config.appName}.`,
  canonicalUrlRelative: '/blog',
  openGraph: {
    title: `Blog | ${config.appName}`,
    description: `Cold email tips, deliverability guides, and product updates from ${config.appName}.`,
    url: `https://${config.domainName}/blog`,
  },
});

export default function BlogIndex() {
  const articles = getAllArticles();

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: 'Blog', url: `https://${config.domainName}/blog` },
  ]);

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${config.appName} Blog`,
    description: `Cold email tips, deliverability guides, and product updates from ${config.appName}.`,
    url: `https://${config.domainName}/blog`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <section className="max-w-6xl mx-auto px-4 md:px-8 py-16 md:py-24">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6 text-[15px] font-medium text-black">
          <div className="w-5 h-1.5 bg-[#695AF2] rounded-xl"></div>
          <span>blog</span>
        </div>

        <h1 className="text-[clamp(2rem,5vw,3rem)] font-semibold tracking-tight leading-[1.1] text-black mb-4">
          Latest articles
        </h1>
        <p className="text-[#6b7280] leading-relaxed max-w-2xl mb-12">
          Cold email strategy, deliverability deep-dives, and product updates from the {config.appName} team.
        </p>

        {articles.length === 0 ? (
          <p className="text-[#9ca3af]">No articles yet. Check back soon.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group block no-underline"
              >
                <article className="flex flex-col h-full">
                  {article.image_url && (
                    <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-4 bg-gray-100">
                      {/* Article images come from an external CMS with arbitrary
                          domains, so next/image (whitelisted hosts only) isn't suitable. */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={article.image_url}
                        alt={article.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.tags?.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[12px] font-medium text-[#7196f4] bg-[#695AF2]/10 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-[18px] font-semibold tracking-tight text-black group-hover:text-[#695AF2] transition-colors leading-snug mb-2">
                    {article.title}
                  </h2>
                  <p className="text-[14px] text-[#6b7280] leading-relaxed line-clamp-2 mb-3">
                    {article.meta_description}
                  </p>
                  <time
                    dateTime={article.created_at}
                    className="text-[13px] text-[#9ca3af] mt-auto"
                  >
                    {new Date(article.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </article>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
