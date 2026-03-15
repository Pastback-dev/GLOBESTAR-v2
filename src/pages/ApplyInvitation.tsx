import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';

const ApplyInvitation = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />
    <section className="py-20 bg-section-gray">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-navy mb-4">Apply Invitation Letter</h1>
        <div className="w-12 h-1 bg-orange mb-8" />
        <p className="text-muted-foreground">The application process and form for requesting an invitation letter will be available here.</p>
      </div>
    </section>
    <FooterSection />
    <WhatsAppButton />
  </div>
);

export default ApplyInvitation;