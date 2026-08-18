import { APP_LOGIN_URL } from "@/lib/app-url";

import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRightIcon,
  BellIcon,
  ChartLineUpIcon,
  ArrowsClockwiseIcon,
  ShieldCheckIcon,
  FingerprintIcon,
  LockIcon,
  UsersIcon,
  ListChecksIcon,
  GaugeIcon,
  TargetIcon,
} from '@phosphor-icons/react/dist/ssr';
import FeatureFAQ from './FeatureFAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { toolsData } from '@/data/tools';

const ICONS = {
  Bell: BellIcon, ChartLineUp: ChartLineUpIcon, ArrowsClockwise: ArrowsClockwiseIcon,
  ShieldCheck: ShieldCheckIcon, Fingerprint: FingerprintIcon, Lock: LockIcon,
  Users: UsersIcon, ListChecks: ListChecksIcon, Gauge: GaugeIcon, Target: TargetIcon,
};

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

export default function ToolPageTemplate({ tool, children }) {
  const related = toolsData.filter(t => t.slug !== tool.slug);

  return (
    <main className="bg-white">

      {/* ── Hero ─────────────────────────────────────────── */}
      <Section className="pt-12 md:pt-20 pb-12 md:pb-16 border-b border-gray-100">
        <div className="mb-8 md:mb-10 text-center max-w-2xl mx-auto">
          <nav className="flex items-center justify-center gap-1.5 text-[13px] text-[#9ca3af] mb-6">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <span>/</span>
            <Link href="/tools" className="hover:text-black transition-colors">Tools</Link>
            <span>/</span>
            <span className="text-[#6b7280]">{tool.name}</span>
          </nav>

          <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 text-sm sm:text-[15px] font-medium text-black">
            <div className="w-3 sm:w-4 md:w-5 h-0.5 sm:h-1 md:h-1.5 bg-[#695AF2] rounded-xl" />
            <span>free tool</span>
          </div>

          <h1 className="text-[clamp(2.25rem,5.5vw,4rem)] font-semibold leading-[1.1] text-black tracking-tight mb-5 text-balance">
            {tool.headline}
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-[#6b7280] mb-0 max-w-xl mx-auto text-balance">
            {tool.description}
          </p>

          {/* Stats */}
          {tool.stats && (
            <div className="flex items-center justify-center gap-3 mt-4">
              {tool.stats.map((s, i) => (
                <span key={i} className="text-xs sm:text-sm text-[#6b7280]">
                  {i > 0 && <span className="inline-block w-px h-3 bg-gray-200 mr-3 align-middle" />}
                  <strong className="text-black">{s.value}</strong> {s.label}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Tool UI */}
        <div className={`${tool.wide ? '' : 'max-w-2xl'} mx-auto`}>
          {children}
        </div>
      </Section>

      {/* ── How it works ─────────────────────────────────── */}
      <Section className="py-12 md:py-16 border-b border-gray-100">
        <div className="grid md:grid-cols-4 gap-6 md:gap-10">
          <div>
            <h2 className="text-[clamp(1.5rem,3.5vw,2rem)] font-semibold leading-[1.1] text-black tracking-tight">
              How it works
            </h2>
          </div>
          {tool.howItWorks.map((item, i) => {
            const s = typeof item === 'string' ? { step: item, detail: '' } : item;
            return (
              <div key={i}>
                <span className="text-sm font-semibold text-[#695AF2] tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-[15px] font-semibold text-black mt-2 leading-snug">{s.step}</h3>
                {s.detail && <p className="text-sm text-[#6b7280] leading-relaxed mt-1.5">{s.detail}</p>}
              </div>
            );
          })}
        </div>
      </Section>

      {/* ── Why this matters ─────────────────────────────── */}
      <Section className="py-12 md:py-16 border-b border-gray-100">
        <div className="md:grid md:grid-cols-5 md:gap-12">
          <div className="md:col-span-2">
            <h2 className="text-[clamp(1.5rem,3.5vw,2rem)] font-semibold leading-[1.1] text-black tracking-tight mb-4 md:mb-0">
              Why this matters
            </h2>
          </div>
          <div className="md:col-span-3">
            <p className="text-base leading-[1.8] text-[#6b7280]">{tool.whyItMatters}</p>
          </div>
        </div>
      </Section>

      {/* ── Sendbox CTA card ─────────────────────────────── */}
      {tool.proFeatures && (
        <Section className="py-12 md:py-16 border-b border-gray-100">
          <div className="rounded-xl bg-[#695AF2] p-6 md:p-10">
            <div className="md:flex md:gap-10">
              <div className="md:flex-1 mb-6 md:mb-0">
                <Image src="/icon.png" alt="Sendbox" className="h-5 w-auto brightness-0 invert mb-4" width={280} height={57} />
                <h2 className="text-xl md:text-2xl font-semibold text-white leading-[1.2] tracking-tight mb-2">
                  {tool.ctaHeadline || 'Go beyond one-off checks'}
                </h2>
                <p className="text-sm text-white/70 leading-relaxed mb-6">
                  {tool.ctaDescription || 'This tool gives you a snapshot. Sendbox gives you continuous monitoring, automated checks, and everything built into your sending workflow.'}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={APP_LOGIN_URL}
                    data-fast-goal="click_tool_cta"
                    data-fast-goal-location={`tool_${tool.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-[#695AF2] rounded-lg text-sm sm:text-[15px] font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg group no-underline"
                  >
                    Get Started
                    <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="/pricing"
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-transparent text-white/80 border border-white/20 rounded-lg text-sm sm:text-[15px] font-medium transition-all hover:bg-white/10 hover:text-white hover:-translate-y-0.5 no-underline"
                  >
                    Compare plans
                  </a>
                </div>
              </div>

              <div className="md:w-72 space-y-4 pt-4 md:pt-2">
                {tool.proFeatures.map((f, i) => {
                  const Icon = ICONS[f.icon] || BellIcon;
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <Icon size={18} weight="duotone" className="text-white/60 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-white leading-snug">{f.title}</p>
                        <p className="text-xs text-white/50 leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* ── Related tools ────────────────────────────────── */}
      {related.length > 0 && (
        <Section className="py-12 md:py-16 border-b border-gray-100">
          <h2 className="text-[clamp(1.5rem,3.5vw,2rem)] font-semibold leading-[1.1] text-black tracking-tight mb-6">
            More free deliverability tools
          </h2>
          <div className="space-y-0 border-t border-gray-200">
            {related.map((t) => (
              <Link
                key={t.slug}
                href={`/tools/${t.slug}`}
                className="flex items-center justify-between py-4 border-b border-gray-200 group no-underline transition-colors hover:bg-gray-50/50 -mx-2 px-2 rounded"
              >
                <div className="min-w-0 mr-4">
                  <p className="text-[15px] font-medium text-black group-hover:text-[#695AF2] transition-colors">{t.name}</p>
                  <p className="text-sm text-[#9ca3af] mt-0.5 truncate">{t.description}</p>
                </div>
                <ArrowRightIcon size={16} className="text-[#9ca3af] group-hover:text-[#695AF2] transition-all shrink-0 group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </Section>
      )}

      <FeatureFAQ items={tool.faqs} />
      <CTA />
      <Footer />
    </main>
  );
}
