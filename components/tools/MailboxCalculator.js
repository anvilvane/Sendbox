'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { ArrowRightIcon } from '@phosphor-icons/react';

/* ── Pricing & sizing model ──────────────────────────────────────────── */

const PRICING = {
  // Standard mailbox subscription: 10 slots included, $3.10 per mailbox/mo
  plan: { label: 'Standard', slots: 10, perMailbox: 3.1 },
  azureTenant: 30, // $ per Azure tenant / mo
  warmupPerMailbox: 3, // $ per mailbox / mo
  monitoringPerDomain: 3, // $ per domain / mo
  billingDiscount: { monthly: 0, quarterly: 0.1, annual: 0.2 },
  tld: { '.com': 12, '.co': 7, '.info': 3.5 }, // $ per domain / yr
  funnel: {
    meetingRate: 0.3, // share of positive replies that book
    positiveReplyRate: 0.015, // positive replies per email sent
    sendingDaysPerMonth: 22,
    defaultMeetings: 20,
    closeRate: 0.25, // share of meetings that close into a deal
    avgDealValue: 2000, // $ per closed deal
  },
  volumeQuoteMailboxes: 200,
  volumeQuoteTenants: 10,
};

const PROVIDERS = {
  google: { label: 'Google Workspace', billing: 'mailbox', block: 3, epd: 15, logo: '/icons/providers/google.png', color: '#2663eb', text: '#ffffff' },
  microsoft: { label: 'Microsoft 365', billing: 'mailbox', block: 3, epd: 5, logo: '/icons/providers/outlook.png', color: '#7ea2f2', text: '#0a0a0a' },
  azure: { label: 'Azure', billing: 'tenant', block: 50, epd: 3, logo: '/icons/providers/azure.png', color: '#c8d7fa', text: '#0a0a0a' },
};

const PROVIDER_KEYS = ['google', 'microsoft', 'azure'];
const CYCLES = ['monthly', 'quarterly', 'annual'];
const MIX_PRESETS = [
  { label: 'Google heavy', mix: { google: 70, microsoft: 30, azure: 0 } },
  { label: 'Balanced', mix: { google: 34, microsoft: 33, azure: 33 } },
  { label: 'Microsoft heavy', mix: { google: 30, microsoft: 70, azure: 0 } },
  { label: 'All Google', mix: { google: 100, microsoft: 0, azure: 0 } },
];

/* ── Engine (pure math, rounding only at the display boundary) ───────── */

// block = mailboxes per domain (or mailboxes per tenant for Azure)
// epd   = safe emails per day per mailbox
function sizeProvider(sends, provider, override) {
  const block = override && override.block != null ? override.block : provider.block;
  const epd = override && override.epd != null ? override.epd : provider.epd;
  if (!(sends > 0)) {
    return provider.billing === 'tenant'
      ? { sends: 0, mailboxes: 0, tenants: 0, units: 0, capacity: 0 }
      : { sends: 0, units: 0, mailboxes: 0, capacity: 0 };
  }
  if (provider.billing === 'tenant') {
    // Tenant billing (Azure): mailboxes exact, do NOT inflate to a full block.
    const mailboxes = Math.ceil(sends / epd);
    const tenants = Math.ceil(mailboxes / block);
    return { sends, mailboxes, tenants, units: tenants, capacity: mailboxes * epd };
  }
  // Mailbox billing (Google, Microsoft): whole domains, filled with mailboxes.
  const units = Math.ceil(sends / (block * epd)); // domains
  const mailboxes = units * block;
  return { sends, units, mailboxes, capacity: mailboxes * epd };
}

// Meetings goal -> required daily send target.
function reverseFunnel({ meetings, meetingRate, positiveReplyRate, sendingDays }) {
  const m = meetings || 0;
  const mr = meetingRate || 0;
  const pr = positiveReplyRate || 0;
  const days = sendingDays || 0;
  if (!(m > 0 && mr > 0 && pr > 0 && days > 0)) {
    return { valid: false, positiveRepliesNeeded: 0, emailsPerMonth: 0, dailyTarget: 0 };
  }
  const positiveRepliesNeeded = m / mr;
  const emailsPerMonth = positiveRepliesNeeded / pr;
  return { valid: true, positiveRepliesNeeded, emailsPerMonth, dailyTarget: emailsPerMonth / days };
}

