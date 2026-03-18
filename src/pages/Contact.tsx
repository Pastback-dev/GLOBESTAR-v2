import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CheckCircle2, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';

const PageHero = ({ title, breadcrumb }: { title: string; breadcrumb: string }) => (
  <div className="bg-[#0e2a47] py-16 md:py-24 text-white text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase">{title}</h1>
      <p className="text-orange text-sm uppercase tracking-widest">{breadcrumb}</p>
    </div>
  </div>
);

const Contact = () => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    country: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://usebasin.com/f/968d45594d0f", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success(t('contact.successMessage'));
        setFormData({
          firstName: '',
          email: '',
          phone: '',
          country: '',
          service: '',
          message: ''
        });
      } else {
        const data = await response.json();
        if (data.errors) {
          toast.error(data.errors.map((error: { message: string }) => error.message).join(", "));
        } else {
          toast.error(t('contact.errorMessage'));
        }
      }
    } catch (error) {
      toast.error(t('contact.errorMessage'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen bg-background ${isRTL ? 'text-right' : 'text-left'}`}>
      <TopBar />
      <Navbar />
      <PageHero title={t('contact.heroTitle')} breadcrumb={t('contact.heroBreadcrumb')} />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-[#f27024] text-sm font-bold uppercase tracking-widest mb-3">{t('contact.getInTouch')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e2a47] mb-6">{t('contact.contactGlobestar')}</h2>
          <div className="w-16 h-1 bg-[#f27024] mx-auto mb-8"></div>
          <p className="text-gray-600 leading-relaxed uppercase font-bold">
            {t('contact.startConversation')}
          </p>
          <p className="text-gray-600">{t('contact.howWeHelp')}</p>
        </div>

        <div className={`grid md:grid-cols-2 gap-12 max-w-6xl mx-auto ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          {/* Left - Contact Info */}
          <div className="bg-[#0e2a47] p-8 md:p-12 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-8">{t('contact.contactInfoTitle')}</h3>
            <div className="space-y-8">
              <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-[#f27024]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{t('contact.address')}</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    N, 3 Ave Zerktouni,<br />Khénifra 54000, Morocco
                  </p>
                </div>
              </div>

              <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="text-[#f27024]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{t('contact.phone')}</h4>
                  <a href="tel:+34624132171" className="text-white/70 text-sm block hover:text-[#f27024] transition-colors">+34 624 13 21 71</a>
                </div>
              </div>

              <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="text-[#f27024]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{t('contact.email')}</h4>
                  <a href="mailto:globestarvisa@gmail.com" className="text-white/70 text-sm block hover:text-[#f27024] transition-colors text-wrap break-all">globestarvisa@gmail.com</a>
                </div>
              </div>

              <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Clock className="text-[#f27024]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{t('contact.workingHours')}</h4>
                  <p className="text-white/70 text-sm">{t('contact.monFri')}</p>
                  <p className="text-white/70 text-sm">{t('contact.satSun')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-[#0e2a47] mb-8">{t('contact.sendUsMessage')}</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#0e2a47] uppercase tracking-wider mb-2">{t('contact.firstName')}</label>
                  <input
                    name="firstName"
                    type="text"
                    required
                    placeholder={t('contact.firstNamePlaceholder')}
                    className="w-full bg-section-gray border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#f27024] outline-none"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0e2a47] uppercase tracking-wider mb-2">{t('contact.emailAddress')}</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder={t('contact.emailPlaceholder')}
                    className="w-full bg-section-gray border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#f27024] outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#0e2a47] uppercase tracking-wider mb-2">{t('contact.phoneNumber')}</label>
                  <input
                    name="phone"
                    type="text"
                    placeholder={t('contact.phonePlaceholder')}
                    className="w-full bg-section-gray border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#f27024] outline-none"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0e2a47] uppercase tracking-wider mb-2">{t('contact.yourCountry')}</label>
                  <input
                    name="country"
                    type="text"
                    placeholder={t('contact.countryPlaceholder')}
                    className="w-full bg-section-gray border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#f27024] outline-none"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#0e2a47] uppercase tracking-wider mb-2">{t('contact.serviceInterested')}</label>
                <select
                  name="service"
                  className="w-full bg-section-gray border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#f27024] outline-none appearance-none"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="">{t('contact.selectService')}</option>
                  <option value="work">{t('contact.workPermit')}</option>
                  <option value="visit">{t('contact.visitVisa')}</option>
                  <option value="study">{t('contact.studyAbroad')}</option>
                  <option value="invitation">{t('contact.invitationLetter')}</option>
                  <option value="company">{t('contact.companyRegistration')}</option>
                  <option value="immigration">{t('contact.businessImmigration')}</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#0e2a47] uppercase tracking-wider mb-2">{t('contact.message')}</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder={t('contact.messagePlaceholder')}
                  className="w-full bg-section-gray border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#f27024] outline-none resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#f27024] text-white py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-lg shadow-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t('contact.sending') : t('contact.sendButton')}
              </button>
            </form>
          </div>
        </div>
      </div>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
