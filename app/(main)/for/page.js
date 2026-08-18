import { solutionsData } from '@/data/solutions';
import { getSEOTags, getBreadcrumbSchema } from '@/libs/seo';
import config from '@/config';
import HubTemplate from '@/components/templates/HubTemplate';

export const metadata = getSEOTags({
  title: 'Cold Email for Agencies, SDRs & Recruiters',
  description: 'How agencies, SDR teams, and recruiters run cold email on Sendbox: dedicated IPs, isolated infrastructure, and white-label workflows built for each use case.',
  keywords: ['cold email for agencies', 'cold email for sdr teams', 'cold email for recruiters', 'agency email infrastructure', 'cold email software for teams'],
  canonicalUrlRelative: '/for',
  openGraph: {
    title: `Cold Email for Agencies, SDRs & Recruiters | ${config.appName}`,
    description: 'How agencies, SDR teams, and recruiters run cold email on Sendbox.',
    url: `https://${config.domainName}/for`,
  },
});

export default function SolutionsHubPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: 'Solutions', url: `https://${config.domainName}/for` },
  ]);

  const items = solutionsData.map((s) => ({
    title: s.name,
    description: s.description,
    href: `/for-${s.slug}`,
    cta: 'See the solution',
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HubTemplate
        eyebrow="solutions"
        breadcrumb="Solutions"
        title="Built for how your team sends"
        description="Whether you run client campaigns, scale an SDR org, or source candidates, Sendbox's dedicated infrastructure adapts to your workflow."
        stats={[{ value: solutionsData.length, label: 'use cases' }]}
        sections={[{ heading: 'Solutions', items }]}
      />
    </>
  );
}
