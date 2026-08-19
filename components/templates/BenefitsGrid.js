import { APP_LOGIN_URL } from "@/lib/app-url";

import React from 'react';
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';

export default function BenefitsGrid({ benefits, headline = 'Everything you need. Nothing you don\'t.' }) {
  if (!benefits || benefits.length === 0) return null;

  return (
    <section className="bg-white border-t border-gray-100 relative">
      {/* Vertical guide lines */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="max-w-[80rem] h-full mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="mb-10 md:mb-16">
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.1] text-black tracking-tight text-balance">
            {headline}
          </h2>
        </div>

        {/* Flowing two-column divider list, matching WhySection's differentiator pattern
            instead of a grid of bordered boxes. */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 border-t border-gray-100">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-3 py-5 md:py-6 border-b border-gray-100 md:[&:nth-last-child(2)]:border-b-0 last:border-b-0">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#695AF2]" />
              <div className="flex flex-col gap-1.5">
                <span className="text-black text-sm md:text-[15px] font-medium leading-snug">{benefit.title}</span>
                <p className="text-xs md:text-[13px] text-[#6b7280] leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA link */}
        <div className="mt-10">
          <a href={APP_LOGIN_URL} data-fast-goal="click_start_sending" data-fast-goal-location="benefits_section" className="inline-flex items-center gap-2 text-[#695AF2] bg-transparent border-none cursor-pointer text-base font-medium transition-all hover:gap-3 group">
            Start sending
            <ArrowRightIcon size={20} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
