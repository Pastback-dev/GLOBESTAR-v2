import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CheckCircle2, Building, Landmark, Scale, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const PageHero = ({ title, breadcrumb }: { title: string; breadcrumb: string }) => (
  <div className="bg-[#0e2a47] py-16 md:py-24 text-white text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase">{title}</h1>
      <p className="text-orange text-sm uppercase tracking-widest">{breadcrumb}</p>
    </div>
  </div>
);

const CompanyRegistration = () => {
  const { t } = useLanguage();

  const registrationServices = [
    { country: t('country.lithuania'), price: '1550 ($1705 / 17050 MAD)', icon: Building },
    { country: t('country.estonia'), price: '1550 ($1705 / 17050 MAD)', icon: Building },
    { country: t('country.albania'), price: '1250 ($1375 / 13750 MAD)', icon: Landmark },
    { country: t('country.belarus'), price: '1250 ($1375 / 13750 MAD)', icon: Building },
    { country: t('country.uk'), price: '700 ($770 / 7700 MAD)', icon: Scale },
    { country: t('country.ireland'), price: '1100 ($1210 / 12100 MAD)', icon: Landmark },
  ];

  return (
    <div className="min-h-screen bg-background text-start">
      <TopBar />
      <Navbar />
      <PageHero title={t('company.heroTitle')} breadcrumb={t('company.heroBreadcrumb')} />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-[#f27024] text-sm font-bold uppercase tracking-widest mb-3 italic">{t('company.supportHeading')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e2a47] mb-6 italic uppercase">{t('company.servicesHeading')}</h2>
          <div className="w-16 h-1 bg-[#f27024] mx-auto mb-8"></div>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto italic">
            {t('company.intro')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {registrationServices.map((service) => (
            <div key={service.country} className="bg-white border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-section-gray rounded-full flex items-center justify-center mx-auto mb-6">
                <service.icon className="text-[#0e2a47]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0e2a47] mb-2 italic">
                {t('company.regIn')} {service.country}
              </h3>
              <div className="text-sm text-gray-400 mb-6 uppercase tracking-widest font-bold">{t('company.basicPackage')}</div>
              <div className="text-3xl font-bold text-[#f27024] mb-8">€{service.price}</div>
              <Link 
                to="/company-registration-form" 
                className="block w-full bg-[#0e2a47] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors uppercase text-xs tracking-widest"
              >
                {t('costs.applyNow')}
              </Link>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-section-gray p-8 rounded-xl border border-gray-100 text-center">
          <h3 className="text-xl font-bold text-[#0e2a47] mb-4 italic">{t('company.needDetails')}</h3>
          <p className="text-gray-600 text-sm mb-6 italic">{t('company.contactForDetails')}</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-[#f27024] text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-lg shadow-orange-500/20"
          >
            {t('company.getInTouch')}
          </Link>
        </div>

        <div className="mt-20 p-8 border-t text-center opacity-70 italic">
          <p className="text-sm text-gray-500">
            {t('company.disclaimer')}
          </p>
        </div>
      </div>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default CompanyRegistration;
