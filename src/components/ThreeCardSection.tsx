import { Briefcase, Plane, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const cards = [
  {
    icon: Briefcase,
    title: 'Work Visas',
    desc: 'We facilitate the acquisition of work permits for various countries including Czech Republic, Poland, Lithuania, UK, Malta, Romania, Estonia, Spain, Italy, Hungary, Slovakia, Bulgaria, Albania, Belarus & Serbia.',
    link: '/working-visa',
  },
  {
    icon: Plane,
    title: 'Visit Visas',
    desc: 'Get your visit visa (E-visas) for Albania, Moldova, Georgia, Hong Kong & Turkey. Complete professional support for your travel documents and visa approval.',
    link: '/visiting-visa',
  },
  {
    icon: GraduationCap,
    title: 'Study Visas',
    desc: 'For those aspiring to study abroad, we have options available in Ireland and the UK & German universities. Admissions for ESL, Foundation, and Degrees.',
    link: '/studying-visa',
  },
];

const ThreeCardSection = () => (
  <section className="py-16 bg-section-gray">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map(card => (
          <div key={card.title} className="bg-background rounded-lg p-8 shadow-sm border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange/10 flex items-center justify-center">
              <card.icon size={28} className="text-orange" />
            </div>
            <h3 className="text-navy font-bold text-lg mb-3">{card.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{card.desc}</p>
            <Link to={card.link} className="text-orange text-sm font-semibold hover:underline">
              Learn More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ThreeCardSection;