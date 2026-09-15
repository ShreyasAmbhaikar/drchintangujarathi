'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/site-config';
import { Phone, MessageSquare, Award, MapPin, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cleanPhone = SITE_CONFIG.contact.phone.replace(/[\s+]/g, '');

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#181A1C]/75 backdrop-blur-2xl py-3 border-b border-white/10 shadow-xl'
          : 'bg-gradient-to-b from-black/60 via-black/25 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-8 max-w-[1400px] flex items-center justify-between">
        {/* Brand & Doctor Credentials */}
        <Link href="/" className="flex flex-col group">
          <div className="flex items-center gap-2.5">
            <span className="font-heading text-lg sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#5EBAAD] transition-colors">
              {SITE_CONFIG.doctor.displayName}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#2A5A52]/40 text-[#5EBAAD] border border-[#5EBAAD]/30 backdrop-blur-md">
              <Award className="w-3 h-3 text-[#5EBAAD]" />
              <span>MCh Plastic Surgery</span>
            </span>
          </div>
          <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-300 font-light mt-0.5 tracking-wide">
            <span>Plastic, Cosmetic & Reconstructive Surgery</span>
            <span className="text-slate-500">•</span>
            <span className="text-[#5EBAAD] font-medium">Pune, MH</span>
          </div>
        </Link>

        {/* Center: Hospital Practice Badges (Desktop) */}
        <div className="hidden xl:flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-slate-200">
          <MapPin className="w-3.5 h-3.5 text-[#5EBAAD]" />
          <span className="text-white/75">Practicing at</span>
          <span className="text-white font-medium">Manipal Hospital Kharadi</span>
          <span className="text-white/30">•</span>
          <span className="text-white font-medium">Ruby Hall Clinic</span>
          <span className="text-white/30">•</span>
          <span className="text-white font-medium">Symbiosis</span>
        </div>

        {/* Direct Action Buttons (Desktop & Mobile) */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Phone Call Button */}
          <a
            href={`tel:${cleanPhone}`}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-medium tracking-wide transition-all backdrop-blur-md"
            title="Direct Clinic Line"
          >
            <Phone className="w-3.5 h-3.5 text-[#5EBAAD]" />
            <span>{SITE_CONFIG.contact.phone}</span>
          </a>

          {/* Book Consultation (Surgical Sage / Teal) */}
          <a
            href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(
              'Hello Dr. Gujarathi, I would like to schedule a confidential surgical consultation.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#2A5A52] hover:bg-[#224A43] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-[#2A5A52]/30 active:scale-95 flex items-center gap-1.5 border border-[#5EBAAD]/30"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#5EBAAD]" />
            <span>Book Consultation</span>
          </a>

          {/* Mobile Info Button */}
          <button
            onClick={() => setInfoOpen(!infoOpen)}
            className="sm:hidden p-2 rounded-full bg-white/10 border border-white/15 text-white"
            aria-label="Doctor credentials and clinic details"
          >
            <Award className="w-4 h-4 text-[#5EBAAD]" />
          </button>
        </div>
      </div>

      {/* Mobile Credentials Modal / Drawer */}
      <AnimatePresence>
        {infoOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[60] sm:hidden"
              onClick={() => setInfoOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-20 left-4 right-4 bg-[#1E2223]/95 backdrop-blur-2xl border border-white/20 rounded-2xl p-5 z-[70] sm:hidden shadow-2xl text-white"
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-heading text-lg font-bold text-white">
                    {SITE_CONFIG.doctor.fullName}
                  </h3>
                  <p className="text-xs text-[#5EBAAD] mt-0.5">
                    {SITE_CONFIG.doctor.qualifications}
                  </p>
                </div>
                <button
                  onClick={() => setInfoOpen(false)}
                  className="p-1 rounded-full text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3 text-xs text-slate-200 my-4">
                <div className="flex items-start gap-2 bg-white/5 p-3 rounded-xl border border-white/10">
                  <Award className="w-4 h-4 text-[#5EBAAD] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Tata Memorial Hospital Fellow</span>
                    <span className="text-[11px] text-slate-400">Advanced Oncoplastic & Microvascular Surgery</span>
                  </div>
                </div>

                <div className="flex items-start gap-2 bg-white/5 p-3 rounded-xl border border-white/10">
                  <MapPin className="w-4 h-4 text-[#5EBAAD] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Practice Locations in Pune</span>
                    <span className="text-[11px] text-slate-400">Manipal Hospital Kharadi • Ruby Hall Clinic • Symbiosis</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-white/10">
                <a
                  href={`tel:${cleanPhone}`}
                  className="py-2.5 rounded-xl bg-white/10 border border-white/20 text-center font-medium text-xs flex items-center justify-center gap-1.5 text-white"
                >
                  <Phone className="w-3.5 h-3.5 text-[#5EBAAD]" />
                  <span>Call Doctor</span>
                </a>
                <a
                  href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(
                    'Hello Dr. Gujarathi, I would like to schedule a consultation.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 rounded-xl bg-[#2A5A52] text-white text-center font-semibold text-xs flex items-center justify-center gap-1.5 border border-[#5EBAAD]/40"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#5EBAAD]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}


