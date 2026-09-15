import React from 'react';
import Header from '@/components/portfolio/Header';
import Footer from '@/components/portfolio/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata = {
  title: 'About Us | Dr. Chintan Gujarathi — Senior Consultant Plastic Surgeon Pune',
  description:
    'Discover Dr. Chintan Gujarathi (MBBS, MS, MCh, DrNB), Senior Consultant Plastic, Cosmetic & Reconstructive Surgeon practicing at Ruby Hall Clinic and Manipal Hospital Kharadi, Pune. 15+ years of surgical mastery and 500+ microvascular reconstructions.',
};

const CREDENTIAL_ITEMS = [
  {
    badge: 'SUPER-SPECIALTY',
    badgeClass: 'bg-[#9784B4]/15 text-[#644983] border-[#9784B4]/30',
    cardBg: 'bg-gradient-to-br from-white to-[#FAF6FE]',
    borderColor: 'border-[#DECBEB] hover:border-[#9784B4]',
    title: 'M.Ch & DrNB (Plastic Surgery)',
    institution: 'National Board of Examinations & Apex Universities',
    desc: 'Highest dual super-specialty board certifications in plastic, cosmetic, and reconstructive surgery in India.',
  },
  {
    badge: 'GENERAL SURGERY',
    badgeClass: 'bg-[#B8684D]/15 text-[#98462E] border-[#B8684D]/30',
    cardBg: 'bg-gradient-to-br from-white to-[#FFF8F5]',
    borderColor: 'border-[#F2D7CC] hover:border-[#B8684D]',
    title: 'MS (General Surgery) & MBBS',
    institution: 'Master of Surgery Postgraduate Residency',
    desc: 'Rigorous surgical foundation mastering advanced tissue handling, emergency trauma, and surgical anatomy.',
  },
  {
    badge: 'FELLOWSHIPS',
    badgeClass: 'bg-[#2E6B4F]/15 text-[#1E5239] border-[#2E6B4F]/30',
    cardBg: 'bg-gradient-to-br from-white to-[#F4FAF6]',
    borderColor: 'border-[#CDE5D6] hover:border-[#2E6B4F]',
    title: 'Tata Memorial & Ganga Hospital',
    institution: 'Apex Cancer & Trauma Institutes',
    desc: 'Sub-specialty fellowships in submillimeter microvascular free flaps and acute digit & hand replantation.',
  },
  {
    badge: 'REGISTRATIONS',
    badgeClass: 'bg-[#C4822B]/15 text-[#8C5815] border-[#C4822B]/30',
    cardBg: 'bg-gradient-to-br from-white to-[#FFFBF2]',
    borderColor: 'border-[#F5E4C3] hover:border-[#C4822B]',
    title: 'APSI, ISAPS & MMC Member',
    institution: 'National & Global Surgical Societies',
    desc: 'Active member adhering to apex international protocols in surgical safety, precision, and patient ethics.',
  },
];

