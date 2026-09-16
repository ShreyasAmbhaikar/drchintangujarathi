import React from 'react';

const STATS = [
  {
    icon: '✦',
    number: '15+',
    label: 'YEARS EXPERIENCE',
    iconColor: 'text-[#E8A88E]',
  },
  {
    icon: '★',
    number: '5.0',
    label: 'GOOGLE PATIENT RATING',
    iconColor: 'text-[#E8A88E]',
  },
  {
    icon: '✦',
    number: '500+',
    label: 'MICROSURGERIES COMPLETED',
    iconColor: 'text-[#9F8EB9]',
  },
  {
    icon: '✦',
    number: 'MCh & DrNB',
    label: 'BOARD CERTIFIED SURGEON',
    iconColor: 'text-[#9F8EB9]',
  },
];

export default function StatsStrip() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-12 sm:pb-16">
      {/* Container with mobile crosshair divider and central + icon */}
      <div className="w-full bg-[#FAF5EE] rounded-[24px] sm:rounded-full border border-[#EDE3D4] shadow-xs px-4 sm:px-10 py-5 sm:py-6 relative overflow-hidden">
        
        {/* Mobile 4-Segment Dividers with Open Central Gap (2 horizontal, 2 vertical lines, strictly on mobile screens < sm) */}
        <div className="sm:hidden absolute inset-0 pointer-events-none">
          {/* Horizontal Left Segment (between top-left and bottom-left) */}
          <div className="absolute top-1/2 left-6 right-[calc(50%+18px)] h-px bg-[#E6DAC7]" />
          {/* Horizontal Right Segment (between top-right and bottom-right) */}
          <div className="absolute top-1/2 left-[calc(50%+18px)] right-6 h-px bg-[#E6DAC7]" />

          {/* Vertical Top Segment (between top-left and top-right) */}
          <div className="absolute left-1/2 top-4 bottom-[calc(50%+16px)] w-px bg-[#E6DAC7]" />
          {/* Vertical Bottom Segment (between bottom-left and bottom-right) */}
          <div className="absolute left-1/2 top-[calc(50%+16px)] bottom-4 w-px bg-[#E6DAC7]" />
        </div>

        {/* Clean Responsive Grid without clumsy individual underlines */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 lg:divide-x lg:divide-[#EDE3D4]">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center text-center ${
                idx === 0
                  ? 'pb-4 pr-2.5 sm:p-0'
                  : idx === 1
                  ? 'pb-4 pl-2.5 sm:p-0'
                  : idx === 2
                  ? 'pt-4 pr-2.5 sm:p-0'
                  : 'pt-4 pl-2.5 sm:p-0'
              } sm:px-4 lg:px-6`}
            >
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className={`text-sm sm:text-base ${stat.iconColor} select-none`}>
                  {stat.icon}
                </span>
                <span className="font-serif text-xl sm:text-2xl lg:text-[32px] font-normal text-[#2A2533] tracking-tight">
                  {stat.number}
                </span>
              </div>
              <span className="mt-1 text-[9px] sm:text-[10px] lg:text-[11px] font-semibold tracking-[0.18em] sm:tracking-[0.2em] text-[#8C8176] uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
