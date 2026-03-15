import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import ServicesSection from '@/components/ServicesSection';

const Invitations = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />
    <div className="pt-10">
      <ServicesSection />
    </div>
    <FooterSection />
    <WhatsAppButton />
  </div>
);

export default Invitations;