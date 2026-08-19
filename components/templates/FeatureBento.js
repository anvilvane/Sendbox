import { APP_LOGIN_URL } from "@/lib/app-url";

import React from 'react';
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';

export default function FeatureBento({ competitorCallout, howItWorks, detailBlocks, useCases }) {
  // Build bento cells from available data
  const hasCompetitor = !!competitorCallout;
  const hasSteps = howItWorks && howItWorks.length > 0;
  const hasDetails = detailBlocks && detailBlocks.length > 0;
  const hasCases = useCases && useCases.length > 0;

  if (!hasCompetitor && !hasSteps && !hasDetails && !hasCases) return null;

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-t border-gray-100 relative">
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="max-w-[80rem] h-full mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 md:mb-14">
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.1] text-black tracking-tight text-balance">
            The infrastructure advantage
          </h2>
        </div>

        {/* Bento Grid - exact Features.js pattern */}
        <div className="border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-6">

            {/* Row 1: Dark competitor card (4-col) + first step (2-col) */}
            {hasCompetitor && (
              <div className="bg-[#1a1a1a] p-6 md:p-8 md:col-span-4 md:flex md:gap-8 md:items-start border-b border-gray-200">
                <div className="flex-1 min-w-0">
                  <h3 className="text-[15px] font-medium text-white tracking-tight">{competitorCallout.title}</h3>
                  <p className="mt-1.5 text-sm text-[#9ca3af] leading-relaxed">{competitorCallout.description}</p>
                </div>
                <div className="mt-4 md:mt-0 md:w-[200px] shrink-0 space-y-1.5">
                  {competitorCallout.competitors.map((name) => (
                    <div key={name} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                      <span className="text-[12px] font-medium text-white/70">vs {name}</span>
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span className="text-[10px] text-emerald-400">Sendbox</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {hasSteps && (
              <div className={`p-6 md:p-8 ${hasCompetitor ? 'md:col-span-2' : 'md:col-span-3'} border-b border-gray-200`}>
                <h3 className="text-[15px] font-medium text-black tracking-tight">{howItWorks[0].title}</h3>
                <p className="mt-1.5 text-sm text-[#6b7280] leading-relaxed">{howItWorks[0].description}</p>
              </div>
            )}

            {/* Row 2: Step 2 (2-col) + detail block with stats (4-col) */}
            {hasSteps && howItWorks.length > 1 && (
              <div className="p-6 md:p-8 md:col-span-2 border-b border-gray-200 md:border-r md:border-gray-200">
                <h3 className="text-[15px] font-medium text-black tracking-tight">{howItWorks[1].title}</h3>
                <p className="mt-1.5 text-sm text-[#6b7280] leading-relaxed">{howItWorks[1].description}</p>
              </div>
            )}

            {hasDetails && (
              <div className="p-6 md:p-8 md:col-span-4 border-b border-gray-200">
                <h3 className="text-[15px] font-medium text-black tracking-tight">{detailBlocks[0].title}</h3>
                <p className="mt-1.5 text-sm text-[#6b7280] leading-relaxed mb-4">{detailBlocks[0].description}</p>
                {detailBlocks[0].stats && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {detailBlocks[0].stats.map((stat) => (
                      <div key={stat.label} className="rounded-lg bg-[#fafafa] border border-gray-100 px-3 py-2.5 text-center">
                        <div className="text-[13px] font-semibold text-black tracking-tight font-numeric">{stat.value}</div>
                        <div className="text-[11px] text-[#9ca3af] mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Row 3: Step 3 + use cases or detail block 2 */}
            {hasSteps && howItWorks.length > 2 && (
              <div className={`p-6 md:p-8 md:col-span-2 border-b border-gray-200 md:border-b-0 ${(hasCases || (hasDetails && detailBlocks.length > 1)) ? 'md:border-r md:border-gray-200' : ''}`}>
                <h3 className="text-[15px] font-medium text-black tracking-tight">{howItWorks[2].title}</h3>
                <p className="mt-1.5 text-sm text-[#6b7280] leading-relaxed">{howItWorks[2].description}</p>
              </div>
            )}

            {hasDetails && detailBlocks.length > 1 && (
              <div className={`p-6 md:p-8 md:col-span-2 border-b border-gray-200 md:border-b-0 ${hasCases ? 'md:border-r md:border-gray-200' : ''}`}>
                <h3 className="text-[15px] font-medium text-black tracking-tight">{detailBlocks[1].title}</h3>
                <p className="mt-1.5 text-sm text-[#6b7280] leading-relaxed">{detailBlocks[1].description}</p>
                {detailBlocks[1].stats && (
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {detailBlocks[1].stats.map((stat) => (
                      <div key={stat.label} className="rounded-lg bg-[#fafafa] border border-gray-100 px-3 py-2.5 text-center">
                        <div className="text-[13px] font-semibold text-black tracking-tight font-numeric">{stat.value}</div>
                        <div className="text-[11px] text-[#9ca3af] mt-0.5">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {hasCases && useCases.slice(0, hasSteps && howItWorks.length > 2 && hasDetails && detailBlocks.length > 1 ? 1 : 3).map((useCase, i) => (
              <div key={i} className={`p-6 md:p-8 md:col-span-2 ${i < 2 ? 'md:border-r md:border-gray-200' : ''}`}>
                <h3 className="text-[15px] font-medium text-black tracking-tight">{useCase.title}</h3>
                <p className="mt-1.5 text-sm text-[#6b7280] leading-relaxed">{useCase.description}</p>
              </div>
            ))}

          </div>
        </div>

        {/* Remaining use cases if any didn't fit the bento */}
        {hasCases && useCases.length > 1 && (
          <div className="border-t border-gray-200 mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {useCases.map((useCase, i) => (
                <div key={i} className={`p-6 md:p-8 ${i < useCases.length - 1 ? 'md:border-r border-gray-200' : ''} border-b md:border-b-0 border-gray-200`}>
                  <h3 className="text-[15px] font-medium text-black tracking-tight">{useCase.title}</h3>
                  <p className="mt-1.5 text-sm text-[#6b7280] leading-relaxed mb-4">{useCase.description}</p>
                  <a href={APP_LOGIN_URL} className="inline-flex items-center gap-2 text-[#695AF2] bg-transparent border-none cursor-pointer text-sm font-medium transition-all hover:gap-3 group">
                    Start sending
                    <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
