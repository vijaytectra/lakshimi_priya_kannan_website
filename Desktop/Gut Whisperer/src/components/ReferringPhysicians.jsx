import React from 'react';

export default function ReferringPhysicians() {
  const details = [
    {
      label: 'ACCEPTS',
      value: 'Medical oncology · hematology · second opinions',
    },
    {
      label: 'DIRECT LINE',
      value: (
        <a
          href="tel:9727092580"
          className="text-white hover:text-[#93C5FD] underline decoration-slate-600 hover:decoration-[#93C5FD] underline-offset-4 transition-colors"
        >
          (972) 709-2580
        </a>
      ),
    },
    {
      label: 'SECURE FAX',
      value: '(972) 283-0136',
    },
    {
      label: 'PRIVILEGES',
      value: 'Methodist Dallas · Methodist Charlton · Baylor Scott & White Waxahachie',
    },
    {
      label: 'CERTIFICATION',
      value: 'ABIM \u2014 medical oncology, hematology, internal medicine',
    },
    {
      label: 'NPI',
      value: '1508954454',
    },
  ];

  return (
    <section
      id="referring-physicians"
      className="w-full bg-[#0D1526] text-white py-24 lg:py-32 px-6 md:px-8 border-t border-[#1E293B]"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Messaging & Action Buttons */}
        <div className="lg:col-span-6 flex flex-col items-start">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center px-4 py-1.5 bg-[#17253D] border border-[#38BDF8]/30 text-[#93C5FD] rounded-full text-[11px] font-semibold uppercase tracking-[0.14em] mb-6">
            For referring physicians
          </div>

          {/* Two-Line Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-[50px] font-extralight leading-[1.15] tracking-tight text-white mb-6">
            Send a patient, and know<br />
            <span className="text-[#94A3B8] font-extralight">when you will hear back.</span>
          </h2>

          {/* Paragraph */}
          <p className="text-[15px] sm:text-[16px] leading-[1.65] text-[#94A3B8] max-w-[480px] mb-10">
            Referrals accepted for new diagnoses, second opinions and complex benign hematology.
            Acknowledged the same business day; consultation note returned within five.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            
            {/* Refer a patient Button */}
            <a
              href="#refer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white hover:bg-slate-100 text-[#0F172A] text-[14.5px] font-medium rounded-full shadow-sm hover:shadow transition-all group"
            >
              <span>Refer a patient</span>
              <svg
                className="w-4 h-4 text-[#0F172A] transition-transform duration-150 group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            {/* Download CV Button */}
            <a
              href="#download-cv"
              className="inline-flex items-center px-7 py-3.5 bg-[#162238] hover:bg-[#1E2E4A] border border-[#2A3B58] text-white text-[14.5px] font-medium rounded-full transition-all"
            >
              Download CV
            </a>

          </div>

        </div>

        {/* Right Column: Structured Credential & Contact Table */}
        <div className="lg:col-span-6 w-full flex flex-col pt-2 lg:pt-4">
          <div className="w-full flex flex-col">
            {details.map((item, idx) => (
              <div
                key={idx}
                className={`w-full py-5 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 ${
                  idx > 0 ? 'border-t border-[#1E293B]' : ''
                }`}
              >
                {/* Field Label */}
                <div className="w-36 sm:w-40 shrink-0 text-[11.5px] font-semibold text-[#64748B] tracking-[0.14em] uppercase">
                  {item.label}
                </div>

                {/* Field Value */}
                <div className="flex-1 text-[14px] sm:text-[14.5px] text-[#F8FAFC] leading-relaxed font-normal">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
