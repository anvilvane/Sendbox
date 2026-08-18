'use client';

import { useState } from 'react';

const inputClass = 'w-full py-2.5 sm:py-3 px-4 rounded-lg border border-[#e5e5e5] text-sm sm:text-[15px] text-black placeholder:text-[#9ca3af] focus:outline-none transition-all';
const btnClass = 'relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#695AF2] text-white rounded-lg text-sm sm:text-[15px] font-medium transition-all hover:bg-[#5847E0] hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50';

function getColor(rate) {
  if (rate > 40) return { color: '#16a34a', label: 'Excellent', context: 'Your open rate is well above average.' };
  if (rate >= 20) return { color: '#d97706', label: 'Average', context: 'There is room to improve your open rate.' };
  return { color: '#dc2626', label: 'Below average', context: 'Your open rate is significantly lower than industry standards.' };
}

function getTips(rate) {
  if (rate > 40) {
    return [
      'Keep testing subject lines to maintain high performance.',
      'Segment your list further to push open rates even higher.',
      'Use these high-performing subject lines as templates for future campaigns.',
    ];
  }
  if (rate >= 20) {
    return [
      'A/B test your subject lines. try shorter, more curiosity-driven copy.',
      'Personalize the first line and subject with the recipient\'s name or company.',
      'Send at different times of day to find when your audience is most active.',
      'Clean your list. remove contacts who haven\'t opened in 90+ days.',
      'Check your sender reputation. poor reputation leads to inbox placement issues.',
    ];
  }
  return [
    'Check if your emails are landing in spam. run an inbox placement test.',
    'Verify your SPF, DKIM, and DMARC records are properly configured.',
    'Warm up your sending domain if it is new or has low volume history.',
    'Drastically simplify your subject lines. avoid spam trigger words.',
    'Reduce your sending volume and focus on your most engaged contacts first.',
    'Consider switching to a dedicated IP or a different email service provider.',
    'Remove all contacts who have not opened in the last 60 days.',
  ];
}

const benchmarks = [
  { type: 'Cold email', target: '40 – 60%' },
  { type: 'Marketing email', target: '20 – 30%' },
  { type: 'Transactional email', target: '60 – 80%' },
];

export default function OpenRateCalculator() {
  const [totalDelivered, setTotalDelivered] = useState('');
  const [totalOpens, setTotalOpens] = useState('');
  const [result, setResult] = useState(null);

  const canCalculate = totalDelivered && totalOpens && Number(totalDelivered) > 0;

  function calculate() {
    const delivered = Number(totalDelivered);
    const opens = Number(totalOpens);
    const rate = (opens / delivered) * 100;

    setResult({ rate, opens, delivered });
  }

  function reset() {
    setTotalDelivered('');
    setTotalOpens('');
    setResult(null);
  }

  return (
    <div>
      {!result ? (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black mb-1.5">Total emails delivered</label>
            <input
              type="number"
              min="1"
              className={inputClass}
              placeholder="e.g. 5000"
              value={totalDelivered}
              onChange={(e) => setTotalDelivered(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black mb-1.5">Total unique opens</label>
            <input
              type="number"
              min="0"
              className={inputClass}
              placeholder="e.g. 2100"
              value={totalOpens}
              onChange={(e) => setTotalOpens(e.target.value)}
            />
          </div>

          <button className={btnClass} disabled={!canCalculate} onClick={calculate}>
            Calculate open rate
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

          {/* Summary */}
          <div className="border border-[#e5e5e5] rounded-lg p-4 mb-4">
            <p className="text-sm font-medium text-black mb-3">Summary</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#6b7280]">Unique opens</span>
                <span className="text-sm font-medium text-black">{result.opens.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#6b7280]">Total delivered</span>
                <span className="text-sm font-medium text-black">{result.delivered.toLocaleString()}</span>
              </div>
            </div>
          </div>

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
