import Link from 'next/link';

export default function NotFoundContent() {
  return (
    <main className="bg-white min-h-screen flex items-center px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-6xl mx-auto w-full">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 mb-6 text-[15px] font-medium text-black">
            <div className="w-5 h-1.5 bg-[#2663eb] rounded-xl" />
            <span>error 404</span>
          </div>

          <h1 className="text-[clamp(2rem,5vw,3rem)] font-semibold tracking-tight leading-[1.1] text-black mb-5">
            This page bounced.
          </h1>

          <p className="text-[17px] text-[#6b7280] leading-relaxed mb-8 max-w-md">
            We couldn&apos;t deliver you to that URL. It may have moved, been renamed, or never existed in the first place.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#2663eb] text-white rounded-lg text-sm sm:text-[15px] font-medium transition-all hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg no-underline"
            >
              Back to homepage
            </Link>
            <Link
              href="/compare"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-transparent text-[#6b7280] border border-[#e5e5e5] rounded-lg text-sm sm:text-[15px] font-medium transition-all hover:bg-[#f5f5f5] hover:text-black hover:-translate-y-0.5 no-underline"
            >
              Compare tools
            </Link>
          </div>

          <p className="mt-6 text-[14px] text-[#9ca3af]">
            Or head to{' '}
            <Link href="/tools" className="text-[#2663eb] hover:underline no-underline">free tools</Link>,{' '}
            <Link href="/alternatives" className="text-[#2663eb] hover:underline no-underline">alternatives</Link>, or{' '}
            <Link href="/what-is-sendbox" className="text-[#2663eb] hover:underline no-underline">what is Sendbox</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
