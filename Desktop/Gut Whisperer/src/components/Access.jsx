import React from 'react';

export default function Access() {
  const contentBlocks = [
    {
      id: 'insurance',
      title: 'Insurance & cost',
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
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      ),
      content: (
        <>
          <p className="text-[14.5px] sm:text-[15px] leading-[1.65] text-[#475569] mb-3">
            Medicare and Medicaid accepted, alongside most major commercial plans. We verify your coverage before your first visit rather than leaving you to find out afterwards, and a financial counsellor is available at no charge.
          </p>
          <p className="text-[13.5px] sm:text-[14px] leading-[1.6] text-[#64748B]">
            Accepted plan list and second-opinion pricing to be confirmed and published here.
          </p>
        </>
      ),
    },
    {
      id: 'location',
      title: 'Where to find us',
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
          <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      content: (
        <>
          <div className="text-[14.5px] sm:text-[15px] leading-relaxed text-[#1E293B] font-normal mb-3">
            <div>3555 West Wheatland Road</div>
            <div>Dallas, Texas 75237</div>
          </div>
          <p className="text-[13.5px] sm:text-[14px] leading-[1.6] text-[#64748B]">
            Free on-site parking. Telemedicine available for follow-up visits, so you are not sitting in a waiting room mid-treatment.
          </p>
        </>
      ),
    },
    {
      id: 'language',
      title: 'Language & support',
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
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      ),
      content: (
        <p className="text-[14.5px] sm:text-[15px] leading-[1.65] text-[#475569]">
          Consultations in <strong className="font-normal text-[#0F172A]">English and Spanish</strong>. Interpreters arranged at no cost for any other language. Family members are welcome at every appointment, in person or by phone.
        </p>
      ),
    },
  ];

  return (
    <section id="access" className="w-full bg-white py-24 lg:py-28 px-6 md:px-8 border-b border-[#F1F5F9]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading & 3 Content Blocks */}
        <div className="lg:col-span-7 flex flex-col items-start">
          
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center px-4 py-1.5 bg-[#EEF4FE] text-[#155DFC] rounded-full text-[11px] font-semibold uppercase tracking-[0.14em] mb-6">
            Access, insurance & location
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-[50px] font-extralight leading-[1.15] tracking-tight text-[#0F172A] mb-12">
            The practical things,<br />
            <span className="text-[#94A3B8] font-extralight">answered before you ask.</span>
          </h2>

          {/* 3 Content Blocks */}
          <div className="w-full flex flex-col">
            {contentBlocks.map((block, idx) => (
              <div key={block.id} className="w-full">
                {idx > 0 && <div className="w-full border-t border-[#F1F5F9] my-8" />}
                
                <div className="flex items-start gap-5 sm:gap-6">
                  {/* Icon Circle */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#EFF6FF] border border-[#DBEAFE]/80 flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    {block.icon}
                  </div>

                  {/* Text Information */}
                  <div className="flex-1 flex flex-col items-start">
                    <h3 className="text-[17px] sm:text-[18px] font-normal text-[#0F172A] leading-snug tracking-tight mb-2.5">
                      {block.title}
                    </h3>
                    <div className="w-full max-w-[560px]">
                      {block.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Dark Blue-Grey Card */}
        <div className="lg:col-span-5 w-full">
          <div className="w-full bg-[#0E1726] rounded-[28px] sm:rounded-[32px] p-8 sm:p-10 lg:p-11 text-white shadow-xl shadow-slate-900/10 flex flex-col">
            
            {/* Header */}
            <h3 className="text-[21px] sm:text-[22px] font-extralight text-white tracking-tight mb-2">
              Speak to the practice
            </h3>
            
            {/* Subtext */}
            <p className="text-[13.5px] sm:text-[14px] text-[#94A3B8] leading-relaxed mb-7">
              A person answers during clinic hours — not a menu.
            </p>

            {/* Prominent Phone Link */}
            <a
              href="tel:9727092580"
              className="text-3xl sm:text-[34px] lg:text-[36px] font-light tracking-tight text-white hover:text-[#93C5FD] transition-colors mb-7 block"
            >
              (972) 709-2580
            </a>

            {/* Separator */}
            <div className="w-full border-t border-[#1E293B] mb-7" />

            {/* Operating Hours Table */}
            <div className="flex flex-col space-y-4 mb-9">
              <div className="flex items-center justify-between text-[13.5px] sm:text-[14px]">
                <span className="text-[#94A3B8]">Monday – Friday</span>
                <span className="text-white font-medium">8:30 am – 5:00 pm</span>
              </div>
              
              <div className="flex items-center justify-between text-[13.5px] sm:text-[14px]">
                <span className="text-[#94A3B8]">Saturday & Sunday</span>
                <span className="text-white font-medium">Closed</span>
              </div>

              <div className="flex items-center justify-between text-[13.5px] sm:text-[14px]">
                <span className="text-[#94A3B8]">Urgent, during treatment</span>
                <span className="text-white font-medium">24 hours, by phone</span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="#appointment"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white hover:bg-slate-100 text-[#0F172A] text-[14.5px] font-normal rounded-full shadow-sm hover:shadow transition-all group w-fit"
            >
              <span>Request an appointment</span>
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

          </div>
        </div>

      </div>
    </section>
  );
}
