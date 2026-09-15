import React from 'react';
import Header from '@/components/portfolio/Header';
import Footer from '@/components/portfolio/Footer';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata = {
  title: 'All Surgical Procedures | Dr. Chintan Gujarathi — Plastic Surgeon Pune',
  description:
    'Comprehensive directory of cosmetic, reconstructive, and non-surgical procedures by Dr. Chintan Gujarathi at Ruby Hall Clinic and Manipal Hospital Kharadi, Pune.',
};

const CATEGORY_THEMES = [
  {
    // Section 1: Facial & Cosmetic Surgery - Amethyst / Lavender Theme
    cardBg: 'bg-gradient-to-br from-[#FAF5FE] via-[#FFFFFF] to-[#F3EBF9]',
    borderColor: 'border-[#DFCEEE] hover:border-[#9784B4]',
    hoverShadow: 'hover:shadow-[0_12px_32px_-8px_rgba(151,132,180,0.25)]',
    numberPill: 'bg-[#9784B4]/15 text-[#644983] border-[#9784B4]/30',
    titleHover: 'group-hover:text-[#7A5B9B]',
    starColor: 'text-[#9784B4]',
    arrowColor: 'text-[#8E7BA9] group-hover:text-[#644983]',
    divider: 'border-[#EDE4F5]',
  },
  {
    // Section 2: Body Contouring & Breast Surgery - Rose / Terracotta Theme
    cardBg: 'bg-gradient-to-br from-[#FFF8F5] via-[#FFFFFF] to-[#FAF0EB]',
    borderColor: 'border-[#F2D7CC] hover:border-[#B8684D]',
    hoverShadow: 'hover:shadow-[0_12px_32px_-8px_rgba(184,104,77,0.25)]',
    numberPill: 'bg-[#B8684D]/15 text-[#98462E] border-[#B8684D]/30',
    titleHover: 'group-hover:text-[#B8684D]',
    starColor: 'text-[#B8684D]',
    arrowColor: 'text-[#B8684D] group-hover:text-[#98462E]',
    divider: 'border-[#F6E6DF]',
  },
  {
    // Section 3: Reconstructive Microsurgery & Wounds - Sage / Emerald Theme
    cardBg: 'bg-gradient-to-br from-[#F4FAF6] via-[#FFFFFF] to-[#EBF6F0]',
    borderColor: 'border-[#CDE5D6] hover:border-[#2E6B4F]',
    hoverShadow: 'hover:shadow-[0_12px_32px_-8px_rgba(46,107,79,0.25)]',
    numberPill: 'bg-[#2E6B4F]/15 text-[#1E5239] border-[#2E6B4F]/30',
    titleHover: 'group-hover:text-[#2E6B4F]',
    starColor: 'text-[#2E6B4F]',
    arrowColor: 'text-[#2E6B4F] group-hover:text-[#1E5239]',
    divider: 'border-[#E0EFE6]',
  },
  {
    // Section 4: Hand, Nerve & Specialized Surgery - Warm Amber / Champagne Theme
    cardBg: 'bg-gradient-to-br from-[#FFFBF2] via-[#FFFFFF] to-[#FAF3E6]',
    borderColor: 'border-[#F5E4C3] hover:border-[#C4822B]',
    hoverShadow: 'hover:shadow-[0_12px_32px_-8px_rgba(196,130,43,0.25)]',
    numberPill: 'bg-[#C4822B]/15 text-[#8C5815] border-[#C4822B]/30',
    titleHover: 'group-hover:text-[#C4822B]',
    starColor: 'text-[#C4822B]',
    arrowColor: 'text-[#C4822B] group-hover:text-[#8C5815]',
    divider: 'border-[#F6EDD9]',
  },
];

