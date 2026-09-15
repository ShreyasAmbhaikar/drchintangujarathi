'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/site-config';
import { Award, CheckCircle2, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

export default function DoctorAbout() {
  return (
    <section id="about" className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      {/* Subtle Warm Amber Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-[1360px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Doctor Profile Credentials & Accreditations (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-950 border border-neutral-800 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-widest mb-3">
                <Award className="w-4 h-4" />
                <span>Super-Specialist Pedigree</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-bold mb-2">
                {SITE_CONFIG.doctor.fullName}
              </h3>

              <p className="text-xs sm:text-sm font-semibold text-amber-300 tracking-wider uppercase mb-6">
                {SITE_CONFIG.doctor.qualifications}
              </p>

              <p className="text-xs text-neutral-400 leading-relaxed font-light mb-6">
                MMC Registration #2008/04/1041. Life Member of IAAPS (Indian Association of Aesthetic Plastic Surgeons) and APSI (Association of Plastic Surgeons of India).
              </p>

              <div className="space-y-3 pt-4 border-t border-neutral-800 text-xs text-neutral-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>Oncoplastic Fellowship at Tata Memorial Hospital, Mumbai</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>500+ Documented Microvascular Free Flap Reconstructions</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span>Senior Consultant at Manipal Hospital Kharadi & Ruby Hall Clinic</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Biography & Surgical Philosophy (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-300 border border-white/15 text-xs uppercase tracking-widest font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Dr. Chintan Gujarathi</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-heading font-bold tracking-tight mb-6">
              Surgical Artistry Grounded in <span className="text-amber-300">Clinical Mastery</span>
            </h2>

            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed font-light mb-8">
              <p>{SITE_CONFIG.doctor.bio}</p>
              <p>{SITE_CONFIG.doctor.bioExtended}</p>
            </div>

            {/* Philosophy Quote */}
            <div className="p-6 rounded-2xl bg-neutral-950/80 border-l-4 border-l-amber-400 border-neutral-800 mb-8">
              <p className="text-sm sm:text-base italic text-neutral-200 font-heading leading-relaxed">
                &ldquo;{SITE_CONFIG.doctor.philosophy}&rdquo;
              </p>
              <span className="block text-xs font-bold text-amber-300 uppercase tracking-widest mt-2">
                — {SITE_CONFIG.doctor.fullName}
              </span>
            </div>

            {/* Metrics Counter Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 text-center">
                <span className="text-3xl font-heading font-bold text-amber-300 block mb-1">
                  15+
                </span>
                <span className="text-[11px] text-neutral-400 uppercase tracking-wider">
                  Years Experience
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 text-center">
                <span className="text-3xl font-heading font-bold text-amber-300 block mb-1">
                  500+
                </span>
                <span className="text-[11px] text-neutral-400 uppercase tracking-wider">
                  Free Flap Surgeries
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 text-center">
                <span className="text-3xl font-heading font-bold text-amber-300 block mb-1">
                  98%
                </span>
                <span className="text-[11px] text-neutral-400 uppercase tracking-wider">
                  Patient Satisfaction
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 text-center">
                <span className="text-3xl font-heading font-bold text-amber-300 block mb-1">
                  4
                </span>
                <span className="text-[11px] text-neutral-400 uppercase tracking-wider">
                  Premier Pune OTs
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
