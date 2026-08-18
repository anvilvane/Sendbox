import React from 'react';

export default function FeatureDetails({ competitorCallout, detailBlocks, eyebrow = 'why sendbox', headline = 'The infrastructure advantage' }) {
  const hasCompetitor = !!competitorCallout;
  const hasDetails = detailBlocks && detailBlocks.length > 0;

  if (!hasCompetitor && !hasDetails) return null;

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-t border-gray-100 relative">
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="max-w-[80rem] h-full mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-6 text-[15px] font-medium text-black">
            <div className="w-5 h-1.5 bg-[#695AF2] rounded-xl" />
            <span>{eyebrow}</span>
          </div>

          <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.1] text-black tracking-tight text-balance">
            {headline}
          </h2>
        </div>

        <div className="border-t border-gray-200">

          {/* Dark competitor card - always full width */}
          {hasCompetitor && (
            <div className="bg-[#1a1a1a] p-6 md:p-8 md:flex md:gap-8 md:items-center border-b border-gray-200">
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

          {/* Detail blocks - side by side when there are 2, full width when there's 1 */}
          {hasDetails && (
            <div className={`grid grid-cols-1 ${detailBlocks.length > 1 ? 'md:grid-cols-2' : ''}`}>
              {detailBlocks.map((block, i) => (
                <div key={i} className={`p-6 md:p-8 ${detailBlocks.length > 1 && i === 0 ? 'md:border-r border-gray-200' : ''}`}>
                  <h3 className="text-[15px] font-medium text-black tracking-tight">{block.title}</h3>
                  <p className="mt-1.5 text-sm text-[#6b7280] leading-relaxed">{block.description}</p>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
