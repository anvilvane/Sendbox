
import React from 'react';
import Link from 'next/link';
import {
  GlobeIcon,
  SparkleIcon,
  FireIcon,
  InfinityIcon,
  ArrowsLeftRightIcon,
  ShuffleIcon,
  RocketLaunchIcon,
} from '@phosphor-icons/react/dist/ssr';

const Features = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-t border-gray-100 relative" id="features">
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="max-w-[80rem] h-full mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 mb-6 text-[15px] font-medium text-black">
            <div className="w-5 h-1.5 bg-[#2663eb] rounded-xl"></div>
            <span>why sendbox</span>
          </div>

          <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.1] text-black tracking-tight max-w-3xl text-balance">
            The infrastructure that serious outbound teams need.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-6">

            {/* Dedicated IPs - 4 col, dark, with visual */}
            <div className="bg-[#1a1a1a] p-6 md:p-8 md:col-span-4 md:flex md:gap-8 md:items-start border-b border-gray-200">
              <div className="flex-1 min-w-0">
                <GlobeIcon size={20} weight="duotone" className="text-[#2663eb] mb-3" />
                <h3 className="text-[15px] font-medium text-white tracking-tight"><Link href="/deliverability/dedicated-ips" className="hover:underline">Sendbox dedicated IPs</Link> on every plan</h3>
                <p className="mt-1.5 text-sm text-[#9ca3af] leading-relaxed">Every account gets its own IP and fully isolated sending environment. Your sender reputation is yours alone. Other customers never affect your deliverability.</p>
              </div>
              <div className="mt-4 md:mt-0 md:w-[200px] shrink-0 space-y-1.5">
                {[
                  { label: 'Your IP', status: 'Dedicated' },
                  { label: 'Infrastructure', status: 'Isolated' },
                  { label: 'Reputation', status: 'Protected' },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                    <span className="text-[12px] font-medium text-white/70">{row.label}</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-[10px] text-emerald-400">{row.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ESP matching - 2 col */}
            <div className="p-6 md:p-8 md:col-span-2 border-b border-gray-200">
              <ArrowsLeftRightIcon size={20} weight="duotone" className="text-[#2663eb] mb-3" />
              <h3 className="text-[15px] font-medium text-black tracking-tight"><Link href="/features/esp-matching" className="hover:underline">Sendbox ESP matching</Link></h3>
              <p className="mt-1.5 text-sm text-[#6b7280] leading-relaxed">Detects your lead's email provider and routes through a matching mailbox. Gmail to Gmail. Outlook to Outlook. Higher inbox placement, automatically.</p>
            </div>

            {/* Warmup - 2 col */}
            <div className="p-6 md:p-8 md:col-span-2 border-b border-gray-200 md:border-r md:border-gray-200">
              <FireIcon size={20} weight="duotone" className="text-[#2663eb] mb-3" />
              <h3 className="text-[15px] font-medium text-black tracking-tight"><Link href="/deliverability/human-like-warmup" className="hover:underline">Sendbox warmup</Link> that passes detection</h3>
              <p className="mt-1.5 text-sm text-[#6b7280] leading-relaxed">Randomized timing, natural engagement patterns, real account interactions. ESPs have gotten smart at detecting warmup. Ours is built to pass.</p>
            </div>

            {/* No caps - 4 col, with stat grid */}
            <div className="p-6 md:p-8 md:col-span-4 border-b border-gray-200">
              <InfinityIcon size={20} weight="duotone" className="text-[#2663eb] mb-3" />
              <h3 className="text-[15px] font-medium text-black tracking-tight">No caps on anything</h3>
              <p className="mt-1.5 text-sm text-[#6b7280] leading-relaxed mb-4">Everything that matters for deliverability is unlimited on every plan.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {[
                  { label: 'Warmup', value: 'Unlimited' },
                  { label: 'Validation', value: 'Unlimited' },
                  { label: 'Placement tests', value: 'Unlimited' },
                  { label: 'Blacklist checks', value: 'Unlimited' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-lg bg-[#fafafa] border border-gray-100 px-3 py-2.5 text-center">
                    <div className="text-[13px] font-semibold text-black tracking-tight">{stat.value}</div>
                    <div className="text-[11px] text-[#9ca3af] mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI - 2 col */}
            <div className="p-6 md:p-8 md:col-span-2 border-b border-gray-200 md:border-b-0 md:border-r md:border-gray-200">
              <SparkleIcon size={20} weight="duotone" className="text-[#2663eb] mb-3" />
              <h3 className="text-[15px] font-medium text-black tracking-tight">AI reply drafting + tagging</h3>
              <p className="mt-1.5 text-sm text-[#6b7280] leading-relaxed">When a lead replies, AI drafts a response and tags it as interested, not now, wrong person, or unsubscribe. You review and send.</p>
            </div>

            {/* No throttling - 2 col */}
            <div className="p-6 md:p-8 md:col-span-2 border-b border-gray-200 md:border-b-0 md:border-r md:border-gray-200">
              <RocketLaunchIcon size={20} weight="duotone" className="text-[#2663eb] mb-3" />
              <h3 className="text-[15px] font-medium text-black tracking-tight">No sending throttling</h3>
              <p className="mt-1.5 text-sm text-[#6b7280] leading-relaxed">Your mailboxes send at full capacity. No artificial throttling, no shared queues. Maximum utilization from day one.</p>
            </div>

            {/* A/B autopilot - 2 col */}
            <div className="p-6 md:p-8 md:col-span-2">
              <ShuffleIcon size={20} weight="duotone" className="text-[#2663eb] mb-3" />
              <h3 className="text-[15px] font-medium text-black tracking-tight"><Link href="/features/ab-testing" className="hover:underline">Sendbox A/B testing</Link> on autopilot</h3>
              <p className="mt-1.5 text-sm text-[#6b7280] leading-relaxed">Auto-disables underperforming variants and scales winners. No manual monitoring needed.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
