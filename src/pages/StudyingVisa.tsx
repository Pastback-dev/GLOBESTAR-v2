import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CheckCircle2, BookOpen, GraduationCap, Globe, Clock } from 'lucide-react';
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

const StudyingVisa = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-start">
      <TopBar />
      <Navbar />
      <PageHero title={t('studying.heroTitle')} breadcrumb={t('studying.heroBreadcrumb')} />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-[#f27024] text-sm font-bold uppercase tracking-widest mb-3">{t('studying.servicesTitle')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e2a47] mb-6 italic">{t('studying.opportunitiesHeading')}</h2>
          <div className="w-16 h-1 bg-[#f27024] mx-auto mb-8"></div>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto italic">
            {t('studying.intro')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
            <h3 className="text-xl font-bold text-[#0e2a47] mb-4 italic uppercase">{t('studying.ukTitle')}</h3>
            <p className="text-sm text-gray-500 mb-6 font-medium italic">{t('studying.ukDesc')}</p>
            <a href="https://www.applyboard.com/partners/1505191/intake-form" target="_blank" className="block w-full bg-[#0e2a47] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors uppercase text-xs tracking-widest">
              {t('studying.applyNow')}
            </a>
          </div>
          <div className="bg-white border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
            <h3 className="text-xl font-bold text-[#0e2a47] mb-4 italic uppercase">{t('studying.irelandTitle')}</h3>
            <p className="text-sm text-gray-500 mb-6 font-medium italic">{t('studying.irelandDesc')}</p>
            <a href="https://www.applyboard.com/partners/1505191/intake-form" target="_blank" className="block w-full bg-[#0e2a47] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors uppercase text-xs tracking-widest">
              {t('studying.applyNow')}
            </a>
          </div>
          <div className="bg-white border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
            <h3 className="text-xl font-bold text-[#0e2a47] mb-4 italic uppercase">{t('studying.germanyTitle')}</h3>
            <p className="text-sm text-gray-500 mb-6 font-medium italic">{t('studying.germanyDesc')}</p>
            <a href="https://www.applyboard.com/partners/1505191/intake-form" target="_blank" className="block w-full bg-[#0e2a47] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors uppercase text-xs tracking-widest">
              {t('studying.applyNow')}
            </a>
          </div>
        </div>

        <div className="bg-section-gray p-8 md:p-12 rounded-2xl mb-20 text-center">
          <h3 className="text-2xl font-bold text-[#0e2a47] mb-6 italic uppercase">{t('studying.languageProgHeading')}</h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed italic">
            {t('studying.languageIntro')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: t('studying.spain'), lang: t('studying.spanish') },
              { name: t('studying.italy'), lang: t('studying.italian') },
              { name: t('studying.poland'), lang: t('studying.polish') },
              { name: t('studying.france'), lang: t('studying.french') },
            ].map(lang => (
              <div key={lang.name} className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-bold text-[#0e2a47] italic">{lang.name}</p>
                <p className="text-xs text-[#f27024] uppercase tracking-wider font-bold">{lang.lang}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-sm border">
            <h3 className="text-xl font-bold text-[#0e2a47] mb-6 italic">{t('studying.howLongHeading')}</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Clock className="text-[#f27024] shrink-0" size={20} />
                <p className="text-sm text-gray-600 italic leading-relaxed">
                  {t('studying.studyVisaProcess')}
                </p>
              </div>
              <div className="flex gap-3">
                <Clock className="text-[#f27024] shrink-0" size={20} />
                <p className="text-sm text-gray-600 italic leading-relaxed">
                  {t('studying.admissionProcess')}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#0e2a47] p-8 rounded-xl text-white">
            <h3 className="text-xl font-bold mb-6 italic">{t('studying.docReqHeading')}</h3>
            <ul className="space-y-3">
              {[
                t('studying.reqEdu'),
                t('visiting.reqPassport'),
                t('visiting.reqID'),
                t('visiting.reqPhoto'),
                t('studying.reqResume'),
              ].map((req, idx) => (
                <li key={idx} className="flex items-center gap-3 text-white/80 text-sm">
                  <CheckCircle2 className="text-[#f27024]" size={16} />
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

export default StudyingVisa;