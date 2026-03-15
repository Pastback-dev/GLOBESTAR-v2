import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CheckCircle2, DollarSign, Clock, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageHero = ({ title, breadcrumb }: { title: string; breadcrumb: string }) => (
  <div className="bg-[#0e2a47] py-16 md:py-24 text-white text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase">{title}</h1>
      <p className="text-orange text-sm uppercase tracking-widest">{breadcrumb}</p>
    </div>
  </div>
);

const pricingData = [
  { type: 'Visit Visa Invitation', duration: '15 Days', price: '150', refund: '€50' },
  { type: 'Visit Visa Invitation', duration: '30 Days', price: '250', refund: '€100' },
  { type: 'Visit Visa Invitation', duration: '90 Days', price: '350', refund: '€150' },
  { type: 'Family Visa Invitation', duration: '90 Days', price: '350', refund: '€150' },
  { type: 'Family Visa Invitation', duration: '180 Days', price: '550', refund: '€250' },
  { type: 'Business Visa Invitation', duration: '30 Days', price: '450', refund: '€200' },
  { type: 'Business Visa Invitation', duration: '90 Days', price: '650', refund: '€300' },
  { type: 'Business Visa Invitation', duration: '1 Year', price: '1050', refund: '€500' },
];

const DetailsAndCosts = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <PageHero title="Details & Costs" breadcrumb="Home / Invitations / Details & Costs" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-[#f27024] text-sm font-bold uppercase tracking-widest mb-3">PRICING PLANS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e2a47] mb-6">Invitation Letter Pricing</h2>
          <div className="w-16 h-1 bg-[#f27024] mx-auto mb-8"></div>
          <p className="text-gray-600 leading-relaxed">
            Our pricing is transparent and includes processing fees. We offer a partial refund policy if the invitation letter is not approved.
          </p>
        </div>

        <div className="max-w-6xl mx-auto overflow-x-auto mb-20 shadow-xl rounded-xl border border-gray-100">
          <table className="w-full text-left bg-white min-w-[600px]">
            <thead>
              <tr className="bg-[#0e2a47] text-white">
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-sm">Visa Type</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-sm">Duration</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-sm">Total Cost</th>
                <th className="px-6 py-4 font-bold uppercase tracking-wider text-sm text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {pricingData.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center text-[#f27024]">
                        <FileText size={16} />
                      </div>
                      <span className="font-bold text-[#0e2a47]">{item.type}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-gray-600 font-medium italic">{item.duration}</td>
                  <td className="px-6 py-5">
                    <span className="text-xl font-bold text-[#f27024]">€{item.price}</span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <Link 
                      to="/apply-invitation" 
                      className="inline-block bg-[#0e2a47] text-white px-6 py-2 rounded-lg text-sm font-bold hover:bg-opacity-90 transition-all uppercase tracking-wider"
                    >
                      Apply Now
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-[#0e2a47] mb-6">Processing Details</h3>
            <ul className="space-y-4">
              {[
                { label: 'Processing Time', value: '3-7 Working Days', icon: Clock },
                { label: 'Partial Refund', value: 'Case-by-case basis', icon: DollarSign },
                { label: 'Validity', value: 'Guaranteed Acceptance', icon: CheckCircle2 },
              ].map((item, idx) => (
                <li key={idx} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0 italic">
                  <div className="flex items-center gap-3 text-gray-500">
                    <item.icon size={18} className="text-[#f27024]" />
                    <span>{item.label}</span>
                  </div>
                  <span className="font-bold text-[#0e2a47]">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#0e2a47] p-8 rounded-xl text-white">
            <h3 className="text-xl font-bold mb-6 italic">Required Information</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              To process your invitation letter, we require a clear scanned copy of your passport (all relevant pages) and your current residential address.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 text-[#f27024] font-bold hover:gap-3 transition-all italic underline underline-offset-4"
            >
              Contact support for more details
            </Link>
          </div>
        </div>
      </div>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default DetailsAndCosts;