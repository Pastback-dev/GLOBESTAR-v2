import { ArrowRight } from 'lucide-react';
import aboutImg from '@/assets/about-travelers.jpg';

const AboutSection = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Image with floating card */}
        <div className="relative">
          <img src={aboutImg} alt="Happy travelers" className="rounded-lg w-full max-w-md mx-auto" />
          <div className="absolute -bottom-6 -right-2 md:right-4 bg-background border-4 border-navy p-6 shadow-xl w-52 text-center">
            <p className="text-xs uppercase tracking-widest text-navy font-semibold mb-1">
              Globestar's Leading<br />Travel Agency With
            </p>
            <p className="text-5xl font-bold text-orange">20</p>
            <p className="text-sm text-navy font-medium">Years Of Experience</p>
          </div>
        </div>

        {/* Right - Text */}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
            We understand the people 's needs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight mb-4">
            Work, Visit &<br />Study Visas
          </h2>
          <div className="w-12 h-1 bg-orange mb-6" />
          <p className="text-foreground font-medium mb-4">
            We deal professionally with work permits, visit visas, and study permits.
          </p>
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
            We facilitate the acquisition of work permits for various Schengen countries, including the Czech Republic, Poland, Lithuania, UK, Croatia, Itlay, Hungary, Slovakia & Bulgaria etc. Additionally, we offer permits for non-Schengen countries such as Albania, Belarus & Serbia, and more. If you're planning a visit to any of these countries, we can assist you in obtaining a visit visa (E-visas) for Albania, Moldova, Georgia, Hong Kong & Turkey. For those aspiring to study abroad, we have options available in Ireland and the UK. & German.
          </p>
          <a href="#destinations" className="inline-flex items-center gap-2 bg-orange text-orange-foreground px-6 py-3 rounded text-sm font-semibold hover:bg-orange-hover transition-colors">
            Learn More <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;