// Daily volume -> expected monthly outcomes (replies, meetings, deals, revenue).
function forwardFunnel({ dailyTarget, sendingDays, positiveReplyRate, meetingRate, closeRate, avgDealValue }) {
  const dt = dailyTarget || 0;
  const days = sendingDays || 0;
  const pr = positiveReplyRate || 0;
  const mr = meetingRate || 0;
  const cr = closeRate || 0;
  const adv = avgDealValue || 0;
  if (!(dt > 0 && days > 0 && pr > 0 && mr > 0)) {
    return { valid: false, emailsPerMonth: 0, positiveReplies: 0, meetings: 0, deals: 0, revenue: 0 };
  }
  const emailsPerMonth = dt * days;
  const positiveReplies = emailsPerMonth * pr;
  const meetings = positiveReplies * mr;
  const deals = meetings * cr;
  return { valid: true, emailsPerMonth, positiveReplies, meetings, deals, revenue: deals * adv };
}

function calculate({ dailyTarget, mix, cycle, warmup, monitoring, tld, overrides }) {
  const t = dailyTarget || 0;
  const g = mix.google || 0;
  const ms = mix.microsoft || 0;
  const az = mix.azure || 0;
  const sum = g + ms + az;
  const valid = sum > 0 && t > 0;
  const fractions = {
    google: sum > 0 ? g / sum : 0,
    microsoft: sum > 0 ? ms / sum : 0,
    azure: sum > 0 ? az / sum : 0,
  };
  const sends = {
    google: valid ? t * fractions.google : 0,
    microsoft: valid ? t * fractions.microsoft : 0,
    azure: valid ? t * fractions.azure : 0,
  };
  const providers = {
    google: sizeProvider(sends.google, PROVIDERS.google, overrides.google),
    microsoft: sizeProvider(sends.microsoft, PROVIDERS.microsoft, overrides.microsoft),
    azure: sizeProvider(sends.azure, PROVIDERS.azure, overrides.azure),
  };
  // Per-mailbox subscription covers Google + Microsoft mailboxes
  const nStandard = providers.google.mailboxes + providers.microsoft.mailboxes;
  const planCost = nStandard <= 0 ? 0 : Math.max(PRICING.plan.slots, nStandard) * PRICING.plan.perMailbox;
  const azureCost = providers.azure.tenants * PRICING.azureTenant;
  const totalMailboxes = providers.google.mailboxes + providers.microsoft.mailboxes + providers.azure.mailboxes;
  const totalDomains = providers.google.units + providers.microsoft.units + providers.azure.units;
  const warmupCost = warmup ? totalMailboxes * PRICING.warmupPerMailbox : 0;
  const monitoringCost = monitoring ? totalDomains * PRICING.monitoringPerDomain : 0;
  const recurringFull = planCost + azureCost + warmupCost + monitoringCost;
  const discount = PRICING.billingDiscount[cycle || 'monthly'];
  const effMonthly = recurringFull * (1 - discount);
  const domainsAnnual = totalDomains * PRICING.tld[tld || '.com'];
  return {
    valid,
    mixOk: sum === 100,
    fractions,
    providers,
    nStandard,
    planCost,
    azureCost,
    totalMailboxes,
    totalDomains,
    warmupCost,
    monitoringCost,
    recurringFull,
    discount,
    effMonthly,
    domainsAnnual,
    firstYear: 12 * effMonthly + domainsAnnual,
    perMailbox: totalMailboxes > 0 ? effMonthly / totalMailboxes : 0,
  };
}

/* ── Formatting (the rounding boundary) ──────────────────────────────── */

