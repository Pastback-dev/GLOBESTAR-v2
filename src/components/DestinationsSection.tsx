import { useLanguage } from '@/contexts/LanguageContext';

const DestinationsSection = () => {
  const { t, isRTL } = useLanguage();

  const destinations = [
    { 
      img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80', 
      name: t('destinations.unitedKingdom') 
    },
    { 
      img: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=800&q=80', 
      name: t('destinations.ireland') 
    },
    { 
      img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80', 
      name: t('destinations.germany') 
    },
  ];

  return (
    <section id="destinations" className="py-20 bg-section-gray">
      <div className="container mx-auto px-4">
        {/* Destinations */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">{t('destinations.exploreWorld')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">{t('destinations.topDestinations')}</h2>
          <div className="w-12 h-1 bg-orange mx-auto mt-4" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map(d => (
            <div key={d.name} className="relative rounded-lg overflow-hidden group cursor-pointer h-64">
              <img src={d.img} alt={d.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/50 transition-colors" />
              <span className={`absolute bottom-4 ${isRTL ? 'right-4' : 'left-4'} text-orange-foreground font-bold text-lg`}>{d.name}</span>
            </div>
          ))}
        </div>
        <p className={`text-center mt-8 text-sm text-muted-foreground ${isRTL ? 'text-lg' : ''}`}>
          {t('destinations.assessmentTextSnippet') || 'Find your dream destination.'}{' '}
          <a href="#contact" className="text-orange font-semibold underline">{t('destinations.fillForm') || 'Fill the assessment form & submit →'}</a>
        </p>
      </div>
    </section>
  );
};

export default DestinationsSection;