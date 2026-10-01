import React from 'react';

export default function Decisions() {
  const steps = [
    {
      number: '01',
      title: 'Test',
      description:
        'Tumour biology, genomic and biomarker testing \u2014 before a plan is written, not after one fails.',
      icon: (
        <svg
          className="w-5 h-5 text-[#155DFC]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 2v7.31L4.5 20a1 1 0 0 0 .9 1.5h13.2a1 1 0 0 0 .9-1.5L14 9.31V2" />
          <path d="M8.5 2h7" />
          <path d="M7 16h10" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Interpret',
      description:
        'Results read against current NCCN and ASCO guidance, and against everything else on your chart.',
      icon: (
        <svg
          className="w-5 h-5 text-[#155DFC]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="4" y1="7" x2="16" y2="7" />
          <line x1="4" y1="12" x2="13" y2="12" />
          <line x1="4" y1="17" x2="10" y2="17" />
          <circle cx="18" cy="12" r="3" />
          <line x1="21" y1="12" x2="23" y2="12" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Plan',
      description:
        'Written down and handed to you \u2014 what it is, why it was chosen, and what the alternatives were.',
      icon: (
        <svg
          className="w-5 h-5 text-[#155DFC]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M9 15l2 2 4-4" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Reassess',
      description:
        'Including the question asked least often \u2014 when it is safe to stop. Dr. Kannan is a participating site contact for the Breast Cancer Index registry, which studies exactly this decision.',
      icon: (
        <svg
          className="w-5 h-5 text-[#155DFC]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
          <polyline points="12 7 12 12 15 15" />
        </svg>
      ),
    },
  ];

  return (
    <section id="decisions" className="w-full bg-[#F7F9FC] py-[120px] px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center">
        
        {/* Eyebrow Tag */}
        <div className="inline-flex items-center px-4 py-1.5 bg-[#EEF4FE] text-[#155DFC] rounded-full text-[11px] font-semibold uppercase tracking-[0.14em] mb-7">
          How treatment decisions get made
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extralight leading-[1.15] tracking-tight text-[#0F172A] mb-5">
          Test first.{' '}
          <span className="text-[#94A3B8] font-extralight">Then treat.</span>
        </h2>

        {/* Intro Paragraph */}
        <p className="text-[15.5px] sm:text-[16px] leading-[1.65] text-[#475569] max-w-[580px] mb-16 sm:mb-20">
          Tumour biology now tells us far more than a stage and a scan ever did. Every plan here follows the same four steps &mdash; including the one most practices skip.
        </p>

        {/* 4-Step Process Flow with Connector Line */}
        <div className="relative w-full mb-20 sm:mb-24">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[26px] left-[12%] right-[12%] h-[1.5px] bg-[#BFDBFE] z-0" />

          {/* Grid of Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                
                {/* Step Circle Icon with solid white bg to mask line */}
                <div className="w-[52px] h-[52px] rounded-full bg-white border border-[#BFDBFE] shadow-[0_2px_8px_rgba(37,99,235,0.06)] flex items-center justify-center mb-6 group-hover:border-[#155DFC] group-hover:scale-105 transition-all duration-200">
                  {step.icon}
                </div>

                {/* Step Title */}
                <h3 className="text-[15px] font-normal text-[#0F172A] mb-3 tracking-tight">
                  {step.number} &middot; {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-[13.5px] leading-[1.62] text-[#64748B] max-w-[250px]">
                  {step.description}
                </p>

              </div>
            ))}
          </div>

        </div>

        {/* Closing Statement */}
        <div className="flex flex-col items-center text-center">
          <p className="text-2xl sm:text-3xl lg:text-[34px] font-extralight text-[#0F172A] tracking-tight leading-tight">
            The goal is not the most treatment.
          </p>
          <p className="text-2xl sm:text-3xl lg:text-[34px] font-extralight text-[#155DFC] tracking-tight leading-tight mt-1.5 sm:mt-2">
            It is exactly enough.
          </p>
        </div>

      </div>
    </section>
  );
}
