import externalLinks from '@/data/external-links';

// Render external citation links for the tools mentioned on a page
// Pass an array of tool keys like ['instantly', 'smartlead', 'sendbox']
export default function ExternalSources({ tools = [] }) {
  if (!tools || tools.length === 0) return null;

  const links = tools
    .map((key) => {
      const data = externalLinks[key];
      if (!data) return null;
      return { key, ...data };
    })
    .filter(Boolean);

  if (links.length === 0) return null;

  return (
    <div className="border-t border-gray-100 pt-5 mt-8">
      <p className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-3">Sources</p>
      <div className="flex flex-wrap gap-x-5 gap-y-2">
        {links.map((link) => (
          <div key={link.key} className="flex items-center gap-2 text-[12px] text-[#9ca3af]">
            <span className="text-[#6b7280] font-medium capitalize">{link.key === 'replyio' ? 'Reply.io' : link.key === 'apollo' ? 'Apollo.io' : link.key}</span>
            {link.g2 && (
              <a href={link.g2} target="_blank" rel="noopener noreferrer" className="hover:text-[#695AF2] transition-colors">G2</a>
            )}
            {link.capterra && (
              <a href={link.capterra} target="_blank" rel="noopener noreferrer" className="hover:text-[#695AF2] transition-colors">Capterra</a>
            )}
            {link.website && (
              <a href={link.website} target="_blank" rel="noopener noreferrer" className="hover:text-[#695AF2] transition-colors">Website</a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
