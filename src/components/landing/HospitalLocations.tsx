'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/site-config';
import { Building2, MapPin, Phone, Clock, Navigation, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function HospitalLocations() {
  const [activeLocId, setActiveLocId] = useState(SITE_CONFIG.locations[0].id);
  const activeLoc = SITE_CONFIG.locations.find((l) => l.id === activeLocId) || SITE_CONFIG.locations[0];

  return (
    <section id="hospitals" className="py-24 bg-neutral-950 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-[1360px]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-300 border border-white/15 text-xs uppercase tracking-widest font-semibold mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Consultation & Surgical Suites</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold tracking-tight mb-4">
            Practicing Across Pune&apos;s <span className="text-amber-300">Premier Hospitals</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
            Convenient consultation suites and world-class surgical facilities across East, Central, South, and West Pune.
          </p>
        </div>

        {/* Hospital Switcher Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {SITE_CONFIG.locations.map((loc) => {
            const isSelected = activeLocId === loc.id;
            return (
              <button
                key={loc.id}
                onClick={() => setActiveLocId(loc.id)}
                className={`p-6 rounded-2xl text-left transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-neutral-900 border-2 border-amber-400 shadow-2xl scale-[1.02]'
                    : 'bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase font-bold tracking-wider text-amber-300">
                      {loc.area}
                    </span>
                    {loc.isPrimary && (
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                        Primary Hub
                      </span>
                    )}
                  </div>
                  <h4 className="text-base font-heading font-bold mb-1">
                    {loc.name}
                  </h4>
                </div>
                <p className="text-xs text-neutral-400 mt-3 line-clamp-2 leading-relaxed">
                  {loc.address}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Hospital Detailed Plaque */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLoc.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-12 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Column: Hospital Details & Contact */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
                    Active Plastic, Cosmetic & Reconstructive Surgery Suite
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-heading font-bold mb-4 leading-snug">
                  {activeLoc.name}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mb-8">
                  State-of-the-art modular laminar airflow operation theatres, precision microsurgery workstations, VASER ultrasonic generators, and dedicated 24/7 post-operative monitoring suites.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-xs text-neutral-200">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                    <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block mb-0.5">Address</span>
                      <span className="text-neutral-400 leading-relaxed">{activeLoc.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                    <Clock className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-white block mb-0.5">Consultation Timings</span>
                      <span className="text-neutral-400 leading-relaxed">{activeLoc.timings}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={`tel:${activeLoc.phone.replace(/[\s+]/g, '')}`}
                    className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105 flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {activeLoc.phone}</span>
                  </a>

                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      activeLoc.hospital + ' ' + activeLoc.address
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl border border-neutral-700 hover:border-neutral-500 text-neutral-200 text-xs uppercase tracking-wider font-semibold transition-all bg-neutral-950 flex items-center gap-2"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Google Maps Directions</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Hospital Standards & Accreditations */}
              <div className="lg:col-span-5 p-8 rounded-2xl bg-neutral-950 border border-neutral-800">
                <h4 className="text-base font-heading font-bold mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-amber-300" />
                  <span>Clinical Suite Standards</span>
                </h4>
                <ul className="space-y-3.5 text-xs text-neutral-300">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>NABH & JCI Accredited Hospital Infrastructure</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>Ultra-Clean Laminar Airflow Surgical Theatres</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>Full 24/7 Anesthesia, ICU & Cardiac Emergency Backing</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>Cashless Insurance TPA Desk & Complete Privacy Guarantee</span>
                  </li>
                </ul>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
