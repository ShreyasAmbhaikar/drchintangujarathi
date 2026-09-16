import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Soft atmospheric watercolor lilac wash on top-left background */}
      <div
        className="absolute top-0 left-0 w-[720px] h-[660px] pointer-events-none -z-10 opacity-70"
        style={{
          background: 'radial-gradient(ellipse at 18% 28%, #E4D8F1 0%, rgba(232, 222, 245, 0.45) 45%, rgba(251, 249, 245, 0) 75%)',
        }}
      />

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[540px]">
          
          {/* Left Column: Headline, Peach Swoosh, Clinical Bio & Desktop CTAs */}
          <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left z-10 lg:pr-4">
            
            {/* High-Intent SEO Eyebrow Badge */}
            <div className="inline-flex items-center justify-center gap-2 px-4 sm:px-3.5 py-1.5 rounded-full bg-[#FAF5EE] border border-[#E8DEC8] shadow-2xs mb-3.5 max-w-[280px] sm:max-w-none">
              <span className="text-[#E8A88E] text-xs shrink-0">★</span>
              <span className="hidden sm:inline text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase text-[#6D5F7A]">
                Senior Consultant Plastic & Cosmetic Surgeon in Pune
              </span>
              <span className="sm:hidden text-[10px] font-bold tracking-[0.16em] uppercase text-[#6D5F7A] text-center whitespace-nowrap">
                Plastic & Cosmetic Surgeon • Pune
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-normal leading-[1.03] text-[#221E2A] tracking-tight text-center lg:text-left mt-1">
              Sculpting
              <br />
              <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                aesthetic
                <span className="inline-block text-[#9683B5]/70 text-xs ml-1.5 -mt-3">✦</span>
              </span>
              <br />
              harmony
            </h1>

            {/* Hand-drawn peach/terracotta curved underline swoosh */}
            <div className="relative mt-2 -mb-2 flex justify-center lg:justify-start w-full">
              <svg viewBox="0 0 260 20" fill="none" className="w-[180px] sm:w-[240px] h-4">
                <path
                  d="M 5 13 Q 130 3 255 14"
                  stroke="#E8A88E"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Clinical Bio text with primary target SEO keywords */}
            <p className="mt-8 text-[#675F72] text-sm sm:text-[15px] leading-[1.75] max-w-[480px] font-normal mx-auto lg:mx-0 text-center lg:text-left">
              Consult with <span className="font-semibold text-[#25202E]">Dr. Chintan Gujarathi</span> (MBBS, MS, MCh, DrNB) — one of the best plastic surgeons in Pune with 15+ years of surgical mastery. Specializing in <span className="font-medium text-[#25202E]">Rhinoplasty, Gynecomastia Surgery, Liposuction, Earlobe Repair & Reconstructive Microsurgery</span> with premier hospital privileges at <span className="font-medium text-[#25202E]">Ruby Hall Clinic</span> and <span className="font-medium text-[#25202E]">Manipal Hospital</span>.
            </p>

            {/* Desktop Consultation CTA buttons (Hidden on mobile) */}
            <div className="hidden lg:flex mt-9 flex-row items-center justify-start gap-4 w-auto">
              <a
                href="tel:07977429688"
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#9E8DB9] hover:bg-[#8D7BAA] text-white text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(158,141,185,0.45)] hover:shadow-[0_14px_30px_-5px_rgba(158,141,185,0.6)] hover:-translate-y-0.5"
              >
                <span>Book Consultation</span>
                <span className="text-base font-light">→</span>
              </a>

              <a
                href="#procedures"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#D5CBE2] bg-white/70 hover:bg-white text-[11px] font-semibold tracking-[0.18em] uppercase text-[#25202E] transition-all hover:border-[#9784B4]"
              >
                <span>Explore Procedures</span>
                <span className="text-xs">↓</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Dome Visual & Mobile CTAs Positioned Below Image */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[490px] lg:max-w-[540px] aspect-square flex items-center justify-center">
              {/* Soft atmospheric ambient glow behind the arch */}
              <div
                className="absolute -inset-8 pointer-events-none -z-10 opacity-70"
                style={{
                  background: 'radial-gradient(ellipse at 52% 48%, #EDE2F5 0%, rgba(245, 237, 248, 0.5) 45%, rgba(251, 249, 245, 0) 72%)',
                }}
              />
              <Image
                src="/images/mariana-hero-dome.webp"
                alt="Aesthetic Harmony & Precision Surgery — Dr. Chintan Gujarathi"
                fill
                priority
                className="object-contain object-center select-none"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, black 94%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, black 94%, transparent 100%)',
                }}
                sizes="(max-width: 768px) 100vw, 540px"
              />
            </div>

            {/* Mobile-Only CTA Buttons: Cleanly positioned BELOW the girl's image */}
            <div className="flex lg:hidden mt-6 flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-[380px] z-10 px-2">
              <a
                href="tel:07977429688"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#9E8DB9] hover:bg-[#8D7BAA] text-white text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(158,141,185,0.45)] hover:shadow-[0_14px_30px_-5px_rgba(158,141,185,0.6)] hover:-translate-y-0.5"
              >
                <span>Book Consultation</span>
                <span className="text-base font-light">→</span>
              </a>

              <a
                href="#procedures"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#D5CBE2] bg-white/70 hover:bg-white text-[11px] font-semibold tracking-[0.18em] uppercase text-[#25202E] transition-all hover:border-[#9784B4]"
              >
                <span>Explore Procedures</span>
                <span className="text-xs">↓</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
