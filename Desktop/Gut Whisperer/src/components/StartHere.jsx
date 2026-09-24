import React from 'react';

export default function StartHere() {
  const cards = [
    {
      id: 'diagnosed',
      title: 'I have just been diagnosed',
      description:
        'Seen within three business days. We collect your pathology and imaging for you, and you leave the first visit with a written plan.',
      ctaText: 'Book a first consultation',
      href: '#first-consultation',
      icon: (
        <svg
          className="w-5 h-5 text-[#1552C9] lg:group-hover:text-white transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <line x1="10" y1="9" x2="8" y2="9" />
        </svg>
      ),
    },
    {
      id: 'second-opinion',
      title: 'I want a second opinion',
      description:
        'A second set of eyes on a treatment plan is ordinary clinical practice, not a challenge to your doctor. We gather the records; you receive a written review.',
      ctaText: 'Start a second opinion',
      href: '#second-opinion',
      icon: (
        <svg
          className="w-5 h-5 text-[#1552C9] lg:group-hover:text-white transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      id: 'family',
      title: 'I am helping a parent or partner',
      description:
        'Families are part of every consultation. Come with them, ask your own questions, and know exactly who to call when something changes at night.',
      ctaText: 'How we work with families',
      href: '#families',
      icon: (
        <svg
          className="w-5 h-5 text-[#1552C9] lg:group-hover:text-white transition-colors duration-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  return (
    <section id="start-here" className="w-full bg-[#F7F9FC] py-[120px] px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        {/* Eyebrow Tag */}
        <div className="inline-flex items-center px-4 py-1.5 bg-[#EEF4FE] text-[#155DFC] rounded-full text-[11px] font-semibold uppercase tracking-[0.14em] mb-7">
          Start here
        </div>

        {/* Section Headline */}
        <h2 className="text-center text-4xl sm:text-5xl lg:text-[52px] font-extralight leading-[1.18] tracking-tight text-[#0F172A] mb-5">
          Wherever you are in this,<br />
          <span className="text-[#94A3B8] font-extralight">there is a way in.</span>
        </h2>

        {/* Subtitle Description */}
        <p className="text-center text-[16px] sm:text-[17px] leading-relaxed text-[#64748B] max-w-[560px] mb-14 md:mb-16">
          Most people arrive in one of three situations. Choose the one that fits we take it from there.
        </p>

        {/* 3 Situational Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 w-full items-stretch">
          {cards.map((card) => (
            <div
              key={card.id}
              className="rounded-[28px] p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 group bg-[#FFF] text-[#0F172A] border border-[#E5E7EB] shadow-[0_4px_20px_rgba(0,0,0,0.02)] lg:hover:bg-[#1552C9] lg:hover:border-[#1552C9] lg:hover:shadow-[0_20px_44px_-6px_rgba(21,82,201,0.36)] lg:hover:-translate-y-1 cursor-default lg:cursor-pointer"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-11 h-11 rounded-full flex items-center justify-center mb-7 bg-[#EFF6FF] lg:group-hover:bg-white/20 transition-colors duration-300">
                  {card.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-[21px] font-normal leading-snug tracking-tight mb-4 text-[#0F172A] lg:group-hover:text-white transition-colors duration-300">
                  {card.title}
                </h3>

                {/* Card Description */}
                <p className="text-[14.5px] leading-[1.65] mb-8 text-[#64748B] lg:group-hover:text-white/85 transition-colors duration-300">
                  {card.description}
                </p>
              </div>

              {/* Bottom Action Link */}
              <a
                href={card.href}
                className="inline-flex items-center gap-2 text-[14px] font-medium transition-all lg:group-hover:gap-2.5 text-[#1552C9] lg:group-hover:text-white"
              >
                <span>{card.ctaText}</span>
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200 lg:group-hover:translate-x-1 stroke-current"
                  viewBox="0 0 16 16"
                  fill="none"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3.33334 8H12.6667" />
                  <path d="M8.66666 4L12.6667 8L8.66666 12" />
                </svg>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
