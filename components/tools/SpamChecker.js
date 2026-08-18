'use client';

import { useState } from 'react';
import { CheckCircleIcon, WarningIcon, XCircleIcon } from '@phosphor-icons/react/dist/ssr';

const SPAM_TRIGGERS = [
  // urgency & pressure
  'act now', 'action required', 'apply immediately', 'call now', 'do it today',
  'don\'t delete', 'don\'t hesitate', 'expires', 'final call', 'for immediate release',
  'get it now', 'hurry', 'immediately', 'instant', 'limited time', 'now only',
  'offer expires', 'once in a lifetime', 'only today', 'order now', 'please read',
  'right now', 'supplies are limited', 'take action', 'top urgent', 'urgent',
  'what are you waiting for', 'while supplies last', 'act immediately',
  'before it\'s too late', 'deadline', 'expiring', 'fast', 'final',
  'for a limited time', 'last chance', 'limited', 'time limited', 'limited offer',
  'respond now', 'respond immediately', 'time is running out', 'today only',

  // free & money
  'free', 'free access', 'free gift', 'free trial', 'free consultation',
  'free info', 'free investment', 'free membership', 'free money', 'free preview',
  'free sample', 'free website', 'risk free', 'risk-free', 'no cost',
  'no fee', 'no obligation', 'no purchase necessary', 'no strings attached',
  'complimentary', 'bonus', 'gift card', 'freebie',

  // financial
  'affordable', 'bargain', 'budget', 'cash', 'cash bonus', 'cashback',
  'cheap', 'check or money order', 'collect', 'consolidate',
  'credit', 'credit card', 'deal', 'debt', 'discount', 'double your',
  'earn', 'earn extra cash', 'earn money', 'easy terms', 'extra cash',
  'extra income', 'fast cash', 'financial freedom', 'financially',
  'hidden charges', 'income', 'income from home', 'initial investment',
  'insurance', 'investment', 'loan', 'low cost', 'lowest price',
  'make money', 'money', 'money back', 'money making', 'money-back',
  'mortgage', 'no credit check', 'no hidden costs', 'no interest',
  'one hundred percent free', 'pennies', 'profit', 'profits', 'pure profit',
  'refinance', 'save big', 'save money', 'save up to', 'savings',
  'special promotion', 'unsecured', 'without charge',

  // buying & selling
  'buy', 'buy now', 'buying', 'clearance', 'deal', 'deals', 'lowest rates',
  'order', 'order now', 'orders shipped', 'promo', 'promotion',
  'purchase', 'sale', 'sales', 'shop', 'shopper', 'special offer',
  'offer', 'best price', 'best rates', 'prices', 'price',

  // winners & prizes
  'award', 'congratulations', 'contest', 'gift', 'jackpot', 'lottery',
  'million dollars', 'millions', 'once in a lifetime', 'prize', 'prizes',
  'reward', 'sweepstakes', 'treasure', 'winner', 'winning', 'won',
  'you are a winner', 'you have been selected', 'you have won',
  'you\'re a winner', 'claim your prize', 'selected for',

  // marketing hype
  'amazing', 'be amazed', 'best ever', 'breakthrough', 'cancel at any time',
  'certified', 'click', 'click below', 'click here', 'compare', 'copy accurately',
  'drastically reduced', 'eliminate', 'exclusive', 'exclusive deal', 'exclusive offer',
  'expect to earn', 'explode', 'extraordinary', 'fantastic', 'fantastic deal',
  'genuine', 'get out of', 'get started now', 'great offer', 'guarantee',
  'guaranteed', 'have you seen', 'important information', 'incredible',
  'incredible deal', 'info you requested', 'information you requested',
  'instant access', 'join millions', 'no catch', 'no disappointment',
  'no experience needed', 'no gimmick', 'no middleman', 'no questions asked',
  'no risk', 'not junk', 'not spam', 'number one', 'one time',
  'one-time', 'opportunity', 'opt in', 'outstanding', 'outstanding values',
  'promise', 'revolutionary', 'satisfaction', 'satisfaction guaranteed',
  'secret', 'seriously', 'special', 'success', 'superb',
  'the best', 'this isn\'t junk', 'this isn\'t spam', 'trial', 'try it free',
  'unbelievable', 'unlimited', 'unsolicited', 'valuable', 'visit our website',
  'what are you waiting for', 'will not believe your eyes',

  // health & pharma
  'cure', 'diet', 'lose weight', 'lose belly fat', 'medicine', 'miracle',
  'pharmacy', 'prescription', 'supplement', 'viagra', 'weight loss',
  'anti-aging', 'body enhancement', 'life insurance', 'online pharmacy',
  'enhancement', 'herbal', 'wellness',

  // shady tactics
  'as seen on', 'bulk mail', 'direct email', 'direct marketing', 'do not reply',
  'email marketing', 'for just', 'form below', 'hidden', 'human growth hormone',
  'if you are interested', 'increase', 'mass email', 'mlm', 'multi-level marketing',
  'nigerian', 'offshore', 'open immediately', 'opt-in', 'per week',
  'pre-approved', 'remove', 'removes wrinkles', 'reply remove',
  'request', 'reverses', 'rolex', 'score', 'sent in compliance',
  'social security number', 'stock alert', 'stock pick', 'subscribe',
  'terms and conditions', 'undisclosed recipient', 'unsubscribe',
  'we hate spam', 'web traffic', 'work from home', 'xxx',
  'double your income', 'expect to earn', 'home based', 'home employment',
  'join us', 'luxury', 'marketing', 'notspam', 'opt in',
  'per day', 'per month', 'potential earnings', 'sign up free',
  'this is not spam', 'while you sleep', 'be your own boss',

  // call-to-action spam
  'apply now', 'book now', 'call free', 'call toll-free', 'claim now',
  'click to remove', 'contact us', 'download now', 'enroll now',
  'find out more', 'get now', 'join now', 'learn more', 'register now',
  'reserve now', 'see for yourself', 'sign up', 'sign up now',
  'start now', 'subscribe now', 'try now', 'visit now',
];

