'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/site-config';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Eye, 
  Flame, 
  Scissors, 
  Activity,
  Microscope
} from 'lucide-react';

interface ProcedureCard {
  title: string;
  category: string;
  tagline: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  highlights: string[];
}

const PROCEDURES: ProcedureCard[] = [
  {
    title: 'Gynecomastia & Male Chest Sculpting',
    category: 'Male Aesthetics',
    tagline: 'Grade I–IV Glandular & Adipose Correction',
    description:
      'Dual-modality surgical precision combining VASER ultrasonic fat liquefaction with targeted sub-areolar gland excision. Restores a chiseled, masculine pectoral contour with virtually invisible 3mm micro-incisions.',
    icon: ShieldCheck,
    highlights: [
      'Complete Gland Excision with Zero Recurrence',
      'Concealed 3mm Natural Areolar Incisions',
      '48-Hour Rapid Recovery Protocol',
      'High-Definition Pectoral Shadow Contouring',
    ],
  },
  {
    title: 'Precision Structural Rhinoplasty',
    category: 'Facial Architecture',
    tagline: 'Art of the Profile & Airway Harmony',
    description:
      'Bespoke open and closed structural rhinoplasty aligning the nasal dorsum, tip projection, and nasolabial angles with the golden ratio (1:1.618) while fully preserving functional breathing airways.',
    icon: Sparkles,
    highlights: [
      'Dorsal Hump Reduction & Preservation',
      'Tip Refinement with Autologous Cartilage',
      'Septoplasty for Free Nasal Airflow',
      'Micro-Columellar Concealed Incisions',
    ],
  },
  {
    title: '360° HD Liposuction & Abdominoplasty',
    category: 'Body Contouring',
    tagline: 'Circumferential Torso Transformation',
    description:
      'Comprehensive 360-degree waistline and flank sculpting paired with full or mini tummy tucks. Features internal rectus muscle plication for diastasis recti repair and an athletic silhouette.',
    icon: Activity,
    highlights: [
      'VASER Ultrasonic Selective Fat Emulsification',
      'Diastasis Recti Core Muscle Tightening',
      'Drain-Free Progressive Tension Sutures',
      'Discreet Low Bikini-Line Scar Placement',
    ],
  },
  {
    title: 'Microvascular Free Flaps & Reconstruction',
    category: 'Super-Specialty Microsurgery',
    tagline: 'Tata Memorial Hospital Fellow Mastery',
    description:
      'Over 500+ successful microvascular free flaps (ALT, DIEP, Fibula flaps) reconnecting 1-2mm microscopic blood vessels under operating microscopes to rebuild complex cancer and trauma defects.',
    icon: Microscope,
    highlights: [
      '500+ Microsurgical Free Flap Surgeries',
      '10-0 Micro-Suture Anastomotic Precision',
      'Head, Neck & Autologous Breast Restoration',
      '99.1% Documented Flap Perfusion Viability',
    ],
  },
  {
    title: 'Blepharoplasty & Deep Plane SMAS Facelift',
    category: 'Facial Aesthetics',
    tagline: 'Timeless Structural Rejuvenation',
    description:
      'Upper and lower eyelid fat repositioning and multi-vector deep plane SMAS facelifts that restore youthful volume and sharpen the jawline without unnatural tension or tight skin appearance.',
    icon: Eye,
    highlights: [
      'Transconjunctival Zero-External-Scar Eyelid Lift',
      'Multi-Vector Deep Plane SMAS Suspension',
      'Mandibular & Submental Neck Definition',
      'Natural Dynamic Facial Expressions Preserved',
    ],
  },
  {
    title: 'Burns Rehabilitation, Scar Revision & Hand',
    category: 'Functional Reconstructive Care',
    tagline: 'Mobility, Sensation & Scar Revision',
    description:
      'Specialized post-burn contracture release, tendon and peripheral nerve repairs, flap mobilization, and laser keloid scar revisions designed to restore both full functional joint mobility and skin texture.',
    icon: Flame,
    highlights: [
      'Joint Contracture Release with Skin Flaps',
      'Micro-Tendon & Peripheral Nerve Repair',
      'Hypertrophic & Keloid Scar Matrix Protocol',
      'Pediatric & Adult Functional Rehabilitation',
    ],
  },
];

export default function ProceduresGrid() {
  const cleanPhone = SITE_CONFIG.contact.phone.replace(/[\s+]/g, '');

  return (
    <section id="procedures" className="py-24 bg-neutral-950 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-[1360px]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-300 border border-white/15 text-xs uppercase tracking-widest font-semibold mb-3">
            <Scissors className="w-3.5 h-3.5" />
            <span>Surgical Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold tracking-tight mb-4">
            Signature <span className="text-amber-300">Surgical Masteries</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
            Dr. Chintan Gujarathi provides personalized cosmetic enhancements and complex reconstructive solutions across Pune.
          </p>
        </div>

        {/* Procedures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCEDURES.map((proc, index) => {
            const Icon = proc.icon;
            return (
              <motion.div
                key={proc.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-amber-400/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-xl"
              >
                <div>
                  {/* Category & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs uppercase font-bold tracking-wider text-amber-300">
                      {proc.category}
                    </span>
                    <div className="p-3 rounded-2xl bg-amber-400/10 text-amber-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[11px] text-neutral-400 uppercase font-medium tracking-wider block mb-1">
                    {proc.tagline}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-bold mb-3 leading-snug group-hover:text-amber-300 transition-colors">
                    {proc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light mb-6">
                    {proc.description}
                  </p>
                </div>

                {/* Highlights & CTA */}
                <div className="pt-4 border-t border-neutral-800">
                  <div className="space-y-2 mb-6">
                    {proc.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-300 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(
                      `Hello Dr. Gujarathi, I would like to consult regarding ${proc.title}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-neutral-800 hover:bg-amber-400 text-neutral-200 hover:text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Consult on {proc.title.split(' ')[0]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
