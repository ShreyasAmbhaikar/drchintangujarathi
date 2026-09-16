import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CREDENTIAL_CARDS = [
  {
    badge: 'BOARD CERTIFIED',
    badgeClass: 'bg-[#9784B4]/20 text-[#5F457E] border border-[#9784B4]/35 font-bold',
    cardBg: 'bg-gradient-to-br from-[#FAF6FE] via-[#F4EBF9] to-[#ECE0F5]',
    borderColor: 'border border-[#DECBEB] hover:border-[#9784B4]',
    hoverShadow: 'hover:shadow-[0_12px_28px_-6px_rgba(151,132,180,0.25)]',
    orderClass: 'order-1 sm:order-1',
    title: 'MCh & DrNB (Plastic Surgery)',
    subtitle: 'MBBS, MS (General Surgery)',
    subtitleColor: 'text-[#644983]',
    desc: 'Dual super-specialty board certifications representing the pinnacle of surgical licensure, rigorous residency training, and aesthetic mastery.',
    iconBoxBg: 'bg-white/90 border border-[#DECBEB]',
    iconSvg: (
      <svg className="w-4 h-4 text-[#644983]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  },
  {
    badge: 'ONCOLOGY CENTER (2018)',
    badgeClass: 'bg-[#E8A88E]/25 text-[#98462E] border border-[#E8A88E]/40 font-bold',
    cardBg: 'bg-gradient-to-br from-[#FFF8F5] via-[#FCF0E8] to-[#F5E2D5]',
    borderColor: 'border border-[#EACCC0] hover:border-[#B8684D]',
    hoverShadow: 'hover:shadow-[0_12px_28px_-6px_rgba(184,104,77,0.22)]',
    orderClass: 'order-2 sm:order-2',
    title: 'Tata Memorial Hospital, Mumbai',
    subtitle: 'Observership in Oncoreconstruction',
    subtitleColor: 'text-[#B8684D]',
    desc: 'Advanced surgical training in submillimeter microvascular tissue transfers and 500+ major head & neck cancer reconstructive surgeries.',
    iconBoxBg: 'bg-white/90 border border-[#EACCC0]',
    iconSvg: (
      <svg className="w-4 h-4 text-[#B8684D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
  {
    badge: 'HOSPITAL APPOINTMENTS',
    badgeClass: 'bg-[#9784B4]/20 text-[#5F457E] border border-[#9784B4]/35 font-bold',
    cardBg: 'bg-gradient-to-br from-[#FAF6FE] via-[#F4EBF9] to-[#EAE0F5]',
    borderColor: 'border border-[#DECBEB] hover:border-[#9784B4]',
    hoverShadow: 'hover:shadow-[0_12px_28px_-6px_rgba(151,132,180,0.25)]',
    orderClass: 'order-3 sm:order-4',
    title: 'Ruby Hall & Manipal Hospital',
    subtitle: 'Senior Consultant Plastic Surgeon',
    subtitleColor: 'text-[#644983]',
    desc: 'Active surgical privileges in modular laminar-flow OT suites at Ruby Hall Clinic (Sassoon Rd) and Manipal Hospital (Kharadi, Pune).',
    iconBoxBg: 'bg-white/90 border border-[#DECBEB]',
    iconSvg: (
      <svg className="w-4 h-4 text-[#644983]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
        <path d="M9 9h2" />
        <path d="M9 13h2" />
        <path d="M13 9h2" />
        <path d="M13 13h2" />
      </svg>
    ),
  },
  {
    badge: 'TRAUMA & MICROSURGERY',
    badgeClass: 'bg-[#E8A88E]/25 text-[#98462E] border border-[#E8A88E]/40 font-bold',
    cardBg: 'bg-gradient-to-br from-[#FFF8F5] via-[#FCF0E8] to-[#F5E2D5]',
    borderColor: 'border border-[#EACCC0] hover:border-[#B8684D]',
    hoverShadow: 'hover:shadow-[0_12px_28px_-6px_rgba(184,104,77,0.22)]',
    orderClass: 'order-4 sm:order-3',
    title: 'Ganga Hospital, Coimbatore',
    subtitle: 'Observership in Trauma & Hand Surgery',
    subtitleColor: 'text-[#B8684D]',
    desc: 'Advanced observership at India’s globally renowned institute for acute limb trauma, complex hand reconstruction, and microvascular replantation.',
    iconBoxBg: 'bg-white/90 border border-[#EACCC0]',
    iconSvg: (
      <svg className="w-4 h-4 text-[#B8684D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 3 3 3-11.5 11.5a4 4 0 0 1-2 1.2L3 21l2.3-4.5a4 4 0 0 1 1.2-2L18 3Z" />
        <path d="m14 7 3 3" />
      </svg>
    ),
  },
];

const ACCREDITATIONS = [
  { name: 'APSI', label: 'Association of Plastic Surgeons of India', badgeBg: 'bg-[#644983] text-white' },
  { name: 'ISAPS', label: 'International Society of Aesthetic Plastic Surgery', badgeBg: 'bg-[#B8684D] text-white' },
  { name: 'MMC', label: 'Maharashtra Medical Council', badgeBg: 'bg-[#2E6B4F] text-white' },
];

export default function CredentialsSpotlight() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 pb-6 border-b border-[#EAE0D4]">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#9784B4] uppercase">
              SURGEON CREDENTIALS & TRUST
            </span>
            <span className="w-2 h-2 rounded-full bg-[#9784B4]" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#25202E]">
            Fellowship excellence. <span className="font-serif italic text-[#9784B4]">Premier hospital privileges.</span>
          </h2>
        </div>

        <Link
          href="/about"
          className="text-xs font-semibold tracking-[0.16em] uppercase text-[#6D6377] hover:text-[#9784B4] transition-colors inline-flex items-center gap-1.5 whitespace-nowrap self-start sm:self-auto"
        >
          <span>READ FULL DOCTOR PROFILE</span>
          <span>→</span>
        </Link>
      </div>

      {/* Two-Column Grid: Doctor Image Left, 4 Credential Cards Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        {/* Left Column: Doctor Portrait & Signature Purple Glassmorphic Identity Card (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col">
          <div className="relative w-full h-[460px] sm:h-[500px] lg:h-full min-h-[480px] rounded-[28px] overflow-hidden border border-[#E2D6CA] bg-[#FAF8F5] shadow-md flex flex-col justify-between p-5 group">
            
            {/* Background Doctor Portrait Image */}
            <Image
              src="/images/doctor-portrait.webp"
              alt="Dr. Chintan S. Gujarathi — Plastic & Reconstructive Surgeon Pune"
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 480px"
              priority
            />

            {/* Top Floating Badge in Signature Button Purple Style */}
            <div className="relative z-10 self-start">
              <span className="inline-flex items-center gap-2 bg-[#9784B4] text-white px-4 py-1.5 rounded-full border border-white/20 text-[11px] font-bold tracking-wider uppercase shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#FFE4D6]" />
                15+ Years Experience
              </span>
            </div>

            {/* Bottom Overlay Info Card in Signature Button Purple Style */}
            <div className="relative z-10 bg-[#9784B4]/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/25 shadow-xl text-white">
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#FFE2D4] uppercase block mb-1">
                LEAD CONSULTANT SURGEON
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-normal leading-snug">
                Dr. Chintan S. Gujarathi
              </h3>
              <p className="text-xs text-white/95 font-semibold mt-0.5 tracking-wide">
                MBBS | MS | M.Ch (Plastic Surgery) | DrNB
              </p>
              <p className="text-[11.5px] text-white/90 leading-relaxed mt-2 pt-2 border-t border-white/20">
                Senior Consultant at Ruby Hall Clinic & Manipal Hospital, Pune. 500+ microvascular reconstructive surgeries.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: 4 Credential & Experience Cards in a 2x2 Grid (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            {CREDENTIAL_CARDS.map((item, idx) => (
              <div
                key={idx}
                className={`${item.cardBg} rounded-[24px] ${item.borderColor} p-5 sm:p-6 flex flex-col justify-between shadow-[0_4px_18px_-4px_rgba(37,32,46,0.06)] ${item.hoverShadow} ${item.orderClass} transition-all duration-300 hover:-translate-y-1`}
              >
                <div>
                  {/* Card Header with Themed Badge & Minimalist Icon */}
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-black/[0.06]">
                    <span className={`text-[9.5px] font-bold tracking-[0.16em] uppercase px-3 py-1 rounded-full shadow-2xs ${item.badgeClass}`}>
                      {item.badge}
                    </span>
                    <div className={`w-8 h-8 rounded-full ${item.iconBoxBg} flex items-center justify-center shrink-0 shadow-2xs`}>
                      {item.iconSvg}
                    </div>
                  </div>

                  <h3 className="font-serif text-base sm:text-[17px] font-medium text-[#221E2A] mt-3.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className={`text-xs font-semibold mt-1 tracking-wide ${item.subtitleColor}`}>
                    {item.subtitle}
                  </p>
                  <p className="mt-2.5 text-xs text-[#554B64] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Affiliations Strip in Distinct Sage-Mint Gradient */}
          <div className="p-4 sm:p-4.5 rounded-2xl bg-gradient-to-r from-[#EAF3EE] via-[#F3F9F5] to-[#E2EFE7] border border-[#A5CEB7] shadow-[0_4px_16px_-4px_rgba(46,107,79,0.08)] flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="text-[10.5px] font-bold tracking-[0.2em] uppercase text-[#23533C]">
              AFFILIATIONS & REGISTRATIONS:
            </span>
            <div className="flex flex-wrap items-center gap-3 sm:gap-5">
              {ACCREDITATIONS.map((acc, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full font-bold text-[11px] shadow-2xs ${acc.badgeBg}`}>
                    {acc.name}
                  </span>
                  <span className="text-[11.5px] font-medium text-[#33423A]">
                    {acc.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
