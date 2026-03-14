import { Plane, Heart, Users, Briefcase } from 'lucide-react';

const services = [
  { icon: Plane, title: 'Tourist Visa', desc: 'We assist with tourist visa applications for destinations worldwide, ensuring a smooth process.' },
  { icon: Heart, title: 'Honeymoon Packages', desc: 'Romantic getaway packages tailored for couples seeking unforgettable experiences.' },
  { icon: Users, title: 'Group Tours', desc: 'Organized group tours to popular destinations with expert guides and full support.' },
  { icon: Briefcase, title: 'Corporate Travel', desc: 'Professional business travel solutions including flights, hotels, and conference planning.' },
];

const ServicesSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
        We Provide The Best Solutions
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Core Travel Services</h2>
      <div className="w-12 h-1 bg-orange mx-auto mb-6" />
      <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-sm leading-relaxed">
        GLOBESTAR is dedicated to delivering world-class travel services. We offer comprehensive solutions for leisure, business, and adventure travelers.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map(s => (
          <div key={s.title} className="bg-background border rounded-lg p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-section-gray flex items-center justify-center">
              <s.icon size={28} className="text-navy" />
            </div>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Services</p>
            <h3 className="text-navy font-bold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
