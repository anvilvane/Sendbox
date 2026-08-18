import FeatureHero from './FeatureHero';
import BenefitsGrid from './BenefitsGrid';
import FeatureWhySection from './FeatureWhySection';
import FeatureDetails from './FeatureDetails';
import FeatureFAQ from './FeatureFAQ';
import RelatedLinks from './RelatedLinks';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function DeliverabilityPageTemplate({ data, allDeliverability = [] }) {
  // Combine howItWorks + useCases for the WhySection grid
  const whyItems = [
    ...(data.howItWorks || []).map(s => ({ title: s.title, description: s.description })),
    ...(data.useCases || []).map(u => ({ title: u.title, description: u.description })),
  ];

  const siblingPages = allDeliverability
    .filter((d) => d.slug !== data.slug && d.category === data.category)
    .slice(0, 6)
    .map((d) => ({ name: d.name, href: `/deliverability/${d.slug}` }));

  const otherPages = allDeliverability
    .filter((d) => d.slug !== data.slug && d.category !== data.category)
    .slice(0, 6)
    .map((d) => ({ name: d.name, href: `/deliverability/${d.slug}` }));

  const relatedGroups = [
    {
      title: `More ${data.category}`,
      links: siblingPages.length > 0 ? siblingPages : otherPages,
    },
    {
      title: 'Explore Sendbox',
      links: [
        { name: 'Deliverability suite', href: '/deliverability' },
        { name: 'All features', href: '/features' },
        { name: 'Best email infrastructure', href: '/best-email-infrastructure' },
      ],
    },
    {
      title: 'Compare & decide',
      links: [
        { name: 'Compare cold email tools', href: '/compare' },
        { name: 'Cold email alternatives', href: '/alternatives' },
        { name: 'What is Sendbox?', href: '/what-is-sendbox' },
      ],
    },
  ];

  return (
    <main>
      <FeatureHero
        eyebrow={data.name.toLowerCase()}
        headline={data.headline}
        description={data.description}
        breadcrumb={{ parentName: 'Deliverability', parentHref: '/deliverability', current: data.name }}
      />
      <BenefitsGrid benefits={data.benefits} headline={data.benefitsHeadline} eyebrow={data.benefitsEyebrow} />
      <FeatureWhySection items={whyItems} headline={data.whySectionHeadline} eyebrow={data.whySectionEyebrow} />
      <FeatureDetails
        competitorCallout={data.competitorCallout}
        detailBlocks={data.detailBlocks}
        headline={data.detailsHeadline}
        eyebrow={data.detailsEyebrow}
      />
      <FeatureFAQ items={data.faqs} />
      <RelatedLinks groups={relatedGroups} />
      <CTA />
      <Footer />
    </main>
  );
}
