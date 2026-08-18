import FairUsagePolicy from "@/components/FairUsagePolicy";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { getSEOTags, getBreadcrumbSchema } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: "Fair Usage Policy",
  description: "Transparent Fair Use limits for every Sendbox plan: emails, leads, mailboxes, validations, inbox placement, blacklist monitoring, and credits.",
  canonicalUrlRelative: "/fair-usage-policy",
});

export default function FairUsagePolicyPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: `https://${config.domainName}` },
    { name: "Fair Usage Policy", url: `https://${config.domainName}/fair-usage-policy` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <FairUsagePolicy />
      </main>
      <CTA />
      <Footer />
    </>
  );
}
