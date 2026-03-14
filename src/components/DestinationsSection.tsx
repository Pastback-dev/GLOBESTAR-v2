const destinations = [
  { 
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80', 
    name: 'United Kingdom' 
  },
  { 
    img: 'https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&w=800&q=80', 
    name: 'Ireland' 
  },
  { 
    img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80', 
    name: 'Germany' 
  },
];

const DestinationsSection = () => (
  <section id="destinations" className="py-20 bg-section-gray">
    <div className="container mx-auto px-4">
      {/* Video placeholder */}
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Watch Our Story</p>
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Featured Travel Vlog</h2>
        <div className="max-w-3xl mx-auto aspect-video bg-navy rounded-lg flex items-center justify-center cursor-pointer group relative overflow-hidden">
          <div className="w-16 h-16 rounded-full bg-orange flex items-center justify-center group-hover:scale-110 transition-transform">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-orange-foreground border-b-8 border-b-transparent ml-1" style={{ borderLeftWidth: '14px' }} />
          </div>
        </div>
      </div>

      {/* Destinations */}
      <div className="text-center mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Explore The World</p>
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">Top Destinations for Your Next Holiday</h2>
        <div className="w-12 h-1 bg-orange mx-auto mt-4" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map(d => (
          <div key={d.name} className="relative rounded-lg overflow-hidden group cursor-pointer h-64">
            <img src={d.img} alt={d.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-navy/30 group-hover:bg-navy/50 transition-colors" />
            <span className="absolute bottom-4 left-4 text-orange-foreground font-bold text-lg">{d.name}</span>
          </div>
        ))}
      </div>
      <p className="text-center mt-8 text-sm text-muted-foreground">
        Find your dream destination.{' '}
        <a href="#contact" className="text-orange font-semibold underline">Fill the assessment form & submit →</a>
      </p>
    </div>
  </section>
);

export default DestinationsSection;