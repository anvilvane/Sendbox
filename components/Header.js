'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowUpRightIcon,
  ArrowRightIcon,
  CaretDownIcon,
  ListIcon,
  XIcon,
  // Platform icons
  PaperPlaneTiltIcon,
  EnvelopeSimpleIcon,
  ShuffleIcon,
  TrayIcon,
  PhoneIcon,
  BellRingingIcon,
  MagnifyingGlassIcon,
  AddressBookIcon,
  FileArrowDownIcon,
  ChartBarIcon,
  TagIcon,
  ArrowsClockwiseIcon,
  PlugsConnectedIcon,
  BroadcastIcon,
  ShieldCheckIcon,
} from '@phosphor-icons/react/dist/ssr';
import { motion, AnimatePresence } from 'framer-motion';
import RequestDemoModal from '@/components/RequestDemoModal';
import { APP_LOGIN_URL } from "@/lib/app-url";

const platformCategories = [
  {
    category: 'Outreach',
    items: [
      {
        name: 'Campaigns',
        description: 'Multi-step email sequences with smart sending windows and auto-pause',
        href: '/features/campaigns',
        icon: PaperPlaneTiltIcon,
      },
      {
        name: 'Mailboxes',
        description: 'Connect unlimited Google, Outlook, and IMAP accounts',
        href: '/features/mailboxes',
        icon: EnvelopeSimpleIcon,
      },
      {
        name: 'A/B Testing',
        description: 'Test subject lines, copy, and send times across variants',
        href: '/features/ab-testing',
        icon: ShuffleIcon,
      },
      {
        name: 'Webhooks',
        description: 'Fire events to any endpoint when leads reply, open, or convert',
        href: '/features/webhooks',
        icon: BroadcastIcon,
      },
    ],
  },
  {
    category: 'Workspace',
    items: [
      {
        name: 'Unified Inbox',
        description: 'Every reply from every mailbox in one place. No tab switching',
        href: '/features/unified-inbox',
        icon: TrayIcon,
      },
      {
        name: 'Dialer',
        description: 'Call the leads who opened. Mix calls and email in one sequence',
        href: '/features/dialer',
        icon: PhoneIcon,
      },
      {
        name: 'Slack Integration',
        description: 'Replies hit your Slack. Respond there. We send the email',
        href: '/features/slack-integration',
        icon: BellRingingIcon,
      },
      {
        name: 'CRM Integrations',
        description: 'Sync with HubSpot, Salesforce, and more. BYO enrichment API keys',
        href: '/features/crm-integrations',
        icon: PlugsConnectedIcon,
      },
    ],
  },
  {
    category: 'Data & Leads',
    items: [
      {
        name: 'Lead Finder',
        description: 'Find, qualify, and score leads at scale with verified data',
        href: '/features/lead-finder',
        icon: MagnifyingGlassIcon,
      },
      {
        name: 'CRM',
        description: 'Track your pipeline and manage prospects without a separate tool',
        href: '/features/crm',
        icon: AddressBookIcon,
      },
      {
        name: 'Analytics',
        description: 'Opens, replies, clicks across every campaign, every sender',
        href: '/features/analytics',
        icon: ChartBarIcon,
      },
      {
        name: 'CSV Import',
        description: 'Upload leads, auto-map fields, and validate emails on import',
        href: '/features/csv-import',
        icon: FileArrowDownIcon,
      },
    ],
  },
  {
    category: 'AI Features',
    items: [
      {
        name: 'AI Tagging',
        description: 'Classify replies with custom tags, AI agents, and configurable tone',
        href: '/features/ai-tagging',
        icon: TagIcon,
      },
      {
        name: 'ESP Matching',
        description: 'Route emails through matching providers via MX record detection',
        href: '/features/esp-matching',
        icon: ArrowsClockwiseIcon,
      },
      {
        name: 'SEG Detection',
        description: 'Detect Secure Email Gateways and skip or route leads accordingly',
        href: '/features/seg-detection',
        icon: ShieldCheckIcon,
      },
    ],
  },
];


