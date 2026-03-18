import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CheckCircle2, Globe, Plane, Clock } from 'lucide-react';
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

const VisitingVisa = () => {
  const { t } = useLanguage();

  const evisas = [
    { country: `${t('country.albania')} E-visa`, price: '550' },
    { country: `Moldova E-visa`, price: '1000' },
    { country: `Georgia E-visa`, price: '450' },
    { country: `Hong Kong E-visa`, price: '250' },
    { country: `Turkey E-visa`, price: '150' },
  ];

  return (
    <div className="min-h-screen bg-background text-start">
      <TopBar />
      <Navbar />
      <PageHero title={t('visiting.heroTitle')} breadcrumb={t('visiting.heroBreadcrumb')} />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-[#f27024] text-sm font-bold uppercase tracking-widest mb-3">{t('visiting.servicesTitle')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e2a47] mb-6">{t('visiting.applyHeading')}</h2>
          <div className="w-16 h-1 bg-[#f27024] mx-auto mb-8"></div>
          <p className="text-gray-600 leading-relaxed mb-6 italic">
            {t('visiting.para1')}
          </p>
          <p className="text-gray-600 leading-relaxed italic">
            {t('visiting.para2')}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {evisas.map((visa) => (
            <div key={visa.country} className="bg-white border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-section-gray rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="text-[#0e2a47]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0e2a47] mb-2">{visa.country}</h3>
              <div className="text-3xl font-bold text-[#f27024] mb-6">€{visa.price}</div>
              <Link 
                to="/contact" 
                className="block w-full bg-[#0e2a47] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                {t('visiting.applyHeading')}
              </Link>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-white p-8 rounded-xl shadow-sm border">
            <h3 className="text-2xl font-bold text-[#0e2a47] mb-8 text-center italic">{t('visiting.howToGetHeader')}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: t('visiting.step1Title'), step: `${t('costs.howToGetHeading').split(' ')[0]} 1`, text: t('visiting.step1Text') },
                { title: t('visiting.step2Title'), step: `${t('costs.howToGetHeading').split(' ')[0]} 2`, text: t('visiting.step2Text') },
                { title: t('visiting.step3Title'), step: `${t('costs.howToGetHeading').split(' ')[0]} 3`, text: t('visiting.step3Text') },
              ].map((s, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-[#f27024] font-bold text-sm uppercase mb-2">{s.step}</div>
                  <h4 className="font-bold text-[#0e2a47] mb-4 h-12 leading-tight italic">{s.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed italic">{s.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-section-gray p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-[#0e2a47] mb-8 italic">{t('visiting.typesHeading')}</h3>
            <div className="space-y-6">
              {[
                { title: t('visiting.generalTitle'), text: t('visiting.generalText') },
                { title: t('visiting.familyTitle'), text: t('visiting.familyText') },
                { title: t('visiting.businessTitle'), text: t('visiting.businessText') },
              ].map((type, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0e2a47] text-white flex items-center justify-center shrink-0 font-bold">{idx + 1}</div>
                  <div>
                    <h4 className="font-bold text-[#0e2a47] mb-1 italic">{type.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed italic">{type.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0e2a47] p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-6 italic">{t('visiting.docReqHeading')}</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                t('visiting.reqPassport'),
                t('visiting.reqID'),
                t('visiting.reqPhoto'),
                t('visiting.reqPolice'),
              ].map((req, idx) => (
                <li key={idx} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="text-[#f27024]" size={18} />
                  <span className="italic">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default VisitingVisa;