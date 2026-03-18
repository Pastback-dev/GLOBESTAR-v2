import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import globestarExperience from '../assets/globestar-experience.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t, isRTL } = useLanguage();
  
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          {/* Left - Image */}
          <div className="relative">
            <img
              src={globestarExperience}
              alt={t('about.experience')}
              className="rounded-lg w-full max-w-md mx-auto object-cover h-80"
            />
          </div>

          {/* Right - Text */}
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
              {t('about.needs')}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight mb-4">
              {t('about.title')}
            </h2>
            <div className={`w-12 h-1 bg-orange mb-6 ${isRTL ? 'mr-0 ml-auto' : ''}`} />
            <p className="text-foreground font-medium mb-4">
              {t('about.dealWith')}
            </p>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              {t('about.description')}
            </p>
            <Link
              to="/available-visas"
              className={`inline-flex items-center gap-2 bg-orange text-orange-foreground px-8 py-3 rounded text-sm font-bold hover:bg-orange-hover transition-all uppercase tracking-widest ${isRTL ? 'flex-row-reverse' : ''}`}
            >
              {t('about.learnMore')} {isRTL ? <ArrowRight size={14} className="rotate-180" /> : <ArrowRight size={14} />}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;