import Link from 'next/link';
import { roundupsData } from '@/data/roundups';
import { infraRoundupData } from '@/data/infra-providers';
import { getSEOTags, getBreadcrumbSchema } from '@/libs/seo';
import config from '@/config';
import author from '@/data/author';
import ContentCard from '@/components/ContentCard';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export const metadata = getSEOTags({
  title: 'Best Cold Email Tools & Guides',
  description: 'Honest, data-backed roundups of the best cold email software, email warmup tools, and cold email infrastructure providers in 2026.',
  keywords: ['best cold email tools', 'best cold email software', 'best email warmup tools', 'best cold email infrastructure', 'cold email tool rankings'],
  canonicalUrlRelative: '/best-cold-email-tools',
  openGraph: {
    title: `Best Cold Email Tools & Guides | ${config.appName}`,
    description: 'Honest, data-backed roundups of the best cold email tools in 2026.',
    url: `https://${config.domainName}/best-cold-email-tools`,
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

export default function BestHubPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: 'Best-Of Guides', url: `https://${config.domainName}/best-cold-email-tools` },
  ]);

  const guides = [
    ...roundupsData.map((r) => ({
      href: `/best-${r.slug}`,
      title: r.seo.title,
      excerpt: r.description,
    })),
    {
      href: '/best-email-infrastructure',
      title: infraRoundupData.seo.title,
      excerpt: infraRoundupData.description,
    },
  ];

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
              <span className="text-[#6b7280]">Best-Of Guides</span>
            </nav>

            <div className="inline-flex items-center gap-2 mb-6 text-[15px] font-medium text-black">
              <div className="w-5 h-1.5 bg-[#695AF2] rounded-xl" />
              <span>best-of guides</span>
            </div>

            <h1 className="text-[clamp(2rem,5vw,3rem)] font-semibold tracking-tight leading-[1.1] text-black mb-5">
              Best cold email tools, ranked honestly
            </h1>
            <p className="text-[17px] text-[#374151] leading-[1.7]">
              Every roundup uses publicly available data on pricing, infrastructure, and deliverability. No affiliate ranking games.
            </p>
          </div>
        </Section>

        <Section className="pb-16 border-t border-gray-100">
          <div className="pt-10 md:pt-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {guides.map((g) => (
                <ContentCard
                  key={g.href}
                  href={g.href}
                  title={g.title}
                  category="Roundup"
                  excerpt={g.excerpt}
                  author={author}
                />
              ))}
            </div>
          </div>
        </Section>

        <CTA />
        <Footer />
      </main>
    </>
  );
}
