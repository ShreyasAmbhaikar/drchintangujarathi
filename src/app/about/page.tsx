import React from 'react';
import Header from '@/components/portfolio/Header';
import Footer from '@/components/portfolio/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata = {
  title: 'About Dr. Chintan Gujarathi | Best Plastic & Cosmetic Surgeon in Pune (MCh, DrNB)',
  description:
    'Dr. Chintan Gujarathi (MCh, DrNB, Tata Memorial Fellow) — Senior Plastic & Reconstructive Surgeon in Pune at Ruby Hall & Manipal Kharadi. Call 079774 29688.',
  alternates: {
    canonical: `${SITE_CONFIG.domain}/about`,
  },
  openGraph: {
    title: 'About Dr. Chintan Gujarathi | Best Plastic & Cosmetic Surgeon in Pune (MCh, DrNB)',
    description:
      'Dr. Chintan Gujarathi (MCh, DrNB, Tata Memorial Fellow) — Senior Plastic & Reconstructive Surgeon in Pune at Ruby Hall & Manipal Kharadi. Call 079774 29688.',
    url: `${SITE_CONFIG.domain}/about`,
    siteName: SITE_CONFIG.name,
    type: 'profile',
    images: [
      {
        url: `${SITE_CONFIG.domain}/images/dr-chintan-gujarathi.webp`,
        width: 1200,
        height: 630,
        alt: 'Dr. Chintan Gujarathi - Senior Consultant Plastic Surgeon Pune',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Dr. Chintan Gujarathi | Best Plastic & Cosmetic Surgeon in Pune (MCh, DrNB)',
    description:
      'Dr. Chintan Gujarathi (MCh, DrNB, Tata Memorial Fellow) — Senior Plastic & Reconstructive Surgeon in Pune at Ruby Hall & Manipal Kharadi. Call 079774 29688.',
    images: [`${SITE_CONFIG.domain}/images/dr-chintan-gujarathi.webp`],
  },
};

const CREDENTIAL_ITEMS = [
  {
    badge: 'SUPER-SPECIALTY',
    badgeClass: 'bg-[#9784B4]/15 text-[#644983] border-[#9784B4]/30',
    cardBg: 'bg-gradient-to-br from-white to-[#FAF6FE]',
    borderColor: 'border-[#DECBEB] hover:border-[#9784B4]',
    title: 'M.Ch & DrNB (Plastic Surgery)',
    institution: 'National Board of Examinations & Apex Universities',
    desc: 'Highest dual super-specialty board licensure in plastic, cosmetic, and reconstructive surgery in India, reflecting 6+ years of dedicated surgical residency.',
  },
  {
    badge: 'GENERAL SURGERY',
    badgeClass: 'bg-[#B8684D]/15 text-[#98462E] border-[#B8684D]/30',
    cardBg: 'bg-gradient-to-br from-white to-[#FFF8F5]',
    borderColor: 'border-[#F2D7CC] hover:border-[#B8684D]',
    title: 'MS (General Surgery) & MBBS',
    institution: 'Master of Surgery Postgraduate Residency',
    desc: 'Rigorous surgical foundation mastering advanced tissue handling, emergency trauma resuscitation, complex wound management, and surgical anatomy.',
  },
  {
    badge: 'FELLOWSHIPS',
    badgeClass: 'bg-[#2E6B4F]/15 text-[#1E5239] border-[#2E6B4F]/30',
    cardBg: 'bg-gradient-to-br from-white to-[#F4FAF6]',
    borderColor: 'border-[#CDE5D6] hover:border-[#2E6B4F]',
    title: 'Tata Memorial & Ganga Hospital',
    institution: 'Apex Cancer & Trauma Institutes',
    desc: 'Sub-specialty fellowships in submillimeter microvascular free tissue transfers, head & neck oncological reconstruction, and acute digit & hand replantation.',
  },
  {
    badge: 'REGISTRATIONS',
    badgeClass: 'bg-[#C4822B]/15 text-[#8C5815] border-[#C4822B]/30',
    cardBg: 'bg-gradient-to-br from-white to-[#FFFBF2]',
    borderColor: 'border-[#F5E4C3] hover:border-[#C4822B]',
    title: 'APSI, ISAPS & MMC Member',
    institution: 'National & Global Surgical Societies',
    desc: 'Active life member adhering to apex international protocols in surgical safety, precision aesthetics, and transparent medical ethics.',
  },
];

const PHILOSOPHY_PILLARS = [
  {
    badge: 'ANATOMICAL HARMONY',
    badgeClass: 'bg-[#9784B4]/15 text-[#644983] border-[#9784B4]/30',
    cardBg: 'bg-gradient-to-br from-white to-[#FAF6FE]',
    borderColor: 'border-[#DECBEB]',
    title: 'Natural Results, Never Overdone',
    desc: 'True cosmetic elegance enhances your authentic features without creating an artificial or stretched look. By repositioning deeper structural musculoskeletal layers (such as deep-plane SMAS vectors and structural cartilaginous frameworks) rather than pulling surface skin, results look refreshed, graceful, and undetectable.',
  },
  {
    badge: 'PATIENT SAFETY FIRST',
    badgeClass: 'bg-[#2E6B4F]/15 text-[#1E5239] border-[#2E6B4F]/30',
    cardBg: 'bg-gradient-to-br from-white to-[#F4FAF6]',
    borderColor: 'border-[#CDE5D6]',
    title: 'NABH Tertiary Hospital Safety',
    desc: 'Your safety is non-negotiable. All surgeries are performed exclusively in sterile laminar-flow modular operating suites at Ruby Hall Clinic and Manipal Hospital, equipped with dedicated plastic surgery instrumentation, board-certified anesthesiologists, and 24/7 intensive care backup.',
  },
  {
    badge: 'DIRECT SURGEON CARE',
    badgeClass: 'bg-[#B8684D]/15 text-[#98462E] border-[#B8684D]/30',
    cardBg: 'bg-gradient-to-br from-white to-[#FFF8F5]',
    borderColor: 'border-[#F2D7CC]',
    title: 'Unrushed, Personalized Attention',
    desc: 'From your initial private consultation through precise 3D pre-operative vector mapping, surgical execution, and every post-operative follow-up dressing, Dr. Chintan personally oversees your complete treatment. No delegated surgeries, no rushed appointments—just transparent, compassionate care.',
  },
];

const SPECIALTY_ITEMS = [
  {
    image: '/images/procedures/plastic-surgery.webp',
    imageAlt: 'Clinical plastic surgery facial planning and precise anatomical marking in Pune',
    floatingBadge: 'Dual Board M.Ch',
    floatingBadgeClass: 'bg-[#25202E]/85 text-white border-white/20',
    badge: 'PLASTIC SURGERY',
    badgeClass: 'bg-[#9784B4]/15 text-[#644983] border-[#9784B4]/25',
    cardBg: 'bg-gradient-to-br from-[#FAF6FE] via-white to-[#F4ECFA]',
    borderColor: 'border-[#DFCEEE]',
    title: 'Plastic Surgery',
    href: '/services#facial-aesthetic',
    desc: 'Dual-board surgical mastery in anatomical structural refinements, congenital and acquired defect corrections, scar revision, and tissue reconstruction restoring anatomical integrity.',
  },
  {
    image: '/images/procedures/cosmetic-surgery.webp',
    imageAlt: 'Natural cosmetic surgery rejuvenation and aesthetic facial harmony in Pune',
    floatingBadge: 'Aesthetic Harmony',
    floatingBadgeClass: 'bg-[#25202E]/85 text-white border-white/20',
    badge: 'COSMETIC SURGERY',
    badgeClass: 'bg-[#B8684D]/15 text-[#98462E] border-[#B8684D]/25',
    cardBg: 'bg-gradient-to-br from-[#FFF9F6] via-white to-[#FAF0EB]',
    borderColor: 'border-[#EACCC0]',
    title: 'Cosmetic Surgery',
    href: '/services#body-breast',
    desc: 'Artistic facial rejuvenation (deep-plane SMAS facelift, structural rhinoplasty, blepharoplasty) and precision body contouring (VASER 360° liposuction, gynecomastia, mommy makeover).',
  },
  {
    image: '/images/procedures/reconstructive-surgery.webp',
    imageAlt: 'Specialist reconstructive surgeon operating in advanced microsurgical theatre in Pune',
    floatingBadge: '500+ Microsurgeries',
    floatingBadgeClass: 'bg-[#25202E]/85 text-white border-white/20',
    badge: 'RECONSTRUCTIVE SURGERY',
    badgeClass: 'bg-[#2E6B4F]/15 text-[#1E5239] border-[#2E6B4F]/25',
    cardBg: 'bg-gradient-to-br from-[#F4FAF6] via-white to-[#EAF5EE]',
    borderColor: 'border-[#C8E5D4]',
    title: 'Reconstructive Surgery',
    href: '/services#reconstructive-wounds',
    desc: 'Sub-millimeter microvascular free tissue transfers, head & neck oncological reconstruction, acute trauma limb salvage, complex wound closure, and hand reconstruction.',
  },
];

export default function AboutPage() {
  const profileSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfilePage',
        '@id': `${SITE_CONFIG.domain}/about#webpage`,
        url: `${SITE_CONFIG.domain}/about`,
        name: 'About Dr. Chintan Gujarathi | Plastic & Cosmetic Surgeon in Pune',
        description:
          'Senior Consultant Plastic, Cosmetic, and Reconstructive Surgeon in Pune with 15+ years of clinical mastery. Practicing at Ruby Hall Clinic (Sassoon Road) and Manipal Hospital (Kharadi).',
        mainEntity: {
          '@type': 'Physician',
          name: 'Dr. Chintan S. Gujarathi',
          image: `${SITE_CONFIG.domain}/images/dr-chintan-gujarathi.webp`,
          jobTitle: 'Senior Consultant Plastic, Cosmetic & Reconstructive Surgeon',
          medicalSpecialty: ['PlasticSurgery', 'CosmeticSurgery', 'ReconstructiveSurgery'],
          description:
            'Senior Consultant Plastic, Cosmetic, and Reconstructive Surgeon in Pune with 15+ years of clinical mastery. Dual board certified (MCh, DrNB) with advanced fellowships from Tata Memorial and Ganga Hospital.',
          alumniOf: [
            { '@type': 'EducationalOrganization', name: 'National Board of Examinations (DrNB Plastic Surgery)' },
            { '@type': 'EducationalOrganization', name: 'Tata Memorial Hospital, Mumbai (Fellowship in Oncoreconstruction)' },
            { '@type': 'EducationalOrganization', name: 'Ganga Hospital, Coimbatore (Fellowship in Trauma & Hand Surgery)' },
          ],
          knowsAbout: [
            'Plastic Surgery',
            'Cosmetic Surgery',
            'Rhinoplasty',
            'Gynecomastia Surgery',
            'Liposuction',
            'Reconstructive Microsurgery',
            'Split Earlobe Repair',
            'Facelift',
          ],
          worksFor: [
            { '@type': 'Hospital', name: 'Ruby Hall Clinic, Sassoon Road, Pune' },
            { '@type': 'Hospital', name: 'Manipal Hospital, Kharadi, Pune' },
          ],
          telephone: '+917977429688',
        },
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
            name: 'About Dr. Chintan Gujarathi',
            item: `${SITE_CONFIG.domain}/about`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#25202E] flex flex-col selection:bg-[#EAE4F2]">
      {/* ProfilePage & Physician Structured Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />

      <Header />

      <main className="flex-1 space-y-16 sm:space-y-24 lg:space-y-28 pb-24">
        
        {/* ─── SECTION 1: HERO LEAD SURGEON PROFILE CARD (Golden Mean Proportions) ─── */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
          <div className="bg-gradient-to-br from-[#FAF3EC] via-[#F4ECF7] to-[#EBE2F3] rounded-[32px] border border-[#DFCEEE] p-7 sm:p-9 lg:p-11 card-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Doctor Bio & CTAs */}
              <div className="lg:col-span-7 flex flex-col items-start">
                {/* High-Intent SEO Eyebrow Badge (Centered & streamlined for mobile screens only, laptop view preserved) */}
                <div className="w-full sm:w-auto flex justify-center sm:justify-start">
                  <div className="inline-flex items-center justify-center gap-2 px-4 sm:px-3.5 py-1.5 sm:py-1 rounded-full bg-white/90 border border-[#EDE6F5] mb-3 shadow-2xs max-w-[280px] sm:max-w-none">
                    <span className="text-[#E8A88E] text-xs shrink-0">★</span>
                    <span className="hidden sm:inline text-[10.5px] font-bold tracking-[0.22em] text-[#7D649B] uppercase">
                      SENIOR CONSULTANT PLASTIC & COSMETIC SURGEON IN PUNE
                    </span>
                    <span className="sm:hidden text-[10px] font-bold tracking-[0.16em] text-[#7D649B] uppercase text-center whitespace-nowrap">
                      Plastic & Cosmetic Surgeon • Pune
                    </span>
                  </div>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-normal leading-[1.12] text-[#25202E]">
                  Dr. Chintan <span className="font-serif italic text-[#9784B4]">S. Gujarathi</span>
                </h1>

                <p className="mt-2 text-xs sm:text-[12.5px] font-semibold text-[#8E5E85] tracking-wider uppercase">
                  MBBS • MS (Gen. Surgery) • M.Ch & DrNB (Plastic Surgery)
                </p>

                <p className="mt-4 text-[13.5px] sm:text-[14.5px] lg:text-[15px] text-[#554B64] leading-[1.72]">
                  Dr. Chintan S. Gujarathi is widely regarded as one of the best plastic, cosmetic, and reconstructive surgeons in Pune, bringing over <strong>15+ years of clinical mastery</strong> and surgical leadership. As a Senior Consultant with active surgical privileges at <strong>Ruby Hall Clinic (Sassoon Road)</strong> and <strong>Manipal Hospital (Kharadi)</strong>, he provides comprehensive, world-class aesthetic and restorative care.
                </p>

                <p className="mt-3 text-[13.5px] sm:text-[14.5px] lg:text-[15px] text-[#554B64] leading-[1.72]">
                  With dual super-specialty board certifications (M.Ch and DrNB) and prestigious advanced fellowships at <strong>Tata Memorial Hospital (Mumbai)</strong> and <strong>Ganga Hospital (Coimbatore)</strong>, Dr. Gujarathi has successfully executed <strong>500+ complex microvascular free flaps</strong>, structural rhinoplasties, VASER liposuction, and body contouring procedures with a compassionate, patient-first ethos.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3.5">
                  <a
                    href="tel:07977429688"
                    className="px-7 py-3 rounded-full bg-[#9784B4] hover:bg-[#8470A3] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md hover:-translate-y-0.5"
                  >
                    Book Consultation: 079774 29688
                  </a>
                  <Link
                    href="/services"
                    className="px-6 py-3 rounded-full border border-[#D5CBE2] bg-white text-xs font-semibold tracking-wider uppercase text-[#25202E] hover:border-[#9784B4] transition-all hover:-translate-y-0.5"
                  >
                    Explore Procedures →
                  </Link>
                </div>
              </div>

              {/* Right Column: Doctor Portrait Photo (Well-Proportioned) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-[310px] sm:max-w-[325px] aspect-[4/5] rounded-[28px] overflow-hidden border-2 border-white bg-[#FAF8F5] shadow-lg group">
                  <Image
                    src="/images/dr-chintan-gujarathi.webp"
                    alt="Dr. Chintan S. Gujarathi — Best Plastic Surgeon Pune"
                    fill
                    priority
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 300px"
                  />

                  {/* Floating Experience Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10 bg-[#25202E]/80 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/20 text-[9.5px] font-bold tracking-wider uppercase shadow-xs">
                    15+ Years Mastery
                  </div>

                  {/* Bottom Doctor Tag */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 bg-white/92 backdrop-blur-md rounded-xl p-2.5 border border-[#EDE6F5] shadow-md text-center">
                    <span className="font-serif text-xs sm:text-[13px] font-semibold text-[#25202E] block">
                      Dr. Chintan S. Gujarathi
                    </span>
                    <span className="text-[10px] text-[#7D649B] font-medium block mt-0.5">
                      Ruby Hall Clinic & Manipal Hospital, Pune
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ─── SECTION 2: BOARD CERTIFICATIONS & FELLOWSHIPS ─── */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
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

        {/* ─── SECTION 3: SURGICAL PHILOSOPHY & PATIENT CARE PROMISE (NEW) ─── */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#EDE6F5] mb-3 shadow-2xs">
              <span className="text-[#9784B4] text-xs">✦</span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#9784B4] uppercase">
                SURGICAL PHILOSOPHY & ETHOS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#25202E]">
              Our Approach to <span className="font-serif italic text-[#9784B4]">Excellence</span>
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-[#675F72] max-w-lg mx-auto leading-relaxed">
              Three foundational clinical pillars guiding every confidential consultation, surgical procedure, and post-operative recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PHILOSOPHY_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className={`${pillar.cardBg} rounded-[28px] border ${pillar.borderColor} p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className={`text-[9.5px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border ${pillar.badgeClass}`}>
                      {pillar.badge}
                    </span>
                    <span className="text-xs text-[#9784B4]">0{idx + 1}</span>
                  </div>

                  <h3 className="font-serif text-xl text-[#25202E] font-medium leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-[13px] text-[#554B64] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── SECTION 4: WHAT DR. CHINTAN SPECIALIZES IN (NOW CLICKABLE) ─── */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
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
            <p className="mt-3 text-xs sm:text-sm text-[#675F72] max-w-lg mx-auto leading-relaxed">
              Explore specialized surgical treatments across aesthetic facial refinements, body contouring, and advanced reconstructive microsurgery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SPECIALTY_ITEMS.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className={`${item.cardBg} rounded-[28px] border ${item.borderColor} p-5 sm:p-6 shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group cursor-pointer`}
              >
                <div>
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

                  <h3 className="font-serif text-xl sm:text-2xl text-[#25202E] font-medium leading-snug group-hover:text-[#9784B4] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#554B64] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-black/[0.06] flex items-center justify-between text-xs font-semibold text-[#8E7BA9] group-hover:text-[#644983] transition-colors">
                  <span>Explore {item.title} Procedures</span>
                  <span className="transform group-hover:translate-x-1.5 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ─── SECTION 5: WHERE DR. CHINTAN PRACTICES (ACTIONABLE HOSPITAL PRIVILEGES) ─── */}
        <section id="hospitals" className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
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
            <p className="mt-3 text-xs sm:text-sm text-[#675F72] max-w-lg mx-auto leading-relaxed">
              Conducting outpatient consultations (OPD) and complex surgical procedures in accredited multi-specialty hospitals in Pune.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Hospital 1: Ruby Hall Clinic (Amethyst-Lavender Compact Luxury Card) */}
            <div className="bg-gradient-to-br from-[#FAF5FE] via-[#F4EBF9] to-[#EAE0F5] rounded-[28px] border border-[#DECBEB] p-6 sm:p-7 lg:p-8 card-shadow flex flex-col justify-between hover:shadow-md transition-all duration-300">
              <div>
                <div className="flex items-center justify-between gap-3 pb-4 border-b border-black/[0.06]">
                  <div className="bg-white px-3 py-2 rounded-xl border border-white/80 shadow-2xs inline-flex items-center">
                    <Image
                      src={SITE_CONFIG.locations[0].logo || '/images/logos/ruby-hall-clinic-logo.png'}
                      alt="Ruby Hall Clinic Logo"
                      width={140}
                      height={38}
                      className="h-7 sm:h-8 w-auto object-contain"
                    />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-[#644983] uppercase bg-white/85 px-3 py-1 rounded-full border border-[#EDE6F5] shadow-2xs">
                    Senior Consultant
                  </span>
                </div>

                <h3 className="mt-4 text-xl sm:text-2xl font-serif text-[#25202E] font-medium">
                  Ruby Hall Clinic, Sassoon Road
                </h3>
                <p className="text-[11.5px] font-semibold text-[#8E5E85] uppercase tracking-wider mt-0.5">
                  102, 1st Floor, Cancer Bldg, Sasoon Rd, Pune 411001
                </p>
                <p className="text-[11.5px] font-bold text-[#644983] mt-1">
                  OPD: Mon – Sat: 9:00 AM – 9:00 PM | Sun: Closed
                </p>

                <p className="mt-3 text-xs sm:text-[13px] text-[#554B64] leading-relaxed">
                  Western India’s premier tertiary healthcare landmark. Dr. Chintan conducts complex reconstructive and cosmetic surgeries in ultra-modern laminar-flow OT suites equipped with Carl Zeiss surgical operating microscopes for submillimeter microvascular anastomoses, 24/7 critical care ICU backup, and private recovery suites.
                </p>

                <div className="mt-4 pt-3.5 border-t border-black/[0.06] flex flex-wrap items-center gap-3">
                  <span className="text-[11.5px] font-medium text-[#7D649B] flex items-center gap-1.5">
                    <span>✦</span>
                    <span>Laminar-Flow Modular OTs</span>
                  </span>
                  <span className="text-[11.5px] font-medium text-[#7D649B] flex items-center gap-1.5">
                    <span>✦</span>
                    <span>Zeiss Surgical Microscopes</span>
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-2.5">
                <Link
                  href="/contact"
                  className="px-4.5 py-2 rounded-full bg-[#9784B4] hover:bg-[#8470A3] text-white text-[11px] font-semibold tracking-wider uppercase transition-all shadow-xs"
                >
                  Book OPD Visit →
                </Link>
                <div className="flex items-center gap-2.5 text-xs">
                  <a
                    href={SITE_CONFIG.locations[0].mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#644983] hover:underline inline-flex items-center gap-1 text-[11.5px]"
                  >
                    <span>View Maps</span>
                    <span>↗</span>
                  </a>
                  <span className="text-[#9784B4]">•</span>
                  <a
                    href="tel:07977429688"
                    className="font-bold text-[#644983] hover:underline text-[11.5px]"
                  >
                    079774 29688
                  </a>
                </div>
              </div>
            </div>

            {/* Hospital 2: Manipal Hospital Kharadi (Warm Peach-Terracotta Compact Luxury Card) */}
            <div className="bg-gradient-to-br from-[#FFF7F3] via-[#FCEDE5] to-[#F5DFD4] rounded-[28px] border border-[#ECCAC0] p-6 sm:p-7 lg:p-8 card-shadow flex flex-col justify-between hover:shadow-md transition-all duration-300">
              <div>
                <div className="flex items-center justify-between gap-3 pb-4 border-b border-black/[0.06]">
                  <div className="bg-white px-3 py-2 rounded-xl border border-white/80 shadow-2xs inline-flex items-center">
                    <Image
                      src={SITE_CONFIG.locations[1].logo || '/images/logos/manipal-hospital-kharadi-logo.png'}
                      alt="Manipal Hospital Kharadi Logo"
                      width={140}
                      height={38}
                      className="h-7 sm:h-8 w-auto object-contain"
                    />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-[#98462E] uppercase bg-white/85 px-3 py-1 rounded-full border border-[#F3E2DB] shadow-2xs">
                    Consultant Surgeon
                  </span>
                </div>

                <h3 className="mt-4 text-xl sm:text-2xl font-serif text-[#25202E] font-medium">
                  Manipal Hospital, Kharadi
                </h3>
                <p className="text-[11.5px] font-semibold text-[#B8684D] uppercase tracking-wider mt-0.5">
                  22/2A, Mundhwa - Kharadi Rd, nr Nyati Empire, Kharadi 411014
                </p>
                <p className="text-[11.5px] font-bold text-[#98462E] mt-1">
                  OPD: Mon – Sat: 9:00 AM – 9:00 PM | Sun: Closed
                </p>

                <p className="mt-3 text-xs sm:text-[13px] text-[#554B64] leading-relaxed">
                  Strategically situated in East Pune’s Kharadi medical corridor. Quaternary infrastructure featuring dedicated microvascular plastic surgery modular OT suites, round-the-clock anesthesiology, trauma resuscitation ICU, and comprehensive inpatient recovery amenities for cosmetic and reconstructive patients.
                </p>

                <div className="mt-4 pt-3.5 border-t border-black/[0.06] flex flex-wrap items-center gap-3">
                  <span className="text-[11.5px] font-medium text-[#98462E] flex items-center gap-1.5">
                    <span>✦</span>
                    <span>Quaternary Infrastructure</span>
                  </span>
                  <span className="text-[11.5px] font-medium text-[#98462E] flex items-center gap-1.5">
                    <span>✦</span>
                    <span>Inpatient Recovery Suites</span>
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-black/[0.06] flex flex-wrap items-center justify-between gap-2.5">
                <Link
                  href="/contact"
                  className="px-4.5 py-2 rounded-full bg-[#B8684D] hover:bg-[#A3573D] text-white text-[11px] font-semibold tracking-wider uppercase transition-all shadow-xs"
                >
                  Book OPD Visit →
                </Link>
                <div className="flex items-center gap-2.5 text-xs">
                  <a
                    href={SITE_CONFIG.locations[1].mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#98462E] hover:underline inline-flex items-center gap-1 text-[11.5px]"
                  >
                    <span>View Maps</span>
                    <span>↗</span>
                  </a>
                  <span className="text-[#B8684D]">•</span>
                  <a
                    href="tel:07977429688"
                    className="font-bold text-[#98462E] hover:underline text-[11.5px]"
                  >
                    079774 29688
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