export default function ServicesIndexPage() {
  const categories = SITE_CONFIG.serviceCategories;

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#25202E] flex flex-col selection:bg-[#EAE4F2]">
      <Header />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12">
          <div className="bg-gradient-to-br from-[#FAF3EC] via-[#F4ECF7] to-[#EAE0F3] rounded-[36px] border border-[#DFCEEE] p-8 sm:p-14 card-shadow text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-xs font-semibold tracking-[0.24em] text-[#9784B4] uppercase">
                COMPREHENSIVE SURGICAL DIRECTORY
              </span>
            </div>

            <h1 className="mt-2 text-4xl sm:text-6xl font-normal text-[#25202E]">
              Surgical <span className="font-serif italic text-[#9784B4]">Specialties</span>
            </h1>
            <p className="mt-4 text-xs sm:text-base text-[#554B64] leading-relaxed max-w-2xl mx-auto">
              From refined aesthetic facial transformations to microvascular reconstructions and specialized hand repairs, explore the complete scope of surgical excellence offered by Dr. Chintan Gujarathi.
            </p>

            {/* Jump Navigation Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {categories.map((cat, idx) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="px-4 py-2 rounded-full bg-white text-xs font-semibold tracking-wider text-[#25202E] border border-[#EDE6F5] hover:border-[#9784B4] hover:bg-[#F8F4FA] transition-all shadow-2xs"
                >
                  <span className="text-[#9784B4] font-bold mr-1.5">0{idx + 1}.</span>
                  <span>{cat.shortTitle}</span>
                  <span className="ml-1 text-[#6D6377] text-[10px]">({cat.procedures.length})</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 4 Clinical Categories Grid */}
        <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-20">
          {categories.map((cat, catIdx) => {
            const theme = CATEGORY_THEMES[catIdx % CATEGORY_THEMES.length];
            return (
              <section key={cat.id} id={cat.id} className="scroll-mt-28">
                {/* Category Section Header */}
                <div className="border-b border-[#EDE6F5] pb-5 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[11px] font-bold tracking-[0.2em] text-[#9784B4] uppercase">
                        Section 0{catIdx + 1}
                      </span>
                      <span className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${theme.numberPill}`}>
                        {cat.badge}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-serif text-[#25202E]">
                      {cat.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#675F72] mt-1 max-w-xl">
                      {cat.description}
                    </p>
                  </div>

                  <span className="text-xs text-[#6D6677] font-medium whitespace-nowrap">
                    {cat.procedures.length} Procedures
                  </span>
                </div>

                {/* Procedures Cards Grid with Dynamic Two-Tone Themes */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {cat.procedures.map((proc, procIdx) => (
                    <Link
                      key={proc.slug}
                      href={`/services/${proc.slug}`}
                      className={`${theme.cardBg} rounded-[24px] border ${theme.borderColor} p-5 sm:p-6 shadow-2xs ${theme.hoverShadow} transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1`}
                    >
                      <div>
                        {/* Procedure Sequence Indicator & Star */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <span className={`text-[9.5px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${theme.numberPill}`}>
                            Procedure 0{procIdx + 1}
                          </span>
                          <span className={`text-xs ${theme.starColor}`}>✦</span>
                        </div>

                        <h3 className={`font-serif text-lg font-medium text-[#25202E] ${theme.titleHover} transition-colors leading-snug`}>
                          {proc.title}
                        </h3>
                        <p className="mt-2.5 text-xs text-[#5E546C] leading-relaxed line-clamp-3">
                          {proc.shortDesc}
                        </p>
                      </div>

                      <div className={`mt-5 pt-3 border-t ${theme.divider} flex items-center justify-between text-xs font-semibold ${theme.arrowColor}`}>
                        <span>Explore Procedure</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

        {/* Bottom Consultation Banner */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="rounded-[32px] bg-[#25202E] text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="max-w-xl">
              <span className="text-[11px] font-semibold tracking-[0.2em] text-[#E8A88E] uppercase block mb-2">
                SUPER SPECIALTY SURGICAL CARE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                Require a specialized surgical assessment?
              </h3>
              <p className="text-xs sm:text-sm text-white/80 mt-2 leading-relaxed">
                Consult with Dr. Chintan Gujarathi at Ruby Hall Clinic (Sassoon Road) or Manipal Hospital (Kharadi) for personalized diagnosis and reconstructive planning.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href="tel:07977429688"
                className="px-6 py-3 rounded-full bg-white text-[#25202E] hover:bg-[#FAF6F0] text-xs font-semibold tracking-wider uppercase transition-all shadow-md hover:-translate-y-0.5"
              >
                Call: 079774 29688
              </a>
              <a
                href="https://wa.me/917977429688?text=Hello%20Dr.%20Chintan%20Gujarathi,%20I%20would%20like%20to%20inquire%20about%20a%20surgical%20procedure."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#25D366] text-white hover:bg-[#20bd5a] text-xs font-semibold tracking-wider uppercase transition-all shadow-md hover:-translate-y-0.5"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

