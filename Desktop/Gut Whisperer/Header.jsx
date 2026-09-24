import React, { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="w-full max-w-[1200px] h-[72px] md:h-20 mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center">
        
        {/* Brand: Desktop (>= 1024px) */}
        <a href="#" className="hidden lg:flex py-1.5 flex-col justify-start items-start gap-[3px] group text-left shrink-0">
          <span className="text-gray-900 text-lg font-medium tracking-tight group-hover:text-blue-700 transition-colors whitespace-nowrap">
            Dr. Lakshmi Kannan
          </span>
          <span className="text-gray-500 text-[10px] font-medium uppercase leading-4 tracking-widest whitespace-nowrap">
            Oncology &amp; Hematology
          </span>
        </a>

        {/* Brand: Mobile & Tablet (< 1024px: Mobile Small, Mobile, Mobile Large, Tablets) */}
        <a href="#" className="flex lg:hidden flex-col justify-start items-start text-left py-1 shrink-0">
          <span className="text-[#0F172A] text-[16px] min-[360px]:text-[16.5px] min-[390px]:text-[18px] sm:text-[19px] font-semibold tracking-tight leading-[1.12] whitespace-nowrap">
            Lakshmi<br />Kannan
          </span>
          <span className="text-[#64748B] text-[7.5px] min-[360px]:text-[7.8px] min-[390px]:text-[8px] sm:text-[8.5px] font-semibold uppercase tracking-[0.14em] leading-[1.22] mt-0.5 sm:mt-1 whitespace-nowrap">
            ONCOLOGY &amp;<br />RESEARCH INSTITUTE
          </span>
        </a>

        {/* Center Navigation Links (Desktop Only: >= 1024px) */}
        <nav className="hidden lg:flex items-center space-x-1 shrink-0">
          <a
            href="#start-here"
            className="min-h-11 px-3 xl:px-3.5 rounded-full flex items-center text-gray-500 hover:text-gray-900 text-sm font-normal leading-6 transition-colors whitespace-nowrap"
          >
            Start here
          </a>
          <a
            href="#about"
            className="min-h-11 px-3 xl:px-3.5 rounded-full flex items-center text-gray-500 hover:text-gray-900 text-sm font-normal leading-6 transition-colors whitespace-nowrap"
          >
            About
          </a>
          <a
            href="#expertise"
            className="min-h-11 px-3 xl:px-3.5 rounded-full flex items-center text-gray-500 hover:text-gray-900 text-sm font-normal leading-6 transition-colors whitespace-nowrap"
          >
            Expertise
          </a>
          <a
            href="#visit"
            className="min-h-11 px-3 xl:px-3.5 rounded-full flex items-center text-gray-500 hover:text-gray-900 text-sm font-normal leading-6 transition-colors whitespace-nowrap"
          >
            Your visit
          </a>
          <a
            href="#access"
            className="min-h-11 px-3 xl:px-3.5 rounded-full flex items-center text-gray-500 hover:text-gray-900 text-sm font-normal leading-6 transition-colors whitespace-nowrap"
          >
            Access
          </a>
        </nav>

        {/* Desktop Action Buttons (>= 1024px only) */}
        <div className="hidden lg:flex items-center gap-2.5 xl:gap-3 shrink-0">
          {/* Phone Button */}
          <a
            href="tel:9727092580"
            aria-label="Call (972) 709-2580"
            className="min-h-11 h-11 px-3.5 xl:px-4 rounded-full border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all flex items-center gap-2 group shrink-0 whitespace-nowrap"
          >
            <svg
              className="w-4 h-4 text-gray-900 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="text-gray-900 text-sm font-medium leading-6 whitespace-nowrap">
              (972) 709-2580
            </span>
          </a>

          {/* Request Appointment Button */}
          <a
            href="#appointment"
            aria-label="Request an appointment"
            className="min-h-11 h-11 px-4 xl:px-5 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 rounded-full flex items-center justify-center gap-2.5 transition-all shadow-sm shadow-blue-700/25 group shrink-0 whitespace-nowrap"
          >
            <span className="text-white text-sm font-normal leading-6 whitespace-nowrap">
              Request an appointment
            </span>
            <svg
              className="w-3.5 h-3.5 text-white transition-transform duration-150 group-hover:translate-x-0.5 shrink-0"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.5 7H11.5M11.5 7L7.5 3M11.5 7L7.5 11"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Mobile & Tablet Header Controls (< 1024px: Mobile Small, Mobile, Mobile Large, Tablets) */}
        <div className="flex lg:hidden items-center gap-2 min-[375px]:gap-2.5 sm:gap-3 shrink-0">
          {/* Circular Phone Icon Button */}
          <a
            href="tel:9727092580"
            aria-label="Call (972) 709-2580"
            className={`w-[38px] h-[38px] min-[375px]:w-10 min-[375px]:h-10 sm:w-11 sm:h-11 rounded-full bg-[#EDF4FE] hover:bg-[#DBEAFE] active:scale-95 transition-all items-center justify-center shrink-0 ${
              mobileMenuOpen ? 'hidden md:flex' : 'flex'
            }`}
          >
            <svg
              className="w-[17px] h-[17px] min-[375px]:w-[18px] min-[375px]:h-[18px] sm:w-5 sm:h-5 text-[#0A2560] shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>

          {/* Request an Appointment Button */}
          <a
            href="#appointment"
            aria-label="Request an appointment"
            className={`h-[40px] min-[390px]:h-[42px] sm:h-11 px-3 min-[390px]:px-4 sm:px-4.5 bg-[#0D52D6] hover:bg-[#0B44B3] active:bg-[#093996] active:scale-[0.98] rounded-full items-center gap-2 sm:gap-2.5 transition-all shadow-sm shrink-0 ${
              mobileMenuOpen ? 'hidden md:flex' : 'flex'
            }`}
          >
            <svg
              className="w-4 h-4 min-[390px]:w-[18px] min-[390px]:h-[18px] sm:w-[18px] sm:h-[18px] text-white shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2.5" ry="2.5" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <div className="flex flex-col text-left leading-[1.14]">
              <span className="text-white text-[11px] min-[390px]:text-[12px] sm:text-[13px] font-medium tracking-tight whitespace-nowrap">
                Request an
              </span>
              <span className="text-white text-[11px] min-[390px]:text-[12px] sm:text-[13px] font-medium tracking-tight whitespace-nowrap">
                appointment
              </span>
            </div>
          </a>

          {/* Hamburger Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="ml-0.5 sm:ml-1.5 md:ml-2 flex items-center justify-center p-1 sm:p-1.5 text-[#0F172A] hover:text-[#0D52D6] transition-colors focus:outline-none shrink-0"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6 min-[375px]:w-7 min-[375px]:h-7 text-[#0F172A]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3.5" y1="6" x2="20.5" y2="6" />
                  <line x1="3.5" y1="12" x2="20.5" y2="12" />
                  <line x1="3.5" y1="18" x2="20.5" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* Mobile/Tablet Menu Drawer (< 1024px: shown when hamburger is toggled) */}
      {mobileMenuOpen && (
        <div className="lg:hidden w-full bg-white border-t border-gray-100 px-6 py-6 flex flex-col space-y-5 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Navigation Links */}
          <nav className="flex flex-col space-y-3 pb-5 border-b border-gray-100">
            <a
              href="#start-here"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#0F172A] text-[16px] font-medium py-1 hover:text-[#155DFC] transition-colors"
            >
              Start here
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#0F172A] text-[16px] font-medium py-1 hover:text-[#155DFC] transition-colors"
            >
              About
            </a>
            <a
              href="#expertise"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#0F172A] text-[16px] font-medium py-1 hover:text-[#155DFC] transition-colors"
            >
              Expertise
            </a>
            <a
              href="#visit"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#0F172A] text-[16px] font-medium py-1 hover:text-[#155DFC] transition-colors"
            >
              Your visit
            </a>
            <a
              href="#access"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#0F172A] text-[16px] font-medium py-1 hover:text-[#155DFC] transition-colors"
            >
              Access
            </a>
          </nav>

          {/* Action CTAs in Mobile Menu */}
          <div className="flex flex-col space-y-3 pt-1">
            {/* Request Appointment CTA */}
            <a
              href="#appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full h-12 px-5 bg-[#0D52D6] hover:bg-[#0B44B3] active:bg-[#093996] text-white rounded-full flex items-center justify-center gap-2.5 font-medium text-[15px] shadow-sm transition-all"
            >
              <svg
                className="w-4 h-4 text-white shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>Request an appointment</span>
            </a>

            {/* Phone Button */}
            <a
              href="tel:9727092580"
              className="w-full h-12 px-5 rounded-full bg-[#EEF4FE] hover:bg-[#DBEAFE] text-[#0F172A] flex items-center justify-center gap-2.5 font-medium text-[15px] transition-all"
            >
              <svg
                className="w-4 h-4 text-[#0F172A] shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>(972) 709-2580</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
