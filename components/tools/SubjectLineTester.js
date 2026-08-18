'use client';

import { useState } from 'react';
import { PencilSimpleIcon, CheckCircleIcon, XCircleIcon, WarningIcon } from '@phosphor-icons/react/dist/ssr';

const SPAM_WORDS = [
  'free', 'guarantee', 'act now', 'limited time', 'urgent', 'click here',
  'buy now', 'order now', 'winner', 'cash', 'earn money', 'discount',
  'special offer', 'congratulations', 'no obligation', 'risk free',
  'double your', 'million', 'billion', 'credit card', 'no cost',
  'as seen on', 'call now', 'apply now', 'dear friend', 'once in a lifetime',
];

const POWER_WORDS = [
  'quick', 'proven', 'mistake', 'secret', 'new', 'exclusive', 'essential',
  'surprising', 'unexpected', 'critical', 'breakthrough', 'insider',
  'strategy', 'tested', 'results', 'effortless', 'instant',
];

function analyzeSubjectLine(subject) {
  const checks = [];
  const trimmed = subject.trim();
  const words = trimmed.split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const charCount = trimmed.length;
  const lowerSubject = trimmed.toLowerCase();

  // --- Length check ---
  let lengthScore = 0;
  let lengthStatus = 'pass';
  let lengthTip = '';
  if (wordCount >= 6 && wordCount <= 10 && charCount >= 30 && charCount <= 60) {
    lengthScore = 20;
    lengthTip = `${wordCount} words, ${charCount} chars. ideal length for open rates.`;
  } else if (wordCount >= 4 && wordCount <= 12 && charCount <= 70) {
    lengthScore = 14;
    lengthStatus = 'warning';
    lengthTip = `${wordCount} words, ${charCount} chars. acceptable, but 6-10 words (30-60 chars) is optimal.`;
  } else {
    lengthScore = 5;
    lengthStatus = 'fail';
    if (wordCount < 4) {
      lengthTip = `Too short (${wordCount} words). Aim for 6-10 words to give enough context.`;
    } else if (wordCount > 12) {
      lengthTip = `Too long (${wordCount} words). Most of the subject will get cut off on mobile.`;
    } else {
      lengthTip = `${charCount} chars is too long. Keep it under 60 characters for full visibility.`;
    }
  }
  checks.push({ name: 'Length', status: lengthStatus, tip: lengthTip, score: lengthScore, max: 20 });

  // --- Spam triggers ---
  const foundSpam = SPAM_WORDS.filter(w => lowerSubject.includes(w));
  let spamScore = 0;
  let spamStatus = 'pass';
  let spamTip = '';
  if (foundSpam.length === 0) {
    spamScore = 20;
    spamTip = 'No spam trigger words detected.';
  } else if (foundSpam.length === 1) {
    spamScore = 10;
    spamStatus = 'warning';
    spamTip = `Contains "${foundSpam[0]}". this can trigger spam filters.`;
  } else {
    spamScore = 0;
    spamStatus = 'fail';
    spamTip = `Contains ${foundSpam.length} spam triggers: ${foundSpam.slice(0, 3).map(w => `"${w}"`).join(', ')}${foundSpam.length > 3 ? '...' : ''}.`;
  }
  checks.push({ name: 'Spam Words', status: spamStatus, tip: spamTip, score: spamScore, max: 20 });

  // --- Capitalization ---
  const isAllCaps = trimmed === trimmed.toUpperCase() && /[A-Z]/.test(trimmed);
  const titleCaseWords = words.filter(w => /^[A-Z][a-z]/.test(w)).length;
  const isMostlyTitleCase = titleCaseWords > wordCount * 0.7 && wordCount > 2;
  let capsScore = 0;
  let capsStatus = 'pass';
  let capsTip = '';
  if (isAllCaps) {
    capsScore = 0;
    capsStatus = 'fail';
    capsTip = 'ALL CAPS looks spammy and aggressive. Use sentence case for cold email.';
  } else if (isMostlyTitleCase) {
    capsScore = 8;
    capsStatus = 'warning';
    capsTip = 'Title Case works but sentence case feels more natural in an inbox.';
  } else {
    capsScore = 15;
    capsTip = 'Good. sentence case reads naturally and avoids spam filters.';
  }
  checks.push({ name: 'Capitalization', status: capsStatus, tip: capsTip, score: capsScore, max: 15 });

  // --- Punctuation ---
  const exclamations = (trimmed.match(/!/g) || []).length;
  const questions = (trimmed.match(/\?/g) || []).length;
  const hasEmoji = /[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u.test(trimmed);
  let punctScore = 0;
  let punctStatus = 'pass';
  let punctTip = '';
  if (exclamations > 1 || (exclamations >= 1 && questions >= 1)) {
    punctScore = 0;
    punctStatus = 'fail';
    punctTip = 'Too much punctuation. multiple ! or mixing !? looks spammy.';
  } else if (exclamations === 1 || hasEmoji) {
    punctScore = 5;
    punctStatus = 'warning';
    punctTip = hasEmoji
      ? 'Emojis can help in marketing but hurt cold email deliverability.'
      : 'One ! is borderline. Removing it usually improves deliverability.';
  } else {
    punctScore = 10;
    punctTip = 'Clean punctuation. no red flags for spam filters.';
  }
  checks.push({ name: 'Punctuation', status: punctStatus, tip: punctTip, score: punctScore, max: 10 });

  // --- Personalization ---
  const hasMergeTag = /\{\{|{first_name}|{last_name}|{company}|\[name\]|\[first_name\]|\[company\]/i.test(trimmed);
  let personalScore = 0;
  let personalStatus = 'warning';
  let personalTip = '';
  if (hasMergeTag) {
    personalScore = 15;
    personalStatus = 'pass';
    personalTip = 'Personalization detected. merge tags boost open rates by 20-30%.';
  } else {
    personalScore = 0;
    personalTip = 'No merge tags found. Adding {{first_name}} or {{company}} can lift open rates.';
  }
  checks.push({ name: 'Personalization', status: personalStatus, tip: personalTip, score: personalScore, max: 15 });

  // --- Numbers ---
  const hasNumber = /\d/.test(trimmed);
  let numberScore = 0;
  let numberStatus = 'warning';
  let numberTip = '';
  if (hasNumber) {
    numberScore = 5;
    numberStatus = 'pass';
    numberTip = 'Specific numbers add credibility and spark curiosity (e.g., "3 tips", "27%").';
  } else {
    numberScore = 0;
    numberTip = 'Adding a number (e.g., "5 ways...", "in 30 days") can increase engagement.';
  }
  checks.push({ name: 'Numbers', status: numberStatus, tip: numberTip, score: numberScore, max: 5 });

  // --- Question ---
  const isQuestion = trimmed.endsWith('?');
  let questionScore = 0;
  let questionStatus = 'warning';
  let questionTip = '';
  if (isQuestion) {
    questionScore = 5;
    questionStatus = 'pass';
    questionTip = 'Questions boost open rates. they trigger curiosity and invite a mental response.';
  } else {
    questionScore = 0;
    questionTip = 'Framing the subject as a question can increase opens (e.g., "Struggling with X?").';
  }
  checks.push({ name: 'Question', status: questionStatus, tip: questionTip, score: questionScore, max: 5 });

  // --- Power words ---
  const foundPower = POWER_WORDS.filter(w => lowerSubject.includes(w));
  let powerScore = 0;
  let powerStatus = 'warning';
  let powerTip = '';
  if (foundPower.length >= 2) {
    powerScore = 10;
    powerStatus = 'pass';
    powerTip = `Great. "${foundPower.slice(0, 2).join('", "')}" are strong engagement triggers.`;
  } else if (foundPower.length === 1) {
    powerScore = 6;
    powerStatus = 'pass';
    powerTip = `"${foundPower[0]}" is a solid power word. adds urgency and interest.`;
  } else {
    powerScore = 0;
    powerTip = 'Try adding a power word like "quick", "proven", "mistake", or "secret".';
  }
  checks.push({ name: 'Power Words', status: powerStatus, tip: powerTip, score: powerScore, max: 10 });

  // --- Overall ---
  const totalScore = checks.reduce((sum, c) => sum + c.score, 0);

  let verdict = '';
  if (totalScore >= 85) verdict = 'Excellent subject line. ready to send.';
  else if (totalScore >= 70) verdict = 'Strong subject line with room for small improvements.';
  else if (totalScore >= 50) verdict = 'Decent, but a few tweaks could significantly improve open rates.';
  else if (totalScore >= 30) verdict = 'Needs work. address the issues below before sending.';
  else verdict = 'Poor subject line. likely to get ignored or flagged as spam.';

  return { score: totalScore, verdict, checks };
}

function Results({ result }) {
  if (!result) return null;

  const { score, verdict, checks } = result;
  const color = score >= 80 ? '#22c55e' : score >= 60 ? '#f59e0b' : '#ef4444';
  const circ = 2 * Math.PI * 42;
  const offset = circ - (score / 100) * circ;

  const statusIcon = (status) => {
    if (status === 'pass') return <CheckCircleIcon size={16} weight="fill" className="text-emerald-500 shrink-0" />;
    if (status === 'warning') return <WarningIcon size={16} weight="fill" className="text-amber-500 shrink-0" />;
    return <XCircleIcon size={16} weight="fill" className="text-red-500 shrink-0" />;
  };

  return (
    <div className="mt-8">
      {/* Score ring */}
      <div className="text-center mb-8">
        <div className="relative inline-flex items-center justify-center w-24 h-24 mb-3">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 96 96">
            <circle cx="48" cy="48" r="42" fill="none" stroke="#e5e7eb" strokeWidth="4" />
            <circle cx="48" cy="48" r="42" fill="none" stroke={color} strokeWidth="4"
              strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset}
              style={{ transition: 'stroke-dashoffset 0.8s ease' }} />
          </svg>
          <span className="absolute text-2xl font-bold text-black tabular-nums">{score}</span>
        </div>
        <p className="text-[15px] font-semibold text-black">{score >= 80 ? 'Great' : score >= 60 ? 'Good' : score >= 40 ? 'Fair' : 'Poor'}</p>
        <p className="text-sm text-[#6b7280] mt-1 max-w-md mx-auto">{verdict}</p>
      </div>

      {/* Check rows */}
      <div className="border border-gray-200 rounded-lg divide-y divide-gray-100 overflow-hidden">
        {checks.map((check, i) => (
          <div key={i} className="px-4 py-3 flex items-start gap-3">
            <div className="mt-0.5">{statusIcon(check.status)}</div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-black">{check.name}</p>
              <p className="text-xs text-[#6b7280] mt-0.5 leading-relaxed">{check.tip}</p>
            </div>
            <span className="text-xs text-[#9ca3af] shrink-0 tabular-nums mt-0.5">{check.score}/{check.max}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SubjectLineTester() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleTest = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const analysis = analyzeSubjectLine(input);
    setResult(analysis);
  };

  return (
    <div>
      <form onSubmit={handleTest} className="flex gap-2">
        <div className="flex-1 relative">
          <PencilSimpleIcon size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your email subject line..."
            className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-lg border border-[#e5e5e5] text-sm sm:text-[15px] text-black placeholder:text-[#9ca3af] focus:outline-none transition-all"
          />
        </div>
        <button
          type="submit"
          disabled={!input.trim()}
          className="relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#695AF2] text-white rounded-lg text-sm sm:text-[15px] font-medium transition-all hover:bg-[#5847E0] hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          Test
        </button>
      </form>

      <Results result={result} />
    </div>
  );
}
