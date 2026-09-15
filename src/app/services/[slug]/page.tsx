import React from 'react';
import Image from 'next/image';
import Header from '@/components/portfolio/Header';
import Footer from '@/components/portfolio/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE_CONFIG } from '@/lib/site-config';
import { DETAILED_PROCEDURES } from '@/lib/procedures-data';
import ProcedureInteractiveView from '@/components/portfolio/ProcedureInteractiveView';
import HeroImageWithLightbox from '@/components/portfolio/HeroImageWithLightbox';

// All procedures aggregated across the 4 clinical categories & backwards compatibility
const ALL_PROCEDURES = [
  ...SITE_CONFIG.serviceCategories.flatMap((cat) =>
    cat.procedures.map((p) => ({ ...p, category: cat.title }))
  ),
  ...SITE_CONFIG.procedures.cosmetic.map((p) => ({ ...p, category: 'Cosmetic & Facial Surgery' })),
  ...SITE_CONFIG.procedures.reconstructive.map((p) => ({ ...p, category: 'Reconstructive Surgery' })),
  ...SITE_CONFIG.procedures.nonSurgical.map((p) => ({ ...p, category: 'Non-Surgical Aesthetics' })),
].filter((proc, index, self) => index === self.findIndex((t) => t.slug === proc.slug));

