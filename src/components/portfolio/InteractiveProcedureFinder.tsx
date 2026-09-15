'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface AssessmentItem {
  id: string;
  concern: string;
  procedure: string;
  slug: string;
  duration: string;
  anesthesia: string;
  recovery: string;
  benefit: string;
  hospital: string;
}

const DOMAINS: {
  id: string;
  name: string;
  icon: string;
  items: AssessmentItem[];
}[] = [
  {
    id: 'face',
    name: 'Face & Neck Harmony',
    icon: '✦',
    items: [
      {
        id: 'nose',
        concern: 'Nasal Hump, Broad Tip or Breathing Difficulty',
        procedure: 'Custom Rhinoplasty & Septoplasty',
        slug: 'rhinoplasty',
        duration: '2 – 3 Hours',
        anesthesia: 'General Anesthesia',
        recovery: '7 – 10 Days',
        benefit: 'Refines nasal bridge, tip projection and corrects deviated septum for clear breathing and natural facial harmony.',
        hospital: 'Ruby Hall Clinic / Manipal Hospital',
      },
      {
        id: 'eyelids',
        concern: 'Heavy Upper Lids or Under-Eye Bags',
        procedure: 'Blepharoplasty (Eyelid Rejuvenation)',
        slug: 'blepharoplasty',
        duration: '1 – 1.5 Hours',
        anesthesia: 'Local + Sedation',
        recovery: '5 – 7 Days',
        benefit: 'Eliminates excess skin folds and fat puffiness around eyes for a rested, youthful expression without altering shape.',
        hospital: 'Ruby Hall Clinic OPD / Daycare',
      },
      {
        id: 'jowls',
        concern: 'Sagging Lower Face, Jowls & Loose Neck Skin',
        procedure: 'Deep-Plane Facelift & Platysmaplasty',
        slug: 'facelift',
        duration: '3.5 – 4.5 Hours',
        anesthesia: 'General Anesthesia',
        recovery: '10 – 14 Days',
        benefit: 'Suspends the deeper SMAS muscle layer to redefine jawline and neck contours without artificial skin tension.',
        hospital: 'Ruby Hall Clinic Sassoon Rd',
      },
    ],
  },
  {
    id: 'body',
    name: 'Body Contouring',
    icon: '⭐',
    items: [
      {
        id: 'male-chest',
        concern: 'Enlarged Male Chest / Gynecomastia',
        procedure: 'Gynecomastia Gland Excision + VASER Lipo',
        slug: 'gynecomastia',
        duration: '1.5 – 2 Hours',
        anesthesia: 'General Anesthesia',
        recovery: '3 – 5 Days',
        benefit: 'Removes glandular tissue and stubborn fat via discreet periareolar micro-incision for a sculpted, athletic chest.',
        hospital: 'Ruby Hall Clinic / Daycare Surgery',
      },
      {
        id: 'stubborn-fat',
        concern: 'Stubborn Abdominal, Flank or Back Fat',
        procedure: '360° High-Definition VASER Liposuction',
        slug: 'liposuction',
        duration: '2 – 3 Hours',
        anesthesia: 'General / Tumescent',
        recovery: '5 – 7 Days',
        benefit: 'Selectively emulsifies subcutaneous fat while sparing vessels and nerves, accentuating natural muscular anatomy.',
        hospital: 'Ruby Hall Clinic / Manipal Hospital',
      },
      {
        id: 'tummy-laxity',
        concern: 'Post-Pregnancy Muscle Separation & Loose Skin',
        procedure: 'Abdominoplasty (Tummy Tuck) & Rectus Plication',
        slug: 'abdominoplasty',
        duration: '2.5 – 3.5 Hours',
        anesthesia: 'General Anesthesia',
        recovery: '10 – 14 Days',
        benefit: 'Tightens stretched abdominal wall muscles and removes lower apron of redundant skin with low bikini-line scar.',
        hospital: 'Ruby Hall Clinic Inpatient Suite',
      },
    ],
  },
  {
    id: 'reconstructive',
    name: 'Reconstructive Microsurgery',
    icon: '🔬',
    items: [
      {
        id: 'cancer-defect',
        concern: 'Tissue Defect Following Cancer Resection',
        procedure: 'Microvascular Free Flap Reconstruction',
        slug: 'microvascular-surgery',
        duration: '4 – 7 Hours',
        anesthesia: 'General Anesthesia',
        recovery: 'Inpatient 5 – 7 Days',
        benefit: 'Transfers tissue with micro-vessel reconnection under operating microscope; Tata Memorial Hospital fellowship expertise.',
        hospital: 'Ruby Hall Clinic / Manipal Hospital',
      },
      {
        id: 'burn-scars',
        concern: 'Burn Contractures & Joint Movement Limitation',
        procedure: 'Scar Contracture Release & Local Flaps',
        slug: 'burns-reconstruction',
        duration: '2 – 3 Hours',
        anesthesia: 'General Anesthesia',
        recovery: '7 – 14 Days',
        benefit: 'Releases tight fibrous bands restricting neck, arm or finger movement, restoring mobility and cosmetic appearance.',
        hospital: 'Ruby Hall Clinic Plastic Surgery OT',
      },
    ],
  },
  {
    id: 'nonsurgical',
    name: 'Non-Surgical Rejuvenation',
    icon: '🍃',
    items: [
      {
        id: 'wrinkles',
        concern: 'Forehead Lines, Crow’s Feet or Square Jaw',
        procedure: 'Botox Neuromodulator Injections',
        slug: 'botox',
        duration: '20 – 30 Mins',
        anesthesia: 'Topical Numbing Cream',
        recovery: 'Zero Downtime',
        benefit: 'Softens dynamic facial muscle activity and slims broad masseter muscles with results lasting 4 to 6 months.',
        hospital: 'Ruby Hall Clinic OPD Suite',
      },
      {
        id: 'volume-loss',
        concern: 'Hollow Tear Troughs, Thin Lips or Flat Cheeks',
        procedure: 'Hyaluronic Acid Dermal Fillers',
        slug: 'dermal-fillers',
        duration: '30 – 45 Mins',
        anesthesia: 'Lidocaine Pre-mixed',
        recovery: 'Minimal (24 – 48 Hours)',
        benefit: 'Restores midface volume, enhances lip contour and fills deep nasolabial folds with immediate natural fullness.',
        hospital: 'Ruby Hall Clinic OPD Suite',
      },
    ],
  },
];

