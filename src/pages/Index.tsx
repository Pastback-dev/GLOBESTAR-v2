import { TopBar, Navbar } from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ThreeCardSection from '@/components/ThreeCardSection';
import CTABanner from '@/components/CTABanner';
import ServicesSection from '@/components/ServicesSection';
import DestinationsSection from '@/components/DestinationsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import InfoSection from '@/components/InfoSection';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ThreeCardSection />
    <CTABanner />
    <ServicesSection />
    <DestinationsSection />
    <TestimonialsSection />
    <InfoSection />
    <FooterSection />
    <WhatsAppButton />
  </div>
);

export default Index;
