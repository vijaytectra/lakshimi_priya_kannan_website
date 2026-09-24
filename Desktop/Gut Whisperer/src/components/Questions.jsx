import React, { useState } from 'react';

export default function Questions() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      question: 'How quickly can I be seen after a diagnosis?',
      answer:
        'Within three business days for a new diagnosis. Call the practice directly if it is more urgent than that and we will find a way.',
    },
    {
      question: 'Will I see Dr. Kannan, or a nurse practitioner?',
      answer:
        'You will see Dr. Kannan at every single visit. We do not use rotating rosters or hand you down to mid-level providers \u2014 the same triple board-certified oncologist directs and oversees your care from consultation through long-term survivorship.',
    },
    {
      question: 'Do you take my insurance?',
      answer:
        'Medicare and Medicaid are accepted, alongside most major commercial plans. We verify your coverage before your first visit rather than leaving you to find out afterwards, and a dedicated financial counsellor is available at no charge.',
    },
    {
      question: 'Can my daughter or partner come with me and ask questions?',
      answer:
        'Yes, warmly encouraged. We schedule first consultations for a full 60 minutes with family welcome in the room or on speakerphone, ensuring there is ample unhurried time to review every question without rush.',
    },
    {
      question: 'I am already in treatment elsewhere. Can I still come?',
      answer:
        'Yes. You sign one records release and our office coordinates collecting your pathology slides, imaging, and lab records from wherever they are, so you do not have to become an administrator for your own illness.',
    },
    {
      question: 'What does a second opinion involve, and what does it cost?',
      answer:
        'A second opinion includes a full chart review of your diagnosis, tumour biology, and treatment recommendations, followed by an in-depth conversation on alternatives and evidence. Most insurers cover second opinions, and our staff will confirm your specific coverage in advance.',
    },
    {
      question: 'Do you offer genomic testing or clinical trials?',
      answer:
        'Yes. Comprehensive biomarker, genomic, and molecular testing is performed before treatment begins. Dr. Kannan also participates in leading clinical registries (such as the Breast Cancer Index registry) and maintains direct collaborative networks for trial placement.',
    },
    {
      question: 'What do I do if something goes wrong at night or at the weekend?',
      answer:
        'Call our clinic line at (972) 709-2580. A physician is on call 24 hours a day, 7 days a week with access to your chart, so you are never left without guidance when side effects or symptoms emerge.',
    },
    {
      question: 'Do you speak Spanish?',
      answer:
        'Yes. Consultations are conducted directly in English and Spanish (\u00a1Se habla espa\u00f1ol!). Certified medical interpreters are also arranged at no cost for any other language.',
    },
  ];

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="questions" className="w-full bg-white py-24 lg:py-28 px-6 md:px-8 border-b border-[#F1F5F9]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading & Description */}
        <div className="lg:col-span-5 flex flex-col items-start">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center px-4 py-1.5 bg-[#EEF4FE] text-[#155DFC] rounded-full text-[11px] font-semibold uppercase tracking-[0.14em] mb-6">
            Questions
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-[52px] font-extralight leading-[1.15] tracking-tight text-[#0F172A] mb-6">
            The ones people<br />
            <span className="text-[#94A3B8] font-extralight">actually ask.</span>
          </h2>

          {/* Description */}
          <p className="text-[15.5px] sm:text-[16px] leading-[1.65] text-[#475569] max-w-[420px]">
            If yours is not here, call the practice or send it through the form. You will get a real answer, not a brochure.
          </p>

        </div>

        {/* Right Column: 9 Accordion FAQ Items */}
        <div className="lg:col-span-7 flex flex-col space-y-3.5 w-full">
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="w-full bg-white rounded-[20px] border border-[#E2E8F0]/90 transition-all duration-200 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-[#CBD5E1]"
              >
                {/* Accordion Header / Trigger Button */}
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  className="w-full px-6 py-5 sm:px-7 sm:py-5 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#155DFC]/40"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] sm:text-[16px] font-normal text-[#0F172A] tracking-tight leading-snug">
                    {item.question}
                  </span>
                  
                  {/* Expand/Collapse Round Icon */}
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                      isOpen
                        ? 'bg-[#EEF4FE] text-[#155DFC]'
                        : 'bg-[#EFF6FF] text-[#155DFC] hover:bg-[#DBEAFE]'
                    }`}
                  >
                    <svg
                      className="w-3.5 h-3.5 stroke-current transition-transform duration-300"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <line
                        x1="12"
                        y1="5"
                        x2="12"
                        y2="19"
                        className={`transition-all duration-300 origin-center ${
                          isOpen ? 'scale-y-0 opacity-0' : 'scale-y-100 opacity-100'
                        }`}
                      />
                    </svg>
                  </div>
                </button>

                {/* Accordion Body with Smooth CSS Grid Height and Opacity Transition */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="overflow-hidden min-h-0">
                    <div className="px-6 pb-6 pt-0 sm:px-7 sm:pb-7">
                      <p className="text-[14px] sm:text-[14.5px] leading-[1.65] text-[#475569]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
