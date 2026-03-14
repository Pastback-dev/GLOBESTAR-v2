import { Plane, Heart, Users, Briefcase, MapPin, User } from 'lucide-react';

const services = [
  { 
    icon: Users, 
    title: 'Group Invitation', 
    desc: 'A group invitation is a written document from a company to obtain tourist group visas.' 
  },
  { 
    icon: Plane, 
    title: 'Visit Invitation', 
    desc: 'A visa invitation letter is a written letter from the company for a visitor visa.' 
  },
  { 
    icon: Briefcase, 
    title: 'Business Invitation', 
    desc: 'A visa invitation letter is a written letter from the company for a business visa purpose.' 
  },
  { 
    icon: Heart, 
    title: 'Family Invitation', 
    desc: 'A visa invitation letter is a written letter from the company for a Family visitor visa.' 
  },
  { 
    icon: MapPin, 
    title: 'Tourist Invitation', 
    desc: 'A visa invitation letter is a written letter from the tourist company for a tourist visa purpose.' 
  },
  { 
    icon: User, 
    title: 'Private Invitation', 
    desc: 'A private invitation letter is a written document from an individual to obtain a tourist visa.' 
  },
];

const ServicesSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
        We Provide the Visa solutions
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Visa Invitation Letters :-</h2>
      <div className="w-12 h-1 bg-orange mx-auto mb-6" />
      <p className="text-muted-foreground max-w-3xl mx-auto mb-12 text-sm leading-relaxed">
        A visa invitation letter is a written letter from a company or person who lives in the country you wish to visit. This letter serves as an invitation to stay with them, and by extension, guarantees that you will not overstay your visa. We offer company invitation letters for business, family, and visit visas for countries such as Lithuania, Albania Belarus, the UK, Russia, Serbia, Moldova, Kosovo, Ukraine, Spain, Sweden, Hungary, Luxembourg, Netherlands & Germany and more.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(s => (
          <div key={s.title} className="bg-background border rounded-lg p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-section-gray flex items-center justify-center">
              <s.icon size={28} className="text-navy" />
            </div>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">VISA TYPES</p>
            <h3 className="text-navy font-bold mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;