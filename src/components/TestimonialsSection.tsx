import { Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const { t, isRTL } = useLanguage();

  const testimonials = [
    {
      name: t('testimonials.tanya.name'),
      location: t('nav.client') || 'Client',
      title: t('testimonials.tanya.title'),
      review: t('testimonials.tanya.review'),
    },
    {
      name: t('testimonials.james.name'),
      location: t('nav.client') || 'Client',
      title: t('testimonials.james.title'),
      review: t('testimonials.james.review'),
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">{t('testimonials.title')}</p>
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">
          {t('testimonials.subHeading')}
        </h2>
        <div className="w-12 h-1 bg-orange mx-auto mt-4 mb-12" />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map(t => (
            <div key={t.name} className={`bg-background border rounded-lg p-8 shadow-sm ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className={`flex items-center gap-4 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-14 h-14 rounded-full bg-section-gray flex items-center justify-center text-navy font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div className={isRTL ? 'text-right' : 'text-left'}>
                  <h4 className="font-bold text-navy">{t.name}</h4>
                  <p className="text-muted-foreground text-xs">{t.location}</p>
                </div>
                <div className={`${isRTL ? 'mr-auto ml-0' : 'ml-auto'} flex gap-0.5`}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="font-semibold text-orange text-sm mb-2">{t.title}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{t.review}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-2 justify-center mt-8">
          <span className="w-3 h-3 rounded-full bg-orange" />
          <span className="w-3 h-3 rounded-full bg-border" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
