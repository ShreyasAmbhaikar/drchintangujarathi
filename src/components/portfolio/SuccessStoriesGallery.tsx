'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ImageLightboxModal from './ImageLightboxModal';

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  aspectClass: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'pinna-reconstruction-1',
    title: 'Pinna Reconstruction Surgery',
    category: 'Reconstructive Surgery',
    imageSrc: '/images/success-stories/case-pinna-ear-reconstruction.webp',
    imageAlt: 'Pinna Reconstruction Surgery Before and After by Dr. Chintan Gujarathi Pune',
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'hand-finger-reconstruction-1',
    title: 'Hand & Finger Tip Reconstruction',
    category: 'Hand & Microvascular',
    imageSrc: '/images/success-stories/case-hand-finger-reconstruction-1.webp',
    imageAlt: 'Hand and Finger Tip Reconstruction Before and After by Dr. Chintan Gujarathi Pune',
    aspectClass: 'aspect-[2/3]',
  },
  {
    id: 'rhinoplasty-case-1',
    title: 'Aesthetic Rhinoplasty Profile',
    category: 'Facial Plastic Surgery',
    imageSrc: '/images/before-after/rhinoplasty-before-after.webp',
    imageAlt: 'Rhinoplasty Surgery Before and After by Dr. Chintan Gujarathi Pune',
    aspectClass: 'aspect-[4/5]',
  },
  {
    id: 'hand-finger-reconstruction-2',
    title: 'Multi-Digit Hand Reconstruction',
    category: 'Trauma & Reconstruction',
    imageSrc: '/images/success-stories/case-hand-finger-reconstruction-2.webp',
    imageAlt: 'Complex Multi-Digit Hand Reconstruction Before and After by Dr. Chintan Gujarathi Pune',
    aspectClass: 'aspect-[3/4]',
  },
  {
    id: 'pinna-reconstruction-2',
    title: 'Pinna Reconstruction — Ear Symmetry',
    category: 'Reconstructive Surgery',
    imageSrc: '/images/success-stories/case-pinna-ear-reconstruction.webp',
    imageAlt: 'Pinna Reconstruction Ear Symmetry Before and After Case',
    aspectClass: 'aspect-[16/10]',
  },
  {
    id: 'hand-finger-reconstruction-3',
    title: 'Fingertip Tissue Restoration',
    category: 'Hand & Microvascular',
    imageSrc: '/images/success-stories/case-hand-finger-reconstruction-1.webp',
    imageAlt: 'Fingertip Soft Tissue Restoration Before and After Case',
    aspectClass: 'aspect-[2/3]',
  },
  {
    id: 'rhinoplasty-case-2',
    title: 'Preservation Rhinoplasty Contour',
    category: 'Facial Plastic Surgery',
    imageSrc: '/images/before-after/rhinoplasty-before-after.webp',
    imageAlt: 'Preservation Rhinoplasty Profile View Before and After Case',
    aspectClass: 'aspect-square',
  },
  {
    id: 'hand-finger-reconstruction-4',
    title: 'Acute Hand Injury Soft Tissue Repair',
    category: 'Trauma & Reconstruction',
    imageSrc: '/images/success-stories/case-hand-finger-reconstruction-2.webp',
    imageAlt: 'Acute Hand Injury Repair Before and After Case',
    aspectClass: 'aspect-[3/4]',
  },
  {
    id: 'pinna-reconstruction-3',
    title: 'Auricular Cartilage Reconstruction',
    category: 'Reconstructive Surgery',
    imageSrc: '/images/success-stories/case-pinna-ear-reconstruction.webp',
    imageAlt: 'Auricular Cartilage Reconstruction Before and After Case',
    aspectClass: 'aspect-[4/5]',
  },
];

export default function SuccessStoriesGallery() {
  const [activeLightboxImage, setActiveLightboxImage] = useState<{
    src: string;
    alt: string;
    title: string;
  } | null>(null);

  return (
    <>
      {/* Dynamic Brick-Style Masonry Grid (3 Columns) */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 sm:gap-8 [column-fill:_balance]">
        {GALLERY_ITEMS.map((item) => (
          <div
            key={item.id}
            onClick={() =>
              setActiveLightboxImage({
                src: item.imageSrc,
                alt: item.imageAlt,
                title: item.title,
              })
            }
            className="mb-6 sm:mb-8 break-inside-avoid group relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-[#E8DFEE]/80 shadow-[0_4px_20px_rgb(37,32,46,0.04)] hover:shadow-[0_16px_40px_rgb(37,32,46,0.12)] transition-all duration-300 cursor-pointer hover:-translate-y-1.5 bg-[#FAF7FC]"
          >
            <div className={`relative w-full ${item.aspectClass} overflow-hidden`}>
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              {/* Bottom Dark Gradient for Legible Text Overlay (matches reference layout) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

              {/* Category Pill (Top-Left) */}
              <div className="absolute top-4 left-4 pointer-events-none">
                <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-[10px] font-bold tracking-wider uppercase text-white/95 border border-white/20 shadow-xs">
                  {item.category}
                </span>
              </div>

              {/* Click to Expand Icon Badge (Top-Right on Hover) */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="w-8 h-8 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center text-[#25202E] shadow-md">
                  <svg className="w-3.5 h-3.5 text-[#9784B4]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                </span>
              </div>

              {/* Text Caption Overlay (Bottom) */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white pointer-events-none">
                <h3 className="font-serif text-lg sm:text-xl font-normal leading-snug text-white group-hover:text-[#FFE4D6] transition-colors drop-shadow-sm">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-white/80 font-normal mt-1 drop-shadow-xs">
                  Dr. Chintan Gujarathi • Pune
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Image Lightbox Modal */}
      {activeLightboxImage && (
        <ImageLightboxModal
          isOpen={Boolean(activeLightboxImage)}
          imageSrc={activeLightboxImage.src}
          imageAlt={activeLightboxImage.alt}
          title={activeLightboxImage.title}
          caption="Dr. Chintan Gujarathi (MCh Plastic Surgery) — Verified Clinical Case"
          onClose={() => setActiveLightboxImage(null)}
        />
      )}
    </>
  );
}
