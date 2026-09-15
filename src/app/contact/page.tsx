import React from 'react';
import Image from 'next/image';
import Header from '@/components/portfolio/Header';
import Footer from '@/components/portfolio/Footer';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata = {
  title: 'Hospital Locations & Contact | Dr. Chintan Gujarathi — Plastic Surgeon Pune',
  description:
    'Consult with Dr. Chintan Gujarathi (MCh Plastic Surgery, Tata Memorial Fellow) at Ruby Hall Clinic (Sassoon Road) or Manipal Hospital (Kharadi), Pune. Direct phone: 079774 29688.',
};

export default function ContactPage() {
  const rubyHall = SITE_CONFIG.locations[0];
  const manipal = SITE_CONFIG.locations[1];

  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalClinic',
        '@id': 'https://drchintangujarati.com/#ruby-hall-clinic',
        name: 'Dr. Chintan Gujarathi – Plastic Surgeon, Cosmetic Surgeon & Reconstructive Surgeon in Pune (Ruby Hall Clinic)',
        url: 'https://drchintangujarati.com/contact',
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
        '@id': 'https://drchintangujarati.com/#manipal-hospital-kharadi',
        name: 'Dr. Chintan S. Gujarathi | Plastic, Reconstructive and Cosmetic Surgeon in Kharadi (Manipal Hospital)',
        url: 'https://drchintangujarati.com/contact',
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
        url: 'https://drchintangujarati.com/contact',
        telephone: SITE_CONFIG.contact.phone,
        worksFor: [
          { '@id': 'https://drchintangujarati.com/#ruby-hall-clinic' },
          { '@id': 'https://drchintangujarati.com/#manipal-hospital-kharadi' },
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
              CLINICAL LOCATIONS & DIRECT ACCESS
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#25202E]">
              Where Dr. Chintan <span className="font-serif italic text-[#9784B4]">Practices</span>
            </h1>
            <p className="mt-3.5 text-xs sm:text-sm md:text-base text-[#554B64] leading-relaxed max-w-2xl mx-auto">
              Dr. Chintan Gujarathi conducts personal clinical consultations and surgical procedures across two premier accredited tertiary hospitals in Pune: Ruby Hall Clinic (Sassoon Road) and Manipal Hospital (Kharadi).
            </p>
          </div>
        </section>

        {/* Two Dedicated Hospital Location Cards (Side-by-Side 2-Column Grid) */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* ─── CARD 1: RUBY HALL CLINIC (SASSOON ROAD) ─── */}
            <div className="bg-white rounded-[32px] border border-[#DFCEEE] shadow-md p-6 sm:p-8 flex flex-col justify-between space-y-5 transition-all hover:shadow-lg">
              <div className="space-y-4">
                
                {/* Logo & Sassoon Road Center Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 border-b border-[#F0EAF5]">
                  <div className="bg-[#FAF7FC] p-2.5 sm:p-3 rounded-2xl border border-[#EDE6F5] shadow-2xs inline-flex items-center">
                    <Image
                      src={rubyHall.logo || '/images/logos/ruby-hall-clinic-logo.png'}
                      alt="Ruby Hall Clinic Pune Official Logo"
                      width={180}
                      height={50}
                      className="h-9 sm:h-10 w-auto object-contain"
                      priority
                    />
                  </div>
                  <span className="text-[10.5px] font-bold tracking-widest text-[#9784B4] uppercase bg-[#9784B4]/12 px-3 py-1.5 rounded-full border border-[#9784B4]/25 self-start sm:self-auto">
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
                <div className="space-y-2.5 bg-[#FAF7FC] rounded-2xl p-4 sm:p-5 border border-[#EDE6F5] text-xs text-[#554B64]">
                  <div className="flex items-start gap-2.5">
                    <span className="text-sm text-[#9784B4] shrink-0 mt-0.5">📍</span>
                    <div>
                      <span className="font-semibold text-[#25202E] block">Address:</span>
                      <p className="leading-relaxed mt-0.5 text-[#4A4056]">
                        {rubyHall.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-2.5 border-t border-[#EDE6F5]">
                    <span className="text-sm text-[#9784B4] shrink-0 mt-0.5">🕒</span>
                    <div>
                      <span className="font-semibold text-[#25202E] block">Consultation Hours:</span>
                      <p className="leading-relaxed mt-0.5 font-medium text-[#2E7D32]">
                        Monday – Saturday: 9:00 AM – 9:00 PM (Sunday Closed)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-2.5 border-t border-[#EDE6F5]">
                    <span className="text-sm text-[#9784B4] shrink-0 mt-0.5">📞</span>
                    <div>
                      <span className="font-semibold text-[#25202E] block">OPD Appointments & Queries:</span>
                      <a
                        href={`tel:${rubyHall.phone.replace(/\s+/g, '')}`}
                        className="font-bold text-[#9784B4] hover:underline text-sm block mt-0.5"
                      >
                        {rubyHall.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Compact, Well-Proportioned Interactive Map */}
                <div className="relative w-full h-[180px] sm:h-[200px] rounded-2xl overflow-hidden border border-[#EDE6F5] shadow-xs">
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

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <a
                  href={rubyHall.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[170px] text-center py-3 px-5 rounded-full bg-[#9784B4] hover:bg-[#8571A3] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-sm hover:-translate-y-0.5 inline-flex items-center justify-center gap-1.5"
                >
                  <span>Open in Google Maps</span>
                  <span>↗</span>
                </a>
                <a
                  href={`tel:${rubyHall.phone.replace(/\s+/g, '')}`}
                  className="py-3 px-5 rounded-full border border-[#EDE6F5] hover:border-[#9784B4] bg-white text-[#25202E] text-xs font-bold tracking-wider uppercase transition-all shadow-2xs hover:bg-[#FAF7FC]"
                >
                  Call OPD Desk
                </a>
              </div>
            </div>

            {/* ─── CARD 2: MANIPAL HOSPITAL (KHARADI) ─── */}
            <div className="bg-white rounded-[32px] border border-[#E8D4C8] shadow-md p-6 sm:p-8 flex flex-col justify-between space-y-5 transition-all hover:shadow-lg">
              <div className="space-y-4">
                
                {/* Logo & Kharadi Center Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 border-b border-[#F5EDE8]">
                  <div className="bg-[#FCF8F5] p-2.5 sm:p-3 rounded-2xl border border-[#F3E2DB] shadow-2xs inline-flex items-center">
                    <Image
                      src={manipal.logo || '/images/logos/manipal-hospital-kharadi-logo.png'}
                      alt="Manipal Hospital Kharadi Official Logo"
                      width={180}
                      height={50}
                      className="h-9 sm:h-10 w-auto object-contain"
                      priority
                    />
                  </div>
                  <span className="text-[10.5px] font-bold tracking-widest text-[#B8684D] uppercase bg-[#B8684D]/12 px-3 py-1.5 rounded-full border border-[#B8684D]/25 self-start sm:self-auto">
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
                <div className="space-y-2.5 bg-[#FCF8F5] rounded-2xl p-4 sm:p-5 border border-[#F5E6DF] text-xs text-[#554B64]">
                  <div className="flex items-start gap-2.5">
                    <span className="text-sm text-[#B8684D] shrink-0 mt-0.5">📍</span>
                    <div>
                      <span className="font-semibold text-[#25202E] block">Address:</span>
                      <p className="leading-relaxed mt-0.5 text-[#4A4056]">
                        {manipal.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-2.5 border-t border-[#F3DFD6]">
                    <span className="text-sm text-[#B8684D] shrink-0 mt-0.5">🕒</span>
                    <div>
                      <span className="font-semibold text-[#25202E] block">Consultation Hours:</span>
                      <p className="leading-relaxed mt-0.5 font-medium text-[#B8684D]">
                        Monday – Saturday: 9:00 AM – 9:00 PM (Sunday Closed)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-2.5 border-t border-[#F3DFD6]">
                    <span className="text-sm text-[#B8684D] shrink-0 mt-0.5">📞</span>
                    <div>
                      <span className="font-semibold text-[#25202E] block">Hospital Desk & Appointments:</span>
                      <a
                        href={`tel:${manipal.phone.replace(/\s+/g, '')}`}
                        className="font-bold text-[#B8684D] hover:underline text-sm block mt-0.5"
                      >
                        {manipal.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Compact, Well-Proportioned Interactive Map */}
                <div className="relative w-full h-[180px] sm:h-[200px] rounded-2xl overflow-hidden border border-[#F3DFD6] shadow-xs">
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

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <a
                  href={manipal.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[170px] text-center py-3 px-5 rounded-full bg-[#B8684D] hover:bg-[#A35940] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-sm hover:-translate-y-0.5 inline-flex items-center justify-center gap-1.5"
                >
                  <span>Open in Google Maps</span>
                  <span>↗</span>
                </a>
                <a
                  href={`tel:${manipal.phone.replace(/\s+/g, '')}`}
                  className="py-3 px-5 rounded-full border border-[#F3DFD6] hover:border-[#B8684D] bg-white text-[#25202E] text-xs font-bold tracking-wider uppercase transition-all shadow-2xs hover:bg-[#FCF8F5]"
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
