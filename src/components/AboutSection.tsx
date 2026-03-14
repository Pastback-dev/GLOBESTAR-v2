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
            We Understand The Traveler's Needs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight mb-4">
            Flights, Hotels &<br />Holiday Packages
          </h2>
          <div className="w-12 h-1 bg-orange mb-6" />
          <p className="text-foreground font-medium mb-4">
            We deal professionally with flight bookings, hotel reservations, holiday packages, and visa applications.
          </p>
          <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
            We facilitate travel arrangements for various global destinations, including Europe, Asia, the Americas, and beyond. Whether you're planning a business trip, family vacation, or adventure tour, our expert team ensures a seamless experience from start to finish.
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
