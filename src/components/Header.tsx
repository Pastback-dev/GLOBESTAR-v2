import { Phone, Mail, Facebook, Instagram, Youtube, Search, ChevronLeft, ChevronRight, ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

const TopBar = () => (
  <div className="bg-navy py-2 px-4">
    <div className="container mx-auto flex items-center justify-between text-sm">
      <div className="flex items-center gap-6">
        <a href="tel:+1234567890" className="flex items-center gap-2 text-navy-foreground hover:text-orange transition-colors">
          <Phone size={14} />
          <span className="hidden sm:inline">+123 456 7890</span>
        </a>
        <a href="mailto:info@globestar.com" className="flex items-center gap-2 text-navy-foreground hover:text-orange transition-colors">
          <Mail size={14} />
          <span className="hidden sm:inline">info@globestar.com</span>
        </a>
      </div>
      <div className="flex items-center gap-4">
        <a href="#" className="text-navy-foreground hover:text-orange transition-colors"><Facebook size={14} /></a>
        <a href="#" className="text-navy-foreground hover:text-orange transition-colors"><Instagram size={14} /></a>
        <a href="#" className="text-navy-foreground hover:text-orange transition-colors"><Youtube size={14} /></a>
        <button className="text-navy-foreground hover:text-orange transition-colors"><Search size={14} /></button>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = ['Home', 'About', 'Destinations', 'Visas', 'Tours', 'Contact'];

  return (
    <nav className="bg-background shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange rounded-sm flex items-center justify-center">
            <span className="text-orange-foreground font-bold text-lg">G</span>
          </div>
          <span className="text-xl font-bold tracking-wide">
            <span className="text-navy">GLOBE</span><span className="text-orange">STAR</span>
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-navy text-xs font-semibold uppercase tracking-wider hover:text-orange transition-colors">
              {link}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden lg:inline-flex items-center gap-2 bg-orange text-orange-foreground px-6 py-2.5 rounded text-sm font-semibold hover:bg-orange-hover transition-colors">
          Book Appointment <ArrowRight size={14} />
        </a>

        <button className="lg:hidden text-navy" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-t px-4 pb-4">
          {links.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)} className="block py-2 text-navy text-sm font-semibold uppercase hover:text-orange transition-colors">
              {link}
            </a>
          ))}
          <a href="#contact" className="mt-2 inline-flex items-center gap-2 bg-orange text-orange-foreground px-6 py-2.5 rounded text-sm font-semibold">
            Book Appointment <ArrowRight size={14} />
          </a>
        </div>
      )}
    </nav>
  );
};

export { TopBar, Navbar };
