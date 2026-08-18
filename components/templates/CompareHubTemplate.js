import Image from 'next/image';
import { ArrowRight, ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

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

function ComparisonCard({ comparison }) {
  return (
    <a
      href={`/sendbox-vs-${comparison.slug}`}
      className="group rounded-xl border border-gray-200 p-5 hover:border-gray-300 hover:shadow-sm transition-all flex flex-col"
    >
      {/* Screenshot preview */}
      <div className="rounded-lg border border-gray-100 overflow-hidden mb-4 aspect-[16/9] relative bg-gray-50">
        <Image
          src={comparison.screenshots.competitor}
          alt={comparison.competitorName}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
        />
      </div>

      {/* Logos */}
      <div className="flex items-center gap-2 mb-3">
        <Image src="/icon.png" alt="Sendbox" width={80} height={20} className="h-5 w-auto" />
        <span className="text-[12px] text-[#9ca3af] font-medium">vs</span>
        <Image src={comparison.competitorLogo} alt={comparison.competitorName} width={80} height={20} className="h-5 w-auto rounded" />
      </div>

      {/* Title */}
      <h3 className="text-[15px] font-semibold text-black group-hover:text-[#2663eb] transition-colors mb-1.5">
        Sendbox vs {comparison.competitorName}
      </h3>

      {/* Snippet */}
      <p className="text-[13px] text-[#6b7280] leading-relaxed line-clamp-2 flex-1">{comparison.description}</p>

      {/* Read link */}
      <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-1 text-[13px] font-medium text-[#2663eb]">
        Read comparison
        <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
      </div>
    </a>
  );
}

function AlternativeCard({ alternative }) {
  return (
    <a
      href={`/alternative/${alternative.slug}`}
      className="group rounded-xl border border-gray-200 p-5 hover:border-gray-300 hover:shadow-sm transition-all flex items-start gap-4"
    >
      {/* Logo */}
      <div className="w-10 h-10 rounded-lg border border-gray-100 bg-gray-50 flex items-center justify-center flex-shrink-0">
        <Image
          src={`/screenshots/competitors/${alternative.slug}/logo.png`}
          alt={alternative.competitorName}
          width={96}
          height={24}
          className="h-6 w-auto rounded"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-[15px] font-semibold text-black group-hover:text-[#2663eb] transition-colors mb-1">
          {alternative.competitorName} Alternatives
        </h3>
        <p className="text-[13px] text-[#6b7280] leading-relaxed line-clamp-2">{alternative.description}</p>
        <span className="inline-flex items-center gap-1 mt-2 text-[12px] font-medium text-[#2663eb]">
          View alternatives <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </a>
  );
}

function ToolVsToolCard({ matchup }) {
  return (
    <a
      href={`/${matchup.slug}`}
      className="group flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-3 hover:border-gray-300 hover:shadow-sm transition-all"
    >
      <div className="flex items-center gap-1.5 flex-shrink-0">
        <Image src={matchup.toolA.logo} alt={matchup.toolA.name} width={64} height={16} className="h-4 w-auto rounded" />
        <span className="text-[11px] text-[#9ca3af]">vs</span>
        <Image src={matchup.toolB.logo} alt={matchup.toolB.name} width={64} height={16} className="h-4 w-auto rounded" />
      </div>
      <span className="text-[13px] font-medium text-black group-hover:text-[#2663eb] transition-colors truncate">
        {matchup.toolA.name} vs {matchup.toolB.name}
      </span>
      <ArrowRight size={12} className="text-[#9ca3af] group-hover:text-[#2663eb] ml-auto flex-shrink-0 group-hover:translate-x-0.5 transition-all" />
    </a>
  );
}

export default function CompareHubTemplate({ comparisons, alternatives, toolVsTool = [] }) {
  const totalFeatures = comparisons.reduce((acc, c) => acc + c.comparisonTable.length, 0);

  return (
    <main className="bg-white">

      {/* Hero */}
      <Section className="pt-12 md:pt-16 pb-10 md:pb-14">
        <div className="max-w-4xl">
          <nav className="flex items-center gap-1.5 text-[13px] text-[#9ca3af] mb-8">
            <a href="/" className="hover:text-black transition-colors">Home</a>
            <span>/</span>
            <span className="text-[#6b7280]">Compare</span>
          </nav>

          <div className="inline-flex items-center gap-2 mb-5 text-[15px] font-medium text-black">
            <div className="w-5 h-1.5 bg-[#2663eb] rounded-xl" />
            <span>compare sendbox</span>
          </div>

          <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] text-black tracking-tight mb-5">
            How Sendbox compares to other cold email platforms
          </h1>

          <p className="text-[17px] text-[#374151] leading-[1.7] max-w-2xl">
            Honest, side-by-side breakdowns of pricing, infrastructure, and features. Every comparison uses publicly available data from each platform.
          </p>

          {/* Quick stats */}
          <div className="flex items-center gap-6 mt-8 text-[13px] text-[#6b7280] flex-wrap">
            <span><span className="font-semibold text-black text-[15px]">{comparisons.length}</span> vs Sendbox</span>
            <span className="w-px h-4 bg-gray-200" />
            <span><span className="font-semibold text-black text-[15px]">{toolVsTool.length}</span> head-to-head</span>
            <span className="w-px h-4 bg-gray-200" />
            <span><span className="font-semibold text-black text-[15px]">{alternatives.length}</span> alternatives</span>
          </div>
        </div>
      </Section>

      {/* Comparisons Grid */}
      <Section className="pb-14 border-t border-gray-100">
        <div className="pt-10 md:pt-14">
          <h2 className="text-[1.375rem] font-semibold text-black tracking-tight leading-[1.2] mb-6">
            Head-to-Head Comparisons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {comparisons.map((c) => (
              <ComparisonCard key={c.slug} comparison={c} />
            ))}
          </div>
        </div>
      </Section>

      {/* Alternatives */}
      <Section className="pb-14 border-t border-gray-100">
        <div className="pt-10 md:pt-14">
          <h2 className="text-[1.375rem] font-semibold text-black tracking-tight leading-[1.2] mb-6">
            Alternatives Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {alternatives.map((a) => (
              <AlternativeCard key={a.slug} alternative={a} />
            ))}
          </div>
        </div>
      </Section>

      {/* Tool vs Tool */}
      {toolVsTool.length > 0 && (
        <Section className="pb-14 border-t border-gray-100">
          <div className="pt-10 md:pt-14">
            <h2 className="text-[1.375rem] font-semibold text-black tracking-tight leading-[1.2] mb-2">
              Head-to-Head Comparisons
            </h2>
            <p className="text-[14px] text-[#6b7280] mb-6">Every matchup includes Sendbox as a third option with dedicated IPs.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {toolVsTool.map((t) => (
                <ToolVsToolCard key={t.slug} matchup={t} />
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Sendbox Alternatives + What is Sendbox */}
      <Section className="pb-16 border-t border-gray-100">
        <div className="pt-10 md:pt-14 space-y-4">
          <a href="/sendbox-alternatives" className="group rounded-xl border border-gray-200 p-5 flex items-center gap-4 hover:border-gray-300 hover:shadow-sm transition-all">
            <Image src="/icon.png" alt="Sendbox" width={96} height={24} className="h-6 w-auto flex-shrink-0" />
            <div className="flex-1">
              <p className="text-[15px] font-semibold text-black group-hover:text-[#2663eb] transition-colors">Sendbox Alternatives</p>
              <p className="text-[13px] text-[#6b7280]">Our honest breakdown of what Sendbox does well and where other tools may be a better fit.</p>
            </div>
            <ArrowRight size={16} className="text-[#9ca3af] group-hover:text-[#2663eb] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
          </a>

          <div className="rounded-xl bg-[#111] p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center md:text-left">
              <p className="text-[15px] font-semibold text-white mb-1">New to Sendbox?</p>
              <p className="text-sm text-gray-400">
                Learn what Sendbox is, how it works, and why dedicated IPs matter for cold email deliverability.
              </p>
            </div>
            <a
              href="/what-is-sendbox"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#2663eb] text-white rounded-lg text-sm font-medium transition-all hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg group flex-shrink-0"
            >
              What is Sendbox?
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </Section>

      <CTA />
      <Footer />
    </main>
  );
}
