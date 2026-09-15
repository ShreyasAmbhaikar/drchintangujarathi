'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-config';

export default function FloatingWhatsApp() {
  const cleanPhone = SITE_CONFIG.contact.phone.replace(/[\s+]/g, '');

  return (
    <a
      href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(
        'Hello Dr. Gujarathi, I would like to schedule a confidential consultation.'
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Dr. Chintan Gujarathi on WhatsApp"
      className="fixed bottom-5 sm:bottom-6 right-4 sm:right-6 z-50 flex items-center gap-2 p-3 sm:px-4 sm:py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-medium text-xs tracking-wider shadow-2xl hover:scale-105 transition-all active:scale-95"
    >
      <MessageCircle className="w-5 h-5 fill-white" />
      <span className="hidden md:inline font-semibold uppercase tracking-wider text-[11px]">WhatsApp</span>
    </a>
  );
}

