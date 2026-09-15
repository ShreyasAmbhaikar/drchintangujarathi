'use client';

import React, { useState, useEffect } from 'react';

interface Review {
  id: string;
  name: string;
  avatarBg: string;
  avatarText: string;
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
    name: 'Sunita R.',
    avatarBg: 'bg-[#9784B4]',
    avatarText: 'SR',
    procedure: 'Deep-Plane Facelift & Neck Lift',
    location: 'Kalyani Nagar, Pune',
    hospital: 'Ruby Hall Clinic',
    rating: 5,
    date: 'Verified Patient (Age 52)',
    text: 'Undergoing a Deep-Plane Facelift with Dr. Chintan Gujarathi was the best choice I have ever made. My jawline and neck look sculpted like they did 15 years ago, yet my smile and expressions remain 100% natural. No tight or pulled look at all. The incisions around my ears are completely invisible.',
    cardBg: 'from-[#FAF6FE] via-[#F4EBF9] to-[#ECE0F5]',
    borderColor: 'border-[#DCC8ED]',
    badgeBg: 'bg-[#9784B4]/18',
    badgeText: 'text-[#644983]',
  },
  {
    id: '2',
    name: 'Rahul K.',
    avatarBg: 'bg-[#B8684D]',
    avatarText: 'RK',
    procedure: 'Gynecomastia Correction',
    location: 'Kharadi, Pune',
    hospital: 'Ruby Hall Clinic',
    rating: 5,
    date: 'Verified Patient',
    text: 'Dr. Chintan Gujarathi is exceptionally skilled and compassionate. I had gynecomastia surgery at Ruby Hall Clinic and the results exceeded all expectations. The chest contour is completely flat, masculine, and natural with virtually invisible scars. Flawless recovery and attentive follow-up care.',
    cardBg: 'from-[#FFF8F4] via-[#FDF1EA] to-[#F7E4D9]',
    borderColor: 'border-[#ECCBC0]',
    badgeBg: 'bg-[#B8684D]/25',
    badgeText: 'text-[#87452D]',
  },
  {
    id: '3',
    name: 'Priyanka M.',
    avatarBg: 'bg-[#5873AB]',
    avatarText: 'PM',
    procedure: 'Structural Rhinoplasty',
    location: 'Sassoon Rd, Pune',
    hospital: 'Ruby Hall Clinic',
    rating: 5,
    date: 'Verified Patient',
    text: 'After consulting three surgeons in Pune, choosing Dr. Chintan was the best decision. He explained the surgical vectors and anatomical symmetry in detail. My nose looks beautifully balanced and natural, and breathing is so much better. Truly an artist with the scalpel.',
    cardBg: 'from-[#F3F7FD] via-[#EAF1FA] to-[#DFEAF8]',
    borderColor: 'border-[#C5D8F2]',
    badgeBg: 'bg-[#5873AB]/20',
    badgeText: 'text-[#365187]',
  },
  {
    id: '4',
    name: 'Amitabh S.',
    avatarBg: 'bg-[#8470A3]',
    avatarText: 'AS',
    procedure: 'Microvascular Flap Surgery',
    location: 'Pune',
    hospital: 'Tata Fellow / Ruby Hall',
    rating: 5,
    date: 'Verified Patient',
    text: 'His super-specialty training from Tata Memorial Hospital is evident in every interaction. Complex tissue reconstruction handled with utmost precision and calm confidence. My family and I are deeply grateful to Dr. Gujarathi for restoring my life.',
    cardBg: 'from-[#FAF6FE] via-[#F3EAF8] to-[#ECE0F4]',
    borderColor: 'border-[#DAC6EC]',
    badgeBg: 'bg-[#8470A3]/18',
    badgeText: 'text-[#584174]',
  },
  {
    id: '5',
    name: 'Meera K.',
    avatarBg: 'bg-[#478262]',
    avatarText: 'MK',
    procedure: 'Endoscopic Brow Lift & Eyelids',
    location: 'Koregaon Park, Pune',
    hospital: 'Manipal Hospital',
    rating: 5,
    date: 'Verified Patient (Age 47)',
    text: 'My heavy upper eyelids and tired brow look were completely refreshed through tiny keyhole incisions hidden inside the hairline. Everyone tells me I look well-rested and vibrant, without knowing I had surgery! Dr. Gujarathi’s gentle demeanor put me at complete ease.',
    cardBg: 'from-[#F3FAF5] via-[#EBF7EF] to-[#DFF3E5]',
    borderColor: 'border-[#C2E5CD]',
    badgeBg: 'bg-[#478262]/20',
    badgeText: 'text-[#2D5D42]',
  },
  {
    id: '6',
    name: 'Neha D.',
    avatarBg: 'bg-[#D99B82]',
    avatarText: 'ND',
    procedure: 'VASER 360° Body Contouring',
    location: 'Kalyani Nagar, Pune',
    hospital: 'Ruby Hall Clinic',
    rating: 5,
    date: 'Verified Patient',
    text: 'Very humble doctor who gives genuine, ethical medical advice without pushing unnecessary procedures. The recovery protocol was smooth, and the nursing staff at Ruby Hall Clinic was world-class. 5 stars all the way!',
    cardBg: 'from-[#FFF8F5] via-[#FCF0E8] to-[#F5E2D5]',
    borderColor: 'border-[#EACCC0]',
    badgeBg: 'bg-[#D99B82]/25',
    badgeText: 'text-[#87452D]',
  },
  {
    id: '7',
    name: 'Dr. Sameer V.',
    avatarBg: 'bg-[#7E6B9E]',
    avatarText: 'SV',
    procedure: 'Hand & Scar Reconstruction',
    location: 'Maharashtra',
    hospital: 'Manipal Hospital',
    rating: 5,
    date: 'Doctor Colleague',
    text: 'As a fellow surgeon, I have witnessed Dr. Chintan’s surgical finesse in the operating theatre. His microvascular skills, tissue handling, and patient dedication make him one of the finest plastic surgeons in Western India.',
    cardBg: 'from-[#FAF6FE] via-[#F5ECF9] to-[#ECE0F5]',
    borderColor: 'border-[#DCC8ED]',
    badgeBg: 'bg-[#7E6B9E]/18',
    badgeText: 'text-[#533E72]',
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
              className={`w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.3333%-13.333px)] shrink-0 bg-gradient-to-br ${review.cardBg} rounded-[22px] border ${review.borderColor} p-5 sm:p-6 shadow-[0_4px_20px_-6px_rgba(151,132,180,0.12)] hover:shadow-[0_10px_28px_-6px_rgba(151,132,180,0.2)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                {/* Top Row: Circular Avatar + Details + Rating */}
                <div className="flex items-center justify-between gap-3 pb-3.5 border-b border-black/8">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full ${review.avatarBg} text-white font-semibold text-xs flex items-center justify-center shadow-xs shrink-0`}
                    >
                      {review.avatarText}
                    </div>

                    <div>
                      <h3 className="font-semibold text-sm text-[#2A2533]">
                        {review.name}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[11px] text-[#6D6377]">
                          {review.location}
                        </span>
                        <span className="text-[7px] text-[#9F8EB9]">●</span>
                        <span className="text-[11px] text-[#7A6498] font-medium">
                          {review.hospital.split('/')[0]}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <div className="flex items-center gap-0.5 text-[#B8684D] text-xs">
                      {'★'.repeat(review.rating)}
                    </div>
                    <span className="text-[10px] text-[#7A6E8C] mt-0.5 font-medium">
                      5.0 Rating
                    </span>
                  </div>
                </div>

                {/* Review Text with Decorative Opening Quote */}
                <div className="relative mt-3.5">
                  <span className="font-serif text-3xl text-[#9F8EB9]/40 leading-none absolute -top-2.5 -left-1 select-none">
                    “
                  </span>
                  <p className="pl-4 text-xs sm:text-[13px] text-[#3D3349] leading-relaxed italic line-clamp-4">
                    {review.text}
                  </p>
                </div>
              </div>

              {/* Footer: Procedure Tag & Verified Badge */}
              <div className="mt-4 pt-3 border-t border-black/8 flex items-center justify-between gap-2">
                <span className={`text-[11px] font-semibold tracking-wider ${review.badgeText} ${review.badgeBg} px-2.5 py-0.5 rounded-full border border-black/5 whitespace-nowrap`}>
                  {review.procedure}
                </span>

                <span className="text-[11px] text-[#554B64] font-medium flex items-center gap-1.5 shrink-0">
                  <span className="text-[#25D366]">✓</span>
                  <span>{review.date}</span>
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
