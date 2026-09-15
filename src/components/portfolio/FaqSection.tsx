'use client';

import React, { useState } from 'react';

const FAQS = [
  {
    q: 'How do I schedule a confidential consultation with Dr. Chintan Gujarathi?',
    a: 'You can book a private consultation directly by calling 079774 29688 or connecting via WhatsApp. In-person consultations are conducted in dedicated OPD suites at Ruby Hall Clinic, Sassoon Road, Pune, or by prior appointment at Manipal Hospital, Kharadi. Complete privacy and discretion are assured.',
  },
  {
    q: 'What surgical techniques ensure natural, undetectable results?',
    a: 'Dr. Chintan utilizes deep-plane musculoskeletal vector realignment (SMAS lifting) and ultrasound-assisted VASER contouring. By repositioning the deeper supportive muscular layers rather than stretching surface skin, facial expressions and body curves remain authentic, youthful, and free of any artificial or stretched appearance.',
  },
  {
    q: 'What is the typical recovery timeline for Gynecomastia and Rhinoplasty?',
    a: 'Gynecomastia is generally a day-care procedure allowing patients to return to light work within 2 to 3 days, with compression vest usage for 3 to 4 weeks. Rhinoplasty involves an external nasal splint for 7 days, after which most patients comfortably resume social activities. Full tissue maturation continues over subsequent months with regular doctor follow-ups.',
  },
  {
    q: 'At which hospitals are surgical procedures performed?',
    a: 'All surgeries are performed in top-tier accredited tertiary care hospitals—primarily Ruby Hall Clinic (Sassoon Road) and Manipal Hospital (Kharadi, Pune). These centers feature state-of-the-art laminar-flow operating suites, dedicated plastic surgery instrumentation, board-certified anesthesiologists, and 24/7 intensive care backup.',
  },
  {
    q: 'Can non-surgical treatments like Botox, Fillers & PRP be done same-day?',
    a: 'Yes. Evidence-based facial aesthetics including anti-wrinkle Botox, hyaluronic acid dermal fillers, and autologous PRP/GFC therapies are safely administered in our sterile OPD suites at Ruby Hall Clinic. These procedures require 30 to 45 minutes with immediate return to daily activities.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Left Column: Heading & Subtitle */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#8C8176] uppercase block mb-1.5">
            PATIENT INQUIRIES & FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#2A2533] leading-tight">
            Frequently asked
            <br />
            <span className="font-serif italic text-[#9F8EB9]">questions.</span>
          </h2>
          <p className="mt-4 text-[#675F72] text-xs sm:text-sm leading-relaxed max-w-[340px]">
            Clear, transparent answers to help you make informed, confident decisions regarding your aesthetic and reconstructive surgical journey.
          </p>


        </div>

        {/* Right Column: Unified Editorial Accordion Panel (Sleek, Not Boxy Cards) */}
        <div className="lg:col-span-7">
          <div className="rounded-[28px] bg-[#FAF5EE] border border-[#E8DEC8] p-5 sm:p-7 shadow-xs divide-y divide-[#EAE0D1]">
            {FAQS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="py-4 sm:py-5 first:pt-0 last:pb-0 transition-colors"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full text-left flex items-start justify-between gap-4 cursor-pointer group"
                  >
                    <div className="flex items-start gap-3.5">
                      <span className="text-[11px] font-semibold text-[#8E7BA9] tracking-widest pt-0.5 select-none">
                        0{idx + 1}
                      </span>
                      <span className="font-medium text-sm sm:text-[15px] text-[#25202E] leading-snug group-hover:text-[#8E7BA9] transition-colors">
                        {faq.q}
                      </span>
                    </div>

                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 mt-0.5 ${
                        isOpen
                          ? 'bg-[#8E7BA9] text-white shadow-xs rotate-45'
                          : 'bg-[#EDE4F5] text-[#8E7BA9] group-hover:bg-[#8E7BA9] group-hover:text-white'
                      }`}
                      aria-hidden="true"
                    >
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pl-8 pr-2 pt-3 pb-1 text-xs sm:text-[13px] text-[#635873] leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
