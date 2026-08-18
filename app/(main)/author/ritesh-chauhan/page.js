import Image from 'next/image';
import Link from 'next/link';
import author from '@/data/author';
import { getSEOTags, getBreadcrumbSchema, getPersonSchema } from '@/libs/seo';
import config from '@/config';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

function LinkedinIcon({ className }) {
  return (
    <svg width="18" height="18" viewBox="0 0 256 256" fill="currentColor" className={className} aria-hidden="true">
      <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24ZM96,176a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm-8-76a12,12,0,1,1,12-12A12,12,0,0,1,88,100Zm96,76a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140Z" />
    </svg>
  );
}

function ArrowRightIcon({ className }) {
  return (
    <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor" className={className} aria-hidden="true">
      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
    </svg>
  );
}

export const metadata = getSEOTags({
  title: `Ritesh Chauhan`,
  description: `Comparisons, alternatives, and deliverability guides by Ritesh Chauhan, founder of Sendbox. Cold email infrastructure, dedicated IPs, and inbox placement.`,
  keywords: [author.name, 'Sendbox founder', 'cold email expert', 'email deliverability', 'cold email infrastructure'],
  canonicalUrlRelative: `/author/${author.slug}`,
  openGraph: {
    title: `Ritesh Chauhan, Founder of Sendbox`,
    description: `The person behind Sendbox's comparisons, alternatives, and deliverability guides.`,
    url: `https://${config.domainName}/author/${author.slug}`,
    type: 'profile',
  },
});

const writingHubs = [
  { name: 'Tool comparisons', href: '/compare', desc: 'Sendbox measured head-to-head against every major cold email platform.' },
  { name: 'Alternatives guides', href: '/alternatives', desc: 'Honest breakdowns of the switching options for each tool.' },
  { name: 'Best-of guides', href: '/best-cold-email-tools', desc: 'Ranked roundups of cold email software and infrastructure providers.' },
  { name: 'Pricing breakdowns', href: '/pricing-breakdowns', desc: 'What each platform actually costs once the add-ons are counted.' },
];

export default function AuthorPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: author.name, url: `https://${config.domainName}/author/${author.slug}` },
  ]);
  const personSchema = getPersonSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <main className="bg-white">
        <section className="py-12 md:py-20 px-4 md:px-8 bg-white relative">
          {/* Vertical guide lines */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            <div className="max-w-[80rem] h-full mx-auto relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
              <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
            </div>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-[13px] text-[#9ca3af] mb-8">
              <Link href="/" className="hover:text-black transition-colors no-underline text-[#9ca3af]">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#6b7280]">{author.name}</span>
            </nav>

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-8 text-[15px] font-medium text-black">
              <div className="w-5 h-1.5 bg-[#2663eb] rounded-xl" />
              <span>author</span>
            </div>

            {/* Header */}
            <div className="flex items-start gap-5 md:gap-6 mb-6">
              <Image
                src={author.avatar}
                alt={author.name}
                width={96}
                height={96}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border border-gray-200 flex-shrink-0"
              />
              <div className="pt-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-3xl md:text-4xl font-semibold text-black tracking-tight leading-[1.1]">
                    {author.name}
                  </h1>
                  {author.socials?.map((url) => (
                    <a
                      key={url}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer me"
                      aria-label={`${author.name} on LinkedIn`}
                      className="text-[#9ca3af] hover:text-[#2663eb] transition-colors"
                    >
                      <LinkedinIcon />
                    </a>
                  ))}
                </div>
                <p className="text-[#9ca3af] text-lg mt-1">{author.role}</p>
              </div>
            </div>

            {/* Tagline + bio */}
            {author.tagline && (
              <p className="text-xl md:text-2xl text-black font-medium tracking-tight leading-[1.4] mb-4">
                {author.tagline}
              </p>
            )}
            <p className="text-lg text-[#6b7280] leading-relaxed max-w-2xl">{author.bio}</p>

            {/* Expertise */}
            {author.expertise?.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-semibold text-black tracking-tight mb-6">
                  What I focus on
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {author.expertise.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 rounded-lg border border-gray-200 px-4 py-3"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2663eb] flex-shrink-0" />
                      <span className="text-[14px] text-black">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Writing on Sendbox */}
            <div className="mt-14 pt-12 border-t border-gray-100">
              <h2 className="text-2xl font-semibold text-black tracking-tight mb-2">
                Writing on Sendbox
              </h2>
              <p className="text-[15px] text-[#6b7280] mb-7">
                Every comparison and guide on the site is researched and written from the founder&apos;s seat.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {writingHubs.map((hub) => (
                  <Link
                    key={hub.href}
                    href={hub.href}
                    className="group rounded-xl border border-gray-200 p-5 hover:border-gray-300 hover:shadow-sm transition-all no-underline"
                  >
                    <div className="flex items-center justify-between gap-3 mb-1.5">
                      <p className="text-[15px] font-semibold text-black group-hover:text-[#2663eb] transition-colors">
                        {hub.name}
                      </p>
                      <ArrowRightIcon className="text-[#9ca3af] group-hover:text-[#2663eb] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                    </div>
                    <p className="text-[13px] text-[#6b7280] leading-relaxed">{hub.desc}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTA />
        <Footer />
      </main>
    </>
  );
}
