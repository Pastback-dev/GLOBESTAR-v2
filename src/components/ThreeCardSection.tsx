import { Briefcase, Plane, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const cards = [
  {
    title: 'Apply Work Permit',
    img: 'https://images.unsplash.com/photo-1573496130141-209d200cebd8?auto=format&fit=crop&w=800&q=80',
    link: '/working-visa',
  },
  {
    title: 'Apply Visit Visa',
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    link: '/visiting-visa',
  },
  {
    title: 'Apply Study Abroad',
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    link: '/studying-visa',
  },
];

const ThreeCardSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-0 shadow-2xl rounded-xl overflow-hidden">
        {cards.map((card, idx) => (
          <Link 
            key={idx} 
            to={card.link}
            className="group relative h-[350px] overflow-hidden flex flex-col"
          >
            <div className="h-2/3 overflow-hidden">
              <img 
                src={card.img} 
                alt={card.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
            <div className="h-1/3 bg-white flex items-center justify-center border-r last:border-0 border-gray-100 group-hover:bg-[#f27024] transition-colors duration-300">
              <span className="text-xl font-bold text-[#0e2a47] group-hover:text-white transition-colors duration-300">
                {card.title}
              </span>
            </div>
            {/* Visual separator/accent */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#f27024] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ThreeCardSection;