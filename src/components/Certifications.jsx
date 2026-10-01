import React from 'react';

export default function Certifications() {
  const points = [
    {
      specialty: 'Medical oncology',
      description:
        'the tumour: staging, systemic therapy, genomic-guided decisions.',
    },
    {
      specialty: 'Hematology',
      description:
        'the blood: anemias, low counts, clotting and bleeding. The problems that most often interrupt cancer treatment.',
    },
    {
      specialty: 'Internal medicine',
      description:
        'everything else you already live with, and how it interacts with treatment.',
    },
  ];

  return (
    <section id="certifications" className="w-full bg-[#F8F9FA] py-[120px] px-6 md:px-8 border-t border-b border-[#F1F5F9]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Venn Diagram */}
        <div className="lg:col-span-6 flex justify-center items-center overflow-visible">
          <div className="w-[470px] h-[470px] max-w-full relative shrink-0 scale-[0.72] xs:scale-[0.82] sm:scale-95 md:scale-100 origin-center my-[-50px] sm:my-0 select-none">
            <div className="size-[460.60px] left-[4.70px] top-[4.70px] absolute rounded-[230.30px] border-[0.80px] border-blue-100" />
            <div className="size-64 left-[28.20px] top-[23.50px] absolute bg-radial-[at_34%_28%] from-blue-700/20 to-blue-700/10 to 80% rounded-[131.60px] shadow-[inset_0px_0px_0px_1px_rgba(21,82,201,0.20)]" />
            <div className="size-64 left-[178.60px] top-[23.50px] absolute bg-radial-[at_34%_28%] from-blue-700/20 to-blue-700/10 to 80% rounded-[131.60px] shadow-[inset_0px_0px_0px_1px_rgba(21,82,201,0.20)]" />
            <div className="size-64 left-[103.40px] top-[178.60px] absolute bg-radial-[at_34%_28%] from-blue-700/20 to-blue-700/10 to 80% rounded-[131.60px] shadow-[inset_0px_0px_0px_1px_rgba(21,82,201,0.20)]" />
            <div className="px-4 py-2.5 left-[-9.40px] top-[56.40px] absolute bg-white rounded-[999px] shadow-[0px_6px_18px_0px_rgba(14,23,38,0.09)] outline outline-[0.80px] outline-offset-[-0.80px] outline-slate-200 inline-flex justify-start items-center gap-2">
              <div className="size-2 relative opacity-60 bg-blue-700 rounded-sm" />
              <div className="justify-start text-gray-900 text-sm font-medium font-['Inter'] leading-4">Medical oncology</div>
            </div>
            <div className="px-4 py-2.5 left-[348.09px] top-[56.40px] absolute bg-white rounded-[999px] shadow-[0px_6px_18px_0px_rgba(14,23,38,0.09)] outline outline-[0.80px] outline-offset-[-0.80px] outline-slate-200 inline-flex justify-start items-center gap-2">
              <div className="size-2 relative opacity-75 bg-blue-700 rounded-sm" />
              <div className="justify-start text-gray-900 text-sm font-medium font-['Inter'] leading-4">Hematology</div>
            </div>
            <div className="px-4 py-2.5 left-[152px] top-[405.93px] absolute bg-white rounded-[999px] shadow-[0px_6px_18px_0px_rgba(14,23,38,0.09)] outline outline-[0.80px] outline-offset-[-0.80px] outline-slate-200 inline-flex justify-start items-center gap-2">
              <div className="size-2 relative opacity-95 bg-blue-700 rounded-sm" />
              <div className="justify-start text-gray-900 text-sm font-medium font-['Inter'] leading-4">Internal medicine</div>
            </div>
            <div className="px-5 py-3 left-[148.50px] top-[192px] absolute bg-blue-700 rounded-[999px] shadow-[0px_10px_26px_0px_rgba(21,82,201,0.30)] inline-flex justify-start items-center gap-2">
              <div className="size-3.5 relative overflow-hidden flex items-center justify-center shrink-0">
                <img
                  src="Assets/check-white.png"
                  alt=""
                  className="w-3.5 h-3.5 object-contain select-none"
                />
              </div>
              <div className="justify-start text-white text-sm font-medium font-['Inter'] leading-4">Your whole chart</div>
            </div>
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="lg:col-span-6 flex flex-col items-start">
          
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center px-4 py-1.5 bg-[#EEF4FE] text-[#155DFC] rounded-full text-[11px] font-semibold uppercase tracking-[0.14em] mb-6">
            Why three certifications matter
          </div>

          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extralight leading-[1.15] tracking-tight text-[#0F172A] mb-7">
            Cancer is rarely<br />
            <span className="text-[#94A3B8] font-extralight">the only thing wrong.</span>
          </h2>

          {/* Body Paragraph */}
          <p className="text-[15px] sm:text-[15.5px] leading-[1.68] text-[#475569] mb-8 max-w-[560px]">
            Most medical oncologists hold one board certification. Dr. Kannan holds three &mdash; which changes what can be handled in a single room rather than referred out and lost between offices.
          </p>

          {/* Bullet List */}
          <div className="space-y-5 max-w-[560px]">
            {points.map((pt, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#155DFC] mt-2 shrink-0" />
                <p className="text-[14.5px] sm:text-[15px] leading-relaxed text-[#475569]">
                  <strong className="font-normal text-[#0F172A]">
                    {pt.specialty} &mdash;{' '}
                  </strong>
                  {pt.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
