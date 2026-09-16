'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DetailedProcedureData } from '@/lib/procedures-data';

import ImageLightboxModal from '@/components/portfolio/ImageLightboxModal';

interface Props {
  data: DetailedProcedureData;
  relatedProcedures: { slug: string; title: string }[];
}

export default function ProcedureInteractiveView({ data }: Props) {
  // Active procedure approach in interactive switcher
  const [activeCard, setActiveCard] = useState(0);

  // FAQ Accordion State (first open by default)
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Fullscreen Lightbox Modal state
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    alt: string;
    title?: string;
    caption?: string;
  } | null>(null);

  const fallbackColors = ['#9784B4', '#B8684D', '#5873AB', '#478262'];

  // Dynamic content for procedure approaches
  const PROCEDURES_DISPLAY = (data.approaches && data.approaches.length > 0 ? data.approaches : []).map((app, idx) => {
    const accent = app.accentColor || fallbackColors[idx % fallbackColors.length];
    
    // Clean concise tab labels that stay on a single line without wrapping
    let filterLabel = app.title;
    if (app.id === 'vaser-lipo-gland') filterLabel = 'VASER & Gland';
    else if (app.id === 'isolated-gland') filterLabel = 'Direct Excision';
    else if (app.id === 'skin-tightening-grade4') filterLabel = 'Skin Redraping';
    else if (app.id === 'open-rhinoplasty') filterLabel = 'Open Structural';
    else if (app.id === 'closed-rhinoplasty') filterLabel = 'Closed / Scarless';
    else if (app.id === 'septoplasty-turbinates') filterLabel = 'Functional Septo';
    else if (app.id === 'deep-plane') filterLabel = 'Deep-Plane SMAS';
    else if (app.id === 'platysmaplasty') filterLabel = 'Platysmaplasty';
    else if (app.id === 'endobrow') filterLabel = 'Endo Brow Lift';
    else if (app.id === 'structural-fat') filterLabel = 'Fat Grafting';
    else if (app.id === 'upper-bleph') filterLabel = 'Upper Eyelid Lift';
    else if (app.id === 'lower-transconjunctival') filterLabel = 'Lower Bag Removal';
    else if (app.id === 'pinch-canthopexy') filterLabel = 'Skin Pinch & Lift';
    else if (app.id === 'vaser-360') filterLabel = '360° Torso Sculpt';
    else if (app.id === 'submental-chin') filterLabel = 'Double Chin Lipo';
    else if (app.id === 'extremities-lipo') filterLabel = 'Arms & Thighs';
    else if (app.id === 'full-tummy-tuck') filterLabel = 'Full Tummy Tuck';
    else if (app.id === 'mini-tummy-tuck') filterLabel = 'Mini Tummy Tuck';
    else if (app.id === 'mommy-makeover') filterLabel = 'Mommy Makeover';
    else if (app.id === 'dual-plane-implants') filterLabel = 'Dual-Plane Implants';
    else if (app.id === 'mastopexy-lift') filterLabel = 'Breast Lift / Mastopexy';
    else if (app.id === 'reduction-mammaplasty') filterLabel = 'Breast Reduction';
    else if (app.id === 'alt-oral-flap') filterLabel = 'ALT Free Flap';
    else if (app.id === 'free-fibula-mandible') filterLabel = 'Free Fibula Jaw';
    else if (app.id === 'diep-breast-recon') filterLabel = 'DIEP Breast Flap';
    else if (app.id === 'acute-skin-grafting') filterLabel = 'STSG Skin Grafting';
    else if (app.id === 'contracture-release-zplasty') filterLabel = 'Z-Plasty Contracture';
    else if (app.id === 'facial-burn-reconstruction') filterLabel = 'Facial Burn Resto';
    else if (app.id === 'local-muscle-flaps') filterLabel = 'Local Muscle Flaps';
    else if (app.id === 'propeller-perforator-flaps') filterLabel = 'Propeller Flaps';
    else if (app.id === 'microvascular-limb-salvage') filterLabel = 'Free Flap Salvage';
    else if (app.id === 'carpal-tunnel-release') filterLabel = 'Carpal Tunnel Decom';
    else if (app.id === 'tendon-nerve-repairs') filterLabel = 'Tendon & Nerve Repair';
    else if (app.id === 'complex-hand-trauma') filterLabel = 'Hand Reconstruction';
    else if (app.id === 'mandibular-fractures') filterLabel = 'Mandible Fracture ORIF';
    else if (app.id === 'zmc-cheekbone-fractures') filterLabel = 'ZMC Cheekbone Fixation';
    else if (app.id === 'orbital-blowout-mesh') filterLabel = 'Orbital Floor Mesh';
    else if (app.id === 'surgical-debridement') filterLabel = 'Surgical Debridement';
    else if (app.id === 'npwt-vac-therapy') filterLabel = 'NPWT / VAC Therapy';
    else if (app.id === 'flap-ulcer-closure') filterLabel = 'Flap Ulcer Closure';
    else if (app.id === 'radiocephalic-fistula') filterLabel = 'Radiocephalic AVF';
    else if (app.id === 'brachiocephalic-avf') filterLabel = 'Brachiocephalic AVF';
    else if (app.id === 'basilic-transposition') filterLabel = 'Basilic Transposition';
    else if (app.id === 'layered-microsurgical-closure') filterLabel = 'Layered Closure';
    else if (app.id === 'pediatric-trauma-suturing') filterLabel = 'Pediatric Closure';
    else if (app.id === 'complex-facial-laceration') filterLabel = 'Margin Alignment';
    else if (app.id === 'split-earlobe-repair') filterLabel = 'Split Lobule Repair';
    else if (app.id === 'immediate-repiercing') filterLabel = 'Instant Re-Piercing';
    else if (app.id === 'corrective-otoplasty') filterLabel = 'Ear Pinning Otoplasty';
    else if (app.id === 'cleft-lip-repair') filterLabel = 'Cleft Lip Cheiloplasty';
    else if (app.id === 'cleft-palate-repair') filterLabel = 'Cleft Palate Repair';
    else if (app.id === 'pediatric-congenital-anomalies') filterLabel = 'Congenital Day Care';
    else if (app.id === 'surgical-zplasty-revision') filterLabel = 'Z-Plasty Scar Revision';
    else if (app.id === 'keloid-multimodal-excision') filterLabel = 'Keloid Triple Therapy';
    else if (app.id === 'post-traumatic-scar-release') filterLabel = 'Contracture Release';
    else if (app.id === 'nailbed-micro-repair') filterLabel = 'Nail Bed Repair';
    else if (app.id === 'fingertip-flap-reconstruction') filterLabel = 'V-Y Flap Coverage';
    else if (app.id === 'subungual-hematoma-decompression') filterLabel = 'Hematoma Drainage';
    else if (app.id === 'sebaceous-cyst-capsule-excision') filterLabel = 'Cyst Capsule Excision';
    else if (app.id === 'lipoma-minimal-incision-removal') filterLabel = 'Lipoma Enucleation';
    else if (app.id === 'ganglion-cyst-stalk-excision') filterLabel = 'Ganglion Stalk Resection';
    else if (app.id === 'dimple-creation-dimpleplasty') filterLabel = 'Dimple Creation';
    else if (app.id === 'buccal-fat-pad-extraction') filterLabel = 'Buccal Fat Removal';
    else if (app.id === 'tongue-tie-frenuloplasty') filterLabel = 'Frenuloplasty';
    else if (app.id === 'botox-neuromodulator-smoothing') filterLabel = 'Botox Injections';
    else if (app.id === 'hyaluronic-acid-fillers') filterLabel = 'Dermal Fillers';
    else if (app.id === 'liquid-facelift-rejuvenation') filterLabel = '8-Point Liquid Lift';
    else if (app.id === 'medial-brachioplasty-arm-lift') filterLabel = 'Brachioplasty Arm Lift';
    else if (app.id === 'medial-thigh-lift-thighplasty') filterLabel = 'Inner Thigh Lift';
    else if (app.id === 'extended-extremity-contouring') filterLabel = 'Post-Bariatric Lift';
    else if (app.id === 'wedge-resection-labiaplasty') filterLabel = 'Wedge Labiaplasty';
    else if (app.id === 'reconstructive-hymenoplasty') filterLabel = 'Hymenoplasty';
    else if (app.id === 'clitoral-hood-prepuce-reduction') filterLabel = 'Hood Reduction';
    else if (app.id === 'diagnostic-nerve-muscle-biopsy') filterLabel = 'Diagnostic Biopsy';
    else if (app.id === 'schwannoma-neuroma-enucleation') filterLabel = 'Tumor Enucleation';
    else if (app.id === 'microsurgical-nerve-reconstruction') filterLabel = 'Nerve Reconstruction';
    else if (app.id === 'full-mommy-makeover-duo') filterLabel = 'Tummy & Breast Lift';
    else if (app.id === 'lipo-360-breast-makeover') filterLabel = 'Lipo 360 & Breast';
    else if (app.id === 'mini-mommy-makeover-rapid') filterLabel = 'Mini Mommy Makeover';
    else if (app.id === 'free-perforator-transfer') filterLabel = 'Free Perforator Flap';
    else if (app.id === 'free-fibula-osteocutaneous') filterLabel = 'Free Fibula Mandible';
    else if (app.id === 'lymphaticovenular-anastomosis-lva') filterLabel = 'LVA for Lymphedema';
    else if (app.id === 'hair-regeneration-gfc' || app.id === 'skin-rejuvenation-gfc') filterLabel = 'PRP & GFC Skin Glow';
    else if (app.id === 'facial-rejuvenation-prp') filterLabel = 'PRP Vampire Facial';
    else if (app.id === 'scar-wound-healing-prp') filterLabel = 'PRP Scar Biotherapy';
    else {
      filterLabel = app.title.split('&')[0].split('(')[0].split('+')[0].trim();
    }

    return {
      id: app.id,
      num: String(idx + 1).padStart(2, '0'),
      title: app.title,
      filterLabel,
      oneLiner: app.shortDesc || app.technique,
      benefits: app.benefits && app.benefits.length > 0 ? app.benefits.slice(0, 3) : [app.technique],
      bestFor: app.bestFor,
      image: app.image,
      accentColor: accent,
    };
  });

  // Dynamic styling for recovery phases
  const colorThemes = [
    {
      gradient: 'from-[#FFF6F2] via-[#FDF0E9] to-[#FCE6DB]',
      border: 'border-[#F8D2C1]',
      badgeColor: 'text-[#B8684D] bg-white/80',
    },
    {
      gradient: 'from-[#FAF3FD] via-[#F4E8F8] to-[#EDE0F5]',
      border: 'border-[#DFC8EE]',
      badgeColor: 'text-[#7A5B94] bg-white/80',
    },
    {
      gradient: 'from-[#F2F6FD] via-[#E8F0FA] to-[#DEEAF7]',
      border: 'border-[#CCDDF5]',
      badgeColor: 'text-[#5873AB] bg-white/80',
    },
    {
      gradient: 'from-[#F0F8F3] via-[#E5F3EB] to-[#DAEDE1]',
      border: 'border-[#C4E3CE]',
      badgeColor: 'text-[#478262] bg-white/80',
    },
  ];

  const RECOVERY_PHASES = (data.recoveryTimeline && data.recoveryTimeline.length > 0 ? data.recoveryTimeline : []).map((rec, idx) => {
    const theme = colorThemes[idx % colorThemes.length];
    return {
      period: rec.period,
      phase: `Phase 0${idx + 1}`,
      title: rec.title,
      desc: rec.experience,
      tip: rec.surgeonTip,
      gradient: theme.gradient,
      border: theme.border,
      badgeColor: theme.badgeColor,
    };
  });

  const dos = data.postOpCareTips?.dos && data.postOpCareTips.dos.length > 0
    ? data.postOpCareTips.dos
    : [
        'Rest with head and torso elevated while resting to assist natural drainage.',
        'Keep your recovery area clean and adhere strictly to prescribed medication routines.',
        'Stay well hydrated with high-protein, nourishing meals to optimize wound healing.',
        'Attend your scheduled clinical follow-up at Ruby Hall Clinic or Manipal Hospital Kharadi.',
      ];

  const donts = data.postOpCareTips?.donts && data.postOpCareTips.donts.length > 0
    ? data.postOpCareTips.donts
    : [
        'No heavy gym workouts, vigorous cardio, or intense lifting until cleared by Dr. Gujarathi.',
        'Avoid hot baths, steam saunas, or direct heat exposure on surgical sites.',
        'Do not apply direct friction, pressure, or unauthorized creams onto healing incisions.',
        'Avoid smoking, vaping, or nicotine for 4 weeks post-op to protect micro-capillary healing.',
      ];

  return (
    <div className="w-full space-y-24 sm:space-y-32">
      {/* Fullscreen Image Lightbox */}
      <ImageLightboxModal
        isOpen={!!lightboxImage}
        imageSrc={lightboxImage?.src || ''}
        imageAlt={lightboxImage?.alt || ''}
        title={lightboxImage?.title}
        caption={lightboxImage?.caption}
        onClose={() => setLightboxImage(null)}
      />

      {/* ─── SECTION 2: SURGICAL APPROACHES & PRECISION TECHNIQUES (SPLIT-VIEW INTERACTIVE SWITCHER) ─── */}
      <section className="space-y-6 sm:space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#221E2A] font-normal leading-tight">
            Surgical Approaches &{' '}
            <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
              Precision Techniques
              <span className="inline-block text-[#9683B5]/70 text-xs ml-1.5 -mt-3">✦</span>
            </span>
          </h2>
        </div>

        {/* Interactive Technique Selector Tabs: Single Line matching Dark Card */}
        {PROCEDURES_DISPLAY.length > 1 && (
          <div className="flex items-center justify-center w-full">
            <div className="inline-flex items-center gap-1.5 sm:gap-2.5 p-1.5 sm:p-2 rounded-full bg-[#251C30]/95 backdrop-blur-md border border-[#433257] shadow-xl overflow-x-auto max-w-full">
              {PROCEDURES_DISPLAY.map((proc, idx) => {
                const isSelected = activeCard === idx;
                return (
                  <button
                    key={proc.id}
                    onClick={() => setActiveCard(idx)}
                    className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer shrink-0 ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#9784B4] to-[#B39CD0] text-white font-semibold shadow-md ring-1 ring-white/30 scale-[1.02]'
                        : 'text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        isSelected ? 'bg-white text-[#2D223B]' : 'bg-white/15 text-white/90'
                      }`}
                    >
                      {proc.num}
                    </span>
                    <span>{proc.filterLabel}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Selected Technique Showcase (Dark Luxury Theme matching CTA) */}
        {PROCEDURES_DISPLAY[activeCard] && (() => {
          const current = PROCEDURES_DISPLAY[activeCard];
          return (
            <div className="relative rounded-[36px] bg-gradient-to-br from-[#2D223B] via-[#433257] to-[#241C2E] text-white p-6 sm:p-10 lg:p-12 shadow-2xl border border-white/15 overflow-hidden transition-all duration-300">
              {/* Subtle luminous center glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[320px] bg-gradient-to-r from-[#9784B4]/25 via-[#B799D8]/20 to-[#E8A88E]/15 blur-3xl pointer-events-none rounded-full" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
                
                {/* Left Column (7 cols): Clean Clinical Breakdown */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-snug">
                      {current.title}
                    </h3>

                    <p className="text-sm sm:text-base text-white/85 leading-relaxed font-normal">
                      {current.oneLiner}
                    </p>
                  </div>

                  {/* 3 Key Clinical Benefits in a Balanced 3-Column Grid */}
                  <div className="space-y-2.5">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#FFE4D6] block">
                      Key Surgical Advantages:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {current.benefits.map((b, bi) => (
                        <div
                          key={bi}
                          className="flex flex-col gap-2 bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-md rounded-xl p-3.5 text-xs text-white/95 transition-colors"
                        >
                          <span
                            className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[11px] font-bold shadow-2xs shrink-0"
                            style={{ backgroundColor: current.accentColor }}
                          >
                            ✓
                          </span>
                          <span className="leading-relaxed font-normal">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommended For & Indication Note */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md flex items-start gap-3">
                    <span className="text-base shrink-0">🎯</span>
                    <div className="text-xs text-white/90 leading-relaxed">
                      <span className="font-semibold text-[#FFE4D6] mr-1.5">Best Suited For:</span>
                      <span>{current.bestFor}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column (5 cols): High-Clarity Medical Diagram with Lightbox Trigger */}
                <div className="lg:col-span-5 flex flex-col justify-end">
                  <div
                    onClick={() =>
                      setLightboxImage({
                        src: current.image,
                        alt: current.title,
                      })
                    }
                    className="relative w-full h-full min-h-[300px] sm:min-h-[340px] aspect-[4/3] lg:aspect-auto rounded-2xl overflow-hidden border-2 border-white/20 bg-white shadow-xl group cursor-pointer"
                  >
                    <Image
                      src={current.image}
                      alt={current.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Fullscreen Square Icon Button with Frosted White / Dark Amethyst Styling */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setLightboxImage({
                          src: current.image,
                          alt: current.title,
                        });
                      }}
                      className="absolute bottom-3 right-3 w-9 h-9 rounded-lg bg-white/95 hover:bg-white text-[#25202E] hover:text-[#9784B4] flex items-center justify-center transition-all border border-gray-200 shadow-md hover:shadow-lg backdrop-blur-md group-hover:scale-110 cursor-pointer"
                      title="Full screen view"
                      aria-label="Full screen view"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                      </svg>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })()}
      </section>

      {/* ─── SECTION 3: RECOVERY & HEALING TIMELINE (COLORFUL THEMED CARDS) ─── */}
      <section className="space-y-8">
        {/* Centered Heading with Two-Color Brand Styling */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#9784B4]/15 border border-[#9784B4]/25 text-[10.5px] font-bold tracking-[0.2em] text-[#9784B4] uppercase">
            <span>✦</span>
            <span>CLINICAL ROADMAP • RECOVERY PHASES</span>
            <span>✦</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#221E2A] font-normal leading-tight">
            Your Healing Journey &{' '}
            <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
              Recovery Timeline
              <span className="inline-block text-[#9683B5]/70 text-xs ml-1.5 -mt-3">✦</span>
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#675F72] leading-relaxed">
            A straightforward clinical timeline of what to expect and how your results mature week by week.
          </p>
        </div>

        {/* 4 Colorful Phase Cards with Perfectly Aligned Baseline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {RECOVERY_PHASES.map((rec, idx) => (
            <div
              key={idx}
              className={`rounded-[26px] bg-gradient-to-br ${rec.gradient} border ${rec.border} p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-full`}
            >
              {/* Top Phase Header, Title & Description */}
              <div className="flex-1 flex flex-col space-y-2.5">
                <div className="flex items-center justify-between pb-2 border-b border-black/5">
                  <span className="text-xs font-bold tracking-wider text-[#25202E] uppercase">
                    {rec.period}
                  </span>
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-2xs ${rec.badgeColor}`}>
                    {rec.phase}
                  </span>
                </div>

                <h3 className="font-serif text-lg text-[#25202E] font-medium leading-snug min-h-[48px] sm:min-h-[52px] flex items-start">
                  {rec.title}
                </h3>
                <p className="text-xs text-[#554B64] leading-relaxed flex-1">
                  {rec.desc}
                </p>
              </div>

              {/* Surgeon Guidance White Box: Fixed Min-Height and Pinned to Bottom for 100% Alignment */}
              <div className="mt-4 p-3.5 rounded-xl bg-white/90 border border-white/80 shadow-2xs flex flex-col justify-start min-h-[96px] sm:min-h-[105px]">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#25202E] block mb-1">
                  💡 Surgeon Guidance:
                </span>
                <p className="text-[11px] text-[#554B64] leading-relaxed">
                  {rec.tip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SECTION 4: RECOMMENDED BEST PRACTICES & PRECAUTIONS (SEPARATE DEDICATED SECTION) ─── */}
      <section className="space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8A88E]/20 border border-[#E8A88E]/35 text-[10.5px] font-bold tracking-[0.2em] text-[#B8684D] uppercase">
            <span>✦</span>
            <span>POST-OPERATIVE CARE • PATIENT SAFEGUARDS</span>
            <span>✦</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#221E2A] font-normal leading-tight">
            Recommended Best Practices &{' '}
            <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
              Precautions
              <span className="inline-block text-[#9683B5]/70 text-xs ml-1.5 -mt-3">✦</span>
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#675F72] leading-relaxed">
            Essential surgical safeguards and post-operative instructions recommended by Dr. Chintan Gujarathi to protect your incisions and ensure smooth recovery.
          </p>
        </div>

        {/* Colorful Do's & Don'ts Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Do's Card: Soft Lilac */}
          <div className="bg-gradient-to-br from-[#F8F2FC] to-[#F1E4F8] border border-[#DEC9ED] rounded-[26px] p-6 sm:p-8 space-y-4 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-[#DFCDEE]">
                <span className="w-7 h-7 rounded-full bg-[#9784B4] text-white flex items-center justify-center text-xs font-bold shadow-2xs">
                  ✓
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-[#25202E] font-medium">
                  Recommended Best Practices (Do&apos;s)
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#4A4056]">
                {dos.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9784B4] shrink-0 mt-2" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-3 border-t border-[#DFCDEE]/60 text-[11px] text-[#7A6E89] font-medium">
              Verified clinical protocols • Dr. Chintan Gujarathi
            </div>
          </div>

          {/* Don'ts Card: Soft Peach */}
          <div className="bg-gradient-to-br from-[#FFF6F2] to-[#FCEADE] border border-[#F8D0BD] rounded-[26px] p-6 sm:p-8 space-y-4 shadow-xs flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-[#F7DACB]">
                <span className="w-7 h-7 rounded-full bg-[#B8684D] text-white flex items-center justify-center text-xs font-bold shadow-2xs">
                  ✕
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-[#25202E] font-medium">
                  Precautions & Safeguards (Don&apos;ts)
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#4A4056]">
                {donts.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8684D] shrink-0 mt-2" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-3 border-t border-[#F7DACB]/60 text-[11px] text-[#7A6E89] font-medium">
              Important precautions to safeguard tissue microcirculation
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: FREQUENTLY ASKED QUESTIONS (COLORFUL ACCORDION CARDS) ─── */}
      <section className="space-y-10">
        {/* Single Centered Heading with Two-Color Brand Styling */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#221E2A] font-normal leading-tight">
            Frequently Asked{' '}
            <span className="font-serif italic font-normal text-[#9683B5] inline-flex items-center">
              Questions
              <span className="inline-block text-[#9683B5]/70 text-xs ml-1.5 -mt-3">✦</span>
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#675F72] leading-relaxed">
            Essential clinical answers on surgical safety, scars, and recovery in Pune.
          </p>
        </div>

        {/* Colorful Accordion Cards */}
        <div className="max-w-3xl mx-auto space-y-3">
          {data.faqs.map((faq, fi) => {
            const isOpen = openFaq === fi;
            return (
              <div
                key={fi}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden shadow-2xs ${
                  isOpen
                    ? 'border-[#9784B4] bg-gradient-to-r from-white via-[#FAF6FD] to-[#F6EDF9]'
                    : 'border-[#E2D4EB] bg-white hover:border-[#CBBBDC]'
                }`}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : fi)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-[#25202E] hover:text-[#9784B4] transition-colors"
                >
                  <span>{faq.q}</span>
                  <span
                    className={`w-8 h-8 rounded-full border flex items-center justify-center text-xs shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 bg-[#9784B4] text-white border-[#9784B4]'
                        : 'bg-[#FAF7FC] text-[#9784B4] border-[#EDE6F5]'
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#554B64] leading-relaxed border-t border-[#F0E6F7]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── SECTION 5: CONSULTATION CTA (LUXURY BANNER WITH LIGHTER AMETHYST GRADIENT) ─── */}
      <section className="relative rounded-[36px] bg-gradient-to-br from-[#2D223B] via-[#433257] to-[#241C2E] text-white p-8 sm:p-12 lg:p-14 shadow-2xl border border-white/15 max-w-4xl mx-auto space-y-6 text-center overflow-hidden">
        {/* Subtle luminous center glow to add gentle depth and richness without losing dark purple luxury */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[320px] bg-gradient-to-r from-[#9784B4]/25 via-[#B799D8]/20 to-[#E8A88E]/15 blur-3xl pointer-events-none rounded-full" />

        <div className="relative z-10 space-y-3">
          <h2 className="font-serif text-2xl sm:text-4xl text-white font-normal leading-tight">
            Schedule Your Consultation with Dr. Chintan Gujarathi
          </h2>
          <p className="text-xs sm:text-sm text-white/85 leading-relaxed max-w-xl mx-auto">
            Available for personal clinical consultations and surgical assessment at premier accredited tertiary hospitals in Pune:
          </p>

          {/* Hospital Venues */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-left max-w-2xl mx-auto">
            <a
              href="https://www.google.com/maps/place/Dr.+Chintan+Gujarathi+%E2%80%93+Plastic+Surgeon,+Cosmetic+Surgeon+%26+Reconstructive+Surgeon+in+Pune/@18.5364568,73.8804871,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c15549ee24d1:0xad0ff4399a4c0f2b!8m2!3d18.5364568!4d73.8804871!16s%2Fg%2F11njryynkj?hl=en&entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-white/12 hover:bg-white/20 backdrop-blur-xs border border-white/20 text-xs text-white/95 shadow-2xs transition-all group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#FFE4D6] uppercase tracking-wider">Sassoon Road Center</span>
                <span className="text-[11px] text-white/70 group-hover:text-white">Map ↗</span>
              </div>
              <strong className="block text-sm font-semibold text-white mt-1">Ruby Hall Clinic</strong>
              <p className="text-[11px] text-white/80 mt-0.5 leading-snug">
                102, 1st Floor, Cancer Bldg, Sasoon Rd, Pune 411001
              </p>
            </a>
            <a
              href="https://www.google.com/maps/place/Dr.+Chintan+S.+Gujarathi+%7C+Plastic,+Reconstructive+and+Cosmetic+Surgeon+in+Kharadi/@18.5410783,73.935716,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c15214f8c96b:0xcaef3dc60e93f0d2!8m2!3d18.5410783!4d73.935716!16s%2Fg%2F11nr3bzgck?hl=en&entry=ttu&g_ep=EgoyMDI2MDkwOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-2xl bg-white/12 hover:bg-white/20 backdrop-blur-xs border border-white/20 text-xs text-white/95 shadow-2xs transition-all group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#FFE4D6] uppercase tracking-wider">Kharadi Center</span>
                <span className="text-[11px] text-white/70 group-hover:text-white">Map ↗</span>
              </div>
              <strong className="block text-sm font-semibold text-white mt-1">Manipal Hospital</strong>
              <p className="text-[11px] text-white/80 mt-0.5 leading-snug">
                22/2A, Mundwa -Kharadi Rd, nr Nyati Empire, Kharadi 411014
              </p>
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="tel:07977429688"
            className="px-8 py-3.5 rounded-full bg-[#9784B4] hover:bg-[#8571A3] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md hover:-translate-y-0.5"
          >
            Call: 079774 29688
          </a>
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-full bg-white text-[#25202E] hover:bg-[#FAF6F0] text-xs font-bold tracking-wider uppercase transition-all shadow-md hover:-translate-y-0.5"
          >
            Inquire Online →
          </Link>
        </div>
      </section>

    </div>
  );
}
