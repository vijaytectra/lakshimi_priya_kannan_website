import React from 'react';

export default function Memberships() {
  const memberships = [
    {
      abbr: 'ASCO',
      name: 'American Society of Clinical Oncology',
      logo: 'Assets/logo-asco.png',
    },
    {
      abbr: 'ASH',
      name: 'American Society of Hematology',
      logo: 'Assets/logo-ash.png',
    },
    {
      abbr: 'TNGDA',
      name: 'Tamil Nadu Government Doctors Association',
      logo: 'Assets/logo-tngda.png',
    },
    {
      abbr: 'ACP',
      name: 'American College of Physicians',
      logo: 'Assets/logo-acp.png',
    },
    {
      abbr: 'AMA',
      name: 'American Medical Association',
      logo: 'Assets/logo-ama.png',
    },
  ];

  return (
    <section className="w-full bg-white py-14 md:py-16 border-t border-b border-[#F1F5F9]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        
        {/* Section Heading */}
        <h2 className="text-center text-[11px] font-normal tracking-[0.14em] uppercase text-[#64748B] mb-8 md:mb-10">
          Professional Memberships
        </h2>

        {/* 5 Membership Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 md:gap-4 items-stretch">
          {memberships.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-full border border-[#E2E8F0] px-4 py-3 min-h-[64px] flex items-center gap-3 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-[#CBD5E1] hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all group"
            >
              {/* Circular Logo */}
              <div className="w-9 h-9 shrink-0 flex items-center justify-center overflow-hidden">
                <img
                  src={item.logo}
                  alt={item.abbr}
                  className="w-full h-full object-contain select-none"
                />
              </div>

              {/* Text Info */}
              <div className="flex flex-col justify-center min-w-0 pr-1">
                <span className="text-[13.5px] font-normal text-[#0F172A] leading-tight">
                  {item.abbr}
                </span>
                <span className="text-[10.5px] font-normal text-[#64748B] leading-tight line-clamp-2 mt-0.5">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
