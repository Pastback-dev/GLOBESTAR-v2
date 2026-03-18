import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ArrowRight, Plane, Globe, Building2, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const PageHero = ({ title, breadcrumb }: { title: string; breadcrumb: string }) => (
  <div className="bg-[#0e2a47] py-16 md:py-24 text-white text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
      <p className="text-orange text-sm uppercase tracking-widest">{breadcrumb}</p>
    </div>
  </div>
);

const BusinessImmigration = () => {
  const { t, isRTL } = useLanguage();

  const immigrationServices = [
    {
      country: t('country.lithuania'),
      price: '10550 ($11605 / 116050 MAD)',
      desc: t('immigration.lithuaniaDesc'),
      img: '/assets/business-lithuania.jpg'
    },
    {
      country: t('country.estonia'),
      price: '12550 ($13805 / 138050 MAD)',
      desc: t('immigration.estoniaDesc'),
      img: '/assets/business-estonia.jpg'
    },
    {
      country: t('country.albania'),
      price: '10550 ($11605 / 116050 MAD)',
      desc: t('immigration.albaniaDesc'),
      img: '/assets/business-albania.jpg'
    },
    {
      country: t('country.belarus'),
      price: '9050 ($9955 / 99550 MAD)',
      desc: t('immigration.belarusDesc'),
      img: '/assets/business-belarus.jpg',
      externalLink: 'https://mfa.gov.by/en/visa/registration/temporary_residence/'
    },
    {
      country: t('country.uk'),
      price: '12550 ($13805 / 138050 MAD)',
      desc: t('immigration.ukDesc'),
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
    },
    {
      country: t('country.ireland'),
      price: '10550 ($11605 / 116050 MAD)',
      desc: t('immigration.irelandDesc'),
      img: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-start">
      <TopBar />
      <Navbar />
      <PageHero title={t('immigration.heroTitle')} breadcrumb={t('immigration.heroBreadcrumb')} />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-[#f27024] text-sm font-bold uppercase tracking-widest mb-3 italic">{t('immigration.entrepreneurServices')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e2a47] mb-6 italic">{t('immigration.availableCountries')}</h2>
          <div className="w-16 h-1 bg-[#f27024] mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {immigrationServices.map((service) => (
            <div key={service.country} className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
              <div className="relative h-48 overflow-hidden">
                <img src={service.img} alt={service.country} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} bg-[#f27024] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                  {t('immigration.startingAt')} €{service.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0e2a47] mb-4 italic leading-tight">
                  {service.country} {t('immigration.heroTitle')}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                  {service.desc}
                </p>
                {service.externalLink ? (
                  <a
                    href={service.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-[#f27024] font-bold text-sm hover:gap-3 transition-all ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    {t('immigration.readMore')} <ArrowRight size={14} className={isRTL ? 'rotate-180' : ''} />
                  </a>
                ) : (
                  <Link
                    to="/contact"
                    className={`inline-flex items-center gap-2 text-[#f27024] font-bold text-sm hover:gap-3 transition-all ${isRTL ? 'flex-row-reverse' : ''}`}
                  >
                    {t('immigration.readMore')} <ArrowRight size={14} className={isRTL ? 'rotate-180' : ''} />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#0e2a47] p-8 md:p-12 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-6 italic uppercase">{t('immigration.trustedAssistance')}</h3>
          <p className="max-w-3xl mx-auto text-white/70 mb-10 text-sm leading-relaxed italic">
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-3">
              <Building2 className="text-[#f27024]" />
              <span className="text-sm font-semibold uppercase tracking-wider">{t('immigration.regLabel')}</span>
            </div>
            <div className="flex items-center gap-3">
              <Landmark className="text-[#f27024]" />
              <span className="text-sm font-semibold uppercase tracking-wider">{t('team.legalConsultant')}</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="text-[#f27024]" />
              <span className="text-sm font-semibold uppercase tracking-wider">{t('immigration.visaProcessing')}</span>
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
