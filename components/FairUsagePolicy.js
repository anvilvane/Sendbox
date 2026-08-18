'use client';

import React from 'react';
import { motion } from 'framer-motion';

const planColumns = [
  { key: 'essential', name: 'Essential', price: '$99/mo' },
  { key: 'plus', name: 'Plus', price: '$249/mo' },
  { key: 'pro', name: 'Pro', price: '$499/mo' },
  { key: 'agency', name: 'Agency', price: '$899/mo' },
  { key: 'power', name: 'Power', price: '$2,499/mo' },
];

const limitRows = [
  {
    label: 'Emails sent per month',
    note: 'Hard cap. Resets at the start of each billing cycle.',
    values: {
      essential: '75,000',
      plus: '250,000',
      pro: '500,000',
      agency: '2,500,000',
      power: '10,000,000',
    },
  },
  {
    label: 'Active leads stored',
    note: 'Total leads in your workspace at any given time.',
    values: {
      essential: '30,000',
      plus: '100,000',
      pro: { value: '200,000', note: 'Unlimited free increases at 90% usage' },
      agency: { value: '1,000,000', note: 'Unlimited free increases at 90% usage' },
      power: { value: '5,000,000', note: 'Unlimited free increases at 90% usage' },
    },
  },
  {
    label: 'Connected mailboxes',
    note: 'Marketed as unlimited. The Fair Use cap is sized generously to comfortably handle each plan’s monthly sending capacity, well above what any healthy sender actually needs.',
    values: {
      essential: '1,500',
      plus: '5,000',
      pro: '10,000',
      agency: '50,000',
      power: '200,000',
    },
  },
  {
    label: 'Email validations per month',
    note: 'Bulk verification on lists you upload or enrich. Resets monthly.',
    values: {
      essential: '45,000',
      plus: '150,000',
      pro: '300,000',
      agency: '1,500,000',
      power: '7,500,000',
    },
  },
  {
    label: 'Inbox placement tests per month',
    note: 'Mailboxes you can run through the inbox placement tool.',
    values: {
      essential: '1,250',
      plus: '2,500',
      pro: '5,000',
      agency: '25,000',
      power: '75,000',
    },
  },
  {
    label: 'Blacklist monitoring per month',
    note: 'Mailboxes checked against blacklists each month.',
    values: {
      essential: '25,000',
      plus: '50,000',
      pro: '100,000',
      agency: '500,000',
      power: '1,500,000',
    },
  },
  {
    label: 'AI & enrichment credits',
    note: 'Used for AI reply agents, sequence analysis, and enrichment. Top-ups available.',
    values: {
      essential: '500',
      plus: '1,000',
      pro: '2,000',
      agency: '4,000',
      power: '10,000',
    },
  },
];

