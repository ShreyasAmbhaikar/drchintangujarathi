'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ImageLightboxModalProps {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  title?: string;
  caption?: string;
  onClose: () => void;
}

export default function ImageLightboxModal({
  isOpen,
  imageSrc,
  imageAlt,
  onClose,
}: ImageLightboxModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={imageAlt}
      className="fixed inset-0 w-screen h-screen z-[999999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-pointer select-none"
      onClick={onClose}
    >
      {/* Crisp Close Button (Top Right) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[1000000] px-4 py-2 rounded-full bg-white/20 hover:bg-white/35 text-white flex items-center gap-2 text-sm font-medium transition-all border border-white/30 shadow-2xl focus:outline-none cursor-pointer"
        title="Close (Esc)"
        aria-label="Close full-screen image"
      >
        <span className="text-base font-bold leading-none">✕</span>
        <span>Close</span>
      </button>

      {/* Image Container: Sized strictly to the image so clicking anywhere outside hits the backdrop */}
      <div
        className="relative max-w-[92vw] max-h-[88vh] flex items-center justify-center cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt={imageAlt}
          className="max-w-[92vw] max-h-[88vh] w-auto h-auto object-contain rounded-2xl shadow-2xl bg-white border border-white/20"
        />
      </div>
    </div>,
    document.body
  );
}
