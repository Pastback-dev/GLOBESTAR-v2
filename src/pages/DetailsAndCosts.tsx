import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Search, Phone, Mail, CheckCircle2, ChevronDown, ChevronUp, X, CreditCard, Loader2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getCountryPaymentOptions, startCheckout, type PriceOption } from '@/lib/stripe';

// ─── Payment Modal ────────────────────────────────────────────────────────────
interface PaymentModalProps {
  country: string;
  options: PriceOption[];
  onClose: () => void;
}

const PaymentModal = ({ country, options, onClose }: PaymentModalProps) => {
  const [selected, setSelected] = useState<PriceOption | null>(options[0] ?? null);
  const [loading, setLoading] = useState(false);

  const handlePay = async () => {
    if (!selected) return;
    setLoading(true);
    try {
      await startCheckout(country, selected);
    } catch (err: any) {
      alert('Payment error: ' + (err.message || 'Please try again.'));
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal panel */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="bg-[#0e2a47] px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold text-[#f27024] uppercase tracking-widest mb-0.5">Secure Payment</p>
            <h2 className="text-white font-bold text-lg">{country} Invitation</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <X size={16} className="text-white" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Invitation type selector */}
          <div>
            <p className="text-[10px] font-bold text-[#0e2a47] uppercase tracking-widest mb-3">
              Select Invitation Type
            </p>
            <div className="space-y-2">
              {options.map((opt) => (
                <button
                  key={opt.type}
                  onClick={() => setSelected(opt)}
                  className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl border-2 transition-all text-left ${
                    selected?.type === opt.type
                      ? 'border-[#f27024] bg-orange-50 shadow-sm'
                      : 'border-gray-100 bg-gray-50 hover:border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        selected?.type === opt.type
                          ? 'border-[#f27024] bg-[#f27024]'
                          : 'border-gray-300'
                      }`}
                    >
                      {selected?.type === opt.type && (
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      )}
                    </div>
                    <span className="text-sm font-semibold text-[#0e2a47]">{opt.label}</span>
                  </div>
                  <span className="text-base font-extrabold text-[#f27024]">€{opt.amount}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Total */}
          {selected && (
            <div className="flex items-center justify-between px-4 py-3 bg-section-gray rounded-xl">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Total</span>
              <span className="text-2xl font-extrabold text-[#0e2a47]">€{selected.amount}</span>
            </div>
          )}

          {/* Trust badges */}
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <ShieldCheck size={14} className="text-green-500 shrink-0" />
            <span>Secure payment powered by Stripe. Your data is encrypted.</span>
          </div>

          {/* CTA */}
          <button
            onClick={handlePay}
            disabled={!selected || loading}
            className="w-full bg-[#f27024] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-opacity-90 transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Redirecting to Stripe…
              </>
            ) : (
              <>
                <CreditCard size={16} />
                Pay Now — €{selected?.amount ?? '—'}
              </>
            )}
          </button>

          {/* Stripe logo text */}
          <p className="text-center text-[10px] text-gray-400 italic">
            You will be redirected to Stripe's secure checkout page.
          </p>
        </div>
      </div>
    </div>
  );
};

// ─── Page Hero ────────────────────────────────────────────────────────────────
const PageHero = ({ title, breadcrumb }: { title: string; breadcrumb: string }) => (
  <div className="bg-[#0e2a47] py-16 md:py-24 text-white text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase">{title}</h1>
      <p className="text-orange text-sm uppercase tracking-widest">{breadcrumb}</p>
    </div>
  </div>
);

// ─── Service Card ─────────────────────────────────────────────────────────────
const ServiceCard = ({
  country,
  countryKey,
  businessPrice,
  options,
  note,
  onPayClick,
}: {
  country: string;
  countryKey: string;
  businessPrice: string | number;
  options: string[];
  note?: string;
  onPayClick: (countryKey: string, countryLabel: string) => void;
}) => {
  const { t } = useLanguage();
  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow text-start flex flex-col">
      <div className="p-6 border-b border-gray-100">
        <h3 className="text-xl font-bold text-[#0e2a47] mb-1">{country}</h3>
        <p className="text-xs text-[#f27024] font-bold uppercase tracking-widest">{t('costs.visaInvitationLetters')}</p>
      </div>
      <div className="bg-gray-50 flex items-center justify-between px-6 py-4">
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-[#0e2a47]">€</span>
          <span className="text-4xl font-extrabold text-[#0e2a47] leading-none">{businessPrice}</span>
        </div>
        <div className="text-right">
          <span className="block text-xs font-bold text-gray-400 uppercase">{t('costs.businessInvitation')}</span>
        </div>
      </div>
      <div className="p-6 space-y-3 mb-4 flex-1">
        {options.map((opt: string, idx: number) => (
          <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
            <CheckCircle2 size={14} className="text-[#f27024] shrink-0 mt-0.5" />
            <span>{opt}</span>
          </div>
        ))}
      </div>
      {/* Action buttons */}
      <div className="px-6 pb-6 space-y-3">
        {/* Stripe Pay Now */}
        <button
          onClick={() => onPayClick(countryKey, country)}
          className="block w-full text-center bg-[#f27024] text-white py-3 rounded font-bold uppercase tracking-widest text-xs hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2 shadow-md shadow-orange-500/20"
        >
          <CreditCard size={13} />
          Pay Now
        </button>
        {/* Apply form link */}
        <Link
          to={`/apply-invitation?country=${countryKey}`}
          className="block w-full text-center bg-transparent border border-[#0e2a47] text-[#0e2a47] py-3 rounded font-bold uppercase tracking-widest text-xs hover:bg-[#0e2a47] hover:text-white transition-colors"
        >
          {t('costs.applyNow')}
        </Link>
        {note && (
          <p className="text-[10px] text-gray-400 mt-2 italic leading-tight text-start">
            {t('costs.note')}: {note}
          </p>
        )}
      </div>
    </div>
  );
};

// ─── Sidebar ──────────────────────────────────────────────────────────────────
const Sidebar = () => {
  const { t, isRTL } = useLanguage();
  return (
    <div className="space-y-12 text-start">
      <div>
        <h3 className="text-lg font-bold text-[#0e2a47] mb-6 flex items-center gap-2">
          <span className="w-1 h-6 bg-[#f27024]"></span>
          {t('costs.search')}
        </h3>
        <div className="relative">
          <input
            type="text"
            placeholder={`${t('costs.search')}...`}
            className={`w-full border-b-2 border-gray-100 py-2 ${isRTL ? 'pl-10 pr-0' : 'pr-10 pl-0'} focus:border-[#f27024] outline-none transition-colors`}
          />
          <Search className={`absolute ${isRTL ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 text-gray-400`} size={18} />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-[#0e2a47] mb-6 flex items-center gap-2">
          <span className="w-1 h-6 bg-[#f27024]"></span>
          {t('costs.topServices')}
        </h3>
        <ul className="space-y-4">
          {[
            { name: t('nav.visitingVisas'), to: '/visiting-visa' },
            { name: t('nav.studyingVisas'), to: '/studying-visa' },
            { name: t('invitation.visitTitle'), to: '/details-and-costs' },
            { name: t('invitation.familyTitle'), to: '/details-and-costs' },
            { name: t('invitation.businessTitle'), to: '/details-and-costs' },
            { name: t('nav.applyInvitation'), to: '/apply-invitation' },
            { name: t('nav.companyReg'), to: '/company-registration' },
            { name: t('nav.businessImmigration'), to: '/business-immigration' },
            { name: t('nav.bankAccounts'), to: '/bank-account' }
          ].map((s, i) => (
            <li key={i}>
              <Link to={s.to} className="text-sm text-gray-600 hover:text-[#f27024] transition-colors flex items-center justify-between group">
                <span>{s.name}</span>
                <span className={`text-gray-300 group-hover:text-[#f27024] ${isRTL ? 'rotate-180' : ''}`}>→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-[#0e2a47] p-8 rounded-xl text-white">
        <h3 className="text-xl font-bold mb-8 italic">{t('costs.anyQuestions')}</h3>
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Phone size={18} className="text-[#f27024]" />
            </div>
            <div>
              <p className="text-[10px] text-white/50 uppercase tracking-widest mb-1 italic">{t('costs.callWhatsApp')}</p>
              <p className="font-bold text-sm">+34 624 13 21 71</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Mail size={18} className="text-[#f27024]" />
            </div>
            <div>
              <p className="text-[10px] text-white/50 uppercase tracking-widest mb-1 italic">{t('costs.emailUs')}</p>
              <p className="font-bold text-sm break-all">globestarvisa@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────
const DetailsAndCosts = () => {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Modal state
  const [modalCountryKey, setModalCountryKey] = useState<string | null>(null);
  const [modalCountryLabel, setModalCountryLabel] = useState<string>('');

  const openModal = (key: string, label: string) => {
    setModalCountryKey(key);
    setModalCountryLabel(label);
  };
  const closeModal = () => setModalCountryKey(null);

  const countries = [
    { countryKey: 'Lithuania',   country: t('country.lithuania'),   businessPrice: t('price.business450'), options: [`${t('invitation.visit')}: ${t('price.eur350')}`, `${t('invitation.business')}: ${t('price.eur450')}`, `${t('invitation.family')}: ${t('price.eur300')} ${t('invitation.perPerson')}`], note: t('costs.noteMediation') },
    { countryKey: 'Estonia',     country: t('country.estonia'),     businessPrice: t('price.business550'), options: [`${t('invitation.tourist')}: ${t('price.eur350usd')}`, `${t('invitation.business')}: ${t('price.eur550usd')}`, `${t('invitation.family')}: ${t('price.eur300usd')} ${t('invitation.perPerson')}`], note: t('costs.notePerPerson') },
    { countryKey: 'Albania',     country: t('country.albania'),     businessPrice: t('price.business450'), options: [`${t('invitation.tourist')}: ${t('price.eur350')}`, `${t('invitation.business')}: ${t('price.eur450')}`, `${t('invitation.family')}: ${t('price.eur300')} ${t('invitation.perPerson')}`], note: t('costs.notePerPerson') },
    { countryKey: 'Belarus',     country: t('country.belarus'),     businessPrice: t('price.business450'), options: [`${t('invitation.visit')}: ${t('price.eur350')}`, `${t('invitation.business')}: ${t('price.eur450')}`, `${t('invitation.family')}: ${t('price.eur300')} ${t('invitation.perPerson')}`], note: t('costs.notePerPerson') },
    { countryKey: 'UK',          country: t('country.uk'),          businessPrice: t('price.business500'), options: [`${t('invitation.visit')}: ${t('price.eur350')}`, `${t('invitation.business')}: ${t('price.eur500')}`, `${t('invitation.family')}: ${t('price.eur300')} ${t('invitation.perPerson')}`], note: t('costs.notePerPerson') },
    { countryKey: 'Russia',      country: t('country.russia'),      businessPrice: t('price.business500'), options: [`${t('invitation.tourist')}: ${t('price.eur500')}`, `${t('invitation.business')}: N/A`, `${t('invitation.family')}: ${t('price.eur450')} ${t('invitation.perPerson')}`], note: t('costs.notePerPerson') },
    { countryKey: 'Serbia',      country: t('country.serbia'),      businessPrice: t('price.business350'), options: [`${t('invitation.tourist')}: ${t('price.eur350')}`, `${t('invitation.business')}: N/A`, `${t('invitation.family')}: ${t('price.eur300')} ${t('invitation.perPerson')}`], note: t('costs.notePerPerson') },
    { countryKey: 'Kosovo',      country: t('country.kosovo'),      businessPrice: t('price.business350'), options: [`${t('invitation.tourist')}: ${t('price.eur350usd')}`, `${t('invitation.business')}: N/A`, `${t('invitation.family')}: ${t('price.eur300usd')} ${t('invitation.perPerson')}`], note: t('costs.notePerPerson') },
    { countryKey: 'Cyprus',      country: t('country.cyprus'),      businessPrice: t('price.business350'), options: [`${t('invitation.tourist')}: ${t('price.eur350usd')}`, `${t('invitation.business')}: ${t('price.eur500usd')}`, `${t('invitation.family')}: ${t('price.eur300usd')} ${t('invitation.perPerson')}`], note: t('costs.notePerPerson') },
    { countryKey: 'Spain',       country: t('country.spain'),       businessPrice: t('price.business800'), options: [`${t('invitation.tourist')}: ${t('price.eur350')}`, `${t('invitation.policeApproved')}: ${t('price.eur800')}`, `${t('invitation.family')}: ${t('price.eur300')} ${t('invitation.perPerson')}`], note: t('costs.notePolice') },
    { countryKey: 'Sweden',      country: t('country.sweden'),      businessPrice: t('price.business500'), options: [`${t('invitation.tourist')}: ${t('price.eur350')}`, `${t('invitation.business')}: ${t('price.eur500')}`, `${t('invitation.family')}: ${t('price.eur300')} ${t('invitation.perPerson')}`], note: t('costs.noteTouristType') },
    { countryKey: 'Hungary',     country: t('country.hungary'),     businessPrice: t('price.business500'), options: [`${t('invitation.tourist')}: ${t('price.eur350')}`, `${t('invitation.business')}: ${t('price.eur500')}`, `${t('invitation.family')}: ${t('price.eur300')} ${t('invitation.perPerson')}`], note: t('costs.noteTouristType') },
    { countryKey: 'Luxembourg',  country: t('country.luxembourg'),  businessPrice: t('price.business500'), options: [`${t('invitation.tourist')}: ${t('price.eur350')}`, `${t('invitation.business')}: ${t('price.eur500')}`, `${t('invitation.family')}: ${t('price.eur300')} ${t('invitation.perPerson')}`], note: t('costs.noteTouristType') },
    { countryKey: 'Netherlands', country: t('country.netherlands'), businessPrice: t('price.business500'), options: [`${t('invitation.tourist')}: ${t('price.eur350')}`, `${t('invitation.business')}: ${t('price.eur500')}`, `${t('invitation.family')}: ${t('price.eur300')} ${t('invitation.perPerson')}`], note: t('costs.noteTouristType') },
    { countryKey: 'Germany',     country: t('country.germany'),     businessPrice: t('price.business550'), options: [`${t('invitation.tourist')}: ${t('price.eur350')}`, `${t('invitation.business')}: ${t('price.eur500')}`, `${t('invitation.family')}: ${t('price.eur300')} ${t('invitation.perPerson')}`], note: t('costs.noteTouristType') },
    { countryKey: 'Czech',       country: t('country.czech'),       businessPrice: t('price.business500'), options: [`${t('invitation.tourist')}: ${t('price.eur350')}`, `${t('invitation.business')}: ${t('price.eur500')}`, `${t('invitation.family')}: ${t('price.eur300')} ${t('invitation.perPerson')}`], note: t('costs.noteTouristType') },
    { countryKey: 'Denmark',     country: t('country.denmark'),     businessPrice: t('price.business550'), options: [`${t('invitation.tourist')}: ${t('price.eur350')}`, `${t('invitation.business')}: ${t('price.eur550')}`, `${t('invitation.family')}: ${t('price.eur300')} ${t('invitation.perPerson')}`], note: t('costs.noteTouristType') },
    { countryKey: 'Finland',     country: t('country.finland'),     businessPrice: t('price.business500'), options: [`${t('invitation.tourist')}: ${t('price.eur350')}`, `${t('invitation.business')}: ${t('price.eur500')}`, `${t('invitation.family')}: ${t('price.eur300')} ${t('invitation.perPerson')}`], note: t('costs.noteTouristType') },
    { countryKey: 'France',      country: t('country.france'),      businessPrice: t('price.business550'), options: [`${t('invitation.tourist')}: ${t('price.eur350')}`, `${t('invitation.business')}: ${t('price.eur550')}`, `${t('invitation.family')}: ${t('price.eur300')} ${t('invitation.perPerson')}`], note: t('costs.noteTouristType') },
    { countryKey: 'Iceland',     country: t('country.iceland'),     businessPrice: t('price.business500'), options: [`${t('invitation.tourist')}: ${t('price.eur350')}`, `${t('invitation.business')}: ${t('price.eur500')}`, `${t('invitation.family')}: ${t('price.eur300')} ${t('invitation.perPerson')}`], note: t('costs.noteTouristType') },
    { countryKey: 'Norway',      country: t('country.norway'),      businessPrice: t('price.business450'), options: [`${t('invitation.tourist')}: ${t('price.eur350')}`, `${t('invitation.business')}: ${t('price.eur450')}`, `${t('invitation.family')}: ${t('price.eur300')} ${t('invitation.perPerson')}`], note: t('costs.noteTouristType') },
    { countryKey: 'Poland',      country: t('country.poland'),      businessPrice: t('price.business500'), options: [`${t('invitation.tourist')}: ${t('price.eur350')}`, `${t('invitation.business')}: ${t('price.eur500')}`, `${t('invitation.family')}: ${t('price.eur300')} ${t('invitation.perPerson')}`], note: t('costs.noteTouristType') },
    { countryKey: 'Portugal',    country: t('country.portugal'),    businessPrice: t('price.business550'), options: [`${t('invitation.tourist')}: ${t('price.eur350')}`, `${t('invitation.business')}: ${t('price.eur550')}`, `${t('invitation.family')}: ${t('price.eur300')} ${t('invitation.perPerson')}`], note: t('costs.noteTouristType') },
    { countryKey: 'Ireland',     country: t('country.ireland'),     businessPrice: t('price.business500'), options: [`${t('invitation.tourist')}: ${t('price.eur350')}`, `${t('invitation.business')}: ${t('price.eur500')}`, `${t('invitation.family')}: ${t('price.eur300')} ${t('invitation.perPerson')}`], note: t('costs.noteTouristType') },
  ];

  const faqs = [
    { q: t('costs.faq1Q'), a: t('costs.faq1A') },
    { q: t('costs.faq2Q'), a: t('costs.faq2A') },
    { q: t('costs.faq3Q'), a: t('costs.faq3A') }
  ];

  const steps = [
    { step: 'Step 1', title: t('costs.step1Title'), text: t('costs.step1Text') },
    { step: 'Step 2', title: t('costs.step2Title'), text: t('costs.step2Text') },
    { step: 'Step 3', title: t('costs.step3Title'), text: t('costs.step3Text') },
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <PageHero title={t('costs.heroTitle')} breadcrumb={t('costs.heroBreadcrumb')} />

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-3/4 order-2 lg:order-1 text-start">
            <h2 className="text-3xl font-bold text-[#0e2a47] mb-6 italic">{t('costs.invitationLetterHeading')}</h2>
            <div className="prose prose-sm max-w-none text-gray-600 space-y-4 mb-12 italic">
              <p>{t('costs.para1')}</p>
              <p>{t('costs.para2')}</p>
              <p>{t('costs.para3')}</p>
              <p>{t('costs.para4')}</p>
            </div>

            <div className="mb-16">
              <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                <h3 className="text-2xl font-bold text-[#0e2a47] italic">{t('costs.applyHeading')}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8 text-center">
                {countries.map((c, i) => (
                  <ServiceCard
                    key={i}
                    countryKey={c.countryKey}
                    country={c.country}
                    businessPrice={c.businessPrice}
                    options={c.options}
                    note={c.note}
                    onPayClick={openModal}
                  />
                ))}
              </div>
            </div>

            <div className="bg-section-gray p-8 rounded-2xl mb-16">
              <h3 className="text-2xl font-bold text-[#0e2a47] mb-6 italic uppercase">{t('costs.typesHeading')}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6 italic">
                {t('costs.globestarIsCompany')}
              </p>
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                {[
                  `1. ${t('invitation.visitTitle')}`,
                  `2. ${t('invitation.familyTitle')}`,
                  `3. ${t('invitation.businessTitle')}`,
                  `4. ${t('invitation.touristTitle')}`,
                  `5. ${t('invitation.privateTitle')}`,
                  `6. ${t('invitation.groupTitle')}`
                ].map((item, i) => (
                  <li key={i} className="text-sm text-gray-700 font-medium italic">{item}</li>
                ))}
              </ul>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-[#0e2a47] mb-6 italic uppercase">{t('costs.paymentTermsHeading')}</h3>
              <div className="bg-white border rounded-xl p-8 text-sm text-gray-600 leading-relaxed space-y-4 shadow-sm italic">
                <p>{t('costs.paymentPara1')}</p>
                <p className="font-bold text-[#f27024]">{t('costs.paymentPara2')}</p>
                <p>{t('costs.paymentPara3')}</p>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-[#0e2a47] mb-8 text-center italic uppercase">{t('costs.howToGetHeading')}</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {steps.map((s, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="inline-block px-4 py-1 bg-orange/10 text-orange rounded text-[10px] font-bold uppercase tracking-widest">{t(`costs.step${idx+1}Title`).split(' ')[0]} {idx+1}</div>
                    <h4 className="font-bold text-[#0e2a47] leading-tight whitespace-pre-line italic">{s.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed italic">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-[#0e2a47] mb-8 italic uppercase">{t('costs.faqHeading')}</h3>
              <div className="space-y-4">
                {faqs.map((item, idx) => (
                  <div key={idx} className="border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-4 text-left font-bold text-[#0e2a47] bg-white hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-sm italic">{item.q}</span>
                      {openFaq === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {openFaq === idx && (
                      <div className="p-4 bg-gray-50 text-sm text-gray-600 border-t italic">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4 order-1 lg:order-2">
            <Sidebar />
          </div>
        </div>
      </div>

      <FooterSection />
      <WhatsAppButton />

      {/* Payment Modal */}
      {modalCountryKey && (
        <PaymentModal
          country={modalCountryLabel}
          options={getCountryPaymentOptions(modalCountryKey)}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default DetailsAndCosts;