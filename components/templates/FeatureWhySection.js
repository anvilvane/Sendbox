import React from 'react';
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';

export default function FeatureWhySection({ items, eyebrow = 'how it works', headline = 'How it works', bodyText }) {
  if (!items || items.length === 0) return null;

  // Most pages will have 6 items (3 howItWorks + 3 useCases) → 2x3 grid on desktop
  // Use 4 cols for 4+ items, 3 cols otherwise
  const mdCols = items.length > 3 ? 4 : 3;

  return (
    <section className="bg-white border-t border-gray-100 relative">
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="max-w-[80rem] h-full mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="mb-12 md:mb-20">
          <div className="mb-10 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-6 text-[15px] font-medium text-black">
              <div className="w-5 h-1 bg-[#2663eb] rounded-xl" />
              <span>{eyebrow}</span>
            </div>

            <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.1] text-black tracking-tight text-balance">
              {headline}
            </h2>
          </div>

          <div className="space-y-0">
            <div className={`grid grid-cols-2 ${mdCols === 4 ? 'md:grid-cols-4' : 'md:grid-cols-3'} border-t border-gray-100`}>
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`border-r border-gray-100 px-4 md:px-6 py-5 md:py-8 flex flex-col gap-2 ${
                    index % 2 === 1 ? 'border-r-0 md:border-r' : ''
                  } ${index % mdCols === mdCols - 1 ? 'md:border-r-0' : ''} ${
                    index >= 2 ? 'border-t border-gray-100' : ''
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-black text-sm md:text-[15px] font-medium leading-snug">{item.title}</span>
                  </div>
                  <p className="text-xs md:text-[13px] text-[#6b7280] leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="border-b border-gray-100" />
          </div>
        </div>

        <div>
          {bodyText && (
            <p className="text-base leading-relaxed text-[#6b7280] mb-8 max-w-lg">
              {bodyText}
            </p>
          )}

          <a href="https://app.sendbox.ai/login" data-fast-goal="click_start_sending" data-fast-goal-location="why_section" className="inline-flex items-center gap-2 text-[#2663eb] bg-transparent border-none cursor-pointer text-base font-medium transition-all hover:gap-3 group">
            Start sending
            <ArrowRightIcon size={20} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
