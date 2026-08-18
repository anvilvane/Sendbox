import React from 'react';
import Image from 'next/image';
import { Check, X } from '@phosphor-icons/react/dist/ssr';

function ValueCell({ value, detail, winner, side }) {
  const isWinner = winner === side;
  const isSendbox = side === 'sendbox';
  const isNumericValue = typeof value === 'string' && /\d/.test(value);

  return (
    <td className={`px-4 py-3.5 text-[13px] ${isWinner ? 'bg-gray-50' : ''}`}>
      <div className="flex items-start gap-2">
        {value === true ? (
          <Check size={14} weight="bold" className={`flex-shrink-0 mt-[2px] ${isSendbox ? 'text-[#695AF2]' : 'text-black'}`} />
        ) : value === false ? (
          <X size={14} weight="bold" className="text-[#d4d4d4] flex-shrink-0 mt-[2px]" />
        ) : null}
        <div>
          <span className={`${isSendbox && isWinner ? 'font-semibold text-[#695AF2]' : isWinner ? 'font-semibold text-black' : 'text-[#374151]'} ${isNumericValue ? 'font-numeric' : ''}`}>
            {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value}
          </span>
          {detail && <p className="text-[#9ca3af] text-[11px] mt-0.5 leading-snug">{detail}</p>}
        </div>
      </div>
    </td>
  );
}

export default function ComparisonTable({ rows, sendboxName = 'Sendbox', competitorName, competitorLogo, className = '' }) {
  if (!rows || rows.length === 0) return null;

  const categories = [...new Set(rows.map(r => r.category))];

  return (
    <div className={`overflow-x-auto rounded-lg border border-gray-200 ${className}`}>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left px-4 py-3 text-[13px] font-semibold text-[#9ca3af] uppercase tracking-wider bg-gray-50 border-b border-gray-200 w-[35%]">Feature</th>
            <th className="text-left px-4 py-3 bg-gray-50 border-b border-gray-200 w-[32.5%]">
              <Image src="/icon.png" alt="Sendbox" width={80} height={20} className="h-5 w-auto" />
            </th>
            <th className="text-left px-4 py-3 bg-gray-50 border-b border-gray-200 w-[32.5%]">
              <span className="flex items-center gap-1.5">
                {competitorLogo && (
                  <Image src={competitorLogo} alt={competitorName} width={64} height={16} className="h-4 w-auto rounded" />
                )}
                <span className="text-[13px] font-semibold text-[#6b7280]">{competitorName}</span>
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <React.Fragment key={category}>
              {categories.length > 1 && (
                <tr>
                  <td colSpan={3} className="px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-[#9ca3af] bg-white border-b border-gray-100 border-t border-gray-100">
                    {category}
                  </td>
                </tr>
              )}
              {rows.filter(r => r.category === category).map((row, i) => (
                <tr key={i} className="border-b border-gray-100 last:border-0">
                  <td className="px-4 py-3.5 text-[13px] font-medium text-black">{row.feature}</td>
                  <ValueCell value={row.sendbox.value} detail={row.sendbox.detail} winner={row.winner} side="sendbox" />
                  <ValueCell value={row.competitor.value} detail={row.competitor.detail} winner={row.winner} side="competitor" />
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
