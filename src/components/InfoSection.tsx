import { Building2, Scale } from 'lucide-react';

const InfoSection = () => (
  <section className="py-20 bg-section-gray">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 mb-16">
        {/* Left */}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">We Understand Your Travel Needs</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 leading-tight">
            Travel Planning<br />Worldwide
          </h2>
          <div className="w-12 h-1 bg-orange mb-6" />
          <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
            GLOBESTAR is your ultimate partner in travel planning. Our streamlined and hassle-free process saves valuable time and effort for travelers worldwide.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded bg-section-gray border flex items-center justify-center shrink-0">
                <Building2 size={22} className="text-navy" />
              </div>
              <div>
                <h4 className="font-bold text-navy mb-1">Global Partnerships</h4>
                <p className="text-muted-foreground text-sm">Travel partnerships available across Europe, Asia, Americas, and beyond.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded bg-section-gray border flex items-center justify-center shrink-0">
                <Scale size={22} className="text-navy" />
              </div>
              <div>
                <h4 className="font-bold text-navy mb-1">Full Support</h4>
                <p className="text-muted-foreground text-sm">We provide virtual assistance, 24/7 support, and travel concierge services.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">How We Help Clients</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 leading-tight">
            Global Travel News &<br />Updates
          </h2>
          <div className="w-12 h-1 bg-orange mb-6" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            Great news for travelers looking to explore new destinations. Many countries have announced relaxed visa requirements, making it easier for tourists to visit. New direct flight routes are opening up across continents, reducing travel times and costs significantly. Whether you're planning a beach getaway or a cultural expedition, there has never been a better time to travel the world.
          </p>
        </div>
      </div>

      {/* Partner logos */}
      <div className="flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale">
        {['SkyWings Airlines', 'Grand Hotels', 'TravelSafe Insurance', 'WorldTour Co.'].map(name => (
          <div key={name} className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-navy/10 flex items-center justify-center mb-2">
              <span className="text-navy font-bold text-xs">{name.split(' ').map(w => w[0]).join('')}</span>
            </div>
            <span className="text-xs text-muted-foreground">{name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InfoSection;
