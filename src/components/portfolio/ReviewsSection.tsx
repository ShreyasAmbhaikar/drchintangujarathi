'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Review {
  id: string;
  name: string;
  avatarImage: string;
  avatarText: string;
  isLocalGuide?: boolean;
  procedure: string;
  location: string;
  hospital: string;
  rating: number;
  date: string;
  text: string;
  cardBg: string;
  borderColor: string;
  badgeBg: string;
  badgeText: string;
}

const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Nikhil Kulkarni',
    avatarImage: '/images/reviews/nikhil-kulkarni.png',
    avatarText: 'NK',
    isLocalGuide: true,
    procedure: 'Geriatric Reconstructive Care',
    location: 'Pune',
    hospital: 'Ruby Hall Clinic',
    rating: 5,
    date: 'Verified Patient',
    text: 'Dr. Chintan Gujrathi Sir guided is through all the process of surgery and today my mother who is 74 years old is well and fine. Dr. Chintan is a sincere plastic surgeon and anyone who need his expertise should consult him. He is the best in Pune. God Bless',
    cardBg: 'from-[#FAF6FE] via-[#F4EBF9] to-[#ECE0F5]',
    borderColor: 'border-[#DCC8ED]',
    badgeBg: 'bg-[#9784B4]/18',
    badgeText: 'text-[#644983]',
  },
  {
    id: '2',
    name: 'G K',
    avatarImage: '/images/reviews/gk.png',
    avatarText: 'GK',
    isLocalGuide: false,
    procedure: '1.3 kg Lipoma Excision Surgery',
    location: 'Pune',
    hospital: 'Ruby Hall Clinic',
    rating: 5,
    date: 'Feb 16, 2026',
    text: "I had a lipoma on my right leg which was around 1.3 kg in weight. Dr Gujarati & his team did the surgery and removed the growth on Feb 16 2026 in Ruby Hall hospital. A very good job has been done & I've completely recovered & doing all normal daily activities without any problem. Thank you Dr for a wonderful post care & help.",
    cardBg: 'from-[#FFF8F4] via-[#FDF1EA] to-[#F7E4D9]',
    borderColor: 'border-[#ECCBC0]',
    badgeBg: 'bg-[#B8684D]/25',
    badgeText: 'text-[#87452D]',
  },
  {
    id: '3',
    name: 'Somnath Garudkar',
    avatarImage: '/images/reviews/somnath-garudkar.png',
    avatarText: 'SG',
    isLocalGuide: false,
    procedure: 'Complex Trauma Reconstruction',
    location: 'Pune',
    hospital: 'Ruby Hall Clinic',
    rating: 5,
    date: 'Verified Patient',
    text: "Hi sir, really really thanks for recovering my father. His condition was very serious, but after meeting Dr. Chintan sir and after plastic surgery operation, my father has improved to health and is in total fit & fine condition. Chintan sir, really really thanks.",
    cardBg: 'from-[#F3F7FD] via-[#EAF1FA] to-[#DFEAF8]',
    borderColor: 'border-[#C5D8F2]',
    badgeBg: 'bg-[#5873AB]/20',
    badgeText: 'text-[#365187]',
  },
  {
    id: '4',
    name: 'Pooja Gawande',
    avatarImage: '/images/reviews/pooja-gawande.png',
    avatarText: 'PG',
    isLocalGuide: true,
    procedure: 'Corrective Plastic Surgery',
    location: 'Pune',
    hospital: 'Ruby Hall Clinic',
    rating: 5,
    date: 'Dec 2025',
    text: 'I was suffering from 2 yrs and multiple doctors but Dr Chintan suggested plastic surgery and I am good now got operated in December 2025 and perfectly fine now. Thank you so much Dr, I am back to normal life now. Highly recommend for any consultation!',
    cardBg: 'from-[#F3FAF5] via-[#EBF7EF] to-[#DFF3E5]',
    borderColor: 'border-[#C2E5CD]',
    badgeBg: 'bg-[#478262]/20',
    badgeText: 'text-[#2D5D42]',
  },
  {
    id: '5',
    name: 'Tina Chinoy',
    avatarImage: '/images/reviews/tina-chinoy.png',
    avatarText: 'TC',
    isLocalGuide: true,
    procedure: 'Hand Surgery (Finger Cyst Excision)',
    location: 'Pune',
    hospital: 'Manipal Hospital',
    rating: 5,
    date: 'Verified Patient',
    text: 'I visited Dr. Chintan Gujarathi for a cyst on my left index finger. From diagnosis to surgery to post-op care, he was extremely efficient and thorough. He explained the entire procedure clearly and made me feel comfortable at every step. The treatment and follow-up care were excellent. Highly recommend him for trusted medical care!',
    cardBg: 'from-[#FAF6FE] via-[#F3EAF8] to-[#ECE0F4]',
    borderColor: 'border-[#DAC6EC]',
    badgeBg: 'bg-[#8470A3]/18',
    badgeText: 'text-[#584174]',
  },
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesVisible, setSlidesVisible] = useState(3);

  useEffect(() => {
    const updateSlides = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth < 640) {
        setSlidesVisible(1);
      } else if (window.innerWidth < 1024) {
        setSlidesVisible(2);
      } else {
        setSlidesVisible(3);
      }
    };

    updateSlides();
    window.addEventListener('resize', updateSlides);
    return () => window.removeEventListener('resize', updateSlides);
  }, []);

  const maxIndex = Math.max(0, REVIEWS.length - slidesVisible);

  // Auto-slide timer: smoothly advances every 3.2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3200);
    return () => clearInterval(timer);
  }, [maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const getTranslateX = () => {
    if (slidesVisible === 3) {
      return `translateX(calc(-${currentIndex * 33.3333}% - ${currentIndex * 6.667}px))`;
    } else if (slidesVisible === 2) {
      return `translateX(calc(-${currentIndex * 50}% - ${currentIndex * 10}px))`;
    } else {
      return `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 20}px))`;
    }
  };

  return (
    <section id="reviews" className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      
      {/* Header: Section Eyebrow, Heading & Navigation Arrows */}
      <div className="flex items-end justify-between gap-6 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#8C8176] uppercase">
              PATIENT TESTIMONIALS
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#B8684D] bg-[#B8684D]/10 px-2.5 py-0.5 rounded-full border border-[#B8684D]/20">
              ★ 5.0 Rating
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#2A2533] leading-tight">
            Words from <span className="font-serif italic text-[#9F8EB9]">our patients.</span>
          </h2>
          <p className="mt-2 text-[#675F72] text-xs sm:text-sm max-w-xl">
            Verified patient feedback from cosmetic and reconstructive procedures performed at Ruby Hall Clinic and Manipal Hospital.
          </p>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrev}
            aria-label="Previous review"
            className="w-10 h-10 rounded-full border border-[#EDE6F5] bg-white hover:bg-[#F4EFF8] text-[#25202E] flex items-center justify-center transition-all shadow-xs hover:scale-105 cursor-pointer"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            aria-label="Next review"
            className="w-10 h-10 rounded-full border border-[#EDE6F5] bg-white hover:bg-[#F4EFF8] text-[#25202E] flex items-center justify-center transition-all shadow-xs hover:scale-105 cursor-pointer"
          >
            →
          </button>
        </div>
      </div>

      {/* Slider Viewport with 3 Visible Rectangular Dual-Tone Luxury Cards */}
      <div className="relative overflow-hidden py-4 sm:py-6">
        <div
          className="flex transition-transform duration-700 ease-in-out gap-5"
          style={{
            transform: getTranslateX(),
          }}
        >
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className={`w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.3333%-13.333px)] shrink-0 bg-gradient-to-br ${review.cardBg} rounded-[24px] border ${review.borderColor} p-6 sm:p-6.5 shadow-[0_4px_20px_-6px_rgba(151,132,180,0.12)] hover:shadow-[0_10px_28px_-6px_rgba(151,132,180,0.2)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                {/* Top Row: Circular Avatar + Details + Rating */}
                <div className="flex items-start justify-between gap-3 pb-3.5 border-b border-black/8">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-black/10 shadow-xs bg-white">
                      <Image
                        src={review.avatarImage}
                        alt={review.name}
                        fill
                        className="object-cover"
                        sizes="44px"
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <h3 className="font-semibold text-sm text-[#2A2533] truncate">
                          {review.name}
                        </h3>
                        {review.isLocalGuide && (
                          <span className="inline-flex items-center gap-1 text-[9px] font-bold text-[#C26100] bg-[#FFF3E0] px-2 py-0.5 rounded-full border border-[#FFB74D]/50 shadow-2xs shrink-0">
                            <svg className="w-2.5 h-2.5 fill-[#E65100]" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                            Local Guide
                          </span>
                        )}
                      </div>
                      <div className="text-[10.5px] text-[#7E738D] font-medium mt-0.5 flex items-center gap-1">
                        <span className="text-[#25D366] font-bold">✓</span>
                        <span>Verified Patient</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end shrink-0">
                    <div className="flex items-center gap-0.5 text-[#E37400] text-xs">
                      {'★'.repeat(review.rating)}
                    </div>
                    <span className="text-[9.5px] text-[#7A6E8C] mt-0.5 font-medium">
                      5.0 Rating
                    </span>
                  </div>
                </div>

                {/* Review Text with Decorative Opening Quote */}
                <div className="relative mt-3.5">
                  <span className="font-serif text-3xl text-[#9F8EB9]/40 leading-none absolute -top-2.5 -left-1 select-none">
                    “
                  </span>
                  <p className="pl-4 text-xs sm:text-[13px] text-[#3D3349] leading-[1.65] italic min-h-[105px] flex items-center">
                    {review.text}
                  </p>
                </div>
              </div>

              {/* Footer: Google Verified Badge & Date */}
              <div className="mt-3.5 pt-3 border-t border-black/8 flex items-center justify-between gap-2">
                <span className="text-[10.5px] font-semibold text-[#5A4F6B] flex items-center gap-1.5">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                  <span>Google Review</span>
                </span>

                <span className="text-[10px] text-[#8C8099] font-medium shrink-0">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Dot Indicators */}
      <div className="flex items-center justify-center gap-2 mt-2">
        {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={() => setCurrentIndex(dotIdx)}
            aria-label={`Go to slide ${dotIdx + 1}`}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentIndex === dotIdx
                ? 'w-7 bg-[#9F8EB9]'
                : 'w-2 bg-[#D9CDE3] hover:bg-[#B9A7C9]'
            }`}
          />
        ))}
      </div>

    </section>
  );
}
