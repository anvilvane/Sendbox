'use client';

import { useState } from 'react';
import { CheckCircleIcon, WarningIcon, XCircleIcon, CalendarDotsIcon } from '@phosphor-icons/react/dist/ssr';

function generateSchedule(target, mailboxes, model) {
  // Target is total daily volume. Per-mailbox target:
  const perMbTarget = Math.max(1, Math.round(target / mailboxes));
  // Start at a safe low per-mailbox number
  const startPerMb = Math.min(2, perMbTarget);

  const days = [];
  for (let d = 1; d <= 30; d++) {
    let perMailbox;
    if (model === 'linear') {
      const increment = (perMbTarget - startPerMb) / 29;
      perMailbox = Math.round(startPerMb + increment * (d - 1));
    } else {
      // Exponential: start slow, ramp fast at end
      if (perMbTarget <= startPerMb) {
        perMailbox = perMbTarget;
      } else {
        const factor = Math.pow(perMbTarget / startPerMb, 1 / 29);
        perMailbox = Math.round(startPerMb * Math.pow(factor, d - 1));
      }
    }
    // Clamp day 30 to exact target
    if (d === 30) perMailbox = perMbTarget;
    // Ensure at least 1
    perMailbox = Math.max(1, perMailbox);

    const dailyTotal = perMailbox * mailboxes;

    let status;
    if (perMailbox <= 20) status = 'safe';
    else if (perMailbox <= 40) status = 'moderate';
    else status = 'high-risk';

    days.push({ day: d, dailyTotal, perMailbox, status });
  }
  return days;
}

const STATUS_CONFIG = {
  'safe':      { bg: 'bg-emerald-50', color: 'text-emerald-600', icon: CheckCircleIcon, label: 'Safe' },
  'moderate':  { bg: 'bg-amber-50',   color: 'text-amber-600',   icon: WarningIcon,     label: 'Moderate' },
  'high-risk': { bg: 'bg-red-50',     color: 'text-red-600',     icon: XCircleIcon,     label: 'High Risk' },
};

export default function WarmupCalculator() {
  const [target, setTarget] = useState('');
  const [mailboxes, setMailboxes] = useState('1');
  const [model, setModel] = useState('linear');
  const [schedule, setSchedule] = useState(null);

  const handleGenerate = (e) => {
    e.preventDefault();
    const t = parseInt(target, 10);
    const m = parseInt(mailboxes, 10);
    if (!t || t < 1 || !m || m < 1) return;
    setSchedule(generateSchedule(t, m, model));
  };

  const t = parseInt(target, 10) || 0;
  const m = parseInt(mailboxes, 10) || 1;

  return (
    <div>
      <form onSubmit={handleGenerate}>
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-4">
          <div>
            <label className="block text-sm font-medium text-black mb-1">Target daily volume</label>
            <input type="number" min="1" value={target} onChange={(e) => setTarget(e.target.value)} placeholder="e.g. 100, 500"
              className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-[#e5e5e5] text-sm sm:text-[15px] text-black placeholder:text-[#9ca3af] focus:outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1">Number of mailboxes</label>
            <input type="number" min="1" value={mailboxes} onChange={(e) => setMailboxes(e.target.value)} placeholder="1"
              className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-[#e5e5e5] text-sm sm:text-[15px] text-black placeholder:text-[#9ca3af] focus:outline-none transition-all" />
          </div>
        </div>

        <div className="mb-5">
          <label className="block text-sm font-medium text-black mb-1">Growth model</label>
          <div className="inline-flex p-[3px] bg-gray-100 rounded-lg">
            <button
              type="button"
              onClick={() => setModel('linear')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                model === 'linear'
                  ? 'bg-white shadow-sm text-black'
                  : 'text-[#6b7280] hover:text-black'
              }`}
            >
              Linear
            </button>
            <button
              type="button"
              onClick={() => setModel('exponential')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                model === 'exponential'
                  ? 'bg-white shadow-sm text-black'
                  : 'text-[#6b7280] hover:text-black'
              }`}
            >
              Exponential
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={!target || parseInt(target, 10) < 1}
          className="relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#695AF2] text-white rounded-lg text-sm sm:text-[15px] font-medium transition-all hover:bg-[#5847E0] hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          <CalendarDotsIcon size={16} weight="duotone" />
          Generate Schedule
        </button>
      </form>

      {/* Results */}
      {schedule && (
        <div className="mt-8 space-y-4">
          {/* Summary */}
          <div className="p-4 rounded-lg bg-[#695AF2]/5 border border-[#695AF2]/10">
            <p className="text-sm sm:text-[15px] text-black font-medium">
              You&apos;ll reach{' '}
              <span className="text-[#695AF2] font-semibold">{t.toLocaleString()}</span>{' '}
              emails/day by Day 30 across{' '}
              <span className="text-[#695AF2] font-semibold">{m}</span>{' '}
              mailbox{m !== 1 ? 'es' : ''}{' '}
              <span className="text-[#6b7280]">
                ({Math.round(t / m)} per mailbox)
              </span>
            </p>
          </div>

          {/* Risk warning if any high-risk days */}
          {schedule.some((d) => d.status === 'high-risk') && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2">
              <XCircleIcon size={16} weight="fill" className="text-red-500 shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">
                Some days exceed 50 emails per mailbox. Consider adding more mailboxes to reduce deliverability risk.
              </p>
            </div>
          )}

          {/* Schedule table */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-medium text-[#6b7280]">Day</th>
                    <th className="px-4 py-3 text-right font-medium text-[#6b7280]">Daily Total</th>
                    <th className="px-4 py-3 text-right font-medium text-[#6b7280]">Per Mailbox</th>
                    <th className="px-4 py-3 text-right font-medium text-[#6b7280]">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {schedule.map((row) => {
                    const s = STATUS_CONFIG[row.status];
                    const StatusIcon = s.icon;
                    return (
                      <tr key={row.day} className={row.status === 'high-risk' ? 'bg-red-50/30' : ''}>
                        <td className="px-4 py-2.5 text-black font-medium">
                          {row.day}
                        </td>
                        <td className="px-4 py-2.5 text-right text-black tabular-nums">
                          {row.dailyTotal.toLocaleString()}
                        </td>
                        <td className="px-4 py-2.5 text-right text-black tabular-nums">
                          {row.perMailbox.toLocaleString()}
                        </td>
                        <td className="px-4 py-2.5 text-right">
                          <span className={`inline-flex items-center gap-1 text-xs font-medium ${s.color}`}>
                            <StatusIcon size={14} weight="fill" />
                            {s.label}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
