'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TermsOfService = () => {
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
            <span>terms</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-[#9ca3af]">Last updated: March 4, 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-10"
        >
          {/* 1. Agreement */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">1. Agreement to Terms</h2>
            <p className="text-[#6b7280] leading-relaxed">
              By accessing or using Sendbox (&quot;the Service&quot;), operated by Sendbox (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service. These terms apply to all users, including individual users and those acting on behalf of an organization.
            </p>
          </div>

          {/* 2. Account Registration */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">2. Account Registration</h2>
            <ul className="list-disc ml-6 space-y-1 text-[#6b7280] leading-relaxed">
              <li>You must provide accurate, complete, and current information when creating an account</li>
              <li>You are responsible for maintaining the security of your account credentials</li>
              <li>You are responsible for all activity that occurs under your account</li>
              <li>You must be at least 18 years old to use the Service</li>
              <li>One person or organization may not maintain more than one free account</li>
            </ul>
          </div>

          {/* 3. Acceptable Use */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">3. Acceptable Use</h2>
            <p className="text-[#6b7280] leading-relaxed">
              Sendbox is designed for legitimate B2B email outreach. You agree to use the Service only for lawful purposes and in accordance with all applicable laws, including but not limited to email marketing regulations in your jurisdiction. You are solely responsible for the content of your emails and the quality of your recipient lists. Usage caps for each plan are listed in our{' '}
              <a href="/fair-usage-policy" className="text-[#695AF2] hover:underline">Fair Usage Policy</a>.
            </p>
          </div>

          {/* 4. Prohibited Activities */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">4. Prohibited Activities</h2>
            <p className="text-[#6b7280] leading-relaxed mb-3">You may not use Sendbox to:</p>
            <ul className="list-disc ml-6 space-y-1 text-[#6b7280] leading-relaxed">
              <li>Send unsolicited bulk email (spam) or emails to purchased, scraped, or non-consented lists that violate applicable laws</li>
              <li>Send emails containing malware, phishing attempts, or deceptive content</li>
              <li>Harass, threaten, or abuse recipients</li>
              <li>Impersonate another person or entity</li>
              <li>Violate any applicable anti-spam legislation (CAN-SPAM, GDPR, CASL, etc.)</li>
              <li>Scrape, reverse-engineer, or attempt to access the Service&apos;s underlying infrastructure</li>
              <li>Resell or redistribute the Service without our written consent</li>
              <li>Circumvent any rate limits, sending limits, or security measures</li>
              <li>Abuse the Service, including using it solely for mailbox warmup without running genuine outbound campaigns. Sendbox is a campaign platform, and warmup is included to support real sending activity. Accounts that maintain warmup volume with little to no campaign usage will be flagged and may be suspended</li>
              <li>Use the Service for any illegal activity</li>
            </ul>
          </div>

          {/* 5. Email Sending & Compliance */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">5. Email Sending &amp; Compliance</h2>
            <p className="text-[#6b7280] leading-relaxed mb-3">
              When using Sendbox to send emails, you agree to:
            </p>
            <ul className="list-disc ml-6 space-y-1 text-[#6b7280] leading-relaxed">
              <li>Comply with the CAN-SPAM Act, GDPR, and all other applicable email regulations</li>
              <li>Include accurate sender information and a valid physical address where required by law</li>
              <li>Honor unsubscribe requests promptly</li>
              <li>Maintain clean recipient lists and remove bounced or invalid addresses</li>
              <li>Not send emails to recipients who have previously opted out</li>
              <li>Take full responsibility for the content and targeting of your campaigns</li>
            </ul>
            <p className="text-[#6b7280] leading-relaxed mt-3">
              Sendbox provides infrastructure and tools for email sending, but compliance with email regulations is your responsibility.
            </p>
          </div>

          {/* 6. Intellectual Property */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">6. Intellectual Property</h2>
            <p className="text-[#6b7280] leading-relaxed">
              The Service, including its design, features, code, and documentation, is owned by Sendbox and protected by intellectual property laws. You retain ownership of the content you create and the data you upload. By using the Service, you grant us a limited license to process your data solely for the purpose of providing the Service.
            </p>
          </div>

          {/* 7. Account Suspension & Termination */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">7. Account Suspension &amp; Termination</h2>
            <p className="text-[#6b7280] leading-relaxed mb-3">
              We reserve the right to suspend or terminate your account at our sole discretion, with or without notice, for any reason, including but not limited to:
            </p>
            <ul className="list-disc ml-6 space-y-1 text-[#6b7280] leading-relaxed">
              <li>Violation of these Terms of Service</li>
              <li>Sending spam or engaging in prohibited activities</li>
              <li>Using the Service primarily for warmup without active campaign sending</li>
              <li>Excessive bounce rates or spam complaints indicating poor list quality</li>
              <li>Activity that threatens the deliverability or reputation of our infrastructure</li>
              <li>Non-payment of subscription fees</li>
            </ul>
            <p className="text-[#6b7280] leading-relaxed mt-3">
              Upon termination, your access to the Service will cease immediately. We may retain certain data as required by law or for legitimate business purposes.
            </p>
          </div>

          {/* 8. Disclaimers */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">8. Disclaimers</h2>
            <p className="text-[#6b7280] leading-relaxed">
              The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied. We do not guarantee that your emails will be delivered to recipients&apos; inboxes, achieve specific open or reply rates, or avoid spam folders. Email deliverability depends on many factors outside our control, including your sending practices, content quality, recipient engagement, and email provider policies. While Sendbox provides dedicated IPs and infrastructure tools to optimize deliverability, we cannot guarantee inbox placement.
            </p>
          </div>

          {/* 9. Limitation of Liability */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">9. Limitation of Liability</h2>
            <p className="text-[#6b7280] leading-relaxed">
              To the maximum extent permitted by law, Sendbox shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, revenue, data, or business opportunities, arising from your use of the Service. Our total liability for any claim arising from these terms shall not exceed the amount you paid to Sendbox in the 12 months preceding the claim.
            </p>
          </div>

          {/* 10. Indemnification */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">10. Indemnification</h2>
            <p className="text-[#6b7280] leading-relaxed">
              You agree to indemnify, defend, and hold harmless Sendbox and its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including reasonable attorney&apos;s fees) arising from your use of the Service, your violation of these terms, or your violation of any applicable law or regulation.
            </p>
          </div>

          {/* 11. Governing Law */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">11. Governing Law</h2>
            <p className="text-[#6b7280] leading-relaxed">
              These Terms of Service are governed by and construed in accordance with applicable laws. Any disputes arising from these terms shall be resolved through binding arbitration or in the courts of the applicable jurisdiction.
            </p>
          </div>

          {/* 12. Changes */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">12. Changes to These Terms</h2>
            <p className="text-[#6b7280] leading-relaxed">
              We may update these Terms of Service from time to time. We will notify you of material changes by posting the updated terms on our website and updating the &quot;Last updated&quot; date. Your continued use of the Service after changes constitutes acceptance of the updated terms.
            </p>
          </div>

          {/* 13. Contact */}
          <div>
            <h2 className="text-xl font-semibold text-black mb-3">13. Contact</h2>
            <p className="text-[#6b7280] leading-relaxed">
              If you have questions about these Terms of Service, contact us at{' '}
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

export default TermsOfService;
