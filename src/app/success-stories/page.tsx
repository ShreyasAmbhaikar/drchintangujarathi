import React from 'react';
import Link from 'next/link';
import Header from '@/components/portfolio/Header';
import Footer from '@/components/portfolio/Footer';
import SuccessStoriesGallery from '@/components/portfolio/SuccessStoriesGallery';
import { SITE_CONFIG } from '@/lib/site-config';

export const metadata = {
  title: 'Success Stories — Surgical Results Gallery | Dr. Chintan Gujarathi Pune',
  description:
    'Visual before & after surgical gallery by Dr. Chintan Gujarathi (MCh, DrNB). Verified plastic & reconstructive outcomes in Pune. Call 079774 29688.',
  alternates: {
    canonical: `${SITE_CONFIG.domain}/success-stories`,
  },
  openGraph: {
    title: 'Success Stories — Surgical Results Gallery | Dr. Chintan Gujarathi Pune',
    description:
      'Visual before & after surgical gallery by Dr. Chintan Gujarathi (MCh, DrNB). Verified plastic & reconstructive outcomes in Pune. Call 079774 29688.',
    url: `${SITE_CONFIG.domain}/success-stories`,
    siteName: SITE_CONFIG.name,
    type: 'website',
    images: [
      {
        url: `${SITE_CONFIG.domain}/images/dr-chintan-gujarathi.webp`,
        width: 1200,
        height: 630,
        alt: 'Surgical Success Stories Gallery - Dr. Chintan Gujarathi Pune',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Success Stories — Surgical Results Gallery | Dr. Chintan Gujarathi Pune',
    description:
      'Visual before & after surgical gallery by Dr. Chintan Gujarathi (MCh, DrNB). Verified plastic & reconstructive outcomes in Pune. Call 079774 29688.',
    images: [`${SITE_CONFIG.domain}/images/dr-chintan-gujarathi.webp`],
  },
};

export default function SuccessStoriesPage() {
  const galleryJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalWebPage',
        '@id': `${SITE_CONFIG.domain}/success-stories#webpage`,
        name: 'Success Stories & Surgical Gallery — Dr. Chintan Gujarathi',
        url: `${SITE_CONFIG.domain}/success-stories`,
        description:
          'A photographic gallery of real surgical transformations and reconstructive outcomes by Dr. Chintan Gujarathi in Pune.',
        author: {
          '@type': 'Physician',
          name: SITE_CONFIG.doctor.fullName,
          medicalSpecialty: ['PlasticSurgery', 'CosmeticSurgery', 'Surgical'],
          qualifications: SITE_CONFIG.doctor.qualifications,
          worksFor: [
            {
              '@type': 'MedicalClinic',
              name: 'Ruby Hall Clinic (Sassoon Road, Pune)',
            },
            {
              '@type': 'MedicalClinic',
              name: 'Manipal Hospital (Kharadi, Pune)',
            },
          ],
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
            name: 'Success Stories',
            item: `${SITE_CONFIG.domain}/success-stories`,
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#25202E] flex flex-col relative selection:bg-[#EAE4F2] overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJsonLd) }}
      />

      {/* Subtle Atmospheric Glows */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-[#9784B4]/14 via-[#FAF3EC]/30 to-transparent blur-[120px] pointer-events-none z-0"
      />
      <div
        aria-hidden="true"
        className="absolute top-[45%] left-[-150px] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#E8A88E]/12 via-[#FAF7FC]/25 to-transparent blur-[130px] pointer-events-none z-0"
      />

      <Header />

      <main className="flex-1 relative z-10">
        {/* Simple & Clean Header */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-8 text-center">
          <div className="max-w-2xl mx-auto">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.24em] text-[#9784B4] uppercase block mb-2.5">
              CLINICAL RESULTS GALLERY • PUNE
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#25202E]">
              Success <span className="font-serif italic text-[#9784B4]">Stories</span>
            </h1>
            <p className="mt-3.5 text-xs sm:text-sm md:text-base text-[#554B64] leading-relaxed">
              A photographic gallery of real surgical transformations and reconstructive outcomes by Dr. Chintan Gujarathi at Ruby Hall Clinic and Manipal Hospital, Pune.
            </p>
          </div>
        </section>

        {/* 3-Grid Gallery Section */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <SuccessStoriesGallery />

          {/* Clean Medical Consent Note */}
          <p className="mt-12 text-center text-[11px] sm:text-xs text-[#7A6E89] max-w-2xl mx-auto leading-relaxed">
            ✦ All surgical before-and-after photographs are published with patient consent for clinical educational reference. Individual surgical healing and results may vary.
          </p>

          {/* Simple Bottom Consultation Callout */}
          <div className="mt-10 p-6 sm:p-8 rounded-[28px] bg-gradient-to-br from-[#FAF3EC] via-[#F4ECF7] to-[#EAE0F3] border border-[#DFCEEE] text-center max-w-2xl mx-auto shadow-2xs">
            <h2 className="font-serif text-xl sm:text-2xl text-[#25202E]">
              Schedule a Consultation in Pune
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-[#554B64]">
              Available for personal consultations at Ruby Hall Clinic & Manipal Hospital.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-full bg-[#9784B4] hover:bg-[#8571A3] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-sm"
              >
                Contact Us
              </Link>
              <a
                href="tel:07977429688"
                className="px-5 py-2.5 rounded-full bg-white hover:bg-[#FAF7FC] text-[#25202E] border border-[#DECBEB] text-xs font-bold tracking-wider uppercase transition-all shadow-2xs"
              >
                Call: 079774 29688
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
