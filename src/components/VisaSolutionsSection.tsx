import { ArrowRight, Users, Plane, Briefcase, Heart, MapPin, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const VisaSolutionsSection = () => {
  const { t, isRTL } = useLanguage();

  const invitationTypes = [
    {
      icon: Users,
      title: t('visa.solutions.groupTitle'),
      description: t('visa.solutions.groupDesc'),
      link: '/details-and-costs',
    },
    {
      icon: Plane,
      title: t('visa.solutions.visitTitle'),
      description: t('visa.solutions.visitDesc'),
      link: '/details-and-costs',
    },
    {
      icon: Briefcase,
      title: t('visa.solutions.businessTitle'),
      description: t('visa.solutions.businessDesc'),
      link: '/details-and-costs',
    },
    {
      icon: Heart,
      title: t('visa.solutions.familyTitle'),
      description: t('visa.solutions.familyDesc'),
      link: '/details-and-costs',
    },
    {
      icon: MapPin,
      title: t('visa.solutions.touristTitle'),
      description: t('visa.solutions.touristDesc'),
      link: '/details-and-costs',
    },
    {
      icon: User,
      title: t('visa.solutions.privateTitle'),
      description: t('visa.solutions.privateDesc'),
      link: '/details-and-costs',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#f27024] text-sm font-bold uppercase tracking-widest mb-3">{t('visa.solutions.title')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e2a47] mb-8 uppercase italic">{t('visa.solutions.heading')}</h2>
          <div className="w-16 h-1 bg-[#f27024] mx-auto mb-8"></div>
          <p className={`text-gray-600 leading-relaxed max-w-4xl mx-auto ${isRTL ? 'text-lg' : ''}`}>
            {t('visa.solutions.description')}
          </p>
        </div>

        {/* Invitation Types Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {invitationTypes.map((type, idx) => (
            <div key={idx} className={`bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all group ${isRTL ? 'text-right' : 'text-left'}`}>
              <p className="text-[#f27024] text-xs font-bold uppercase tracking-widest mb-4">{t('visa.solutions.visaTypes')}</p>
              <div className={`flex items-center gap-3 mb-4 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className="w-12 h-12 rounded-full bg-[#0e2a47]/10 flex items-center justify-center group-hover:bg-[#f27024] transition-colors">
                  <type.icon size={24} className="text-[#0e2a47] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#0e2a47]">{type.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {type.description}
              </p>
              <Link
                to={type.link}
                className={`inline-flex items-center gap-2 text-[#f27024] font-semibold text-sm hover:gap-3 transition-all ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {t('visa.solutions.applyViewDetails')} {isRTL ? <ArrowRight size={16} className="rotate-180" /> : <ArrowRight size={16} />}
              </Link>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            to="/types-of-invitation"
            className={`inline-flex items-center gap-2 text-[#0e2a47] font-bold text-sm uppercase tracking-widest hover:text-[#f27024] transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            {t('visa.solutions.viewAll')} {isRTL ? <ArrowRight size={16} className="rotate-180" /> : <ArrowRight size={16} />}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VisaSolutionsSection;
