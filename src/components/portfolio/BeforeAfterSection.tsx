'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BeforeAfterCase {
  id: string;
  category: string;
  categoryBadge: string;
  title: string;
  subtitle: string;
  timeline: string;
  serviceSlug: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  keyBenefits: string[];
}

const CASES: BeforeAfterCase[] = [
  {
    id: 'ear-lobule-repair',
    category: 'Earlobe Repair',
    categoryBadge: 'EARLOBE RECONSTRUCTION',
    title: 'Split Earlobe Repair & Lobule Recontouring',
    subtitle: 'In-Office Microsurgical Lobuloplasty',
    timeline: '6 Weeks Post-Op',
    serviceSlug: 'torn-earlobe-repair-in-pune',
    beforeImage: '/images/before-after/earlobe-before.webp',
    afterImage: '/images/before-after/earlobe-after.webp',
    beforeAlt: 'Before Earlobe Surgery — Complete Split Ear Piercing Tear',
    afterAlt: 'After Earlobe Surgery — Restored Smooth Contour and Healed Lobule',
    keyBenefits: [
      'Complete split closure eliminating the vertical notch cleft deformity',
      'Preservation of natural plump lobule curvature and volume',
      'Painless 20-min day-care procedure allowing safe future re-piercing',
    ],
  },
  {
    id: 'rhinoplasty',
    category: 'Facial Plastic Surgery',
    categoryBadge: 'FACIAL PLASTIC SURGERY',
    title: 'Dorsal Hump Reduction & Tip Refinement',
    subtitle: 'Open Structural Rhinoplasty',
    timeline: '6 Months Post-Op',
    serviceSlug: 'rhinoplasty-in-pune',
    beforeImage: '/images/before-after/rhinoplasty-before.webp',
    afterImage: '/images/before-after/rhinoplasty-after.webp',
    beforeAlt: 'Before Rhinoplasty Surgery — Dorsal Hump and Under-projected Tip',
    afterAlt: 'After Rhinoplasty Surgery — Balanced Dorsal Line and Sculpted Tip',
    keyBenefits: [
      'Precision dorsal hump smoothing for a harmonious profile',
      'Structural cartilaginous tip support preventing tip droop',
      'Preservation of nasal valves for clear airway breathing',
    ],
  },
];

export default function BeforeAfterSection() {
  const [activeTab, setActiveTab] = useState<string>(CASES[0].id);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeCase = CASES.find((c) => c.id === activeTab) || CASES[0];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  return (
    <section id="results" className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#EAE0D4]">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10.5px] font-bold tracking-[0.24em] text-[#9784B4] uppercase">
              CLINICAL RESULTS & CASES — PUNE
            </span>
            <span className="w-2 h-2 rounded-full bg-[#9784B4]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-normal text-[#25202E] leading-tight">
            Real Surgical Results. <span className="font-serif italic text-[#9784B4]">Interactive Slider.</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#554B64]">
            Slide the divider to compare verified clinical before and after outcomes from our Pune practice.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="w-full sm:w-auto grid grid-cols-2 sm:flex sm:flex-row items-center gap-1.5 p-1 sm:p-1.5 bg-[#FAF7FC] rounded-full border border-[#EDE6F5] shadow-2xs">
          {CASES.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setActiveTab(item.id);
                  setSliderPosition(50);
                }}
                className={`w-full sm:w-auto text-center px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#9784B4] text-white shadow-xs'
                    : 'text-[#554B64] hover:text-[#25202E] hover:bg-white/60'
                }`}
              >
                {item.category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Showcase Layout without Outer Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Interactive Drag Comparison Slider */}
        <div className="lg:col-span-7">
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="relative w-full aspect-[4/3] rounded-[28px] overflow-hidden border border-[#EAE0D4] bg-[#FAF8F5] shadow-lg select-none touch-none cursor-ew-resize group"
          >
            {/* Layer 1: AFTER Image (Base Layer underneath) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={activeCase.afterImage}
                alt={activeCase.afterAlt}
                fill
                className="object-cover object-center pointer-events-none"
                priority
                sizes="(max-width: 1024px) 100vw, 680px"
              />
            </div>

            {/* Layer 2: BEFORE Image (Clipped Top Layer on the left) */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              }}
            >
              <Image
                src={activeCase.beforeImage}
                alt={activeCase.beforeAlt}
                fill
                className="object-cover object-center pointer-events-none"
                priority
                sizes="(max-width: 1024px) 100vw, 680px"
              />
            </div>

            {/* Interactive Divider Line & Handle */}
            <div
              className="absolute top-0 bottom-0 z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Clean Vertical Divider Line */}
              <div className="absolute top-0 bottom-0 -left-[1px] w-[2px] bg-white shadow-[0_0_8px_rgba(0,0,0,0.35)]" />

              {/* Minimalist Small Circular Grabber Handle */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#9784B4] text-white border-2 border-white shadow-[0_2px_12px_rgba(0,0,0,0.25)] flex items-center justify-center transition-transform duration-150 group-active:scale-110">
                <div className="flex items-center gap-0.5 text-white">
                  <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                  </svg>
                  <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating Status Badges */}
            <div className="absolute top-4 left-4 z-10 bg-[#25202E]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/25 text-[10px] font-bold tracking-widest text-white uppercase shadow-md pointer-events-none">
              BEFORE
            </div>

            <div className="absolute top-4 right-4 z-10 bg-[#9784B4]/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/30 text-[10px] font-bold tracking-widest text-white uppercase shadow-md pointer-events-none">
              AFTER ({activeCase.timeline})
            </div>

            {/* Interactive Hint Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 bg-black/65 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-[10.5px] font-medium tracking-wide text-white/95 shadow-md pointer-events-none transition-opacity duration-300 group-hover:opacity-30">
              ⟵ Drag or slide to compare ⟶
            </div>
          </div>
        </div>

        {/* Right Column: Clean, Streamlined Highlights & CTA */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-5 lg:pl-2">
          
          {/* Category Pill */}
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#7C6399] uppercase bg-[#9784B4]/15 px-3.5 py-1.5 rounded-full border border-[#9784B4]/25 inline-block">
              {activeCase.categoryBadge}
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-serif text-[#25202E] leading-snug">
              {activeCase.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#7D649B] font-medium">
              {activeCase.subtitle}
            </p>
          </div>

          {/* Key Highlights */}
          <div className="space-y-2 pt-1">
            <span className="text-[11px] font-bold text-[#25202E] uppercase tracking-wider block">
              Key Surgical Improvements:
            </span>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-[#554B64]">
              {activeCase.keyBenefits.map((benefit, bIdx) => (
                <li key={bIdx} className="flex items-start gap-2.5">
                  <span className="text-[#9784B4] font-bold text-xs mt-0.5 shrink-0">✦</span>
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="pt-1.5 flex flex-wrap items-center justify-start gap-2.5 sm:gap-3 w-full">
            <Link
              href={`/services/${activeCase.serviceSlug}`}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#9784B4] hover:bg-[#8470A3] text-white text-[11px] font-semibold tracking-[0.2em] uppercase transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(151,132,180,0.45)] hover:shadow-[0_14px_30px_-5px_rgba(151,132,180,0.6)] hover:-translate-y-0.5 w-auto"
            >
              <span>Read Procedure Guide</span>
              <span>→</span>
            </Link>
            <a
              href="tel:07977429688"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-full border border-[#D5CBE2] bg-white/80 hover:bg-white text-[11px] font-semibold tracking-[0.18em] uppercase text-[#25202E] transition-all hover:border-[#9784B4] shadow-2xs w-auto"
            >
              Consult Surgeon
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
