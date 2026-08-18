
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const footerColumns = [
  {
    title: 'Product',
    links: [
      { name: 'All Features', href: '/features' },
      { name: 'Campaigns', href: '/features/campaigns' },
      { name: 'Mailboxes', href: '/features/mailboxes' },
      { name: 'Unified Inbox', href: '/features/unified-inbox' },
      { name: 'Built-in Dialer', href: '/features/dialer' },
      { name: 'Native CRM', href: '/features/crm' },
      { name: 'A/B Testing', href: '/features/ab-testing' },
      { name: 'Pricing', href: '/pricing' },
    ],
  },
  {
    title: 'Deliverability',
    links: [
      { name: 'Deliverability Suite', href: '/deliverability' },
      { name: 'Dedicated IPs', href: '/deliverability/dedicated-ips' },
      { name: 'Isolated Infrastructure', href: '/deliverability/isolated-infrastructure' },
      { name: 'Human-Like Warmup', href: '/deliverability/human-like-warmup' },
      { name: 'Inbox Placement Testing', href: '/deliverability/inbox-placement-testing' },
      { name: 'Blacklist Monitoring', href: '/deliverability/blacklist-monitoring' },
      { name: 'Best Email Infrastructure', href: '/best-email-infrastructure' },
    ],
  },
  {
    title: 'Compare',
    links: [
      { name: 'Compare Tools', href: '/compare' },
      { name: 'Sendbox vs Instantly', href: '/sendbox-vs-instantly' },
      { name: 'Sendbox vs Smartlead', href: '/sendbox-vs-smartlead' },
      { name: 'Sendbox vs Lemlist', href: '/sendbox-vs-lemlist' },
      { name: 'Sendbox vs Apollo', href: '/sendbox-vs-apollo' },
      { name: 'Alternatives', href: '/alternatives' },
      { name: 'Pricing Breakdowns', href: '/pricing-breakdowns' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Free Tools', href: '/tools' },
      { name: 'Blacklist Checker', href: '/tools/blacklist-checker' },
      { name: 'Inbox Placement Test', href: '/tools/inbox-placement-test' },
      { name: 'Email Verifier', href: '/tools/email-validator' },
      { name: 'Spam Checker', href: '/tools/spam-checker' },
      { name: 'Guides', href: '/learn' },
      { name: 'Best-Of Guides', href: '/best-cold-email-tools' },
      { name: 'Solutions', href: '/for' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'What is Sendbox?', href: '/what-is-sendbox' },
      { name: 'Changelog', href: '/changelog' },
      { name: 'Contributors', href: '/contributors' },
      { name: 'Documentation', href: 'https://docs.sendboxes.tech' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Support', href: 'mailto:support@sendboxes.tech' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Fair Usage Policy', href: '/fair-usage-policy' },
      { name: 'Refund Policy', href: '/refund-policy' },
    ],
  },
];

const FooterLink = ({ link, className }) => {
  if (link.href.startsWith('mailto:') || link.href.startsWith('http')) {
    return (
      <a href={link.href} className={className}>
        {link.name}
      </a>
    );
  }
  return (
    <Link href={link.href} scroll={false} className={className}>
      {link.name}
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="pt-12 md:pt-16 pb-6 md:pb-8 px-4 md:px-8 bg-white border-t border-gray-100 relative">
      {/* Vertical guide lines */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="max-w-[80rem] h-full mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Top section: logo + link columns */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-10 md:mb-12">
          {/* Logo & tagline */}
          <div className="lg:w-[240px] shrink-0">
            <Link href="/" scroll={false} className="flex items-center gap-2">
              <Image src="/logo-icon.png" alt="" className="h-10 w-10" width={128} height={128} />
              <span className="text-xl font-semibold text-gray-900 tracking-tight">Sendbox</span>
            </Link>
            <p className="mt-3 text-sm text-[#6b7280] leading-relaxed">
              <Link href="/features/campaigns" className="hover:text-black transition-colors">Sendbox cold email platform</Link> with <Link href="/deliverability/human-like-warmup" className="hover:text-black transition-colors">Sendbox warmup</Link> and <Link href="/deliverability/dedicated-ips" className="hover:text-black transition-colors">Sendbox dedicated IPs</Link>.
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 flex-1">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <p className="text-xs font-medium text-black uppercase tracking-wider mb-4">
                  {column.title}
                </p>
                <ul className="space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.name}>
                      <FooterLink
                        link={link}
                        className="text-sm text-[#6b7280] hover:text-black transition-colors duration-200 no-underline"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 pt-6">
          <p className="text-xs text-[#9ca3af]">
            &copy; {new Date().getFullYear()} Sendbox. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
