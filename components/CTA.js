
import React from 'react';
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';

const CTA = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-t border-gray-100 relative">
      {/* Vertical guide lines + corner dots */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="max-w-[80rem] h-full mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
          {/* Top corners */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-[#7196f4]" />
          <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-[#7196f4]" />
          {/* Bottom corners */}
          <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[7px] h-[7px] rounded-full bg-[#7196f4] z-10" />
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[7px] h-[7px] rounded-full bg-[#7196f4] z-10" />
        </div>
      </div>
      <div className="max-w-2xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6 text-[15px] font-medium text-black">
          <div className="w-5 h-1.5 bg-[#2663eb] rounded-xl"></div>
          <span>start sending today</span>
        </div>

        {/* Heading */}
        <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.1] text-black tracking-tight mb-6 text-balance">
          Ready to hit primary?
        </h2>

        {/* Description */}
        <p className="text-lg leading-relaxed text-[#6b7280] mb-10">
          Set up Sendbox's isolated infrastructure and start sending in under 15 minutes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://app.sendbox.ai/login"
            data-fast-goal="click_hit_primary"
            data-fast-goal-location="cta"
            className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-[#2663eb] text-white rounded-lg text-sm md:text-[15px] font-medium transition-all hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg group"
          >
              Hit Primary
            <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="/pricing"
            data-fast-goal="click_compare_plans"
            data-fast-goal-location="cta"
            className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-transparent text-[#6b7280] border border-[#e5e5e5] rounded-lg text-sm md:text-[15px] font-medium transition-all hover:bg-[#f5f5f5] hover:text-black hover:-translate-y-0.5"
          >
            Compare Plans
          </a>
        </div>

        {/* Trust indicator */}
        <p className="text-sm text-[#9ca3af] mt-6">
          Dedicated IPs on every plan. Cancel anytime.
        </p>
      </div>
    </section>
  );
};

export default CTA;
