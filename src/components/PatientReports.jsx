import React from 'react';

export default function PatientReports() {
  const reports = [
    {
      id: 'diagnosis',
      title: 'Thoroughness in diagnosis',
      description:
        'The most consistent theme in her public reviews is the care taken to get the diagnosis right before acting on it.',
      icon: (
        <svg
          className="w-5 h-5 text-[#155DFC]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      ),
    },
    {
      id: 'follow-up',
      title: 'Going further than asked',
      description:
        'Patients describe her following up on things outside the immediate reason for the visit, and staying late to do it.',
      icon: (
        <svg
          className="w-5 h-5 text-[#155DFC]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      id: 'manner',
      title: 'Manner during treatment',
      description:
        'People in active cancer treatment describe her bedside manner as a relief \u2014 direct, unhurried and without false cheer.',
      icon: (
        <svg
          className="w-5 h-5 text-[#155DFC]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="patient-reports"
      className="w-full bg-[#F8FAFC] py-24 lg:py-28 px-6 md:px-8 border-b border-[#F1F5F9]"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center px-4 py-1.5 bg-[#EEF4FE] text-[#155DFC] rounded-full text-[11px] font-semibold uppercase tracking-[0.14em] mb-6">
          What patients report
        </div>

        {/* Main Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extralight leading-[1.15] tracking-tight text-[#0F172A] mb-6">
          Three things come up<br />
          <span className="text-[#94A3B8] font-extralight">again and again.</span>
        </h2>

        {/* Sub-headline / Disclaimer */}
        <p className="text-[15px] sm:text-[16px] leading-[1.65] text-[#475569] max-w-[620px] mb-14">
          Drawn from Dr. Kannan's public patient reviews. No testimonial appears on this
          site without written consent, and none has been written for her.
        </p>

        {/* 3 Horizontally Arranged Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-14">
          {reports.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-[24px] sm:rounded-[28px] border border-[#E2E8F0]/80 p-8 sm:p-9 lg:p-10 flex flex-col items-center text-center shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              {/* Circular Icon Badge */}
              <div className="w-12 h-12 rounded-full bg-[#EFF6FF] border border-[#DBEAFE]/80 flex items-center justify-center shrink-0 shadow-sm mb-6">
                {card.icon}
              </div>

              {/* Card Title */}
              <h3 className="text-[18px] sm:text-[19px] font-normal text-[#0F172A] leading-snug tracking-tight mb-3">
                {card.title}
              </h3>

              {/* Card Body */}
              <p className="text-[14px] sm:text-[14.5px] leading-[1.65] text-[#475569] max-w-[320px]">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footnote / Review Sources Disclaimer */}
        <p className="text-[12.5px] sm:text-[13px] leading-[1.65] text-[#64748B] max-w-[740px]">
          Themes summarise patient reviews published on{' '}
          <a
            href="https://www.vitals.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#155DFC] underline decoration-[#155DFC]/40 hover:decoration-[#155DFC] underline-offset-2 transition-colors font-medium"
          >
            Vitals
          </a>{' '}
          and{' '}
          <a
            href="https://www.webmd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#155DFC] underline decoration-[#155DFC]/40 hover:decoration-[#155DFC] underline-offset-2 transition-colors font-medium"
          >
            WebMD
          </a>
          , where Dr. Kannan holds ratings of 4.3 and 4.0 out of 5 across a small number of reviews.
          We would rather show you the source than a star rating. Individual experience does not predict any result.
        </p>

      </div>
    </section>
  );
}
