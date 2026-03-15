import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';

const TypesOfInvitation = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />
    <section className="py-20 bg-section-gray">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-navy mb-4">Types of Invitation</h1>
        <div className="w-12 h-1 bg-orange mb-8" />
        <p className="text-muted-foreground">Content for different types of visa invitations will be displayed here.</p>
      </div>
    </section>
    <FooterSection />
    <WhatsAppButton />
  </div>
);

export default TypesOfInvitation;