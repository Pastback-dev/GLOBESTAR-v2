import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useState } from 'react';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';

const PageHero = ({ title, breadcrumb }: { title: string; breadcrumb: string }) => (
  <div className="bg-[#0e2a47] py-16 px-4">
    <div className="container mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 uppercase">{title}</h1>
      <p className="text-orange text-sm uppercase tracking-widest">{breadcrumb}</p>
    </div>
  </div>
);

const CompanyRegistrationForm = () => {
  const { t, isRTL } = useLanguage();
  const [form, setForm] = useState({
    package: '',
    country: '',
    companyName1: '',
    companyName2: '',
    businessActivities: '',
    directorName: '',
    directorNationality: '',
    directorDob: '',
    directorPassport: '',
    directorEmail: '',
    directorPhone: '',
    directorAddress: '',
    director2Name: '',
    director2Nationality: '',
    director2Email: '',
    sharePercent: '',
    additionalInfo: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const packages = [
    t('compReg.packageBasic'),
    t('compReg.packageAdvance'),
    t('compReg.packagePremier')
  ];
  const countries = [
    t('country.lithuania'),
    t('country.estonia'),
    t('country.albania')
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://usebasin.com/f/e95f054afa38", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        toast.success(t('compReg.success'));
        setForm({
          package: '',
          country: '',
          companyName1: '',
          companyName2: '',
          businessActivities: '',
          directorName: '',
          directorNationality: '',
          directorDob: '',
          directorPassport: '',
          directorEmail: '',
          directorPhone: '',
          directorAddress: '',
          director2Name: '',
          director2Nationality: '',
          director2Email: '',
          sharePercent: '',
          additionalInfo: '',
        });
      } else {
        toast.error(t('compReg.error'));
      }
    } catch (error) {
      toast.error(t('compReg.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen bg-background ${isRTL ? 'text-right' : 'text-left'}`}>
      <TopBar />
      <Navbar />
      <PageHero title={t('compReg.heroTitle')} breadcrumb={t('compReg.heroBreadcrumb')} />

      <section className="py-20 bg-section-gray">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-[#f27024] font-bold mb-3">{t('compReg.onlineApp')}</p>
            <h2 className="text-3xl font-bold text-[#0e2a47] mb-4">{t('compReg.formTitle')}</h2>
            <div className="w-12 h-1 bg-[#f27024] mx-auto mb-4" />
            <p className="text-gray-600 text-sm italic">{t('compReg.formDesc')}</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white border rounded-xl shadow-sm p-8 space-y-8">
            {/* Section 1 - Package & Country */}
            <div>
              <h3 className="text-[#0e2a47] font-bold text-lg mb-4 pb-2 border-b">{t('compReg.section1Title')}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0e2a47] mb-2">{t('compReg.selectPackage')}</label>
                  <select value={form.package} onChange={e => setForm({ ...form, package: e.target.value })} required className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f27024] appearance-none bg-section-gray border-none">
                    <option value="">{t('compReg.selectPackagePlaceholder')}</option>
                    {packages.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0e2a47] mb-2">{t('compReg.country')}</label>
                  <select value={form.country} onChange={e => setForm({ ...form, country: e.target.value })} required className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f27024] appearance-none bg-section-gray border-none">
                    <option value="">{t('compReg.selectCountryPlaceholder')}</option>
                    {countries.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2 - Company Names */}
            <div>
              <h3 className="text-[#0e2a47] font-bold text-lg mb-4 pb-2 border-b">{t('compReg.section2Title')}</h3>
              <p className="text-gray-500 text-xs mb-4 italic">{t('compReg.namesDesc')}</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0e2a47] mb-2">{t('compReg.name1')}</label>
                  <input type="text" placeholder={t('compReg.name1Placeholder')} value={form.companyName1} onChange={e => setForm({ ...form, companyName1: e.target.value })} required className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f27024] bg-section-gray border-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0e2a47] mb-2">{t('compReg.name2')}</label>
                  <input type="text" placeholder={t('compReg.name2Placeholder')} value={form.companyName2} onChange={e => setForm({ ...form, companyName2: e.target.value })} className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f27024] bg-section-gray border-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0e2a47] mb-2">{t('compReg.businessActivities')}</label>
                  <textarea rows={3} placeholder={t('compReg.businessActivitiesPlaceholder')} value={form.businessActivities} onChange={e => setForm({ ...form, businessActivities: e.target.value })} required className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f27024] resize-none bg-section-gray border-none" />
                </div>
              </div>
            </div>

            {/* Section 3 - Director 1 */}
            <div>
              <h3 className="text-[#0e2a47] font-bold text-lg mb-4 pb-2 border-b">{t('compReg.section3Title')}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0e2a47] mb-2">{t('compReg.fullName')}</label>
                  <input type="text" placeholder={t('compReg.fullNamePlaceholder')} value={form.directorName} onChange={e => setForm({ ...form, directorName: e.target.value })} required className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f27024] bg-section-gray border-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0e2a47] mb-2">{t('compReg.nationality')}</label>
                  <input type="text" placeholder={t('compReg.nationalityPlaceholder')} value={form.directorNationality} onChange={e => setForm({ ...form, directorNationality: e.target.value })} required className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f27024] bg-section-gray border-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0e2a47] mb-2">{t('compReg.dob')}</label>
                  <input type="date" value={form.directorDob} onChange={e => setForm({ ...form, directorDob: e.target.value })} required className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f27024] bg-section-gray border-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0e2a47] mb-2">{t('compReg.passportNumber')}</label>
                  <input type="text" placeholder={t('compReg.passportNumberPlaceholder')} value={form.directorPassport} onChange={e => setForm({ ...form, directorPassport: e.target.value })} required className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f27024] bg-section-gray border-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0e2a47] mb-2">{t('compReg.emailAddress')}</label>
                  <input type="email" placeholder={t('compReg.emailPlaceholder')} value={form.directorEmail} onChange={e => setForm({ ...form, directorEmail: e.target.value })} required className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f27024] bg-section-gray border-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0e2a47] mb-2">{t('compReg.phoneNumber')}</label>
                  <input type="tel" placeholder={t('compReg.phonePlaceholder')} value={form.directorPhone} onChange={e => setForm({ ...form, directorPhone: e.target.value })} required className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f27024] bg-section-gray border-none" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0e2a47] mb-2">{t('compReg.residentialAddress')}</label>
                  <input type="text" placeholder={t('compReg.residentialAddressPlaceholder')} value={form.directorAddress} onChange={e => setForm({ ...form, directorAddress: e.target.value })} required className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f27024] bg-section-gray border-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0e2a47] mb-2">{t('compReg.sharePercentage')}</label>
                  <input type="number" min="0" max="100" placeholder={t('compReg.sharePercentagePlaceholder')} value={form.sharePercent} onChange={e => setForm({ ...form, sharePercent: e.target.value })} className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f27024] bg-section-gray border-none" />
                </div>
              </div>
            </div>

            {/* Section 4 - Director 2 (optional) */}
            <div>
              <h3 className="text-[#0e2a47] font-bold text-lg mb-4 pb-2 border-b">{t('compReg.section4Title')}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0e2a47] mb-2">{t('compReg.director2Name')}</label>
                  <input type="text" placeholder={t('compReg.director2NamePlaceholder')} value={form.director2Name} onChange={e => setForm({ ...form, director2Name: e.target.value })} className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f27024] bg-section-gray border-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0e2a47] mb-2">{t('compReg.director2Nationality')}</label>
                  <input type="text" placeholder={t('compReg.nationalityPlaceholder')} value={form.director2Nationality} onChange={e => setForm({ ...form, director2Nationality: e.target.value })} className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f27024] bg-section-gray border-none" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-[#0e2a47] mb-2">{t('compReg.director2Email')}</label>
                  <input type="email" placeholder={t('compReg.director2EmailPlaceholder')} value={form.director2Email} onChange={e => setForm({ ...form, director2Email: e.target.value })} className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f27024] bg-section-gray border-none" />
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-[#0e2a47] mb-2">{t('compReg.additionalInfo')}</label>
              <textarea rows={4} placeholder={t('compReg.additionalInfoPlaceholder')} value={form.additionalInfo} onChange={e => setForm({ ...form, additionalInfo: e.target.value })} className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#f27024] resize-none bg-section-gray border-none" />
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full bg-[#f27024] text-white py-4 rounded-lg text-sm font-bold hover:bg-opacity-90 transition-all shadow-xl shadow-orange-500/20 disabled:opacity-50">
              {isSubmitting ? t('compReg.submitting') : t('compReg.submitButton')}
            </button>
          </form>
        </div>
      </section>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default CompanyRegistrationForm;