export default function InteractiveProcedureFinder() {
  const [selectedDomain, setSelectedDomain] = useState('face');
  const [selectedItem, setSelectedItem] = useState(DOMAINS[0].items[0]);

  const currentDomain = DOMAINS.find((d) => d.id === selectedDomain) || DOMAINS[0];

  const handleDomainChange = (domainId: string) => {
    setSelectedDomain(domainId);
    const domain = DOMAINS.find((d) => d.id === domainId);
    if (domain && domain.items.length > 0) {
      setSelectedItem(domain.items[0]);
    }
  };

  return (
    <section className="w-full max-w-[1280px] mx-auto px-6 sm:px-8 py-12 lg:py-16">
      <div className="bg-gradient-to-br from-[#F5EFFB] via-[#FAF3EC] to-[#F1E8F6] rounded-[36px] border border-[#E2D4EE] p-8 sm:p-12 lg:p-14 card-shadow">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold tracking-[0.24em] text-[#9784B4] uppercase">
            Interactive Clinical Tool
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-normal text-[#25202E]">
            Procedure <span className="font-serif italic text-[#9784B4]">Assessment Matcher</span>
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-[#6D6677] leading-relaxed">
            Select an anatomical domain and click your primary concern to explore surgical pathways, downtime expectations, and personalized clinical benefits.
          </p>
        </div>

        {/* Domain Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {DOMAINS.map((domain) => {
            const isActive = domain.id === selectedDomain;
            return (
              <button
                key={domain.id}
                onClick={() => handleDomainChange(domain.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? 'bg-[#25202E] text-white shadow-md scale-102'
                    : 'bg-white/80 hover:bg-white text-[#554B64] border border-[#EDE6F5]'
                }`}
              >
                <span className={isActive ? 'text-[#E8A88E]' : 'text-[#9784B4]'}>
                  {domain.icon}
                </span>
                <span>{domain.name}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Select Your Concern */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#7D649B] mb-1">
              Select Your Concern:
            </span>

            {currentDomain.items.map((item) => {
              const isSelected = item.id === selectedItem.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`text-left p-5 rounded-[20px] transition-all duration-300 border ${
                    isSelected
                      ? 'bg-white border-[#9784B4] shadow-md -translate-y-0.5'
                      : 'bg-white/60 hover:bg-white/90 border-[#EDE6F5] text-[#554B64]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-semibold text-sm text-[#25202E]">
                      {item.concern}
                    </p>
                    <span className={`text-base ${isSelected ? 'text-[#9784B4]' : 'text-[#D0C5E0]'}`}>
                      {isSelected ? '●' : '○'}
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs text-[#9784B4] font-medium">
                    → {item.procedure}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Surgical Solution Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[28px] border border-[#E2D4EE] p-7 sm:p-9 card-shadow">
              
              {/* Badge & Procedure Name */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#F0EAF7]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#9784B4]" />
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#9784B4] uppercase">
                    Recommended Surgical Approach
                  </span>
                </div>
                <span className="text-xs font-medium text-[#6D6677] bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#EDE6F5]">
                  {selectedItem.hospital}
                </span>
              </div>

              <h3 className="mt-5 text-2xl sm:text-3xl font-normal text-[#25202E]">
                {selectedItem.procedure}
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-[#554B64] leading-relaxed">
                {selectedItem.benefit}
              </p>

              {/* 3 Metric Badges: Duration, Anesthesia, Recovery */}
              <div className="mt-6 grid grid-cols-3 gap-3 p-4 rounded-[18px] bg-gradient-to-r from-[#F9F5FD] to-[#FDF8F3] border border-[#EDE6F5] text-center">
                <div>
                  <span className="text-[10px] uppercase font-semibold text-[#8C7A9F] tracking-wider block">
                    Duration
                  </span>
                  <span className="mt-1 font-semibold text-xs sm:text-sm text-[#25202E] block">
                    {selectedItem.duration}
                  </span>
                </div>
                <div className="border-x border-[#EDE6F5]">
                  <span className="text-[10px] uppercase font-semibold text-[#8C7A9F] tracking-wider block">
                    Anesthesia
                  </span>
                  <span className="mt-1 font-semibold text-xs sm:text-sm text-[#25202E] block">
                    {selectedItem.anesthesia}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-semibold text-[#8C7A9F] tracking-wider block">
                    Recovery
                  </span>
                  <span className="mt-1 font-semibold text-xs sm:text-sm text-[#25202E] block">
                    {selectedItem.recovery}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-5 border-t border-[#F0EAF7] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <Link
                  href={`/services/${selectedItem.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#25202E] hover:text-[#9784B4] transition-colors"
                >
                  <span>Learn Full Procedure Details</span>
                  <span>→</span>
                </Link>

                <a
                  href="tel:07977429688"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#9784B4] hover:bg-[#8470A3] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-sm"
                >
                  <span>Book Consultation For This</span>
                  <span>📞</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

