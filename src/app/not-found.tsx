import React from 'react';
import Link from 'next/link';
import Header from '@/components/portfolio/Header';
import Footer from '@/components/portfolio/Footer';

export const metadata = {
  title: '404 - Page Not Found | Dr. Chintan Gujarathi',
  description:
    'The requested page could not be found. Explore surgical specialties and consultations with Dr. Chintan Gujarathi, Senior Plastic Surgeon in Pune.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#2D223B] selection:bg-[#8E7BA9]/20 selection:text-[#5F497A]">
      <Header />

      <main className="flex-1 relative overflow-hidden flex items-center justify-center py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
        {/* Soft Ambient Background Glow */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[550px] rounded-full bg-gradient-to-b from-[#8E7BA9]/15 via-[#FFE4D6]/25 to-transparent blur-[110px] pointer-events-none z-0"
        />

        <div className="max-w-2xl mx-auto text-center relative z-10 space-y-6 sm:space-y-7 -mt-4 sm:-mt-8">
          
          {/* Large Display & Heading */}
          <div className="space-y-4 sm:space-y-5">
            <h1 className="font-serif text-8xl sm:text-9xl lg:text-[10rem] font-light text-[#8E7BA9] leading-none tracking-tight">
              404
            </h1>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2D223B] font-normal tracking-tight">
              Page Not Found
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#5F497A]/80 max-w-md mx-auto leading-relaxed pt-1">
            The page you are looking for doesn&apos;t exist or has been moved.
          </p>

          {/* Minimal Clean Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#8E7BA9] hover:bg-[#7D6A99] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase px-6 py-3 rounded-full transition-all shadow-md hover:-translate-y-0.5"
            >
              <span>← Back to Home</span>
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#F6F1F9] text-[#5F497A] border border-[#8E7BA9]/30 text-xs sm:text-sm font-semibold tracking-wider uppercase px-6 py-3 rounded-full transition-all shadow-xs hover:-translate-y-0.5"
            >
              <span>Explore Specialties</span>
              <span>→</span>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
