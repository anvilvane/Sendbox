import Link from 'next/link';
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';
import { getSEOTags, getBreadcrumbSchema } from '@/libs/seo';
import config from '@/config';
import { toolsData } from '@/data/tools';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export const metadata = getSEOTags({
  title: 'Free Email Deliverability Tools',
  description: 'Free email deliverability tools: blacklist checker, SPF/DKIM/DMARC validator, email verifier, inbox placement tester, header analyzer, warmup calculator.',
  keywords: ['free email tools', 'email deliverability tools', 'blacklist checker', 'spf dkim checker', 'email verifier', 'inbox placement test', 'spam checker', 'email signature generator', 'warmup calculator', 'dns lookup', 'cold email tools', 'sendbox'],
  canonicalUrlRelative: '/tools',
  openGraph: {
    title: `Free Email Deliverability Tools | ${config.appName}`,
    description: 'Free email deliverability tools: blacklist checker, SPF/DKIM/DMARC validator, email verifier, inbox placement tester, header analyzer, warmup calculator.',
    url: `https://${config.domainName}/tools`,
  },
});

export default function ToolsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: `https://${config.domainName}` },
    { name: 'Tools', url: `https://${config.domainName}/tools` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <main className="bg-white">
        <section className="px-4 md:px-8 relative">
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            <div className="max-w-[80rem] h-full mx-auto relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
              <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
            </div>
          </div>

          <div className="max-w-6xl mx-auto relative pt-12 md:pt-20 pb-12 md:pb-16">
            <nav className="flex items-center gap-1.5 text-[13px] text-[#9ca3af] mb-6">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#6b7280]">Tools</span>
            </nav>

            <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 text-sm sm:text-[15px] font-medium text-black">
              <div className="w-3 sm:w-4 md:w-5 h-0.5 sm:h-1 md:h-1.5 bg-[#2663eb] rounded-xl" />
              <span>free tools</span>
            </div>

            <h1 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.1] text-black tracking-tight mb-4 text-balance max-w-3xl">
              Free email deliverability tools
            </h1>

            <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] leading-relaxed text-[#6b7280] mb-10 md:mb-14 max-w-2xl text-balance">
              Check your blacklists, verify emails, test inbox placement, and more. Every tool is free, instant, and requires no signup.
            </p>

            <div className="space-y-0 border-t border-gray-200">
              {toolsData.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="flex items-center justify-between py-5 border-b border-gray-200 group no-underline transition-colors hover:bg-gray-50/50 -mx-2 px-2 rounded"
                >
                  <div className="min-w-0 mr-4">
                    <p className="text-base md:text-lg font-medium text-black group-hover:text-[#2663eb] transition-colors">
                      {tool.name}
                    </p>
                    <p className="text-sm text-[#9ca3af] mt-0.5">{tool.description}</p>
                  </div>
                  <ArrowRightIcon size={18} className="text-[#9ca3af] group-hover:text-[#2663eb] transition-all shrink-0 group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTA />
        <Footer />
      </main>
    </>
  );
}
