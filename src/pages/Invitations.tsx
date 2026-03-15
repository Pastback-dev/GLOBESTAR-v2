import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { FileText, CheckCircle2, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Invitations = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">Visa Invitation Services</h1>
          <div className="w-16 h-1 bg-orange mx-auto mb-8" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            We provide professional assistance in obtaining official invitation letters for various visa categories across Europe and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 bg-section-gray rounded-lg text-center">
            <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="text-navy" size={32} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-4">Official Documents</h3>
            <p className="text-muted-foreground text-sm">Legally recognized invitation letters from registered hosts and companies.</p>
          </div>
          <div className="p-8 bg-section-gray rounded-lg text-center">
            <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="text-navy" size={32} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-4">High Success Rate</h3>
            <p className="text-muted-foreground text-sm">Expertly crafted letters that meet all embassy and consulate requirements.</p>
          </div>
          <div className="p-8 bg-section-gray rounded-lg text-center">
            <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe2 className="text-navy" size={32} />
            </div>
            <h3 className="text-xl font-bold text-navy mb-4">Global Coverage</h3>
            <p className="text-muted-foreground text-sm">Support for over 25 countries including UK, Lithuania, and Albania.</p>
          </div>
        </div>

        <div className="text-center">
          <Link 
            to="/invitation-types" 
            className="inline-flex items-center gap-2 bg-navy text-navy-foreground px-8 py-4 rounded font-bold hover:bg-navy-light transition-colors"
          >
            Explore Invitation Types
          </Link>
        </div>
      </div>
    </section>
    <FooterSection />
    <WhatsAppButton />
  </div>
);

export default Invitations;