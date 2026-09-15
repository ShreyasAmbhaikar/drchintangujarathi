import React from 'react';

const STATS = [
  {
    icon: '✦',
    number: '15+',
    label: 'YEARS EXPERIENCE',
    iconColor: 'text-[#E8A88E]',
  },
  {
    icon: '♡',
    number: '5.0',
    label: 'GOOGLE PATIENT RATING',
    iconColor: 'text-[#9F8EB9]',
  },
  {
    icon: '★',
    number: '500+',
    label: 'MICROSURGERIES COMPLETED',
    iconColor: 'text-[#E8A88E]',
  },
  {
    icon: '🍃',
    number: 'MCh & DrNB',
    label: 'BOARD CERTIFIED SURGEON',
    iconColor: 'text-[#9F8EB9]',
  },
];

export default function StatsStrip() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pb-16">
      <div className="w-full bg-[#FAF5EE] rounded-[24px] sm:rounded-full border border-[#EDE3D4] shadow-xs px-6 sm:px-10 py-5 sm:py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-[#EDE3D4]">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center text-center ${
                idx > 0 ? 'lg:px-6' : ''
              } ${idx > 1 ? 'pt-4 sm:pt-0' : ''}`}
            >
              <div className="flex items-center gap-2">
                <span className={`text-base ${stat.iconColor} select-none`}>
                  {stat.icon}
                </span>
                <span className="font-serif text-2xl sm:text-3xl lg:text-[32px] font-normal text-[#2A2533] tracking-tight">
                  {stat.number}
                </span>
              </div>
              <span className="mt-1.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-[#8C8176] uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
