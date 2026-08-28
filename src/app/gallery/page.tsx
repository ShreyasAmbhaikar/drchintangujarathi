"use client";

import React, { useState } from "react";
import PageHeader from "@/components/landing/PageHeader";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  categoryLabel: string;
  title: string;
}

export default function GalleryPage() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const breadcrumbs = [
    { label: "Home", href: "/best-gynecologist-in-keshav-nagar/" },
    { label: "Gallery" },
  ];

  const galleryImages: GalleryImage[] = [
    {
      id: 9,
      src: "/images/clinic-charts.webp",
      alt: "Pregnancy Food Guide and Pelvic Floor Exercises wall charts at Dr. Poonam's Women's Clinic",
      categoryLabel: "Patient Education",
      title: "Pregnancy Care & Exercises Chart",
    },
    {
      id: 10,
      src: "/images/doctor-desk-portrait.webp",
      alt: "Dr. Poonam in her consultation room at Dr. Poonam's Women's Clinic",
      categoryLabel: "Consulting Suite",
      title: "Dr. Poonam's Consulting Office",
    },
    {
      id: 11,
      src: "/images/doctor-consultation-portrait-v2.webp",
      alt: "Dr. Poonam consultation desk and patient care at Dr. Poonam's Women's Clinic",
      categoryLabel: "Consulting Suite",
      title: "Dr. Poonam's Consultation Desk",
    },
    {
      id: 1,
      src: "/images/clinic-exterior.webp",
      alt: "Dr. Poonam's Women's Clinic Storefront and Entrance in Keshav Nagar",
      categoryLabel: "Clinic Exterior",
      title: "Clinic Storefront & Signage",
    },
    {
      id: 2,
      src: "/images/doctor-consultation-desk.webp",
      alt: "Dr. Poonam at her consultation desk inside the consulting suite",
      categoryLabel: "Consulting Suite",
      title: "Dr. Poonam's Consultation Room",
    },
    {
      id: 3,
      src: "/images/clinic-waiting-hall.webp",
      alt: "Patient waiting area and corridor inside Dr. Poonam's Women's Clinic",
      categoryLabel: "Waiting Lounge",
      title: "Clinic Waiting Corridor",
    },
    {
      id: 12,
      src: "/images/doctor-staff-portrait.webp",
      alt: "Dr. Poonam with clinic Patient in the consultation room at Dr. Poonam's Women's Clinic",
      categoryLabel: "Consulting Suite",
      title: "Dr. Poonam with Patient",
    },
  ];

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
    setIsZoomed(false);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        activeImageIndex === 0 ? galleryImages.length - 1 : activeImageIndex - 1
      );
      setIsZoomed(false);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex(
        activeImageIndex === galleryImages.length - 1 ? 0 : activeImageIndex + 1
      );
      setIsZoomed(false);
    }
  };

  return (
    <>
      <main>
        <PageHeader title="Our Clinic Gallery" breadcrumbs={breadcrumbs} />

        <section className="py-[80px] lg:py-[120px] bg-background">
          <div className="container mx-auto px-4 max-w-[1320px]">
            {/* Header intro */}
            <div className="text-center max-w-[750px] mx-auto mb-[50px] flex flex-col gap-4">
              <span className="text-accent text-[14px] font-bold tracking-widest uppercase">
                Take a Tour
              </span>
              <h2 className="text-[32px] md:text-[42px] font-bold text-primary leading-tight">
                Step Inside Dr. Poonam's Women's Clinic
              </h2>
              <p className="text-text text-[16px] leading-relaxed">
                Explore our state-of-the-art facilities in Keshav Nagar, Pune. We maintain a warm, welcoming, and sterile clinical environment equipped with premium diagnostic and patient care systems to make your visit safe and stress-free.
              </p>
            </div>

            {/* Masonry CSS Column Gallery */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance] box-border">
              {galleryImages.map((image, idx) => (
                <div
                  key={image.id}
                  onClick={() => openLightbox(idx)}
                  className="break-inside-avoid mb-6 group relative overflow-hidden rounded-[24px] border border-divider/10 shadow-sm cursor-zoom-in transition-all duration-500 hover:shadow-lg"
                >
                  {/* Image Element */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Dark Vignette Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300 z-10" />

                  {/* Absolute UI overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-end justify-between">
                    <div>
                      <h3 className="text-white font-bold text-[18px] leading-tight">
                        {image.title}
                      </h3>
                    </div>
                    
                    {/* Maximize Icon */}
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Consultation Ribbon */}
            <div className="mt-[60px] bg-secondary border border-divider/10 rounded-[24px] p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h4 className="font-bold text-[20px] text-primary mb-1">
                  Want to consult Dr. Poonam in person?
                </h4>
                <p className="text-text text-[15px]">
                  Book an appointment online or call us directly to schedule a clinic visit today.
                </p>
              </div>
              <a
                href="/contact-us"
                className="bg-accent text-white font-bold text-[15px] px-6 py-3 rounded-[12px] hover:bg-primary transition-all duration-300 shrink-0 shadow-sm"
              >
                Schedule Clinic Visit
              </a>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {activeImageIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm transition-all duration-300 cursor-zoom-out"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors duration-200 z-50"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Nav Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors duration-200 z-50"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Current Image Container */}
            <div 
              className="relative max-w-[95vw] max-h-[92vh] flex flex-col items-center justify-center z-40 select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-auto max-w-full max-h-[78vh] md:max-h-[83vh] rounded-[12px] scrollbar-thin">
                <img
                  src={galleryImages[activeImageIndex].src}
                  alt={galleryImages[activeImageIndex].alt}
                  onClick={() => setIsZoomed(!isZoomed)}
                  className={`object-contain shadow-2xl border border-white/10 transition-all duration-300 ${
                    isZoomed 
                      ? "max-w-none max-h-none w-[130vw] md:w-[110vw] cursor-zoom-out" 
                      : "max-w-full max-h-[78vh] md:max-h-[83vh] cursor-zoom-in"
                  }`}
                />
              </div>
              {/* Description strip at the bottom */}
              <div className="mt-4 text-center text-white/90 px-4 max-w-[700px] pointer-events-none">
                <p className="text-[15px] md:text-[18px] font-bold leading-snug">
                  {galleryImages[activeImageIndex].title}
                </p>
              </div>
            </div>

            {/* Right Nav Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors duration-200 z-50"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </main>
    </>
  );
}
