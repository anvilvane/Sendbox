import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';

export default function FeatureHero({ eyebrow, headline, description, breadcrumb }) {
  return (
    <section className="bg-white relative">

      {/* Vertical guide lines - aligned with header's max-w-[80rem] container edges */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="max-w-[80rem] h-full mx-auto relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200" />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200" />
        </div>
      </div>

      {/* Main content */}
      <div className="flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 relative z-10">
        <div className="max-w-[1100px] mx-auto text-center">
          {breadcrumb && (
            <nav className="flex items-center justify-center gap-1.5 text-[13px] text-[#9ca3af] mb-4">
              <Link href="/" className="hover:text-black transition-colors">Home</Link>
              <span>/</span>
              <Link href={breadcrumb.parentHref} className="hover:text-black transition-colors">{breadcrumb.parentName}</Link>
              <span>/</span>
              <span className="text-[#6b7280]">{breadcrumb.current}</span>
            </nav>
          )}
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6 md:mb-8 text-sm sm:text-[15px] md:text-base font-medium text-black">
            <div className="w-3 sm:w-4 md:w-5 h-0.5 sm:h-1 md:h-1.5 bg-[#2663eb] rounded-xl"></div>
            <span>{eyebrow}</span>
          </div>

          {/* Title */}
          <h1 className="text-[clamp(2.25rem,5.5vw,5rem)] font-semibold leading-[1.1] text-black mx-auto mb-4 sm:mb-5 md:mb-6 max-w-[1000px] tracking-tight text-balance">
            {headline}
          </h1>

          {/* Description */}
          <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] leading-relaxed text-[#6b7280] mx-auto mb-6 sm:mb-8 md:mb-10 max-w-[600px] md:max-w-[700px] text-balance">
            {description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row items-center justify-center gap-3">
            <a
              href="https://app.sendbox.ai/login"
              data-fast-goal="click_start_sending"
              data-fast-goal-location="feature_hero"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#2663eb] text-white rounded-lg text-sm sm:text-[15px] font-medium transition-all hover:bg-[#1d4ed8] hover:-translate-y-0.5 hover:shadow-lg group"
            >
              Start Sending
              <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="/pricing"
              data-fast-goal="click_view_pricing"
              data-fast-goal-location="feature_hero"
              className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-transparent text-[#6b7280] border border-[#e5e5e5] rounded-lg text-sm sm:text-[15px] font-medium transition-all hover:bg-[#f5f5f5] hover:text-black hover:-translate-y-0.5"
            >
              View Pricing
            </a>
          </div>

          {/* Trust row */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <span className="text-xs sm:text-sm text-[#6b7280]">Set up in under 15 minutes</span>
            <span className="w-px h-3 bg-gray-200"></span>
            <a href="https://antx.vc" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-stone-200 hover:border-stone-300 transition-colors group">
              <span className="text-[10px] text-stone-500 uppercase tracking-wider font-mono">Backed by</span>
              <span className="w-px h-3 bg-stone-200"></span>
              <span className="text-xs font-semibold text-stone-700 group-hover:text-stone-900 transition-colors">antx.vc</span>
              <svg className="w-2.5 h-2.5 text-stone-400 group-hover:text-stone-600 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Logo Banner - bg-white + z-10 covers the guide lines within this area */}
      <div className="relative bg-white z-10 border-t border-b border-gray-200">
        {/* Top corner dots */}
        <div className="absolute top-0 inset-x-0 hidden lg:block pointer-events-none">
          <div className="max-w-[80rem] mx-auto relative">
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-[#7196f4]" />
            <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-[7px] h-[7px] rounded-full bg-[#7196f4]" />
          </div>
        </div>
        {/* Bottom corner dots */}
        <div className="absolute bottom-0 inset-x-0 hidden lg:block pointer-events-none">
          <div className="max-w-[80rem] mx-auto relative">
            <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[7px] h-[7px] rounded-full bg-[#7196f4]" />
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[7px] h-[7px] rounded-full bg-[#7196f4]" />
          </div>
        </div>

        <div className="py-10 overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling logos */}
          <div className="flex w-max animate-scroll">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-10 md:gap-16 px-5 md:px-10" aria-hidden={i > 0}>
                <Image src="https://cdn.brandfetch.io/idVwf3SBes/w/279/h/71/theme/light/logo.png" alt="Understory" className="h-5 md:h-7 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-80 transition-all invert" width={279} height={71} unoptimized />
                <Image src="https://cdn.brandfetch.io/idcPbmfRK5/w/813/h/716/theme/light/logo.png" alt="The Playbook" className="h-6 md:h-8 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-80 transition-all invert" width={81} height={72} unoptimized />
                <svg xmlns="http://www.w3.org/2000/svg" width="107" height="20" fill="none" viewBox="0 0 107 20" className="h-5 md:h-7 w-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-80 transition-all"><path fill="#0B0B0F" d="M7.155 10.896a1.08 1.08 0 0 1-.006-1.707c.588-.458 1.14-.979 1.645-1.563L6.32 5.544A8.47 8.47 0 0 1 0 8.462v3.21c4.654.008 8.42 3.734 8.413 8.322l3.254.006c.007-3.695-1.763-6.991-4.512-9.104m5.691-1.792c.56.43.563 1.274.005 1.708-.588.458-1.14.978-1.645 1.562l2.475 2.082a8.47 8.47 0 0 1 6.32-2.918L20 8.328c-4.654-.008-8.42-3.734-8.413-8.322L8.334 0c-.007 3.696 1.763 6.991 4.512 9.104m27.586.623q0 2.351-.88 4.027-.875 1.67-2.387 2.557-1.506.888-3.416.888t-3.424-.888q-1.505-.895-2.386-2.564-.873-1.676-.874-4.02 0-2.35.874-4.02.881-1.676 2.386-2.564 1.513-.887 3.424-.887 1.91 0 3.416.887 1.513.888 2.386 2.564.88 1.67.88 4.02m-2.65 0q0-1.655-.518-2.79-.51-1.145-1.42-1.727-.91-.59-2.095-.59-1.187 0-2.096.59-.909.582-1.427 1.726-.511 1.137-.511 2.791 0 1.655.51 2.799.519 1.136 1.428 1.725.91.583 2.096.583t2.095-.583q.91-.59 1.42-1.725.519-1.144.519-2.799m11.18 2.685V6.09h2.571V17h-2.492v-1.939h-.114a3.3 3.3 0 0 1-1.215 1.499q-.837.582-2.066.582-1.072 0-1.897-.476-.816-.483-1.278-1.399-.462-.923-.462-2.23V6.09h2.571v6.548q0 1.037.569 1.648.568.61 1.491.61.569 0 1.1-.276.534-.278.874-.824.348-.555.348-1.385m9.863-6.321v1.99h-6.272V6.09zm-4.723-2.614h2.57V13.72q0 .518.157.795.163.27.426.37t.582.099q.242 0 .44-.036.207-.034.313-.063l.434 2.01q-.206.07-.59.156-.376.084-.923.1-.966.027-1.74-.292a2.7 2.7 0 0 1-1.229-1.009q-.447-.681-.44-1.704zM60.522 17V2.455h2.572v5.44h.106q.2-.398.562-.845.362-.455.98-.774.618-.327 1.576-.327 1.264 0 2.28.646 1.023.639 1.62 1.896.603 1.251.603 3.069 0 1.797-.59 3.054-.588 1.257-1.604 1.917t-2.301.66q-.938 0-1.556-.312a3.2 3.2 0 0 1-.994-.753 5 5 0 0 1-.576-.845h-.149V17zm2.522-5.454q0 1.058.299 1.853.305.796.873 1.243.576.44 1.392.44.852 0 1.428-.454.575-.462.866-1.257.3-.803.299-1.825 0-1.017-.292-1.805-.291-.788-.866-1.235-.576-.448-1.435-.448-.825 0-1.399.433-.576.434-.874 1.215-.29.78-.29 1.84m13.922 5.667q-1.6 0-2.77-.703a4.77 4.77 0 0 1-1.819-1.967q-.639-1.265-.639-2.955t.64-2.962a4.76 4.76 0 0 1 1.818-1.974q1.17-.703 2.77-.703 1.597 0 2.77.703a4.7 4.7 0 0 1 1.81 1.974q.647 1.272.647 2.962t-.647 2.955a4.73 4.73 0 0 1-1.81 1.967q-1.173.703-2.77.703m.014-2.06q.866 0 1.449-.475.582-.483.866-1.293.291-.81.291-1.804 0-1.001-.291-1.811-.284-.817-.866-1.3t-1.45-.483q-.887 0-1.477.483-.582.483-.873 1.3a5.5 5.5 0 0 0-.284 1.811q0 .994.284 1.804.291.81.873 1.293.59.475 1.478.475m9.166-4.545V17h-2.571V6.09h2.457v1.855h.128q.376-.917 1.2-1.456.832-.54 2.053-.54 1.13 0 1.967.483.846.483 1.307 1.399.469.916.462 2.223V17h-2.571v-6.548q0-1.094-.568-1.712-.562-.618-1.556-.618-.675 0-1.2.298a2.07 2.07 0 0 0-.817.846q-.291.553-.291 1.342m12.865 6.584q-1.285 0-2.301-.66-1.016-.661-1.605-1.918-.59-1.257-.59-3.054 0-1.819.597-3.069.603-1.257 1.626-1.896a4.2 4.2 0 0 1 2.28-.646q.959 0 1.577.327.617.319.98.774.361.447.561.845h.106v-5.44h2.578V17h-2.528v-1.719h-.156a4.4 4.4 0 0 1-.576.845 3.2 3.2 0 0 1-.994.753q-.618.313-1.555.313m.717-2.11q.818 0 1.392-.44.576-.447.874-1.243.298-.795.298-1.853 0-1.06-.298-1.84-.291-.78-.867-1.215-.568-.433-1.399-.433-.86 0-1.435.448-.575.447-.866 1.235-.291.789-.291 1.805 0 1.022.29 1.825.3.796.874 1.257.583.454 1.428.454"></path></svg>
                <Image src="https://cdn.brandfetch.io/id08lbJEPS/w/500/h/114/theme/dark/logo.png" alt="LeadHaste" className="h-4 md:h-6 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-80 transition-all" width={500} height={114} unoptimized />
                <Image src="https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/6728e4376d19a8a8822b936d_11x-logo.svg" alt="11x" className="h-5 md:h-7 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-80 transition-all" width={120} height={40} unoptimized />
                <Image src="https://framerusercontent.com/images/rwQEpoTSZCmbSJHV0OUafik9Zo.png?scale-down-to=512" alt="Vectify" className="h-5 md:h-7 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-80 transition-all invert" width={512} height={128} />
                <div className="flex items-center gap-2 opacity-60 grayscale hover:grayscale-0 hover:opacity-80 transition-all">
                  <Image src="https://cdn.brandfetch.io/idVm_YbgAX/w/180/h/180/theme/dark/logo.png" alt="Lambda Group" className="h-5 md:h-7 w-auto object-contain" width={180} height={180} unoptimized />
                  <span className="text-sm md:text-base font-semibold text-black">Lambda Group</span>
                </div>
                <Image src="https://framerusercontent.com/images/l0r0f9Y08QqaHAOmqXCQxYI0CQ.png?width=500&height=94" alt="Company Logo" className="h-5 md:h-7 w-auto object-contain opacity-60 grayscale invert hover:opacity-80 transition-all" width={500} height={94} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
