
import React from 'react';
import { ArrowRightIcon, YoutubeLogoIcon } from '@phosphor-icons/react/dist/ssr';
import { APP_LOGIN_URL } from "@/lib/app-url";

const Hero = () => {
  return (
    <section className="bg-white relative">

      {/* Vertical guide lines - aligned with header's max-w-[80rem] container edges */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="max-w-[80rem] h-full mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
        </div>
      </div>

      {/* Main content */}
      <div className="flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 relative z-10">
        <div className="max-w-[1100px] mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 md:mb-8 text-sm sm:text-[15px] md:text-base font-medium text-black">
            <div className="w-3 sm:w-4 md:w-5 h-0.5 sm:h-1 md:h-1.5 bg-[#695AF2] rounded-xl"></div>
            <span>built for serious outbound</span>
          </div>

          {/* Title */}
          <h1 className="text-[clamp(2.25rem,5.5vw,5rem)] font-semibold leading-[1.1] text-black mx-auto mb-4 sm:mb-5 md:mb-6 max-w-[1000px] tracking-tight">
            <span className="block">Sequences built to land in the inbox,</span>
            <span className="block">not the spam folder.</span>
          </h1>

          {/* Description */}
          <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] leading-relaxed text-[#6b7280] mx-auto mb-6 sm:mb-8 md:mb-10 max-w-[600px] md:max-w-[700px] text-balance">
            Each account gets its own dedicated IP, its own fully separated sending environment, and a warmup engine that outpaces what other platforms offer. Built for agencies and go-to-market teams who treat the primary inbox as the only acceptable outcome.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row items-center justify-center gap-3">
            <a
              href={APP_LOGIN_URL}
              data-fast-goal="click_start_sending"
              data-fast-goal-location="hero"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#695AF2] text-white rounded-lg text-sm sm:text-[15px] font-medium transition-all hover:bg-[#5847E0] hover:-translate-y-0.5 hover:shadow-lg group"
            >
              Start Sending
              <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://youtu.be/D7LZOAA6oTQ"
              target="_blank"
              rel="noopener noreferrer"
              data-fast-goal="click_watch_demo"
              data-fast-goal-location="hero"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-transparent text-[#6b7280] border border-[#e5e5e5] rounded-lg text-sm sm:text-[15px] font-medium transition-all hover:bg-[#f5f5f5] hover:text-black hover:-translate-y-0.5"
            >
              <YoutubeLogoIcon size={18} weight="duotone" />
              Watch the 4-Minute Demo
            </a>
          </div>

          {/* Trust row */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="text-xs sm:text-sm text-[#6b7280]">Go from signup to a live campaign in 15 minutes</span>
          </div>
          {/* Removed: "Backed by antx.vc" investor badge, and a scrolling wall of real
              company logos (Understory, LeadHaste, 11x, Vectify, Lambda Group, etc.) --
              both were SendKit's real, verified claims (a real investor, real customers).
              Carrying them over would falsely claim Sendbox has that same backing/customer
              base, which isn't true yet. Re-add once Sendbox has its own real investor
              and/or customers to show. */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
