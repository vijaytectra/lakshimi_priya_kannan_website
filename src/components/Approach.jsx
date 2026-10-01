import React from 'react';

export default function Approach() {
  const commitments = [
    {
      title: 'The same doctor',
      description:
        'The person who explains the diagnosis is the person adjusting the treatment in month nine. No rotating roster, no being handed down.',
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
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
    },
    {
      title: 'The whole chart',
      description:
        'Three certifications mean the anemia, the clots and the internal-medicine problems are treated here, not referred away and lost.',
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
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    },
    {
      title: 'Time in the room',
      description:
        'A first consultation is scheduled for a full hour, with family welcome. You will not be finishing your questions in a corridor.',
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
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      title: 'A line back to us',
      description:
        'One number for side effects, questions and changes \u2014 answered by someone who has your chart open, including after hours.',
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
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="approach" className="w-full bg-white py-24 lg:py-28 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col items-start">
        
        {/* Eyebrow Tag */}
        <div className="inline-flex items-center px-4 py-1.5 bg-[#EEF4FE] text-[#155DFC] rounded-full text-[11px] font-semibold uppercase tracking-[0.14em] mb-6">
          Approach to care
        </div>

        {/* Section Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extralight leading-[1.15] tracking-tight text-[#0F172A] mb-5">
          Four things this practice<br />
          <span className="text-[#94A3B8] font-extralight">commits to.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-[15.5px] sm:text-[16px] leading-[1.65] text-[#475569] max-w-[580px] mb-14 sm:mb-16">
          Not values on a wall. Things you can hold the practice to, and notice immediately if they go missing.
        </p>

        {/* 2x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full items-stretch">
          {commitments.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] rounded-[28px] border border-[#E5E7EB] p-8 sm:p-9 flex items-start gap-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-[#CBD5E1] hover:shadow-[0_8px_24px_rgba(0,0,0,0.04)] transition-all duration-200 group"
            >
              {/* Circular Icon Container */}
              <div className="w-12 h-12 rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-200">
                {card.icon}
              </div>

              {/* Text Info */}
              <div className="flex flex-col flex-1">
                <h3 className="text-[18px] sm:text-[19px] font-normal text-[#0F172A] leading-snug tracking-tight mb-2.5">
                  {card.title}
                </h3>
                <p className="text-[14px] sm:text-[14.5px] text-[#475569] leading-[1.65]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
