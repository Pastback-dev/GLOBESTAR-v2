import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const FooterSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <>
      {/* Assessment Form + Info Section */}
      <section id="contact-form" className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left - Form */}
            <div>
              <p className="text-orange text-sm font-semibold mb-2">Get Free Assessment Today!</p>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-foreground mb-8 leading-tight">
                Feel Free To Enquire About<br />Any Questions You Got
              </h2>
              <form className="space-y-4" onSubmit={e => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-navy-light text-navy-foreground placeholder:text-navy-foreground/50 border-0 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-navy-light text-navy-foreground placeholder:text-navy-foreground/50 border-0 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-navy-light text-navy-foreground placeholder:text-navy-foreground/50 border-0 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange resize-none"
                />
                <button type="submit" className="inline-flex items-center gap-2 bg-orange text-orange-foreground px-8 py-3 rounded text-sm font-semibold hover:bg-orange-hover transition-colors">
                  Submit <Send size={14} />
                </button>
              </form>
            </div>

            {/* Right - Quick Info */}
            <div className="flex flex-col justify-center gap-8">
              <div>
                <h3 className="text-xl font-bold text-navy-foreground mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-navy-foreground/80 text-sm">
                    <MapPin size={16} className="text-orange mt-0.5 shrink-0" />
                    <span>N, 3 Ave Zerktouni, Khénifra 54000, Morocco</span>
                  </div>
                  <div className="flex items-center gap-3 text-navy-foreground/80 text-sm">
                    <Phone size={16} className="text-orange shrink-0" />
                    <div>
                      <a href="tel:+34624132171" className="hover:text-orange transition-colors block">+34 624 13 21 71</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-navy-foreground/80 text-sm">
                    <Mail size={16} className="text-orange shrink-0" />
                    <div>
                      <a href="mailto:iglobestarvisa@gmail.com" className="hover:text-orange transition-colors block">iglobestarvisa@gmail.com</a>
                      <a href="mailto:iglobestarvisa@gmail.com" className="hover:text-orange transition-colors block">iglobestarvisa@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center text-navy-foreground hover:bg-orange transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center text-navy-foreground hover:bg-orange transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-navy-light flex items-center justify-center text-navy-foreground hover:bg-orange transition-colors">
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Footer */}
      <footer className="bg-[#001122] py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            {/* Logo + About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold text-white">GLOBESTAR</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our main focus is helping our clients move from their countries to EU with expert guidance and support.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Home', to: '/' },
                  { label: 'Our Team', to: '/our-team' },
                  { label: 'Bank Accounts & Payments', to: '/bank-account' },
                  { label: 'Contact Us', to: '/contact' },
                  { label: 'Book Appointment', to: '/contact' },
                ].map(l => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-gray-400 text-sm hover:text-orange transition-colors">
                      › {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Our Services</h4>
              <ul className="space-y-2">
                {[
                  { label: 'Visiting Visas', to: '/visiting-visa' },
                  { label: 'Studying Visas', to: '/studying-visa' },
                  { label: 'Invitation Letters', to: '/types-of-invitation' },
                  { label: 'Company Registration', to: '/company-registration' },
                  { label: 'Business Immigration', to: '/business-immigration' },
                ].map(l => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-gray-400 text-sm hover:text-orange transition-colors">
                      › {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contact Info</h4>
              <div className="space-y-3">
                <p className="text-gray-400 text-sm flex items-start gap-2">
                  <MapPin size={14} className="text-orange mt-0.5 shrink-0" />
                  N, 3 Ave Zerktouni,<br />Khénifra 54000, Morocco
                </p>
                <p className="text-gray-400 text-sm">
                  <a href="tel:+34624132171" className="hover:text-orange transition-colors">+34 624 13 21 71</a>
                </p>
                <p className="text-gray-400 text-sm">
                  <a href="mailto:iglobestarvisa@gmail.com" className="hover:text-orange transition-colors">iglobestarvisa@gmail.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-xs gap-4">
            <p>&copy; {new Date().getFullYear()} GLOBESTAR. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-orange transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
