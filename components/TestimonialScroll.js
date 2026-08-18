
import React from 'react';
import Image from 'next/image';

const TestimonialScroll = () => {
  return (
    <section className="py-10 -mx-4 md:-mx-8 relative overflow-hidden bg-white">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      {/* Scrolling logos */}
      <div className="flex w-max animate-scroll">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-10 md:gap-16 px-5 md:px-10" aria-hidden={i > 0}>
            <Image
              src="https://cdn.brandfetch.io/idVwf3SBes/w/279/h/71/theme/light/logo.png"
              alt="Understory"
              width={80}
              height={20}
              className="h-5 md:h-7 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-80 transition-all invert"
            />
            <Image
              src="https://cdn.brandfetch.io/idcPbmfRK5/w/813/h/716/theme/light/logo.png"
              alt="The Playbook"
              width={96}
              height={24}
              className="h-6 md:h-8 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-80 transition-all invert"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="107"
              height="20"
              fill="none"
              viewBox="0 0 107 20"
              className="h-5 md:h-7 w-auto opacity-60 grayscale hover:grayscale-0 hover:opacity-80 transition-all"
            >
              <path fill="#0B0B0F" d="M7.155 10.896a1.08 1.08 0 0 1-.006-1.707c.588-.458 1.14-.979 1.645-1.563L6.32 5.544A8.47 8.47 0 0 1 0 8.462v3.21c4.654.008 8.42 3.734 8.413 8.322l3.254.006c.007-3.695-1.763-6.991-4.512-9.104m5.691-1.792c.56.43.563 1.274.005 1.708-.588.458-1.14.978-1.645 1.562l2.475 2.082a8.47 8.47 0 0 1 6.32-2.918L20 8.328c-4.654-.008-8.42-3.734-8.413-8.322L8.334 0c-.007 3.696 1.763 6.991 4.512 9.104m27.586.623q0 2.351-.88 4.027-.875 1.67-2.387 2.557-1.506.888-3.416.888t-3.424-.888q-1.505-.895-2.386-2.564-.873-1.676-.874-4.02 0-2.35.874-4.02.881-1.676 2.386-2.564 1.513-.887 3.424-.887 1.91 0 3.416.887 1.513.888 2.386 2.564.88 1.67.88 4.02m-2.65 0q0-1.655-.518-2.79-.51-1.145-1.42-1.727-.91-.59-2.095-.59-1.187 0-2.096.59-.909.582-1.427 1.726-.511 1.137-.511 2.791 0 1.655.51 2.799.519 1.136 1.428 1.725.91.583 2.096.583t2.095-.583q.91-.59 1.42-1.725.519-1.144.519-2.799m11.18 2.685V6.09h2.571V17h-2.492v-1.939h-.114a3.3 3.3 0 0 1-1.215 1.499q-.837.582-2.066.582-1.072 0-1.897-.476-.816-.483-1.278-1.399-.462-.923-.462-2.23V6.09h2.571v6.548q0 1.037.569 1.648.568.61 1.491.61.569 0 1.1-.276.534-.278.874-.824.348-.555.348-1.385m9.863-6.321v1.99h-6.272V6.09zm-4.723-2.614h2.57V13.72q0 .518.157.795.163.27.426.37t.582.099q.242 0 .44-.036.207-.034.313-.063l.434 2.01q-.206.07-.59.156-.376.084-.923.1-.966.027-1.74-.292a2.7 2.7 0 0 1-1.229-1.009q-.447-.681-.44-1.704zM60.522 17V2.455h2.572v5.44h.106q.2-.398.562-.845.362-.455.98-.774.618-.327 1.576-.327 1.264 0 2.28.646 1.023.639 1.62 1.896.603 1.251.603 3.069 0 1.797-.59 3.054-.588 1.257-1.604 1.917t-2.301.66q-.938 0-1.556-.312a3.2 3.2 0 0 1-.994-.753 5 5 0 0 1-.576-.845h-.149V17zm2.522-5.454q0 1.058.299 1.853.305.796.873 1.243.576.44 1.392.44.852 0 1.428-.454.575-.462.866-1.257.3-.803.299-1.825 0-1.017-.292-1.805-.291-.788-.866-1.235-.576-.448-1.435-.448-.825 0-1.399.433-.576.434-.874 1.215-.29.78-.29 1.84m13.922 5.667q-1.6 0-2.77-.703a4.77 4.77 0 0 1-1.819-1.967q-.639-1.265-.639-2.955t.64-2.962a4.76 4.76 0 0 1 1.818-1.974q1.17-.703 2.77-.703 1.597 0 2.77.703a4.7 4.7 0 0 1 1.81 1.974q.647 1.272.647 2.962t-.647 2.955a4.73 4.73 0 0 1-1.81 1.967q-1.173.703-2.77.703m.014-2.06q.866 0 1.449-.475.582-.483.866-1.293.291-.81.291-1.804 0-1.001-.291-1.811-.284-.817-.866-1.3t-1.45-.483q-.887 0-1.477.483-.582.483-.873 1.3a5.5 5.5 0 0 0-.284 1.811q0 .994.284 1.804.291.81.873 1.293.59.475 1.478.475m9.166-4.545V17h-2.571V6.09h2.457v1.855h.128q.376-.917 1.2-1.456.832-.54 2.053-.54 1.13 0 1.967.483.846.483 1.307 1.399.469.916.462 2.223V17h-2.571v-6.548q0-1.094-.568-1.712-.562-.618-1.556-.618-.675 0-1.2.298a2.07 2.07 0 0 0-.817.846q-.291.553-.291 1.342m12.865 6.584q-1.285 0-2.301-.66-1.016-.661-1.605-1.918-.59-1.257-.59-3.054 0-1.819.597-3.069.603-1.257 1.626-1.896a4.2 4.2 0 0 1 2.28-.646q.959 0 1.577.327.617.319.98.774.361.447.561.845h.106v-5.44h2.578V17h-2.528v-1.719h-.156a4.4 4.4 0 0 1-.576.845 3.2 3.2 0 0 1-.994.753q-.618.313-1.555.313m.717-2.11q.818 0 1.392-.44.576-.447.874-1.243.298-.795.298-1.853 0-1.06-.298-1.84-.291-.78-.867-1.215-.568-.433-1.399-.433-.86 0-1.435.448-.575.447-.866 1.235-.291.789-.291 1.805 0 1.022.29 1.825.3.796.874 1.257.583.454 1.428.454"></path>
            </svg>
            <Image
              src="https://cdn.brandfetch.io/id08lbJEPS/w/500/h/114/theme/dark/logo.png"
              alt="LeadHaste"
              width={64}
              height={16}
              className="h-4 md:h-6 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-80 transition-all"
            />
            <Image
              src="https://cdn.prod.website-files.com/66fe5a1a88c73ef8f270d312/6728e4376d19a8a8822b936d_11x-logo.svg"
              alt="11x"
              width={80}
              height={20}
              className="h-5 md:h-7 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-80 transition-all"
            />
            <Image
              src="https://framerusercontent.com/images/rwQEpoTSZCmbSJHV0OUafik9Zo.png?scale-down-to=512"
              alt="Vectify"
              width={80}
              height={20}
              className="h-5 md:h-7 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-80 transition-all invert"
            />
            <div className="flex items-center gap-2 opacity-60 grayscale hover:grayscale-0 hover:opacity-80 transition-all">
              <Image
                src="https://cdn.brandfetch.io/idVm_YbgAX/w/180/h/180/theme/dark/logo.png"
                alt="Lambda Group"
                width={80}
                height={20}
                className="h-5 md:h-7 w-auto object-contain"
              />
              <span className="text-sm md:text-base font-semibold text-black">Lambda Group</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialScroll;
