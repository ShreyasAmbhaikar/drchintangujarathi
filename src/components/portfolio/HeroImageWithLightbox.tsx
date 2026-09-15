'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ImageLightboxModal from '@/components/portfolio/ImageLightboxModal';

interface HeroImageWithLightboxProps {
  src: string;
  alt: string;
  badge: string;
  title: string;
  caption?: string;
}

export default function HeroImageWithLightbox({
  src,
  alt,
  badge,
  title,
  caption,
}: HeroImageWithLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px] rounded-[28px] overflow-hidden border-2 border-white shadow-lg bg-[#FAF8FC] group cursor-pointer"
        title="Click to view full screen"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 550px"
          className="object-contain p-2 group-hover:scale-105 transition-transform duration-700"
          priority
        />
        
        {/* Bottom Bar: Badge and Fullscreen Icon */}
        <div className="absolute inset-x-3 bottom-3 flex items-center justify-between pointer-events-none z-10">
          <div className="bg-[#25202E]/85 backdrop-blur-md text-white text-[11px] font-medium px-3.5 py-1.5 rounded-full border border-white/20 shadow-xs">
            ✦ {badge} • Clinical Framework
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(true);
            }}
            className="w-8 h-8 rounded-lg bg-white/95 hover:bg-white text-[#25202E] hover:text-[#9784B4] flex items-center justify-center border border-gray-200 shadow-md hover:shadow-lg backdrop-blur-md pointer-events-auto transition-all group-hover:scale-110 cursor-pointer"
            title="Full screen view"
            aria-label="Full screen view"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
            </svg>
          </button>
        </div>
      </div>

      <ImageLightboxModal
        isOpen={isOpen}
        imageSrc={src}
        imageAlt={alt}
        title={title}
        caption={caption || `${title} — Anatomical & Clinical Framework`}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
