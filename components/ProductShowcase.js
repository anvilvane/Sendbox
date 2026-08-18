'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  Send, Mail, Users, TrendingUp, MessageSquare, Phone, Shield,
  FlaskConical, LayoutGrid, Search, ChevronDown,
  Plus, MoreHorizontal, Wrench, Filter, SortAsc,
  CornerUpLeft, RefreshCw, Info, X, Eye, ThumbsUp,
} from 'lucide-react';


// ── Sidebar nav ───────────────────────────────────────────────────────────────
const navItems = [
  { id: 'campaigns', name: 'Campaigns', icon: Send          },
  { id: 'mailboxes', name: 'Mailboxes', icon: Mail          },
  { id: 'leads',     name: 'Leads',     icon: Users         },
  { id: 'analytics', name: 'Analytics', icon: TrendingUp    },
  { id: 'finder',    name: 'Finder',    icon: Search        },
  { id: 'crm',       name: 'CRM',       icon: LayoutGrid    },
  { id: 'inbox',     name: 'Inbox',     icon: MessageSquare },
  { id: 'dialer',    name: 'Dialer',    icon: Phone         },
];


// ── Checkbox (shadcn style) ────────────────────────────────────────────────────
function Checkbox({ checked = false }) {
  return (
    <div className={`w-[15px] h-[15px] rounded-[3px] border flex items-center justify-center flex-shrink-0 transition-colors ${
      checked ? 'bg-[#2663eb] border-[#2663eb]' : 'bg-white border-gray-300'
    }`}>
      {checked && (
        <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
          <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
}

// ── Hamburger icon ────────────────────────────────────────────────────────────
function HamburgerIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="text-gray-500">
      <rect x="1" y="3"   width="13" height="1.5" rx="0.75" fill="currentColor"/>
      <rect x="1" y="6.75" width="13" height="1.5" rx="0.75" fill="currentColor"/>
      <rect x="1" y="10.5" width="13" height="1.5" rx="0.75" fill="currentColor"/>
    </svg>
  );
}

// ── Sidebar ───────────────────────────────────────────────────────────────────
function BuildingsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="text-gray-500 shrink-0">
      <path d="M3 21h18M3 7v14M21 11v10M6 7h.01M6 11h.01M6 15h.01M10 7h.01M10 11h.01M10 15h.01M3 3h10v4H3V3zM14 7h7v4h-7V7z" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function DashboardSidebar({ activePage }) {
  return (
    <div id="product-sidebar" className="w-[200px] h-full flex flex-col bg-white border-r border-gray-200/60 flex-shrink-0">
      {/* Logo - matches SidebarHeader h-16 border-b, centered */}
      <div className="h-16 border-b border-gray-200/60 flex items-center justify-center px-3 flex-shrink-0">
        <div className="flex items-center justify-center select-none" style={{ userSelect: 'none' }}>
          <Image src="/icon.png" alt="Sendbox" className="max-h-8 w-auto object-contain" style={{ maxWidth: 120 }} width={280} height={57} />
        </div>
      </div>

      {/* SidebarContent: px-3 py-4 */}
      <div className="px-3 pt-4 pb-2 flex-shrink-0">
        {/* WorkspaceSwitcher - exact match: h-8 px-3 bg-gray-50 border border-gray-200 rounded-lg */}
        <button className="inline-flex items-center justify-between w-full h-8 px-3 text-[13px] font-medium text-gray-900 bg-gray-50 border border-gray-200 rounded-lg hover:bg-white hover:border-gray-300 transition-colors select-none">
          <div className="flex items-center gap-2 min-w-0">
            <BuildingsIcon />
            <span className="truncate">Acme Corp</span>
          </div>
          <ChevronDown size={12} className="text-gray-400 flex-shrink-0 ml-1 shrink-0" />
        </button>
      </div>

      {/* NavMain - space-y-0.5, items h-9 px-3 rounded-md gap-3 */}
      <nav className="flex-1 px-3 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = item.id === activePage;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`w-full flex items-center gap-3 h-9 px-3 rounded-md transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-600 font-medium pointer-events-none'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Icon
                size={15}
                className={isActive ? 'text-blue-600' : 'text-gray-500'}
                strokeWidth={isActive ? 2.25 : 1.75}
              />
              <span className="text-[13px]">{item.name}</span>
              {item.id === 'inbox' && activePage !== 'inbox' && (
                <span className="ml-auto flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-500 px-1 text-[10px] font-medium text-white">3</span>
              )}
            </button>
          );
        })}
      </nav>

      {/* UtilitiesAccordion - Toolkit (expanded) */}
      <div className="px-2 pb-2 flex-shrink-0">
        {/* Expanded utility items - appear above the trigger */}
        <div className="space-y-0.5 py-1">
          {[
            { label: 'Inbox Placement', icon: <FlaskConical size={15} className="text-gray-500" strokeWidth={1.75} /> },
            { label: 'Blacklist Check',  icon: <Shield       size={15} className="text-gray-500" strokeWidth={1.75} /> },
            { label: 'AI Agents & Tags', icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="text-gray-500 shrink-0"><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeLinecap="round"/></svg> },
            { label: 'Reports',          icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="text-gray-500 shrink-0"><path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" strokeLinejoin="round"/></svg> },
          ].map(({ label, icon }) => (
            <button key={label} className="flex items-center gap-3 w-full px-3 py-2 rounded-md text-[13px] text-gray-600 hover:bg-gray-100">
              {icon}
              <span>{label}</span>
            </button>
          ))}
        </div>
        {/* Trigger button */}
        <button className="flex items-center gap-3 w-full h-9 px-3 rounded-md hover:bg-gray-50/80 transition-colors group">
          <Wrench size={15} className="text-gray-500 group-hover:text-gray-700" strokeWidth={1.75} />
          <span className="text-[13px] font-medium text-gray-600 flex-1 text-left group-hover:text-gray-900">Toolkit</span>
          <ChevronDown size={12} className="text-gray-400 transition-transform" />
        </button>
      </div>

      {/* SidebarFooter - border-t, NavUser */}
      <div className="border-t border-gray-200/60 px-3 py-2.5 flex-shrink-0">
        <button className="w-full flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-gray-100 transition-colors">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-400 to-violet-600 flex items-center justify-center flex-shrink-0 shadow-sm">
            <span className="text-[10px] font-semibold text-white">AJ</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[12px] font-medium text-gray-900 truncate leading-tight">alex@acme.com</div>
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400 flex-shrink-0 shrink-0">
            <path d="M8 9l4-4 4 4M8 15l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

// ── Page header (breadcrumb bar) ──────────────────────────────────────────────
function PageHeader({ page }) {
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b border-gray-200/60 bg-white">
      <div className="flex items-center gap-2 px-4">
        <button aria-label="Toggle menu" className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors -ml-1">
          <HamburgerIcon />
        </button>
        <div className="h-4 w-px bg-gray-200 mx-0.5" />
        <nav className="flex items-center gap-1.5 text-sm">
          <span className="text-gray-500 text-[13px]">Dashboard</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-gray-300">
            <path d="M4.5 2.5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[13px] font-medium text-gray-900">{page}</span>
        </nav>
      </div>
    </header>
  );
}

// ── Status badges - exact from real app ───────────────────────────────────────
function StatusBadge({ status }) {
  if (status === 'active') return (
    <span className="inline-flex items-center gap-[6px] text-[13px] font-normal text-[#1d1d1f] tracking-[-0.01em]">
      <span className="relative flex h-[9px] w-[9px]">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34c759] opacity-40" />
        <span className="relative inline-flex rounded-full h-[9px] w-[9px] bg-[#34c759]" />
      </span>
      Active
    </span>
  );
  if (status === 'paused') return (
    <span className="inline-flex items-center gap-[6px] text-[13px] font-normal text-[#1d1d1f] tracking-[-0.01em]">
      <svg width="14" height="14" viewBox="0 0 11 11" fill="none">
        <circle cx="5.5" cy="5.5" r="5" fill="#ff9f0a"/>
        <rect x="3.6" y="3.2" width="1.3" height="4.6" rx="0.5" fill="white"/>
        <rect x="6.1" y="3.2" width="1.3" height="4.6" rx="0.5" fill="white"/>
      </svg>
      Paused
    </span>
  );
  if (status === 'completed') return (
    <span className="inline-flex items-center gap-[6px] text-[13px] font-normal text-[#1d1d1f] tracking-[-0.01em]">
      <svg width="14" height="14" viewBox="0 0 11 11" fill="none">
        <circle cx="5.5" cy="5.5" r="5" fill="#007aff"/>
        <path d="M3.3 5.6L4.9 7.2L7.8 4" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      Completed
    </span>
  );
  // draft
  return (
    <span className="inline-flex items-center gap-[6px] text-[13px] font-normal text-[#86868b] tracking-[-0.01em]">
      <svg width="14" height="14" viewBox="0 0 11 11" fill="none">
        <circle cx="5.5" cy="5.5" r="4.5" stroke="#86868b" strokeWidth="1.2" strokeDasharray="2 2"/>
      </svg>
      Draft
    </span>
  );
}

// ── Campaigns ─────────────────────────────────────────────────────────────────
const campaignRows = [
  { name: 'SaaS VP Decision Makers',        status: 'active',    leads: 4200, sent: 2847, opened: 1748, openPct: '61.4', replied: 236,  replyPct: '8.3',  positive: 92,  posPct: '39.0', bounced: 51,  bouncePct: '1.8' },
  { name: 'Series A Founders – West Coast', status: 'active',    leads: 1800, sent: 1204, opened: 784,  openPct: '65.1', replied: 133,  replyPct: '11.0', positive: 61,  posPct: '45.9', bounced: 19,  bouncePct: '1.6' },
  { name: 'Agency Owners Outreach',         status: 'paused',    leads: 5600, sent: 3891, opened: 2218, openPct: '57.0', replied: 214,  replyPct: '5.5',  positive: 72,  posPct: '33.6', bounced: 82,  bouncePct: '2.1' },
  { name: 'Enterprise IT Directors',        status: 'completed', leads: 7100, sent: 5102, opened: 3265, openPct: '64.0', replied: 453,  replyPct: '8.9',  positive: 176, posPct: '38.8', bounced: 92,  bouncePct: '1.8' },
  { name: 'RevOps Teams Q1 2025',           status: 'draft',     leads: 920,  sent: 0,    opened: 0,    openPct: null,   replied: 0,    replyPct: null,   positive: 0,   posPct: null,   bounced: 0,   bouncePct: null  },
];

// tiny inline sparkline - exact match to real app (32×14, quadratic bezier + drop-shadow)
function Sparkline({ data, color = '#3b82f6' }) {
  const width = 32, height = 14, padding = 2;
  if (!data || data.length < 2) return null;
  const max = Math.max(...data, 1);
  const points = data.map((v, i) => ({
    x: (i / (data.length - 1)) * width,
    y: height - (v / max) * (height - padding * 2) - padding,
  }));
  let path = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const cur = points[i], nxt = points[i + 1];
    const cx = (cur.x + nxt.x) / 2, cy = (cur.y + nxt.y) / 2;
    path += ` Q ${cur.x} ${cur.y}, ${cx} ${cy}`;
  }
  const last = points[points.length - 1];
  path += ` T ${last.x} ${last.y}`;
  return (
    <svg width={width} height={height} className="shrink-0">
      <path
        d={path}
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
        style={{ filter: `drop-shadow(0 0 1.5px ${color}66)` }}
      />
    </svg>
  );
}

