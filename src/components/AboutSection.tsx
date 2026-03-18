import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import globestarExperience from '../assets/globestar-experience.jpg';

const AboutSection = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Image */}
        <div className="relative">
          <img
            src={globestarExperience}
            alt="GLOBESTAR - Leading Immigration & Visa Services with 10 Years of Experience"
            className="rounded-lg w-full max-w-md mx-auto object-cover h-80"
          />
        </div>

        {/* Right - Text */}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
            We understand the people 's needs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight mb-4">
            Visit & Study Visas
          </h2>
          <div className="w-12 h-1 bg-orange mb-6" />
          <p className="text-foreground font-medium mb-4">
            We deal professionally with work permits, visit visas, and study permits.
          </p>
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
            We facilitate the acquisition of work permits for various Schengen countries, including the Czech Republic, Poland, Lithuania, UK, Croatia, Itlay, Hungary, Slovakia & Bulgaria etc. Additionally, we offer permits for non-Schengen countries such as Albania, Belarus & Serbia, and more. If you're planning a visit to any of these countries, we can assist you in obtaining a visit visa (E-visas) for Albania, Moldova, Georgia, Hong Kong & Turkey. For those aspiring to study abroad, we have options available in Ireland and the UK. & German.
          </p>
          <Link
            to="/available-visas"
            className="inline-flex items-center gap-2 bg-orange text-orange-foreground px-8 py-3 rounded text-sm font-bold hover:bg-orange-hover transition-all uppercase tracking-widest"
          >
            Learn More <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;