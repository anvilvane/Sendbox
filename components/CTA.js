import { APP_LOGIN_URL } from "@/lib/app-url";

import React from 'react';
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';

const CTA = () => {
  return (
    // Full-bleed violet band -- a "Drenched" color moment (brand.md permits this:
    // "a single saturated color spread... is not excess; it's voice") instead of
    // the small centered white box every other section-ending CTA on this template
    // used. Left-aligned, asymmetric composition matching Hero's voice, not a
    // second copy of it.
    <section className="relative overflow-hidden bg-[#695AF2] py-20 md:py-28">
      <div className="pointer-events-none absolute -right-24 -top-24 h-[26rem] w-[26rem] rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/4 h-[22rem] w-[22rem] rounded-full bg-[#5847E0] blur-3xl" />

      <div className="relative mx-auto max-w-[80rem] px-4 sm:px-6 md:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-[16ch] text-[clamp(2.25rem,5.5vw,4.25rem)] font-semibold leading-[1.02] tracking-tight text-white">
            Ready to land in primary?
          </h2>

          <div className="flex flex-col items-start gap-5 lg:items-end lg:text-right">
            <p className="max-w-sm text-base leading-relaxed text-white/70 lg:text-right">
              Get your own isolated Sendbox setup running and start sending inside 15 minutes.
            </p>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <a
                href={APP_LOGIN_URL}
                data-fast-goal="click_hit_primary"
                data-fast-goal-location="cta"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-[15px] font-medium text-[#695AF2] transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Land in Primary
                <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="/pricing"
                data-fast-goal="click_compare_plans"
                data-fast-goal-location="cta"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-transparent px-6 py-3 text-[15px] font-medium text-white transition-all hover:bg-white/10"
              >
                See the Plans
              </a>
            </div>
          </div>
        </div>

        <p className="relative mt-12 border-t border-white/15 pt-6 text-sm text-white/60">
          Every plan includes a dedicated IP. Cancel whenever you want.
        </p>
      </div>
    </section>
  );
};

export default CTA;
