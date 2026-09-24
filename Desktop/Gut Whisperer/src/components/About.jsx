import React from 'react';

export default function About() {
  const milestones = [
    {
      year: '1995',
      title: 'Kilpauk Medical College, Chennai',
      subtitle: 'Doctor of Medicine, and internship',
    },
    {
      year: '1999–2002',
      title: 'Texas Tech University Health Sciences Center',
      subtitle: 'Residency, internal medicine',
    },
    {
      year: '2001',
      title: 'Regional first place, ACP–ASIM Clinical Vignette Competition',
      subtitle:
        '“Scleromyxedema with Seizures and Encephalopathy” · and the Outstanding Board Review Performance Award',
    },
    {
      year: '2003–2006',
      title: 'UT Southwestern Medical Center, Dallas',
      subtitle: 'Fellowship, hematology and medical oncology',
    },
    {
      year: '2006 —',
      title: 'Independent practice, Dallas, Texas',
      subtitle:
        'Board certified in medical oncology, hematology and internal medicine',
    },
  ];

  return (
    <section id="about" className="w-full bg-white py-20 lg:py-28 px-6 md:px-8 overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Portrait & Callout Box */}
        <div className="lg:col-span-5 relative flex flex-col items-center">
          
          {/* Light Blue Rounded Card with Dr. Kannan Portrait */}
          <div className="relative w-full max-w-[420px] h-[460px] sm:h-[500px] bg-[#E8F1FC] rounded-[32px] overflow-hidden flex items-end justify-center">
            <img
              src="Assets/doctor.png"
              alt="Dr. Lakshmi Kannan, M.D."
              className="w-[90%] max-w-[370px] h-auto object-contain object-bottom select-none"
            />
          </div>

          {/* Overlapping Callout Box */}
          <div className="relative -mt-16 sm:-mt-20 w-[92%] max-w-[360px] bg-white rounded-[24px] p-6 sm:p-7 border border-[#E5E7EB] shadow-[0_16px_36px_-6px_rgba(15,23,42,0.08),0_4px_12px_rgba(15,23,42,0.04)] z-10 self-start sm:ml-4">
            {/* Quote Icon Circle */}
            <div className="w-7 h-7 rounded-full bg-[#EFF6FF] flex items-center justify-center mb-3">
              <span className="text-[#155DFC] text-xs font-serif leading-none font-bold">
                &ldquo;
              </span>
            </div>

            {/* Philosophy text */}
            <p className="text-[13px] sm:text-[13.5px] leading-relaxed text-[#334155] font-normal">
              Philosophy-of-care statement &mdash; one or two sentences, in Dr. Kannan&apos;s own words and approved by her before publication.
            </p>

            {/* Subtext */}
            <p className="text-[11px] text-[#94A3B8] mt-3">
              Awaiting her wording &mdash; see the asset list
            </p>
          </div>

        </div>

        {/* Right Column: Bio, Timeline & CV Download */}
        <div className="lg:col-span-7 flex flex-col items-start pt-2">
          
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center px-4 py-1.5 bg-[#EEF4FE] text-[#155DFC] rounded-full text-[11px] font-semibold uppercase tracking-[0.14em] mb-6">
            About Dr. Kannan
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extralight leading-[1.15] tracking-tight text-[#0F172A] mb-7">
            Twenty years.<br />
            <span className="text-[#94A3B8] font-extralight">One community.</span>
          </h2>

          {/* Body Paragraphs */}
          <div className="space-y-5 text-[15px] sm:text-[15.5px] leading-[1.68] text-[#475569] mb-10 max-w-[620px]">
            <p>
              She trained in Chennai, completed her internal medicine residency in West Texas, and finished her hematology and oncology fellowship at UT Southwestern in Dallas. She has practised in the same part of Dallas ever since &mdash; long enough to have treated people through recurrence, remission and everything in between.
            </p>
            <p>
              That continuity is the point. In oncology, treatment runs for months or years, and the relationship carries as much weight as the protocol. A single-physician practice is the only structure that can promise that the doctor who explains your diagnosis is the doctor still adjusting your treatment a year later.
            </p>
          </div>

          {/* Timeline Milestones */}
          <div className="space-y-6 w-full max-w-[620px] mb-10">
            {milestones.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3.5">
                {/* Blue bullet dot */}
                <div className="w-2 h-2 rounded-full bg-[#155DFC] mt-2 shrink-0" />

                {/* Year Label */}
                <div className="w-24 sm:w-28 shrink-0 text-[13.5px] font-medium text-[#155DFC]">
                  {item.year}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="text-[14px] font-normal text-[#0F172A] leading-snug">
                    {item.title}
                  </div>
                  <div className="text-[12.5px] text-[#64748B] leading-relaxed mt-0.5">
                    {item.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Download CV Button */}
          <a
            href="#download-cv"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#EEF4FE] hover:bg-[#E0ECFD] text-[#155DFC] text-[14px] font-medium rounded-full transition-all group"
          >
            <span>Download full CV (PDF)</span>
            <svg
              className="w-4 h-4 text-[#155DFC] transition-transform duration-150 group-hover:translate-y-0.5"
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

      </div>
    </section>
  );
}
