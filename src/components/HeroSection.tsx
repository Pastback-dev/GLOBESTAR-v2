import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => (
  <section id="home" className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="absolute inset-0 bg-navy/60" />
    </div>

    <div className="relative container mx-auto px-4 z-10">
      <p className="text-orange-foreground text-sm md:text-base tracking-widest uppercase mb-4">
        Premium Travel & Tourism Services
      </p>
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-orange-foreground leading-tight max-w-2xl">
        Our Effective Approach<br />to Global Travel
      </h1>
      <div className="w-16 h-1 bg-orange mt-6 mb-8" />
      <a
        href="#about"
        className="inline-flex items-center gap-2 border-2 border-orange-foreground text-orange-foreground px-6 py-3 rounded text-sm font-semibold hover:bg-orange hover:border-orange transition-all"
      >
        <ArrowRight size={16} /> Learn More
      </a>
    </div>

    <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-navy/50 text-orange-foreground flex items-center justify-center hover:bg-navy/80 transition-colors z-10">
      <ChevronLeft size={20} />
    </button>
    <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-navy/50 text-orange-foreground flex items-center justify-center hover:bg-navy/80 transition-colors z-10">
      <ChevronRight size={20} />
    </button>
  </section>
);

export default HeroSection;
