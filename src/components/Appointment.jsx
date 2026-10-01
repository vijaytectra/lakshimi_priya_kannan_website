'use client';

import React, { useState } from 'react';

export default function Appointment() {
  const [reason, setReason] = useState('New diagnosis');
  const [timeToCall, setTimeToCall] = useState('Morning — 8:30 am to 12:00 pm');
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
  });
  const [errors, setErrors] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
  });
  const [touched, setTouched] = useState({
    fullName: false,
    phoneNumber: false,
    emailAddress: false,
  });
  const [submitted, setSubmitted] = useState(false);

  // Validation functions
  const validateName = (val) => {
    const trimmed = val.trim();
    if (!trimmed) {
      return 'Full name is required.';
    }
    if (!/^[a-zA-Z\s]+$/.test(trimmed)) {
      return 'Name must contain alphabets and spaces only.';
    }
    if (trimmed.length < 2) {
      return 'Name must be at least 2 characters.';
    }
    return '';
  };

  const validatePhone = (val) => {
    if (!val) {
      return 'Phone number is required.';
    }
    if (!/^\d+$/.test(val)) {
      return 'Phone number must contain numbers only.';
    }
    if (val.length < 10) {
      return `Phone number must be 10 digits (${val.length}/10).`;
    }
    return '';
  };

  const validateEmail = (val) => {
    const trimmed = val.trim();
    if (!trimmed) {
      return 'Email address is required.';
    }
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
    if (!gmailRegex.test(trimmed)) {
      return 'Please enter a valid Gmail address ending with @gmail.com.';
    }
    return '';
  };

  // Handlers with real-time filtering & validation
  const handleNameChange = (e) => {
    // Allow alphabets and spaces only. Block numbers and special characters.
    const cleanValue = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setFormData((prev) => ({ ...prev, fullName: cleanValue }));
    setTouched((prev) => ({ ...prev, fullName: true }));
    setErrors((prev) => ({ ...prev, fullName: validateName(cleanValue) }));
  };

  const handleNameKeyDown = (e) => {
    if (
      e.ctrlKey || e.metaKey || e.altKey ||
      ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter', 'Home', 'End'].includes(e.key)
    ) {
      return;
    }
    if (!/^[a-zA-Z\s]$/.test(e.key)) {
      e.preventDefault();
      setTouched((prev) => ({ ...prev, fullName: true }));
      setErrors((prev) => ({ ...prev, fullName: 'Numbers and special characters are not allowed.' }));
    }
  };

  const handlePhoneChange = (e) => {
    // Allow numbers only. Block alphabets, spaces, and special characters. Max 10 digits.
    const cleanValue = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, phoneNumber: cleanValue }));
    setTouched((prev) => ({ ...prev, phoneNumber: true }));
    setErrors((prev) => ({ ...prev, phoneNumber: validatePhone(cleanValue) }));
  };

  const handlePhoneKeyDown = (e) => {
    if (
      e.ctrlKey || e.metaKey || e.altKey ||
      ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab', 'Enter', 'Home', 'End'].includes(e.key)
    ) {
      return;
    }
    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
      setTouched((prev) => ({ ...prev, phoneNumber: true }));
      setErrors((prev) => ({ ...prev, phoneNumber: 'Alphabets, spaces, and special characters are not allowed.' }));
    }
  };

  const handleEmailChange = (e) => {
    const val = e.target.value;
    setFormData((prev) => ({ ...prev, emailAddress: val }));
    setTouched((prev) => ({ ...prev, emailAddress: true }));
    setErrors((prev) => ({ ...prev, emailAddress: validateEmail(val) }));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    if (field === 'fullName') setErrors((prev) => ({ ...prev, fullName: validateName(formData.fullName) }));
    if (field === 'phoneNumber') setErrors((prev) => ({ ...prev, phoneNumber: validatePhone(formData.phoneNumber) }));
    if (field === 'emailAddress') setErrors((prev) => ({ ...prev, emailAddress: validateEmail(formData.emailAddress) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameErr = validateName(formData.fullName);
    const phoneErr = validatePhone(formData.phoneNumber);
    const emailErr = validateEmail(formData.emailAddress);

    setTouched({ fullName: true, phoneNumber: true, emailAddress: true });
    setErrors({ fullName: nameErr, phoneNumber: phoneErr, emailAddress: emailErr });

    if (!nameErr && !phoneErr && !emailErr) {
      setSubmitted(true);
    }
  };

  const reasons = ['New diagnosis', 'Second opinion', 'For a family member'];

  return (
    <section id="appointment" className="w-full bg-white py-14 sm:py-20 lg:py-28 px-3.5 sm:px-6 md:px-8">
      {/* Outer Ice-Blue Rounded Container */}
      <div className="max-w-[1240px] mx-auto bg-[#EAF2FC] rounded-[24px] sm:rounded-[36px] lg:rounded-[40px] p-5 sm:p-10 lg:p-16 border border-[#DBEAFE]/60 shadow-[0_4px_24px_rgba(21,93,252,0.04)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Direct Call Information */}
          <div className="lg:col-span-5 flex flex-col items-start">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center px-3.5 py-1.5 bg-white text-[#155DFC] rounded-full text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.14em] mb-5 sm:mb-6 shadow-sm border border-[#DBEAFE]/80">
              Request an appointment
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-[50px] font-extralight leading-[1.15] tracking-tight text-[#0F172A] mb-4 sm:mb-6">
              Call, or let <span className="text-[#94A3B8] font-extralight">us call you.</span>
            </h2>

            {/* Subtext */}
            <p className="text-[14px] sm:text-[16px] leading-[1.6] text-[#475569] mb-6 sm:mb-8">
              A person answers this number during clinic hours — not a menu.
            </p>

            {/* Prominent Phone Link */}
            <div className="mb-6 sm:mb-8">
              <a
                href="tel:9727092580"
                className="text-2xl min-[360px]:text-3xl sm:text-4xl lg:text-[42px] font-light text-[#0F172A] tracking-tight hover:text-[#155DFC] transition-colors block mb-1.5 sm:mb-2"
              >
                (972) 709-2580
              </a>
              <div className="text-[12.5px] sm:text-[13.5px] text-[#64748B] font-normal">
                Monday to Friday, 8:30 am – 5:00 pm Central
              </div>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-col space-y-3 w-full sm:w-auto">
              
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white text-[#1E293B] rounded-full text-[13.5px] font-medium shadow-sm border border-[#E2E8F0]/70 w-fit">
                <svg
                  className="w-4 h-4 text-[#155DFC]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Seen within 3 business days</span>
              </div>

              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white text-[#1E293B] rounded-full text-[13.5px] font-medium shadow-sm border border-[#E2E8F0]/70 w-fit">
                <svg
                  className="w-4 h-4 text-[#155DFC]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Replies within 1 business day</span>
              </div>

              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white text-[#1E293B] rounded-full text-[13.5px] font-medium shadow-sm border border-[#E2E8F0]/70 w-fit">
                <svg
                  className="w-4 h-4 text-[#155DFC]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>A full 60-minute consultation</span>
              </div>

            </div>

          </div>

          {/* Right Column: "Request a call back" Form Card */}
          <div className="lg:col-span-7 w-full">
            <div className="w-full bg-white rounded-[22px] sm:rounded-[32px] p-4.5 sm:p-8 lg:p-10 shadow-[0_12px_40px_rgba(15,23,42,0.06)] border border-[#E2E8F0]/80">
              
              <h3 className="text-[22px] sm:text-[24px] font-normal text-[#0F172A] tracking-tight mb-5">
                Request a call back
              </h3>

              {/* Informational Callout */}
              <div className="flex items-start gap-3 bg-[#EEF4FE] rounded-2xl p-4 mb-6 border border-[#DBEAFE]">
                <svg
                  className="w-4 h-4 text-[#155DFC] shrink-0 mt-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <p className="text-[12.5px] sm:text-[13px] leading-relaxed text-[#475569]">
                  Not for emergencies — call 911. Please keep medical details for the call.
                </p>
              </div>

              {submitted ? (
                <div className="bg-[#EFF6FF] border border-[#BFDBFE] rounded-2xl p-8 text-center my-6">
                  <div className="w-12 h-12 rounded-full bg-[#155DFC] text-white flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-normal text-[#0F172A] mb-2">Request Received</h4>
                  <p className="text-sm text-[#475569]">
                    Thank you. A member of our clinical practice will call you within one business day during your preferred time.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col space-y-5">
                  
                  {/* Row 1: Full name and Phone number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="text-[13.5px] font-medium text-[#0F172A] mb-2 flex justify-between items-center">
                        <span>Full name</span>
                        <span className="text-[11px] text-[#64748B] font-normal">Letters &amp; spaces only</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleNameChange}
                        onKeyDown={handleNameKeyDown}
                        onBlur={() => handleBlur('fullName')}
                        placeholder="e.g. Jane Doe"
                        autoComplete="name"
                        className={`w-full px-4 py-3 bg-white rounded-2xl text-[14.5px] text-[#0F172A] transition-all outline-none border ${
                          touched.fullName && errors.fullName
                            ? 'border-red-500 ring-2 ring-red-400/20'
                            : 'border-[#CBD5E1] focus:ring-2 focus:ring-[#155DFC]/30 focus:border-[#155DFC]'
                        }`}
                      />
                      {touched.fullName && errors.fullName && (
                        <span className="text-[12px] text-red-600 mt-1.5 flex items-center gap-1 font-medium">
                          <svg className="w-3.5 h-3.5 shrink-0 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.fullName}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col">
                      <label className="text-[13.5px] font-medium text-[#0F172A] mb-2 flex justify-between items-center">
                        <span>Phone number</span>
                        <span className="text-[11px] text-[#64748B] font-normal">Numbers only</span>
                      </label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handlePhoneChange}
                        onKeyDown={handlePhoneKeyDown}
                        onBlur={() => handleBlur('phoneNumber')}
                        placeholder="e.g. 9727092580"
                        maxLength={10}
                        autoComplete="tel"
                        className={`w-full px-4 py-3 bg-white rounded-2xl text-[14.5px] text-[#0F172A] transition-all outline-none border ${
                          touched.phoneNumber && errors.phoneNumber
                            ? 'border-red-500 ring-2 ring-red-400/20'
                            : 'border-[#CBD5E1] focus:ring-2 focus:ring-[#155DFC]/30 focus:border-[#155DFC]'
                        }`}
                      />
                      {touched.phoneNumber && errors.phoneNumber ? (
                        <span className="text-[12px] text-red-600 mt-1.5 flex items-center gap-1 font-medium">
                          <svg className="w-3.5 h-3.5 shrink-0 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                          {errors.phoneNumber}
                        </span>
                      ) : (
                        <span className="text-[12px] text-[#64748B] mt-1.5">
                          Best daytime number (10 digits).
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email address */}
                  <div className="flex flex-col">
                    <label className="text-[13.5px] font-medium text-[#0F172A] mb-2 flex justify-between items-center">
                      <span>Email address</span>
                      <span className="text-[11px] text-[#155DFC] font-normal">Must end with @gmail.com</span>
                    </label>
                    <input
                      type="email"
                      name="emailAddress"
                      value={formData.emailAddress}
                      onChange={handleEmailChange}
                      onBlur={() => handleBlur('emailAddress')}
                      placeholder="yourname@gmail.com"
                      autoComplete="email"
                      className={`w-full px-4 py-3 bg-white rounded-2xl text-[14.5px] text-[#0F172A] transition-all outline-none border ${
                        touched.emailAddress && errors.emailAddress
                          ? 'border-red-500 ring-2 ring-red-400/20'
                          : 'border-[#CBD5E1] focus:ring-2 focus:ring-[#155DFC]/30 focus:border-[#155DFC]'
                      }`}
                    />
                    {touched.emailAddress && errors.emailAddress && (
                      <span className="text-[12px] text-red-600 mt-1.5 flex items-center gap-1 font-medium">
                        <svg className="w-3.5 h-3.5 shrink-0 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.emailAddress}
                      </span>
                    )}
                  </div>

                  {/* Row 3: Reason for your visit */}
                  <div className="flex flex-col">
                    <label className="text-[13.5px] font-medium text-[#0F172A] mb-2.5">
                      Reason for your visit
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {reasons.map((r) => {
                        const isSelected = reason === r;
                        return (
                          <button
                            key={r}
                            type="button"
                            onClick={() => setReason(r)}
                            className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-[12.5px] sm:text-[13.5px] font-medium transition-all ${
                              isSelected
                                ? 'bg-[#EFF6FF] border-2 border-[#155DFC] text-[#155DFC]'
                                : 'bg-white border border-[#CBD5E1] text-[#475569] hover:border-slate-400'
                            }`}
                          >
                            {r}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 4: Best time to call */}
                  <div className="flex flex-col">
                    <label className="text-[13.5px] font-medium text-[#0F172A] mb-2">
                      Best time to call
                    </label>
                    <div className="relative">
                      <select
                        value={timeToCall}
                        onChange={(e) => setTimeToCall(e.target.value)}
                        className="w-full appearance-none px-4 py-3.5 bg-white border border-[#CBD5E1] rounded-2xl text-[14.5px] text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#155DFC]/30 focus:border-[#155DFC] transition-all pr-10 cursor-pointer"
                      >
                        <option value="Morning — 8:30 am to 12:00 pm">
                          Morning — 8:30 am to 12:00 pm
                        </option>
                        <option value="Afternoon — 12:00 pm to 5:00 pm">
                          Afternoon — 12:00 pm to 5:00 pm
                        </option>
                        <option value="Anytime during clinic hours">
                          Anytime during clinic hours
                        </option>
                      </select>
                      
                      {/* Chevron Down Icon */}
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#475569]">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-[#155DFC] hover:bg-[#1249C9] text-white text-[15px] font-normal rounded-full shadow-[0_8px_20px_rgba(21,93,252,0.25)] hover:shadow-lg transition-all flex items-center justify-center gap-2 group mt-2"
                  >
                    <span>Request a call back</span>
                    <svg
                      className="w-4 h-4 text-white transition-transform duration-150 group-hover:translate-x-1"
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
                  </button>

                  {/* Footnote */}
                  <p className="text-[12px] leading-relaxed text-[#64748B] text-center max-w-[380px] mx-auto pt-1">
                    We call within one business day. Details are used only to arrange your appointment.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
