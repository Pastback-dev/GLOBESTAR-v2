import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'sonner';
import { useLanguage } from '../contexts/LanguageContext';

const FooterSection = () => {
  const { t, isRTL } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://usebasin.com/f/0b163e0b68d3", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        toast.success(t('footer.successMessage') || "Assessment request sent successfully!");
        setForm({ name: '', email: '', message: '' });
      } else {
        const data = await response.json();
        if (data.errors) {
          toast.error(data.errors.map((error: { message: string }) => error.message).join(", "));
        } else {
          toast.error(t('footer.errorMessage') || "Oops! There was a problem submitting your request.");
        }
      }
    } catch (error) {
      toast.error(t('footer.errorMessage') || "Oops! There was a problem submitting your request.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Assessment Form + Info Section */}
      <section id="contact-form" className="bg-navy py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left - Form */}
            <div className="text-start">
              <p className="text-orange text-sm font-semibold mb-2">{t('footer.getFreeAssessment')}</p>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-foreground mb-8 leading-tight">
                {t('footer.feelFreeToEnquire')}
              </h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder={t('footer.fullName')}
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-navy-light text-navy-foreground placeholder:text-navy-foreground/50 border-0 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t('footer.emailAddress')}
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-navy-light text-navy-foreground placeholder:text-navy-foreground/50 border-0 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange"
                />
                <textarea
                  name="message"
                  required
                  placeholder={t('footer.yourMessage')}
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-navy-light text-navy-foreground placeholder:text-navy-foreground/50 border-0 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange resize-none"
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-orange text-orange-foreground px-8 py-3 rounded text-sm font-semibold hover:bg-orange-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t('footer.submitting') : t('footer.submit')} <Send size={14} className={isRTL ? 'rotate-180' : ''} />
                </button>
              </form>
            </div>

            {/* Right - Quick Info */}
            <div className={`flex flex-col justify-center gap-8 ${isRTL ? 'text-right' : 'text-left'}`}>
              <div>
                <h3 className="text-xl font-bold text-navy-foreground mb-4">{t('footer.contactInformation')}</h3>
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
                      <a href="mailto:globestarvisa@gmail.com" className="hover:text-orange transition-colors block">globestarvisa@gmail.com</a>
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
          <div className="grid md:grid-cols-4 gap-10 mb-12 text-start">
            {/* Logo + About */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-bold text-white">GLOBESTAR</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                {t('footer.aboutText')}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2">
                {[
                  { label: t('nav.home'), to: '/' },
                  { label: t('nav.ourTeam'), to: '/our-team' },
                  { label: t('nav.bankAccounts'), to: '/bank-account' },
                  { label: t('nav.contact'), to: '/contact' },
                  { label: t('nav.bookAppointment'), to: '/contact' },
                ].map(l => (
                  <li key={l.to + l.label}>
                    <Link to={l.to} className="text-gray-400 text-sm hover:text-orange transition-colors">
                      {isRTL ? '‹' : '›'} {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">{t('footer.ourServices')}</h4>
              <ul className="space-y-2">
                {[
                  { label: t('nav.visitingVisas'), to: '/visiting-visa' },
                  { label: t('nav.studyingVisas'), to: '/studying-visa' },
                  { label: t('nav.invitations'), to: '/types-of-invitation' },
                  { label: t('nav.companyReg'), to: '/company-registration' },
                  { label: t('nav.businessImmigration'), to: '/business-immigration' },
                ].map(l => (
                  <li key={l.to + l.label}>
                    <Link to={l.to} className="text-gray-400 text-sm hover:text-orange transition-colors">
                      {isRTL ? '‹' : '›'} {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">{t('footer.contactInfo')}</h4>
              <div className="space-y-3">
                <p className="text-gray-400 text-sm flex items-start gap-2">
                  <MapPin size={14} className="text-orange mt-0.5 shrink-0" />
                  N, 3 Ave Zerktouni,<br />Khénifra 54000, Morocco
                </p>
                <p className="text-gray-400 text-sm">
                  <a href="tel:+34624132171" className="hover:text-orange transition-colors">+34 624 13 21 71</a>
                </p>
                <p className="text-gray-400 text-sm">
                  <a href="mailto:globestarvisa@gmail.com" className="hover:text-orange transition-colors">globestarvisa@gmail.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-xs gap-4">
            <p>&copy; {new Date().getFullYear()} GLOBESTAR. {t('footer.allRightsReserved')}</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-orange transition-colors">{t('footer.privacyPolicy')}</a>
              <a href="#" className="hover:text-orange transition-colors">{t('footer.termsOfService')}</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