function CampaignsMockup() {
  return (
    <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
      <PageHeader page="Campaigns" />

        <div className="flex-1 flex flex-col gap-4 px-6 pt-4 pb-4 bg-white overflow-hidden">
          {/* Title + action */}
          <div className="flex items-center justify-between flex-shrink-0">
            <h2 className="text-2xl font-semibold text-gray-900">Campaigns</h2>
            <button className="inline-flex items-center justify-center h-8 gap-1.5 px-3 text-[13px] font-medium text-white bg-blue-600 rounded-lg shadow-sm">
              <Plus size={13} strokeWidth={2.5} />
              New Campaign
            </button>
          </div>

          {/* Table card */}
          <div className="flex flex-col bg-white rounded-lg overflow-hidden flex-shrink-0"
            style={{ border: '0.5px solid #E3E3E3', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>

            {/* Search + sort + filter bar */}
            <div className="flex items-center gap-2 px-3 py-2.5 border-b border-[#E3E3E3]">
              <div className="flex h-8 flex-1 items-center gap-2">
                <Search size={14} className="text-gray-400 shrink-0 ml-1" />
                <span className="text-sm text-gray-400 select-none">Search campaigns...</span>
              </div>
              <button className="inline-flex items-center justify-center h-8 gap-1.5 px-2.5 text-[13px] font-medium text-gray-700 bg-white rounded-lg shrink-0"
                style={{ border: '0.5px solid #E3E3E3' }}>
                <SortAsc size={13} className="text-gray-500" />
                Sort
              </button>
              <button className="inline-flex items-center justify-center h-8 gap-1.5 px-2.5 text-[13px] font-medium text-gray-700 bg-white rounded-lg shrink-0"
                style={{ border: '0.5px solid #E3E3E3' }}>
                <Filter size={13} className="text-gray-500" />
                Filters
              </button>
            </div>

            {/* Table */}
            <table className="w-full caption-bottom border-collapse text-sm" cellSpacing="0" cellPadding="0">
              <thead>
                <tr className="bg-[#FDFDFD]" style={{ borderBottom: '1px solid #E3E3E3' }}>
                  <th className="text-left whitespace-nowrap border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, minWidth: 200 }}>
                    <div className="flex h-11 items-center pl-4 pr-3">
                      <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Campaign</span>
                    </div>
                  </th>
                  <th className="text-center whitespace-nowrap border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, width: 105 }}>
                    <div className="flex h-11 items-center justify-center px-3">
                      <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Status</span>
                    </div>
                  </th>
                  <th className="text-center whitespace-nowrap border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, width: 70 }}>
                    <div className="flex h-11 items-center justify-center px-3 gap-1.5">
                      <Users size={13} className="text-gray-400" />
                      <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Leads</span>
                    </div>
                  </th>
                  <th className="text-center whitespace-nowrap border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, width: 85 }}>
                    <div className="flex h-11 items-center justify-center px-3 gap-1.5">
                      <Mail size={13} className="text-gray-400" />
                      <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Sent</span>
                    </div>
                  </th>
                  <th className="text-center whitespace-nowrap border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, width: 100 }}>
                    <div className="flex h-11 items-center justify-center px-3">
                      <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Opened</span>
                    </div>
                  </th>
                  <th className="text-center whitespace-nowrap border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, width: 100 }}>
                    <div className="flex h-11 items-center justify-center px-3">
                      <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Replied</span>
                    </div>
                  </th>
                  <th className="text-center whitespace-nowrap border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, width: 100 }}>
                    <div className="flex h-11 items-center justify-center px-3">
                      <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Positive</span>
                    </div>
                  </th>
                  <th className="text-center whitespace-nowrap border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, width: 90 }}>
                    <div className="flex h-11 items-center justify-center px-3">
                      <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Bounced</span>
                    </div>
                  </th>
                  <th style={{ padding: 0, width: 44 }} />
                </tr>
              </thead>
              <tbody>
                {campaignRows.map((c, i) => (
                  <tr
                    key={i}
                    className="cursor-pointer hover:bg-[#F9FAFB]"
                    style={{ borderBottom: '0.5px solid #E3E3E3' }}
                  >
                    {/* Campaign name */}
                    <td className="border-r-[0.5px] border-r-[#E3E3E3] whitespace-nowrap" style={{ padding: 0 }}>
                      <div className="flex h-11 items-center pl-4 pr-3">
                        <span className="text-sm font-medium text-gray-900 truncate max-w-[190px]">{c.name}</span>
                      </div>
                    </td>
                    {/* Status */}
                    <td className="border-r-[0.5px] border-r-[#E3E3E3] whitespace-nowrap" style={{ padding: 0 }}>
                      <div className="flex h-11 items-center justify-center px-3">
                        <StatusBadge status={c.status} />
                      </div>
                    </td>
                    {/* Leads */}
                    <td className="border-r-[0.5px] border-r-[#E3E3E3] whitespace-nowrap" style={{ padding: 0 }}>
                      <div className="flex h-11 items-center justify-center px-3">
                        <span className="text-sm text-gray-900">{c.leads.toLocaleString()}</span>
                      </div>
                    </td>
                    {/* Sent + sparkline */}
                    <td className="border-r-[0.5px] border-r-[#E3E3E3] whitespace-nowrap" style={{ padding: 0 }}>
                      <div className="flex h-11 items-center justify-center px-3 gap-2">
                        <span className="text-sm text-gray-900">{c.sent ? c.sent.toLocaleString() : '-'}</span>
                        {c.status === 'active' && <Sparkline data={[1,3,5,4,7,6,9,8,11,10,13,12,14]} color="#3b82f6" />}
                      </div>
                    </td>
                    {/* Opened */}
                    <td className="border-r-[0.5px] border-r-[#E3E3E3] whitespace-nowrap" style={{ padding: 0 }}>
                      <div className="flex h-11 items-center justify-center px-3 gap-1.5">
                        {c.openPct ? (
                          <>
                            <span className="text-sm text-gray-900">{c.opened.toLocaleString()}</span>
                            <span className="text-xs text-gray-500">({c.openPct}%)</span>
                          </>
                        ) : <span className="text-xs text-gray-400">-</span>}
                      </div>
                    </td>
                    {/* Replied */}
                    <td className="border-r-[0.5px] border-r-[#E3E3E3] whitespace-nowrap" style={{ padding: 0 }}>
                      <div className="flex h-11 items-center justify-center px-3 gap-1.5">
                        {c.replyPct ? (
                          <>
                            <span className="text-sm text-gray-900">{c.replied}</span>
                            <span className="text-xs text-gray-500">({c.replyPct}%)</span>
                          </>
                        ) : <span className="text-xs text-gray-400">-</span>}
                      </div>
                    </td>
                    {/* Positive */}
                    <td className="border-r-[0.5px] border-r-[#E3E3E3] whitespace-nowrap" style={{ padding: 0 }}>
                      <div className="flex h-11 items-center justify-center px-3 gap-1.5">
                        {c.posPct ? (
                          <>
                            <span className="text-sm text-gray-900">{c.positive}</span>
                            <span className="text-xs text-gray-500">({c.posPct}%)</span>
                          </>
                        ) : <span className="text-xs text-gray-400">-</span>}
                      </div>
                    </td>
                    {/* Bounced */}
                    <td className="border-r-[0.5px] border-r-[#E3E3E3] whitespace-nowrap" style={{ padding: 0 }}>
                      <div className="flex h-11 items-center justify-center px-3 gap-1.5">
                        {c.bouncePct ? (
                          <>
                            <span className={`text-sm ${parseFloat(c.bouncePct) > 3 ? 'text-red-600' : 'text-gray-900'}`}>{c.bounced}</span>
                            <span className={`text-xs ${parseFloat(c.bouncePct) > 3 ? 'text-red-500' : 'text-gray-500'}`}>({c.bouncePct}%)</span>
                          </>
                        ) : <span className="text-xs text-gray-400">-</span>}
                      </div>
                    </td>
                    {/* Actions */}
                    <td style={{ padding: 0 }}>
                      <div className="flex h-11 items-center justify-center px-2">
                        <button className="text-gray-300 hover:text-gray-500 transition-colors rounded p-1">
                          <MoreHorizontal size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
}

// ── Inbox ─────────────────────────────────────────────────────────────────────
const conversations = [
  { from: 'Marcus Chen',  initials: 'MC', company: 'Notion',    preview: 'This looks really interesting, can we hop on a quick call this week?', time: '2m',  tag: 'Interested', tagColor: 'bg-green-50 text-green-700',   unread: true  },
  { from: 'Sarah Kim',    initials: 'SK', company: 'Stripe',    preview: 'What does your pricing look like for around 10 mailboxes?',             time: '18m', tag: 'Pricing',    tagColor: 'bg-blue-50 text-blue-700',     unread: true  },
  { from: 'Tom Bradley',  initials: 'TB', company: 'Linear',    preview: "We've been struggling with deliverability. Tell me more about it.",      time: '1h',  tag: 'Interested', tagColor: 'bg-green-50 text-green-700',   unread: false },
  { from: 'Priya Patel',  initials: 'PP', company: 'Figma',     preview: 'Not the right time for us, maybe follow up in Q3.',                      time: '3h',  tag: 'Not Now',    tagColor: 'bg-gray-100 text-gray-500',    unread: false },
  { from: 'David Wu',     initials: 'DW', company: 'Vercel',    preview: 'This is exactly what we needed. Can you send over the details?',         time: '5h',  tag: 'Interested', tagColor: 'bg-green-50 text-green-700',   unread: false },
  { from: 'Aisha Okonkwo','initials': 'AO', company: 'Segment',  preview: "We're evaluating a few tools. How does Sendbox compare to Instantly?",   time: '7h',  tag: 'Evaluating', tagColor: 'bg-amber-50 text-amber-700',   unread: false },
];

const avatarColors = ['bg-blue-500', 'bg-violet-500', 'bg-emerald-500', 'bg-rose-400', 'bg-cyan-500', 'bg-orange-400'];

function InboxMockup() {
  const [selected, setSelected] = useState(0);
  const conv = conversations[selected];

  return (
    <div className="flex-1 flex min-w-0 overflow-hidden">

      {/* Conversation list */}
      <div className="w-[270px] border-r border-[#E3E3E3] flex flex-col bg-white flex-shrink-0">
        {/* Header */}
        <div className="flex h-16 items-center gap-2 border-b border-gray-200/60 px-4 flex-shrink-0">
          <button aria-label="Toggle menu" className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-gray-100 -ml-1">
            <HamburgerIcon />
          </button>
          <div className="h-4 w-px bg-gray-200 mx-0.5" />
          <span className="text-[13px] font-medium text-gray-900">Inbox</span>
          <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-500 px-1 text-[10px] font-medium text-white ml-1">3</span>
          <div className="ml-auto flex items-center gap-1">
            <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
              <Filter size={13} />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="px-3 py-2.5 border-b border-gray-100 flex-shrink-0">
          <div className="flex items-center gap-2 h-8 px-2.5 bg-gray-50 border border-gray-200 rounded-lg">
            <Search size={13} className="text-gray-400 shrink-0" />
            <span className="text-xs text-gray-400 select-none">Search by name, email...</span>
          </div>
        </div>

        {/* Conversation items */}
        <div className="flex-1 overflow-auto">
          {conversations.map((c, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`w-full text-left px-3 py-3 border-b border-gray-100/80 transition-colors relative ${
                i === selected
                  ? 'bg-blue-50 border-l-2 border-l-blue-500'
                  : 'hover:bg-gray-50 border-l-2 border-l-transparent'
              }`}
            >
              <div className="flex items-start gap-2.5">
                <div className={`w-8 h-8 rounded-full ${c.unread ? 'bg-blue-500' : avatarColors[i]} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                  <span className="text-[10px] font-semibold text-white">{c.initials}</span>
                </div>
                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center justify-between gap-1">
                    <span className={`text-[12.5px] truncate ${c.unread ? 'font-semibold text-gray-900' : 'font-medium text-gray-700'}`}>
                      {c.from}
                    </span>
                    <span className={`text-[10.5px] flex-shrink-0 ${c.unread ? 'font-medium text-blue-600' : 'text-gray-400'}`}>{c.time}</span>
                  </div>
                  <p className="text-[11.5px] text-gray-500 truncate leading-snug">{c.preview}</p>
                  <div className="flex items-center gap-1.5">
                    {c.tag && (
                      <span className={`inline-flex items-center gap-1 text-[10px] font-medium px-1.5 py-0.5 rounded ${c.tagColor}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
                        {c.tag}
                      </span>
                    )}
                    {c.unread && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Thread / right panel */}
      <div className="flex-1 flex flex-col bg-white min-w-0">
        {/* Thread header - px-4 py-3 border-b bg-gray-50/50 */}
        <div className="px-4 py-3 border-b border-gray-200/60 bg-gray-50/50 flex items-center justify-between flex-shrink-0">
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-[15px] font-semibold text-gray-900 truncate">{conv.from}</span>
              <Info size={13} className="text-gray-400 flex-shrink-0" />
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="text-xs text-gray-500">{conv.from.split(' ')[0].toLowerCase()}@{conv.company.toLowerCase()}.com</span>
              <span className="text-xs text-gray-300 mx-0.5">•</span>
              <span className="text-xs text-gray-500">SaaS VP Outreach</span>
            </div>
          </div>
          {/* Action buttons - text+icon style matching real app */}
          <div className="flex items-center gap-0.5 flex-shrink-0 ml-3">
            <button className="px-2 py-1 flex items-center gap-1 text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors">
              <CornerUpLeft size={12} />Reply
            </button>
            <div className="w-px h-4 bg-gray-200 mx-0.5" />
            <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors">
              <RefreshCw size={13} />
            </button>
            <button className="px-2 py-1 flex items-center gap-1 text-xs text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors">
              <Mail size={12} />Unread
            </button>
            <button className="px-2 py-1 flex items-center gap-1 text-xs text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors">
              <X size={12} />DNC
            </button>
          </div>
        </div>

        {/* Messages - overflow-y-auto px-4 py-3, space-y-3 */}
        <div className="flex-1 overflow-auto px-4 py-3 bg-white">
          <div className="space-y-3 mx-auto">
            {/* Sent message */}
            <div className="group relative">
              <div className="flex items-start gap-3 p-3 relative z-10">
                <div className="h-8 w-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center flex-shrink-0 text-xs font-medium">Y</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2">
                        <span className="font-medium text-sm text-gray-900">You</span>
                        <span className="text-xs text-gray-500">&lt;alex@yourcompany.com&gt;</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-2 flex-shrink-0">
                      <span className="text-xs text-gray-400">Yesterday, 9:14 AM</span>
                      <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-all">
                        <CornerUpLeft size={12} />
                      </button>
                    </div>
                  </div>
                  <div className="text-sm text-gray-700 whitespace-pre-wrap break-words" style={{ lineHeight: '1.7' }}>
                    Hey {conv.from.split(' ')[0]}, noticed your team is scaling outbound at {conv.company}. We built Sendbox specifically to fix deliverability - dedicated IPs, real warmup, no shared infrastructure. Worth a quick look?
                  </div>
                </div>
              </div>
            </div>
            {/* Lead reply */}
            <div className="group relative">
              <div className="flex items-start gap-3 p-3 relative z-10">
                <div className={`h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 text-xs font-medium`}>
                  {conv.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2">
                        <span className="font-medium text-sm text-gray-900">{conv.from}</span>
                        <span className="text-xs text-gray-500">&lt;{conv.from.split(' ')[0].toLowerCase()}@{conv.company.toLowerCase()}.com&gt;</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-2 flex-shrink-0">
                      <span className="text-xs text-gray-400">{conv.time} ago</span>
                      <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-all">
                        <CornerUpLeft size={12} />
                      </button>
                    </div>
                  </div>
                  <div className="text-sm text-gray-700 whitespace-pre-wrap break-words" style={{ lineHeight: '1.7' }}>{conv.preview}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reply compose - border-t bg-gray-50 */}
        <div className="border-t border-gray-200/60 bg-gray-50 p-3 flex-shrink-0">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            {/* Compose header */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-gray-200">
              <span className="text-xs font-medium text-gray-600">Replying to {conv.from}</span>
              <div className="flex items-center gap-1">
                <button className="px-2 py-1 text-xs font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded transition-colors">CC/BCC</button>
                <button className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-blue-600 hover:bg-blue-50 rounded transition-colors">
                  <Image src="/icon.png" alt="Sendbox" className="w-3 h-3 object-contain" width={48} height={48} />
                  Write for me
                  <span className="text-gray-400 ml-0.5">(3 credits)</span>
                </button>
                <button className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-all">
                  <X size={13} />
                </button>
              </div>
            </div>
            {/* Formatting toolbar */}
            <div className="px-3 py-1.5 border-b border-gray-100 flex items-center gap-1">
              <button className="p-1 hover:bg-gray-100 rounded transition-colors text-gray-500">
                <span className="text-[12px] font-bold leading-none">B</span>
              </button>
              <button className="p-1 hover:bg-gray-100 rounded transition-colors text-gray-500">
                <span className="text-[12px] italic leading-none">I</span>
              </button>
              <button className="p-1 hover:bg-gray-100 rounded transition-colors text-gray-500">
                <span className="text-[12px] underline leading-none">U</span>
              </button>
              <div className="w-px h-4 bg-gray-200 mx-0.5" />
              <button className="p-1 hover:bg-gray-100 rounded transition-colors text-gray-500">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
              </button>
            </div>
            {/* Compose body */}
            <div className="p-3 h-[110px]">
              <span className="text-sm text-gray-400">Write a reply...</span>
            </div>
            {/* Footer */}
            <div className="flex items-center px-3 py-2 border-t border-gray-100 bg-gray-50 rounded-b-lg">
              <div className="flex items-center gap-2 ml-auto">
                <button className="px-3 py-1 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors">Cancel</button>
                <button className="inline-flex items-center h-6 px-2.5 text-xs font-medium text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Mailboxes ─────────────────────────────────────────────────────────────────
const mailboxRows = [
  { email: 'alex@yourcompany.com',   name: 'Alex Johnson',    provider: 'google',  sent: 14, limit: 50, tags: ['Cold Outreach'], warmup: true,  sending: true,  warmupDay: 21, warmupVol: 22, warmupTarget: 25, warmupHealth: 91, warmupBars: [{sent:10,inbox:9,spam:0},{sent:12,inbox:11,spam:0},{sent:14,inbox:12,spam:1},{sent:16,inbox:14,spam:1},{sent:18,inbox:16,spam:0},{sent:20,inbox:17,spam:1},{sent:22,inbox:19,spam:1}] },
  { email: 'sarah@yourcompany.com',  name: 'Sarah Mitchell',  provider: 'google',  sent: 31, limit: 50, tags: ['Cold Outreach'], warmup: true,  sending: true,  warmupDay: 18, warmupVol: 19, warmupTarget: 25, warmupHealth: 87, warmupBars: [{sent:8,inbox:7,spam:0},{sent:10,inbox:9,spam:0},{sent:12,inbox:10,spam:1},{sent:14,inbox:12,spam:0},{sent:16,inbox:13,spam:1},{sent:17,inbox:14,spam:1},{sent:19,inbox:16,spam:1}] },
  { email: 'outreach@senddomain.io', name: 'Outreach Pool',   provider: 'outlook', sent: 5,  limit: 25, tags: ['Warming Pool'],  warmup: true,  sending: false, warmupDay: 7,  warmupVol: 8,  warmupTarget: 25, warmupHealth: 74, warmupBars: [{sent:0,inbox:0,spam:0},{sent:2,inbox:2,spam:0},{sent:3,inbox:2,spam:0},{sent:4,inbox:3,spam:0},{sent:5,inbox:4,spam:0},{sent:6,inbox:5,spam:1},{sent:8,inbox:6,spam:1}] },
  { email: 'alex@seconddomain.io',   name: 'Alex (Domain B)', provider: 'google',  sent: 28, limit: 50, tags: ['Cold Outreach'], warmup: true,  sending: true,  warmupDay: 16, warmupVol: 17, warmupTarget: 25, warmupHealth: 83, warmupBars: [{sent:6,inbox:5,spam:0},{sent:8,inbox:7,spam:0},{sent:10,inbox:8,spam:1},{sent:12,inbox:10,spam:0},{sent:14,inbox:12,spam:1},{sent:15,inbox:13,spam:0},{sent:17,inbox:14,spam:1}] },
  { email: 'sales@cold-mailer.com',  name: 'Sales Team',      provider: 'outlook', sent: 42, limit: 50, tags: ['Agency'],        warmup: true,  sending: true,  warmupDay: 24, warmupVol: 24, warmupTarget: 25, warmupHealth: 94, warmupBars: [{sent:14,inbox:13,spam:0},{sent:16,inbox:15,spam:0},{sent:18,inbox:16,spam:1},{sent:20,inbox:18,spam:0},{sent:22,inbox:20,spam:1},{sent:23,inbox:21,spam:0},{sent:24,inbox:22,spam:1}] },
  { email: 'jenny@thirddomain.io',  name: 'Jenny Lee',       provider: 'google',  sent: 19, limit: 50, tags: ['Cold Outreach'], warmup: true,  sending: true,  warmupDay: 12, warmupVol: 13, warmupTarget: 25, warmupHealth: 79, warmupBars: [{sent:4,inbox:3,spam:0},{sent:6,inbox:5,spam:0},{sent:8,inbox:7,spam:0},{sent:9,inbox:8,spam:0},{sent:11,inbox:9,spam:1},{sent:12,inbox:10,spam:0},{sent:13,inbox:11,spam:1}] },
  { email: 'tom@outbound.agency',   name: 'Tom Rivera',      provider: 'outlook', sent: 37, limit: 50, tags: ['Agency'],        warmup: true,  sending: true,  warmupDay: 20, warmupVol: 21, warmupTarget: 25, warmupHealth: 88, warmupBars: [{sent:10,inbox:9,spam:0},{sent:12,inbox:11,spam:0},{sent:14,inbox:12,spam:1},{sent:16,inbox:14,spam:0},{sent:18,inbox:16,spam:0},{sent:20,inbox:18,spam:1},{sent:21,inbox:19,spam:0}] },
  { email: 'priya@yourcompany.com', name: 'Priya Sharma',    provider: 'google',  sent: 8,  limit: 25, tags: ['Warming Pool'],  warmup: true,  sending: false, warmupDay: 5,  warmupVol: 6,  warmupTarget: 25, warmupHealth: 68, warmupBars: [{sent:0,inbox:0,spam:0},{sent:1,inbox:1,spam:0},{sent:2,inbox:2,spam:0},{sent:3,inbox:2,spam:0},{sent:4,inbox:3,spam:0},{sent:5,inbox:4,spam:0},{sent:6,inbox:5,spam:0}] },
];

function GmailIcon() {
  // Exact SVG from real app (mailboxes/page.jsx getProviderIcon "gmail")
  return (
    <svg width="16" height="16" viewBox="-3 0 262 262" xmlns="http://www.w3.org/2000/svg">
      <path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4" />
      <path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853" />
      <path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05" />
      <path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335" />
    </svg>
  );
}

function OutlookIcon() {
  // Exact SVG from real app (mailboxes/page.jsx getProviderIcon "outlook")
  return (
    <svg width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.484,7.937v5.477L21.4,14.619a.489.489,0,0,0,.21,0l8.238-5.554a1.174,1.174,0,0,0-.959-1.128Z" fill="#0072c6" />
      <path d="M19.484,15.457l1.747,1.2a.522.522,0,0,0,.543,0c-.3.181,8.073-5.378,8.073-5.378V21.345a1.408,1.408,0,0,1-1.49,1.555H19.483V15.457Z" fill="#0072c6" />
      <path d="M10.44,12.932a1.609,1.609,0,0,0-1.42.838,4.131,4.131,0,0,0-.526,2.218A4.05,4.05,0,0,0,9.02,18.2a1.6,1.6,0,0,0,2.771.022,4.014,4.014,0,0,0,.515-2.2,4.369,4.369,0,0,0-.5-2.281A1.536,1.536,0,0,0,10.44,12.932Z" fill="#0072c6" />
      <path d="M2.153,5.155V26.582L18.453,30V2ZM13.061,19.491a3.231,3.231,0,0,1-2.7,1.361,3.19,3.19,0,0,1-2.64-1.318A5.459,5.459,0,0,1,6.706,16.1a5.868,5.868,0,0,1,1.036-3.616A3.267,3.267,0,0,1,10.486,11.1a3.116,3.116,0,0,1,2.61,1.321,5.639,5.639,0,0,1,1,3.484A5.763,5.763,0,0,1,13.061,19.491Z" fill="#0072c6" />
    </svg>
  );
}

function Toggle({ enabled, orange = false }) {
  const onColor = orange ? '#f97316' : '#2663eb';
  return (
    <div
      className="relative inline-flex h-[20px] w-[34px] rounded-full transition-colors duration-200 cursor-pointer flex-shrink-0"
      style={{ backgroundColor: enabled ? onColor : '#d1d5db' }}
    >
      <span
        className="absolute top-[3px] h-[14px] w-[14px] rounded-full bg-white shadow-sm transition-all duration-200"
        style={{ left: enabled ? '17px' : '3px' }}
      />
    </div>
  );
}

// Stacked bar warmup chart - matches real app (Day X | vol/target | X% health + 70×24 SVG)
function WarmupStats({ day, vol, target, health, bars }) {
  const svgWidth = 70, svgHeight = 24, barWidth = 7, gap = 3;
  const maxSent = Math.max(...bars.map(d => d.sent), 1);
  const healthColor = health >= 80 ? '#16a34a' : health >= 50 ? '#ca8a04' : '#dc2626';
  return (
    <div className="flex items-center gap-2 text-[11px] tabular-nums">
      <div className="flex items-center gap-1.5 whitespace-nowrap">
        <span className="text-gray-600">Day {day}</span>
        <span className="text-gray-400">{vol}/{target}</span>
        <span style={{ color: healthColor }}>{health}% health</span>
      </div>
      <svg width={svgWidth} height={svgHeight} className="shrink-0">
        {bars.map((d, i) => {
          const totalH = d.sent > 0 ? Math.max((d.sent / maxSent) * (svgHeight - 2), 2) : 2;
          const x = i * (barWidth + gap);
          const inboxH = d.sent > 0 ? (d.inbox / d.sent) * totalH : 0;
          const spamH  = d.sent > 0 ? (d.spam  / d.sent) * totalH : 0;
          return (
            <g key={i}>
              {d.sent === 0 ? (
                <rect x={x} y={svgHeight - 4} width={barWidth} height={4} rx={1} fill="#d1d5db" />
              ) : (
                <>
                  <rect x={x} y={svgHeight - inboxH} width={barWidth} height={inboxH} fill="#10b981" />
                  <rect x={x} y={svgHeight - inboxH - spamH} width={barWidth} height={spamH} fill="#ef4444" />
                </>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function MailboxStatusBadge({ status = 'active' }) {
  if (status === 'active') return (
    <span className="inline-flex items-center gap-1.5 text-[13px] font-normal text-green-600">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="6" fill="#22c55e"/>
        <path d="M4.2 7.2L6.1 9.1L9.8 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      Active
    </span>
  );
  if (status === 'suspended') return (
    <span className="inline-flex items-center gap-1.5 text-[13px] font-normal text-orange-600">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="6" fill="#f97316"/>
        <rect x="4.5" y="4" width="1.6" height="6" rx="0.6" fill="white"/>
        <rect x="7.9" y="4" width="1.6" height="6" rx="0.6" fill="white"/>
      </svg>
      Suspended
    </span>
  );
  return (
    <span className="inline-flex items-center gap-1.5 text-[13px] font-normal text-gray-400">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="5.5" stroke="#9ca3af" strokeWidth="1.2" strokeDasharray="2 2"/>
      </svg>
      Inactive
    </span>
  );
}

function MailboxesMockup() {
  return (
    <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
      <PageHeader page="Mailboxes" />

        <div className="flex-1 flex flex-col gap-4 px-6 pt-4 pb-4 bg-white overflow-hidden">
          <div className="flex items-center justify-between flex-shrink-0">
            <h2 className="text-2xl font-semibold text-gray-900">Mailboxes</h2>
            <button className="inline-flex items-center justify-center h-8 gap-1.5 px-3 text-[13px] font-medium text-white bg-blue-600 rounded-lg shadow-sm">
              <Plus size={13} strokeWidth={2.5} />
              Add Mailbox
            </button>
          </div>

          <div className="flex flex-col bg-white rounded-lg overflow-hidden flex-1"
            style={{ border: '0.5px solid #E3E3E3', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>

            {/* Search bar */}
            <div className="flex items-center gap-2 px-3 py-2.5 border-b border-[#E3E3E3]">
              <div className="flex h-8 flex-1 items-center gap-2">
                <Search size={14} className="text-gray-400 shrink-0 ml-1" />
                <span className="text-sm text-gray-400 select-none">Search mailboxes...</span>
              </div>
              <button className="inline-flex items-center justify-center h-8 gap-1.5 px-2.5 text-[13px] font-medium text-gray-700 bg-white rounded-lg shrink-0"
                style={{ border: '0.5px solid #E3E3E3' }}>
                <Filter size={13} className="text-gray-500" />
                Filters
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
            <table className="w-full caption-bottom border-collapse text-sm" cellSpacing="0" cellPadding="0">
              <thead className="sticky top-0 z-[5]">
                <tr className="bg-[#FDFDFD]" style={{ borderBottom: '1px solid #E3E3E3' }}>
                  <th className="text-center border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, width: 40 }}>
                    <div className="flex h-10 items-center justify-center px-3">
                      <div className="w-3.5 h-3.5 rounded border border-gray-300 bg-white" />
                    </div>
                  </th>
                  <th className="text-left whitespace-nowrap border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, width: 260 }}>
                    <div className="flex h-10 items-center pl-4 pr-3">
                      <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Email</span>
                    </div>
                  </th>
                  <th className="text-center whitespace-nowrap border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, width: 95 }}>
                    <div className="flex h-10 items-center justify-center px-3">
                      <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Status</span>
                    </div>
                  </th>
                  <th className="text-center whitespace-nowrap border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, width: 100 }}>
                    <div className="flex h-10 items-center justify-center px-3">
                      <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Sent / Limit</span>
                    </div>
                  </th>
                  <th className="text-center whitespace-nowrap border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, width: 120 }}>
                    <div className="flex h-10 items-center justify-center px-3">
                      <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Tags</span>
                    </div>
                  </th>
                  <th className="text-center whitespace-nowrap border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, minWidth: 250 }}>
                    <div className="flex h-10 items-center justify-center px-3">
                      <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Warmup Stats</span>
                    </div>
                  </th>
                  <th className="text-center whitespace-nowrap border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, width: 76 }}>
                    <div className="flex h-10 items-center justify-center px-3">
                      <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Warmup</span>
                    </div>
                  </th>
                  <th className="text-center whitespace-nowrap" style={{ padding: 0, width: 76 }}>
                    <div className="flex h-10 items-center justify-center px-3">
                      <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Sending</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {mailboxRows.map((m, i) => (
                  <tr
                    key={i}
                    className="hover:bg-[#F9FAFB] cursor-pointer transition-colors"
                    style={{ borderBottom: '0.5px solid #E3E3E3' }}
                  >
                    {/* Checkbox - h-16 sets row height */}
                    <td className="text-center border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0 }}>
                      <div className="flex h-16 items-center justify-center px-3">
                        <Checkbox />
                      </div>
                    </td>
                    {/* Email - h-10 */}
                    <td className="border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, width: 280 }}>
                      <div className="flex h-10 items-center pl-4 pr-3 gap-2 overflow-hidden">
                        <div className="shrink-0 w-5 h-5 flex items-center justify-center">
                          {m.provider === 'google' ? <GmailIcon /> : <OutlookIcon />}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm font-medium text-gray-900 truncate">{m.email}</div>
                          <div className="text-xs text-gray-500 truncate">{m.name}</div>
                        </div>
                      </div>
                    </td>
                    {/* Status - h-10 */}
                    <td className="border-r-[0.5px] border-r-[#E3E3E3] whitespace-nowrap" style={{ padding: 0 }}>
                      <div className="flex h-10 items-center justify-center px-3">
                        <MailboxStatusBadge status="active" />
                      </div>
                    </td>
                    {/* Sent / Limit - h-12 (matches real app) */}
                    <td className="border-r-[0.5px] border-r-[#E3E3E3] whitespace-nowrap" style={{ padding: 0 }}>
                      <div className="flex h-12 items-center justify-center px-3 gap-1">
                        <span className="text-sm text-gray-900 tabular-nums">{m.sent}</span>
                        <span className="text-sm text-gray-400">/</span>
                        <span className="text-sm text-gray-900 tabular-nums">{m.limit}</span>
                      </div>
                    </td>
                    {/* Tags - h-10 with color variants */}
                    <td className="border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, width: 140 }}>
                      <div className="flex h-10 items-center justify-center px-2 gap-1">
                        {m.tags.map((tag, ti) => {
                          const cls = tag === 'Warming Pool'
                            ? 'bg-orange-50 text-orange-700 border-orange-100'
                            : tag === 'Agency'
                            ? 'bg-purple-50 text-purple-700 border-purple-100'
                            : 'bg-blue-50 text-blue-700 border-blue-100';
                          return (
                            <span key={ti} className={`inline-flex items-center px-1.5 py-0.5 rounded border text-xs truncate max-w-[110px] ${cls}`}>
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                    </td>
                    {/* Warmup Stats - h-10, real app stacked chart */}
                    <td className="border-r-[0.5px] border-r-[#E3E3E3] whitespace-nowrap" style={{ padding: 0 }}>
                      <div className="flex h-10 items-center justify-evenly px-2">
                        <WarmupStats
                          day={m.warmupDay} vol={m.warmupVol}
                          target={m.warmupTarget} health={m.warmupHealth}
                          bars={m.warmupBars}
                        />
                      </div>
                    </td>
                    {/* Warmup toggle - h-10, orange when active */}
                    <td className="border-r-[0.5px] border-r-[#E3E3E3] whitespace-nowrap" style={{ padding: 0 }}>
                      <div className="flex h-10 items-center justify-center px-3">
                        <Toggle enabled={m.warmup} orange />
                      </div>
                    </td>
                    {/* Sending toggle - h-10, blue */}
                    <td className="whitespace-nowrap" style={{ padding: 0 }}>
                      <div className="flex h-10 items-center justify-center px-3">
                        <Toggle enabled={m.sending} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            {/* Pagination footer - matches real app */}
            <div className="border-t border-[#E3E3E3] bg-white px-4 py-2.5 flex items-center gap-6 flex-shrink-0">
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <span>showing</span>
                <span className="inline-flex items-center gap-1 px-2 py-1 border border-gray-200 rounded text-xs font-medium text-gray-700 bg-white">
                  25 <svg width="10" height="10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                </span>
                <span>items out of <span className="font-medium text-gray-700">8</span></span>
              </div>
              <div className="ml-auto flex items-center gap-1 text-xs">
                <span className="text-gray-400 mr-1">Page 1 of 1</span>
                <button aria-label="Previous page" className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-400 hover:bg-gray-50">
                  <svg width="10" height="10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
                </button>
                <button className="w-7 h-7 flex items-center justify-center rounded bg-blue-50 border border-blue-200 text-blue-600 text-xs font-medium">1</button>
                <button aria-label="Next page" className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-400 hover:bg-gray-50">
                  <svg width="10" height="10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

// ── Leads ─────────────────────────────────────────────────────────────────────
const leadTagColors = {
  blue:   'bg-blue-50 text-blue-700 border-blue-100',
  purple: 'bg-purple-50 text-purple-700 border-purple-100',
  green:  'bg-green-50 text-green-700 border-green-100',
  orange: 'bg-orange-50 text-orange-700 border-orange-100',
  gray:   'bg-gray-100 text-gray-600 border-gray-200',
};

const leadRows = [
  { email: 'marcus.chen@notion.so',    firstName: 'Marcus',  lastName: 'Chen',    company: 'Notion',    jobTitle: 'VP of Product',         status: 'verified',    tags: [{ label: 'SaaS', c: 'blue' }, { label: 'Decision Maker', c: 'purple' }] },
  { email: 'sarah.kim@stripe.com',     firstName: 'Sarah',   lastName: 'Kim',     company: 'Stripe',    jobTitle: 'Head of Growth',        status: 'verified',    tags: [{ label: 'Prospect', c: 'green' }] },
  { email: 'tom.bradley@linear.app',   firstName: 'Tom',     lastName: 'Bradley', company: 'Linear',    jobTitle: 'Engineering Lead',      status: 'risky',       tags: [{ label: 'SaaS', c: 'blue' }] },
  { email: 'priya.patel@figma.io',     firstName: 'Priya',   lastName: 'Patel',   company: 'Figma',     jobTitle: 'Director of Marketing', status: 'verified',    tags: [{ label: 'SaaS', c: 'blue' }, { label: 'Warm Lead', c: 'green' }] },
  { email: 'david.wu@vercel.com',      firstName: 'David',   lastName: 'Wu',      company: 'Vercel',    jobTitle: 'CTO',                   status: 'verified',    tags: [{ label: 'Decision Maker', c: 'purple' }] },
  { email: 'info@acme-generic.net',    firstName: 'Alex',    lastName: 'Turner',  company: 'Acme Corp', jobTitle: 'Founder',               status: 'invalid',     tags: [{ label: 'Startup', c: 'orange' }] },
  { email: 'james.w@linearapp.com',    firstName: 'James',   lastName: 'Wilson',  company: 'Linear',    jobTitle: 'VP Engineering',        status: 'verified',    tags: [{ label: 'SaaS', c: 'blue' }] },
  { email: 'aisha.o@segment.io',       firstName: 'Aisha',   lastName: 'Okonkwo', company: 'Segment',   jobTitle: 'Revenue Operations',    status: 'not_checked', tags: [{ label: 'RevOps', c: 'gray' }] },
  { email: 'nina.r@hubspot.com',      firstName: 'Nina',    lastName: 'Ramirez', company: 'HubSpot',   jobTitle: 'Sr. Account Executive',  status: 'verified',    tags: [{ label: 'SaaS', c: 'blue' }, { label: 'Warm Lead', c: 'green' }] },
  { email: 'kevin.l@dropbox.com',     firstName: 'Kevin',   lastName: 'Liu',     company: 'Dropbox',   jobTitle: 'VP of Partnerships',     status: 'verified',    tags: [{ label: 'Decision Maker', c: 'purple' }] },
  { email: 'rachel.m@asana.com',      firstName: 'Rachel',  lastName: 'Moore',   company: 'Asana',     jobTitle: 'Head of Sales',          status: 'risky',       tags: [{ label: 'SaaS', c: 'blue' }] },
  { email: 'ben.c@monday.com',        firstName: 'Ben',     lastName: 'Carter',  company: 'Monday',    jobTitle: 'Director of Growth',     status: 'verified',    tags: [{ label: 'Prospect', c: 'green' }] },
];

function EmailStatusBadge({ status }) {
  if (status === 'verified') return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium text-green-700 bg-green-50 rounded-full border border-green-100">
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5.5" fill="#16a34a"/><path d="M3.5 6.1l1.7 1.7 3.3-3.7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      Verified
    </span>
  );
  if (status === 'invalid') return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium text-red-700 bg-red-50 rounded-full border border-red-100">
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5.5" fill="#dc2626"/><path d="M4 4l4 4M8 4l-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
      Invalid
    </span>
  );
  if (status === 'risky') return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium text-amber-700 bg-amber-50 rounded-full border border-amber-100">
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M6 1.5L1 10.5h10L6 1.5z" fill="#d97706"/><path d="M6 5v2.5M6 8.8v.5" stroke="white" strokeWidth="1.2" strokeLinecap="round"/></svg>
      Risky
    </span>
  );
  return <span className="text-xs text-gray-400">Not checked</span>;
}

function LeadsMockup() {
  return (
    <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
      <PageHeader page="Leads" />

        <div className="flex-1 flex flex-col gap-4 px-6 pt-4 pb-4 bg-white overflow-hidden">
          {/* Title + actions */}
          <div className="flex items-center justify-between flex-shrink-0">
            <h2 className="text-2xl font-semibold text-gray-900">Leads</h2>
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center gap-1.5 h-8 px-3 text-[13px] font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                DNC List
              </button>
              <button className="inline-flex items-center gap-1.5 h-8 px-3 text-[13px] font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">
                <Plus size={13} strokeWidth={2.5} />
                Add Lead
              </button>
              <button className="inline-flex items-center gap-1.5 h-8 px-3 text-[13px] font-medium text-white bg-blue-600 rounded-lg shadow-sm">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
                Import
                <ChevronDown size={12} />
              </button>
            </div>
          </div>

          {/* Table card */}
          <div className="flex flex-col bg-white rounded-lg overflow-hidden flex-1"
            style={{ border: '0.5px solid #E3E3E3', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>

            {/* Toolbar */}
            <div className="flex items-center gap-2 px-3 py-2.5 border-b border-[#E3E3E3]">
              <div className="flex h-8 items-center gap-1.5 flex-1 min-w-0">
                <Search size={13} className="text-gray-400 shrink-0" />
                <span className="text-sm text-gray-400 select-none">Search leads...</span>
              </div>
              {/* Validate Emails - blue with @ SVG */}
              <button className="inline-flex items-center gap-1.5 h-8 px-3 text-[13px] font-medium text-white bg-blue-600 rounded-lg shrink-0">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>
                </svg>
                Validate Emails
              </button>
              {/* Columns */}
              <button className="inline-flex items-center gap-1.5 h-8 px-2.5 text-[13px] font-medium text-gray-700 bg-white rounded-lg shrink-0"
                style={{ border: '0.5px solid #E3E3E3' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="18" rx="1"/><rect x="14" y="3" width="7" height="18" rx="1"/>
                </svg>
                Columns
              </button>
              {/* Tags filter */}
              <button className="inline-flex items-center gap-1.5 h-8 px-2.5 text-[13px] font-medium text-gray-700 bg-white rounded-lg shrink-0"
                style={{ border: '0.5px solid #E3E3E3' }}>
                Tags
                <ChevronDown size={12} className="text-gray-400" />
              </button>
              {/* Filters */}
              <button className="inline-flex items-center gap-1.5 h-8 px-2.5 text-[13px] font-medium text-gray-700 bg-white rounded-lg shrink-0"
                style={{ border: '0.5px solid #E3E3E3' }}>
                <Filter size={13} className="text-gray-500" />
                Filters
              </button>
            </div>

            {/* Table */}
            <div className="flex-1 overflow-y-auto">
            <table className="w-full caption-bottom border-collapse text-sm" cellSpacing="0" cellPadding="0">
              <thead className="sticky top-0 z-[5]">
                <tr className="bg-[#FDFDFD]" style={{ borderBottom: '1px solid #E3E3E3' }}>
                  <th className="text-center border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, width: 36 }}>
                    <div className="flex h-10 items-center justify-center px-3">
                      <div className="w-3.5 h-3.5 rounded border border-gray-300 bg-white" />
                    </div>
                  </th>
                  <th className="text-left whitespace-nowrap border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, width: 195 }}>
                    <div className="flex h-10 items-center pl-3 pr-3">
                      <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Email</span>
                    </div>
                  </th>
                  <th className="text-left whitespace-nowrap border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, width: 125 }}>
                    <div className="flex h-10 items-center pl-3 pr-3">
                      <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Email Status</span>
                    </div>
                  </th>
                  <th className="text-left whitespace-nowrap border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, width: 105 }}>
                    <div className="flex h-10 items-center pl-3 pr-3">
                      <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">First Name</span>
                    </div>
                  </th>
                  <th className="text-left whitespace-nowrap border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, width: 105 }}>
                    <div className="flex h-10 items-center pl-3 pr-3">
                      <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Last Name</span>
                    </div>
                  </th>
                  <th className="text-left whitespace-nowrap border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, width: 155 }}>
                    <div className="flex h-10 items-center pl-3 pr-3">
                      <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Company</span>
                    </div>
                  </th>
                  <th className="text-left whitespace-nowrap border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, width: 155 }}>
                    <div className="flex h-10 items-center pl-3 pr-3">
                      <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Job Title</span>
                    </div>
                  </th>
                  <th className="text-left whitespace-nowrap" style={{ padding: 0, minWidth: 140 }}>
                    <div className="flex h-10 items-center pl-3 pr-3">
                      <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Tags</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {leadRows.map((lead, i) => (
                  <tr
                    key={i}
                    className="cursor-pointer hover:bg-[#F9FAFB] transition-colors"
                    style={{ borderBottom: '0.5px solid #E3E3E3' }}
                  >
                    <td className="border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0 }}>
                      <div className="flex h-10 items-center justify-center px-3">
                        <Checkbox />
                      </div>
                    </td>
                    <td className="border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0 }}>
                      <div className="flex h-10 items-center pl-3 pr-3">
                        <span className="text-sm text-gray-900 truncate max-w-[180px]">{lead.email}</span>
                      </div>
                    </td>
                    <td className="border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0 }}>
                      <div className="flex h-10 items-center pl-3 pr-3">
                        <EmailStatusBadge status={lead.status} />
                      </div>
                    </td>
                    <td className="border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0 }}>
                      <div className="flex h-10 items-center pl-3 pr-3">
                        <span className="text-sm text-gray-900 truncate">{lead.firstName}</span>
                      </div>
                    </td>
                    <td className="border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0 }}>
                      <div className="flex h-10 items-center pl-3 pr-3">
                        <span className="text-sm text-gray-900 truncate">{lead.lastName}</span>
                      </div>
                    </td>
                    <td className="border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0 }}>
                      <div className="flex h-10 items-center pl-3 pr-3">
                        <span className="text-sm text-gray-900 truncate">{lead.company}</span>
                      </div>
                    </td>
                    <td className="border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0 }}>
                      <div className="flex h-10 items-center pl-3 pr-3">
                        <span className="text-sm text-gray-500 truncate">{lead.jobTitle}</span>
                      </div>
                    </td>
                    <td style={{ padding: 0 }}>
                      <div className="flex h-10 items-center pl-3 pr-3 gap-1">
                        {lead.tags.map((tag, ti) => (
                          <span key={ti} className={`inline-flex items-center px-1.5 py-0.5 rounded border text-xs truncate max-w-[120px] ${leadTagColors[tag.c]}`}>
                            {tag.label}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>

            {/* Pagination footer */}
            <div className="border-t border-[#E3E3E3] bg-white px-4 py-2.5 flex items-center gap-6 flex-shrink-0">
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <span>showing</span>
                <span className="inline-flex items-center gap-1 px-2 py-1 border border-gray-200 rounded text-xs font-medium text-gray-700 bg-white">
                  25 <svg width="10" height="10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                </span>
                <span>items out of <span className="font-medium text-gray-700">12</span></span>
              </div>
              <div className="ml-auto flex items-center gap-1 text-xs">
                <span className="text-gray-400 mr-1">Page 1 of 1</span>
                <button aria-label="Previous page" className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-400 hover:bg-gray-50">
                  <svg width="10" height="10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
                </button>
                <button className="w-7 h-7 flex items-center justify-center rounded bg-blue-50 border border-blue-200 text-blue-600 text-xs font-medium">1</button>
                <button aria-label="Next page" className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 bg-white text-gray-400 hover:bg-gray-50">
                  <svg width="10" height="10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

// ── Analytics ─────────────────────────────────────────────────────────────────
// Weekly email volumes: Aug 2024 → Mar 2025
// Shows realistic ramp-up, Thanksgiving dip (wk15), Dec holiday crash (wk18), Jan recovery, Feb peak
const sentSeries  = [480,680,820,960,1240,1380,1420,1350,1680,1820,1760,1940,1850,1720,1280,1440,1380,980,640,1240,1680,2020,2280,2380,2520,2680,2760,2640,2580,2490];
const openSeries  = sentSeries.map(v => Math.round(v * 0.614));
const replySeries = sentSeries.map(v => Math.round(v * 0.083));
const bounceSeries = sentSeries.map(v => Math.round(v * 0.019));

// Analytics card sparkline - 64×24 with gradient area fill
// idx prop makes gradient ID unique even when same color is used multiple times
function MiniChart({ data, color = '#3b82f6', idx = 0 }) {
  const W = 64, H = 24, pad = 2;
  if (!data || data.length < 2) return <div style={{ width: W, height: H }} />;
  const max = Math.max(...data, 1);
  const pts = data.map((v, i) => ({
    x: (i / (data.length - 1)) * W,
    y: H - pad - (v / max) * (H - pad * 2),
  }));
  let d = `M${pts[0].x},${pts[0].y}`;
  for (let i = 1; i < pts.length; i++) {
    const cx = (pts[i-1].x + pts[i].x) / 2;
    d += ` C${cx},${pts[i-1].y},${cx},${pts[i].y},${pts[i].x},${pts[i].y}`;
  }
  const fillPath = `${d} L${pts[pts.length-1].x},${H} L${pts[0].x},${H} Z`;
  const gid = `mc_${idx}_${color.replace('#','')}`;
  return (
    <svg width={W} height={H} className="shrink-0">
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.15"/>
          <stop offset="100%" stopColor={color} stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d={fillPath} fill={`url(#${gid})`}/>
      <path d={d} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// Full activity area chart with proper axes - matches recharts AreaChart height=260
function SVGAreaChart() {
  const ML = 38, MR = 8, MT = 8, MB = 24;
  const VW = 800, VH = 230;
  const IW = VW - ML - MR, IH = VH - MT - MB;

  const series = [
    { data: sentSeries,  color: '#3b82f6', id: 'svgac_s' },
    { data: openSeries,  color: '#60a5fa', id: 'svgac_o' },
    { data: replySeries, color: '#0d7d0e', id: 'svgac_r' },
  ];
  const maxVal = Math.max(...sentSeries, 1);

  const pts = (data) => data.map((v, i) => ({
    x: ML + (i / (data.length - 1)) * IW,
    y: MT + (1 - v / maxVal) * IH,
  }));

  const linePath = (p) => {
    let d = `M${p[0].x},${p[0].y}`;
    for (let i = 1; i < p.length; i++) {
      const cx = (p[i-1].x + p[i].x) / 2;
      d += ` C${cx},${p[i-1].y},${cx},${p[i].y},${p[i].x},${p[i].y}`;
    }
    return d;
  };

  const areaPath = (p) => {
    const l = linePath(p);
    return `${l} L${p[p.length-1].x},${MT+IH} L${p[0].x},${MT+IH} Z`;
  };

  // y-axis ticks - format to avoid duplicate labels
  const yTicks = [0, 0.25, 0.5, 0.75, 1].map(f => ({
    y: MT + (1 - f) * IH,
    label: f === 0 ? '0' : (() => {
      const v = maxVal * f;
      return v >= 1000 ? `${+(v / 1000).toFixed(1)}k` : `${Math.round(v)}`;
    })(),
  }));

  // x-axis: ~8 evenly spaced month labels
  const xLabels = ['Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar'];
  const xTicks = xLabels.map((l, i) => ({
    x: ML + (i / (xLabels.length - 1)) * IW,
    label: l,
  }));

  return (
    // No fixed height - lets the SVG scale proportionally to container width
    <svg viewBox={`0 0 ${VW} ${VH}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
      <defs>
        {series.map(s => (
          <linearGradient key={s.id} id={s.id} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={s.color} stopOpacity="0.08"/>
            <stop offset="95%" stopColor={s.color} stopOpacity="0"/>
          </linearGradient>
        ))}
      </defs>

      {/* Horizontal grid lines */}
      {yTicks.map((t, i) => (
        <g key={i}>
          <line x1={ML} y1={t.y} x2={VW - MR} y2={t.y} stroke="#e5e7eb" strokeWidth="1"/>
          <text x={ML - 5} y={t.y + 4} textAnchor="end" fill="#9ca3af" fontSize="11">{t.label}</text>
        </g>
      ))}

      {/* Area fills */}
      {series.map(s => (
        <path key={`a${s.id}`} d={areaPath(pts(s.data))} fill={`url(#${s.id})`}/>
      ))}

      {/* Lines */}
      {series.map(s => (
        <path key={`l${s.id}`} d={linePath(pts(s.data))} fill="none" stroke={s.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      ))}

      {/* X-axis labels */}
      {xTicks.map((t, i) => (
        <text key={i} x={t.x} y={VH - 5} textAnchor="middle" fill="#9ca3af" fontSize="11">{t.label}</text>
      ))}
    </svg>
  );
}

function AnalyticsMockup() {
  const metrics = [
    { label: 'Emails sent',       value: '14,044',  sub: '61.4% open rate',           spark: sentSeries,                                 color: '#3b82f6' },
    { label: 'Prospects reached', value: '8,620',   sub: '4.2% click rate',           spark: openSeries,                                 color: '#3b82f6' },
    { label: 'Reply rate',        value: '8.3%',    sub: '1,166 replies',             spark: replySeries,                                color: '#0d7d0e' },
    { label: 'Positive replies',  value: '38.4%',   sub: '448 of 1,166 replies',      spark: replySeries.map(v => Math.round(v * 0.384)), color: '#10b981' },
    { label: 'Bounce rate',       value: '1.9%',    sub: '175 soft · 92 hard',        spark: bounceSeries,                               color: '#9ca3af' },
  ];

  const chartLegend = [
    { label: 'Sent',    color: '#3b82f6', dim: false },
    { label: 'Opens',   color: '#60a5fa', dim: false },
    { label: 'Clicks',  color: '#8b5cf6', dim: true  },
    { label: 'Replies', color: '#0d7d0e', dim: false },
    { label: 'Bounces', color: '#cd3d3d', dim: true  },
  ];

  return (
    <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
      <PageHeader page="Analytics" />

        <div className="flex-1 flex flex-col gap-4 px-6 pt-4 pb-4 overflow-auto">
          {/* Title row */}
          <div className="flex items-center justify-between flex-shrink-0">
            <h2 className="text-2xl font-semibold text-gray-900">Analytics</h2>
            <button className="inline-flex items-center gap-1.5 h-8 px-2.5 rounded-lg border border-gray-200 bg-white text-[13px] font-medium text-gray-700 hover:bg-gray-50 shadow-sm">
              <Filter size={14} className="text-gray-500" />
              Filters
            </button>
          </div>

          {/* 5 metric cards */}
          <div className="grid grid-cols-5 gap-px bg-gray-200 rounded-xl overflow-hidden border border-gray-100 shadow-sm flex-shrink-0">
            {metrics.map((m, i) => (
              <div key={i} className="bg-white p-5 flex flex-col gap-3">
                <span className="text-[12.5px] font-medium text-gray-500">{m.label}</span>
                <div className="flex items-end justify-between gap-2">
                  <div>
                    <div className="text-[28px] font-semibold tracking-[-0.02em] leading-none text-gray-900">{m.value}</div>
                    <div className="text-[11.5px] text-gray-400 mt-1">{m.sub}</div>
                  </div>
                  <MiniChart data={m.spark} color={m.color} idx={i} />
                </div>
              </div>
            ))}
          </div>

          {/* Activity chart */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm flex-shrink-0">
            <div className="flex items-center justify-between px-5 pt-5 pb-4">
              <span className="text-[16px] font-semibold text-gray-900">Activity</span>
              <div className="flex items-center gap-4">
                {chartLegend.map((l) => (
                  <span key={l.label} className={`flex items-center gap-1.5 text-[12px] transition-opacity ${l.dim ? 'opacity-25' : 'opacity-100'}`}>
                    <span className="w-[7px] h-[3px] rounded-full" style={{ backgroundColor: l.color }} />
                    <span className="text-gray-500">{l.label}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="px-5 pb-3">
              <SVGAreaChart />
            </div>
          </div>

          {/* Campaign stats table */}
          <div className="w-full min-w-0 flex flex-col bg-white rounded-lg border-[0.5px] border-[#E3E3E3] shadow-sm flex-shrink-0">
            <div className="relative overflow-auto">
              <table className="w-full caption-bottom border-collapse text-sm" cellSpacing="0" cellPadding="0">
                <thead className="sticky top-0 z-[5] bg-white">
                  <tr className="bg-[#FDFDFD]" style={{ borderBottom: '1px solid #E3E3E3' }}>
                    <th className="text-left whitespace-nowrap border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, minWidth: 220 }}>
                      <div className="flex h-11 items-center pl-4 pr-3">
                        <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Campaign</span>
                      </div>
                    </th>
                    <th className="text-center whitespace-nowrap border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, width: 100 }}>
                      <div className="flex h-11 items-center justify-center px-3">
                        <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Status</span>
                      </div>
                    </th>
                    <th className="text-center whitespace-nowrap border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, width: 90 }}>
                      <div className="flex h-11 items-center justify-center px-3 gap-1.5">
                        <Mail size={13} className="text-gray-500" />
                        <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Sent</span>
                      </div>
                    </th>
                    <th className="text-center whitespace-nowrap border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, width: 110 }}>
                      <div className="flex h-11 items-center justify-center px-3 gap-1.5">
                        <Eye size={13} className="text-gray-500" />
                        <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Opened</span>
                      </div>
                    </th>
                    <th className="text-center whitespace-nowrap border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, width: 110 }}>
                      <div className="flex h-11 items-center justify-center px-3 gap-1.5">
                        <MessageSquare size={13} className="text-gray-500" />
                        <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Replied</span>
                      </div>
                    </th>
                    <th className="text-center whitespace-nowrap border-r-[0.5px] border-r-[#E3E3E3]" style={{ padding: 0, width: 110 }}>
                      <div className="flex h-11 items-center justify-center px-3 gap-1.5">
                        <ThumbsUp size={13} className="text-gray-500" />
                        <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Positive</span>
                      </div>
                    </th>
                    <th className="text-center whitespace-nowrap" style={{ padding: 0, width: 100 }}>
                      <div className="flex h-11 items-center justify-center px-3">
                        <span className="text-xs font-medium text-gray-600 uppercase tracking-wider">Bounced</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {campaignRows.map((c, i) => (
                    <tr key={i} className="cursor-pointer hover:bg-[#F9FAFB]" style={{ borderBottom: '0.5px solid #E3E3E3' }}>
                      <td className="border-r-[0.5px] border-r-[#E3E3E3] whitespace-nowrap" style={{ padding: 0 }}>
                        <div className="flex h-11 items-center pl-4 pr-3">
                          <span className="text-sm font-medium text-gray-900 truncate max-w-[200px]">{c.name}</span>
                        </div>
                      </td>
                      <td className="border-r-[0.5px] border-r-[#E3E3E3] whitespace-nowrap" style={{ padding: 0 }}>
                        <div className="flex h-11 items-center justify-center px-3">
                          <StatusBadge status={c.status} />
                        </div>
                      </td>
                      <td className="border-r-[0.5px] border-r-[#E3E3E3] whitespace-nowrap" style={{ padding: 0 }}>
                        <div className="flex h-11 items-center justify-center px-3">
                          <span className="text-sm text-gray-900">{c.sent ? c.sent.toLocaleString() : '-'}</span>
                        </div>
                      </td>
                      <td className="border-r-[0.5px] border-r-[#E3E3E3] whitespace-nowrap" style={{ padding: 0 }}>
                        <div className="flex h-11 items-center justify-center px-3 gap-1.5">
                          {c.openPct ? (
                            <><span className="text-sm text-gray-900">{c.opened.toLocaleString()}</span><span className="text-xs text-gray-500">({c.openPct}%)</span></>
                          ) : <span className="text-xs text-gray-400">-</span>}
                        </div>
                      </td>
                      <td className="border-r-[0.5px] border-r-[#E3E3E3] whitespace-nowrap" style={{ padding: 0 }}>
                        <div className="flex h-11 items-center justify-center px-3 gap-1.5">
                          {c.replyPct ? (
                            <><span className="text-sm text-gray-900">{c.replied}</span><span className="text-xs text-gray-500">({c.replyPct}%)</span></>
                          ) : <span className="text-xs text-gray-400">-</span>}
                        </div>
                      </td>
                      <td className="border-r-[0.5px] border-r-[#E3E3E3] whitespace-nowrap" style={{ padding: 0 }}>
                        <div className="flex h-11 items-center justify-center px-3 gap-1.5">
                          {c.posPct ? (
                            <><span className="text-sm text-gray-900">{c.positive}</span><span className="text-xs text-gray-500">({c.posPct}%)</span></>
                          ) : <span className="text-xs text-gray-400">-</span>}
                        </div>
                      </td>
                      <td style={{ padding: 0 }}>
                        <div className="flex h-11 items-center justify-center px-3 gap-1.5">
                          {c.bouncePct ? (
                            <>
                              <span className={`text-sm ${parseFloat(c.bouncePct) > 3 ? 'text-red-600' : 'text-gray-900'}`}>{c.bounced}</span>
                              <span className={`text-xs ${parseFloat(c.bouncePct) > 3 ? 'text-red-500' : 'text-gray-500'}`}>({c.bouncePct}%)</span>
                            </>
                          ) : <span className="text-xs text-gray-400">-</span>}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
  );
}

// ── Dialer ─────────────────────────────────────────────────────────────────────
const keypadKeys = [
  { d: '1', l: '' }, { d: '2', l: 'ABC' }, { d: '3', l: 'DEF' },
  { d: '4', l: 'GHI' }, { d: '5', l: 'JKL' }, { d: '6', l: 'MNO' },
  { d: '7', l: 'PQRS' }, { d: '8', l: 'TUV' }, { d: '9', l: 'WXYZ' },
  { d: '*', l: '' }, { d: '0', l: '+' }, { d: '#', l: '' },
];

const dialerFolders = [
  { name: 'SaaS Prospects', count: 120 },
  { name: 'Founders',       count: 48  },
  { name: 'Agency Owners',  count: 79  },
];

const dialerLineIntel = [
  { key: 'live',      label: 'Live Answer', color: 'bg-green-100 text-green-700',   count: 82 },
  { key: 'voicemail', label: 'Voicemail',   color: 'bg-purple-100 text-purple-700', count: 65 },
  { key: 'no_answer', label: 'No Answer',   color: 'bg-gray-100 text-gray-600',     count: 38 },
];

function ChevronRight() {
  return (
    <svg width="10" height="10" fill="none" stroke="currentColor" viewBox="0 0 12 12" strokeWidth="1.5">
      <path d="M4.5 2.5l3 3-3 3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function DialerMockup() {
  return (
    <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

      {/* Dialer-specific header with Credits + Focus + History */}
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b border-gray-200/60 bg-white">
          <div className="flex items-center gap-2 px-4">
            <button aria-label="Toggle menu" className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors -ml-1">
              <HamburgerIcon />
            </button>
            <div className="h-4 w-px bg-gray-200 mx-0.5" />
            <nav className="flex items-center gap-1.5">
              <span className="text-gray-500 text-[13px]">Dashboard</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-gray-300">
                <path d="M4.5 2.5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[13px] font-medium text-gray-900">Dialer</span>
            </nav>
          </div>
          <div className="flex items-center gap-2 px-4">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg">
              <span className="text-gray-500 text-xs">Credits:</span>
              <span className="font-medium text-gray-900 text-sm">$12.45</span>
            </div>
            <button className="h-9 px-3 text-xs font-medium text-white bg-blue-600 rounded-lg flex items-center gap-2">
              Focus
              <kbd className="px-1.5 py-0.5 text-[10px] rounded border bg-white/10 border-white/20 text-white/80">F</kbd>
            </button>
            <button className="h-9 px-3 text-xs font-medium rounded-lg flex items-center gap-2 border text-gray-600 bg-white border-gray-200">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>
              </svg>
              History
              <kbd className="px-1.5 py-0.5 text-[10px] rounded border bg-gray-50 border-gray-200 text-gray-500">H</kbd>
            </button>
          </div>
        </header>

        {/* 3-panel body */}
        <div className="flex-1 flex overflow-hidden">

          {/* ── Queue panel ── */}
          <div className="w-[240px] border-r border-gray-200 flex flex-col bg-white shrink-0">
            {/* Panel header */}
            <div className="h-11 px-3 flex items-center justify-between border-b border-gray-100 flex-shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="text-[14px] font-medium text-gray-900">Leads</span>
                <span className="text-xs text-gray-400">247</span>
              </div>
              <div className="flex items-center gap-1">
                <button className="h-6 w-6 rounded hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
                  <Filter size={13} />
                </button>
                <button className="h-7 px-2 rounded-md flex items-center gap-1 text-[11px] font-medium border border-gray-200 bg-white text-gray-700 hover:bg-gray-50">
                  Actions
                  <ChevronDown size={10} className="text-gray-400" />
                </button>
                <button className="h-6 w-6 rounded hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
                  <Plus size={13} strokeWidth={2.5} />
                </button>
              </div>
            </div>
            {/* Search */}
            <div className="px-3 py-2 border-b border-gray-100 flex-shrink-0">
              <div className="relative">
                <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <div className="w-full h-8 pl-7 pr-7 bg-gray-50 rounded-md flex items-center">
                  <span className="text-sm text-gray-400 select-none">Search leads...</span>
                </div>
                <span className="absolute right-2.5 top-1/2 -translate-y-1/2 px-1 py-0.5 text-[10px] rounded border bg-gray-100 border-gray-200 text-gray-400">/</span>
              </div>
            </div>
            {/* Folder list */}
            <div className="flex-1 overflow-auto">
              {/* All Leads */}
              <div className="flex items-center hover:bg-gray-50 cursor-pointer px-3 py-2.5 border-b border-gray-100 transition-colors">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <Users size={14} className="text-gray-400 shrink-0" />
                  <span className="text-xs font-medium text-gray-900">All Leads</span>
                </div>
                <div className="flex items-center gap-1.5 shrink-0 text-gray-300">
                  <span className="text-[10px] text-gray-400">247</span>
                  <ChevronRight />
                </div>
              </div>
              {/* Tag Folders */}
              <div className="px-3 py-1.5 bg-gray-50/50 border-b border-gray-100">
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Folders</span>
              </div>
              {dialerFolders.map(f => (
                <div key={f.name} className="flex items-center hover:bg-gray-50 cursor-pointer transition-colors">
                  <div className="flex-1 min-w-0 px-3 py-2 flex items-center gap-2">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="text-gray-400 shrink-0">
                      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-xs font-medium text-gray-700 truncate">{f.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5 pr-3 shrink-0 text-gray-300">
                    <span className="text-[10px] text-gray-400">{f.count}</span>
                    <ChevronRight />
                  </div>
                </div>
              ))}
              {/* Line Intelligence */}
              <div className="px-3 py-1.5 bg-gray-50/50 border-b border-gray-100">
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Line Intelligence</span>
              </div>
              {dialerLineIntel.map(r => (
                <div key={r.key} className="flex items-center hover:bg-gray-50 cursor-pointer transition-colors">
                  <div className="flex-1 min-w-0 px-3 py-2">
                    <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${r.color}`}>{r.label}</span>
                  </div>
                  <div className="flex items-center gap-1.5 pr-3 shrink-0 text-gray-300">
                    <span className="text-[10px] text-gray-400">{r.count}</span>
                    <ChevronRight />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Center dialer ── */}
          <div id="dialer-center" className="flex-1 flex flex-col items-center justify-center bg-white overflow-hidden gap-0">
            {/* Phone selector badge */}
            <div className="mb-6 flex items-center gap-2">
              <div className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-full shadow-sm text-[14px] font-medium text-gray-700">
                <span>🇺🇸</span>
                <span>+1 (628) 555-0190</span>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shrink-0" />
              </div>
            </div>

            {/* Number display */}
            <div className="mb-5 text-center w-full max-w-[360px] px-4">
              <div className="flex items-center justify-center h-16">
                <span className="text-[42px] font-extralight text-gray-900 tracking-tight select-none">(415) 555-0182</span>
              </div>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              <div className="flex items-center justify-center gap-1.5 text-sm text-gray-500 mt-2.5 h-5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2" strokeLinecap="round"/>
                </svg>
                <span>2:34 PM PST</span>
              </div>
            </div>

            {/* Keypad */}
            <div className="grid grid-cols-3 gap-3 mb-7">
              {keypadKeys.map(({ d, l }) => (
                <button
                  key={d}
                  className="h-14 w-14 rounded-full bg-gray-100 hover:bg-gray-200 flex flex-col items-center justify-center transition-colors"
                >
                  <span className="text-[24px] font-normal text-gray-900 leading-none">{d}</span>
                  {l && <span className="text-[8px] text-gray-400 tracking-[0.15em] mt-0.5">{l}</span>}
                </button>
              ))}
            </div>

            {/* Call button */}
            <div className="flex flex-col items-center gap-2">
              <button className="h-16 w-16 rounded-full bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg transition-colors">
                <Phone size={26} strokeWidth={2.5} />
              </button>
              <kbd className="px-2 py-0.5 text-[10px] rounded border bg-gray-100 border-gray-200 text-gray-400">space</kbd>
            </div>
          </div>

        </div>
    </div>
  );
}

// ── Lead Finder ────────────────────────────────────────────────────────────────
const finderLeads = [
  { name: 'Sarah Chen',       title: 'VP of Sales',    company: 'Notion',   size: '501–1K',  location: 'San Francisco, CA', email: 'sarah.chen@notion.so',  found: true  },
  { name: 'Marcus Johnson',   title: 'VP of Sales',    company: 'Linear',   size: '51–200',  location: 'New York, NY',       email: 'marcus.j@linear.app',   found: true  },
  { name: 'Emily Rodriguez',  title: 'Head of Growth', company: 'Stripe',   size: '1K–5K',   location: 'San Francisco, CA', email: 'emily.r@stripe.com',    found: true  },
  { name: 'David Kim',        title: 'VP of Sales',    company: 'Vercel',   size: '51–200',  location: 'New York, NY',       email: 'd.kim@vercel.com',      found: false },
  { name: 'Priya Patel',      title: 'Head of Growth', company: 'Figma',    size: '501–1K',  location: 'San Francisco, CA', email: 'priya.p@figma.io',      found: false },
  { name: 'James Wilson',     title: 'VP of Sales',    company: 'Airtable', size: '51–200',  location: 'San Francisco, CA', email: 'j.wilson@airtable.com', found: false },
  { name: 'Aisha Thompson',   title: 'Head of Growth', company: 'Loom',     size: '11–50',   location: 'Los Angeles, CA',   email: 'a.thompson@loom.com',   found: false },
  { name: 'Ryan Park',        title: 'VP of Sales',    company: 'Segment',  size: '201–500', location: 'Seattle, WA',        email: 'ryan.park@segment.io',  found: false },
];

const finderFilterSections = [
  { key: 'industry',   label: 'Industry'        },
  { key: 'linkedin',   label: 'LinkedIn'        },
  { key: 'techstack',  label: 'Tech Stack'      },
  { key: 'funding',    label: 'Funding'         },
  { key: 'hiring',     label: 'Hiring'          },
];

function FinderFilterChip({ label }) {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-blue-50 text-blue-700 border border-blue-100">
      {label}
      <svg width="8" height="8" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" className="cursor-pointer">
        <path d="M2 2l6 6M8 2L2 8" strokeLinecap="round"/>
      </svg>
    </span>
  );
}

function FinderMockup() {
  return (
    <div className="flex-1 flex bg-gray-50 min-w-0 overflow-hidden">

        {/* ── Left filter panel ── */}
        <div className="w-[260px] bg-white border-r border-gray-200 flex flex-col flex-shrink-0 overflow-hidden">

          {/* Panel header */}
          <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2">
              <Filter size={14} className="text-gray-500" />
              <h2 className="text-sm font-semibold text-gray-900">Filters</h2>
            </div>
            <span className="inline-flex items-center justify-center h-5 min-w-5 px-1.5 rounded-full text-[10px] font-semibold bg-blue-100 text-blue-700">3</span>
          </div>

          {/* Domain input */}
          <div className="px-3 py-3 border-b border-gray-100 flex gap-2 flex-shrink-0">
            <div className="flex-1 flex items-center gap-2 px-2.5 py-1.5 bg-gray-50 border border-gray-200 rounded-lg min-w-0">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="text-gray-400 shrink-0">
                <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" strokeLinecap="round"/>
              </svg>
              <span className="text-[11px] text-gray-400 truncate">Auto-fill from website...</span>
            </div>
            <button className="px-2.5 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-[11px] font-medium rounded-lg flex-shrink-0 transition-colors">Find</button>
          </div>

          {/* Filter sections - scrollable */}
          <div className="flex-1 overflow-y-auto">

            {/* Person section - expanded */}
            <div className="border-b border-gray-100">
              <button className="flex items-center w-full px-4 py-2.5 gap-2 hover:bg-gray-50">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="text-gray-500 shrink-0">
                  <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round"/>
                </svg>
                <span className="flex-1 text-left text-[11px] font-semibold uppercase tracking-wider text-gray-600">Person</span>
                <span className="inline-flex items-center justify-center h-4 min-w-4 px-1 rounded-full text-[9px] font-semibold bg-blue-100 text-blue-700">4</span>
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400 rotate-90">
                  <path d="M4.5 2.5l3 3-3 3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="px-4 pb-3 space-y-2">
                <div>
                  <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wide mb-1.5">Job Title</p>
                  <div className="flex flex-wrap gap-1">
                    <FinderFilterChip label="VP of Sales" />
                    <FinderFilterChip label="Head of Growth" />
                  </div>
                </div>
                <div>
                  <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wide mb-1.5">Seniority</p>
                  <div className="flex flex-wrap gap-1">
                    <FinderFilterChip label="VP" />
                    <FinderFilterChip label="C-Level" />
                  </div>
                </div>
              </div>
            </div>

            {/* Location section - expanded */}
            <div className="border-b border-gray-100">
              <button className="flex items-center w-full px-4 py-2.5 gap-2 hover:bg-gray-50">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="text-gray-500 shrink-0">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
                </svg>
                <span className="flex-1 text-left text-[11px] font-semibold uppercase tracking-wider text-gray-600">Location</span>
                <span className="inline-flex items-center justify-center h-4 min-w-4 px-1 rounded-full text-[9px] font-semibold bg-blue-100 text-blue-700">1</span>
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400 rotate-90">
                  <path d="M4.5 2.5l3 3-3 3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="px-4 pb-3">
                <div className="flex flex-wrap gap-1">
                  <FinderFilterChip label="United States" />
                </div>
              </div>
            </div>

            {/* Company section - expanded */}
            <div className="border-b border-gray-100">
              <button className="flex items-center w-full px-4 py-2.5 gap-2 hover:bg-gray-50">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="text-gray-500 shrink-0">
                  <rect x="2" y="7" width="20" height="14" rx="1"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
                </svg>
                <span className="flex-1 text-left text-[11px] font-semibold uppercase tracking-wider text-gray-600">Company</span>
                <span className="inline-flex items-center justify-center h-4 min-w-4 px-1 rounded-full text-[9px] font-semibold bg-blue-100 text-blue-700">2</span>
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400 rotate-90">
                  <path d="M4.5 2.5l3 3-3 3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="px-4 pb-3">
                <p className="text-[10px] font-medium text-gray-400 uppercase tracking-wide mb-1.5">Company Size</p>
                <div className="flex flex-wrap gap-1">
                  <FinderFilterChip label="11–50" />
                  <FinderFilterChip label="51–200" />
                </div>
              </div>
            </div>

            {/* Collapsed sections */}
            {finderFilterSections.map(({ key, label }) => (
              <div key={key} className="border-b border-gray-100">
                <button className="flex items-center w-full px-4 py-2.5 gap-2 hover:bg-gray-50">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400 shrink-0">
                    <circle cx="6" cy="6" r="5"/>
                  </svg>
                  <span className="flex-1 text-left text-[11px] font-semibold uppercase tracking-wider text-gray-600">{label}</span>
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400">
                    <path d="M4.5 2.5l3 3-3 3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Footer actions */}
          <div className="border-t border-gray-100 px-3 py-3 flex-shrink-0 space-y-2">
            <button className="w-full flex items-center justify-center gap-2 py-2 bg-blue-600 hover:bg-blue-700 text-white text-[12px] font-medium rounded-lg transition-colors">
              <Search size={13} />
              Search Leads
            </button>
            <button className="w-full text-[11px] text-gray-400 hover:text-gray-600 transition-colors">Clear all filters</button>
          </div>
        </div>

        {/* ── Right results panel ── */}
        <div className="flex-1 flex flex-col bg-white overflow-hidden">

          {/* Results header */}
          <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between flex-shrink-0">
            <span className="text-sm font-semibold text-gray-900">4,821 <span className="font-normal text-gray-500">leads</span></span>
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 bg-white hover:bg-gray-50 rounded-lg text-[12px] font-medium text-gray-700 transition-colors">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
                  <line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>
                </svg>
                Find &amp; Import
              </button>
              <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-[12px] font-medium transition-colors">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Bulk Export
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="flex-1 overflow-auto">
            <table className="w-full text-sm border-collapse" cellSpacing="0" cellPadding="0">
              <thead className="bg-gray-50 sticky top-0 z-10">
                <tr style={{ borderBottom: '1px solid #E5E7EB' }}>
                  <th className="w-9 pl-4 pr-2 py-2.5">
                    <Checkbox />
                  </th>
                  <th className="text-left px-3 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-gray-500 whitespace-nowrap">Person</th>
                  <th className="text-left px-3 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-gray-500 whitespace-nowrap">Company</th>
                  <th className="text-left px-3 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-gray-500 whitespace-nowrap">Location</th>
                  <th className="text-left px-3 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-gray-500 whitespace-nowrap">Email</th>
                </tr>
              </thead>
              <tbody>
                {finderLeads.map((lead, i) => {
                  const initials = lead.name.split(' ').map(p => p[0]).join('').slice(0,2);
                  const bgColors = ['from-blue-400 to-blue-600','from-violet-400 to-violet-600','from-emerald-400 to-emerald-600','from-rose-400 to-rose-500','from-amber-400 to-amber-600','from-cyan-400 to-cyan-600','from-pink-400 to-pink-600','from-indigo-400 to-indigo-600'];
                  const avatarBg = bgColors[i % bgColors.length];
                  return (
                    <tr key={i} className="hover:bg-gray-50 cursor-pointer" style={{ borderBottom: '0.5px solid #E5E7EB' }}>
                      <td className="pl-4 pr-2 py-2.5 w-9">
                        <Checkbox />
                      </td>
                      {/* Person */}
                      <td className="px-3 py-2">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${avatarBg} flex items-center justify-center shrink-0`}>
                            <span className="text-[10px] font-semibold text-white">{initials}</span>
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[12px] font-medium text-gray-900 whitespace-nowrap">{lead.name}</span>
                              <svg width="11" height="11" viewBox="0 0 24 24" fill="#0077b5" className="shrink-0">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                              </svg>
                            </div>
                            <span className="text-[11px] text-gray-500 whitespace-nowrap">{lead.title}</span>
                          </div>
                        </div>
                      </td>
                      {/* Company */}
                      <td className="px-3 py-2">
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded bg-gray-100 flex items-center justify-center shrink-0">
                            <span className="text-[8px] font-bold text-gray-500">{lead.company[0]}</span>
                          </div>
                          <div className="min-w-0">
                            <div className="text-[12px] font-medium text-gray-900 whitespace-nowrap">{lead.company}</div>
                            <div className="text-[11px] text-gray-400 whitespace-nowrap">{lead.size}</div>
                          </div>
                        </div>
                      </td>
                      {/* Location */}
                      <td className="px-3 py-2">
                        <span className="text-[12px] text-gray-600 whitespace-nowrap">{lead.location}</span>
                      </td>
                      {/* Email */}
                      <td className="px-3 py-2">
                        {lead.found ? (
                          <div className="flex items-center gap-1.5">
                            <Mail size={12} className="text-green-500 shrink-0" />
                            <span className="text-[11px] text-gray-700 font-mono whitespace-nowrap">{lead.email}</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5 select-none">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="text-gray-400 shrink-0">
                              <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round"/>
                            </svg>
                            <span className="text-[11px] text-gray-400 font-mono whitespace-nowrap" style={{ filter: 'blur(3px)', userSelect: 'none' }}>{lead.email}</span>
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination footer */}
          <div className="flex items-center justify-between px-4 py-2.5 border-t border-gray-200 flex-shrink-0">
            <span className="text-[12px] text-gray-500">Showing 1–8 of 4,821</span>
            <div className="flex items-center gap-1">
              <button className="h-7 w-7 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors">
                <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 12 12" strokeWidth="1.5"><path d="M7.5 2.5L3.5 6l4 3.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              {[1,2,3].map(n => (
                <button key={n} className={`h-7 w-7 flex items-center justify-center rounded text-[12px] font-medium transition-colors ${n === 1 ? 'bg-blue-600 text-white border border-blue-600' : 'border border-gray-200 text-gray-600 hover:bg-gray-50'}`}>{n}</button>
              ))}
              <button className="h-7 w-7 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors">
                <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 12 12" strokeWidth="1.5"><path d="M4.5 2.5L8.5 6l-4 3.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>
        </div>

    </div>
  );
}

// ── CRM ────────────────────────────────────────────────────────────────────────
const crmBoards = [
  {
    id: 'replied', name: 'Replied', color: '#10b981',
    leads: [
      { name: 'Marcus Chen',     email: 'marcus.chen@notion.so',  company: 'Notion',   campaign: 'SaaS VP Decision Makers', tags: ['SaaS', 'Hot'], status: 'replied', date: 'Jan 15', verified: true  },
      { name: 'Sarah Kim',       email: 'sarah.kim@stripe.com',   company: 'Stripe',   campaign: 'Series A Founders',       tags: ['Prospect'],   status: 'replied', date: 'Jan 14', verified: true  },
      { name: 'Tom Bradley',     email: 'tom.b@linear.app',       company: 'Linear',   campaign: 'Agency Owner Outreach',   tags: [],             status: 'replied', date: 'Jan 13', verified: false },
      { name: 'Emily Rodriguez', email: 'emily.r@segment.io',     company: 'Segment',  campaign: 'RevOps Teams Q1',         tags: ['RevOps'],     status: 'replied', date: 'Jan 12', verified: true  },
    ],
  },
  {
    id: 'interested', name: 'Interested', color: '#3b82f6',
    leads: [
      { name: 'David Wu',    email: 'david.wu@vercel.com',    company: 'Vercel',   campaign: 'SaaS VP Decision Makers', tags: [],         status: 'sent',    date: 'Jan 16', verified: true  },
      { name: 'Priya Patel', email: 'priya.p@figma.io',       company: 'Figma',    campaign: 'Enterprise IT Directors', tags: ['Design'], status: 'sent',    date: 'Jan 15', verified: true  },
      { name: 'James Wilson', email: 'james.w@airtable.com',  company: 'Airtable', campaign: 'Agency Owner Outreach',   tags: [],         status: 'sent',    date: 'Jan 14', verified: false },
    ],
  },
  {
    id: 'hot_lead', name: 'Hot Lead', color: '#f97316',
    leads: [
      { name: 'Alex Turner', email: 'alex.t@notion.so',    company: 'Notion', campaign: 'SaaS VP Decision Makers', tags: ['VIP'], status: 'replied', date: 'Jan 16', verified: true  },
      { name: 'Chris Park',  email: 'chris.p@linear.app',  company: 'Linear', campaign: 'Series A Founders',       tags: [],      status: 'sent',    date: 'Jan 15', verified: false },
    ],
  },
  {
    id: 'demo_booked', name: 'Demo Booked', color: '#a855f7',
    leads: [
      { name: 'Jessica Lee', email: 'jessica.l@stripe.com', company: 'Stripe', campaign: 'SaaS VP Decision Makers', tags: ['Hot', 'VIP'], status: 'replied', date: 'Jan 17', verified: true },
    ],
  },
];

function CRMCard({ lead }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-3 cursor-move hover:border-gray-300 transition-colors mb-3">
      {/* Header */}
      <div className="flex items-start justify-between mb-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-[13px] font-medium text-gray-900 truncate">{lead.name}</span>
            {lead.verified && (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="#22c55e" className="shrink-0">
                <circle cx="12" cy="12" r="10"/><path d="M8 12l2.5 2.5L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
          <p className="text-[11px] text-gray-400 truncate">{lead.email}</p>
        </div>
      </div>
      {/* Company */}
      <div className="flex items-center gap-1.5 mb-1.5">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="text-gray-400 shrink-0">
          <rect x="2" y="7" width="20" height="14" rx="1"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
        </svg>
        <span className="text-[11px] text-gray-600">{lead.company}</span>
      </div>
      {/* Campaign */}
      <div className="flex items-center gap-1.5 mb-1.5">
        <Mail size={12} className="text-gray-400 shrink-0" />
        <span className="text-[11px] text-gray-600 truncate">{lead.campaign}</span>
      </div>
      {/* Tags */}
      {lead.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-2">
          {lead.tags.map((tag, i) => (
            <span key={i} className="px-1.5 py-0.5 text-[10px] font-medium text-gray-600 bg-gray-100 rounded">{tag}</span>
          ))}
        </div>
      )}
      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
        <span className={`text-[11px] font-medium ${lead.status === 'replied' ? 'text-green-600' : 'text-blue-600'}`}>
          {lead.status === 'replied' ? 'Replied' : 'Email Sent'}
        </span>
        <div className="flex items-center gap-1 text-[10px] text-gray-400">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2" strokeLinecap="round"/>
          </svg>
          {lead.date}
        </div>
      </div>
    </div>
  );
}

function CRMMockup() {
  return (
    <div className="flex-1 flex flex-col min-w-0 overflow-hidden">

      {/* CRM Header - full-width with action buttons on right */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-gray-200/60 bg-white px-5">
          <div className="flex items-center gap-2">
            <button aria-label="Toggle menu" className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors">
              <HamburgerIcon />
            </button>
            <div className="h-4 w-px bg-gray-200 mx-0.5" />
            <nav className="flex items-center gap-1.5">
              <span className="text-gray-500 text-[13px]">Dashboard</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-gray-300">
                <path d="M4.5 2.5l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[13px] font-medium text-gray-900">CRM</span>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center justify-center h-8 gap-1.5 px-3 text-[13px] font-medium text-gray-700 bg-white rounded-lg" style={{ border: '0.5px solid #E3E3E3' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="text-gray-500">
                <path d="M3 6h18M7 12h10M11 18h2" strokeLinecap="round"/>
              </svg>
              Campaigns
            </button>
            <button className="inline-flex items-center justify-center h-8 gap-1.5 px-3 text-[13px] font-medium text-gray-700 bg-white rounded-lg" style={{ border: '0.5px solid #E3E3E3' }}>
              <Filter size={13} className="text-gray-500" />
              Filter Boards
            </button>
            <button className="inline-flex items-center justify-center h-8 gap-1.5 px-3 text-[13px] font-medium text-white bg-blue-600 rounded-lg shadow-sm">
              <Plus size={13} strokeWidth={2.5} />
              Add Board
            </button>
          </div>
        </header>

        {/* Kanban area */}
        <div className="flex-1 overflow-x-auto overflow-y-hidden bg-white">
          <div className="flex gap-3 px-5 py-4 h-full" style={{ minWidth: 'max-content' }}>
            {crmBoards.map((board) => (
              <div key={board.id} className="flex-shrink-0 w-72 flex flex-col h-full">
                <div className="bg-gray-50 rounded-lg p-3 flex flex-col h-full">
                  {/* Column header */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: board.color }} />
                    <h3 className="text-[13px] font-medium text-gray-900 flex-1">{board.name}</h3>
                    <span className="text-[11px] text-gray-500 bg-gray-200 px-1.5 py-0.5 rounded font-medium">{board.leads.length}</span>
                  </div>
                  {/* Cards */}
                  <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: 'none' }}>
                    {board.leads.map((lead, i) => <CRMCard key={i} lead={lead} />)}
                  </div>
                  {/* Add card button */}
                  <button className="flex items-center gap-2 w-full px-2 py-2 rounded-md text-[12px] text-gray-400 hover:bg-gray-200 hover:text-gray-600 transition-colors mt-1">
                    <Plus size={13} strokeWidth={2} />
                    Add lead
                  </button>
                </div>
              </div>
            ))}

            {/* Add board column */}
            <div className="flex-shrink-0 w-64 flex items-start pt-0">
              <button className="flex items-center gap-2 w-full px-4 py-3 rounded-lg border-2 border-dashed border-gray-300 text-[13px] text-gray-400 hover:border-gray-400 hover:text-gray-500 transition-colors">
                <Plus size={14} strokeWidth={2} />
                Add Board
              </button>
            </div>
          </div>
        </div>

    </div>
  );
}

// ── Main export ────────────────────────────────────────────────────────────────
const PLATFORM_TABS = ['campaigns', 'mailboxes', 'leads', 'analytics', 'finder', 'crm', 'inbox', 'dialer'];
const ROTATE_MS = 4000;

const platformMeta = [
  { id: 'campaigns', icon: Send,          label: 'Campaigns' },
  { id: 'mailboxes', icon: Mail,          label: 'Mailboxes' },
  { id: 'leads',     icon: Users,         label: 'Leads'     },
  { id: 'analytics', icon: TrendingUp,    label: 'Analytics' },
  { id: 'finder',    icon: Search,        label: 'Finder'    },
  { id: 'crm',       icon: LayoutGrid,    label: 'CRM'       },
  { id: 'inbox',     icon: MessageSquare, label: 'Inbox'     },
  { id: 'dialer',    icon: Phone,         label: 'Dialer'    },
];

const WINDOW_W = 1152; // native width of the window (max-w-6xl)
const WINDOW_H = 680;

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState('campaigns');
  const [autoKey, setAutoKey]     = useState(0);
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  const measure = useCallback(() => {
    if (!containerRef.current) return;
    const w = containerRef.current.offsetWidth;
    // On mobile, use a minimum scale of 0.65 so text stays readable (clips right edge)
    const raw = w / WINDOW_W;
    setScale(raw >= 1 ? 1 : Math.max(raw, 0.65));
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  // Auto-rotate - resets when autoKey changes (i.e. on manual click)
  useEffect(() => {
    const id = setInterval(() => {
      setActiveTab(cur => {
        const idx = PLATFORM_TABS.indexOf(cur);
        return PLATFORM_TABS[(idx + 1) % PLATFORM_TABS.length];
      });
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [autoKey]);

  const handlePillClick = (id) => {
    setActiveTab(id);
    setAutoKey(k => k + 1); // restart interval
  };

  return (
    <section className="pt-12 md:pt-24 pb-12 md:pb-16 px-4 md:px-8 bg-white relative" id="product">
      {/* Vertical guide lines */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="max-w-[80rem] h-full mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="mb-8 md:mb-10 grid lg:grid-cols-2  items-end">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 text-[15px] font-medium text-black">
              <div className="w-5 h-1 bg-[#2663eb] rounded-xl" />
              <span>the platform</span>
            </div>
            <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.1] text-black tracking-tight">
              Every tool your outbound team needs. One platform.
            </h2>
          </div>

        </div>

        {/* Clickable auto-rotating pills */}
        <div className="flex flex-wrap gap-2 mb-5">
          {platformMeta.map(({ id, icon: Icon, label }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                onClick={() => handlePillClick(id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-medium whitespace-nowrap border transition-[background-color,color,border-color] duration-200 ${
                  isActive
                    ? 'bg-[#2663eb] text-white border-transparent'
                    : 'bg-white border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700'
                }`}
              >
                <Icon size={13} strokeWidth={2} />
                {label}
              </button>
            );
          })}
        </div>

        {/* ── Window frame ── */}
        <style dangerouslySetInnerHTML={{ __html: `#product-window * { scrollbar-width: none; -ms-overflow-style: none; } #product-window *::-webkit-scrollbar { display: none; } @media (max-width: 767px) { #product-sidebar { display: none; } #dialer-center { margin-right: 26rem; } #product-window { pointer-events: none; } }` }} />
        <div ref={containerRef} className="w-full overflow-hidden rounded-2xl relative" style={{ height: WINDOW_H * scale }}>
          {scale < 1 && <div className="absolute inset-y-0 right-0 w-20 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />}
        <div id="product-window" className="rounded-2xl overflow-hidden shadow-none md:shadow-[0_8px_40px_rgba(0,0,0,0.10)] border border-gray-200" style={{ width: WINDOW_W, transform: `scale(${scale})`, transformOrigin: 'top left' }}>

          {/* Dashboard content */}
          <div className="h-[680px] overflow-hidden">
            <div style={{ transform: 'scale(0.88)', transformOrigin: 'top left', width: `${100/0.88}%`, height: `${680/0.88}px` }} className="flex h-full bg-white">
              <DashboardSidebar activePage={activeTab} />
              <div className="flex-1 relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    className="absolute inset-0 flex"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {activeTab === 'campaigns' && <CampaignsMockup />}
                    {activeTab === 'mailboxes' && <MailboxesMockup />}
                    {activeTab === 'leads'     && <LeadsMockup />}
                    {activeTab === 'analytics' && <AnalyticsMockup />}
                    {activeTab === 'finder'    && <FinderMockup />}
                    {activeTab === 'crm'       && <CRMMockup />}
                    {activeTab === 'inbox'     && <InboxMockup />}
                    {activeTab === 'dialer'    && <DialerMockup />}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

// Named exports for individual mockups (used by feature pages)
export {
  DashboardSidebar,
  PageHeader,
  CampaignsMockup,
  MailboxesMockup,
  LeadsMockup,
  AnalyticsMockup,
  FinderMockup,
  CRMMockup,
  InboxMockup,
  DialerMockup,
};
