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

function AlternativeCard({ alternative }) {
  const topAlts = alternative.alternatives.filter(a => !a.isSendbox).slice(0, 3);

  return (
    <a
      href={`/alternative/${alternative.slug}`}
      className="group rounded-xl border border-gray-200 p-5 hover:border-gray-300 hover:shadow-sm transition-all flex flex-col"
    >
      {/* Logo + name */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-lg border border-gray-100 bg-gray-50 flex items-center justify-center flex-shrink-0">
          <Image
            src={`/screenshots/competitors/${alternative.slug}/logo.png`}
            alt={alternative.competitorName}
            width={96}
            height={24}
            className="h-6 w-auto rounded"
          />
        </div>
        <div>
          <h3 className="text-[15px] font-semibold text-black group-hover:text-[#695AF2] transition-colors">
            {alternative.competitorName} Alternatives
          </h3>
          <p className="text-[12px] text-[#9ca3af]">{alternative.alternatives.length} tools compared</p>
        </div>
      </div>

      {/* Switch reasons preview */}
      <p className="text-[13px] text-[#6b7280] leading-relaxed mb-4 flex-1 line-clamp-2">
        {alternative.switchReasons.slice(0, 2).map(r => r.title).join(', ')}, and more.
      </p>

      {/* Top alternatives preview */}
      <div className="flex items-center gap-1.5 mb-3">
        {topAlts.map((alt, i) => (
          alt.logo && (
            <div key={i} className="w-6 h-6 rounded-full border border-gray-200 bg-white flex items-center justify-center overflow-hidden" title={alt.name}>
              <Image src={alt.logo} alt={alt.name} width={64} height={16} className="h-4 w-auto rounded" />
            </div>
          )
        ))}
        <span className="text-[11px] text-[#9ca3af] ml-1">+{alternative.alternatives.length - 3} more</span>
      </div>

      {/* Link */}
      <div className="pt-3 border-t border-gray-100 flex items-center gap-1 text-[13px] font-medium text-[#695AF2]">
        View alternatives
        <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
      </div>
    </a>
  );
}

export default function AlternativesHubTemplate({ alternatives }) {
  const totalTools = new Set(alternatives.flatMap(a => a.alternatives.map(alt => alt.name))).size;

  return (
    <main className="bg-white">

      <Section className="pt-12 md:pt-16 pb-10 md:pb-14">
        <div className="max-w-4xl">
          <nav className="flex items-center gap-1.5 text-[13px] text-[#9ca3af] mb-8">
            <a href="/" className="hover:text-black transition-colors">Home</a>
            <span>/</span>
            <span className="text-[#6b7280]">Alternatives</span>
          </nav>

          <div className="inline-flex items-center gap-2 mb-5 text-[15px] font-medium text-black">
            <div className="w-5 h-1.5 bg-[#695AF2] rounded-xl" />
            <span>alternatives</span>
          </div>

          <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.1] text-black tracking-tight mb-5">
            Cold Email Tool Alternatives
          </h1>

          <p className="text-[17px] text-[#374151] leading-[1.7] max-w-2xl">
            Looking to switch cold email platforms? Each guide compares 7 alternatives with honest pricing, feature breakdowns, and infrastructure details.
          </p>

          <div className="flex items-center gap-6 mt-8 text-[13px] text-[#6b7280]">
            <span><span className="font-semibold text-black text-[15px]">{alternatives.length}</span> guides</span>
            <span className="w-px h-4 bg-gray-200" />
            <span><span className="font-semibold text-black text-[15px]">{totalTools}</span> tools reviewed</span>
          </div>
        </div>
      </Section>

      <Section className="pb-14 border-t border-gray-100">
        <div className="pt-10 md:pt-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {alternatives.map((a) => (
              <AlternativeCard key={a.slug} alternative={a} />
            ))}
          </div>
        </div>
      </Section>

      {/* Compare CTA */}
      <Section className="pb-16 border-t border-gray-100">
        <div className="pt-10 md:pt-14">
          <div className="rounded-xl bg-[#111] p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center md:text-left">
              <p className="text-[15px] font-semibold text-white mb-1">Want head-to-head comparisons?</p>
              <p className="text-sm text-gray-400">
                See how Sendbox stacks up directly against each platform with detailed feature and pricing breakdowns.
              </p>
            </div>
            <a
              href="/compare"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#695AF2] text-white rounded-lg text-sm font-medium transition-all hover:bg-[#5847E0] hover:-translate-y-0.5 hover:shadow-lg group flex-shrink-0"
            >
              View Comparisons
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