// Trigger button only - fires mouse events up to Header
function NavTrigger({ label, isOpen, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className={`flex items-center gap-1 px-4 py-2 text-[14px] font-normal rounded-lg transition-all select-none cursor-default whitespace-nowrap ${
        isOpen ? 'text-black bg-black/[0.05]' : 'text-[#6b7280] hover:text-black hover:bg-black/[0.05]'
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {label}
      <CaretDownIcon
        size={11}
        weight="bold"
        className={`mt-px transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
      />
    </div>
  );
}

// Dropdown panel - rendered directly inside <header> as absolute top-full
function MegaPanel({ categories, footerNote, footerHref, onMouseEnter, onMouseLeave }) {
  const colCount = categories.length;
  const gridClass = colCount === 4 ? 'grid-cols-4' : 'grid-cols-3';

  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.15, ease: 'easeOut' }}
      className="absolute top-full left-0 right-0 bg-white border-b border-gray-100"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-[80rem] mx-auto px-6 pt-6 pb-5">
        {/* Feature columns */}
        <div className={`grid ${gridClass} divide-x divide-gray-100`}>
          {categories.map((category, ci) => (
            <div
              key={category.category}
              className={`flex flex-col ${ci === 0 ? 'pr-6' : ci === colCount - 1 ? 'pl-6' : 'px-6'}`}
            >
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#9ca3af] mb-3">
                {category.category}
              </span>
              <div className="flex flex-col gap-0.5">
                {category.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-start justify-between gap-4 px-3 py-2.5 rounded-lg hover:bg-[#f7f9ff] transition-colors group/item"
                    >
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="text-[13px] font-medium text-black group-hover/item:text-[#695AF2] transition-colors leading-snug">
                          {item.name}
                        </span>
                        <span className="text-[11.5px] text-[#9ca3af] leading-relaxed">
                          {item.description}
                        </span>
                      </div>
                      <Icon
                        className="w-[18px] h-[18px] text-[#d1d5db] group-hover/item:text-[#695AF2] transition-colors shrink-0 mt-0.5"
                        weight="duotone"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer strip */}
        <div className="border-t border-gray-100 mt-4 pt-4 flex items-center justify-between">
          <span className="text-[11.5px] text-[#9ca3af]">{footerNote}</span>
          <Link
            href={footerHref}
            className="inline-flex items-center gap-1 text-[12px] font-medium text-[#695AF2] hover:gap-1.5 transition-all shrink-0"
          >
            See all features
            <ArrowRightIcon size={11} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function MobileAccordion({ label, categories, isExpanded, onToggle, onNavigate }) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-3 py-2.5 text-[14px] font-normal rounded-lg transition-all text-[#6b7280] hover:text-black hover:bg-black/[0.05]"
      >
        {label}
        <CaretDownIcon
          size={12}
          weight="bold"
          className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.15 }}
            className="overflow-hidden"
          >
            <div className="pl-3 pb-2 flex flex-col gap-3">
              {categories.map((category) => (
                <div key={category.category}>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#9ca3af] px-3 mb-1.5 block">
                    {category.category}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    {category.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={onNavigate}
                          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#f7f9ff] transition-colors group/item"
                        >
                          <Icon
                            className="w-4 h-4 text-[#d1d5db] group-hover/item:text-[#695AF2] transition-colors shrink-0"
                            weight="duotone"
                          />
                          <div className="flex flex-col gap-0 min-w-0">
                            <span className="text-[13px] font-medium text-black group-hover/item:text-[#695AF2] transition-colors leading-snug">
                              {item.name}
                            </span>
                            <span className="text-[11px] text-[#9ca3af] leading-relaxed line-clamp-1">
                              {item.description}
                            </span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const closeTimer = useRef(null);

  const handleEnter = (name) => {
    clearTimeout(closeTimer.current);
    setOpenDropdown(name);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 80);
  };

  // Close mobile menu on resize above lg
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
        setMobileExpanded(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
        window?.datafast("click_login", { location: "keyboard_shortcut" });
        window.location.href = APP_LOGIN_URL;
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const plainNavItems = [
    { label: 'Pricing', href: '/pricing', goal: 'click_nav_pricing' },
    { label: 'Changelog', href: '/changelog', goal: 'click_nav_changelog' },
    { label: 'Contributors', href: '/contributors', goal: 'click_nav_contributors' },
  ];

  return (
    <header className="sticky top-0 z-[100] bg-white border-b border-gray-100 relative">
      <div className="max-w-[80rem] mx-auto flex items-center h-16 px-6">
        {/* Logo - flex-1 left */}
        <div className="flex-1">
          <Link href="/" scroll={false} className="flex items-center gap-2">
            <Image src="/logo-icon.png" alt="" className="h-9 w-9" width={128} height={128} />
            <span className="text-lg font-semibold text-gray-900 tracking-tight">Sendbox</span>
          </Link>
        </div>

        {/* Navigation - centered (hidden below lg/1024px) */}
        <nav className="hidden lg:flex gap-1 items-center">
          <NavTrigger
            label="Platform"
            isOpen={openDropdown === 'platform'}
            onMouseEnter={() => handleEnter('platform')}
            onMouseLeave={handleLeave}
          />
          <a
            href="https://docs.sendboxes.tech"
            target="_blank"
            rel="noopener noreferrer"
            data-fast-goal="click_nav_docs"
            data-fast-goal-location="header"
            className="px-4 py-2 text-[14px] font-normal rounded-lg transition-all no-underline text-[#6b7280] hover:text-black hover:bg-black/[0.05]"
          >
            Documentation
          </a>
          {plainNavItems.map((item) => {
            const isHash = item.href.includes('#');
            const LinkComponent = isHash ? 'a' : Link;
            const linkProps = isHash ? { href: item.href } : { href: item.href, scroll: false };
            return (
              <LinkComponent
                key={item.label}
                {...linkProps}
                data-fast-goal={item.goal}
                data-fast-goal-location="header"
                className="px-4 py-2 text-[14px] font-normal rounded-lg transition-all no-underline text-[#6b7280] hover:text-black hover:bg-black/[0.05]"
              >
                {item.label}
              </LinkComponent>
            );
          })}
        </nav>

        {/* Right side buttons - flex-1 right */}
        <div className="flex-1 flex justify-end gap-2 lg:gap-3 items-center">
          <a
            href={APP_LOGIN_URL}
            data-fast-goal="click_login"
            data-fast-goal-location="header"
            className="hidden lg:inline-flex items-center gap-2 px-3 lg:px-4 py-2 text-[13px] lg:text-[14px] font-medium rounded-lg border border-gray-200 text-gray-600 cursor-pointer transition-all hover:bg-gray-50 hover:-translate-y-0.5"
          >
            Login
            <span className="hidden lg:inline-flex items-center gap-1 text-xs text-gray-400">
              <kbd className="px-1.5 py-0.5 rounded text-xs border bg-gray-100 border-gray-300 text-gray-500">⌘</kbd>
              <kbd className="px-1.5 py-0.5 rounded text-xs border bg-gray-100 border-gray-300 text-gray-500">↵</kbd>
            </span>
          </a>
          <RequestDemoModal
            dataFastGoal="click_book_demo"
            dataFastGoalLocation="header"
            className="inline-flex items-center gap-1.5 px-3 lg:px-4 py-2 text-[13px] lg:text-[14px] font-medium rounded-lg border-none cursor-pointer transition-all hover:-translate-y-0.5 bg-[#695AF2] text-white hover:bg-[#695AF2]/90 group"
          >
            <span className="lg:hidden whitespace-nowrap">Book Demo</span>
            <span className="hidden lg:inline">Book a demo</span>
            <ArrowUpRightIcon size={14} className="hidden lg:block transition-transform duration-500 rotate-0 group-hover:rotate-45" />
          </RequestDemoModal>
          {/* Hamburger - visible below lg */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <XIcon size={20} /> : <ListIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Mega panels - absolute to header, scrolls with it */}
      <AnimatePresence>
        {openDropdown === 'platform' && (
          <MegaPanel
            key="platform"
            categories={platformCategories}
            footerNote="Campaigns, mailboxes, inbox, dialer, CRM and more. All in one place"
            footerHref="/#features"
            onMouseEnter={() => handleEnter('platform')}
            onMouseLeave={handleLeave}
          />
        )}
      </AnimatePresence>

      {/* Mobile / tablet menu - below lg */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 overflow-hidden z-50"
          >
            <nav className="max-w-[80rem] mx-auto px-6 py-4 flex flex-col gap-1">
              {/* Platform accordion */}
              <MobileAccordion
                label="Platform"
                categories={platformCategories}
                isExpanded={mobileExpanded === 'platform'}
                onToggle={() => setMobileExpanded(mobileExpanded === 'platform' ? null : 'platform')}
                onNavigate={() => setMobileOpen(false)}
              />
              {/* Documentation link */}
              <a
                href="https://docs.sendboxes.tech"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                data-fast-goal="click_nav_docs"
                data-fast-goal-location="header_mobile"
                className="px-3 py-2.5 text-[14px] font-normal rounded-lg text-[#6b7280] hover:text-black hover:bg-black/[0.05] transition-all no-underline"
              >
                Documentation
              </a>
              {/* Plain nav items */}
              {plainNavItems.map((item) => {
                const isHash = item.href.includes('#');
                const LinkComponent = isHash ? 'a' : Link;
                const linkProps = isHash ? { href: item.href } : { href: item.href, scroll: false };
                return (
                  <LinkComponent
                    key={item.label}
                    {...linkProps}
                    onClick={() => setMobileOpen(false)}
                    data-fast-goal={item.goal}
                    data-fast-goal-location="header_mobile"
                    className="px-3 py-2.5 text-[14px] font-normal rounded-lg text-[#6b7280] hover:text-black hover:bg-black/[0.05] transition-all no-underline"
                  >
                    {item.label}
                  </LinkComponent>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
