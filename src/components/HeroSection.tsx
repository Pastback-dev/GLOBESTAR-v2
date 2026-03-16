import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import globestarExperience from '../assets/globestar-experience.jpg';

const slides = [
  
  
  {
    tag: 'BUSINESS IMMIGRATION',
    title: 'Our Effective Approach\nto Business Immigration',
    bg: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80',
    link: '/business-immigration',
  },
  {
    tag: 'VISA INVITATION LETTERS',
    title: 'Invitation Letters for\nBusiness, Family, and Visitor Visas',
    bg: 'https://images.unsplash.com/photo-1436491865332-7a61a109c05?auto=format&fit=crop&w=1920&q=80',
    link: '/types-of-invitation',
  },
  
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section id="home" className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${s.bg})` }}
        >
          <div className="absolute inset-0 bg-navy/65" />
        </div>
      ))}

      <div className="relative container mx-auto px-4 z-10">
        <p className="text-orange text-sm md:text-base tracking-widest uppercase mb-4 underline underline-offset-2">
          {slide.tag}
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl whitespace-pre-line lowercase first-letter:uppercase">
          {slide.title}
        </h1>
        <div className="w-12 h-0.5 bg-orange mt-4 mb-2" />
        <div className="w-2 h-0.5 bg-orange mb-6 ml-14" />
        <a
          href={slide.link}
          className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded text-sm font-semibold hover:bg-orange hover:border-orange transition-all uppercase tracking-widest"
        >
          <ArrowRight size={16} /> Learn More
        </a>
      </div>

      <button
        onClick={() => setCurrent(c => (c - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/50 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-10"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => setCurrent(i => (i + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/50 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-10"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-orange' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
