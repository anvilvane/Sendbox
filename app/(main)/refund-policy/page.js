import RefundPolicy from "@/components/RefundPolicy";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { getSEOTags, getBreadcrumbSchema } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: "Refund Policy",
  description: "Sendbox's refund policy: when refunds are issued for subscription plans, the time window to request, what counts as eligible usage, and how prorations work.",
  canonicalUrlRelative: "/refund-policy",
});

export default function RefundPolicyPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: `https://${config.domainName}` },
    { name: "Refund Policy", url: `https://${config.domainName}/refund-policy` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <RefundPolicy />
      </main>
      <CTA />
      <Footer />
    </>
  );
}
