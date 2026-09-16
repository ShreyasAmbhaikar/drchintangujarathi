import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/site-config';

export default function Footer() {
  const rubyHall = SITE_CONFIG.locations[0];
  const manipal = SITE_CONFIG.locations[1];

  return (
    <footer className="relative z-20 w-full bg-[#8E7BA9] overflow-hidden text-white pt-10 pb-6 mt-12 border-t border-white/20 selection:bg-white/30">
      {/* Soft Pinkish Ambient Glow strictly on the Far Right Side */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#FAD2C0]/35 via-[#E8B5CE]/20 to-transparent blur-[90px] pointer-events-none z-0"
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-5 sm:gap-6">
        
        {/* ─── TIER 1 (TOP): ALL 30 SPECIALTY PROCEDURES & CLINICAL TREATMENTS ─── */}
        <div className="pb-5 sm:pb-6 border-b border-white/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5">
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#FFE4D6] uppercase block">
                COMPREHENSIVE CLINICAL DIRECTORY
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-white font-normal mt-0.5">
                Specialty Procedures & Clinical Treatments
              </h3>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/95 hover:text-[#FFE4D6] uppercase tracking-wider py-1.5 px-4 rounded-full border border-white/30 hover:border-[#FFE4D6] bg-white/10 transition-all self-start sm:self-auto hover:-translate-y-0.5"
            >
              <span>View All Services</span>
              <span>→</span>
            </Link>
          </div>

          {/* 4 Categorized Columns Listing All 30 Procedures (2 cols on mobile, 4 on desktop) */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-7 lg:gap-8 pt-2">
            {SITE_CONFIG.serviceCategories.map((cat) => (
              <div key={cat.id} className="flex flex-col">
                <div>
                  <span className="text-[9.5px] font-bold tracking-widest text-[#FFE4D6]/90 uppercase block">
                    {cat.badge}
                  </span>
                  <Link
                    href={`/services#${cat.id}`}
                    className="font-serif text-sm sm:text-base font-medium text-white hover:text-[#FFE4D6] transition-colors block mt-0.5"
                  >
                    {cat.shortTitle}
                  </Link>
                  <hr className="my-2.5 border-white/20" />
                </div>
                <ul className="space-y-1.5 mt-1">
                  {cat.procedures.map((proc) => (
                    <li key={proc.slug}>
                      <Link
                        href={`/services/${proc.slug}`}
                        className="text-[11.5px] text-white/85 hover:text-[#FFE4D6] hover:translate-x-1 transition-all duration-200 font-normal block leading-snug"
                      >
                        {proc.title.split('(')[0].trim()}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ─── TIER 2 (BOTTOM): SURGEON PROFILE (LEFT), QUICK NAV (CENTER), CONSULTATION CENTERS (RIGHT) ─── */}
        {/* ─── TIER 2 (BOTTOM): SURGEON PROFILE (LEFT), QUICK NAV (CENTER), CONSULTATION CENTERS (RIGHT) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-8 pb-5 sm:pb-6 border-b border-white/20 items-start">
          
          {/* Col 1: Surgeon Identity & Accreditations (5 cols on md/lg) */}
          <div className="md:col-span-5 lg:col-span-5 flex flex-col gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl sm:text-3xl font-normal text-white tracking-tight">
                  Dr. Chintan Gujarathi
                </span>
                <span className="text-[#FFE4D6] text-sm">✦</span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#FFE4D6] tracking-[0.12em] uppercase font-bold mt-1">
                MBBS, MS, MCh (Plastic Surgery), DrNB
              </p>
              <p className="text-xs sm:text-[13px] text-white/90 mt-2 leading-relaxed max-w-md">
                Senior Consultant Plastic, Cosmetic & Reconstructive Surgeon at Ruby Hall Clinic and Manipal Hospital, Pune. Delivering 15+ years of surgical mastery and aesthetic excellence.
              </p>
            </div>

            <div className="pt-3 border-t border-white/20 flex flex-col gap-1">
              <span className="text-[10px] uppercase font-bold text-[#FFE4D6] tracking-wider">
                Board Certifications & Fellowships:
              </span>
              <p className="text-xs text-white/95 font-medium leading-relaxed">
                APSI • ISAPS • MMC Certified • Tata Memorial & Ganga Hospital Trained
              </p>
            </div>
          </div>

          {/* Col 2: Quick Navigation in a Single Sleek Vertical List (3 cols centered on md/lg) */}
          <div className="md:col-span-3 lg:col-span-3 md:justify-self-center lg:justify-self-center flex flex-col">
            <h4 className="text-xs font-bold tracking-[0.16em] text-[#FFE4D6] uppercase">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-white/85 mt-3">
              <li>
                <Link href="/" className="hover:text-[#FFE4D6] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200">
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FFE4D6] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200">
                  <span>About Dr. Chintan</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FFE4D6] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200">
                  <span>All Services</span>
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="hover:text-[#FFE4D6] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200">
                  <span>Success Stories</span>
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-[#FFE4D6] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200">
                  <span>Patient Reviews</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FFE4D6] hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200">
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Sleek Hospital Consultation Centers & Direct Helpline (4 cols on md/lg) */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col">
            <h4 className="text-xs font-bold tracking-[0.16em] text-[#FFE4D6] uppercase">
              Consultation Centers
            </h4>

            <div className="flex flex-col gap-3 mt-3">
              {/* Ruby Hall Clinic Info Card Box */}
              <div className="bg-white/10 border border-white/20 hover:border-white/35 rounded-xl p-3 sm:p-3.5 flex flex-col gap-2 transition-colors">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-white px-2 py-0.5 rounded-lg inline-flex items-center shrink-0">
                      <Image
                        src={rubyHall.logo || '/images/logos/ruby-hall-clinic-logo.png'}
                        alt="Ruby Hall Clinic Logo"
                        width={90}
                        height={24}
                        className="h-4.5 w-auto object-contain"
                      />
                    </div>
                    <span className="font-serif text-[13.5px] font-medium text-white">
                      Ruby Hall Clinic
                    </span>
                  </div>
                  <span className="text-[9px] font-bold tracking-wider text-[#FFE4D6] uppercase bg-white/15 px-2 py-0.5 rounded-full border border-white/20">
                    Sassoon Rd
                  </span>
                </div>
                <p className="text-[11px] text-white/85 leading-snug">
                  102, 1st Floor, Cancer Bldg, Sasoon Rd, Pune 411001
                </p>
                <div className="flex items-center justify-between text-[11px] pt-1 border-t border-white/10">
                  <span className="text-[#FFE4D6] font-medium">Mon–Sat: 9 AM–9 PM</span>
                  <a
                    href={rubyHall.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-white hover:text-[#FFE4D6] hover:underline inline-flex items-center gap-0.5"
                  >
                    <span>Directions</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                </div>
              </div>

              {/* Manipal Hospital Info Card Box */}
              <div className="bg-white/10 border border-white/20 hover:border-white/35 rounded-xl p-3 sm:p-3.5 flex flex-col gap-2 transition-colors">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-white px-2 py-0.5 rounded-lg inline-flex items-center shrink-0">
                      <Image
                        src={manipal.logo || '/images/logos/manipal-hospital-kharadi-logo.png'}
                        alt="Manipal Hospital Kharadi Logo"
                        width={90}
                        height={24}
                        className="h-4.5 w-auto object-contain"
                      />
                    </div>
                    <span className="font-serif text-[13.5px] font-medium text-white">
                      Manipal Hospital
                    </span>
                  </div>
                  <span className="text-[9px] font-bold tracking-wider text-[#FFE4D6] uppercase bg-white/15 px-2 py-0.5 rounded-full border border-white/20">
                    Kharadi
                  </span>
                </div>
                <p className="text-[11px] text-white/85 leading-snug">
                  22/2A, Mundwa-Kharadi Rd, nr Nyati Empire, Kharadi 411014
                </p>
                <div className="flex items-center justify-between text-[11px] pt-1 border-t border-white/10">
                  <span className="text-[#FFE4D6] font-medium">Mon–Sat: 9 AM–9 PM</span>
                  <a
                    href={manipal.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-white hover:text-[#FFE4D6] hover:underline inline-flex items-center gap-0.5"
                  >
                    <span>Directions</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                </div>
              </div>

              {/* Helpline Action Button */}
              <div className="pt-1">
                <a
                  href="tel:07977429688"
                  className="w-full text-center py-2.5 px-4 rounded-full bg-white text-[#8E7BA9] hover:bg-[#FFE4D6] hover:text-[#5F497A] text-xs font-bold tracking-wider uppercase transition-all shadow-xs inline-flex items-center justify-center gap-1.5 hover:-translate-y-0.5"
                >
                  <span>Call Helpline: 079774 29688</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* ─── TIER 3 (BOTTOM BAR): COPYRIGHT & DEVELOPER LINK ─── */}
        <div className="-mt-1.5 sm:-mt-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/85">
          <p className="text-[11px] tracking-wider uppercase">
            © {new Date().getFullYear()} DR. CHINTAN GUJARATHI. ALL RIGHTS RESERVED.
          </p>

          <p className="text-[11px] text-white/90 flex items-center gap-1.5 tracking-wider uppercase font-medium">
            <span>DEVELOPED WITH ❤️ BY</span>
            <a
              href="https://wa.me/919284394722?text=Hello%20Quantum%20Reach%20Media"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold hover:text-[#FFE4D6] hover:underline inline-flex items-center gap-0.5 transition-colors"
            >
              <span>QUANTUM REACH MEDIA</span>
              <span className="text-[10px]">↗</span>
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
