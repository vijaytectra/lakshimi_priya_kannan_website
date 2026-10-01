import React from 'react';

export default function Stats() {
  const stats = [
    {
      value: '20+',
      label: 'Years in independent practice',
    },
    {
      value: '3',
      label: 'ABIM board certifications',
    },
    {
      value: '2006',
      label: 'Practising in Dallas since',
    },
    {
      value: '2',
      label: (
        <>
          Consultation languages &mdash;
          <br />
          English and Spanish
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-white pb-20 pt-4 px-6 md:px-8">
      <div className="max-w-[1200px] mx-auto rounded-[24px] sm:rounded-[28px] border border-[#E5E7EB] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.02)] py-10 sm:py-12 md:py-14 px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center text-center py-6 sm:py-4 px-4 ${
                index !== stats.length - 1
                  ? 'lg:border-r lg:border-[#ECEFF3]'
                  : ''
              } ${
                index % 2 === 0
                  ? 'sm:border-r sm:border-[#ECEFF3] lg:border-r'
                  : 'sm:border-r-0 lg:border-r'
              } ${
                index === stats.length - 1 ? 'lg:!border-r-0' : ''
              } ${
                index < 2
                  ? 'border-b border-[#ECEFF3] sm:border-b sm:border-[#ECEFF3] lg:border-b-0'
                  : 'border-b border-[#ECEFF3] sm:border-b-0 last:border-b-0'
              }`}
            >
              {/* Numeric Display */}
              <div className="text-[44px] sm:text-[48px] md:text-[52px] font-extralight leading-none text-[#0F172A] tracking-tight mb-3">
                {item.value}
              </div>
              
              {/* Descriptive Subtitle */}
              <div className="text-[13px] sm:text-[13.5px] font-normal leading-snug text-[#64748B] max-w-[200px]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
