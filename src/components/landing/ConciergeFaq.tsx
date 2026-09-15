'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/site-config';
import { 
  Calendar, 
  MapPin, 
  User, 
  Phone, 
  ArrowRight, 
  ChevronDown, 
  ShieldCheck, 
  HelpCircle,
  MessageSquare
} from 'lucide-react';

const PROCEDURES = [
  'Gynecomastia (Male Chest Sculpting)',
  'Structural Rhinoplasty (Nose Reshaping)',
  '360° HD Liposuction & Abdominoplasty',
  'Blepharoplasty & Deep Plane Facelift',
  'Microvascular Cancer Reconstruction',
  'Burns Rehabilitation & Scar Revision',
  'Hand & Peripheral Nerve Surgery',
];

export default function ConciergeFaq() {
  const [selectedProc, setSelectedProc] = useState(PROCEDURES[0]);
  const [selectedHospital, setSelectedHospital] = useState(SITE_CONFIG.locations[0].name);
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const cleanDoctorPhone = SITE_CONFIG.contact.phone.replace(/[\s+]/g, '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Dr. Gujarathi, I would like to request a private surgical consultation.\n\n*Patient Name:* ${
      patientName || 'Private Inquiry'
    }\n*Contact Number:* ${patientPhone || 'Not shared'}\n*Selected Procedure:* ${selectedProc}\n*Preferred Hospital:* ${selectedHospital}`;
    window.open(`https://wa.me/${cleanDoctorPhone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: SITE_CONFIG.faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-24 bg-neutral-950 text-white relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-[1360px]">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-300 border border-white/15 text-xs uppercase tracking-widest font-semibold mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Consultation & FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold tracking-tight mb-4">
            Arrange Your <span className="text-amber-300">Consultation</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
            Direct coordination with Dr. Chintan Gujarathi&apos;s surgical desk across Manipal Hospital Kharadi, Ruby Hall Clinic, and Symbiosis Hospital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Consultation Terminal (6 Cols) */}
          <div className="lg:col-span-6 p-8 sm:p-12 rounded-3xl bg-neutral-900 border border-neutral-800 shadow-2xl">
            <div className="flex items-center justify-between pb-6 mb-8 border-b border-neutral-800">
              <div>
                <span className="text-[11px] uppercase tracking-widest font-bold text-amber-300 block mb-1">
                  Discreet Scheduling
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                  Consultation Request
                </h3>
              </div>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Procedure Selector */}
              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-neutral-400 block mb-2">
                  Procedure of Interest
                </label>
                <select
                  value={selectedProc}
                  onChange={(e) => setSelectedProc(e.target.value)}
                  className="w-full p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none transition-colors"
                >
                  {PROCEDURES.map((p, i) => (
                    <option key={i} value={p} className="bg-neutral-900 text-white">
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              {/* Hospital Location Selector */}
              <div>
                <label className="text-xs uppercase tracking-wider font-semibold text-neutral-400 block mb-2">
                  Preferred Hospital Facility
                </label>
                <select
                  value={selectedHospital}
                  onChange={(e) => setSelectedHospital(e.target.value)}
                  className="w-full p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none transition-colors"
                >
                  {SITE_CONFIG.locations.map((loc) => (
                    <option key={loc.id} value={loc.name} className="bg-neutral-900 text-white">
                      {loc.name} ({loc.area})
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-neutral-400 block mb-2">
                    Patient Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-amber-300 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full pl-11 pr-4 py-4 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-neutral-400 block mb-2">
                    Mobile Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-amber-300 absolute left-4 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className="w-full pl-11 pr-4 py-4 rounded-xl bg-neutral-950 border border-neutral-800 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 font-bold text-xs uppercase tracking-widest transition-all shadow-lg hover:scale-[1.02] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect via WhatsApp Concierge</span>
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-2">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-300" /> 100% Confidential
                </span>
                <span>Direct response within clinic hours</span>
              </div>
            </form>
          </div>

          {/* Right Column: FAQ Accordion (6 Cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="w-4 h-4 text-amber-300" />
              <span className="text-xs uppercase font-bold tracking-widest text-amber-300">
                Frequently Asked Inquiries
              </span>
            </div>

            {SITE_CONFIG.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left cursor-pointer gap-4"
                  >
                    <span className="text-sm sm:text-base font-heading font-bold text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-amber-300 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light mt-3 pt-3 border-t border-neutral-800">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
