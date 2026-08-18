'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
            <div className="w-5 h-1.5 bg-[#2663eb] rounded-xl"></div>
            <span>privacy</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-[#9ca3af]">Last updated: March 4, 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-10"
        >
          {/* 1. Introduction */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">1. Introduction</h2>
            <p className="text-[#6b7280] leading-relaxed">
              Sendbox (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the sendbox.ai website and the Sendbox platform. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our services. By using Sendbox, you agree to the practices described in this policy.
            </p>
          </div>

          {/* 2. Information We Collect */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">2. Information We Collect</h2>
            <p className="text-[#6b7280] leading-relaxed mb-4">We collect the following types of information:</p>

            <h3 className="text-base font-semibold text-black mb-2">Account Information</h3>
            <ul className="list-disc ml-6 space-y-1 text-[#6b7280] leading-relaxed mb-4">
              <li>Name, email address, and password when you create an account</li>
              <li>Billing information and payment details processed through our payment provider</li>
              <li>Company name and team information if provided</li>
            </ul>

            <h3 className="text-base font-semibold text-black mb-2">Usage Data</h3>
            <ul className="list-disc ml-6 space-y-1 text-[#6b7280] leading-relaxed mb-4">
              <li>Campaign performance metrics (open rates, reply rates, bounce rates)</li>
              <li>Feature usage patterns and platform interactions</li>
              <li>Log data including IP address, browser type, and access times</li>
            </ul>

            <h3 className="text-base font-semibold text-black mb-2">Email Sending Data</h3>
            <ul className="list-disc ml-6 space-y-1 text-[#6b7280] leading-relaxed mb-4">
              <li>Email content you create and send through our platform</li>
              <li>Recipient email addresses and lead data you import</li>
              <li>Mailbox connection credentials (encrypted at rest)</li>
              <li>Sending infrastructure data including IP assignments and warmup metrics</li>
            </ul>

            <h3 className="text-base font-semibold text-black mb-2">Cookies &amp; Tracking</h3>
            <ul className="list-disc ml-6 space-y-1 text-[#6b7280] leading-relaxed">
              <li>Essential cookies for authentication and session management</li>
              <li>Privacy-focused analytics that do not collect personal data</li>
              <li>We do not use third-party advertising trackers</li>
            </ul>
          </div>

          {/* 3. How We Use Your Information */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc ml-6 space-y-1 text-[#6b7280] leading-relaxed">
              <li>To provide, maintain, and improve the Sendbox platform</li>
              <li>To process your email campaigns and manage your sending infrastructure</li>
              <li>To monitor and optimize email deliverability on your behalf</li>
              <li>To send you account-related notifications and service updates</li>
              <li>To provide customer support and respond to your inquiries</li>
              <li>To detect, prevent, and address abuse, fraud, or technical issues</li>
              <li>To comply with legal obligations</li>
            </ul>
          </div>

          {/* 4. Data Storage & Security */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">4. Data Storage &amp; Security</h2>
            <p className="text-[#6b7280] leading-relaxed">
              We implement industry-standard security measures to protect your data, including encryption at rest and in transit, access controls, and regular security audits. Mailbox credentials are encrypted using AES-256 encryption. While we take reasonable precautions to protect your information, no method of electronic storage or transmission is 100% secure.
            </p>
          </div>

          {/* 5. Third-Party Services */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">5. Third-Party Services</h2>
            <p className="text-[#6b7280] leading-relaxed mb-3">
              We use select third-party services that may process your data:
            </p>
            <ul className="list-disc ml-6 space-y-1 text-[#6b7280] leading-relaxed">
              <li>Payment processors for billing and subscription management</li>
              <li>Cloud infrastructure providers for hosting and data storage</li>
              <li>Transactional email providers for account notifications</li>
              <li>Privacy-focused analytics (no personal data collected)</li>
            </ul>
            <p className="text-[#6b7280] leading-relaxed mt-3">
              We do not sell your personal information to third parties.
            </p>
          </div>

          {/* 6. Data Retention */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">6. Data Retention</h2>
            <p className="text-[#6b7280] leading-relaxed">
              We retain your account data for as long as your account is active. Campaign data, including email content and lead information, is retained for the duration of your subscription. Upon account deletion, we remove your personal data within 30 days, except where retention is required by law. Aggregated, anonymized data may be retained indefinitely for analytics purposes.
            </p>
          </div>

          {/* 7. Your Rights */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">7. Your Rights</h2>
            <p className="text-[#6b7280] leading-relaxed mb-3">
              Depending on your jurisdiction, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc ml-6 space-y-1 text-[#6b7280] leading-relaxed">
              <li><strong className="text-black">Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong className="text-black">Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong className="text-black">Deletion:</strong> Request deletion of your personal data</li>
              <li><strong className="text-black">Portability:</strong> Request your data in a machine-readable format</li>
              <li><strong className="text-black">Objection:</strong> Object to processing of your personal data</li>
              <li><strong className="text-black">Restriction:</strong> Request restriction of processing in certain circumstances</li>
            </ul>
            <p className="text-[#6b7280] leading-relaxed mt-3">
              For GDPR (EU/EEA) and CCPA (California) requests, contact us at support@sendbox.ai. We will respond within 30 days.
            </p>
          </div>

          {/* 8. International Transfers */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">8. International Transfers</h2>
            <p className="text-[#6b7280] leading-relaxed">
              Your data may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for international data transfers, including standard contractual clauses where required.
            </p>
          </div>

          {/* 9. Children's Privacy */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">9. Children&apos;s Privacy</h2>
            <p className="text-[#6b7280] leading-relaxed">
              Sendbox is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will take steps to delete it promptly.
            </p>
          </div>

          {/* 10. Changes */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">10. Changes to This Policy</h2>
            <p className="text-[#6b7280] leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on our website and updating the &quot;Last updated&quot; date. Your continued use of Sendbox after changes constitutes acceptance of the updated policy.
            </p>
          </div>

          {/* 11. Contact */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">11. Contact</h2>
            <p className="text-[#6b7280] leading-relaxed">
              If you have questions about this Privacy Policy or wish to exercise your data rights, contact us at{' '}
              <a href="mailto:support@sendbox.ai" className="text-[#2663eb] hover:underline">
                support@sendbox.ai
              </a>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
