import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CheckCircle2, Mail, Clock, ArrowRight } from 'lucide-react';
import { Link, useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {
  const [params] = useSearchParams();
  const country = params.get('country') ?? '';
  const type = params.get('type') ?? '';
  const amount = params.get('amount') ?? '';

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />

      {/* Hero */}
      <div className="bg-[#0e2a47] py-16 md:py-24 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase">Payment Successful</h1>
          <p className="text-orange text-sm uppercase tracking-widest">Thank you for your order</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 max-w-2xl">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Top accent */}
          <div className="h-2 bg-gradient-to-r from-[#f27024] to-[#f9a060]" />

          <div className="p-10 text-center space-y-6">
            {/* Animated check */}
            <div className="flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center animate-pulse">
                <CheckCircle2 size={56} className="text-green-500" />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0e2a47] mb-2">Payment Confirmed!</h2>
              <p className="text-gray-500 text-sm italic">
                We have received your payment and are now processing your invitation letter.
              </p>
            </div>

            {/* Summary */}
            {(country || type || amount) && (
              <div className="bg-gray-50 rounded-xl p-6 text-sm space-y-3 text-left border border-gray-100">
                <p className="text-[10px] font-bold text-[#f27024] uppercase tracking-widest mb-2">Order Summary</p>
                {country && (
                  <div className="flex justify-between text-gray-700">
                    <span className="font-medium">Country</span>
                    <span className="font-bold text-[#0e2a47]">{country}</span>
                  </div>
                )}
                {type && (
                  <div className="flex justify-between text-gray-700">
                    <span className="font-medium">Invitation Type</span>
                    <span className="font-bold text-[#0e2a47] capitalize">{type}</span>
                  </div>
                )}
                {amount && (
                  <div className="flex justify-between text-gray-700">
                    <span className="font-medium">Amount Paid</span>
                    <span className="font-bold text-green-600">€{amount}</span>
                  </div>
                )}
              </div>
            )}

            {/* What's next */}
            <div className="space-y-4 text-left">
              <p className="text-[10px] font-bold text-[#f27024] uppercase tracking-widest">What happens next?</p>
              <div className="space-y-3">
                {[
                  { icon: <Mail size={16} className="text-[#f27024]" />, text: 'You will receive a confirmation email within a few minutes.' },
                  { icon: <Clock size={16} className="text-[#f27024]" />, text: 'Your invitation letter will be sent to your email within 3 business days.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start bg-orange/5 p-3 rounded-lg border border-orange/10">
                    <div className="shrink-0 pt-0.5">{item.icon}</div>
                    <p className="text-xs text-gray-600 italic">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/"
                className="flex-1 py-3 rounded-lg border-2 border-[#0e2a47] text-[#0e2a47] font-bold text-xs uppercase tracking-widest text-center hover:bg-[#0e2a47] hover:text-white transition-all"
              >
                Back to Home
              </Link>
              <Link
                to="/apply-invitation"
                className="flex-1 py-3 rounded-lg bg-[#f27024] text-white font-bold text-xs uppercase tracking-widest text-center hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
              >
                Apply Again <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact note */}
        <p className="text-center text-xs text-gray-400 italic mt-8">
          Questions? Contact us at{' '}
          <a href="mailto:globestarvisa@gmail.com" className="text-[#f27024] hover:underline">
            globestarvisa@gmail.com
          </a>
        </p>
      </div>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default PaymentSuccess;
