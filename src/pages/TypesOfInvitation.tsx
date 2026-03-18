import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { FileText, Users, Plane, Heart, MapPin, Briefcase } from 'lucide-react';
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

const TypesOfInvitation = () => {
  const { t } = useLanguage();

  const invitationTypes = [
    {
      icon: Plane,
      title: t('invitation.visitTitle'),
      definition: t('invitation.visitDef')
    },
    {
      icon: Briefcase,
      title: t('invitation.businessTitle'),
      definition: t('invitation.businessDef')
    },
    {
      icon: Heart,
      title: t('invitation.familyTitle'),
      definition: t('invitation.familyDef')
    },
    {
      icon: MapPin,
      title: t('invitation.touristTitle'),
      definition: t('invitation.touristDef')
    },
    {
      icon: FileText,
      title: t('invitation.privateTitle'),
      definition: t('invitation.privateDef')
    },
    {
      icon: Users,
      title: t('invitation.groupTitle'),
      definition: t('invitation.groupDef')
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <PageHero title={t('invitation.heroTitle')} breadcrumb={t('invitation.heroBreadcrumb')} />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-[#f27024] text-sm font-bold uppercase tracking-widest mb-3">{t('invitation.visaDoc')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e2a47] mb-6 uppercase italic">{t('invitation.typesLetters')}</h2>
          <div className="w-16 h-1 bg-[#f27024] mx-auto mb-8"></div>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto italic text-center">
            {t('invitation.choosingGlobestar')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 text-start">
          {invitationTypes.map((type, idx) => (
            <div key={idx} className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all group">
              <div className="w-16 h-16 rounded-full bg-section-gray flex items-center justify-center mb-6 group-hover:bg-[#0e2a47] group-hover:text-[#f27024] transition-colors">
                <type.icon size={32} className="text-[#0e2a47] group-hover:text-[#f27024]" />
              </div>
              <h3 className="text-xl font-bold text-[#0e2a47] mb-4 uppercase italic leading-tight">{type.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 italic">
                {type.definition}
              </p>
              <div className="w-full h-0.5 bg-gray-50 mb-6"></div>
              <Link to="/details-and-costs" className="text-[#f27024] font-bold text-xs uppercase tracking-widest hover:underline underline-offset-4 italic">
                {t('invitation.viewPricing')}
              </Link>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-section-gray p-8 md:p-12 rounded-3xl border border-gray-100 text-start">
          <h3 className="text-2xl font-bold text-[#0e2a47] mb-6 italic uppercase">{t('invitation.whyNeed')}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-8 italic">
            {t('invitation.officersConsider')}
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              t('country.lithuania'), t('country.albania'), t('country.uk'), t('country.belarus'), t('country.russia'),
              t('country.ukraine'), t('country.spain'), t('country.sweden'), t('country.hungary'), t('country.slovakia'), t('country.poland')
            ].map((country, i) => (
              <span key={i} className="bg-white px-4 py-2 rounded-full text-[10px] font-bold text-[#0e2a47] border border-gray-100 uppercase tracking-widest italic">{country}</span>
            ))}
          </div>
        </div>
      </div>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default TypesOfInvitation;