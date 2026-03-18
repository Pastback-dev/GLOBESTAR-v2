import { Newspaper, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const InfoSection = () => {
  const { t, isRTL } = useLanguage();

  const news = [
    {
      date: t('info.march2025') || 'March 2025',
      title: t('info.busDriversTitle'),
      excerpt: t('info.busDriversDesc'),
      category: t('info.immigrationNews'),
    },
    {
      date: t('info.january2025') || 'January 2025',
      title: t('info.albaniaEvisaTitle'),
      excerpt: t('info.albaniaEvisaDesc'),
      category: t('info.evisaInfo'),
    },
  ];

  return (
    <section className="py-20 bg-section-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">{t('info.latestUpdates')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">{t('info.newsTitle')}</h2>
          <div className="w-12 h-1 bg-orange mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((n, i) => (
            <article key={i} className={`bg-background rounded-lg overflow-hidden shadow-sm border hover:shadow-lg transition-shadow duration-300 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className="bg-navy h-3 w-full" />
              <div className="p-6">
                <span className={`inline-block bg-orange/10 text-orange text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4`}>
                  {n.category}
                </span>
                <div className={`flex items-center gap-2 text-muted-foreground text-xs mb-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Clock size={12} />
                  <span>{n.date}</span>
                </div>
                <h3 className="text-navy font-bold mb-3 line-clamp-2">{n.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{n.excerpt}</p>
                <Link to="/contact" className={`inline-flex items-center gap-1 text-orange text-sm font-semibold hover:underline ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t('info.readMore')} {isRTL ? <ArrowRight size={12} className="rotate-180" /> : <ArrowRight size={12} />}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;