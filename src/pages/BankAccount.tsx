import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CreditCard, Wallet, Landmark, CheckCircle2, Copy } from 'lucide-react';
import { toast } from 'sonner';

const PageHero = ({ title, breadcrumb }: { title: string; breadcrumb: string }) => (
  <div className="bg-[#0e2a47] py-16 md:py-24 text-white text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase italic">{title}</h1>
      <p className="text-orange text-sm uppercase tracking-widest">{breadcrumb}</p>
    </div>
  </div>
);

const PaymentCard = ({ title, details, icon: Icon, color }: any) => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard');
  };

  return (
    <div className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
      <div className={`h-2 ${color}`}></div>
      <div className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-section-gray flex items-center justify-center">
            <Icon size={24} className="text-[#0e2a47]" />
          </div>
          <h3 className="text-xl font-bold text-[#0e2a47] uppercase italic">{title}</h3>
        </div>
        <div className="space-y-4">
          {details.map((item: any, idx: number) => (
            <div key={idx} className="flex justify-between items-start gap-4 py-3 border-b border-gray-50 last:border-0 italic">
              <span className="text-gray-400 text-sm shrink-0">{item.label}:</span>
              <div className="flex items-center gap-2 text-right">
                <span className="font-bold text-[#0e2a47] text-sm break-all">{item.value}</span>
                <button onClick={() => handleCopy(item.value)} className="text-[#f27024] p-1 hover:bg-orange-50 rounded">
                  <Copy size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BankAccount = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <PageHero title="Bank Accounts" breadcrumb="Home / About / Bank Accounts" />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-[#f27024] text-sm font-bold uppercase tracking-widest mb-3">PAYMENT METHODS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e2a47] mb-6 uppercase italic">Our Official Bank Accounts</h2>
          <div className="w-16 h-1 bg-[#f27024] mx-auto mb-8"></div>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto italic">
            Please use only our official accounts for any payments. Always verify the account name is <span className="font-bold text-[#0e2a47]">GLOBESTAR</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <PaymentCard
            title="PAYSERA ACCOUNT"
            color="bg-blue-500"
            icon={Landmark}
            details={[
              { label: 'Bank Name', value: 'Paysera (LT)' },
              { label: 'Beneficiary', value: 'GLOBESTAR' },
              { label: 'IBAN', value: 'LT123456789012345678' },
              { label: 'Swift Code', value: 'PSRLT22' },
            ]}
          />
          <PaymentCard
            title="PAYPAL"
            color="bg-indigo-600"
            icon={CreditCard}
            details={[
              { label: 'Account Name', value: 'GLOBESTAR' },
              { label: 'PayPal Email', value: 'globestarvisa@gmail.com' },
              { label: 'Status', value: 'Verified Business' },
            ]}
          />
          <PaymentCard
            title="BINANCE (USDT)"
            color="bg-yellow-500"
            icon={Wallet}
            details={[
              { label: 'Network', value: 'TRC20 (Tron)' },
              { label: 'Asset', value: 'USDT' },
              { label: 'Address', value: 'Txxxxxxxxxxxxxxxxxxxxxxxxx' },
            ]}
          />
        </div>

        <div className="max-w-4xl mx-auto bg-[#0e2a47] p-8 md:p-12 rounded-3xl text-white">
          <h3 className="text-2xl font-bold mb-8 italic text-center uppercase">Secure Payment Policy</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                'Online payments are quick and secure.',
                'Immediate payment confirmation.',
                '0% Transaction fees for bank transfers.',
                'WhatsApp support for payment assistance.',
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#f27024] shrink-0" size={18} />
                  <span className="text-sm text-white/80 italic">{text}</span>
                </div>
              ))}
            </div>
            <div className="bg-white/5 p-6 rounded-xl border border-white/10">
              <p className="text-sm text-white/60 leading-relaxed italic">
                After making a payment, please send a screenshot of the transaction receipt to our official WhatsApp +34 624 13 21 71 or email us at globestarvisa@gmail.com for faster processing.
              </p>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default BankAccount;