const FairUsagePolicy = () => {
  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-24 px-4 md:px-8 bg-white relative">
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="max-w-[80rem] h-full mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-[#7196f4]" />
          <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-[#7196f4]" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 mb-6 text-[15px] font-medium text-black">
            <div className="w-5 h-1.5 bg-[#695AF2] rounded-xl"></div>
            <span>fair usage</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tight">
            Fair Usage Policy
          </h1>
          <p className="mt-4 text-sm text-[#9ca3af]">Last updated: May 26, 2026</p>
          <p className="mt-6 text-[#6b7280] leading-relaxed">
            Sendbox is built for serious outbound teams, so most limits on our pricing page read &quot;unlimited.&quot; In practice we apply Fair Use caps that are several times larger than what a healthy sender needs. This page lists those caps in full so there are no surprises.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-xl font-semibold text-black mb-4">Plan limits</h2>
            <div className="w-full overflow-x-auto">
              <div className="border border-gray-200 bg-white min-w-[900px]">
                <div className="grid grid-cols-6 border-b border-gray-200 bg-gray-50">
                  <div className="p-4 text-[13px] font-medium text-black">Limit</div>
                  {planColumns.map((plan) => (
                    <div key={plan.key} className="p-4 border-l border-gray-200">
                      <div className="text-[13px] font-medium text-black">{plan.name}</div>
                      <div className="text-[12px] text-[#9ca3af] mt-0.5">{plan.price}</div>
                    </div>
                  ))}
                </div>
                {limitRows.map((row, idx) => (
                  <div
                    key={row.label}
                    className={`grid grid-cols-6 ${idx !== limitRows.length - 1 ? 'border-b border-gray-200' : ''}`}
                  >
                    <div className="p-4">
                      <div className="text-[14px] font-medium text-black">{row.label}</div>
                      <div className="text-[12px] text-[#9ca3af] mt-1 leading-relaxed">{row.note}</div>
                    </div>
                    {planColumns.map((plan) => {
                      const cell = row.values[plan.key];
                      const isObject = cell && typeof cell === 'object';
                      return (
                        <div
                          key={plan.key}
                          className="p-4 border-l border-gray-200 text-[14px] text-[#6b7280] flex flex-col justify-center"
                        >
                          <div>{isObject ? cell.value : cell}</div>
                          {isObject && (
                            <div className="text-[11.5px] text-[#695AF2] mt-1">{cell.note}</div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">Trial limits</h2>
            <p className="text-[#6b7280] leading-relaxed mb-3">
              While your subscription is in a trial state, the following limits apply regardless of which plan you signed up for:
            </p>
            <ul className="list-disc ml-6 space-y-1 text-[#6b7280] leading-relaxed">
              <li>500 active leads</li>
              <li>1,000 emails sent total during the trial</li>
              <li>Mailbox count matches your selected plan</li>
            </ul>
            <p className="text-[#6b7280] leading-relaxed mt-3">
              Trial limits exist to keep our deliverability infrastructure healthy. They lift the moment your first paid invoice clears.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">How limits are enforced</h2>
            <ul className="list-disc ml-6 space-y-2 text-[#6b7280] leading-relaxed">
              <li>Monthly limits reset at the start of your billing cycle, not on the 1st of each calendar month.</li>
              <li>When you reach 90% of a limit, you will see an in-platform button to request an increase or top-up in one click. You can also reach us by email or through the in-app chatbot.</li>
              <li>When you hit a limit, the corresponding feature pauses for the rest of the cycle. Sending, warmup, validation, and monitoring are independent, so hitting one does not pause the others.</li>
              <li>Pro, Agency, and Power plans can request unlimited free active-lead limit increases. Each time you reach 90% of your current cap, email us and we will lift it again. Essential and Plus have a fixed lead cap and can upgrade to Pro to unlock free increases.</li>
              <li>AI and enrichment credits never expire mid-cycle. Unused credits do not roll over to the next month.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">What counts as unfair use</h2>
            <p className="text-[#6b7280] leading-relaxed mb-3">
              Fair Use exists so heavy senders are not subsidising abuse. The following patterns will trigger a review, and may result in a limit being applied below the published caps or in account suspension:
            </p>
            <ul className="list-disc ml-6 space-y-1 text-[#6b7280] leading-relaxed">
              <li>Running mailbox warmup on Sendbox without active outbound campaigns. Sendbox is a campaign platform; warmup is bundled in to support real sending, not as a standalone product.</li>
              <li>Provisioning the maximum number of mailboxes without sending anywhere close to the corresponding email volume.</li>
              <li>Repeatedly hitting validation or blacklist limits in ways that look automated against our infrastructure rather than driven by your own list quality.</li>
              <li>Operating multiple workspaces or accounts to bypass plan limits.</li>
              <li>Any of the prohibited activities listed in our{' '}
                <a href="/terms-of-service" className="text-[#695AF2] hover:underline">Terms of Service</a>.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">Need a higher limit?</h2>
            <p className="text-[#6b7280] leading-relaxed">
              The standard path is to move to the next plan tier, since the caps above are sized so that hitting them generally means your operation has outgrown the plan. The exception is the active-lead increase noted in the table above for Pro and higher.
            </p>
            <p className="text-[#6b7280] leading-relaxed mt-3">
              If you are only a small amount over a cap and an upgrade does not make sense yet, email{' '}
              <a href="mailto:support@sendboxes.tech" className="text-[#695AF2] hover:underline">
                support@sendboxes.tech
              </a>{' '}
              with your workspace name and the limit you are running into. We can usually help with modest, one-off increases for healthy senders.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-black mb-3">Changes to this policy</h2>
            <p className="text-[#6b7280] leading-relaxed">
              We may update Fair Use limits as our infrastructure evolves. Existing paid subscriptions keep their current limits for the remainder of the billing cycle when limits change. The &quot;Last updated&quot; date at the top of this page reflects the latest revision.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FairUsagePolicy;
