import React from 'react';
import Image from 'next/image';

const PROJECTS = [
  {
    title: 'Bloom Skincare',
    category: 'E-COMMERCE & BRANDING',
    desc: 'Complete e-commerce redesign focused on organic beauty and clean shopping flow.',
    image: '/images/bloom-skincare.jpg',
  },
  {
    title: 'Finova Dashboard',
    category: 'FINTECH & ANALYTICS',
    desc: 'SaaS analytics platform simplifying complex financial data for small businesses.',
    image: '/images/finova-dashboard.jpg',
  },
  {
    title: 'Nourish Kitchen',
    category: 'MOBILE APP & LIFESTYLE',
    desc: 'Recipe discovery app featuring meal planning, grocery lists, and mindful eating.',
    image: '/images/nourish-kitchen.jpg',
  },
];

export default function SelectedWorkSection() {
  return (
    <section id="work" className="w-full max-w-[1280px] mx-auto px-6 py-16 lg:py-20">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 border-b border-[#EDE6F5]">
        <div>
          <span className="text-xs font-semibold tracking-[0.24em] text-[#9784B4] uppercase">
            Selected Work
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-normal text-[#25202E]">
            A few things <span className="font-serif italic font-normal text-[#9784B4]">I&apos;m proud of.</span>
          </h2>
        </div>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#25202E] hover:text-[#9784B4] uppercase transition-colors"
        >
          <span>View All Projects</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>

      {/* 3 Projects Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <div
            key={idx}
            className="group flex flex-col bg-white rounded-[24px] border border-[#EDE6F5] p-5 card-shadow hover:border-[#9784B4]/50 transition-all duration-300 hover:-translate-y-1.5"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-[16/11] rounded-[18px] overflow-hidden bg-[#F0ECF5]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 380px"
              />
            </div>

            {/* Content */}
            <div className="pt-6 pb-2 px-1 flex flex-col">
              <span className="text-[10px] font-semibold tracking-[0.2em] text-[#9784B4] uppercase">
                {project.category}
              </span>
              <h3 className="mt-2 text-xl font-medium text-[#25202E] group-hover:text-[#9784B4] transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#6D6677] leading-relaxed">
                {project.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
