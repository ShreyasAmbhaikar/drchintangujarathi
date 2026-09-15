import React from 'react';

const SERVICES = [
  {
    title: 'UI/UX Design',
    desc: 'Creating user-centric mobile and web interfaces that drive engagement and retention.',
    badgeColor: 'bg-[#E8A88E]',
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    title: 'Web Design',
    desc: 'Responsive, modern websites designed to tell your brand story and convert visitors.',
    badgeColor: 'bg-[#9784B4]',
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
      </svg>
    ),
  },
  {
    title: 'Prototyping',
    desc: 'Interactive prototypes that bring concepts to life before development starts.',
    badgeColor: 'bg-[#9784B4]',
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    title: 'Branding Support',
    desc: 'Visual identity, typography selection, color palettes, and component design systems.',
    badgeColor: 'bg-[#E8A88E]',
    icon: (
      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="w-full max-w-[1280px] mx-auto px-6 py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
        {/* Left: Heading & Bio */}
        <div className="lg:col-span-5 flex flex-col items-start pr-4">
          <span className="text-xs font-semibold tracking-[0.24em] text-[#9784B4] uppercase">
            What I Do
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-normal leading-[1.15] text-[#25202E]">
            Design that
            <br />
            <span className="font-serif italic font-normal text-[#9784B4]">connects.</span>
          </h2>
          <p className="mt-6 text-[#6D6677] text-sm sm:text-base leading-relaxed max-w-[380px]">
            From early-stage wireframes to pixel-perfect design systems, I help brands and startups build interfaces people love to use.
          </p>
        </div>

        {/* Right: 2x2 Services Cards Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SERVICES.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] border border-[#EDE6F5] p-7 card-shadow hover:border-[#9784B4]/50 transition-all duration-300 group hover:-translate-y-1"
            >
              {/* Icon Circle */}
              <div className={`w-11 h-11 rounded-full ${item.badgeColor} flex items-center justify-center shadow-sm mb-5 transition-transform duration-300 group-hover:scale-105`}>
                {item.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-medium text-[#25202E]">
                {item.title}
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-[#6D6677] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
