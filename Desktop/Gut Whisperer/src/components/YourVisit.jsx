import React from 'react';

export default function YourVisit() {
  const timelineSteps = [
    {
      number: '01',
      title: 'You get in touch',
      description: 'Call, or send the form at the foot of this page.',
      badge: 'Answered within 1 business day',
    },
    {
      number: '02',
      title: 'We collect your records',
      description:
        'You sign one release. We chase the pathology, the imaging and the notes from wherever they are \u2014 you do not become an administrator for your own illness.',
      badge: null,
    },
    {
      number: '03',
      title: 'Your first consultation',
      description:
        'Bring someone with you. We send the questions worth asking in advance, so you are not trying to think of them in the room.',
      badge: 'A full 60 minutes',
    },
    {
      number: '04',
      title: 'A plan, in writing',
      description:
        'You leave with the plan on paper: what it is, why it was chosen over the alternatives, what it will feel like, and what to watch for.',
      badge: null,
    },
    {
      number: '05',
      title: 'Treatment, and the line back to us',
      description:
        'Where infusions happen, how side effects are handled, and exactly who to call when something changes.',
      badge: 'Including nights and weekends',
    },
  ];

  return (
    <section id="your-visit" className="w-full bg-[#F8FAFC] py-24 lg:py-28 px-6 md:px-8 border-t border-b border-[#F1F5F9]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading & Information */}
        <div className="lg:col-span-5 flex flex-col items-start">
          
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center px-4 py-1.5 bg-[#EEF4FE] text-[#155DFC] rounded-full text-[11px] font-semibold uppercase tracking-[0.14em] mb-6">
            Your visit
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extralight leading-[1.15] tracking-tight text-[#0F172A] mb-6">
            What actually<br />
            <span className="text-[#94A3B8] font-extralight">happens, and when.</span>
          </h2>

          {/* Description */}
          <p className="text-[15.5px] sm:text-[16px] leading-[1.65] text-[#475569] max-w-[420px] mb-8">
            Knowing the shape of the next few weeks takes a surprising amount of weight off. Here it is, honestly.
          </p>

          {/* What to bring (PDF) Button */}
          <a
            href="#what-to-bring"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white hover:bg-slate-50 border border-[#CBD5E1] text-[#0F172A] text-[14px] font-medium rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-md transition-all group"
          >
            <span>What to bring (PDF)</span>
            <svg
              className="w-4 h-4 text-[#0F172A] transition-transform duration-150 group-hover:translate-y-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>

        </div>

        {/* Right Column: 5-Step Numbered Timeline */}
        <div className="lg:col-span-7 flex flex-col pt-2">
          {timelineSteps.map((step, idx) => {
            const isLast = idx === timelineSteps.length - 1;
            return (
              <div key={idx} className="relative flex items-start gap-6 pb-12 last:pb-0 group">
                
                {/* Vertical connecting line */}
                {!isLast && (
                  <div className="absolute left-6 top-12 bottom-0 w-[1px] bg-[#E2E8F0] -translate-x-1/2" />
                )}

                {/* Circular Numbered Badge (01-05) */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-[#EFF6FF] border border-[#DBEAFE]/80 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-200">
                  <span className="text-[14.5px] font-semibold text-[#155DFC]">
                    {step.number}
                  </span>
                </div>

                {/* Step Details */}
                <div className="flex flex-col items-start pt-1 flex-1">
                  <h3 className="text-[17.5px] sm:text-[18px] font-normal text-[#0F172A] leading-snug tracking-tight mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[14px] sm:text-[14.5px] text-[#475569] leading-[1.65] max-w-[540px] mb-3">
                    {step.description}
                  </p>

                  {/* Accent Highlight Badge */}
                  {step.badge && (
                    <span className="inline-flex items-center px-3 py-1 bg-[#EEF4FE] text-[#155DFC] rounded-full text-[11px] font-semibold tracking-wide">
                      {step.badge}
                    </span>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
