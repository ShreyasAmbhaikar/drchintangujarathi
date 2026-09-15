import React from 'react';

const STEPS = [
  {
    num: '01. CONSULT',
    title: 'Anatomical Analysis',
    desc: 'Understanding your goals, tissue anatomy, and surgical suitability.',
    icon: (
      <svg className="w-5 h-5 text-[#876F9F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 3v5a5.5 5.5 0 0 0 11 0V3" />
        <path d="M10 13.5v3.5a3 3 0 0 0 3 3h1a3 3 0 0 0 3-3v-1.5" />
        <circle cx="17" cy="15.5" r="2.5" />
      </svg>
    ),
  },
  {
    num: '02. PLAN',
    title: 'Surgical Mapping',
    desc: 'Deep-plane vector mapping, surgical strategy, and pre-op guidance.',
    icon: (
      <svg className="w-5 h-5 text-[#876F9F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="2" />
        <path d="m5 21 6.5-14" />
        <path d="m19 21-6.5-14" />
        <path d="M7.5 16h9" />
      </svg>
    ),
  },
  {
    num: '03. PROCEDURE',
    title: 'Precision Surgery',
    desc: 'Expert execution in sterile hospital suites at Ruby Hall Clinic.',
    icon: (
      <svg className="w-5 h-5 text-[#876F9F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="m18 3 3 3L8.5 18.5a4 4 0 0 1-2 1.2L3 21l1.3-3.5a4 4 0 0 1 1.2-2L18 3Z" />
        <path d="m14 7 3 3" />
      </svg>
    ),
  },
  {
    num: '04. RECOVER',
    title: 'Attentive Care',
    desc: 'Comprehensive post-op healing protocol and long-term results.',
    icon: (
      <svg className="w-5 h-5 text-[#876F9F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div className="w-full bg-[#EFE8F6] rounded-[32px] p-8 sm:p-10 lg:p-14 border border-[#E2D4EB] shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Reassurance Note */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.24em] text-[#7A6B8E] uppercase">
              OUR PROCESS
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-normal text-[#2A2533] leading-tight">
              From consultation
              <br />
              <span className="font-serif italic text-[#876F9F]">to confidence.</span>
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-[#5D516E] leading-relaxed max-w-[340px]">
              A disciplined, patient-first surgical pathway prioritizing anatomical safety, structural preservation, and authentic longevity.
            </p>

            <div className="mt-6 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/70 border border-[#D8C7E6] text-xs text-[#5D516E]">
              <span className="text-[#876F9F] text-sm">✦</span>
              <span className="font-medium text-[11px]">Conducted in NABH-Accredited Hospital Suites</span>
            </div>
          </div>

          {/* Right Column: 4 Horizontal Steps with Dotted Connector Line */}
          <div className="lg:col-span-8 relative">
            <div className="hidden md:block absolute top-6 inset-x-8 h-0 border-t-2 border-dashed border-[#C5B5D6] z-0" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 relative z-10">
              {STEPS.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-12 h-12 rounded-full bg-white border border-[#D5C6E4] flex items-center justify-center shadow-xs group-hover:scale-110 group-hover:border-[#876F9F] transition-all duration-300">
                    {step.icon}
                  </div>

                  <span className="mt-3 text-[10px] font-bold tracking-[0.16em] uppercase text-[#6D5E80]">
                    {step.num}
                  </span>
                  <h3 className="mt-0.5 text-xs sm:text-[13px] font-semibold text-[#2A2533]">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#5D516E] leading-relaxed max-w-[150px]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
