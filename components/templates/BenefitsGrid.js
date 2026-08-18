import { APP_LOGIN_URL } from "@/lib/app-url";

import React from 'react';
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';

export default function BenefitsGrid({ benefits, eyebrow = "what's included", headline = 'Everything you need. Nothing you don\'t.' }) {
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
        {/* Eyebrow and Title */}
        <div className="mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-6 text-[15px] font-medium text-black">
            <div className="w-5 h-1 bg-[#695AF2] rounded-xl" />
            <span>{eyebrow}</span>
          </div>

          <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.1] text-black tracking-tight text-balance">
            {headline}
          </h2>
        </div>

        {/* Benefits Grid - WhySection bordered grid pattern */}
        <div className="space-y-0">
          <div className={`grid grid-cols-2 ${benefits.length > 3 ? 'md:grid-cols-4' : 'md:grid-cols-3'} border-t border-gray-100`}>
            {benefits.map((benefit, index) => {
              const cols = benefits.length > 3 ? 4 : 3;
              return (
                <div
                  key={index}
                  className={`border-r border-gray-100 px-4 md:px-6 py-5 md:py-8 flex flex-col gap-2 ${
                    index % 2 === 1 ? 'border-r-0 md:border-r' : ''
                  } ${index % cols === cols - 1 ? 'md:border-r-0' : ''} ${
                    index >= 2 ? 'border-t border-gray-100' : ''
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-black text-sm md:text-[15px] font-medium leading-snug">{benefit.title}</span>
                  </div>
                  <p className="text-xs md:text-[13px] text-[#6b7280] leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
          <div className="border-b border-gray-100" />
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
