import Navbar from "@/components/landing/Navbar";
import BackgroundAnimation from "@/components/landing/BackgroundAnimation";
import FloatingWhatsApp from "@/components/landing/FloatingWhatsApp";
import HeroSection from "@/components/landing/HeroSection";
import AuthoritySection from "@/components/landing/AuthoritySection";
import AboutSection from "@/components/landing/AboutSection";
import ServicesSection from "@/components/landing/ServicesSection";
import DifferentialSection from "@/components/landing/DifferentialSection";
import ExperienceSection from "@/components/landing/ExperienceSection";
import ResultsSection from "@/components/landing/ResultsSection";
import AudienceSection from "@/components/landing/AudienceSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <>
    <BackgroundAnimation />
    <FloatingWhatsApp />
    <Navbar />
    <HeroSection />
    <AuthoritySection />
    <AboutSection />
    <ServicesSection />
    <DifferentialSection />
    <ExperienceSection />
    <ResultsSection />
    <AudienceSection />
    <CTASection />
    <Footer />
  </>
);

export default Index;
