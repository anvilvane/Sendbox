import Link from 'next/link';
import { getAllGuides } from '@/data/guides';
import { getSEOTags, getBreadcrumbSchema } from '@/libs/seo';
import config from '@/config';
import author from '@/data/author';
import ContentCard from '@/components/ContentCard';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export const metadata = getSEOTags({
  title: 'Cold Email Guides & Resources',
  description: 'In-depth guides on cold email deliverability, dedicated IPs, warmup, email authentication, and inbox placement. Written by the Sendbox team.',
  keywords: ['cold email guides', 'cold email deliverability', 'email warmup guide', 'cold email resources', 'spf dkim dmarc guide'],
  canonicalUrlRelative: '/learn',
  openGraph: {
    title: `Cold Email Guides & Resources | ${config.appName}`,
    description: 'In-depth guides on cold email deliverability, warmup, and inbox placement.',
    url: `https://${config.domainName}/learn`,
  },
});

function Section({ children, className = '' }) {
  return (
    <section className={`px-4 md:px-8 bg-white relative ${className}`}>
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

export default function LearnHubPage() {
  const guides = getAllGuides();

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: 'Learn', url: `https://${config.domainName}/learn` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="bg-white">
        <Section className="pt-12 md:pt-16 pb-10 md:pb-14">
          <div className="max-w-4xl">
            <nav className="flex items-center gap-1.5 text-[13px] text-[#9ca3af] mb-8">
              <Link href="/" className="hover:text-black transition-colors no-underline text-[#9ca3af]">Home</Link>
              <span>/</span>
              <span className="text-[#6b7280]">Learn</span>
            </nav>

            <div className="inline-flex items-center gap-2 mb-6 text-[15px] font-medium text-black">
              <div className="w-5 h-1.5 bg-[#695AF2] rounded-xl" />
              <span>learn</span>
            </div>

            <h1 className="text-[clamp(2rem,5vw,3rem)] font-semibold tracking-tight leading-[1.1] text-black mb-5">
              Cold email guides and resources
            </h1>
            <p className="text-[17px] text-[#374151] leading-[1.7]">
              Practical, no-fluff guides on deliverability, dedicated IPs, warmup, and inbox placement. The same thinking that shapes how Sendbox is built.
            </p>
          </div>
        </Section>

        <Section className="pb-16 border-t border-gray-100">
          <div className="pt-10 md:pt-14">
            {guides.length === 0 ? (
              <p className="text-[#9ca3af]">Guides are on the way. Check back soon.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {guides.map((guide) => (
                  <ContentCard
                    key={guide.slug}
                    href={`/learn/${guide.slug}`}
                    title={guide.title}
                    category={guide.tags?.[0]}
                    excerpt={guide.excerpt || guide.metaDescription}
                    readTime={guide.readTime}
                    author={author}
                  />
                ))}
              </div>
            )}
          </div>
        </Section>

        <CTA />
        <Footer />
      </main>
    </>
  );
}
