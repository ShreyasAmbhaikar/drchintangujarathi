import Header from '@/components/portfolio/Header';
import HeroSection from '@/components/portfolio/HeroSection';
import StatsStrip from '@/components/portfolio/StatsStrip';
import StackedProceduresSection from '@/components/portfolio/StackedProceduresSection';
import BeforeAfterSection from '@/components/portfolio/BeforeAfterSection';
import ProcessSection from '@/components/portfolio/ProcessSection';
import CredentialsSpotlight from '@/components/portfolio/CredentialsSpotlight';
import ReviewsSection from '@/components/portfolio/ReviewsSection';
import FaqSection from '@/components/portfolio/FaqSection';
import Footer from '@/components/portfolio/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#25202E] flex flex-col selection:bg-[#EAE4F2] selection:text-[#25202E]">
      <Header />
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Dynamic Living Atmospheric Mesh Background — Contained strictly within main content */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[2%] -right-16 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-[#DEC5F8]/70 via-[#F7C6B0]/55 to-transparent blur-[85px] animate-float-1" />
          <div className="absolute top-[18%] -left-20 w-[680px] h-[680px] rounded-full bg-gradient-to-tr from-[#F8CDB8]/70 via-[#E4CAF7]/60 to-transparent blur-[80px] animate-float-2" />
          <div className="absolute top-[38%] right-[-5%] w-[750px] h-[750px] rounded-full bg-gradient-to-bl from-[#D8BAF5]/65 via-[#F7C4B2]/50 to-transparent blur-[90px] animate-float-3" />
          <div className="absolute top-[58%] left-[-8%] w-[720px] h-[720px] rounded-full bg-gradient-to-tr from-[#F7CDB7]/70 via-[#DFCAF8]/60 to-transparent blur-[85px] animate-float-1" />
          <div className="absolute top-[75%] right-[-4%] w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-[#DEC4F7]/65 via-[#F8CBB8]/55 to-transparent blur-[80px] animate-float-2" />
          <div className="absolute bottom-[10%] -left-16 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#F8CCB5]/60 via-[#D6B5F5]/50 to-transparent blur-[85px] animate-float-3" />
        </div>

        {/* Homepage Sections with spacious mobile breathing room and untouched desktop layout */}
        <div className="relative z-10 flex flex-col space-y-10 sm:space-y-0 pb-12 sm:pb-16">
          <HeroSection />
          <StatsStrip />
          <StackedProceduresSection />
          <BeforeAfterSection />
          <ProcessSection />
          <CredentialsSpotlight />
          <ReviewsSection />
          <FaqSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
