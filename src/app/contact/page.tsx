import React from 'react';
import Image from 'next/image';
import Header from '@/components/portfolio/Header';
import Footer from '@/components/portfolio/Footer';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata = {
  title: 'Contact Us | Dr. Chintan Gujarathi — Plastic Surgeon Pune',
  description:
    'Contact Dr. Chintan Gujarathi (MCh Plastic Surgery) for consultations at Ruby Hall Clinic (Sassoon Rd) or Manipal Hospital (Kharadi). Call 079774 29688.',
  alternates: {
    canonical: `${SITE_CONFIG.domain}/contact`,
  },
  openGraph: {
    title: 'Contact Us | Dr. Chintan Gujarathi — Plastic Surgeon Pune',
    description:
      'Contact Dr. Chintan Gujarathi (MCh Plastic Surgery) for consultations at Ruby Hall Clinic (Sassoon Rd) or Manipal Hospital (Kharadi). Call 079774 29688.',
    url: `${SITE_CONFIG.domain}/contact`,
    siteName: SITE_CONFIG.name,
    type: 'website',
    images: [
      {
        url: `${SITE_CONFIG.domain}/images/dr-chintan-gujarathi.webp`,
        width: 1200,
        height: 630,
        alt: 'Contact Dr. Chintan Gujarathi - Plastic Surgeon Pune',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | Dr. Chintan Gujarathi — Plastic Surgeon Pune',
    description:
      'Contact Dr. Chintan Gujarathi (MCh Plastic Surgery) for consultations at Ruby Hall Clinic (Sassoon Rd) or Manipal Hospital (Kharadi). Call 079774 29688.',
    images: [`${SITE_CONFIG.domain}/images/dr-chintan-gujarathi.webp`],
  },
};

export default function ContactPage() {
  const rubyHall = SITE_CONFIG.locations[0];
  const manipal = SITE_CONFIG.locations[1];

  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalClinic',
        '@id': `${SITE_CONFIG.domain}/#ruby-hall-clinic`,
        name: 'Dr. Chintan Gujarathi – Plastic Surgeon, Cosmetic Surgeon & Reconstructive Surgeon in Pune (Ruby Hall Clinic)',
        url: `${SITE_CONFIG.domain}/contact`,
        telephone: rubyHall.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: rubyHall.address,
          addressLocality: 'Pune',
          addressRegion: 'Maharashtra',
          postalCode: '411001',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: rubyHall.coordinates.lat,
          longitude: rubyHall.coordinates.lng,
        },
        hasMap: rubyHall.mapUrl,
        medicalSpecialty: ['PlasticSurgery', 'CosmeticSurgery', 'Surgical'],
      },
      {
        '@type': 'MedicalClinic',
        '@id': `${SITE_CONFIG.domain}/#manipal-hospital-kharadi`,
        name: 'Dr. Chintan S. Gujarathi | Plastic, Reconstructive and Cosmetic Surgeon in Kharadi (Manipal Hospital)',
        url: `${SITE_CONFIG.domain}/contact`,
        telephone: manipal.phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: manipal.address,
          addressLocality: 'Pune',
          addressRegion: 'Maharashtra',
          postalCode: '411014',
          addressCountry: 'IN',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: manipal.coordinates.lat,
          longitude: manipal.coordinates.lng,
        },
        hasMap: manipal.mapUrl,
        medicalSpecialty: ['PlasticSurgery', 'CosmeticSurgery', 'Surgical'],
      },
      {
        '@type': 'Physician',
        name: SITE_CONFIG.doctor.fullName,
        medicalSpecialty: ['PlasticSurgery', 'CosmeticSurgery'],
        qualifications: SITE_CONFIG.doctor.qualifications,
        url: `${SITE_CONFIG.domain}/contact`,
        telephone: SITE_CONFIG.contact.phone,
        worksFor: [
          { '@id': `${SITE_CONFIG.domain}/#ruby-hall-clinic` },
          { '@id': `${SITE_CONFIG.domain}/#manipal-hospital-kharadi` },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_CONFIG.domain,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Contact',
            item: `${SITE_CONFIG.domain}/contact`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#25202E] flex flex-col selection:bg-[#EAE4F2]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <Header />

      <main className="flex-1">
        {/* Hero Header */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-10">
          <div className="bg-gradient-to-br from-[#FAF3EC] via-[#F4ECF7] to-[#EAE0F3] rounded-[36px] border border-[#DFCEEE] p-8 sm:p-12 card-shadow text-center max-w-4xl mx-auto">
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.24em] text-[#9784B4] uppercase block mb-2">
              GET IN TOUCH • CLINICAL LOCATIONS
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#25202E]">
              Contact <span className="font-serif italic text-[#9784B4]">Us</span>
            </h1>
            <p className="mt-3.5 text-xs sm:text-sm md:text-base text-[#554B64] leading-relaxed max-w-2xl mx-auto">
              Schedule a personal consultation with Dr. Chintan Gujarathi at either Ruby Hall Clinic (Sassoon Road) or Manipal Hospital (Kharadi), Pune. Direct hospital phone desks and interactive map navigation are provided below.
            </p>
          </div>
        </section>

        {/* Two Dedicated Hospital Location Cards (Side-by-Side 2-Column Grid) */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* ─── CARD 1: RUBY HALL CLINIC (SASSOON ROAD) ─── */}
            <div className="bg-gradient-to-br from-[#FAF5FE] via-[#F4EBF9] to-[#EAE0F5] rounded-[32px] border border-[#DECBEB] shadow-md p-6 sm:p-8 flex flex-col justify-between space-y-5 transition-all hover:shadow-lg">
              <div className="space-y-4">
                
                {/* Logo & Sassoon Road Center Badge (Same row on mobile and desktop, no stretched background) */}
                <div className="flex flex-row items-center justify-between gap-2.5 sm:gap-3 pb-3.5 border-b border-[#DECBEB]/60">
                  <div className="bg-white/90 backdrop-blur-xs px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl border border-[#EDE6F5] shadow-2xs inline-flex items-center shrink-0">
                    <Image
                      src={rubyHall.logo || '/images/logos/ruby-hall-clinic-logo.png'}
                      alt="Ruby Hall Clinic Pune Official Logo"
                      width={160}
                      height={45}
                      className="h-8 sm:h-9 w-auto object-contain"
                      priority
                    />
                  </div>
                  <span className="text-[10px] sm:text-[10.5px] font-bold tracking-wider sm:tracking-widest text-[#9784B4] uppercase bg-[#9784B4]/15 px-2.5 sm:px-3 py-1.5 rounded-full border border-[#9784B4]/25 shrink-0 whitespace-nowrap">
                    Sassoon Road Center
                  </span>
                </div>

                {/* Title & Area */}
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#25202E]">
                    Ruby Hall Clinic
                  </h2>
                  <p className="text-xs font-semibold text-[#9784B4] tracking-wider uppercase mt-1">
                    Sassoon Road • Sangamvadi, Central Pune
                  </p>
                  <p className="text-xs text-[#554B64] leading-relaxed mt-2">
                    Western India’s landmark healthcare center with ultra-modern laminar airflow theaters and specialized day-care cosmetic suites.
                  </p>
                </div>

                {/* Details Box */}
                <div className="space-y-2.5 bg-white/75 backdrop-blur-xs rounded-2xl p-4 sm:p-5 border border-[#DECBEB]/80 text-xs text-[#554B64]">
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-xl bg-[#9784B4]/15 text-[#9784B4] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-[#25202E] block">Address:</span>
                      <p className="leading-relaxed mt-0.5 text-[#4A4056]">
                        {rubyHall.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2.5 border-t border-[#DECBEB]/50">
                    <span className="w-7 h-7 rounded-xl bg-[#2E7D32]/15 text-[#2E7D32] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-[#25202E] block">Consultation Hours:</span>
                      <p className="leading-relaxed mt-0.5 font-medium text-[#2E7D32]">
                        Monday – Saturday: 9:00 AM – 9:00 PM (Sunday Closed)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2.5 border-t border-[#DECBEB]/50">
                    <span className="w-7 h-7 rounded-xl bg-[#0284C7]/15 text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-[#25202E] block">Ruby Hall Desk & Appointments:</span>
                      <a
                        href={`tel:${rubyHall.phone.replace(/\s+/g, '')}`}
                        className="font-bold text-[#9784B4] hover:underline text-sm block mt-0.5"
                      >
                        {rubyHall.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Compact Interactive Map */}
                <div className="relative w-full h-[180px] sm:h-[200px] rounded-2xl overflow-hidden border border-[#DECBEB] shadow-xs">
                  <iframe
                    title="Ruby Hall Clinic Sassoon Road Pune Google Map"
                    src={rubyHall.embedMapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full border border-[#EDE6F5] shadow-xs text-[9.5px] font-bold tracking-wider uppercase text-[#9784B4] pointer-events-none">
                    Interactive Map • Sassoon Road
                  </div>
                </div>
              </div>

              {/* Action Buttons: Symmetrically aligned with 100% full width / 50-50 grid */}
              <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 w-full">
                <a
                  href={rubyHall.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 px-4 rounded-full bg-[#9784B4] hover:bg-[#8571A3] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-sm hover:-translate-y-0.5 inline-flex items-center justify-center gap-1.5"
                >
                  <span>Open in Google Maps</span>
                  <span>↗</span>
                </a>
                <a
                  href={`tel:${rubyHall.phone.replace(/\s+/g, '')}`}
                  className="w-full text-center py-3 px-4 rounded-full border border-[#DECBEB] hover:border-[#9784B4] bg-white text-[#25202E] text-xs font-bold tracking-wider uppercase transition-all shadow-2xs hover:bg-[#FAF7FC] inline-flex items-center justify-center"
                >
                  Call Ruby Hall Desk
                </a>
              </div>
            </div>

            {/* ─── CARD 2: MANIPAL HOSPITAL (KHARADI) ─── */}
            <div className="bg-gradient-to-br from-[#FFF7F3] via-[#FCEDE5] to-[#F5DFD4] rounded-[32px] border border-[#ECCAC0] shadow-md p-6 sm:p-8 flex flex-col justify-between space-y-5 transition-all hover:shadow-lg">
              <div className="space-y-4">
                
                {/* Logo & Kharadi Center Badge (Same row on mobile and desktop, no stretched background) */}
                <div className="flex flex-row items-center justify-between gap-2.5 sm:gap-3 pb-3.5 border-b border-[#ECCAC0]/60">
                  <div className="bg-white/90 backdrop-blur-xs px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl border border-[#F3E2DB] shadow-2xs inline-flex items-center shrink-0">
                    <Image
                      src={manipal.logo || '/images/logos/manipal-hospital-kharadi-logo.png'}
                      alt="Manipal Hospital Kharadi Official Logo"
                      width={160}
                      height={45}
                      className="h-8 sm:h-9 w-auto object-contain"
                      priority
                    />
                  </div>
                  <span className="text-[10px] sm:text-[10.5px] font-bold tracking-wider sm:tracking-widest text-[#B8684D] uppercase bg-[#B8684D]/15 px-2.5 sm:px-3 py-1.5 rounded-full border border-[#B8684D]/25 shrink-0 whitespace-nowrap">
                    Kharadi Center
                  </span>
                </div>

                {/* Title & Area */}
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#25202E]">
                    Manipal Hospital
                  </h2>
                  <p className="text-xs font-semibold text-[#B8684D] tracking-wider uppercase mt-1">
                    Kharadi IT Corridor • East Pune
                  </p>
                  <p className="text-xs text-[#554B64] leading-relaxed mt-2">
                    Premier quaternary hospital offering specialized trauma suites and luxury inpatient facilities for aesthetic and reconstructive plastic surgery.
                  </p>
                </div>

                {/* Details Box */}
                <div className="space-y-2.5 bg-white/75 backdrop-blur-xs rounded-2xl p-4 sm:p-5 border border-[#ECCAC0]/80 text-xs text-[#554B64]">
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-xl bg-[#B8684D]/15 text-[#B8684D] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-[#25202E] block">Address:</span>
                      <p className="leading-relaxed mt-0.5 text-[#4A4056]">
                        {manipal.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2.5 border-t border-[#ECCAC0]/50">
                    <span className="w-7 h-7 rounded-xl bg-[#2E7D32]/15 text-[#2E7D32] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-[#25202E] block">Consultation Hours:</span>
                      <p className="leading-relaxed mt-0.5 font-medium text-[#2E7D32]">
                        Monday – Saturday: 9:00 AM – 9:00 PM (Sunday Closed)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pt-2.5 border-t border-[#ECCAC0]/50">
                    <span className="w-7 h-7 rounded-xl bg-[#0284C7]/15 text-[#0284C7] flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </span>
                    <div>
                      <span className="font-semibold text-[#25202E] block">Manipal Desk & Appointments:</span>
                      <a
                        href={`tel:${manipal.phone.replace(/\s+/g, '')}`}
                        className="font-bold text-[#B8684D] hover:underline text-sm block mt-0.5"
                      >
                        {manipal.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Compact Interactive Map */}
                <div className="relative w-full h-[180px] sm:h-[200px] rounded-2xl overflow-hidden border border-[#ECCAC0] shadow-xs">
                  <iframe
                    title="Manipal Hospital Kharadi Pune Google Map"
                    src={manipal.embedMapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full border border-[#F3DFD6] shadow-xs text-[9.5px] font-bold tracking-wider uppercase text-[#B8684D] pointer-events-none">
                    Interactive Map • Kharadi
                  </div>
                </div>
              </div>

              {/* Action Buttons: Symmetrically aligned with 100% full width / 50-50 grid */}
              <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 w-full">
                <a
                  href={manipal.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 px-4 rounded-full bg-[#B8684D] hover:bg-[#A35940] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-sm hover:-translate-y-0.5 inline-flex items-center justify-center gap-1.5"
                >
                  <span>Open in Google Maps</span>
                  <span>↗</span>
                </a>
                <a
                  href={`tel:${manipal.phone.replace(/\s+/g, '')}`}
                  className="w-full text-center py-3 px-4 rounded-full border border-[#ECCAC0] hover:border-[#B8684D] bg-white text-[#25202E] text-xs font-bold tracking-wider uppercase transition-all shadow-2xs hover:bg-[#FCF8F5] inline-flex items-center justify-center"
                >
                  Call Manipal Desk
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
