import FeatureHero from './FeatureHero';
import FeatureShowcase from './FeatureShowcase';
import BenefitsGrid from './BenefitsGrid';
import FeatureWhySection from './FeatureWhySection';
import FeatureDetails from './FeatureDetails';
import FeatureFAQ from './FeatureFAQ';
import RelatedLinks from './RelatedLinks';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

import {
  CampaignsMockup,
  MailboxesMockup,
  LeadsMockup,
  AnalyticsMockup,
  FinderMockup,
  CRMMockup,
  InboxMockup,
  DialerMockup,
} from '@/components/ProductShowcase';

const mockupComponents = {
  campaigns: CampaignsMockup,
  mailboxes: MailboxesMockup,
  leads: LeadsMockup,
  analytics: AnalyticsMockup,
  finder: FinderMockup,
  crm: CRMMockup,
  inbox: InboxMockup,
  dialer: DialerMockup,
};

export default function FeaturePageTemplate({ feature, allFeatures = [] }) {
  const MockupComponent = feature.showcaseTab ? mockupComponents[feature.showcaseTab] : null;

  // Combine howItWorks + useCases for the WhySection grid
  const whyItems = [
    ...(feature.howItWorks || []).map(s => ({ title: s.title, description: s.description })),
    ...(feature.useCases || []).map(u => ({ title: u.title, description: u.description })),
  ];

  const siblingFeatures = allFeatures
    .filter((f) => f.slug !== feature.slug && f.category === feature.category)
    .slice(0, 6)
    .map((f) => ({ name: f.name, href: `/features/${f.slug}` }));

  const otherFeatures = allFeatures
    .filter((f) => f.slug !== feature.slug && f.category !== feature.category)
    .slice(0, 6)
    .map((f) => ({ name: f.name, href: `/features/${f.slug}` }));

  const relatedGroups = [
    {
      title: `More ${feature.category} features`,
      links: siblingFeatures.length > 0 ? siblingFeatures : otherFeatures,
    },
    {
      title: 'Explore Sendbox',
      links: [
        { name: 'All features', href: '/features' },
        { name: 'Deliverability suite', href: '/deliverability' },
        { name: 'What is Sendbox?', href: '/what-is-sendbox' },
      ],
    },
    {
      title: 'Compare & decide',
      links: [
        { name: 'Compare cold email tools', href: '/compare' },
        { name: 'Cold email alternatives', href: '/alternatives' },
        { name: 'Pricing breakdowns', href: '/pricing-breakdowns' },
      ],
    },
  ];

  return (
    <main>
      <FeatureHero
        eyebrow={feature.name.toLowerCase()}
        headline={feature.headline}
        description={feature.description}
        breadcrumb={{ parentName: 'Features', parentHref: '/features', current: feature.name }}
      />
      {MockupComponent && (
        <FeatureShowcase
          tab={feature.showcaseTab}
          MockupComponent={MockupComponent}
        />
      )}
      <BenefitsGrid benefits={feature.benefits} headline={feature.benefitsHeadline} eyebrow={feature.benefitsEyebrow} />
      <FeatureWhySection items={whyItems} headline={feature.whySectionHeadline} eyebrow={feature.whySectionEyebrow} />
      <FeatureDetails
        competitorCallout={feature.competitorCallout}
        detailBlocks={feature.detailBlocks}
        headline={feature.detailsHeadline}
        eyebrow={feature.detailsEyebrow}
      />
      <FeatureFAQ items={feature.faqs} />
      <RelatedLinks groups={relatedGroups} />
      <CTA />
      <Footer />
    </main>
  );
}
