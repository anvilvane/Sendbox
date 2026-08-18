'use client';

import { useState } from 'react';

const inputClass = 'w-full py-2.5 sm:py-3 px-4 rounded-lg border border-[#e5e5e5] text-sm sm:text-[15px] text-black placeholder:text-[#9ca3af] focus:outline-none transition-all';
const btnClass = 'relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#2663eb] text-white rounded-lg text-sm sm:text-[15px] font-medium transition-all hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50';

function getColor(rate) {
  if (rate < 2) return { color: '#16a34a', label: 'Healthy', context: 'Your bounce rate is within a safe range.' };
  if (rate <= 5) return { color: '#d97706', label: 'Needs attention', context: 'Your bounce rate is higher than ideal. Review your list hygiene.' };
  return { color: '#dc2626', label: 'Critical', context: 'Your bounce rate is dangerously high. Immediate action is needed.' };
}

function getTips(rate) {
  if (rate < 2) {
    return [
      'Keep verifying new contacts before adding them to campaigns.',
      'Continue monitoring bounce rates per campaign for early warnings.',
      'Maintain your current list hygiene practices.',
    ];
  }
  if (rate <= 5) {
    return [
      'Run your email list through a verification tool before sending.',
      'Remove contacts that have bounced more than once.',
      'Avoid purchasing or scraping email lists without verification.',
      'Check for typos in email addresses (e.g. gmial.com, yaho.com).',
    ];
  }
  return [
    'Stop sending immediately. high bounce rates damage your sender reputation.',
    'Verify your entire list with an email validation service before the next send.',
    'Remove all hard bounces permanently from your list.',
    'Switch to double opt-in for new subscribers.',
    'Contact your ESP. they may throttle or suspend your account at this level.',
    'Consider warming up a new domain if reputation is already damaged.',
  ];
}

const benchmarks = [
  { type: 'Cold email', target: '< 2%' },
  { type: 'Marketing email', target: '< 1%' },
  { type: 'Transactional email', target: '< 0.5%' },
];

export default function BounceRateCalculator() {
  const [totalSent, setTotalSent] = useState('');
  const [totalBounced, setTotalBounced] = useState('');
  const [hardBounces, setHardBounces] = useState('');
  const [softBounces, setSoftBounces] = useState('');
  const [result, setResult] = useState(null);

  const canCalculate = totalSent && totalBounced && Number(totalSent) > 0;

  function calculate() {
    const sent = Number(totalSent);
    const bounced = Number(totalBounced);
    const hard = hardBounces ? Number(hardBounces) : null;
    const soft = softBounces ? Number(softBounces) : null;

    const rate = (bounced / sent) * 100;
    const hardRate = hard !== null ? (hard / sent) * 100 : null;
    const softRate = soft !== null ? (soft / sent) * 100 : null;

    setResult({ rate, hardRate, softRate, hard, soft, bounced, sent });
  }

  function reset() {
    setTotalSent('');
    setTotalBounced('');
    setHardBounces('');
    setSoftBounces('');
    setResult(null);
  }

  return (
    <div>
      {!result ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black mb-1.5">Total emails sent</label>
            <input
              type="number"
              min="1"
              className={inputClass}
              placeholder="e.g. 10000"
              value={totalSent}
              onChange={(e) => setTotalSent(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1.5">Total bounced</label>
            <input
              type="number"
              min="0"
              className={inputClass}
              placeholder="e.g. 150"
              value={totalBounced}
              onChange={(e) => setTotalBounced(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-black mb-1.5">
                Hard bounces <span className="text-[#9ca3af] font-normal">(optional)</span>
              </label>
              <input
                type="number"
                min="0"
                className={inputClass}
                placeholder="e.g. 80"
                value={hardBounces}
                onChange={(e) => setHardBounces(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-1.5">
                Soft bounces <span className="text-[#9ca3af] font-normal">(optional)</span>
              </label>
              <input
                type="number"
                min="0"
                className={inputClass}
                placeholder="e.g. 70"
                value={softBounces}
                onChange={(e) => setSoftBounces(e.target.value)}
              />
            </div>
          </div>

          <button className={btnClass} disabled={!canCalculate} onClick={calculate}>
            Calculate bounce rate
          </button>
        </div>
      ) : (
        <div>
          {/* Big result */}
          <div className="text-center mb-6">
            <p className="text-5xl font-bold tabular-nums" style={{ color: getColor(result.rate).color }}>
              {result.rate.toFixed(1)}%
            </p>
            <p className="text-[15px] font-semibold text-black mt-2">{getColor(result.rate).label}</p>
            <p className="text-sm text-[#9ca3af] mt-1">{getColor(result.rate).context}</p>
          </div>

          {/* Breakdown */}
          {(result.hardRate !== null || result.softRate !== null) && (
            <div className="border border-[#e5e5e5] rounded-lg p-4 mb-4">
              <p className="text-sm font-medium text-black mb-3">Bounce breakdown</p>
              <div className="space-y-2">
                {result.hardRate !== null && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#6b7280]">Hard bounces</span>
                    <span className="text-sm font-medium text-black">
                      {result.hard.toLocaleString()} ({result.hardRate.toFixed(2)}%)
                    </span>
                  </div>
                )}
                {result.softRate !== null && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#6b7280]">Soft bounces</span>
                    <span className="text-sm font-medium text-black">
                      {result.soft.toLocaleString()} ({result.softRate.toFixed(2)}%)
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between pt-2 border-t border-[#e5e5e5]">
                  <span className="text-sm text-[#6b7280]">Total bounces</span>
                  <span className="text-sm font-medium text-black">
                    {result.bounced.toLocaleString()} / {result.sent.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Benchmarks */}
          <div className="border border-[#e5e5e5] rounded-lg p-4 mb-4">
            <p className="text-sm font-medium text-black mb-3">Industry benchmarks</p>
            <div className="space-y-2">
              {benchmarks.map((b) => (
                <div key={b.type} className="flex items-center justify-between">
                  <span className="text-sm text-[#6b7280]">{b.type}</span>
                  <span className="text-sm font-medium text-black">{b.target}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="border border-[#e5e5e5] rounded-lg p-4 mb-4">
            <p className="text-sm font-medium text-black mb-3">Recommendations</p>
            <ul className="space-y-2">
              {getTips(result.rate).map((tip, i) => (
                <li key={i} className="flex gap-2 text-sm text-[#6b7280]">
                  <span className="text-[#9ca3af] shrink-0">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <button className={btnClass} onClick={reset}>
            Calculate again
          </button>
        </div>
      )}
    </div>
  );
}
