
import React from 'react';

const Testimonial = () => {
  const stats = [
    { value: '6 min', label: 'to first campaign' },
    { value: 'Zero', label: 'training needed' },
    { value: '100%', label: 'self-serve' }
  ];

  return (
    <section className="pt-16 md:pt-20 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-6 text-[15px] font-medium text-black">
              <div className="w-5 h-1.5 bg-[#2663eb] rounded-xl"></div>
              <span>built different</span>
            </div>

            <h2 className="text-[clamp(2rem,5vw,3rem)] font-semibold leading-[1.1] text-black mb-6 tracking-tight text-balance">
              Simple enough for anyone. Powerful enough for pros.
            </h2>

            <p className="text-lg leading-relaxed text-[#6b7280]">
              Hand it to your newest SDR. They'll launch a campaign in minutes without breaking anything. The guardrails are built in.
            </p>
          </div>

         
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
