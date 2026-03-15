import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Image with floating card */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
            alt="Professional business immigration consultant"
            className="rounded-lg w-full max-w-md mx-auto object-cover h-80"
          />
          <div className="absolute -bottom-6 -right-2 md:right-4 bg-background border-4 border-navy p-6 shadow-xl w-52 text-center">
            <p className="text-xs uppercase tracking-widest text-navy font-semibold mb-1">
              Canada's Leading<br />Visa & Immigration Firm With
            </p>
            <p className="text-5xl font-bold text-orange">20</p>
            <p className="text-sm text-navy font-medium">Years Of Experience</p>
          </div>
        </div>

        {/* Right - Text */}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
            We understand the people's needs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight mb-4">
            Work, Visit &<br />Study Visas
          </h2>
          <div className="w-12 h-1 bg-orange mb-6" />
          <p className="text-foreground font-medium mb-4">
            We deal professionally with work permits, visit visas, and study permits.
          </p>
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
            We facilitate the acquisition of work permits for various Schengen countries, including the Czech Republic, Poland, Lithuania, UK, Spain, Italy, Hungary, Slovakia, Bulgaria, Albania, Belarus & Serbia and more. Additionally, we assist you in obtaining a visit visa (E-visas) for Albania, Moldova, Georgia, Hong Kong & Turkey. For those aspiring to study abroad, we have options available in Ireland and the UK & German.
          </p>
          <Link
            to="/available-visas"
            className="inline-flex items-center gap-2 bg-orange text-orange-foreground px-6 py-3 rounded text-sm font-semibold hover:bg-orange-hover transition-colors"
          >
            Learn More <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;