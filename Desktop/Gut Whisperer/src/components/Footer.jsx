import React from 'react';

export default function Footer() {
  const careLinks = [
    { label: 'Areas of expertise', href: '#expertise' },
    { label: 'Second opinions', href: '#start-here' },
    { label: 'Your first visit', href: '#your-visit' },
    { label: 'Approach to care', href: '#approach' },
  ];

  const practiceLinks = [
    { label: 'About Dr. Kannan', href: '#about' },
    { label: 'Insurance & costs', href: '#access' },
    { label: 'For physicians', href: '#referring-physicians' },
    { label: 'Questions', href: '#questions' },
  ];

  const visitLinks = [
    { label: 'Request an appointment', href: '#appointment' },
    { label: 'Location & hours', href: '#access' },
    { label: 'Español', href: '#access' },
    { label: 'Accessibility statement', href: '#accessibility' },
  ];

  const bottomLinks = [
    { label: 'Privacy policy', href: '#privacy' },
    { label: 'Notice of privacy practices', href: '#notice-privacy' },
    { label: 'Non-discrimination & language access', href: '#non-discrimination' },
    { label: 'Accessibility', href: '#accessibility' },
  ];

  return (
    <footer id="footer" className="w-full bg-[#F8FAFC] pt-20 pb-16 lg:pt-24 lg:pb-20 px-6 md:px-8 border-t border-[#E2E8F0]/80">
      <div className="max-w-[1200px] mx-auto flex flex-col">
        
        {/* Top Grid: Brand & Categorized Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Brand & Practice Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <h3 className="text-[20px] sm:text-[22px] font-normal text-[#0F172A] tracking-tight">
              Dr. Lakshmi Kannan, M.D.
            </h3>
            
            <div className="text-[11px] font-semibold text-[#155DFC] uppercase tracking-[0.14em] mt-1 mb-5">
              Medical Oncology &amp; Hematology
            </div>

            <p className="text-[14px] leading-[1.65] text-[#475569] max-w-[340px] mb-6">
              Board certified in medical oncology, hematology and internal medicine. One doctor, one practice, in Dallas since 2006.
            </p>

            <div className="flex flex-col space-y-1">
              <a
                href="tel:9727092580"
                className="text-[15.5px] font-semibold text-[#0F172A] hover:text-[#155DFC] transition-colors"
              >
                (972) 709-2580
              </a>
              <span className="text-[13.5px] text-[#64748B]">
                Fax (972) 283-0136
              </span>
            </div>
          </div>

          {/* Navigation Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10">
            
            {/* Column 1: Care */}
            <div className="flex flex-col space-y-3.5">
              <span className="text-[11px] font-semibold text-[#64748B] tracking-[0.14em] uppercase mb-1">
                Care
              </span>
              {careLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-[14px] text-[#334155] hover:text-[#155DFC] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Column 2: Practice */}
            <div className="flex flex-col space-y-3.5">
              <span className="text-[11px] font-semibold text-[#64748B] tracking-[0.14em] uppercase mb-1">
                Practice
              </span>
              {practiceLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-[14px] text-[#334155] hover:text-[#155DFC] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Column 3: Visit */}
            <div className="flex flex-col space-y-3.5 col-span-2 sm:col-span-1">
              <span className="text-[11px] font-semibold text-[#64748B] tracking-[0.14em] uppercase mb-1">
                Visit
              </span>
              {visitLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-[14px] text-[#334155] hover:text-[#155DFC] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

          </div>

        </div>

        {/* Middle Structured 3-Column White Card */}
        <div className="w-full bg-white rounded-[16px] sm:rounded-[20px] border border-[#E2E8F0] shadow-sm my-12 lg:my-14 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E2E8F0]">
            
            {/* Box 1: Where to find us */}
            <div className="p-6 sm:p-7 flex flex-col justify-start">
              <span className="text-[10.5px] font-semibold text-[#64748B] tracking-[0.14em] uppercase mb-2">
                Where to find us
              </span>
              <p className="text-[13.5px] sm:text-[14px] text-[#0F172A] leading-relaxed">
                3555 West Wheatland Road, Dallas, Texas 75237
              </p>
            </div>

            {/* Box 2: Clinic hours */}
            <div className="p-6 sm:p-7 flex flex-col justify-start">
              <span className="text-[10.5px] font-semibold text-[#64748B] tracking-[0.14em] uppercase mb-2">
                Clinic hours
              </span>
              <p className="text-[13.5px] sm:text-[14px] text-[#0F172A] leading-relaxed">
                Monday – Friday, 8:30 am – 5:00 pm Central
              </p>
            </div>

            {/* Box 3: Credentials */}
            <div className="p-6 sm:p-7 flex flex-col justify-start">
              <span className="text-[10.5px] font-semibold text-[#64748B] tracking-[0.14em] uppercase mb-2">
                Credentials
              </span>
              <p className="text-[13.5px] sm:text-[14px] text-[#0F172A] leading-relaxed">
                NPI 1508954454 · Texas licence M4226 · ABIM certified
              </p>
            </div>

          </div>
        </div>

        {/* Legal & Medical Emergency Disclaimer */}
        <div className="text-[12px] leading-[1.65] text-[#64748B] mb-10 max-w-[1050px]">
          <p>
            <strong className="font-semibold text-[#475569]">Medical emergencies:</strong> call 911 or go to your nearest emergency department. Do not use this website to report an emergency. Information on this site is general and educational. It is not medical advice for your situation and does not create a physician–patient relationship. This practice does not discriminate on the basis of race, colour, national origin, age, disability or sex. Español: si necesita ayuda en español, llame al (972) 709-2580.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Policy Links */}
        <div className="pt-6 border-t border-[#E2E8F0]/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12.5px] text-[#64748B]">
          <div>
            © 2026 Lakshmi Kannan, M.D.
          </div>

          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            {bottomLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="hover:text-[#155DFC] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
