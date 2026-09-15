import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/site-config';

export default function Footer() {
  return (
    <footer className="relative z-20 w-full bg-[#8E7BA9] overflow-hidden text-white pt-10 pb-6 mt-12 border-t border-white/20 selection:bg-white/30">
      {/* Soft Pinkish Ambient Glow strictly on the Far Right Side */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#FAD2C0]/35 via-[#E8B5CE]/20 to-transparent blur-[90px] pointer-events-none z-0"
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Tier 1: Doctor Identity, Navigation, and Clinic Contact */}
        {/* Tier 1: Doctor Identity and Quick Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-8 border-b border-white/20 items-start">
          
          {/* Column 1: Doctor Identity & Accreditations (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-3.5">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-2xl sm:text-3xl font-normal text-white tracking-tight">
                  Dr. Chintan Gujarathi
                </span>
                <span className="text-[#FFE4D6] text-sm">✦</span>
              </div>
              <p className="text-[11px] sm:text-xs text-white tracking-[0.16em] uppercase font-bold mt-1">
                MBBS, MS, MCh (Plastic Surgery), DrNB
              </p>
              <p className="text-xs sm:text-sm text-white/90 mt-2 leading-relaxed max-w-xl">
                Senior Consultant Plastic, Cosmetic & Reconstructive Surgeon at Ruby Hall Clinic and Manipal Hospital, Pune. Delivering 15+ years of surgical mastery and aesthetic excellence.
              </p>
            </div>

            <div className="pt-3 border-t border-white/20 flex flex-wrap items-center gap-x-4 gap-y-1">
              <span className="text-[10px] uppercase font-bold text-[#FFE4D6] tracking-wider">
                Board Certifications & Memberships:
              </span>
              <p className="text-xs text-white font-medium">
                APSI • ISAPS • MMC Certified • Tata Memorial & Ganga Hospital Trained
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links (5 cols in a balanced clean grid) */}
          <div className="lg:col-span-5 flex flex-col gap-2.5">
            <h4 className="text-xs font-bold tracking-[0.18em] text-white uppercase">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-x-5 gap-y-2 text-xs text-white/85 pt-1">
              <Link href="/" className="hover:text-[#FFE4D6] hover:translate-x-1 inline-block transition-all duration-200">
                Home
              </Link>
              <Link href="/about" className="hover:text-[#FFE4D6] hover:translate-x-1 inline-block transition-all duration-200">
                About Us
              </Link>
              <Link href="/services" className="hover:text-[#FFE4D6] hover:translate-x-1 inline-block transition-all duration-200">
                All Services
              </Link>
              <Link href="/#reviews" className="hover:text-[#FFE4D6] hover:translate-x-1 inline-block transition-all duration-200">
                Patient Reviews
              </Link>
              <Link href="/contact" className="hover:text-[#FFE4D6] hover:translate-x-1 inline-block transition-all duration-200">
                Contact & Locations
              </Link>
              <Link href="/#faq" className="hover:text-[#FFE4D6] hover:translate-x-1 inline-block transition-all duration-200">
                FAQs
              </Link>
            </div>
            <div className="pt-2">
              <a href="tel:07977429688" className="text-xs text-[#FFE4D6] font-bold hover:underline inline-flex items-center gap-1.5">
                <span>Helpline: 079774 29688</span>
                <span>↗</span>
              </a>
            </div>
          </div>

        </div>

        {/* Tier 1.5: Practice Hospitals & Locations (Dedicated Full-Width Row with Balanced Side-by-Side Cards) */}
        <div className="py-8 border-b border-white/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#FFE4D6] uppercase block">
                Direct OPD & Surgical Centers
              </span>
              <h4 className="font-serif text-xl sm:text-2xl text-white font-normal mt-0.5">
                Practice Hospitals & Consultation Locations
              </h4>
            </div>
            <a
              href="tel:07977429688"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#8E7BA9] hover:bg-[#FFE4D6] hover:text-[#5F497A] text-xs font-bold tracking-wider uppercase transition-all shadow-sm self-start sm:self-auto"
            >
              <span>Call Helpline: 079774 29688</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            
            {/* Hospital 1: Ruby Hall Clinic (Sassoon Road) */}
            <div className="bg-white/12 backdrop-blur-xs rounded-3xl p-5 sm:p-6 border border-white/20 flex flex-col sm:flex-row gap-5 items-stretch justify-between shadow-md">
              <div className="flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="bg-white px-2.5 py-1.5 rounded-xl shadow-xs inline-flex items-center">
                      <Image
                        src={SITE_CONFIG.locations[0].logo || '/images/logos/ruby-hall-clinic-logo.png'}
                        alt="Ruby Hall Clinic Logo"
                        width={140}
                        height={40}
                        className="h-6 sm:h-7 w-auto object-contain"
                      />
                    </div>
                    <span className="text-[9.5px] font-bold tracking-widest text-[#FFE4D6] uppercase bg-white/15 px-2.5 py-0.5 rounded-full border border-white/20">
                      Sassoon Road Center
                    </span>
                  </div>

                  <h5 className="font-serif text-lg text-white font-medium">Ruby Hall Clinic</h5>
                  <p className="text-xs text-white/90 leading-snug mt-1">
                    102, 1st Floor, Cancer Bldg, Sasoon Rd, Pune 411001
                  </p>
                  <p className="text-[11px] text-[#FFE4D6] font-semibold mt-1">
                    Mon – Sat: 9:00 AM – 9:00 PM | Sun: Closed
                  </p>
                </div>

                <div className="pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <Link
                      href="/contact"
                      className="text-xs font-bold text-[#FFE4D6] hover:underline"
                    >
                      Book OPD Visit →
                    </Link>
                    <a
                      href={SITE_CONFIG.locations[0].mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-white hover:text-[#FFE4D6] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Maps</span>
                      <span>↗</span>
                    </a>
                  </div>
                  <a
                    href="tel:07977429688"
                    className="text-xs font-bold text-[#FFE4D6] hover:underline"
                  >
                    079774 29688
                  </a>
                </div>
              </div>

              {/* Balanced Map Window for Ruby Hall */}
              <div className="w-full sm:w-[190px] md:w-[210px] lg:w-[220px] h-[140px] sm:h-auto min-h-[135px] rounded-2xl overflow-hidden border border-white/25 shadow-xs shrink-0">
                <iframe
                  title="Ruby Hall Clinic Sassoon Road Map"
                  src={SITE_CONFIG.locations[0].embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Hospital 2: Manipal Hospital Kharadi */}
            <div className="bg-white/12 backdrop-blur-xs rounded-3xl p-5 sm:p-6 border border-white/20 flex flex-col sm:flex-row gap-5 items-stretch justify-between shadow-md">
              <div className="flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="bg-white px-2.5 py-1.5 rounded-xl shadow-xs inline-flex items-center">
                      <Image
                        src={SITE_CONFIG.locations[1].logo || '/images/logos/manipal-hospital-kharadi-logo.png'}
                        alt="Manipal Hospital Kharadi Logo"
                        width={140}
                        height={40}
                        className="h-6 sm:h-7 w-auto object-contain"
                      />
                    </div>
                    <span className="text-[9.5px] font-bold tracking-widest text-[#FFE4D6] uppercase bg-white/15 px-2.5 py-0.5 rounded-full border border-white/20">
                      Kharadi Center
                    </span>
                  </div>

                  <h5 className="font-serif text-lg text-white font-medium">Manipal Hospital</h5>
                  <p className="text-xs text-white/90 leading-snug mt-1">
                    22/2A, Mundwa -Kharadi Rd, nr Nyati Empire, Kharadi 411014
                  </p>
                  <p className="text-[11px] text-[#FFE4D6] font-semibold mt-1">
                    Mon – Sat: 9:00 AM – 9:00 PM | Sun: Closed
                  </p>
                </div>

                <div className="pt-3 border-t border-white/15 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <Link
                      href="/contact"
                      className="text-xs font-bold text-[#FFE4D6] hover:underline"
                    >
                      Book OPD Visit →
                    </Link>
                    <a
                      href={SITE_CONFIG.locations[1].mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-white hover:text-[#FFE4D6] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Maps</span>
                      <span>↗</span>
                    </a>
                  </div>
                  <a
                    href="tel:07977429688"
                    className="text-xs font-bold text-[#FFE4D6] hover:underline"
                  >
                    079774 29688
                  </a>
                </div>
              </div>

              {/* Balanced Map Window for Manipal Hospital */}
              <div className="w-full sm:w-[190px] md:w-[210px] lg:w-[220px] h-[140px] sm:h-auto min-h-[135px] rounded-2xl overflow-hidden border border-white/25 shadow-xs shrink-0">
                <iframe
                  title="Manipal Hospital Kharadi Map"
                  src={SITE_CONFIG.locations[1].embedMapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Tier 2: Categorized Services (Clean borderless header and comfortable breathing room) */}
        <div className="py-9 border-b border-white/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5">
            <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
              Specialty Procedures & Clinical Treatments
            </h3>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/95 hover:text-[#FFE4D6] uppercase tracking-wider py-1.5 px-4 rounded-full border border-white/30 hover:border-[#FFE4D6] bg-white/10 transition-all self-start sm:self-auto hover:-translate-y-0.5"
            >
              <span>View All Services</span>
              <span>→</span>
            </Link>
          </div>

          {/* 4 Categorized Columns Listing All Procedures with Comfortable Spacing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 pt-2">
            {SITE_CONFIG.serviceCategories.map((cat) => (
              <div key={cat.id} className="flex flex-col">
                <div>
                  <span className="text-[10px] font-bold tracking-widest text-[#FFE4D6]/90 uppercase block">
                    {cat.badge}
                  </span>
                  <Link
                    href={`/services#${cat.id}`}
                    className="font-serif text-base sm:text-lg font-medium text-white hover:text-[#FFE4D6] transition-colors block mt-0.5"
                  >
                    {cat.shortTitle}
                  </Link>
                  <hr className="my-3 border-white/20" />
                </div>
                <ul className="space-y-2 mt-1">
                  {cat.procedures.map((proc) => (
                    <li key={proc.slug}>
                      <Link
                        href={`/services/${proc.slug}`}
                        className="text-[12.5px] text-white/85 hover:text-[#FFE4D6] hover:translate-x-1 transition-all duration-200 font-normal block leading-relaxed"
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

        {/* Tier 3: Copyright & Developer Link (Compact with Minimal Gap) */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-white/85">
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
