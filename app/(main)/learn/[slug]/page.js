import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getGuideBySlug, getAllGuideSlugs, getAllGuides } from '@/data/guides';
import {
  getSEOTags,
  getBreadcrumbSchema,
  getFAQPageSchema,
  getArticleSchema,
  getSpeakableSchema,
} from '@/libs/seo';
import config from '@/config';
import author from '@/data/author';
import AuthorByline from '@/components/templates/AuthorByline';
import TableOfContents from '@/components/templates/TableOfContents';
import FeatureFAQ from '@/components/templates/FeatureFAQ';
import AuthoritativeSources from '@/components/templates/AuthoritativeSources';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import './article.css';

function Section({ children, className = '', id }) {
  return (
    <section id={id} className={`px-4 md:px-8 bg-white relative ${className}`}>
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="max-w-[80rem] h-full mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto relative">{children}</div>
    </section>
  );
}

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  return getSEOTags({
    title: guide.metaTitle || guide.title,
    description: guide.metaDescription,
    keywords: guide.tags,
    canonicalUrlRelative: `/learn/${slug}`,
    openGraph: {
      title: `${guide.metaTitle || guide.title} | ${config.appName}`,
      description: guide.metaDescription,
      url: `https://${config.domainName}/learn/${slug}`,
      type: 'article',
    },
  });
}

export default async function GuidePage({ params }) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const guideUrl = `https://${config.domainName}/learn/${slug}`;
  const related = getAllGuides()
    .filter((g) => g.slug !== slug)
    .slice(0, 3);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: 'Learn', url: `https://${config.domainName}/learn` },
    { name: guide.title, url: guideUrl },
  ]);
  const articleSchema = getArticleSchema({
    headline: guide.metaTitle || guide.title,
    description: guide.metaDescription,
    url: guideUrl,
    datePublished: guide.publishedDate,
    dateModified: guide.updatedDate,
  });
  const faqSchema = guide.faqs?.length > 0 ? getFAQPageSchema(guide.faqs) : null;
  const speakableSchema = getSpeakableSchema(guideUrl, [
    'h1',
    '.article-content h2',
    '.article-content p:first-of-type',
  ]);

  const eyebrow = (guide.tags?.[0] || 'guide').toLowerCase();
  const tocSections = guide.toc || [];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <main className="bg-white">
        {/* Hero */}
        <Section className="pt-12 md:pt-16 pb-10 md:pb-14">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-1.5 text-[13px] text-[#9ca3af] mb-8">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <span>/</span>
              <Link href="/learn" className="hover:text-black transition-colors">Learn</Link>
              <span>/</span>
              <span className="text-[#6b7280] truncate max-w-[220px]">{guide.title}</span>
            </nav>

            <div className="inline-flex items-center gap-2 mb-5 text-[15px] font-medium text-black">
              <div className="w-5 h-1.5 bg-[#695AF2] rounded-xl" />
              <span>{eyebrow}</span>
            </div>

            <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] text-black tracking-tight mb-5">
              {guide.title}
            </h1>
            {guide.excerpt && (
              <p className="text-[17px] text-[#374151] leading-[1.7] mb-5 max-w-2xl">{guide.excerpt}</p>
            )}

            <AuthorByline
              author={author}
              readTime={guide.readTime}
              publishedDate={guide.publishedDate}
              updatedDate={guide.updatedDate}
            />
          </div>
        </Section>

        {/* Body: two-column */}
        <Section className="pb-16 border-t border-gray-100">
          <div className="pt-10 md:pt-14 flex flex-col lg:flex-row gap-10 lg:gap-16">
            <div className="flex-1 min-w-0">
              {tocSections.length > 0 && (
                <div className="lg:hidden mb-10">
                  <TableOfContents sections={tocSections} showCta={false} />
                </div>
              )}

              <div className="article-content" dangerouslySetInnerHTML={{ __html: guide.contentHtml }} />

              <AuthoritativeSources />

              {related.length > 0 && (
                <div className="mt-14 pt-8 border-t border-gray-100">
                  <p className="text-sm font-semibold text-black mb-3">Keep reading</p>
                  <ul className="space-y-1.5">
                    {related.map((g) => (
                      <li key={g.slug}>
                        <Link
                          href={`/learn/${g.slug}`}
                          className="text-[14px] font-medium text-[#695AF2] hover:underline no-underline"
                        >
                          {g.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {tocSections.length > 0 && (
              <aside className="hidden lg:block w-[260px] flex-shrink-0">
                <div className="sticky top-24">
                  <TableOfContents sections={tocSections} />
                </div>
              </aside>
            )}
          </div>
        </Section>

        {/* FAQ */}
        <div id="faq" className="scroll-mt-24">
          <FeatureFAQ items={guide.faqs} />
        </div>

        <CTA />
        <Footer />
      </main>
    </>
  );
}
