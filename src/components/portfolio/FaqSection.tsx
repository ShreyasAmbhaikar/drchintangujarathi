'use client';

import React, { useState } from 'react';

const FAQS = [
  {
    q: 'What is the estimated cost of plastic and cosmetic surgery in Pune?',
    a: 'The cost of plastic and cosmetic surgery in Pune depends on the specific procedure, anatomical complexity, surgical technique (e.g. VASER ultrasound-assisted liposuction vs traditional, or open structural rhinoplasty), and the choice of hospital suite at Ruby Hall Clinic or Manipal Hospital. Minor procedures like split earlobe repair start from affordable day-care rates, while surgeries such as Gynecomastia, Liposuction, or Rhinoplasty include complete packages covering surgeon fees, anesthesiologist care, OT charges, and post-operative compression garments with 100% transparent estimates provided during your private consultation.',
  },
  {
    q: 'Is plastic surgery or reconstructive surgery covered by medical insurance in India?',
    a: 'In India, purely elective aesthetic procedures (like cosmetic rhinoplasty, breast augmentation, or facelifts) are generally not covered by health insurance. However, reconstructive surgeries, trauma and accidental laceration repairs, facial bone fracture fixation, post-burn contracture releases, and functional corrections (such as septoplasty for blocked breathing or breast reduction for chronic back pain) are eligible for cashless insurance coverage at Ruby Hall Clinic and Manipal Hospital. Our hospital coordination desk assists you with all pre-authorization paperwork.',
  },
  {
    q: 'Where does Dr. Chintan Gujarathi consult in Pune and what are the OPD timings?',
    a: 'Dr. Chintan Gujarathi conducts outpatient consultations (OPD) at two premier multi-specialty hospitals: Ruby Hall Clinic (102, 1st Floor, Cancer Bldg, Sassoon Road, Pune 411001) and Manipal Hospital (Mundhwa - Kharadi Rd, Kharadi, Pune 411014). OPD timings are Monday through Saturday from 9:00 AM to 9:00 PM by prior appointment. To book a consultation, call directly at 079774 29688.',
  },
  {
    q: 'Why should I choose an MCh & DrNB board-certified plastic surgeon?',
    a: 'MCh and DrNB in Plastic & Reconstructive Surgery represent the highest level of super-specialty surgical accreditation recognized by the National Medical Commission (NMC). Achieving these qualifications requires 6 to 8 years of surgical residencies beyond an MBBS, mastering submillimeter microvascular anastomoses and aesthetic anatomy. In addition, Dr. Chintan has completed specialized training at Tata Memorial Hospital (Mumbai) and Ganga Hospital (Coimbatore), guaranteeing hospital-grade safety standards.',
  },
  {
    q: 'What is the recovery timeline and hospital stay for Gynecomastia and Rhinoplasty?',
    a: 'Gynecomastia surgery is performed as a day-care procedure under general or twilight anesthesia, allowing patients to return home the same evening and resume desk work within 2 to 3 days (wearing a discreet compression vest for 3 to 4 weeks). Rhinoplasty typically involves a 1-day hospital stay with external splint removal at day 7, after which patients comfortably resume social routines. Strenuous workouts can usually be resumed after 3 to 4 weeks.',
  },
  {
    q: 'Can minor procedures like torn earlobe repair or facial injectables be done same-day?',
    a: 'Yes. Minor office procedures such as split earlobe repair (lobuloplasty), painless ear re-piercing, keloid management, scar revision, and facial aesthetics (Botox, hyaluronic dermal fillers, and PRP therapies) are performed in our sterile OPD suites under local anesthesia. These walk-in procedures take 20 to 45 minutes, with zero downtime and immediate return to normal activities.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* FAQPage JSON-LD Schema for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
