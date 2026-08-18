import PrivacyPolicy from "@/components/PrivacyPolicy";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { getSEOTags, getBreadcrumbSchema } from "@/libs/seo";
import config from "@/config";

export const metadata = getSEOTags({
  title: "Privacy Policy",
  description: "How Sendbox collects, uses, and protects your personal data. Data categories, retention windows, third-party processors, GDPR rights, and security controls.",
  canonicalUrlRelative: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: `https://${config.domainName}` },
    { name: "Privacy Policy", url: `https://${config.domainName}/privacy-policy` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main>
        <PrivacyPolicy />
      </main>
      <CTA />
      <Footer />
    </>
  );
}
