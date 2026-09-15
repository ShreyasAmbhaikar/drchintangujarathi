'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { SITE_CONFIG } from '@/lib/site-config';
import { Star, Quote, Sparkles } from 'lucide-react';

export default function PatientReviews() {
  return (
    <section id="reviews" className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-[1360px]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-300 border border-white/15 text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Patient Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold tracking-tight mb-4">
            Words of <span className="text-amber-300">Transformation</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
            Genuine experiences from patients who entrusted their aesthetic refinement and complex reconstructions to Dr. Chintan Gujarathi.
          </p>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {SITE_CONFIG.testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 h-full flex flex-col justify-between group hover:border-amber-400/40 transition-all duration-300 shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-800">
                    <Quote className="w-6 h-6 text-amber-400/70" />
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light italic mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <div>
                    <h5 className="text-sm font-heading font-bold text-white">
                      {t.name}
                    </h5>
                    <span className="text-[11px] text-neutral-500">
                      Verified Patient • Pune
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-amber-300 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
                    {t.procedure}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