// Deduplicate and sort by length descending (match longer phrases first)
const UNIQUE_TRIGGERS = [...new Set(SPAM_TRIGGERS)].sort((a, b) => b.length - a.length);

function analyzeEmail(subject, body) {
  const fullText = `${subject} ${body}`.toLowerCase();
  const issues = [];
  let deductions = 0;

  // 1. Check spam trigger words
  const foundTriggers = [];
  for (const trigger of UNIQUE_TRIGGERS) {
    const regex = new RegExp(`\\b${trigger.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    const matches = `${subject} ${body}`.match(regex);
    if (matches) {
      foundTriggers.push({ word: trigger, count: matches.length });
    }
  }
  if (foundTriggers.length > 0) {
    const penalty = Math.min(40, foundTriggers.length * 3);
    deductions += penalty;
    issues.push({
      severity: foundTriggers.length > 5 ? 'high' : foundTriggers.length > 2 ? 'medium' : 'low',
      title: `${foundTriggers.length} spam trigger word${foundTriggers.length > 1 ? 's' : ''} found`,
      detail: foundTriggers.slice(0, 12).map(t => t.word).join(', ') + (foundTriggers.length > 12 ? ` +${foundTriggers.length - 12} more` : ''),
      suggestion: 'Replace or remove spam trigger words. Use natural, conversational language instead.',
    });
  }

  // 2. Check for ALL CAPS words (3+ letter words in caps, need 2+ consecutive or 3+ total)
  const capsMatches = `${subject} ${body}`.match(/\b[A-Z]{3,}\b/g) || [];
  if (capsMatches.length >= 2) {
    const penalty = Math.min(15, capsMatches.length * 3);
    deductions += penalty;
    issues.push({
      severity: capsMatches.length > 4 ? 'high' : 'medium',
      title: `${capsMatches.length} ALL CAPS word${capsMatches.length > 1 ? 's' : ''} detected`,
      detail: capsMatches.slice(0, 8).join(', '),
      suggestion: 'Avoid excessive capitalization. It triggers spam filters and feels aggressive to readers.',
    });
  }

  // 3. Check for excessive exclamation marks
  const exclamations = (`${subject} ${body}`.match(/!/g) || []).length;
  if (exclamations > 1) {
    const penalty = Math.min(15, exclamations * 3);
    deductions += penalty;
    issues.push({
      severity: exclamations > 4 ? 'high' : 'medium',
      title: `${exclamations} exclamation mark${exclamations > 1 ? 's' : ''} found`,
      detail: exclamations > 3 ? 'Multiple exclamation marks are a strong spam signal' : 'More than one exclamation mark can trigger filters',
      suggestion: 'Use at most one exclamation mark per email. Prefer periods for a professional tone.',
    });
  }

  // 4. Check for excessive links
  const linkCount = (`${subject} ${body}`.match(/https?:\/\//gi) || []).length;
  if (linkCount > 2) {
    const penalty = Math.min(15, (linkCount - 2) * 5);
    deductions += penalty;
    issues.push({
      severity: linkCount > 5 ? 'high' : 'medium',
      title: `${linkCount} links detected`,
      detail: 'Too many links increase the likelihood of spam classification',
      suggestion: 'Limit to 1-2 links per email. Include only the most essential link.',
    });
  }

  // 5. Check for money symbols
  const moneyMatches = (`${subject} ${body}`.match(/[$\u20AC\u00A3]/g) || []).length;
  if (moneyMatches > 0) {
    const penalty = Math.min(10, moneyMatches * 3);
    deductions += penalty;
    issues.push({
      severity: moneyMatches > 3 ? 'high' : 'low',
      title: `${moneyMatches} currency symbol${moneyMatches > 1 ? 's' : ''} found`,
      detail: 'Currency symbols ($, \u20AC, \u00A3) are commonly flagged by spam filters',
      suggestion: 'Spell out amounts in words where possible, or remove monetary references.',
    });
  }

  // 6. Check subject line length
  if (subject.length > 60) {
    deductions += 5;
    issues.push({
      severity: 'low',
      title: `Subject line too long (${subject.length} characters)`,
      detail: 'Subject lines over 60 characters may be truncated and can reduce open rates',
      suggestion: 'Keep subject lines under 60 characters for best deliverability and readability.',
    });
  }

  // 7. Check for empty subject
  if (subject.trim().length === 0 && body.trim().length > 0) {
    deductions += 10;
    issues.push({
      severity: 'high',
      title: 'Missing subject line',
      detail: 'Emails without a subject line are heavily penalized by spam filters',
      suggestion: 'Always include a clear, relevant subject line.',
    });
  }

  // 8. Check for question marks in subject (multiple)
  const subjectQuestions = (subject.match(/\?/g) || []).length;
  if (subjectQuestions > 1) {
    deductions += 5;
    issues.push({
      severity: 'low',
      title: `${subjectQuestions} question marks in subject line`,
      detail: 'Multiple question marks in the subject can appear spammy',
      suggestion: 'Use a single question or rephrase as a statement.',
    });
  }

  // 9. Check for image-heavy indicators (placeholder)
  const imgCount = (body.match(/<img/gi) || []).length;
  if (imgCount > 2) {
    deductions += 8;
    issues.push({
      severity: 'medium',
      title: `${imgCount} images detected in HTML`,
      detail: 'High image-to-text ratio is a common spam indicator',
      suggestion: 'Maintain a healthy text-to-image ratio. Use images sparingly.',
    });
  }

  // 10. Check for spammy character patterns
  const repeatedChars = `${subject} ${body}`.match(/(.)\1{4,}/g) || [];
  if (repeatedChars.length > 0) {
    deductions += 5;
    issues.push({
      severity: 'low',
      title: 'Repeated characters detected',
      detail: `Found patterns like "${repeatedChars[0]}"`,
      suggestion: 'Avoid repeating characters excessively (e.g., "!!!!!!" or "freeee").',
    });
  }

  // Calculate final score
  const score = Math.max(0, Math.min(100, 100 - deductions));

  // Sort issues by severity
  const severityOrder = { high: 0, medium: 1, low: 2 };
  issues.sort((a, b) => severityOrder[a.severity] - severityOrder[b.severity]);

  return { score, issues, triggerCount: foundTriggers.length };
}

function ScoreRing({ score }) {
  const color = score >= 80 ? '#22c55e' : score >= 50 ? '#f59e0b' : '#ef4444';
  const circ = 2 * Math.PI * 42;
  const offset = circ - (score / 100) * circ;

  const label = score >= 80 ? 'Low spam risk' : score >= 50 ? 'Moderate spam risk' : 'High spam risk';

  return (
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
      <p className="text-[15px] font-semibold text-black">Spam Score</p>
      <p className="text-sm text-[#6b7280] mt-1">{label}</p>
    </div>
  );
}

function IssuesList({ issues }) {
  if (issues.length === 0) {
    return (
      <div className="border border-gray-200 rounded-lg p-6 text-center">
        <CheckCircleIcon size={32} weight="fill" className="text-emerald-500 mx-auto mb-2" />
        <p className="text-sm font-medium text-black">No issues detected</p>
        <p className="text-xs text-[#6b7280] mt-1">Your email content looks clean and deliverable.</p>
      </div>
    );
  }

  const severityConfig = {
    high: { icon: XCircleIcon, color: 'text-red-500', bg: 'bg-red-50', label: 'High' },
    medium: { icon: WarningIcon, color: 'text-amber-500', bg: 'bg-amber-50', label: 'Medium' },
    low: { icon: WarningIcon, color: 'text-[#9ca3af]', bg: 'bg-gray-50', label: 'Low' },
  };

  return (
    <div>
      <p className="text-xs font-medium text-[#6b7280] mb-2">{issues.length} issue{issues.length > 1 ? 's' : ''} found</p>
      <div className="border border-gray-200 rounded-lg divide-y divide-gray-100 overflow-hidden">
        {issues.map((issue, i) => {
          const config = severityConfig[issue.severity];
          const Icon = config.icon;
          return (
            <div key={i} className={`px-4 py-3 ${config.bg}`}>
              <div className="flex items-start gap-3">
                <Icon size={16} weight="fill" className={`${config.color} shrink-0 mt-0.5`} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-black">{issue.title}</p>
                    <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${
                      issue.severity === 'high' ? 'bg-red-100 text-red-700' :
                      issue.severity === 'medium' ? 'bg-amber-100 text-amber-700' :
                      'bg-gray-200 text-[#6b7280]'
                    }`}>{config.label}</span>
                  </div>
                  <p className="text-xs text-[#6b7280] mt-0.5">{issue.detail}</p>
                  <p className="text-xs text-[#9ca3af] mt-1 italic">{issue.suggestion}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function SpamChecker() {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleCheck = (e) => {
    e.preventDefault();
    if (!subject.trim() && !body.trim()) return;
    setLoading(true);
    setResult(null);

    // Simulate brief processing delay for UX
    setTimeout(() => {
      const analysis = analyzeEmail(subject, body);
      setResult(analysis);
      setLoading(false);
    }, 600);
  };

  return (
    <div>
      <form onSubmit={handleCheck} className="space-y-3">
        <div>
          <label htmlFor="spam-subject" className="block text-xs font-medium text-[#6b7280] mb-1.5">Subject line</label>
          <input
            id="spam-subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter your email subject line..."
            className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-[#e5e5e5] text-sm sm:text-[15px] text-black placeholder:text-[#9ca3af] focus:outline-none transition-all"
            disabled={loading}
          />
        </div>
        <div>
          <label htmlFor="spam-body" className="block text-xs font-medium text-[#6b7280] mb-1.5">Email body</label>
          <textarea
            id="spam-body"
            rows={6}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Paste your email body content here..."
            className="w-full px-4 py-2.5 sm:py-3 rounded-lg border border-[#e5e5e5] text-sm sm:text-[15px] text-black placeholder:text-[#9ca3af] focus:outline-none transition-all resize-none"
            disabled={loading}
          />
        </div>
        <button
          type="submit"
          disabled={loading || (!subject.trim() && !body.trim())}
          className="relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#2663eb] text-white rounded-lg text-sm sm:text-[15px] font-medium transition-all hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          <span className={loading ? 'opacity-0' : ''}>Check for Spam</span>
          {loading && (
            <svg className="animate-spin h-4 w-4 absolute" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          )}
        </button>
      </form>

      {result && (
        <div className="mt-8">
          <ScoreRing score={result.score} />
          <IssuesList issues={result.issues} />
        </div>
      )}
    </div>
  );
}
