import React from 'react';

export default function Expertise() {
  const breastCancerTags = [
    'Early-stage breast cancer',
    'Locally advanced disease',
    'Metastatic breast cancer',
    'Recurrent disease',
    'Paget disease of the breast',
    'Hormone receptor–positive disease',
    'Endocrine therapy management',
    'Genomic testing & risk assessment',
  ];

  const solidTumours = [
    'Colorectal cancer',
    'Gastrointestinal malignancies',
    'Lung cancer',
  ];

  const hematologyConditions = [
    'Leukemia, lymphoma and myeloma',
    'Anemias and low blood counts',
    'Clotting and bleeding disorders',
  ];

  return (
    <section id="expertise" className="w-full bg-white py-24 lg:py-28 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col">
        
        {/* Top Eyebrow Tag */}
        <div className="self-start inline-flex items-center px-4 py-1.5 bg-[#EEF4FE] text-[#155DFC] rounded-full text-[11px] font-semibold uppercase tracking-[0.14em] mb-6">
          Areas of expertise
        </div>

        {/* Section Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extralight leading-[1.15] tracking-tight text-[#0F172A] mb-5">
          Depth where it counts,<br />
          <span className="text-[#94A3B8] font-extralight">not a catalogue.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-[15.5px] sm:text-[16px] leading-[1.65] text-[#475569] max-w-[620px] mb-14">
          Three areas, ordered by how deep the practice actually goes &mdash; not alphabetically.
        </p>

        {/* Primary Focus Block (Large Light-Blue Card) */}
        <div className="w-full bg-[#EBF3FB] rounded-[30px] p-8 sm:p-11 lg:p-12 mb-7">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Description */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="inline-flex items-center px-3.5 py-1 bg-white text-[#155DFC] border border-[#E2E8F0]/80 rounded-full text-[10.5px] font-semibold uppercase tracking-[0.14em] mb-4 shadow-sm">
                Primary Focus
              </span>
              <h3 className="text-2xl sm:text-[28px] font-normal text-[#0F172A] leading-snug tracking-tight mb-4">
                Breast cancer
              </h3>
              <p className="text-[14.5px] leading-[1.65] text-[#475569]">
                The largest part of this practice, across the whole course of the disease &mdash; from a first diagnosis through to recurrent and metastatic disease, and rarer presentations that are easy to miss.
              </p>
            </div>

            {/* Right Column: Tags Cloud */}
            <div className="lg:col-span-7 flex flex-wrap gap-2.5 items-center">
              {breastCancerTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-white px-4 py-2 rounded-full border border-[#E2E8F0] text-[12.5px] sm:text-[13px] font-medium text-[#1E293B] shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-[#CBD5E1] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* Two Side-by-Side Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-7 items-stretch">
          
          {/* Block 1: Solid tumours */}
          <div className="bg-white rounded-[28px] border border-[#E5E7EB] p-8 sm:p-10 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div>
              <h3 className="text-[22px] font-normal text-[#0F172A] leading-snug tracking-tight mb-3">
                Solid tumours
              </h3>
              <p className="text-[14px] leading-relaxed text-[#475569] mb-8">
                Gastrointestinal and thoracic cancers, managed with the same guideline-concordant, testing-first approach.
              </p>
            </div>

            <div className="space-y-4">
              {solidTumours.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
                    <svg
                      className="w-3 h-3 text-[#155DFC] stroke-[2.5]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[13.5px] font-medium text-[#1E293B]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Block 2: Hematology */}
          <div className="bg-white rounded-[28px] border border-[#E5E7EB] p-8 sm:p-10 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div>
              <span className="inline-flex items-center px-3 py-1 bg-[#EEF4FE] text-[#155DFC] rounded-full text-[10px] font-semibold uppercase tracking-[0.14em] mb-4">
                What sets this practice apart
              </span>
              <h3 className="text-[21px] font-normal text-[#0F172A] leading-snug tracking-tight mb-3">
                Hematology &mdash; malignant and benign
              </h3>
              <p className="text-[14px] leading-relaxed text-[#475569] mb-8">
                The separate hematology certification means the blood problems that so often interrupt cancer treatment are handled here rather than referred away.
              </p>
            </div>

            <div className="space-y-4">
              {hematologyConditions.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
                    <svg
                      className="w-3 h-3 text-[#155DFC] stroke-[2.5]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[13.5px] font-medium text-[#1E293B]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Callout Block */}
        <div className="w-full bg-[#F8F9FA] rounded-[20px] px-7 py-5 sm:px-8 sm:py-6 border border-[#E5E7EB]/70">
          <p className="text-[13.5px] leading-relaxed text-[#475569]">
            <strong className="font-normal text-[#0F172A]">What is referred out.</strong>{' '}
            Surgery, radiation oncology, paediatric cancers and stem-cell transplant are handled by colleagues Dr. Kannan works with directly. She will tell you who, and why, rather than stretching beyond her scope.
          </p>
        </div>

      </div>
    </section>
  );
}
