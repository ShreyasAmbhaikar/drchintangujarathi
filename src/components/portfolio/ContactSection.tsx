import React from 'react';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/site-config';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full max-w-[1240px] mx-auto px-6 sm:px-8 py-10 lg:py-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        
        {/* Left Column: Headline */}
        <div className="lg:col-span-4 flex flex-col items-start">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#8C8176] uppercase">
            LET&apos;S CONNECT
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-[42px] font-normal leading-[1.15] text-[#2A2533]">
            Begin your
            <br />
            <span className="font-serif italic font-normal text-[#9F8EB9]">aesthetic</span>
            <br />
            transformation.
          </h2>
          <span className="text-[#E8A88E] text-2xl mt-2 select-none">✦</span>
        </div>

        {/* Middle Column: Clean Clinic Card */}
        <div className="lg:col-span-4">
          <div className="bg-[#FAF5EE] rounded-[26px] border border-[#EAE0D1] p-6 sm:p-7 flex flex-col gap-4 shadow-xs">
            <p className="text-xs text-[#675F72] font-medium leading-relaxed">
              Dr. Chintan Gujarathi conducts consultations and surgical procedures at leading tertiary hospitals in Pune:
            </p>

            <div className="space-y-3 text-xs pt-2 border-t border-[#EAE0D1]">
              <div className="flex items-start gap-2.5">
                <span className="text-sm text-[#9F8EB9]">📍</span>
                <div>
                  <h4 className="font-semibold text-[#2A2533] text-xs">
                    Ruby Hall Clinic (Sassoon Road Center)
                  </h4>
                  <p className="text-[11px] text-[#675F72] mt-0.5">
                    102, 1st Floor, Cancer Bldg, Sasoon Rd, Pune 411001
                  </p>
                  <p className="text-[10px] text-[#8C8176] mt-0.5 font-medium">
                    Mon – Sat: 9:00 AM – 9:00 PM | Sun: Closed
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-[#EAE0D1]/60">
                <span className="text-sm text-[#E8A88E]">🏥</span>
                <div>
                  <h4 className="font-semibold text-[#2A2533] text-xs">
                    Manipal Hospital, Kharadi
                  </h4>
                  <p className="text-[11px] text-[#675F72] mt-0.5">
                    Kharadi Bypass, Pune 411014 (Mon – Sat: 9:00 AM – 9:00 PM | Sun: Closed)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2 border-t border-[#EAE0D1]/60">
                <span className="text-sm text-[#9F8EB9]">📞</span>
                <a
                  href="tel:07977429688"
                  className="font-semibold text-[#2A2533] hover:text-[#9F8EB9] transition-colors"
                >
                  079774 29688
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Workspace Photo with Circular Floating "BOOK CONSULTATION" Button */}
        <div className="lg:col-span-4 relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[360px] aspect-[16/11] rounded-[24px] overflow-hidden bg-[#FAF5EE] shadow-sm border border-[#EAE0D1]">
            <Image
              src="/images/mariana-workspace.jpg"
              alt="Dr. Chintan Gujarathi Clinic & Consultation Lounge"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 360px"
            />
          </div>

          {/* Overlapping Circular Contact Badge (Matches Reference Image) */}
          <a
            href="tel:07977429688"
            aria-label="Book Consultation with Dr. Chintan Gujarathi"
            className="absolute -bottom-4 -right-2 sm:-right-4 w-24 h-24 rounded-full bg-[#9F8EB9] hover:bg-[#8B78A5] text-white p-2 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer"
          >
            <span className="text-[10px] font-semibold tracking-wider uppercase leading-tight">
              BOOK
              <br />
              NOW
            </span>
            <span className="text-xs mt-1 transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
