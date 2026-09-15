import React from 'react';
import Image from 'next/image';

export default function AnatomicalArtistrySection() {
  return (
    <section className="w-full max-w-[1240px] mx-auto px-6 sm:px-8 py-8 lg:py-10">
      <div className="bg-gradient-to-br from-[#F8F3FC] via-[#F4EDFA] to-[#EBE2F5] rounded-[28px] border border-[#DFCDEE] p-6 sm:p-8 lg:p-10 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Clear & Concise Surgical Precision Summary */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#7D649B] bg-[#7D649B]/10 px-3 py-1 rounded-full uppercase mb-3">
              Anatomical Precision
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#25202E] leading-snug">
              Deep-plane mastery for <span className="italic text-[#9784B4]">natural, lasting results.</span>
            </h2>

            <p className="mt-3 text-xs sm:text-sm text-[#5D536B] leading-relaxed">
              Dr. Chintan Gujarathi leverages advanced microvascular and deep-plane anatomical techniques. By repositioning structural musculature (SMAS) rather than stretching skin, results remain authentic, natural, and free of artificial tension.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3 w-full">
              <div className="bg-white/80 rounded-xl p-3.5 border border-black/5">
                <span className="text-xs font-semibold text-[#25202E] block">
                  Zero Skin Tension
                </span>
                <span className="text-[11px] text-[#6D6677] mt-0.5 block leading-tight">
                  Muscular vector repositioning
                </span>
              </div>
              <div className="bg-white/80 rounded-xl p-3.5 border border-black/5">
                <span className="text-xs font-semibold text-[#25202E] block">
                  Microvascular Optics
                </span>
                <span className="text-[11px] text-[#6D6677] mt-0.5 block leading-tight">
                  Sub-millimeter precision
                </span>
              </div>
            </div>
          </div>

          {/* Right: Large, Prominent 3D Medical Visual without Wasted Space */}
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-[#D5C2E6] bg-[#1E1926]">
              <Image
                src="/images/surgical-anatomy-3d.jpg"
                alt="3D Anatomical Precision Vectors — Dr. Chintan Gujarathi"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 600px"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-[#1E1926]/80 backdrop-blur-md border border-white/15 rounded-xl px-3.5 py-2 text-white flex items-center justify-between text-[11px]">
                <span className="font-medium text-white/90">
                  SMAS Vector Alignment & Musculoskeletal Planes
                </span>
                <span className="text-[#E8A88E] font-semibold">3D Visual</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
