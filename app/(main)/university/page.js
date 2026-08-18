import { getSEOTags, getBreadcrumbSchema } from '@/libs/seo';
import config from '@/config';
import RequestDemoModal from '@/components/RequestDemoModal';
import { APP_LOGIN_URL } from "@/lib/app-url";

export const metadata = getSEOTags({
  title: 'Sendbox University — every guide, playbook, and comparison',
  description:
    'The complete Sendbox learning library: setup, campaigns, warm-up, deliverability, reporting, integrations, and honest competitor comparisons. Free one-page guides.',
  keywords: [
    'sendbox university',
    'cold email guides',
    'sendbox documentation',
    'cold email deliverability guides',
    'sendbox comparisons',
  ],
  canonicalUrlRelative: '/university',
  openGraph: {
    title: `Sendbox University | ${config.appName}`,
    description:
      'The complete Sendbox learning library: setup, campaigns, warm-up, deliverability, reporting, integrations, and honest competitor comparisons.',
    url: `https://${config.domainName}/university`,
  },
});

const D = '/docs';

// Most of this library used to be real PDF files -- but they were SendKit's
// actual downloadable guides/battlecards, carried over by an earlier rebrand
// pass that renamed the links here to sendbox-*.pdf without renaming (or
// replacing the content of) the actual files on disk, so nearly all of them
// were broken 404s anyway. Deleted the SendKit-branded files entirely rather
// than leave them reachable at their real filenames or leave dead links here.
// Only the tracks/docs below point at real files that still exist and aren't
// SendKit-branded. TODO(user): this library is a real content gap now --
// write genuine Sendbox guides to refill it, don't reuse a competitor's.
const TRACKS = [
  {
    name: 'Getting started',
    blurb: 'From signup to your first reply.',
    docs: [
      { title: 'Cold email launch playbook: zero to first reply', href: `${D}/cold-email-launch-playbook.pdf` },
    ],
  },
  {
    name: 'Mailboxes and infrastructure',
    blurb: 'Dedicated IPs, domains, providers, and the math.',
    docs: [
      { title: 'Try the live mailbox calculator', href: '/tools/mailbox-calculator' },
      { title: 'SPF, DKIM, and DMARC setup guide', href: `${D}/spf-dkim-dmarc-setup-guide.pdf` },
    ],
  },
  {
    name: 'Warm-up and deliverability',
    blurb: 'Landing in the inbox, and staying there.',
    docs: [
      { title: 'The mailbox warmup playbook', href: `${D}/mailbox-warmup-playbook.pdf` },
    ],
  },
  {
    name: 'Leads and data',
    blurb: 'Sourcing, enrichment, and credits.',
    docs: [
      { title: 'Finding leads with the built-in database', href: `${D}/finding-leads-400m-database.pdf` },
    ],
  },
  {
    name: 'Agencies and scale',
    blurb: 'Multi-client operations and growing volume.',
    docs: [
      { title: 'Managing multi-client workspaces as an agency', href: `${D}/managing-agency-workspaces.pdf` },
      { title: 'The cold email agency operating system', href: `${D}/cold-email-agency-operating-system.pdf` },
    ],
  },
  {
    name: 'Compare Sendbox',
    blurb: 'Honest one-page comparisons, strengths conceded.',
    docs: [
      { title: 'All comparisons and alternatives', href: '/compare' },
    ],
  },
];

export default function UniversityPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: 'Sendbox University', url: `https://${config.domainName}/university` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="max-w-5xl mx-auto px-6 py-16">
        <header className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">
            Sendbox University
          </p>
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Every guide, playbook, and comparison in one place
          </h1>
          <p className="text-lg opacity-80 max-w-2xl">
            Free one-page guides covering everything from your first mailbox to scaling past
            500k emails a month. No signup, no gate. Open any doc and get to work.
          </p>
        </header>

        <div className="space-y-12">
          {TRACKS.map((track) => (
            <section key={track.name}>
              <h2 className="text-2xl font-bold mb-1">{track.name}</h2>
              <p className="opacity-70 mb-4">{track.blurb}</p>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {track.docs.map((doc) => {
                  const isPdf = doc.href.endsWith('.pdf');
                  const slug = isPdf ? doc.href.split('/').pop().replace('.pdf', '') : null;
                  return (
                    <li key={doc.href + doc.title}>
                      <a
                        href={doc.href}
                        target={isPdf ? '_blank' : undefined}
                        rel={isPdf ? 'noopener noreferrer' : undefined}
                        className="group block border border-base-300 rounded-lg overflow-hidden hover:border-primary hover:shadow-md transition-all"
                      >
                        {isPdf ? (
                          <div className="h-36 overflow-hidden border-b border-base-300 bg-base-200">
                            <img
                              src={`/docs/thumbs/${slug}.png`}
                              alt={`Preview of ${doc.title}`}
                              loading="lazy"
                              className="w-full object-cover object-top group-hover:scale-[1.02] transition-transform"
                            />
                          </div>
                        ) : (
                          <div className="h-36 flex items-center justify-center border-b border-base-300 bg-base-200">
                            <span className="text-sm font-semibold uppercase tracking-wider opacity-50">
                              Interactive tool
                            </span>
                          </div>
                        )}
                        <div className="px-4 py-3">
                          <span className="font-medium leading-snug">{doc.title}</span>
                          <span className="block text-sm opacity-60 mt-0.5">
                            {isPdf ? 'One-page PDF guide' : 'Open on site'}
                          </span>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>

        <footer className="mt-16 border-t border-base-300 pt-8 space-y-3">
          <p className="opacity-80">
            Prefer long-form reading? Browse the{' '}
            <a href="/learn" className="link link-primary">
              in-depth written guides
            </a>
            .
          </p>
          <p className="opacity-80">
            Want any of this mapped to your own setup live?{' '}
            <RequestDemoModal
              trigger="button"
              dataFastGoal="click_book_demo"
              dataFastGoalLocation="university"
              className="link link-primary"
            >
              Book a 15-minute walkthrough
            </RequestDemoModal>{' '}
            or{' '}
            <a href={APP_LOGIN_URL} className="link link-primary">
              start in the app
            </a>
            .
          </p>
        </footer>
      </main>
    </>
  );
}
