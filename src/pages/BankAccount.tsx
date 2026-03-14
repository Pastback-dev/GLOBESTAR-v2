import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Building2, CreditCard, Landmark } from 'lucide-react';

const BankAccount = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />
    <section className="py-20 bg-section-gray">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-navy mb-4">Bank Account Details</h1>
          <div className="w-12 h-1 bg-orange mx-auto" />
          <p className="mt-6 text-muted-foreground">Please use the following details for all official transactions and service payments.</p>
        </div>
        
        <div className="bg-background p-8 rounded-lg shadow-sm border space-y-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-navy/5 rounded flex items-center justify-center shrink-0">
              <Building2 className="text-navy" />
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Bank Name</p>
              <p className="text-lg font-semibold text-navy">Global Standard Bank</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-navy/5 rounded flex items-center justify-center shrink-0">
              <CreditCard className="text-navy" />
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Account Number</p>
              <p className="text-lg font-semibold text-navy">1234 5678 9012 3456</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-navy/5 rounded flex items-center justify-center shrink-0">
              <Landmark className="text-navy" />
            </div>
            <div>
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">SWIFT / BIC Code</p>
              <p className="text-lg font-semibold text-navy">GLOBESTARXXX</p>
            </div>
          </div>
        </div>
        
        <p className="mt-8 text-center text-sm text-muted-foreground italic">
          * Always verify account details with our official representatives before making any transfers.
        </p>
      </div>
    </section>
    <FooterSection />
    <WhatsAppButton />
  </div>
);

export default BankAccount;