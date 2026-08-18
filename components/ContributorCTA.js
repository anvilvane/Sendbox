import { APP_LOGIN_URL } from "@/lib/app-url";


import React from 'react';
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';

const ContributorCTA = () => {


  return (
    <section className="relative py-16 px-4 md:px-8 bg-white border-t border-gray-100 overflow-hidden">
      

      <div className="relative max-w-2xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-6 text-[15px] font-medium text-black">
          <div className="w-5 h-1.5 bg-[#695AF2] rounded-xl"></div>
          <span>add your name</span>
        </div>

        {/* Heading */}
        <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.1] text-black tracking-tight mb-6 text-balance">
          Help build what's next
        </h2>

        {/* Description */}
        <p className="text-lg text-balance leading-relaxed text-[#6b7280] mb-10">
          Spotted a bug, or have an idea worth building? Tell us. We ship quickly and credit the people who pushed us there — this page could have your name on it.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-row items-center justify-center gap-3">
          <a
            href={APP_LOGIN_URL}
            className="inline-flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-[#695AF2] text-white rounded-lg text-sm md:text-[15px] font-medium transition-all hover:bg-[#5847E0] hover:-translate-y-0.5 hover:shadow-lg group"
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
          Most feature requests go from idea to live the same day.
        </p>
      </div>
    </section>
  );
};

export default ContributorCTA;
