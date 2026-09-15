import React from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/site-config';
import { Phone, Mail, MapPin, ArrowUpRight, Award } from 'lucide-react';

export default function Footer() {
  const cleanPhone = SITE_CONFIG.contact.phone.replace(/[\s+]/g, '');

  return (
    <footer className="bg-neutral-950 pt-20 pb-12 border-t border-neutral-800 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-[1360px]">
        
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          {/* Col 1: Doctor Info (4 Cols) */}
          <div className="lg:col-span-4">
            <h3 className="font-heading text-2xl font-bold mb-2">
              {SITE_CONFIG.doctor.displayName}
            </h3>
            <p className="text-xs uppercase tracking-widest font-semibold text-amber-300 mb-4">
              MBBS • MS • MCh (Plastic Surgery) • DrNB
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed font-light mb-6">
              Senior Consultant Plastic, Cosmetic, Reconstructive & Microvascular Surgeon in Pune. Delivering 15+ years of surgical mastery and 500+ successful microvascular free flaps.
            </p>

            <div className="flex flex-wrap gap-2 text-[11px]">
              <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300">
                IAAPS Member
              </span>
              <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300">
                APSI Life Member
              </span>
              <span className="px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300">
                MMC Reg. #2008/04/1041
              </span>
            </div>
          </div>

          {/* Col 2: Procedures (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-amber-300 mb-4">
              Signature Procedures
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-light">
              <li>
                <Link href="#procedures" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  Gynecomastia Surgery (Male Chest)
                </Link>
              </li>
              <li>
                <Link href="#procedures" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  Precision Structural Rhinoplasty
                </Link>
              </li>
              <li>
                <Link href="#procedures" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  360° HD VASER Liposuction
                </Link>
              </li>
              <li>
                <Link href="#procedures" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  Abdominoplasty (Tummy Tuck)
                </Link>
              </li>
              <li>
                <Link href="#procedures" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  Microvascular Free Flaps (500+ Cases)
                </Link>
              </li>
              <li>
                <Link href="#procedures" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  Deep Plane Facelift & Blepharoplasty
                </Link>
              </li>
              <li>
                <Link href="#procedures" className="hover:text-amber-300 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-amber-400" />
                  Burns Reconstruction & Scar Revision
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Hospital Locations (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase font-bold tracking-widest text-amber-300 mb-4">
              Hospital Locations
            </h4>
            <ul className="space-y-3.5 text-xs text-neutral-400 font-light">
              {SITE_CONFIG.locations.map((loc) => (
                <li key={loc.id}>
                  <strong className="text-white font-medium block">{loc.name}</strong>
                  <span className="text-[11px] text-neutral-500">{loc.address}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Concierge (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase font-bold tracking-widest text-amber-300 mb-4">
              Private Concierge
            </h4>
            <div className="space-y-3 text-xs text-neutral-400">
              <a
                href={`tel:${cleanPhone}`}
                className="block text-white hover:text-amber-300 font-bold transition-colors text-sm"
              >
                {SITE_CONFIG.contact.phone}
              </a>
              <p className="text-[11px] text-neutral-500 leading-relaxed">
                Consultation suites in Kharadi, Sassoon Road, Wanowrie & Lavale.
              </p>
              <a
                href={`https://wa.me/${cleanPhone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-amber-300 hover:underline font-semibold"
              >
                <span>WhatsApp Assistant</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© {new Date().getFullYear()} Dr. Chintan Gujarathi. All rights reserved.</p>
          <div className="flex gap-4 text-[11px]">
            <span>Senior Consultant Plastic & Reconstructive Surgeon</span>
            <span>•</span>
            <span>Pune, Maharashtra, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
