import { Phone, Mail, Facebook, Instagram, Youtube, Search, ArrowRight, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
  const [aboutOpen, setAboutOpen] = useState(false);
  const [invitationsOpen, setInvitationsOpen] = useState(false);

  return (
    <nav className="bg-background shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange rounded-sm flex items-center justify-center">
            <span className="text-orange-foreground font-bold text-lg">G</span>
          </div>
          <span className="text-xl font-bold tracking-wide">
            <span className="text-navy">GLOBE</span><span className="text-orange">STAR</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className="text-navy text-xs font-semibold uppercase tracking-wider hover:text-orange transition-colors">Home</Link>
          
          {/* About Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="flex items-center gap-1 text-navy text-xs font-semibold uppercase tracking-wider hover:text-orange transition-colors">
              About <ChevronDown size={12} />
            </button>
            
            {aboutOpen && (
              <div className="absolute top-full left-0 pt-4 w-48 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-background border shadow-lg rounded-md overflow-hidden">
                  <Link to="/our-team" className="block px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-navy hover:bg-orange hover:text-orange-foreground transition-colors">
                    Our Team
                  </Link>
                  <Link to="/bank-account" className="block px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-navy hover:bg-orange hover:text-orange-foreground transition-colors">
                    Bank Account
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Invitations Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setInvitationsOpen(true)}
            onMouseLeave={() => setInvitationsOpen(false)}
          >
            <button className="flex items-center gap-1 text-navy text-xs font-semibold uppercase tracking-wider hover:text-orange transition-colors">
              Invitations <ChevronDown size={12} />
            </button>
            
            {invitationsOpen && (
              <div className="absolute top-full left-0 pt-4 w-56 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="bg-background border shadow-lg rounded-md overflow-hidden">
                  <Link to="/invitations" className="block px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-navy hover:bg-orange hover:text-orange-foreground transition-colors">
                    Invitations
                  </Link>
                  <Link to="/invitation-types" className="block px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-navy hover:bg-orange hover:text-orange-foreground transition-colors">
                    Types of Invitation
                  </Link>
                  <Link to="/invitation-details" className="block px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-navy hover:bg-orange hover:text-orange-foreground transition-colors">
                    Details & Costs
                  </Link>
                </div>
              </div>
            )}
          </div>

          <a href="#destinations" className="text-navy text-xs font-semibold uppercase tracking-wider hover:text-orange transition-colors">Destinations</a>
          <a href="#visas" className="text-navy text-xs font-semibold uppercase tracking-wider hover:text-orange transition-colors">Visas</a>
          <a href="#tours" className="text-navy text-xs font-semibold uppercase tracking-wider hover:text-orange transition-colors">Tours</a>
          <a href="#contact" className="text-navy text-xs font-semibold uppercase tracking-wider hover:text-orange transition-colors">Contact</a>
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
          <Link to="/" onClick={() => setOpen(false)} className="block py-2 text-navy text-sm font-semibold uppercase hover:text-orange transition-colors">Home</Link>
          
          <div className="py-2">
            <p className="text-navy text-xs font-bold uppercase tracking-widest mb-2 opacity-50">About</p>
            <Link to="/our-team" onClick={() => setOpen(false)} className="block py-2 pl-4 text-navy text-sm font-semibold uppercase hover:text-orange transition-colors">Our Team</Link>
            <Link to="/bank-account" onClick={() => setOpen(false)} className="block py-2 pl-4 text-navy text-sm font-semibold uppercase hover:text-orange transition-colors">Bank Account</Link>
          </div>

          <div className="py-2">
            <p className="text-navy text-xs font-bold uppercase tracking-widest mb-2 opacity-50">Invitations</p>
            <Link to="/invitations" onClick={() => setOpen(false)} className="block py-2 pl-4 text-navy text-sm font-semibold uppercase hover:text-orange transition-colors">Invitations</Link>
            <Link to="/invitation-types" onClick={() => setOpen(false)} className="block py-2 pl-4 text-navy text-sm font-semibold uppercase hover:text-orange transition-colors">Types of Invitation</Link>
            <Link to="/invitation-details" onClick={() => setOpen(false)} className="block py-2 pl-4 text-navy text-sm font-semibold uppercase hover:text-orange transition-colors">Details & Costs</Link>
          </div>

          <a href="#destinations" onClick={() => setOpen(false)} className="block py-2 text-navy text-sm font-semibold uppercase hover:text-orange transition-colors">Destinations</a>
          <a href="#contact" onClick={() => setOpen(false)} className="block py-2 text-navy text-sm font-semibold uppercase hover:text-orange transition-colors">Contact</a>
          <a href="#contact" className="mt-2 inline-flex items-center gap-2 bg-orange text-orange-foreground px-6 py-2.5 rounded text-sm font-semibold">
            Book Appointment <ArrowRight size={14} />
          </a>
        </div>
      )}
    </nav>
  );
};

export { TopBar, Navbar };