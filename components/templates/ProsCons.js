import { Plus, Minus } from '@phosphor-icons/react/dist/ssr';

function ProConList({ items, type }) {
  const isPro = type === 'pros';

  return (
    <div>
      <p className="text-[13px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-3">
        {isPro ? 'Strengths' : 'Limitations'}
      </p>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-[14px] text-[#374151] leading-relaxed">
            {isPro ? (
              <Plus size={12} weight="bold" className="text-black flex-shrink-0 mt-[5px]" />
            ) : (
              <Minus size={12} weight="bold" className="text-[#9ca3af] flex-shrink-0 mt-[5px]" />
            )}
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProsCons({ name, pros, cons }) {
  if ((!pros || pros.length === 0) && (!cons || cons.length === 0)) return null;

  return (
    <div>
      {name && (
        <h3 className="text-base font-semibold text-black mb-4">{name}</h3>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pros && pros.length > 0 && <ProConList items={pros} type="pros" />}
        {cons && cons.length > 0 && <ProConList items={cons} type="cons" />}
      </div>
    </div>
  );
}
