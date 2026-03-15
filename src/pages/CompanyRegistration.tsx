import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CheckCircle2, Building, Landmark, Scale, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageHero = ({ title, breadcrumb }: { title: string; breadcrumb: string }) => (
  <div className="bg-[#0e2a47] py-16 md:py-24 text-white text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase">{title}</h1>
      <p className="text-orange text-sm uppercase tracking-widest">{breadcrumb}</p>
    </div>
  </div>
);

const registrationServices = [
  { country: 'Lithuania', price: '1500', icon: Building },
  { country: 'Estonia', price: '1500', icon: Building },
  { country: 'Albania', price: '1200', icon: Landmark },
  { country: 'Belarus', price: '1200', icon: Building },
  { country: 'UK', price: '650', icon: Scale },
  { country: 'Ireland', price: '1050', icon: Landmark },
];

const CompanyRegistration = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <PageHero title="Companies Registration" breadcrumb="Home / Services / Company Registration" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-[#f27024] text-sm font-bold uppercase tracking-widest mb-3">COUNTRIES WE OFFER SUPPORT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e2a47] mb-6">Company Registration Services</h2>
          <div className="w-16 h-1 bg-[#f27024] mx-auto mb-8"></div>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Incorporating your business we make setting up your company fast and easy. 
            We provide full legal assistance in the registration of your company.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {registrationServices.map((service) => (
            <div key={service.country} className="bg-white border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-section-gray rounded-full flex items-center justify-center mx-auto mb-6">
                <service.icon className="text-[#0e2a47]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0e2a47] mb-2">{service.country} Company Registration</h3>
              <div className="text-sm text-gray-400 mb-6 uppercase tracking-widest">Basic Package</div>
              <div className="text-3xl font-bold text-[#f27024] mb-8">€{service.price}</div>
              <Link 
                to="/company-registration-form" 
                className="block w-full bg-[#0e2a47] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-section-gray p-8 rounded-xl border border-gray-100 text-center">
          <h3 className="text-xl font-bold text-[#0e2a47] mb-4">Need More Details?</h3>
          <p className="text-gray-600 text-sm mb-6">For more details contact us via email & whatsapp</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-[#f27024] text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-lg shadow-orange-500/20"
          >
            Get In Touch
          </Link>
        </div>

        <div className="mt-20 p-8 border-t text-center opacity-70">
          <p className="text-sm text-gray-500">
            Easy Inspire MB is an approved Lithuanian company incorporated at the VALSTYBĖS ĮMONIŲ REGISTRŲ CENTRAS. 
            Our registration number is 306016085
          </p>
        </div>
      </div>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default CompanyRegistration;
