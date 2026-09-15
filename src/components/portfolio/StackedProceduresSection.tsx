'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PILL_SERVICES = [
  {
    title: 'Facial Aesthetic Surgery',
    desc: 'Rhinoplasty, Blepharoplasty & Deep-Plane Facelift for anatomical balance.',
    slug: 'rhinoplasty',
    cardBg: 'bg-[#ECE7F2] hover:bg-[#E4DDEB] border border-[#DDD3E4]',
    iconCircleBg: 'bg-[#9784B4]',
    iconSvg: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: 'Body Contouring & Sculpting',
    desc: 'Gynecomastia, VASER 360° Liposuction & Abdominoplasty muscle repair.',
    slug: 'gynecomastia-surgery',
    cardBg: 'bg-[#FDF0E9] hover:bg-[#F9E6DC] border border-[#F3DDD2]',
    iconCircleBg: 'bg-[#E8A88E]',
    iconSvg: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: 'Breast Aesthetics & Lift',
    desc: 'Dual-plane cohesive implants, breast reduction & oncoplastic care.',
    slug: 'breast-augmentation',
    cardBg: 'bg-[#FDF0E9] hover:bg-[#F9E6DC] border border-[#F3DDD2]',
    iconCircleBg: 'bg-[#E8A88E]',
    iconSvg: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    title: 'Reconstructive Microsurgery',
    desc: '500+ microvascular free flaps, burns care & trauma reconstruction.',
    slug: 'microvascular-surgery',
    cardBg: 'bg-[#ECE7F2] hover:bg-[#E4DDEB] border border-[#DDD3E4]',
    iconCircleBg: 'bg-[#9784B4]',
    iconSvg: (
      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 17" />
      </svg>
    ),
  },
];

export default function StackedProceduresSection() {
  return (
    <section id="what-we-do" className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
      
      {/* "WHAT WE DO" - Pill/Capsule Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Side: Headline & Intro */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#8C8176] uppercase">
            WHAT WE DO
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#2A2533] leading-tight">
            Where Precision <span className="font-serif italic text-[#9784B4]">Meets Passion.</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-[#675F72] leading-relaxed">
            Delivering gold-standard plastic, cosmetic, and microvascular reconstructive procedures in Pune. Every surgery is tailored to restore anatomical harmony, confidence, and natural aesthetic results.
          </p>

          <div className="mt-7 flex items-center gap-3">
            <Link
              href="/services"
              className="px-6 py-3 rounded-full bg-[#9784B4] hover:bg-[#8470A3] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-sm hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <span>Explore All Specialties</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Right Side: 4 Modern Pill/Capsule Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PILL_SERVICES.map((service, idx) => (
            <Link
              key={idx}
              href={`/services/${service.slug}`}
              className={`rounded-[28px] p-4 sm:p-5 transition-all duration-300 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_25px_-8px_rgba(151,132,180,0.25)] hover:-translate-y-1 flex items-center gap-3.5 group ${service.cardBg}`}
            >
              {/* Icon in solid colored circle */}
              <div className={`w-11 h-11 rounded-full ${service.iconCircleBg} flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform`}>
                {service.iconSvg}
              </div>

              {/* Title & Description */}
              <div className="flex-1 min-w-0 pr-2">
                <h3 className="font-semibold text-sm sm:text-[15px] text-[#2A2533] group-hover:text-[#9784B4] transition-colors leading-snug">
                  {service.title}
                </h3>
                <p className="mt-0.5 text-[11px] sm:text-xs text-[#675F72] line-clamp-2 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>

    </section>
  );
}
