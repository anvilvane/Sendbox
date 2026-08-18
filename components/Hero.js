
import React from 'react';
import { ArrowRightIcon, YoutubeLogoIcon } from '@phosphor-icons/react/dist/ssr';
import { APP_LOGIN_URL } from "@/lib/app-url";

// Isolation grid — a literal visual for the product's actual core claim (every
// account on its own dedicated IP, in its own isolated sending environment).
// Not decorative: each cell is a "sender", most are dim/disconnected from each
// other, one is lit and traced back to a single labeled account. Built in pure
// CSS/SVG so there's no broken-asset risk and no stock-photo standing in for a
// SaaS product that has no literal "scene" to photograph.
function IsolationGrid() {
  const cells = Array.from({ length: 30 });
  const highlighted = 16;
  return (
    <div className="relative">
      <div className="grid grid-cols-6 gap-2 sm:gap-2.5">
        {cells.map((_, i) => (
          <div
            key={i}
            className={
              i === highlighted
                ? 'aspect-square rounded-[7px] bg-[#695AF2] shadow-[0_0_0_3px_rgba(105,90,242,0.15),0_8px_20px_-6px_rgba(105,90,242,0.55)]'
                : 'aspect-square rounded-[7px] bg-gray-100 border border-gray-200/80'
            }
          />
        ))}
      </div>
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <line x1="50" y1="0" x2="50" y2="100" stroke="transparent" />
      </svg>
      <div className="mt-4 flex items-start gap-2.5 sm:mt-5">
        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#695AF2]" />
        <p className="text-xs leading-snug text-[#6b7280] sm:text-[13px]">
          One dedicated IP, one isolated environment, per account. Nothing else on this grid can touch your reputation.
        </p>
      </div>
    </div>
  );
}

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Vertical guide lines - aligned with header's max-w-[80rem] container edges */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="max-w-[80rem] h-full mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-100" />
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-[80rem] grid-cols-1 gap-12 px-4 pb-14 pt-14 sm:px-6 sm:pb-16 sm:pt-16 md:px-8 md:pb-20 md:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-8 lg:py-24">
        {/* Left: copy — left-aligned, not centered */}
        <div className="max-w-xl">
          <h1 className="text-[clamp(2.25rem,5vw,4.25rem)] font-semibold leading-[1.05] tracking-tight text-black">
            <span className="block">Sequences built to land</span>
            <span className="block">in the inbox, <span className="text-[#695AF2]">not the spam folder.</span></span>
          </h1>

          <p className="mt-6 max-w-md text-[clamp(0.9375rem,1.3vw,1.0625rem)] leading-relaxed text-[#4b5563]">
            Each account gets its own dedicated IP, its own fully separated sending environment, and a warmup engine that outpaces what other platforms offer. Built for agencies and go-to-market teams who treat the primary inbox as the only acceptable outcome.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-3">
            <a
              href={APP_LOGIN_URL}
              data-fast-goal="click_start_sending"
              data-fast-goal-location="hero"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#695AF2] px-6 py-3 text-[15px] font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#5847E0] hover:shadow-lg"
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
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-[#e5e5e5] bg-transparent px-6 py-3 text-[15px] font-medium text-[#6b7280] transition-all hover:bg-[#f5f5f5] hover:text-black"
            >
              <YoutubeLogoIcon size={18} weight="duotone" />
              Watch the 4-Minute Demo
            </a>
          </div>

          <p className="mt-6 text-sm text-[#9ca3af]">Go from signup to a live campaign in 15 minutes.</p>
          {/* Removed: "Backed by antx.vc" investor badge, and a scrolling wall of real
              company logos (Understory, LeadHaste, 11x, Vectify, Lambda Group, etc.) --
              both were SendKit's real, verified claims (a real investor, real customers).
              Carrying them over would falsely claim Sendbox has that same backing/customer
              base, which isn't true yet. Re-add once Sendbox has its own real investor
              and/or customers to show. */}
        </div>

        {/* Right: the isolation grid — replaces the old dead-center trust row as the
            asymmetric visual counterweight to the left column */}
        <div className="lg:pl-4">
          <IsolationGrid />
        </div>
      </div>
    </section>
  );
};

export default Hero;
