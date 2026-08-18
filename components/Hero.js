
import React from 'react';
import { ArrowRightIcon, YoutubeLogoIcon } from '@phosphor-icons/react/dist/ssr';
import { APP_LOGIN_URL } from "@/lib/app-url";

const FACTS = [
  { value: 'Dedicated', label: 'IP on every plan' },
  { value: 'Isolated', label: 'sending environment' },
  { value: '15 min', label: 'signup to first send' },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative z-10 mx-auto max-w-[80rem] px-4 pt-20 pb-16 sm:px-6 sm:pt-24 md:px-8 md:pt-28 lg:pt-32">
        {/* Full-width, typography-led statement -- no side panel, no decorative
            box. The headline IS the composition; confidence over ornament. */}
        <h1 className="max-w-[18ch] text-[clamp(2.75rem,7vw,6rem)] font-semibold leading-[0.98] tracking-tight text-black">
          <span className="block">Land in the inbox.</span>
          <span className="block text-[#695AF2]">Not the spam folder.</span>
        </h1>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-md text-[clamp(0.9375rem,1.3vw,1.0625rem)] leading-relaxed text-[#4b5563]">
            Each account gets its own dedicated IP, its own fully separated sending environment, and a warmup engine that outpaces what other platforms offer. Built for agencies and go-to-market teams who treat the primary inbox as the only acceptable outcome.
          </p>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-3">
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
        </div>
        {/* Removed: "Backed by antx.vc" investor badge, and a scrolling wall of real
            company logos (Understory, LeadHaste, 11x, Vectify, Lambda Group, etc.) --
            both were SendKit's real, verified claims (a real investor, real customers).
            Carrying them over would falsely claim Sendbox has that same backing/customer
            base, which isn't true yet. Re-add once Sendbox has its own real investor
            and/or customers to show. */}
      </div>

      {/* Full-width fact strip -- a flat, confident line of real claims instead of a
          boxed stat-card grid or a decorative side panel. */}
      <div className="relative z-10 border-t border-gray-100">
        <div className="mx-auto grid max-w-[80rem] grid-cols-1 divide-y divide-gray-100 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {FACTS.map((fact) => (
            <div key={fact.label} className="flex items-baseline gap-3 px-4 py-5 sm:px-6 md:px-8 md:py-6">
              <span className="font-numeric text-lg font-semibold tracking-tight text-black md:text-xl">{fact.value}</span>
              <span className="text-sm text-[#6b7280]">{fact.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