const money = (v) => '$' + (v || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const count = (v) => Math.round(v || 0).toLocaleString('en-US');
const pct = (f) => Math.round(100 * (f || 0));

/* ── Small pieces ────────────────────────────────────────────────────── */

function Toggle({ label, sub, checked, onChange, last }) {
  return (
    <div className={`flex items-center justify-between gap-4 py-3 ${last ? '' : 'border-b border-gray-100'}`}>
      <div>
        <p className="text-sm font-medium text-black">{label}</p>
        <p className="text-xs text-[#9ca3af] mt-0.5">{sub}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={`Enable ${label} add-on`}
        onClick={() => onChange(!checked)}
        className={`relative inline-flex h-6 w-11 flex-none items-center rounded-full transition-colors ${checked ? 'bg-[#2663eb]' : 'bg-gray-200'}`}
      >
        <span className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform ${checked ? 'translate-x-[22px]' : 'translate-x-0.5'}`} />
      </button>
    </div>
  );
}

function FunnelStep({ v, k, emphasize }) {
  return (
    <span className="inline-flex flex-col">
      <span className={`font-semibold tabular-nums leading-tight ${emphasize ? 'text-lg text-[#2663eb]' : 'text-black'}`}>{v}</span>
      <span className="text-[0.65rem] text-[#6b7280]">{k}</span>
    </span>
  );
}

function Arrow() {
  return <span className="text-gray-300" aria-hidden="true">&rarr;</span>;
}

function ProviderStat({ k, v }) {
  return (
    <div className="flex items-center justify-between gap-2 py-0.5">
      <span className="text-xs text-[#9ca3af]">{k}</span>
      <span className="text-sm font-medium text-black tabular-nums">{v}</span>
    </div>
  );
}

function CostRow({ k, v }) {
  return (
    <div className="flex items-center justify-between gap-4 py-1.5 text-sm">
      <span className="text-[#6b7280]">{k}</span>
      <span className="tabular-nums font-medium text-black">{v}</span>
    </div>
  );
}

const inputCls = 'w-full py-2 px-3 rounded-lg border border-[#e5e5e5] text-sm sm:text-[15px] text-black placeholder:text-[#9ca3af] focus:outline-none transition-all tabular-nums';

/* ── Component ───────────────────────────────────────────────────────── */

export default function MailboxCalculator() {
  const [mode, setMode] = useState('forward');

  // Forward input is a monthly volume (converted to a daily basis for sizing).
  const [monthlyVolume, setMonthlyVolume] = useState(30000);

  // Reverse inputs (rates stored as fractions, shown as percentages).
  const [meetings, setMeetings] = useState(PRICING.funnel.defaultMeetings);
  const [meetingRate, setMeetingRate] = useState(PRICING.funnel.meetingRate);
  const [positiveReplyRate, setPositiveReplyRate] = useState(PRICING.funnel.positiveReplyRate);
  const [sendingDays, setSendingDays] = useState(PRICING.funnel.sendingDaysPerMonth);

  // Revenue assumptions power the optional ROI / cost-per-meeting outputs.
  const [closeRate, setCloseRate] = useState(PRICING.funnel.closeRate);
  const [avgDealValue, setAvgDealValue] = useState(PRICING.funnel.avgDealValue);
  const [revenueOpen, setRevenueOpen] = useState(false);

  const [mix, setMix] = useState({ google: 70, microsoft: 30, azure: 0 });
  const [cycle, setCycle] = useState('monthly');
  const [warmup, setWarmup] = useState(false);
  const [monitoring, setMonitoring] = useState(false);
  const [tld, setTld] = useState('.com');
  const [overrides, setOverrides] = useState(() => {
    const o = {};
    PROVIDER_KEYS.forEach((k) => { o[k] = { block: PROVIDERS[k].block, epd: PROVIDERS[k].epd }; });
    return o;
  });
  const [advancedOpen, setAdvancedOpen] = useState(false);

  // Reverse funnel: meetings goal -> required daily send target.
  const funnel = useMemo(
    () => reverseFunnel({ meetings, meetingRate, positiveReplyRate, sendingDays }),
    [meetings, meetingRate, positiveReplyRate, sendingDays]
  );

  // The daily target that drives all downstream sizing. In reverse mode it is
  // derived from the funnel; in forward mode the monthly volume is spread
  // over the editable sending-days assumption.
  const dailyTarget = mode === 'reverse' ? funnel.dailyTarget : monthlyVolume / sendingDays;

  const results = useMemo(
    () => calculate({ dailyTarget, mix, cycle, warmup, monitoring, tld, overrides }),
    [dailyTarget, mix, cycle, warmup, monitoring, tld, overrides]
  );

  // Forward funnel: project the sized volume into expected monthly outcomes.
  const outcomes = useMemo(
    () => forwardFunnel({ dailyTarget, sendingDays, positiveReplyRate, meetingRate, closeRate, avgDealValue }),
    [dailyTarget, sendingDays, positiveReplyRate, meetingRate, closeRate, avgDealValue]
  );

  // Cost efficiency: monthly infrastructure cost per booked meeting, and the
  // return multiple once revenue assumptions are set.
  const costPerMeeting =
    outcomes.valid && outcomes.meetings > 0 && results.valid ? results.effMonthly / outcomes.meetings : null;
  const roiMultiple =
    outcomes.valid && results.valid && results.effMonthly > 0 && outcomes.revenue > 0
      ? outcomes.revenue / results.effMonthly
      : null;

  const mixSum = mix.google + mix.microsoft + mix.azure;
  const showNormalized = !results.mixOk && mixSum !== 0;
  const invalid = !results.valid;
  const volumeQuote = results.valid && (results.nStandard >= PRICING.volumeQuoteMailboxes || results.providers.azure.tenants >= PRICING.volumeQuoteTenants);

  // Percent fields: display fraction*100, store back as a fraction in (0, 1].
  // Falls back to the benchmark default when blank or out of range.
  const setRate = (setter, fallback, raw) => {
    const s = String(raw).trim();
    const n = Number(s);
    if (s === '' || !(n > 0) || n > 100) {
      setter(fallback);
      return;
    }
    setter(n / 100);
  };
  const asPct = (f) => +(100 * f).toFixed(2);

  const setOverride = (key, field, raw) => {
    const s = String(raw).trim();
    const n = Number(s);
    // Fall back to the default when blank or non-positive, so the input always
    // reflects a real sizing parameter.
    const v = s !== '' && n > 0 ? n : PROVIDERS[key][field];
    setOverrides((o) => ({ ...o, [key]: { ...o[key], [field]: v } }));
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start text-left">

      {/* ── Controls ── */}
      <div className="border border-[#e5e5e5] rounded-xl bg-white p-5 sm:p-6">

        {/* Mode */}
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#9ca3af] mb-2">Start from</p>
          <div role="group" aria-label="Calculator mode" className="grid grid-cols-2 gap-1 p-[3px] bg-gray-100 rounded-lg">
            {[
              { id: 'forward', main: 'I know my volume', sub: 'size by daily sends' },
              { id: 'reverse', main: 'I have a goal', sub: 'work back from meetings' },
            ].map((m) => (
              <button
                key={m.id}
                type="button"
                aria-pressed={mode === m.id}
                onClick={() => setMode(m.id)}
                className={`rounded-md px-3 py-2.5 text-sm font-medium transition-all ${
                  mode === m.id ? 'bg-white shadow-sm text-black' : 'text-[#6b7280] hover:text-black'
                }`}
              >
                {m.main}
                <span className="mt-px block text-xs font-normal text-[#9ca3af]">{m.sub}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Forward: monthly volume */}
        {mode === 'forward' && (
          <div className="mb-6">
            <div className="mb-2 flex items-baseline justify-between gap-3">
              <label htmlFor="sk-volume-range" className="text-sm font-medium text-black">Monthly send volume</label>
              <span className="text-sm text-[#6b7280]"><span className="tabular-nums">{count(monthlyVolume)}</span> emails / month</span>
            </div>
            <div className="flex items-center gap-3">
              <input
                id="sk-volume-range"
                type="range"
                min={0}
                max={300000}
                step={1000}
                value={Math.min(monthlyVolume, 300000)}
                onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                aria-label="Monthly send volume slider"
                style={{ accentColor: '#2663eb' }}
                className="w-full"
              />
              <input
                type="number"
                min={0}
                step={1000}
                value={monthlyVolume}
                onChange={(e) => setMonthlyVolume(Math.max(0, Number(e.target.value) || 0))}
                aria-label="Monthly send volume exact value"
                className={`w-28 ${inputCls}`}
              />
            </div>
            <p className="mt-2 text-xs text-[#9ca3af]">
              About <span className="tabular-nums">{count(monthlyVolume / sendingDays)}</span> emails per day across {sendingDays} sending days.
            </p>
          </div>
        )}

        {/* Reverse: meetings goal */}
        {mode === 'reverse' && (
          <div className="mb-6">
            <div className="mb-2 flex items-baseline justify-between gap-3">
              <label htmlFor="sk-meetings-range" className="text-sm font-medium text-black">Meetings booked / month</label>
              <span className="text-sm text-[#6b7280]">goal: <span className="tabular-nums">{count(meetings)}</span> meetings</span>
            </div>
            <div className="flex items-center gap-3">
              <input
                id="sk-meetings-range"
                type="range"
                min={0}
                max={200}
                step={1}
                value={Math.min(meetings, 200)}
                onChange={(e) => setMeetings(Number(e.target.value))}
                aria-label="Meetings booked per month slider"
                style={{ accentColor: '#2663eb' }}
                className="w-full"
              />
              <input
                type="number"
                min={0}
                step={1}
                value={meetings}
                onChange={(e) => setMeetings(Math.max(0, Number(e.target.value) || 0))}
                aria-label="Meetings booked per month exact value"
                className={`w-28 ${inputCls}`}
              />
            </div>

            {funnel.valid ? (
              <div className="mt-4 rounded-lg border border-[#e5e5e5] bg-gray-50 p-3.5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#9ca3af]">What it takes</p>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm">
                  <FunnelStep v={count(meetings)} k="meetings / mo" />
                  <Arrow />
                  <FunnelStep v={count(funnel.positiveRepliesNeeded)} k="positive replies" />
                  <Arrow />
                  <FunnelStep v={count(funnel.emailsPerMonth)} k="emails / mo" />
                  <Arrow />
                  <FunnelStep v={count(funnel.dailyTarget)} k="emails / day" emphasize />
                </div>
              </div>
            ) : (
              <p className="mt-3 text-xs text-[#9ca3af]">Set a monthly meetings goal above zero to size the infrastructure.</p>
            )}
          </div>
        )}

        {/* Conversion & revenue assumptions — shared by both modes */}
        <div className="mb-6">
          <div className="mb-2 flex items-baseline justify-between gap-3">
            <span className="text-sm font-medium text-black">Conversion assumptions</span>
            <span className="text-xs text-[#9ca3af]">benchmark defaults, editable</span>
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            <div>
              <label htmlFor="sk-reply-rate" className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#9ca3af]">Positive reply</label>
              <div className="flex items-center gap-1">
                <input
                  id="sk-reply-rate"
                  type="number"
                  min={0.1}
                  max={100}
                  step={0.1}
                  value={asPct(positiveReplyRate)}
                  onChange={(e) => setRate(setPositiveReplyRate, PRICING.funnel.positiveReplyRate, e.target.value)}
                  aria-label="Positive replies per email sent, percent"
                  className={inputCls}
                />
                <span className="text-sm text-[#9ca3af]">%</span>
              </div>
            </div>
            <div>
              <label htmlFor="sk-meeting-rate" className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#9ca3af]">Reply to meeting</label>
              <div className="flex items-center gap-1">
                <input
                  id="sk-meeting-rate"
                  type="number"
                  min={0.1}
                  max={100}
                  step={1}
                  value={asPct(meetingRate)}
                  onChange={(e) => setRate(setMeetingRate, PRICING.funnel.meetingRate, e.target.value)}
                  aria-label="Share of positive replies that become a booked meeting, percent"
                  className={inputCls}
                />
                <span className="text-sm text-[#9ca3af]">%</span>
              </div>
            </div>
            <div>
              <label htmlFor="sk-sending-days" className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#9ca3af]">Sending days</label>
              <input
                id="sk-sending-days"
                type="number"
                min={1}
                max={31}
                step={1}
                value={sendingDays}
                onChange={(e) => {
                  const n = Number(e.target.value);
                  setSendingDays(n > 0 ? n : PRICING.funnel.sendingDaysPerMonth);
                }}
                aria-label="Sending days per month"
                className={inputCls}
              />
            </div>
          </div>

          {/* Optional revenue assumptions -> ROI estimate */}
          <div className="mt-3 rounded-lg border border-dashed border-[#e5e5e5] px-4">
            <button
              type="button"
              onClick={() => setRevenueOpen((v) => !v)}
              aria-expanded={revenueOpen}
              aria-controls="sk-revenue-body"
              className="flex w-full items-center justify-between py-3.5 text-sm font-medium text-black"
            >
              <span>Revenue assumptions, for ROI (optional)</span>
              <span aria-hidden="true" className="text-lg text-[#6b7280]">{revenueOpen ? '−' : '+'}</span>
            </button>
            {revenueOpen && (
              <div id="sk-revenue-body" className="grid grid-cols-2 gap-2.5 pb-4">
                <div>
                  <label htmlFor="sk-close-rate" className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#9ca3af]">Meeting to deal</label>
                  <div className="flex items-center gap-1">
                    <input
                      id="sk-close-rate"
                      type="number"
                      min={0.1}
                      max={100}
                      step={1}
                      value={asPct(closeRate)}
                      onChange={(e) => setRate(setCloseRate, PRICING.funnel.closeRate, e.target.value)}
                      aria-label="Share of booked meetings that close into a deal, percent"
                      className={inputCls}
                    />
                    <span className="text-sm text-[#9ca3af]">%</span>
                  </div>
                </div>
                <div>
                  <label htmlFor="sk-deal-value" className="mb-1 block text-xs font-semibold uppercase tracking-wider text-[#9ca3af]">Avg deal value</label>
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-[#9ca3af]">$</span>
                    <input
                      id="sk-deal-value"
                      type="number"
                      min={0}
                      step={100}
                      value={avgDealValue}
                      onChange={(e) => setAvgDealValue(Math.max(0, Number(e.target.value) || 0))}
                      aria-label="Average deal value in dollars"
                      className={inputCls}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Provider mix */}
        <div className="mb-6">
          <p className="text-sm font-medium text-black mb-3">Provider mix</p>
          {PROVIDER_KEYS.map((key) => (
            <div key={key} className="mb-3.5 grid grid-cols-[7rem_1fr_2.75rem] items-center gap-3">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-black">
                <Image src={PROVIDERS[key].logo} alt={PROVIDERS[key].label} width={16} height={16} className="w-4 h-4 flex-none" />
                {PROVIDERS[key].label.split(' ')[0]}
              </span>
              <input
                type="range"
                min={0}
                max={100}
                step={1}
                value={mix[key]}
                onChange={(e) => {
                  const v = Number(e.target.value);
                  setMix((m) => ({ ...m, [key]: v }));
                }}
                aria-label={`${PROVIDERS[key].label} weight`}
                style={{ accentColor: PROVIDERS[key].color }}
                className="w-full"
              />
              <span className="text-right text-sm font-semibold text-black tabular-nums">{pct(results.fractions[key])}%</span>
            </div>
          ))}
          <div className="mt-2 flex flex-wrap gap-2">
            {MIX_PRESETS.map((p) => (
              <button
                key={p.label}
                type="button"
                onClick={() => setMix({ ...p.mix })}
                className="rounded-full border border-[#e5e5e5] bg-white px-3 py-1.5 text-sm font-medium text-[#6b7280] transition-all hover:border-[#2663eb] hover:text-[#2663eb]"
              >
                {p.label}
              </button>
            ))}
          </div>
          {showNormalized && (
            <div role="status" className="mt-2.5 inline-flex items-center gap-1.5 rounded-md bg-amber-50 px-2.5 py-1.5 text-xs text-amber-700">
              Normalized to 100% automatically.
            </div>
          )}
        </div>

        {/* Billing cycle */}
        <div className="mb-6">
          <p className="text-sm font-medium text-black mb-2">Billing cycle</p>
          <div role="group" aria-label="Billing cycle" className="flex flex-wrap gap-1.5">
            {CYCLES.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={cycle === c}
                onClick={() => setCycle(c)}
                className={`flex-1 min-w-max text-center rounded-lg border px-3 py-2 text-sm font-medium transition-all ${
                  cycle === c
                    ? 'border-[#2663eb] bg-[#2663eb] text-white'
                    : 'border-[#e5e5e5] text-[#6b7280] hover:border-gray-300 hover:text-black'
                }`}
              >
                {c.charAt(0).toUpperCase() + c.slice(1)}
                <span className={`mt-px block text-xs font-normal ${cycle === c ? 'text-white/80' : 'text-[#9ca3af]'}`}>
                  {pct(PRICING.billingDiscount[c])}% off
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Add-ons */}
        <div className="mb-6">
          <Toggle
            label="Warmup"
            sub="Automated inbox warmup, priced per mailbox."
            checked={warmup}
            onChange={setWarmup}
          />
          <Toggle
            label="Deliverability monitoring"
            sub="DNS and deliverability monitoring, priced per domain."
            checked={monitoring}
            onChange={setMonitoring}
            last
          />
        </div>

        {/* Advanced */}
        <div className="rounded-lg border border-dashed border-[#e5e5e5] px-4">
          <button
            type="button"
            onClick={() => setAdvancedOpen((v) => !v)}
            aria-expanded={advancedOpen}
            aria-controls="sk-advanced-body"
            className="flex w-full items-center justify-between py-3.5 text-sm font-medium text-black"
          >
            <span>Advanced: provider sizing and domain TLD</span>
            <span aria-hidden="true" className="text-lg text-[#6b7280]">{advancedOpen ? '−' : '+'}</span>
          </button>
          {advancedOpen && (
            <div id="sk-advanced-body" className="pb-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#9ca3af] pt-1">Provider sizing</p>
              <div className="grid grid-cols-[1fr_5.5rem_5.5rem] items-end gap-x-3 gap-y-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#9ca3af]">Provider</span>
                <span className="whitespace-nowrap text-right text-xs font-semibold uppercase tracking-wider text-[#9ca3af]">
                  Mailboxes
                  <span className="block font-normal normal-case tracking-normal">per domain</span>
                </span>
                <span className="whitespace-nowrap text-right text-xs font-semibold uppercase tracking-wider text-[#9ca3af]">
                  Emails/day
                  <span className="block font-normal normal-case tracking-normal">per mailbox</span>
                </span>
                {PROVIDER_KEYS.map((key) => (
                  <OverrideRow
                    key={key}
                    providerKey={key}
                    overrides={overrides}
                    setOverride={setOverride}
                  />
                ))}
              </div>
              <div className="my-5 border-t border-dashed border-[#e5e5e5]" />
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#9ca3af]">Domain TLD</p>
              <label htmlFor="sk-tld" className="mb-2 block text-sm font-medium text-black">Domain TLD (billed annually)</label>
              <select
                id="sk-tld"
                value={tld}
                onChange={(e) => setTld(e.target.value)}
                className={inputCls}
              >
                {Object.keys(PRICING.tld).map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* ── Results ── */}
      <div className="border border-[#e5e5e5] border-l-4 border-l-[#2663eb] rounded-xl bg-white p-5 sm:p-6 lg:sticky lg:top-8">

        {invalid && (
          <div role="alert" className="mb-4 rounded-md bg-amber-50 px-3.5 py-3 text-sm text-amber-700">
            {mode === 'reverse'
              ? 'Enter a monthly meetings goal and at least one provider weight to see the infrastructure and cost.'
              : 'Set a daily target above zero and at least one provider weight to see pricing.'}
          </div>
        )}

        {volumeQuote ? (
          <div className="mb-5 rounded-xl border border-[#2663eb]/20 bg-[#2663eb]/5 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#2663eb]">Custom volume pricing</p>
            <p className="mt-1.5 text-xl font-semibold leading-snug text-black">
              At {count(results.totalMailboxes)} mailboxes, you get custom pricing.
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-[#6b7280]">
              Past {PRICING.volumeQuoteMailboxes} mailboxes (or {PRICING.volumeQuoteTenants} Azure tenants) we build a volume quote
              around your exact setup instead of list pricing. Get started and we will size it with you.
            </p>
            <a
              href="https://app.sendbox.ai/login"
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#2663eb] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg group no-underline"
            >
              Get Started
              <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        ) : (
          <div className="mb-5 border-b border-dashed border-[#e5e5e5] pb-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#9ca3af]">Effective monthly cost</p>
            <p className="mt-1 text-4xl sm:text-5xl font-semibold leading-none text-black tabular-nums">
              {money(results.effMonthly)} <span className="text-lg sm:text-xl font-medium text-[#6b7280]">/ mo</span>
            </p>
            <div className="mt-1.5 flex flex-wrap gap-3 text-sm text-[#6b7280]">
              <span><b className="font-semibold text-black tabular-nums">{money(results.perMailbox)}</b> per mailbox</span>
              <span>billed {cycle}</span>
            </div>
            {mode === 'reverse' && funnel.valid && (
              <p className="mt-2 text-sm text-[#6b7280]">
                to book <b className="font-semibold text-black">{count(meetings)}</b> meetings / month at{' '}
                <span className="tabular-nums">{count(results.totalMailboxes)}</span> mailboxes
              </p>
            )}
          </div>
        )}

        {/* Expected monthly results — forward funnel + cost efficiency */}
        {outcomes.valid && (
          <div className="mb-5 rounded-lg border border-[#e5e5e5] bg-gray-50 p-4">
            <div className="mb-2.5 flex items-baseline justify-between gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#9ca3af]">Expected monthly results</span>
              {!volumeQuote && costPerMeeting != null && (
                <span className="text-sm text-[#6b7280]">
                  <b className="font-semibold text-black tabular-nums">{money(costPerMeeting)}</b> / meeting
                </span>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm">
              <FunnelStep v={count(outcomes.emailsPerMonth)} k="emails / mo" />
              <Arrow />
              <FunnelStep v={count(outcomes.positiveReplies)} k="positive replies" />
              <Arrow />
              <FunnelStep v={count(outcomes.meetings)} k="meetings / mo" emphasize />
              {revenueOpen && outcomes.deals > 0 && (
                <>
                  <Arrow />
                  <FunnelStep v={count(outcomes.deals)} k="deals / mo" />
                </>
              )}
            </div>
            {!volumeQuote && roiMultiple != null && (
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-dashed border-[#e5e5e5] pt-3 text-sm">
                <span className="text-[#6b7280]">
                  Est. revenue <b className="font-semibold text-black tabular-nums">{money(outcomes.revenue)}</b> / mo
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 px-2.5 py-1 font-semibold tabular-nums text-emerald-600">
                  {roiMultiple.toFixed(1)}x ROI
                </span>
              </div>
            )}
            <p className="mt-2.5 text-[0.7rem] leading-relaxed text-[#9ca3af]">
              Projected from your reply and meeting rates. A common benchmark is roughly one meeting per 100 emails sent.
              Edit the assumptions on the left to match your real numbers.
            </p>
          </div>
        )}

        {/* Diversification bar */}
        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#9ca3af]">Volume diversification</p>
        <div role="img" aria-label="Provider volume diversification bar" className="flex h-9 w-full overflow-hidden rounded-md border border-[#e5e5e5] bg-gray-50">
          {PROVIDER_KEYS.map((key) => {
            const f = results.fractions[key];
            if (f <= 0) return null;
            return (
              <div
                key={key}
                style={{ width: `${100 * f}%`, background: PROVIDERS[key].color, color: PROVIDERS[key].text }}
                className="flex items-center justify-center overflow-hidden whitespace-nowrap text-xs font-semibold transition-[width]"
              >
                {f >= 0.12 ? `${pct(f)}%` : ''}
              </div>
            );
          })}
        </div>
        <div className="mt-2.5 flex flex-wrap gap-4 text-xs text-[#6b7280]">
          {PROVIDER_KEYS.map((key) => (
            <span key={key} className="inline-flex items-center gap-1.5">
              <span style={{ background: PROVIDERS[key].color }} className="h-2.5 w-2.5 rounded-sm" />
              {PROVIDERS[key].label.split(' ')[0]} <span className="tabular-nums">{pct(results.fractions[key])}%</span>
            </span>
          ))}
        </div>

        {/* Per-provider cards (hidden when fraction is 0) */}
        <div className="my-5 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-3">
          {PROVIDER_KEYS.map((key) => {
            if (results.fractions[key] === 0) return null;
            const p = results.providers[key];
            const isAzure = key === 'azure';
            return (
              <div key={key} className="rounded-lg bg-gray-50 p-3.5">
                <p className="mb-2 flex items-center gap-2 text-sm font-semibold text-black">
                  <Image src={PROVIDERS[key].logo} alt={PROVIDERS[key].label} width={16} height={16} className="w-4 h-4 flex-none" />
                  {PROVIDERS[key].label}
                </p>
                <ProviderStat k="Sends / day" v={count(p.sends)} />
                <ProviderStat k="Mailboxes" v={count(p.mailboxes)} />
                <ProviderStat k={isAzure ? 'Tenants' : 'Domains'} v={count(isAzure ? p.tenants : p.units)} />
              </div>
            );
          })}
        </div>

        {/* Cost breakdown (hidden at custom-pricing scale) */}
        {!volumeQuote && (
          <div className="border-t border-dashed border-[#e5e5e5] pt-4">
            <CostRow
              k={results.nStandard > 0 ? `Mailbox subscription (${count(results.nStandard)} mailboxes)` : 'Mailbox subscription'}
              v={money(results.planCost)}
            />
            {results.providers.azure.tenants > 0 && (
              <CostRow k={`Azure tenants (${count(results.providers.azure.tenants)} x ${money(PRICING.azureTenant)})`} v={money(results.azureCost)} />
            )}
            {warmup && (
              <CostRow k={`Warmup (${count(results.totalMailboxes)} mailboxes x ${money(PRICING.warmupPerMailbox)})`} v={money(results.warmupCost)} />
            )}
            {monitoring && (
              <CostRow k={`Monitoring (${count(results.totalDomains)} domains x ${money(PRICING.monitoringPerDomain)})`} v={money(results.monitoringCost)} />
            )}
            <div className="mt-1.5 flex justify-between gap-4 border-t border-[#e5e5e5] pt-2.5 text-sm font-semibold text-black">
              <span>Recurring subtotal</span>
              <span className="tabular-nums">{money(results.recurringFull)}</span>
            </div>
            <div className={`flex justify-between gap-4 py-1.5 text-sm ${results.discount === 0 ? 'text-[#9ca3af]' : ''}`}>
              <span className={results.discount === 0 ? '' : 'text-[#6b7280]'}>Cycle discount ({pct(results.discount)}%)</span>
              <span className={`tabular-nums font-medium ${results.discount > 0 ? 'text-[#2663eb]' : ''}`}>
                {(results.discount > 0 ? '-' : '') + money(results.recurringFull * results.discount)}
              </span>
            </div>
            <div className="my-2 flex justify-between gap-4 rounded-md bg-[#2663eb]/5 px-2.5 py-2 text-sm font-semibold text-[#2663eb]">
              <span>Effective monthly</span>
              <span className="tabular-nums">{money(results.effMonthly)}</span>
            </div>
            <div className="flex justify-between gap-4 py-1.5 text-sm text-[#9ca3af]">
              <span>Domains billed annually ({count(results.totalDomains)} x {money(PRICING.tld[tld])} {tld})</span>
              <span className="tabular-nums">{money(results.domainsAnnual)}</span>
            </div>
            <div className="mt-1.5 flex justify-between gap-4 border-t border-[#e5e5e5] pt-3 text-base sm:text-lg font-semibold text-black">
              <span>First year total</span>
              <span className="tabular-nums">{money(results.firstYear)}</span>
            </div>

            <a
              href="https://app.sendbox.ai/login"
              className="mt-5 inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#2663eb] text-white rounded-lg text-sm sm:text-[15px] font-medium transition-all hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg group no-underline"
            >
              Get Started
              <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

/* Advanced-panel row (fragment keeps the grid columns aligned) */
function OverrideRow({ providerKey, overrides, setOverride }) {
  const p = PROVIDERS[providerKey];
  return (
    <>
      <span className="inline-flex items-center gap-2 text-sm font-medium text-black">
        <span style={{ background: p.color }} aria-hidden="true" className="h-2.5 w-2.5 flex-none rounded-sm" />
        {p.label}
      </span>
      <input
        type="number"
        min={1}
        step={1}
        value={overrides[providerKey].block}
        onChange={(e) => setOverride(providerKey, 'block', e.target.value)}
        aria-label={`${p.label} mailboxes per domain`}
        className={inputCls}
      />
      <input
        type="number"
        min={1}
        step={1}
        value={overrides[providerKey].epd}
        onChange={(e) => setOverride(providerKey, 'epd', e.target.value)}
        aria-label={`${p.label} emails per day`}
        className={inputCls}
      />
    </>
  );
}
