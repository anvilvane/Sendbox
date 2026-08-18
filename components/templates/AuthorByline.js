import Image from 'next/image';
import Link from 'next/link';

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

export default function AuthorByline({ author, publishedDate, updatedDate, readTime }) {
  if (!author) return null;

  const authorUrl = `/author/${author.slug}`;
  const updated = updatedDate || publishedDate;

  return (
    <div className="flex items-center gap-3">
      <Link href={authorUrl} className="flex-shrink-0">
        <Image
          src={author.avatar}
          alt={author.name}
          width={38}
          height={38}
          className="rounded-full border border-gray-200"
        />
      </Link>
      <div className="text-[13px] leading-tight">
        <div className="text-[#6b7280]">
          By{' '}
          <Link
            href={authorUrl}
            className="font-medium text-black hover:text-[#2663eb] transition-colors no-underline"
          >
            {author.name}
          </Link>
        </div>
        <div className="flex items-center gap-2 text-[12px] text-[#9ca3af] mt-1">
          {readTime && <span>{readTime} min read</span>}
          {readTime && updated && <span className="w-px h-3 bg-gray-200" />}
          {updated && <span>Updated {formatDate(updated)}</span>}
        </div>
      </div>
    </div>
  );
}
