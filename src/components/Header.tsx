import { Phone, Mail, Facebook, Instagram, Youtube, Search, ArrowRight, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const GlobestarLogo = () => (
  <Link to="/" className="flex items-center gap-2">
    <div className="flex items-end gap-0.5">
      {/* Stylized stripe bars */}
      <div className="flex items-end gap-px">
        <div className="w-1 h-4 bg-navy rounded-sm" />
        <div className="w-1 h-6 bg-navy rounded-sm" />
        <div className="w-1 h-8 bg-navy rounded-sm" />
      </div>
      <div className="w-1 h-10 bg-orange rounded-sm mx-0.5" />
      <div className="flex items-end gap-px">
        <div className="w-1 h-8 bg-orange rounded-sm" />
        <div className="w-1 h-6 bg-orange rounded-sm" />
        <div className="w-1 h-4 bg-orange rounded-sm" />
      </div>
    </div>
    <span className="text-xl font-bold tracking-tight">
      <span className="text-navy">GLOBE</span>
      <span className="text-orange">STAR</span>
    </span>
  </Link>
);

const TopBar = () => (
  <div className="bg-[#0e2a47] py-2 px-4 shadow-sm">
    <div className="container mx-auto flex items-center justify-between text-white text-sm">
      <div className="flex items-center gap-6">
        <a href="tel:+34624132171" className="flex items-center gap-2 hover:text-orange transition-colors">
          <Phone size={14} className="text-[#f27024]" />
          <span className="hidden sm:inline">+34 624 13 21 71</span>
        </a>
        <a href="mailto:globestarvisa@gmail.com" className="flex items-center gap-2 hover:text-orange transition-colors">
          <Mail size={14} className="text-[#f27024]" />
          <span className="hidden sm:inline">globestarvisa@gmail.com</span>
        </a>
      </div>
      <div className="flex items-center gap-4">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-orange transition-colors"><Facebook size={14} /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-orange transition-colors"><Instagram size={14} /></a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-orange transition-colors"><Youtube size={14} /></a>
        <a href="https://wa.me/34624132171" target="_blank" rel="noreferrer" className="hover:text-orange transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.121.554 4.11 1.523 5.838L.057 23.57a.5.5 0 0 0 .614.614l5.732-1.466A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6a9.576 9.576 0 0 1-4.885-1.337l-.35-.208-3.624.927.944-3.522-.228-.362A9.578 9.578 0 0 1 2.4 12C2.4 6.698 6.698 2.4 12 2.4c5.303 0 9.6 4.298 9.6 9.6 0 5.303-4.297 9.6-9.6 9.6z" />
          </svg>
        </a>
        <button className="hover:text-orange transition-colors"><Search size={14} /></button>
      </div>
    </div>
  </div>
);

type DropdownItem = { label: string; to: string };

interface DropdownMenuProps {
  label: string;
  items: DropdownItem[];
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onMobileClick?: () => void;
  mobileOpen?: () => void;
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [invitationOpen, setInvitationOpen] = useState(false);
  const [visaOpen, setVisaOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [immigrationOpen, setImmigrationOpen] = useState(false);

  const dropdownClass = "absolute top-full left-0 pt-2 w-52 z-50";
  const dropdownInner = "bg-background border shadow-lg rounded-md overflow-hidden";
  const dropdownLink = "block px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-navy hover:bg-orange hover:text-orange-foreground transition-colors";

  return (
    <nav className="bg-background shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <GlobestarLogo />

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/" className="text-navy text-xs font-semibold uppercase tracking-wider hover:text-orange transition-colors flex items-center">
            🏠
          </Link>

          {/* About Dropdown */}
          <div className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
            <button className="flex items-center gap-1 text-navy text-xs font-semibold uppercase tracking-wider hover:text-orange transition-colors">
              About <ChevronDown size={12} />
            </button>
            {aboutOpen && (
              <div className={dropdownClass}>
                <div className={dropdownInner}>
                  <Link to="/our-team" className={dropdownLink}>Our Team</Link>
                  <Link to="/bank-account" className={dropdownLink}>Bank Accounts & Payments</Link>
                </div>
              </div>
            )}
          </div>

          {/* Invitations Dropdown */}
          <div className="relative" onMouseEnter={() => setInvitationOpen(true)} onMouseLeave={() => setInvitationOpen(false)}>
            <button className="flex items-center gap-1 text-navy text-xs font-semibold uppercase tracking-wider hover:text-orange transition-colors">
              Invitations <ChevronDown size={12} />
            </button>
            {invitationOpen && (
              <div className={dropdownClass}>
                <div className={dropdownInner}>
                  <Link to="/types-of-invitation" className={dropdownLink}>Types Of Invitation</Link>
                  <Link to="/details-and-costs" className={dropdownLink}>Details & Costs</Link>
                  <Link to="/apply-invitation" className={dropdownLink}>Apply Invitation Letter</Link>
                </div>
              </div>
            )}
          </div>

          {/* Visas Dropdown */}
          <div className="relative" onMouseEnter={() => setVisaOpen(true)} onMouseLeave={() => setVisaOpen(false)}>
            <button className="flex items-center gap-1 text-navy text-xs font-semibold uppercase tracking-wider hover:text-orange transition-colors">
              Visas <ChevronDown size={12} />
            </button>
            {visaOpen && (
              <div className={dropdownClass}>
                <div className={dropdownInner}>
                  <Link to="/available-visas" className={dropdownLink}>Available Visas</Link>
                  <Link to="/visiting-visa" className={dropdownLink}>Visiting Visas</Link>
                  <Link to="/studying-visa" className={dropdownLink}>Studying Visas</Link>
                </div>
              </div>
            )}
          </div>

          {/* Company Reg Dropdown */}
          <div className="relative" onMouseEnter={() => setCompanyOpen(true)} onMouseLeave={() => setCompanyOpen(false)}>
            <button className="flex items-center gap-1 text-navy text-xs font-semibold uppercase tracking-wider hover:text-orange transition-colors">
              Company Reg <ChevronDown size={12} />
            </button>
            {companyOpen && (
              <div className={dropdownClass}>
                <div className={dropdownInner}>
                  <Link to="/company-registration" className={dropdownLink}>All Companies Reg</Link>
                  <Link to="/company-registration-form" className={dropdownLink}>Apply for Company Reg</Link>
                </div>
              </div>
            )}
          </div>

          {/* Immigration Dropdown */}
          <div className="relative" onMouseEnter={() => setImmigrationOpen(true)} onMouseLeave={() => setImmigrationOpen(false)}>
            <button className="flex items-center gap-1 text-navy text-xs font-semibold uppercase tracking-wider hover:text-orange transition-colors">
              Immigration <ChevronDown size={12} />
            </button>
            {immigrationOpen && (
              <div className={dropdownClass}>
                <div className={dropdownInner}>
                  <Link to="/business-immigration" className={dropdownLink}>Business Immigration</Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/contact" className="text-navy text-xs font-semibold uppercase tracking-wider hover:text-orange transition-colors">Contact</Link>
        </div>

        <Link to="/contact" className="hidden lg:inline-flex items-center gap-2 bg-orange text-orange-foreground px-5 py-2.5 rounded text-sm font-semibold hover:bg-orange-hover transition-colors">
          Book Appointment <ArrowRight size={14} />
        </Link>

        <button className="lg:hidden text-navy" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-t px-4 pb-4 max-h-screen overflow-y-auto">
          <Link to="/" onClick={() => setOpen(false)} className="block py-2 text-navy text-sm font-semibold uppercase hover:text-orange transition-colors">Home</Link>
          <div className="py-2">
            <p className="text-navy text-xs font-bold uppercase tracking-widest mb-2 opacity-50">About</p>
            <Link to="/our-team" onClick={() => setOpen(false)} className="block py-2 pl-4 text-navy text-sm font-semibold uppercase hover:text-orange transition-colors">Our Team</Link>
            <Link to="/bank-account" onClick={() => setOpen(false)} className="block py-2 pl-4 text-navy text-sm font-semibold uppercase hover:text-orange transition-colors">Bank Accounts & Payments</Link>
          </div>
          <div className="py-2">
            <p className="text-navy text-xs font-bold uppercase tracking-widest mb-2 opacity-50">Invitations</p>
            <Link to="/types-of-invitation" onClick={() => setOpen(false)} className="block py-2 pl-4 text-navy text-sm font-semibold uppercase hover:text-orange transition-colors">Types of Invitation</Link>
            <Link to="/details-and-costs" onClick={() => setOpen(false)} className="block py-2 pl-4 text-navy text-sm font-semibold uppercase hover:text-orange transition-colors">Details & Costs</Link>
            <Link to="/apply-invitation" onClick={() => setOpen(false)} className="block py-2 pl-4 text-navy text-sm font-semibold uppercase hover:text-orange transition-colors">Apply Invitation Letter</Link>
          </div>
          <div className="py-2">
            <p className="text-navy text-xs font-bold uppercase tracking-widest mb-2 opacity-50">Visas</p>
            <Link to="/available-visas" onClick={() => setOpen(false)} className="block py-2 pl-4 text-navy text-sm font-semibold uppercase hover:text-orange transition-colors">Available Visas</Link>
            <Link to="/visiting-visa" onClick={() => setOpen(false)} className="block py-2 pl-4 text-navy text-sm font-semibold uppercase hover:text-orange transition-colors">Visiting Visas</Link>
            <Link to="/studying-visa" onClick={() => setOpen(false)} className="block py-2 pl-4 text-navy text-sm font-semibold uppercase hover:text-orange transition-colors">Studying Visas</Link>
          </div>
          <div className="py-2">
            <p className="text-navy text-xs font-bold uppercase tracking-widest mb-2 opacity-50">Company Reg</p>
            <Link to="/company-registration" onClick={() => setOpen(false)} className="block py-2 pl-4 text-navy text-sm font-semibold uppercase hover:text-orange transition-colors">All Companies Reg</Link>
            <Link to="/company-registration-form" onClick={() => setOpen(false)} className="block py-2 pl-4 text-navy text-sm font-semibold uppercase hover:text-orange transition-colors">Apply for Company Reg</Link>
          </div>
          <div className="py-2">
            <p className="text-navy text-xs font-bold uppercase tracking-widest mb-2 opacity-50">Immigration</p>
            <Link to="/business-immigration" onClick={() => setOpen(false)} className="block py-2 pl-4 text-navy text-sm font-semibold uppercase hover:text-orange transition-colors">Business Immigration</Link>
          </div>
          <Link to="/contact" onClick={() => setOpen(false)} className="block py-2 text-navy text-sm font-semibold uppercase hover:text-orange transition-colors">Contact</Link>
          <Link to="/contact" className="mt-3 inline-flex items-center gap-2 bg-orange text-orange-foreground px-6 py-2.5 rounded text-sm font-semibold">
            Book Appointment <ArrowRight size={14} />
          </Link>
        </div>
      )}
    </nav>
  );
};

export { TopBar, Navbar };