const SPECIALTY_ITEMS = [
  {
    image: '/images/procedures/plastic-surgery.jpg',
    imageAlt: 'Clinical plastic surgery facial planning and precise anatomical marking',
    floatingBadge: 'Dual Board M.Ch',
    floatingBadgeClass: 'bg-[#25202E]/85 text-white border-white/20',
    badge: 'PLASTIC SURGERY',
    badgeClass: 'bg-[#9784B4]/15 text-[#644983] border-[#9784B4]/25',
    cardBg: 'bg-gradient-to-br from-[#FAF6FE] via-white to-[#F4ECFA]',
    borderColor: 'border-[#DFCEEE]',
    title: 'Plastic Surgery',
    desc: 'Dual-board surgical mastery in anatomical structural refinements, congenital and acquired defect corrections, scar revision, and tissue reconstruction restoring anatomical integrity.',
  },
  {
    image: '/images/procedures/cosmetic-surgery.jpg',
    imageAlt: 'Natural cosmetic surgery rejuvenation and aesthetic facial harmony',
    floatingBadge: 'Aesthetic Harmony',
    floatingBadgeClass: 'bg-[#25202E]/85 text-white border-white/20',
    badge: 'COSMETIC SURGERY',
    badgeClass: 'bg-[#B8684D]/15 text-[#98462E] border-[#B8684D]/25',
    cardBg: 'bg-gradient-to-br from-[#FFF9F6] via-white to-[#FAF0EB]',
    borderColor: 'border-[#EACCC0]',
    title: 'Cosmetic Surgery',
    desc: 'Artistic facial rejuvenation (deep-plane SMAS facelift, structural rhinoplasty, blepharoplasty) and precision body contouring (VASER 360° liposuction, gynecomastia, mommy makeover).',
  },
  {
    image: '/images/procedures/reconstructive-surgery.jpg',
    imageAlt: 'Specialist reconstructive surgeon operating in advanced microsurgical theatre',
    floatingBadge: '500+ Microsurgeries',
    floatingBadgeClass: 'bg-[#25202E]/85 text-white border-white/20',
    badge: 'RECONSTRUCTIVE SURGERY',
    badgeClass: 'bg-[#2E6B4F]/15 text-[#1E5239] border-[#2E6B4F]/25',
    cardBg: 'bg-gradient-to-br from-[#F4FAF6] via-white to-[#EAF5EE]',
    borderColor: 'border-[#C8E5D4]',
    title: 'Reconstructive Surgery',
    desc: 'Sub-millimeter microvascular free tissue transfers, head & neck oncological reconstruction, acute trauma limb salvage, complex wound closure, and hand reconstruction.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#25202E] flex flex-col selection:bg-[#EAE4F2]">
      <Header />

      <main className="flex-1 space-y-12 sm:space-y-16 pb-16">
        
        {/* ─── SECTION 1: HERO LEAD SURGEON PROFILE CARD (Source of Truth) ─── */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
          <div className="bg-gradient-to-br from-[#FAF3EC] via-[#F4ECF7] to-[#EBE2F3] rounded-[36px] border border-[#DFCEEE] p-8 sm:p-12 lg:p-14 card-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Doctor Bio & CTAs */}
              <div className="lg:col-span-7 flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#EDE6F5] mb-3 shadow-2xs">
                  <span className="text-[#9784B4] text-xs">✦</span>
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#9784B4] uppercase">
                    LEAD SURGEON PROFILE
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal leading-tight text-[#25202E]">
                  Dr. Chintan <span className="font-serif italic text-[#9784B4]">S. Gujarathi</span>
                </h1>
                <p className="mt-3 text-xs sm:text-sm font-semibold text-[#8E5E85] tracking-wider uppercase">
                  MBBS | MS (General Surgery) | M.Ch (Plastic Surgery) | DrNB (Plastic Surgery)
                </p>
                <p className="mt-6 text-sm sm:text-base text-[#554B64] leading-relaxed">
                  Dr. Chintan S. Gujarathi is a distinguished Plastic, Cosmetic, and Reconstructive Surgeon in Pune with over <strong>15+ years</strong> of clinical and surgical expertise. Practicing at <strong>Ruby Hall Clinic (Sassoon Road)</strong> and <strong>Manipal Hospital (Kharadi)</strong>, Dr. Gujarathi is widely recognized for his precision, calm demeanor, and patient-first ethos across aesthetic transformations, complex trauma, and microvascular reconstruction.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="tel:07977429688"
                    className="px-8 py-3.5 rounded-full bg-[#9784B4] hover:bg-[#8470A3] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md"
                  >
                    Book Consultation: 079774 29688
                  </a>
                  <Link
                    href="/services"
                    className="px-6 py-3.5 rounded-full border border-[#D5CBE2] bg-white text-xs font-semibold tracking-wider uppercase text-[#25202E] hover:border-[#9784B4] transition-all"
                  >
                    Explore Procedures
                  </Link>
                </div>
              </div>

              {/* Right Column: Doctor Portrait Photo */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-[32px] overflow-hidden border-2 border-white bg-[#FAF8F5] shadow-xl group">
                  <Image
                    src="/images/dr-chintan-gujarathi.jpg"
                    alt="Dr. Chintan S. Gujarathi — Plastic Surgeon Pune"
                    fill
                    priority
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 360px"
                  />

                  {/* Floating Experience Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-[#25202E]/80 backdrop-blur-md text-white px-3.5 py-1.5 rounded-full border border-white/20 text-[10px] font-bold tracking-wider uppercase shadow-sm">
                    15+ Years Mastery
                  </div>

                  {/* Bottom Doctor Tag */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 bg-white/90 backdrop-blur-md rounded-2xl p-3.5 border border-[#EDE6F5] shadow-md text-center">
                    <span className="font-serif text-sm font-semibold text-[#25202E] block">
                      Dr. Chintan S. Gujarathi
                    </span>
                    <span className="text-[10.5px] text-[#7D649B] font-medium block mt-0.5">
                      Ruby Hall Clinic & Manipal Hospital
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── SECTION 2: BOARD CERTIFICATIONS & FELLOWSHIPS (Centered Heading & Compact Dock) ─── */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Heading Matching Website Theme */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#EDE6F5] mb-3 shadow-2xs">
              <span className="text-[#9784B4] text-xs">✦</span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#9784B4] uppercase">
                BOARD CREDENTIALS & TRUST
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#25202E]">
              Super-Specialty <span className="font-serif italic text-[#9784B4]">Qualifications</span>
            </h2>
          </div>

          {/* Compact 4-Column Card Dock with Subtle Two-Tone Depth */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CREDENTIAL_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className={`${item.cardBg} rounded-[24px] border ${item.borderColor} p-6 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-block text-[9.5px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border ${item.badgeClass}`}>
                      {item.badge}
                    </span>
                    <span className="text-xs text-[#9784B4]">✦</span>
                  </div>

                  <h3 className="font-serif text-lg font-medium text-[#25202E] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#8E5E85] mt-1 tracking-wide">
                    {item.institution}
                  </p>
                  <p className="mt-2.5 text-xs text-[#554B64] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── SECTION 3: WHAT DR. CHINTAN SPECIALIZES IN (Centered Heading & Visual Image Cards) ─── */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Heading Matching Website Theme */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#EDE6F5] mb-3 shadow-2xs">
              <span className="text-[#9784B4] text-xs">✦</span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#9784B4] uppercase">
                CLINICAL SPECIALIZATION
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#25202E]">
              What Dr. Chintan <span className="font-serif italic text-[#9784B4]">Specializes In</span>
            </h2>
          </div>

          {/* 3 Compact Specialty Cards with High-Res Procedural Image Headers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SPECIALTY_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className={`${item.cardBg} rounded-[28px] border ${item.borderColor} p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group`}
              >
                <div>
                  {/* Procedural Visual Image Header */}
                  <div className="relative w-full aspect-[16/10] rounded-[20px] overflow-hidden mb-5 border border-black/5 shadow-2xs">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute top-3 right-3 z-10">
                      <span className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full backdrop-blur-md border shadow-xs ${item.floatingBadgeClass}`}>
                        {item.floatingBadge}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <span className={`inline-block text-[9.5px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${item.badgeClass}`}>
                      {item.badge}
                    </span>
                    <span className="text-xs text-[#9784B4]">✦</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#25202E] font-medium leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#554B64] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── SECTION 4: WHERE DR. CHINTAN PRACTICES (Centered Heading & Two-Tone Luxury Cards) ─── */}
        <section id="hospitals" className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Heading Matching Website Theme */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#EDE6F5] mb-3 shadow-2xs">
              <span className="text-[#9784B4] text-xs">✦</span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#9784B4] uppercase">
                HOSPITAL PRIVILEGES & LOCATIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#25202E]">
              Where Dr. Chintan <span className="font-serif italic text-[#9784B4]">Practices</span>
            </h2>
          </div>

          {/* 2 Stately Hospital Cards in Brand Two-Tone Luxury Palette */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Hospital 1: Ruby Hall Clinic (Amethyst-Lavender Luxury Card) */}
            <div className="bg-gradient-to-br from-[#FAF5FE] via-[#F4EBF9] to-[#EAE0F5] rounded-[32px] border border-[#DECBEB] p-8 sm:p-10 card-shadow flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div>
                <div className="flex items-center justify-between gap-3 pb-5 border-b border-black/[0.06]">
                  <div className="bg-white p-3 rounded-2xl border border-white/80 shadow-2xs inline-flex items-center">
                    <Image
                      src={SITE_CONFIG.locations[0].logo || '/images/logos/ruby-hall-clinic-logo.png'}
                      alt="Ruby Hall Clinic Logo"
                      width={160}
                      height={45}
                      className="h-9 w-auto object-contain"
                    />
                  </div>
                  <span className="text-[10.5px] font-bold tracking-widest text-[#644983] uppercase bg-white/85 px-3.5 py-1.5 rounded-full border border-[#EDE6F5] shadow-2xs">
                    Senior Consultant
                  </span>
                </div>

                <h3 className="mt-6 text-2xl sm:text-3xl font-serif text-[#25202E] font-medium">
                  Ruby Hall Clinic, Sassoon Road
                </h3>
                <p className="text-xs font-semibold text-[#8E5E85] uppercase tracking-wider mt-1">
                  Tertiary Healthcare Landmark • Central Pune
                </p>

                <p className="mt-4 text-sm text-[#554B64] leading-relaxed">
                  Western India’s premier tertiary healthcare landmark. Dr. Chintan conducts complex reconstructive and cosmetic surgeries in ultra-modern laminar-flow OT suites equipped with Carl Zeiss surgical operating microscopes for submillimeter microvascular anastomoses, 24/7 critical care ICU backup, and private recovery suites.
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-medium text-[#7D649B] flex items-center gap-1.5">
                  <span>✦</span>
                  <span>Modular Laminar-Flow Surgical Suites</span>
                </span>
                <span className="text-xs font-medium text-[#7D649B] flex items-center gap-1.5">
                  <span>✦</span>
                  <span>Zeiss Operating Microscopes</span>
                </span>
              </div>
            </div>

            {/* Hospital 2: Manipal Hospital Kharadi (Warm Peach-Terracotta Luxury Card) */}
            <div className="bg-gradient-to-br from-[#FFF7F3] via-[#FCEDE5] to-[#F5DFD4] rounded-[32px] border border-[#ECCAC0] p-8 sm:p-10 card-shadow flex flex-col justify-between hover:shadow-lg transition-all duration-300">
              <div>
                <div className="flex items-center justify-between gap-3 pb-5 border-b border-black/[0.06]">
                  <div className="bg-white p-3 rounded-2xl border border-white/80 shadow-2xs inline-flex items-center">
                    <Image
                      src={SITE_CONFIG.locations[1].logo || '/images/logos/manipal-hospital-kharadi-logo.png'}
                      alt="Manipal Hospital Kharadi Logo"
                      width={160}
                      height={45}
                      className="h-9 w-auto object-contain"
                    />
                  </div>
                  <span className="text-[10.5px] font-bold tracking-widest text-[#98462E] uppercase bg-white/85 px-3.5 py-1.5 rounded-full border border-[#F3E2DB] shadow-2xs">
                    Consultant Surgeon
                  </span>
                </div>

                <h3 className="mt-6 text-2xl sm:text-3xl font-serif text-[#25202E] font-medium">
                  Manipal Hospital, Kharadi
                </h3>
                <p className="text-xs font-semibold text-[#B8684D] uppercase tracking-wider mt-1">
                  Quaternary Super-Specialty Hospital • East Pune IT Corridor
                </p>

                <p className="mt-4 text-sm text-[#554B64] leading-relaxed">
                  Strategically situated in East Pune’s Kharadi medical corridor. Quaternary infrastructure featuring dedicated microvascular plastic surgery modular OT suites, round-the-clock anesthesiology, trauma resuscitation ICU, and comprehensive inpatient recovery amenities for cosmetic and reconstructive patients.
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-medium text-[#98462E] flex items-center gap-1.5">
                  <span>✦</span>
                  <span>Quaternary Surgical Infrastructure</span>
                </span>
                <span className="text-xs font-medium text-[#98462E] flex items-center gap-1.5">
                  <span>✦</span>
                  <span>Comprehensive Inpatient Suites</span>
                </span>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
