'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Microscope, ShieldCheck, Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-config';

const PILLARS = [
  {
    num: '01',
    icon: Award,
    badge: 'Quad-Credentials',
    title: 'Elite Super-Specialty Pedigree',
    subtitle: 'MBBS • MS • MCh • DrNB',
    description:
      'Holding both MCh and DrNB board certifications in Plastic & Reconstructive Surgery — representing the pinnacle of surgical education, rigorous residency training, and national licensure.',
    points: ['Magister Chirurgiae (MCh) Plastic Surgery', 'Doctorate of National Board (DrNB)', '15+ Years Clinical Excellence', 'MMC Registration #2008/04/1041'],
  },
  {
    num: '02',
    icon: Microscope,
    badge: 'Tata Memorial Fellow',
    title: 'Oncoplastic & Microsurgical Mastery',
    subtitle: 'Asia’s Premier Cancer Center',
    description:
      'Completed an advanced Oncoplastic Fellowship at Tata Memorial Hospital, Mumbai. Trained in complex head & neck tumor resections, microvascular tissue harvesting, and breast reconstruction.',
    points: ['High-Power Operating Microscopes', '10-0 Microvascular Anastomosis', 'Tumor Board Collaborative Surgery', 'Complex Functional Reconstruction'],
  },
  {
    num: '03',
    icon: ShieldCheck,
    badge: '500+ Cases',
    title: '500+ Microvascular Free Flaps',
    subtitle: '99.1% Documented Flap Viability',
    description:
      'Extensive case volume across ALT flaps, free fibula bone transfers, DIEP autologous breast reconstructions, and trauma limb salvage with documented clinical success.',
    points: ['Arterial & Venous Perfusion', 'Limb Salvage & Defect Coverage', 'Zero Compromise on Tissue Viability', 'Advanced Indocyanine Monitoring'],
  },
  {
    num: '04',
    icon: Building2,
    badge: 'Premier OTs',
    title: 'Four Dedicated Hospital Suites',
    subtitle: 'Kharadi • Sassoon Rd • Wanowrie • Lavale',
    description:
      'Consulting and operating at Pune’s most prestigious NABH and JCI-accredited tertiary care hospitals with 24/7 ICU cover, modular laminar flow OTs, and dedicated post-op care teams.',
    points: ['Manipal Hospital, Kharadi (Primary)', 'Ruby Hall Clinic (Main Campus)', 'Ruby Hall Clinic, Wanowrie', 'Symbiosis University Hospital'],
  },
];

export default function PillarsSection() {
  const cleanPhone = SITE_CONFIG.contact.phone.replace(/[\s+]/g, '');

  return (
    <section id="pillars" className="py-24 bg-neutral-900 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-[1360px]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-300 border border-white/15 text-xs uppercase tracking-widest font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Foundations of Trust</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold tracking-tight mb-4">
            Four Pillars of <span className="text-amber-300">Surgical Excellence</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
            When undergoing aesthetic or reconstructive surgery, surgical pedigree, hospital infrastructure, and procedural volume dictate your safety and long-term results.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 sm:p-10 rounded-3xl bg-neutral-950 border border-neutral-800 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-800">
                    <span className="text-3xl font-heading font-bold text-amber-300">
                      {pillar.num}
                    </span>
                    <span className="text-xs uppercase tracking-wider font-bold px-3 py-1 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20">
                      {pillar.badge}
                    </span>
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-2xl bg-amber-400/10 text-amber-300 shrink-0 mt-1">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-heading font-bold leading-snug">
                        {pillar.title}
                      </h3>
                      <span className="text-xs text-amber-200 uppercase font-medium tracking-wider block mt-1">
                        {pillar.subtitle}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800 space-y-2">
                  {pillar.points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="p-8 rounded-3xl bg-neutral-950 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-2xl">
          <div>
            <h4 className="text-xl font-heading font-bold mb-1">
              Have Questions Regarding Your Case?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Connect directly with Dr. Chintan Gujarathi&apos;s team for a confidential case review.
            </p>
          </div>
          <a
            href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(
              'Hello Dr. Gujarathi, I would like to schedule a confidential consultation.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:scale-105 whitespace-nowrap flex items-center gap-2"
          >
            <span>WhatsApp Concierge</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