export async function generateStaticParams() {
  return ALL_PROCEDURES.map((proc) => ({
    slug: proc.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const detailed = DETAILED_PROCEDURES[slug];
  if (detailed) {
    return {
      title: detailed.seoMetaTitle,
      description: detailed.seoMetaDescription,
      keywords: detailed.seoKeywords,
    };
  }

  const proc = ALL_PROCEDURES.find((p) => p.slug === slug);
  if (!proc) return { title: 'Procedure Not Found' };

  return {
    title: `${proc.title} in Pune | Dr. Chintan Gujarathi — Plastic Surgeon`,
    description: `${proc.title} by Dr. Chintan Gujarathi (MCh, DrNB), Senior Consultant Plastic Surgeon at Ruby Hall Clinic and Manipal Hospital Kharadi, Pune. Expert surgical care & natural results.`,
  };
}

export default async function ProcedureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const proc = ALL_PROCEDURES.find((p) => p.slug === slug);

  if (!proc) {
    notFound();
  }

  const detailedData = DETAILED_PROCEDURES[slug];
  const relatedProcedures = ALL_PROCEDURES.filter((p) => p.slug !== slug).slice(0, 6);

  // 10+ Year SEO Medical Schema Markup (JSON-LD)
  const jsonLd = detailedData
    ? {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'MedicalProcedure',
            name: detailedData.title,
            alternateName: detailedData.medicalName,
            description: detailedData.seoMetaDescription,
            procedureType: 'https://schema.org/SurgicalProcedure',
            bodyLocation:
              detailedData.badge === 'Male Aesthetics'
                ? 'Male Chest'
                : detailedData.slug === 'breast-augmentation'
                ? 'Female Breast and Chest Wall'
                : detailedData.slug === 'cancer-reconstruction'
                ? 'Head, Neck, Oral Cavity, and Chest Wall'
                : detailedData.slug === 'burns-reconstruction'
                ? 'Burn Injury Surface, Face, Neck, and Joints'
                : detailedData.slug === 'trauma-reconstruction'
                ? 'Extremities, Bones, Soft Tissues, and Facial Wounds'
                : detailedData.slug === 'hand-surgery'
                ? 'Hand, Wrist, Peripheral Nerves, and Tendons'
                : detailedData.slug === 'facial-bone-fractures'
                ? 'Facial Skeleton, Mandible, ZMC, and Orbital Bones'
                : detailedData.slug === 'chronic-wound-management'
                ? 'Lower Extremities, Sacrum, Ischium, and Chronic Ulcer Sites'
                : detailedData.slug === 'av-fistula-creation'
                ? 'Forearm and Upper Arm Vascular System (Radial & Brachial Arteries, Cephalic & Basilic Veins)'
                : detailedData.slug === 'cosmetic-facial-suturing'
                ? 'Facial Skin, Forehead, Lips, Eyelids, and Cheek Lacerations'
                : detailedData.slug === 'ear-lobule-deformity-correction'
                ? 'External Ear, Auricular Cartilage, and Earlobe (Lobule)'
                : detailedData.slug === 'pediatric-plastic-surgery'
                ? 'Lip, Hard & Soft Palate, Oral Cavity, and Pediatric Congenital Structures'
                : detailedData.slug === 'scar-revision'
                ? 'Skin, Dermal Tissues, Fibrotic Contracture Bands, and Keloid Sites'
                : detailedData.slug === 'nail-injuries-fingertip-repair'
                ? 'Perionychium, Nail Bed Matrix, Distal Phalanx (P3), and Fingertip Pulp'
                : detailedData.slug === 'excision-cysts-lipomas-ganglion'
                ? 'Subcutaneous Layer, Dermal Inclusion Cysts, Lipomatous Tissue, and Wrist Joint Capsule'
                : detailedData.slug === 'facial-enhancements-buccal-dimple'
                ? 'Cheek Buccinator Muscle, Bichat Buccal Fat Pad, and Lingual Frenulum'
                : detailedData.slug === 'anti-aging-botox-fillers'
                ? 'Facial Mimic Musculature (Forehead, Glabella, Peri-Orbital), Malar Fat, and Perioral Soft Tissues'
                : detailedData.slug === 'arm-and-thigh-lift'
                ? 'Upper Arm (Brachial Region) and Medial Inner Thigh'
                : detailedData.slug === 'genital-rejuvenation'
                ? 'Female External Genitalia, Labia Minora, Clitoral Prepuce, and Hymenal Ring'
                : detailedData.slug === 'peripheral-nerve-surgery'
                ? 'Peripheral Nerves, Muscle Bellies, Brachial Plexus, and Nerve Sheaths'
                : detailedData.slug === 'mommy-makeover'
                ? 'Abdomen, Rectus Diastasis Wall, Breasts, and Waistline'
                : detailedData.slug === 'microvascular-surgery'
                ? 'Microvascular Free Flap Donor & Recipient Sites, Mandible, and Lymphatic Channels'
                : detailedData.slug === 'prp-therapy'
                ? 'Scalp Hair Follicles, Facial Dermis, and Cutaneous Wound Beds'
                : detailedData.slug === 'botox'
                ? 'Facial Mimic Musculature (Forehead, Glabella, Peri-Orbital)'
                : detailedData.slug === 'dermal-fillers'
                ? 'Facial Dermis, Malar Fat, Nasolabial Folds, Lips, and Perioral Soft Tissues'
                : detailedData.slug === 'liposuction'
                ? 'Subcutaneous adipose tissue (Abdomen, Flanks, Back, Thighs, Chin)'
                : detailedData.slug === 'abdominoplasty'
                ? 'Abdomen and Abdominal Muscle Wall'
                : detailedData.badge === 'Body Sculpting'
                ? 'Abdomen and Torso'
                : detailedData.slug === 'rhinoplasty'
                ? 'Nose and Nasal Airway'
                : detailedData.slug === 'blepharoplasty'
                ? 'Eyelids and Peri-orbital Region'
                : 'Face and Neck',
            recognizingAuthority: 'Maharashtra Medical Council',
            followup: 'Post-operative suture removal and evaluation at Ruby Hall Clinic and Manipal Hospital',
            howPerformed: detailedData.overview.anatomyDetail,
          },
          {
            '@type': 'FAQPage',
            mainEntity: detailedData.faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.a,
              },
            })),
          },
        ],
      }
    : null;

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#25202E] flex flex-col selection:bg-[#EAE4F2]">
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <Header />

      <main className="flex-1 flex flex-col relative">
        {/* Living Atmospheric Mesh Background matching Homepage */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[2%] -right-16 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#DEC5F8]/60 via-[#F7C6B0]/45 to-transparent blur-[85px]" />
          <div className="absolute top-[25%] -left-20 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#F8CDB8]/55 via-[#E4CAF7]/50 to-transparent blur-[80px]" />
          <div className="absolute top-[50%] right-[-5%] w-[680px] h-[680px] rounded-full bg-gradient-to-bl from-[#D8BAF5]/50 via-[#F7C4B2]/40 to-transparent blur-[90px]" />
          <div className="absolute bottom-[5%] left-[-8%] w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-[#F7CDB7]/55 via-[#DFCAF8]/45 to-transparent blur-[85px]" />
        </div>

        <div className="relative z-10 flex flex-col">
          {/* Hero Header & Showcase Card */}
          <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 pb-16 lg:pb-20">
            
            {/* Hero Section */}
            {detailedData ? (
              <div className="space-y-10">
                {/* Centered Single Heading with Editorial Accent */}
                <div className="text-center max-w-4xl mx-auto space-y-3">
                  {slug === 'gynecomastia-surgery' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        Gynecomastia{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Surgery
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (Male Breast Reduction & Chest Reshaping)
                      </p>
                    </div>
                  ) : slug === 'rhinoplasty' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        Rhinoplasty{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Surgery
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (Aesthetic Nose Reshaping & Septoplasty)
                      </p>
                    </div>
                  ) : slug === 'facelift' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        Facelift &{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Neck Lift
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (Deep-Plane SMAS, Platysmaplasty & Endoscopic Brow Lift)
                      </p>
                    </div>
                  ) : slug === 'blepharoplasty' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        Blepharoplasty{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Surgery
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (Upper Eyelid Lift & Lower Transconjunctival Bag Removal)
                      </p>
                    </div>
                  ) : slug === 'liposuction' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        Liposuction{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          360°
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (High-Definition VASER Body Sculpting & Fat Removal)
                      </p>
                    </div>
                  ) : slug === 'abdominoplasty' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        Abdominoplasty{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Surgery
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (Tummy Tuck, Diastasis Recti Repair & Mommy Makeover)
                      </p>
                    </div>
                  ) : slug === 'breast-augmentation' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        Breast{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Surgery
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (Silicone Implants, Mastopexy Lift & Breast Reduction)
                      </p>
                    </div>
                  ) : slug === 'cancer-reconstruction' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        Cancer{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Reconstruction
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (Microvascular Free Flaps: ALT, Free Fibula & Autologous Breast)
                      </p>
                    </div>
                  ) : slug === 'burns-reconstruction' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        Burn{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Surgeries
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (Acute Burn Care, Skin Grafting & Scar Contracture Release)
                      </p>
                    </div>
                  ) : slug === 'trauma-reconstruction' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        Trauma{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Reconstruction
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (Emergency Soft-Tissue Flaps, Open Fractures & Limb Salvage)
                      </p>
                    </div>
                  ) : slug === 'hand-surgery' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        Hand{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Surgery
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (Carpal Tunnel Release, Tendon & Nerve Repair, Hand Trauma)
                      </p>
                    </div>
                  ) : slug === 'facial-bone-fractures' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        Facial Bone{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Fractures
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (Mandible, ZMC Cheekbone & Orbital Floor Titanium ORIF)
                      </p>
                    </div>
                  ) : slug === 'chronic-wound-management' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        Chronic Wound{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Care
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (Diabetic Foot Ulcers, Bed Sores & VAC Negative-Pressure Therapy)
                      </p>
                    </div>
                  ) : slug === 'av-fistula-creation' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        AV Fistula{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Creation
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (Radiocephalic & Brachiocephalic Dialysis Vascular Access)
                      </p>
                    </div>
                  ) : slug === 'cosmetic-facial-suturing' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        Cosmetic Facial{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Suturing
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (Emergency Micro-Layered Stitching for Cuts & Lacerations)
                      </p>
                    </div>
                  ) : slug === 'ear-lobule-deformity-correction' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        Ear Lobule{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Repair
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (Torn Earlobe Lobuloplasty & Prominent Ear Otoplasty)
                      </p>
                    </div>
                  ) : slug === 'pediatric-plastic-surgery' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        Pediatric Plastic{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Surgery
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (Cleft Lip Cheiloplasty, Cleft Palate & Congenital Anomaly Repair)
                      </p>
                    </div>
                  ) : slug === 'scar-revision' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        Scar Revision &{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Keloid Treatment
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (Geometric Z-Plasty, Contracture Release & Multimodal Keloid Care)
                      </p>
                    </div>
                  ) : slug === 'nail-injuries-fingertip-repair' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        Nail Bed Injury &{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Fingertip Repair
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (Micro-Matrix Repair, Subungual Hematoma Drainage & Atasoy V-Y Flap Coverage)
                      </p>
                    </div>
                  ) : slug === 'excision-cysts-lipomas-ganglion' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        Cyst, Lipoma &{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Ganglion Excision
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (Day-Care Intact Capsule Removal, Minimal-Incision Lipoma Extraction & Stalk Resection)
                      </p>
                    </div>
                  ) : slug === 'facial-enhancements-buccal-dimple' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        Dimple Creation &{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Buccal Fat Removal
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (Intraoral Dimpleplasty, Cheek Slimming & Lingual Frenuloplasty)
                      </p>
                    </div>
                  ) : slug === 'anti-aging-botox-fillers' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        Botox &{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Dermal Fillers
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (US-FDA Anti-Aging Treatments, Dynamic Line Smoothing & MD Codes™ Liquid Facelift)
                      </p>
                    </div>
                  ) : slug === 'arm-and-thigh-lift' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        Arm Lift &{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Thigh Lift
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (Medial Brachioplasty, Thighplasty & Post-Bariatric Extremity Reshaping)
                      </p>
                    </div>
                  ) : slug === 'genital-rejuvenation' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        Genital Rejuvenation{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Surgery
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (Confidential Aesthetic Wedge Labiaplasty & Reconstructive Hymenoplasty)
                      </p>
                    </div>
                  ) : slug === 'peripheral-nerve-surgery' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        Peripheral Nerve{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Surgery
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (Diagnostic Nerve & Muscle Biopsy, Schwannoma Enucleation & Microsurgical Reconstruction)
                      </p>
                    </div>
                  ) : slug === 'mommy-makeover' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        Mommy Makeover{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Surgery
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (Combined Tummy Tuck, Breast Lift/Augmentation & High-Definition Lipo 360)
                      </p>
                    </div>
                  ) : slug === 'microvascular-surgery' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        Microvascular{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Surgery
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (Supermicrosurgery, Free Perforator Flaps, Free Fibula Jaw Reconstruction & LVA)
                      </p>
                    </div>
                  ) : slug === 'prp-therapy' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        PRP & GFC{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Therapy
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (Autologous Platelet-Rich Plasma, Growth Factor Concentrate for Hair Loss & Skin Glow)
                      </p>
                    </div>
                  ) : slug === 'botox' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        Botox Wrinkle{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Treatment
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (US-FDA Dynamic Line Smoothing, Forehead Lines, Crow's Feet & Masseter Slimming)
                      </p>
                    </div>
                  ) : slug === 'dermal-fillers' ? (
                    <div>
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                        Dermal{' '}
                        <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
                          Fillers
                          <span className="inline-block text-[#9683B5]/70 text-xs sm:text-sm ml-1.5 -mt-3">✦</span>
                        </span>{' '}
                        in Pune
                      </h1>
                      <p className="text-xs sm:text-sm text-[#7A6F87] font-medium tracking-wide mt-1.5">
                        (Juvederm® Hyaluronic Acid Volume Restoration, Lip Enhancement & Liquid Facelift)
                      </p>
                    </div>
                  ) : (
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#221E2A] leading-[1.12]">
                      {proc.title}
                    </h1>
                  )}
                  
                  {/* Elegant decorative curved swoosh */}
                  <div className="flex justify-center py-0.5">
                    <svg viewBox="0 0 240 16" fill="none" className="w-[160px] sm:w-[220px] h-3">
                      <path
                        d="M 4 10 Q 120 2 236 11"
                        stroke="#E8A88E"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <p className="text-sm sm:text-base font-serif italic text-[#8E5E85] tracking-wide max-w-2xl mx-auto">
                    {detailedData.medicalName}
                  </p>
                </div>

                {/* 2-Column Luxury Showcase Card */}
                <div className="relative bg-gradient-to-br from-[#FAF5EE] via-[#F8EFF9] to-[#EFE3F7] rounded-[36px] p-7 sm:p-10 lg:p-12 border-2 border-white/80 shadow-[0_16px_50px_-15px_rgba(151,132,180,0.18)] overflow-hidden">
                  {/* Subtle corner aesthetic glow */}
                  <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-[#DFCEEE]/50 to-transparent pointer-events-none rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#FAD8C7]/35 to-transparent pointer-events-none rounded-full blur-2xl" />

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                    
                    {/* Left Column (7 cols) */}
                    <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
                      <p className="font-serif text-lg sm:text-[20px] lg:text-[21px] text-[#221E2A] leading-[1.6] font-normal tracking-[-0.01em]">
                        {detailedData.overview.introParagraph}
                      </p>
                      <p className="text-xs sm:text-[13.5px] text-[#675F72] leading-[1.7] border-t border-[#E8DEF0] pt-4 font-sans">
                        Operated by <strong className="text-[#25202E] font-semibold">Dr. Chintan Gujarathi</strong> (MCh Plastic Surgery, Tata Memorial Hospital Fellow) at accredited tertiary centers (<strong className="text-[#25202E] font-semibold">Ruby Hall Clinic</strong>, Sassoon Rd & <strong className="text-[#25202E] font-semibold">Manipal Hospital Kharadi</strong>), utilizing <strong className="text-[#25202E] font-semibold">sub-millimeter precision</strong>, concealed micro-incisions, and advanced tissue-handling for <strong className="text-[#25202E] font-semibold">natural, permanent outcomes</strong>.
                      </p>

                      {/* 4 Clinical Pillars Grid - Inspired by Homepage 'What We Do' Capsule Design */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        {detailedData.heroStats.map((stat, sIdx) => {
                          const themeStyles = [
                            {
                              bg: 'bg-[#9784B4]',
                              border: 'border-[#DDD3E4]',
                              icon: '✦',
                            },
                            {
                              bg: 'bg-[#E8A88E]',
                              border: 'border-[#F3DDD2]',
                              icon: '🛡️',
                            },
                            {
                              bg: 'bg-[#478262]',
                              border: 'border-[#D4EADE]',
                              icon: '🏥',
                            },
                            {
                              bg: 'bg-[#5873AB]',
                              border: 'border-[#D3E3F7]',
                              icon: '★',
                            },
                          ];
                          const style = themeStyles[sIdx % themeStyles.length];

                          return (
                            <div
                              key={sIdx}
                              className={`rounded-full bg-white/80 hover:bg-white border ${style.border} py-2 px-3.5 flex items-center gap-3 transition-all duration-300 shadow-2xs hover:shadow-xs group`}
                            >
                              <div
                                className={`w-9 h-9 rounded-full ${style.bg} flex items-center justify-center shrink-0 text-white shadow-2xs group-hover:scale-105 transition-transform text-xs font-bold`}
                              >
                                {style.icon}
                              </div>
                              <div className="min-w-0 pr-1">
                                <h4 className="font-bold text-xs sm:text-[12.5px] text-[#2A2533] leading-tight truncate">
                                  {stat.value} — {stat.label}
                                </h4>
                                <p className="text-[10px] sm:text-[10.5px] text-[#675F72] truncate">
                                  {stat.sub}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right Column (5 cols) */}
                    <div className="lg:col-span-5 flex flex-col justify-end">
                      <HeroImageWithLightbox
                        src={detailedData.images.hero}
                        alt={`${proc.title} clinical illustration`}
                        badge={detailedData.badge}
                        title={proc.title}
                        caption={`${detailedData.title} — ${detailedData.overview.anatomyDetail}`}
                      />
                    </div>

                  </div>
                </div>
              </div>
            ) : (
            <div className="bg-gradient-to-br from-[#FAF3EC] via-[#F4ECF7] to-[#EAE0F3] rounded-[36px] border border-[#DFCEEE] p-6 sm:p-10 lg:p-12 card-shadow max-w-4xl">
              <div className="space-y-6">
                <span className="text-[11px] font-bold tracking-[0.24em] text-[#9784B4] uppercase">
                  {proc.category}
                </span>
                <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-[#25202E]">
                  {proc.title}
                </h1>
                <p className="text-sm sm:text-base text-[#554B64] leading-relaxed max-w-2xl">
                  {proc.shortDesc}
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3.5">
                  <a
                    href="tel:07977429688"
                    className="px-8 py-4 rounded-full bg-[#9784B4] hover:bg-[#8470A3] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md"
                  >
                    Book Consultation: 079774 29688
                  </a>
                  <Link
                    href="/contact"
                    className="px-7 py-4 rounded-full border border-[#D5CBE2] bg-white text-xs font-bold tracking-wider uppercase text-[#25202E] hover:border-[#9784B4] transition-all shadow-2xs"
                  >
                    Inquire Online →
                  </Link>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Content Section: Render Interactive View for Detailed Procedures */}
        <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 lg:pt-16 pb-24">
          {detailedData ? (
            <ProcedureInteractiveView
              data={detailedData}
              relatedProcedures={relatedProcedures}
            />
          ) : (
            /* Fallback Standard Clinical Grid for Other Procedures */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-8 flex flex-col gap-10">
                {/* Clinical Quick Facts */}
                <div className="bg-white rounded-[24px] border border-[#EDE6F5] p-7 card-shadow">
                  <h2 className="text-xs font-semibold tracking-[0.2em] text-[#9784B4] uppercase mb-4">
                    Clinical Overview
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                    <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EDE6F5]">
                      <span className="text-[10px] text-[#8C8498] uppercase font-semibold block">Setting</span>
                      <span className="text-xs font-bold text-[#25202E] mt-1 block">Hospital OT</span>
                    </div>
                    <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EDE6F5]">
                      <span className="text-[10px] text-[#8C8498] uppercase font-semibold block">Surgeon</span>
                      <span className="text-xs font-bold text-[#25202E] mt-1 block">MCh Certified</span>
                    </div>
                    <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EDE6F5]">
                      <span className="text-[10px] text-[#8C8498] uppercase font-semibold block">Location</span>
                      <span className="text-xs font-bold text-[#25202E] mt-1 block">Ruby Hall & Manipal</span>
                    </div>
                    <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#EDE6F5]">
                      <span className="text-[10px] text-[#8C8498] uppercase font-semibold block">Anesthesia</span>
                      <span className="text-xs font-bold text-[#25202E] mt-1 block">Safe & Monitored</span>
                    </div>
                  </div>
                </div>

                {/* What is this procedure & Goals */}
                <div className="bg-white rounded-[28px] border border-[#EDE6F5] p-8 card-shadow">
                  <h2 className="text-2xl font-serif text-[#25202E] mb-4">
                    What is {proc.title}?
                  </h2>
                  <p className="text-sm text-[#554B64] leading-relaxed">
                    {proc.shortDesc} Each procedure is customized by Dr. Chintan Gujarathi based on thorough anatomical assessment, facial or body proportions, and individual expectations.
                  </p>
                  <p className="mt-4 text-sm text-[#554B64] leading-relaxed">
                    Dr. Gujarathi utilizes advanced surgical instrumentation and minimally invasive incisions hidden in natural anatomical skin folds, ensuring rapid recovery and virtually undetectable scars.
                  </p>
                </div>

                {/* Approach by Dr. Chintan */}
                <div className="bg-gradient-to-br from-[#FAF8F5] to-[#F5EFF9] rounded-[28px] border border-[#E4D7EC] p-8 card-shadow">
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#9784B4] uppercase">
                    Surgical Approach
                  </span>
                  <h2 className="mt-2 text-2xl font-serif text-[#25202E]">
                    Why Choose Dr. Chintan Gujarathi for {proc.title}?
                  </h2>
                  <ul className="mt-6 space-y-3 text-sm text-[#554B64]">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#9784B4] font-bold">✦</span>
                      <span><strong>15+ Years of Surgical Mastery:</strong> Extensive super-specialty training in plastic and reconstructive surgery.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#9784B4] font-bold">✦</span>
                      <span><strong>Specialized Fellowship & Observerships:</strong> Advanced training at Tata Memorial Hospital (Mumbai) and Ganga Hospital (Coimbatore).</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#9784B4] font-bold">✦</span>
                      <span><strong>Natural Aesthetics Philosophy:</strong> Results designed to complement your individual anatomy without artificial tightness or distortion.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[#9784B4] font-bold">✦</span>
                      <span><strong>Full Hospital Infrastructure:</strong> All major procedures conducted with complete ICU, cardiac backup, and NABH-accredited sterile theaters.</span>
                    </li>
                  </ul>
                </div>

                {/* Candidate Criteria & Recovery */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-[24px] border border-[#EDE6F5] p-7 card-shadow">
                    <h3 className="text-lg font-serif text-[#25202E] mb-3">
                      Who is an Ideal Candidate?
                    </h3>
                    <ul className="space-y-2 text-xs text-[#554B64] leading-relaxed">
                      <li>✓ Individuals in good general health with realistic expectations.</li>
                      <li>✓ Non-smokers or willing to pause smoking prior to surgery.</li>
                      <li>✓ Seeking functional improvement or natural aesthetic harmony.</li>
                      <li>✓ Ready to follow guided post-operative recovery instructions.</li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-[24px] border border-[#EDE6F5] p-7 card-shadow">
                    <h3 className="text-lg font-serif text-[#25202E] mb-3">
                      Recovery & Aftercare
                    </h3>
                    <ul className="space-y-2 text-xs text-[#554B64] leading-relaxed">
                      <li>✓ Structured post-op schedule with direct doctor access.</li>
                      <li>✓ Specialized compression garments & anti-swelling protocols.</li>
                      <li>✓ Detailed scar minimization therapy with medical silicone.</li>
                      <li>✓ Rapid return to light desk work and daily routine.</li>
                    </ul>
                  </div>
                </div>

                {/* Consultation CTA Banner */}
                <div className="bg-[#231E2A] text-white rounded-[28px] p-8 sm:p-10 card-shadow flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-serif text-white">
                      Schedule Your Assessment
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-white/70 max-w-md">
                      Discuss your goals in absolute confidence with Dr. Chintan Gujarathi at Ruby Hall Clinic or Manipal Hospital.
                    </p>
                  </div>
                  <a
                    href="tel:07977429688"
                    className="px-8 py-3.5 rounded-full bg-[#E8A88E] hover:bg-[#D9967D] text-[#25202E] text-xs font-bold tracking-wider uppercase transition-all whitespace-nowrap shadow-sm"
                  >
                    Call: 079774 29688
                  </a>
                </div>
              </div>

              {/* Sticky Sidebar */}
              <div className="lg:col-span-4 flex flex-col gap-6">
                <div className="bg-white rounded-[24px] border border-[#EDE6F5] p-7 card-shadow">
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#9784B4] uppercase block">
                    Lead Consultant
                  </span>
                  <h3 className="mt-1 font-serif text-xl text-[#25202E]">
                    Dr. Chintan Gujarathi
                  </h3>
                  <p className="text-xs text-[#8E5E85] font-semibold mt-0.5">
                    MBBS, MS, MCh (Plastic Surgery), DrNB
                  </p>
                  <p className="mt-3 text-xs text-[#6D6677] leading-relaxed">
                    Senior Consultant Plastic, Cosmetic & Reconstructive Surgeon with 15+ years of clinical excellence in Pune.
                  </p>
                  <div className="mt-5 pt-4 border-t border-[#EDE6F5] space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-[#8C8498]">Phone:</span>
                      <a href="tel:07977429688" className="font-bold text-[#9784B4]">079774 29688</a>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8C8498]">Primary Hospital:</span>
                      <span className="font-medium text-[#25202E]">Ruby Hall Clinic</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8C8498]">East Pune:</span>
                      <span className="font-medium text-[#25202E]">Manipal Hospital</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8C8498]">Reviews:</span>
                      <span className="text-[#E8A88E] font-bold">★ 5.0 (5 Reviews)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-[24px] border border-[#EDE6F5] p-7 card-shadow">
                  <h4 className="font-serif text-base text-[#25202E] mb-3">
                    Related Procedures
                  </h4>
                  <div className="flex flex-col gap-2 text-xs">
                    {relatedProcedures.map((other) => (
                      <Link
                        key={other.slug}
                        href={`/services/${other.slug}`}
                        className="py-1.5 border-b border-[#F0EBF5] text-[#554B64] hover:text-[#9784B4] transition-colors flex items-center justify-between"
                      >
                        <span>{other.title}</span>
                        <span>→</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}


