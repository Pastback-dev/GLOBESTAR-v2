import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ArrowRight, Plane, Globe, Building2, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageHero = ({ title, breadcrumb }: { title: string; breadcrumb: string }) => (
  <div className="bg-[#0e2a47] py-16 md:py-24 text-white text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
      <p className="text-orange text-sm uppercase tracking-widest">{breadcrumb}</p>
    </div>
  </div>
);

const immigrationServices = [
  {
    country: 'Lithuania',
    price: '10500',
    desc: 'Our company deals exclusively with business immigration to Lithuania and has and reliable option to obtain a yearly multiple-entry business visa.',
    img: '/assets/business-lithuania.jpg'
  },
  {
    country: 'Estonia',
    price: '12500',
    desc: 'Our company deals exclusively with business immigration to Estonia and has and reliable option to obtain a yearly multiple-entry business visa.',
    img: '/assets/business-estonia.jpg'
  },
  {
    country: 'Albania',
    price: '10500',
    desc: 'GLOBESTAR provides a complete range of immigration services to foreign individuals and entrepreneurs, who wish to visit, live and work in Albania.',
    img: '/assets/business-albania.jpg'
  },
  {
    country: 'Belarus',
    price: '9000',
    desc: 'A Belarus Temporary Residence Permit is a document, issued to non-citizens who wish to have the opportunity to immigrate, live and work in Belarus.',
    img: '/assets/business-belarus.jpg',
    externalLink: 'https://mfa.gov.by/en/visa/registration/temporary_residence/'
  },
  {
    country: 'United Kingdom',
    price: '12500',
    desc: 'Everything you need to register and conduct a company in the UK. We provide full legal assistance in the registration of your company in the UK.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
  },
  {
    country: 'Ireland',
    price: '10500',
    desc: 'Everything you need to register and conduct a company in Ireland. We provide full legal assistance in the registration of your company in Ireland.',
    img: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=800&q=80'
  }
];

const BusinessImmigration = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <PageHero title="Business Immigration" breadcrumb="Home / Immigration / Business Immigration" />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-[#f27024] text-sm font-bold uppercase tracking-widest mb-3">ENTREPRENEUR SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e2a47] mb-6">Business Immigration Available of the Following Countries</h2>
          <div className="w-16 h-1 bg-[#f27024] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {immigrationServices.map((service) => (
            <div key={service.country} className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
              <div className="relative h-48 overflow-hidden">
                <img src={service.img} alt={service.country} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-[#f27024] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  Starting at €{service.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0e2a47] mb-4">{service.country} Business Immigration</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                {service.externalLink ? (
                  <a
                    href={service.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#f27024] font-bold text-sm hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight size={14} />
                  </a>
                ) : (
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-[#f27024] font-bold text-sm hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#0e2a47] p-8 md:p-12 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-6">Trusted Professional Assistance</h3>
          <p className="max-w-3xl mx-auto text-white/70 mb-10 text-sm leading-relaxed">
            GLOBESTAR is an approved Lithuanian company incorporated at the VALSTYBĖS ĮMONIŲ REGISTRŲ CENTRAS. Our registration number is 306016085. We provide legal support and expertise for your global expansion.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
              <Building2 className="text-[#f27024]" />
              <span className="text-sm font-semibold uppercase tracking-wider">Company Registration</span>
            </div>
            <div className="flex items-center gap-3">
              <Landmark className="text-[#f27024]" />
              <span className="text-sm font-semibold uppercase tracking-wider">Legal Assistance</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="text-[#f27024]" />
              <span className="text-sm font-semibold uppercase tracking-wider">Visa Processing</span>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default BusinessImmigration;
