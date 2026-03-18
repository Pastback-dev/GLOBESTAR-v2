import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const CTABanner = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="bg-orange py-8">
      <div className={`container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 ${isRTL ? 'md:flex-row-reverse text-right' : 'text-left'}`}>
        <div>
          <h3 className="text-white text-xl md:text-2xl font-bold uppercase italic">{t('cta.readyStart')}</h3>
          <p className="text-white/90 text-sm mt-1 italic">{t('cta.contactUs')}</p>
        </div>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-[#f27024] px-8 py-3 rounded text-sm font-bold hover:bg-gray-100 transition-colors whitespace-nowrap uppercase tracking-widest">
          {t('cta.bookAppointment')} {isRTL ? <span className="rotate-180">→</span> : '→'}
        </Link>
      </div>
    </section>
  );
};

export default CTABanner;
