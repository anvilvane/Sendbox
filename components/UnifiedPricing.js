
import React from 'react';

const UnifiedPricing = ({ headingTag: HeadingTag = 'h2' }) => {
  const features = [
    // Sending limits
    { category: "Sending & leads" },
    { name: "Emails per month", essential: "75,000", plus: "250,000", pro: "500,000", agency: "2,500,000", power: "10,000,000" },
    { name: "Lead storage", essential: "30,000", plus: "100,000", pro: "Unlimited*", agency: "Unlimited*", power: "Unlimited*", tooltip: "Plans with unlimited leads can request a limit increase for free when they reach 90% of their current limit" },
    { name: "Credits", essential: "500", plus: "1,000", pro: "2,000", agency: "4,000", power: "10,000", tooltip: "Credits are used for AI features and enrichment" },

    // Infrastructure
    { category: "Infrastructure" },
    { name: "Mailboxes", essential: "Unlimited*", plus: "Unlimited*", pro: "Unlimited*", agency: "Unlimited*", power: "Unlimited*" },
    { name: "Dedicated IPs", essential: true, plus: true, pro: true, agency: true, power: true },
    { name: "Isolated sending infrastructure", essential: true, plus: true, pro: true, agency: true, power: true },
    { name: "Unlimited mailbox warmup", essential: true, plus: true, pro: true, agency: true, power: true },
    { name: "Email validation", essential: "Unlimited*", plus: "Unlimited*", pro: "Unlimited*", agency: "Unlimited*", power: "Unlimited*" },

    // Tools & automation
    { category: "Tools & automation" },
    { name: "AI reply agent", essential: true, plus: true, pro: true, agency: true, power: true },
    { name: "AI reply tagging", essential: true, plus: true, pro: true, agency: true, power: true },
    { name: "Unified inbox + Slack", essential: true, plus: true, pro: true, agency: true, power: true },
    { name: "Phone dialer**", essential: true, plus: true, pro: true, agency: true, power: true },
    { name: "Inbox placement tests", essential: "Unlimited*", plus: "Unlimited*", pro: "Unlimited*", agency: "Unlimited*", power: "Unlimited*" },
    { name: "Blacklist monitoring", essential: "Unlimited*", plus: "Unlimited*", pro: "Unlimited*", agency: "Unlimited*", power: "Unlimited*" },

    // Scale & agency
    { category: "Scale & agency" },
    { name: "Workspaces", essential: "Unlimited", plus: "Unlimited", pro: "Unlimited", agency: "Unlimited", power: "Unlimited" },
    { name: "White label", essential: false, plus: false, pro: true, agency: true, power: true },
    { name: "Custom branded reports", essential: false, plus: false, pro: false, agency: true, power: true },
    { name: "Dedicated account manager", essential: false, plus: false, pro: false, agency: true, power: true },
  ];

  const plans = ['essential', 'plus', 'pro', 'agency', 'power'];

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 bg-white border-t border-gray-100 relative" id="pricing">
      {/* Vertical guide lines */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="max-w-[80rem] h-full mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Pricing Header */}
        <div className="max-w-4xl pb-12 mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 text-[15px] font-medium text-black">
            <div className="w-5 h-1.5 bg-[#2663eb] rounded-xl"></div>
            <span>pricing</span>
          </div>
          <HeadingTag className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.1] text-black tracking-tight mb-6 text-balance">
            Built for serious senders
          </HeadingTag>
          <p className="text-lg md:text-xl leading-relaxed text-[#6b7280] max-w-2xl mx-auto">
            Premium infrastructure. Transparent pricing. Limitless scale.
          </p>
        </div>
        <div className="w-full overflow-x-auto">
          <div className="border border-gray-200 overflow-hidden bg-white min-w-[1100px]">
            {/* Header */}
            <div className="grid grid-cols-6 border-b border-gray-200">
              <div className="p-4 sm:p-6 flex flex-col justify-center">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-black">Choose your plan</h2>
              </div>

              {/* Essential */}
              <div className="p-4 sm:p-6 border-l border-gray-200 flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-medium mb-2 tracking-tight flex items-center gap-1.5 sm:gap-2 text-black">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0" viewBox="0 0 100 100" fill="currentColor">
                    <polygon points="50,14 64,54 92,86 50,78 8,86 36,54" />
                  </svg>
                  Essential
                </h3>
                <div className="flex flex-col gap-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-black font-numeric">$99</span>
                    <span className="text-sm sm:text-base text-[#6b7280]">/month</span>
                  </div>
                  <a
                    href="https://app.sendbox.ai/login"
                    data-fast-goal="click_get_started"
                    data-fast-goal-plan="essential"
                    data-fast-goal-price="99"
                    className="py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-medium bg-[#e5e5e5] text-black hover:bg-[#d4d4d4] transition-colors text-center no-underline"
                  >
                    Get Started
                  </a>
                </div>
              </div>

              {/* Plus */}
              <div className="p-4 sm:p-6 border-l border-gray-200 flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-medium mb-2 tracking-tight flex items-center gap-1.5 sm:gap-2 text-black">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500 flex-shrink-0" viewBox="0 0 100 100" fill="currentColor">
                    <polygon points="50,0 64.7,35.3 100,50 64.7,64.7 50,100 35.3,64.7 0,50 35.3,35.3" />
                  </svg>
                  Plus
                </h3>
                <div className="flex flex-col gap-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-black font-numeric">$249</span>
                    <span className="text-sm sm:text-base text-[#6b7280]">/month</span>
                  </div>
                  <a
                    href="https://app.sendbox.ai/login"
                    data-fast-goal="click_get_started"
                    data-fast-goal-plan="plus"
                    data-fast-goal-price="249"
                    className="py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-medium bg-[#e5e5e5] text-black hover:bg-[#d4d4d4] transition-colors text-center no-underline"
                  >
                    Get Started
                  </a>
                </div>
              </div>

              {/* Pro */}
              <div className="p-4 sm:p-6 border-l border-gray-200 flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-medium mb-2 tracking-tight flex items-center gap-1.5 sm:gap-2 text-black">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#2663eb] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                  </svg>
                  Pro
                </h3>
                <div className="flex flex-col gap-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-black font-numeric">$499</span>
                    <span className="text-sm sm:text-base text-[#6b7280]">/month</span>
                  </div>
                  <a
                    href="https://app.sendbox.ai/login"
                    data-fast-goal="click_get_started"
                    data-fast-goal-plan="pro"
                    data-fast-goal-price="499"
                    className="py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-medium bg-[#e5e5e5] text-black hover:bg-[#d4d4d4] transition-colors text-center no-underline"
                  >
                    Get Started
                  </a>
                </div>
              </div>

              {/* Agency */}
              <div className="p-4 sm:p-6 border-l border-gray-200 flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-medium mb-2 tracking-tight flex items-center gap-1.5 sm:gap-2 text-black">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 flex-shrink-0" viewBox="0 0 100 100" fill="currentColor">
                    <polygon points="50,2 62,29 92,26 74,50 92,74 62,71 50,98 38,71 8,74 26,50 8,26 38,29" />
                  </svg>
                  Agency
                </h3>
                <div className="flex flex-col gap-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-black font-numeric">$899</span>
                    <span className="text-sm sm:text-base text-[#6b7280]">/month</span>
                  </div>
                  <a
                    href="https://app.sendbox.ai/login"
                    data-fast-goal="click_get_started"
                    data-fast-goal-plan="agency"
                    data-fast-goal-price="899"
                    className="relative py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-medium bg-[#e5e5e5] text-black hover:bg-[#d4d4d4] transition-colors overflow-hidden text-center no-underline"
                  >
                    Get Started
                  </a>
                </div>
              </div>

              {/* Power */}
              <div className="p-4 sm:p-6 border-l border-gray-200 flex flex-col">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-medium mb-2 tracking-tight flex items-center gap-1.5 sm:gap-2 text-black">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500 flex-shrink-0" viewBox="0 0 100 100" fill="currentColor">
                    <polygon points="50,2 58,32 89,20 70,46 98,60 66,62 72,94 50,70 28,94 34,62 2,60 30,46 11,20 42,32" />
                  </svg>
                  Power
                </h3>
                <div className="flex flex-col gap-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-black font-numeric">$2,499</span>
                    <span className="text-sm sm:text-base text-[#6b7280]">/month</span>
                  </div>
                  <a
                    href="https://app.sendbox.ai/login"
                    data-fast-goal="click_get_started"
                    data-fast-goal-plan="power"
                    data-fast-goal-price="2499"
                    className="relative py-1.5 sm:py-2 px-3 sm:px-4 rounded-lg text-xs sm:text-sm font-medium bg-[#2663eb] text-white hover:bg-[#1e4ed8] transition-colors overflow-hidden text-center no-underline"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>

            {/* Features */}
            {features.map((feature, index) => (
              feature.category ? (
                <div
                  key={index}
                  className="grid grid-cols-6 border-b border-gray-200 bg-[#fafafa]"
                >
                  <div className="py-2 sm:py-2.5 px-4 sm:px-6 col-span-6 text-[11px] sm:text-xs font-semibold text-[#6b7280] uppercase tracking-wider">
                    {feature.category}
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  className="grid grid-cols-6 border-b border-gray-200 last:border-b-0"
                >
                  <div className="py-2 sm:py-3 px-4 sm:px-6 text-xs sm:text-sm font-medium text-black">
                    {feature.tooltip ? (
                      <span className="inline-flex items-center gap-1.5 group relative">
                        {feature.name}
                        <svg className="w-3.5 h-3.5 text-gray-400 cursor-help" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                        <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute z-50 top-1/2 left-[calc(100%+0.5rem)] -translate-y-1/2 bg-white text-[#1e293b] text-xs font-normal px-3 py-2 rounded-md shadow-md border border-gray-200 whitespace-nowrap transition-opacity duration-200 pointer-events-none">
                          {feature.tooltip}
                        </span>
                      </span>
                    ) : (
                      feature.name
                    )}
                  </div>
                  {plans.map((plan) => (
                    <div key={plan} className="py-2 sm:py-3 px-4 sm:px-6 border-l border-gray-200 text-xs sm:text-sm text-black">
                      {feature[plan] === true ? (
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 16 16" fill="currentColor">
                          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                      ) : feature[plan] === false ? (
                        <span className="text-gray-400">&mdash;</span>
                      ) : (
                        feature[plan]
                      )}
                    </div>
                  ))}
                </div>
              )
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-3 pl-4">
            * Generous Fair Use caps apply. See our{' '}
            <a href="/fair-usage-policy" className="text-[#2663eb] hover:underline">Fair Usage Policy</a>{' '}
            for the exact limits behind each &quot;Unlimited.&quot;
          </p>
          <p className="text-xs text-gray-400 mt-1 pl-4">
            ** Phone number purchase &amp; top-up billed separately
          </p>
        </div>
      </div>
    </section>
  );
};

export default UnifiedPricing;
