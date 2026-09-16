'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '@/lib/site-config';

export default function Header() {
  const pathname = usePathname();
  const normalizedPath = (pathname || '').replace(/\/$/, '') || '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true); // Open by default matching Reference Image 1
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close mobile drawer on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isHomeActive = normalizedPath === '/';
  const isAboutActive = normalizedPath === '/about';
  const isServicesActive = normalizedPath === '/services' || normalizedPath.startsWith('/services/');
  const isSuccessStoriesActive = normalizedPath === '/success-stories';
  const isContactActive = normalizedPath === '/contact';

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  // Flatten all services for the clean list matching Reference Image 1 & 2
  const allProcedures = SITE_CONFIG.serviceCategories.flatMap((cat) => cat.procedures);

  return (
    <>
      <header
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FBF9F5]/98 backdrop-blur-md shadow-[0_4px_24px_-4px_rgba(37,32,46,0.08)] border-b border-[#9F8EB9]/20'
            : 'bg-[#FBF9F5]/95 backdrop-blur-md shadow-[0_2px_12px_-3px_rgba(37,32,46,0.04)] border-b border-[#9F8EB9]/15'
        }`}
      >
        <div className="max-w-[1280px] relative mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          
          {/* Brand Title */}
          <Link href="/" className="flex flex-col group max-w-fit">
            <span className="font-serif text-xl sm:text-2xl font-normal tracking-tight text-[#25202E] group-hover:text-[#9F8EB9] transition-colors leading-snug">
              Dr. Chintan Gujarathi
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.02em] text-[#8C7A9F] uppercase font-semibold mt-0.5 whitespace-nowrap">
              Plastic, Cosmetic & Reconstructive Surgeon
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-2.5 text-xs uppercase tracking-[0.04em]">
            <Link
              href="/"
              className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                isHomeActive
                  ? 'bg-[#9784B4] text-white font-bold shadow-xs'
                  : 'text-[#4A3F55] hover:text-[#9784B4] hover:bg-[#9784B4]/10 font-medium'
              }`}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                isAboutActive
                  ? 'bg-[#9784B4] text-white font-bold shadow-xs'
                  : 'text-[#4A3F55] hover:text-[#9784B4] hover:bg-[#9784B4]/10 font-medium'
              }`}
            >
              About Us
            </Link>

            <div
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <Link
                href="/services"
                className={`px-3 py-1.5 rounded-full transition-all duration-200 inline-flex items-center gap-1 ${
                  isServicesActive
                    ? 'bg-[#9784B4] text-white font-bold shadow-xs'
                    : 'text-[#4A3F55] hover:text-[#9784B4] hover:bg-[#9784B4]/10 font-medium'
                }`}
              >
                <span>Services</span>
                <svg
                  className={`w-3 h-3 text-current transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </Link>
            </div>

            <Link
              href="/success-stories"
              className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                isSuccessStoriesActive
                  ? 'bg-[#9784B4] text-white font-bold shadow-xs'
                  : 'text-[#4A3F55] hover:text-[#9784B4] hover:bg-[#9784B4]/10 font-medium'
              }`}
            >
              Success Stories
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-1.5 rounded-full transition-all duration-200 ${
                isContactActive
                  ? 'bg-[#9784B4] text-white font-bold shadow-xs'
                  : 'text-[#4A3F55] hover:text-[#9784B4] hover:bg-[#9784B4]/10 font-medium'
              }`}
            >
              Contact Us
            </Link>
          </nav>

          {/* Desktop Mega Dropdown */}
          {servicesDropdownOpen && (
            <div
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
              className="hidden md:block absolute top-full left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 mt-2.5 bg-white/98 backdrop-blur-xl rounded-[28px] border border-[#EDE6F5] p-8 lg:p-10 shadow-[0_24px_60px_-12px_rgba(37,32,46,0.18)] z-50 normal-case tracking-normal animate-in fade-in slide-in-from-top-2 duration-200"
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#F0EAF5] mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] font-bold tracking-[0.2em] text-[#9784B4] uppercase">
                    SPECIALTY SURGICAL DIRECTORY
                  </span>
                  <span className="text-[7px] text-[#B8684D]">●</span>
                  <span className="text-xs text-[#675F72]">
                    Ruby Hall Clinic & Manipal Hospital
                  </span>
                </div>
                <Link
                  href="/services"
                  onClick={() => setServicesDropdownOpen(false)}
                  className="text-xs font-semibold text-[#9784B4] hover:underline flex items-center gap-1.5 tracking-wider uppercase"
                >
                  <span>View All Services</span>
                  <span>→</span>
                </Link>
              </div>

              <div className="grid grid-cols-4 gap-8 lg:gap-10 text-left">
                {SITE_CONFIG.serviceCategories.map((category) => (
                  <div key={category.id} className="flex flex-col">
                    <div className="pb-2.5 border-b border-[#F5EDFA]">
                      <span className="text-[10px] font-bold tracking-widest text-[#B8684D] uppercase block">
                        {category.badge}
                      </span>
                      <h4 className="font-semibold text-sm sm:text-[15px] text-[#25202E] leading-snug mt-1">
                        {category.shortTitle}
                      </h4>
                    </div>

                    <ul className="space-y-2.5 mt-3.5">
                      {category.procedures.map((proc) => (
                        <li key={proc.slug}>
                          <Link
                            href={`/services/${proc.slug}`}
                            onClick={() => setServicesDropdownOpen(false)}
                            className="text-[13px] text-[#4A4254] hover:text-[#9784B4] transition-all font-normal leading-relaxed block hover:translate-x-1"
                          >
                            {proc.title.split('(')[0].trim()}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Right Action: Desktop Phone Button & Mobile Hamburger Toggle */}
          <div className="flex items-center gap-3">
            {/* Desktop-Only Phone Action (Hidden on mobile) */}
            <a
              href="tel:07977429688"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#9F8EB9] hover:bg-[#8B78A5] text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-xs hover:shadow-md hover:-translate-y-0.5"
            >
              <span>079774 29688</span>
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
              </svg>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden w-10 h-10 rounded-full border border-[#EDE6F5] bg-white text-[#25202E] flex items-center justify-center shadow-xs active:scale-95 transition-transform"
              aria-label="Open Navigation Menu"
            >
              <svg className="w-5 h-5 text-[#25202E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>

        </div>
      </header>

      {/* 100% Full-Screen Mobile Drawer Covering Entire Area */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed inset-0 w-full h-full bg-white z-[99999] md:hidden flex flex-col justify-between overflow-hidden shadow-2xl"
          >
            {/* Top Bar inside Full-Screen Menu with Right-Aligned Close Button */}
            <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-gray-100 bg-white">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex flex-col"
              >
                <span className="font-serif text-lg font-normal text-[#25202E] leading-snug">
                  Dr. Chintan Gujarathi
                </span>
                <span className="text-[9px] tracking-[0.02em] text-[#8C7A9F] uppercase font-semibold">
                  Plastic, Cosmetic & Reconstructive Surgeon
                </span>
              </Link>

              {/* Close Button at the far top-right */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full border border-[#EDE6F5] bg-[#FAF8FC] hover:bg-[#F2EDF7] text-[#25202E] flex items-center justify-center shadow-xs active:scale-95 transition-all"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5 text-[#25202E]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable Navigation Body */}
            <div className="flex-1 overflow-y-auto px-6 pt-5 pb-4">
              <div className="space-y-4">
                {/* Home */}
                <div>
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-[17px] font-bold transition-colors ${
                      isHomeActive ? 'text-[#9784B4]' : 'text-[#1E1B24] hover:text-[#9784B4]'
                    }`}
                  >
                    Home
                  </Link>
                </div>

                {/* About Us */}
                <div>
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-[17px] font-bold transition-colors ${
                      isAboutActive ? 'text-[#9784B4]' : 'text-[#1E1B24] hover:text-[#9784B4]'
                    }`}
                  >
                    About Us
                  </Link>
                </div>

                {/* Services */}
                <div>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <span
                      className={`text-[17px] font-bold transition-colors ${
                        isServicesActive ? 'text-[#9784B4]' : 'text-[#1E1B24] group-hover:text-[#9784B4]'
                      }`}
                    >
                      Services
                    </span>
                    <svg
                      className={`w-4 h-4 text-[#8C7A9F] transition-transform duration-200 ${
                        mobileServicesOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Clean Indented Vertical Procedure List */}
                  {mobileServicesOpen && (
                    <div className="mt-3 pl-3 border-l-2 border-[#EAE3F2] space-y-2.5 animate-in fade-in slide-in-from-top-1 duration-150">
                      {allProcedures.map((proc) => {
                        const isActive = normalizedPath === `/services/${proc.slug}`;
                        return (
                          <Link
                            key={proc.slug}
                            href={`/services/${proc.slug}`}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`block text-[13.5px] leading-snug transition-colors relative ${
                              isActive
                                ? 'text-[#9784B4] font-semibold -ml-[14px] pl-[12px] border-l-2 border-[#9784B4]'
                                : 'text-[#504859] hover:text-[#9784B4] font-normal'
                            }`}
                          >
                            {proc.title.split('(')[0].trim()}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Divider Line */}
                <div className="border-t border-gray-100 pt-2" />

                {/* Success Stories */}
                <div>
                  <Link
                    href="/success-stories"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-[17px] font-bold transition-colors ${
                      isSuccessStoriesActive ? 'text-[#9784B4]' : 'text-[#1E1B24] hover:text-[#9784B4]'
                    }`}
                  >
                    Success Stories
                  </Link>
                </div>

                {/* Contact Us */}
                <div>
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-[17px] font-bold transition-colors ${
                      isContactActive ? 'text-[#9784B4]' : 'text-[#1E1B24] hover:text-[#9784B4]'
                    }`}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Section: Restored Amethyst Gradient Call Card */}
            <div className="p-4 border-t border-gray-100 bg-white">
              <a
                href="tel:07977429688"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-gradient-to-r from-[#9784B4] to-[#8774A4] text-white shadow-md active:scale-[0.98] transition-transform"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-white/80">Direct Consultation Line</div>
                    <div className="font-bold text-[15px] tracking-wide leading-tight">079774 29688</div>
                  </div>
                </div>
                <span className="text-[11px] bg-white text-[#7A5B94] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-2xs shrink-0">
                  Call Now
                </span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
