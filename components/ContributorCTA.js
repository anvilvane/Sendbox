
import React from 'react';
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';

const ContributorCTA = () => {


  return (
    <section className="relative py-16 px-4 md:px-8 bg-white border-t border-gray-100 overflow-hidden">
      

      <div className="relative max-w-2xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6 text-[15px] font-medium text-black">
          <div className="w-5 h-1.5 bg-[#2663eb] rounded-xl"></div>
          <span>join the community</span>
        </div>

        {/* Heading */}
        <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.1] text-black tracking-tight mb-6 text-balance">
          Become a contributor
        </h2>

        {/* Description */}
        <p className="text-lg text-balance leading-relaxed text-[#6b7280] mb-10">
          Got an idea? Found a bug? We ship fast and give credit where it&apos;s due. Your name could be on this page.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-row items-center justify-center gap-3">
          <a
            href="https://app.sendbox.ai/login"
            className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-[#2663eb] text-white rounded-lg text-sm md:text-[15px] font-medium transition-all hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg group"
          >
            Get Started
            <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-transparent text-[#6b7280] border border-[#e5e5e5] rounded-lg text-sm md:text-[15px] font-medium transition-all hover:bg-[#f5f5f5] hover:text-black hover:-translate-y-0.5"
          >
            Compare Plans
          </a>
        </div>

        {/* Trust indicator */}
        <p className="text-sm text-[#9ca3af] mt-6">
          We ship fast. Most features go live the same day.
        </p>
      </div>
    </section>
  );
};

export default ContributorCTA;
