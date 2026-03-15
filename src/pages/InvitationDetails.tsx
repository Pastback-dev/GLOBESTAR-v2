import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { DollarSign, Clock, ShieldCheck } from 'lucide-react';

const InvitationDetails = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />
    <section className="py-20 bg-section-gray">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-navy mb-4">Details & Costs</h1>
          <div className="w-12 h-1 bg-orange mx-auto" />
          <p className="mt-6 text-muted-foreground">Transparent pricing and processing details for our invitation services.</p>
        </div>

        <div className="grid gap-8">
          <div className="bg-background p-8 rounded-lg border shadow-sm flex gap-6">
            <div className="w-12 h-12 bg-navy/5 rounded flex items-center justify-center shrink-0">
              <DollarSign className="text-navy" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-2">Service Fees</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Costs vary depending on the country and type of invitation (Visit, Business, or Family). Please contact our team for a personalized quote based on your specific destination and requirements.
              </p>
            </div>
          </div>

          <div className="bg-background p-8 rounded-lg border shadow-sm flex gap-6">
            <div className="w-12 h-12 bg-navy/5 rounded flex items-center justify-center shrink-0">
              <Clock className="text-navy" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-2">Processing Time</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Standard processing typically takes 3-7 business days. Express services may be available for certain countries.
              </p>
            </div>
          </div>

          <div className="bg-background p-8 rounded-lg border shadow-sm flex gap-6">
            <div className="w-12 h-12 bg-navy/5 rounded flex items-center justify-center shrink-0">
              <ShieldCheck className="text-navy" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-2">What's Included</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our service includes the official invitation letter, host documentation, and guidance on how to present the letter during your visa interview.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 p-8 bg-navy rounded-lg text-center">
          <h3 className="text-xl font-bold text-navy-foreground mb-4">Ready to start your application?</h3>
          <p className="text-navy-foreground/80 mb-8">Contact our experts today for a detailed breakdown of costs for your destination.</p>
          <a href="#contact" className="inline-block bg-orange text-orange-foreground px-8 py-3 rounded font-bold hover:bg-orange-hover transition-colors">
            Get a Quote
          </a>
        </div>
      </div>
    </section>
    <FooterSection />
    <WhatsAppButton />
  </div>
);

export default InvitationDetails;