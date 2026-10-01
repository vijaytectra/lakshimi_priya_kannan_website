import React from 'react';

export default function Hero() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        
        {/* Left Column: Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center px-4 py-1.5 bg-[#EEF4FE] text-[#155DFC] rounded-full text-[11px] font-semibold uppercase tracking-wider mb-6">
            Medical Oncology &amp; Hematology &middot; Dallas
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extralight leading-[1.14] tracking-tight text-[#0F172A] mb-6">
            The same oncologist,<br />
            <span className="text-[#155DFC] font-extralight">every single visit.</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-[17px] leading-[1.65] text-[#475569] max-w-[500px] mb-8">
            Board certified in medical oncology, hematology and internal medicine &mdash; treating the cancer and the blood it happens in. One doctor, one practice, since 2006.
          </p>

          {/* Feature Badges - Single line on mobile / mobile small / mobile large */}
          <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 mb-8 md:mb-10 w-full overflow-x-auto md:overflow-visible flex-nowrap md:flex-wrap no-scrollbar pb-1.5 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2 bg-white border border-[#E2E8F0] rounded-full text-[12.5px] sm:text-[13.5px] font-medium text-[#1E293B] shadow-sm hover:border-[#CBD5E1] transition-colors shrink-0 whitespace-nowrap">
              <svg className="w-4 h-4 text-[#155DFC] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              <span>UT Southwestern fellowship</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2 bg-white border border-[#E2E8F0] rounded-full text-[12.5px] sm:text-[13.5px] font-medium text-[#1E293B] shadow-sm hover:border-[#CBD5E1] transition-colors shrink-0 whitespace-nowrap">
              <svg className="w-4 h-4 text-[#155DFC] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
              <span>Triple board certified</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2 bg-white border border-[#E2E8F0] rounded-full text-[12.5px] sm:text-[13.5px] font-medium text-[#1E293B] shadow-sm hover:border-[#CBD5E1] transition-colors shrink-0 whitespace-nowrap">
              <svg className="w-4 h-4 text-[#155DFC] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M2 12h20"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              <span>Se habla español</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-[460px] sm:max-w-none">
            <a
              href="#appointment"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-[#155DFC] hover:bg-[#0D47C7] text-white text-[15px] font-medium rounded-full shadow-[0_4px_16px_rgba(21,93,252,0.25)] hover:shadow-[0_6px_20px_rgba(21,93,252,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer text-center"
            >
              Request an appointment
            </a>
            <a
              href="#second-opinion"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 bg-white hover:bg-slate-50 border border-[#CBD5E1] hover:border-[#94A3B8] text-[#1E293B] text-[15px] font-medium rounded-full hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer text-center"
            >
              Request a second opinion
            </a>
          </div>

        </div>

        {/* Right Column: Physician Portrait & Info Cards */}
        <div className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0">
          
          {/* Pastel Ice-Blue Rounded Card Backdrop */}
          <div className="relative w-full max-w-[420px] min-h-[460px] sm:min-h-[500px] bg-[#E8F1FC] rounded-[32px] flex items-end justify-center overflow-visible">
            {/* Physician Portrait Photo */}
            <img
              src="Assets/doctor.png"
              alt="Dr. Lakshmi Kannan, M.D. - Medical Oncologist & Hematologist"
              className="w-full max-w-[380px] h-auto object-contain relative z-10 drop-shadow-sm select-none"
            />
          </div>

          {/* Floating Card: Top Right (Board Certified) */}
          <div className="absolute top-6 sm:top-10 -right-2 sm:-right-6 bg-white/95 backdrop-blur-md rounded-[20px] py-2.5 px-4 sm:px-4.5 border border-[#E2E8F0]/80 shadow-[0_12px_30px_-4px_rgba(15,23,42,0.08),0_4px_12px_-2px_rgba(15,23,42,0.04)] flex items-center gap-3 z-20 animate-pulse-slow">
            <div className="w-9 h-9 rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
              <svg className="w-4.5 h-4.5 text-[#155DFC]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#64748B]">Board Certified</span>
              <span className="text-[13.5px] font-normal text-[#0F172A] whitespace-nowrap">In three specialties</span>
            </div>
          </div>

          {/* Floating Card: Bottom Left (New Patients) */}
          <div className="absolute bottom-10 sm:bottom-14 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md rounded-[20px] py-2.5 px-4 sm:px-5 border border-[#E2E8F0]/80 shadow-[0_12px_30px_-4px_rgba(15,23,42,0.08),0_4px_12px_-2px_rgba(15,23,42,0.04)] flex items-center gap-3 z-20">
            <div className="w-9 h-9 rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
              <svg className="w-4.5 h-4.5 text-[#155DFC]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#64748B]">New Patients</span>
              <span className="text-[13.5px] font-normal text-[#0F172A] whitespace-nowrap">Seen within 3 business days</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
