import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ArrowRight, Plane, Briefcase, GraduationCap, Building2, Landmark, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const PageHero = ({ title, breadcrumb }: { title: string; breadcrumb: string }) => (
  <div className="bg-[#0e2a47] py-16 md:py-24 text-white text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase italic animate-fade-in">{title}</h1>
      <p className="text-orange text-sm uppercase tracking-widest">{breadcrumb}</p>
    </div>
  </div>
);

const AvailableVisas = () => {
  const { t, isRTL } = useLanguage();

  const visaCategories = [
    {
      title: t('nav.visitingVisas'),
      icon: Plane,
      to: '/visiting-visa',
      desc: t('visas.visitingDesc')
    },
    {
      title: t('nav.studyingVisas'),
      icon: GraduationCap,
      to: '/studying-visa',
      desc: t('visas.studyingDesc')
    },
    {
      title: t('nav.businessImmigration'),
      icon: Building2,
      to: '/business-immigration',
      desc: t('visas.businessDesc')
    },
    {
      title: t('nav.companyReg'),
      icon: Landmark,
      to: '/company-registration',
      desc: t('visas.companyDesc')
    },
    {
      title: t('nav.invitations'),
      icon: Globe,
      to: '/types-of-invitation',
      desc: t('visas.invitationDesc')
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <PageHero title={t('visas.heroTitle')} breadcrumb={t('visas.heroBreadcrumb')} />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-[#f27024] text-sm font-bold uppercase tracking-widest mb-3">{t('visas.servicesCategories')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e2a47] mb-6 uppercase italic">{t('visas.exploreServices')}</h2>
          <div className="w-16 h-1 bg-[#f27024] mx-auto mb-8"></div>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto italic">
            {t('visas.exploreDesc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {visaCategories.map((cat, idx) => (
            <div key={idx} className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all group flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-2xl bg-section-gray flex items-center justify-center mb-6 group-hover:-rotate-12 group-hover:bg-[#0e2a47] group-hover:text-white transition-all duration-300">
                <cat.icon size={40} className="text-[#0e2a47] group-hover:text-[#f27024]" />
              </div>
              <h3 className="text-xl font-bold text-[#0e2a47] mb-4 uppercase italic leading-tight">{cat.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-8 italic">
                {cat.desc}
              </p>
              <div className="mt-auto w-full">
                <Link 
                  to={cat.to} 
                  className={`flex items-center justify-center gap-2 text-[#f27024] font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {t('visas.viewDetails')} <ArrowRight size={14} className={isRTL ? 'rotate-180' : ''} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#0e2a47] rounded-[2.5rem] p-12 md:p-20 text-white relative overflow-hidden text-start">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className={`max-w-2xl ${isRTL ? 'md:text-right' : 'md:text-left'} text-center w-full`}>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 italic leading-tight uppercase">
                {t('visas.readyToStart').split('?')[0]}?<br />{t('visas.readyToStart').split('?')[1]}
              </h3>
              <p className="text-white/70 text-lg mb-8 italic">
                {t('visas.expertsAvailable')}
              </p>
              <Link 
                to="/contact" 
                className="bg-[#f27024] text-white px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform inline-block shadow-2xl shadow-orange-500/20"
              >
                {t('nav.bookAppointment')}
              </Link>
            </div>
            <div className="shrink-0">
              <div className="w-32 h-32 md:w-48 md:h-48 border-8 border-white/5 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-[#f27024] rounded-full animate-pulse shadow-2xl shadow-orange-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default AvailableVisas;
