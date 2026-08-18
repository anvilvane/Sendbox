'use client';

import React from 'react';
import { motion } from 'framer-motion';

const RefundPolicy = () => {
  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-24 px-4 md:px-8 bg-white relative">
      {/* Vertical guide lines + corner dots */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="max-w-[80rem] h-full mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-[#7196f4]" />
          <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-[#7196f4]" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6 text-[15px] font-medium text-black">
            <div className="w-5 h-1.5 bg-[#695AF2] rounded-xl"></div>
            <span>refunds</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tight">
            Refund Policy
          </h1>
          <p className="mt-4 text-sm text-[#9ca3af]">Last updated: March 4, 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-10"
        >
          {/* 1. Overview */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">1. Overview</h2>
            <p className="text-[#6b7280] leading-relaxed">
              This Refund Policy outlines when and how refunds are handled for Sendbox subscriptions. By subscribing to Sendbox, you agree to the terms described below.
            </p>
          </div>

          {/* 2. Billing & Subscription */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">2. Billing &amp; Subscription</h2>
            <ul className="list-disc ml-6 space-y-1 text-[#6b7280] leading-relaxed">
              <li>Sendbox subscriptions are billed monthly or annually, depending on your selected plan</li>
              <li>Payment is charged at the beginning of each billing cycle</li>
              <li>All prices are listed in USD and are inclusive of all taxes</li>
              <li>You can view your billing history and manage your subscription from your account settings</li>
            </ul>
          </div>

          {/* 3. Cancellation */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">3. Cancellation</h2>
            <p className="text-[#6b7280] leading-relaxed">
              You can cancel your subscription at any time from your account settings. Upon cancellation, your account will remain active until the end of your current billing period. After that, your account will be downgraded and you will lose access to paid features. We do not provide prorated refunds for unused time remaining in a billing cycle.
            </p>
          </div>

          {/* 4. When Refunds ARE Issued */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">4. When Refunds Are Issued</h2>
            <p className="text-[#6b7280] leading-relaxed mb-3">
              We will issue a refund in the following circumstances:
            </p>
            <ul className="list-disc ml-6 space-y-1 text-[#6b7280] leading-relaxed">
              <li><strong className="text-black">Billing error:</strong> You were charged incorrectly, charged twice, or charged after a valid cancellation</li>
              <li><strong className="text-black">Extended outage:</strong> The platform experienced a significant, prolonged outage that materially prevented you from using the Service during your billing period</li>
            </ul>
          </div>

          {/* 5. When Refunds Are NOT Issued */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">5. When Refunds Are Not Issued</h2>
            <p className="text-[#6b7280] leading-relaxed mb-3">
              Refunds will not be issued in the following cases:
            </p>
            <ul className="list-disc ml-6 space-y-1 text-[#6b7280] leading-relaxed">
              <li><strong className="text-black">Change of mind:</strong> You decided you no longer want to use Sendbox</li>
              <li><strong className="text-black">Unused features:</strong> You did not use all the features or capacity included in your plan</li>
              <li><strong className="text-black">Human error:</strong> Incorrect campaign configuration, sending to the wrong list, or other user mistakes</li>
              <li><strong className="text-black">Deliverability complaints:</strong> Email deliverability depends on many factors including your sending practices, content quality, and list hygiene. We do not guarantee inbox placement</li>
              <li><strong className="text-black">Account terminated for abuse:</strong> Your account was suspended or terminated due to violation of our Terms of Service, including sending spam or engaging in prohibited activities</li>
            </ul>
          </div>

          {/* 6. How to Request */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">6. How to Request a Refund</h2>
            <p className="text-[#6b7280] leading-relaxed">
              To request a refund, email us at{' '}
              <a href="mailto:support@sendboxes.tech" className="text-[#695AF2] hover:underline">
                support@sendboxes.tech
              </a>{' '}
              with your account email, a description of the issue, and any relevant details. We will review your request and respond within 5 business days. Approved refunds are processed to the original payment method and may take 5 to 10 business days to appear on your statement.
            </p>
          </div>

          {/* 7. Contact */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">7. Contact</h2>
            <p className="text-[#6b7280] leading-relaxed">
              If you have questions about this Refund Policy, contact us at{' '}
              <a href="mailto:support@sendboxes.tech" className="text-[#695AF2] hover:underline">
                support@sendboxes.tech
              </a>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RefundPolicy;
