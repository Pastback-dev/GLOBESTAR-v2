import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { User, Phone, Mail, Calendar, AlertCircle } from 'lucide-react';
import { useState, useMemo, useEffect } from 'react';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';
import { useSearchParams } from 'react-router-dom';
import { getCountryPaymentOptions, startCheckout, type PriceOption, COUNTRIES } from '@/lib/stripe';

const PageHero = ({ title, breadcrumb }: { title: string; breadcrumb: string }) => (
  <div className="bg-[#0e2a47] py-16 md:py-24 text-white text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase">{title}</h1>
      <p className="text-orange text-sm uppercase tracking-widest">{breadcrumb}</p>
    </div>
  </div>
);

const ApplyInvitation = () => {
  const { t, isRTL } = useLanguage();
  const [searchParams] = useSearchParams();
  const paramCountry = searchParams.get('country') || 'Lithuania';

  const [selectedCountry, setSelectedCountry] = useState(paramCountry);
  const options = useMemo(() => getCountryPaymentOptions(selectedCountry), [selectedCountry]);
  const [selectedOption, setSelectedOption] = useState<PriceOption>(options[0]);

  useEffect(() => {
    setSelectedOption(options[0]);
  }, [options]);

  const [formData, setFormData] = useState({
    title: '',
    fullName: '',
    dob: '',
    passportNumber: '',
    issuingCountry: '',
    expiryDate: '',
    phone: '',
    email: '',
    address: '',
    profession: '',
    designation: '',
    annualIncome: '',
    employerName: '',
    employerAddress: '',
    otherDetails: '',
    paymentMethod: 'stripe'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [paymentFee, setPaymentFee] = useState(0);

  const handlePaymentMethodChange = (method: string) => {
    setFormData({ ...formData, paymentMethod: method });
    setPaymentFee(0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = new FormData();
    
    // Append all form data
    Object.entries(formData).forEach(([key, value]) => {
      submissionData.append(key, value);
    });

    // Append country and package
    submissionData.append('DestinationCountry', selectedCountry);
    submissionData.append('InvitationPackage', selectedOption.label);
    submissionData.append('AmountToPay', String(selectedOption.amount));

    try {
      const response = await fetch("https://usebasin.com/f/f9e46ce0d9c7", {
        method: "POST",
        body: submissionData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast.success(t('apply.success'));
        if (formData.paymentMethod === 'stripe') {
          await startCheckout(selectedCountry, selectedOption);
          return; // Stop execution to prevent form reset before redirecting
        }
        // Reset form
        setFormData({
          title: '',
          fullName: '',
          dob: '',
          passportNumber: '',
          issuingCountry: '',
          expiryDate: '',
          phone: '',
          email: '',
          address: '',
          profession: '',
          designation: '',
          annualIncome: '',
          employerName: '',
          employerAddress: '',
          otherDetails: '',
          paymentMethod: ''
        });
      } else {
        const data = await response.json();
        if (data.errors) {
          toast.error(data.errors.map((error: { message: string }) => error.message).join(", "));
        } else {
          toast.error(t('apply.error'));
        }
      }
    } catch (error) {
      toast.error(t('apply.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`min-h-screen bg-background ${isRTL ? 'text-right' : 'text-left'}`}>
      <TopBar />
      <Navbar />
      <PageHero title={t('apply.heroTitle')} breadcrumb={t('apply.heroBreadcrumb')} />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-[#f27024] text-sm font-bold uppercase tracking-widest mb-3">{t('apply.invitationApp')}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e2a47] mb-6 uppercase italic leading-tight">{t('apply.applyHeading')}</h2>
          <div className="w-16 h-1 bg-[#f27024] mx-auto mb-8"></div>
          <p className="text-gray-600 leading-relaxed uppercase font-bold italic text-sm max-w-2xl mx-auto">
            {t('apply.instructions')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* Package Selection */}
                <div className="space-y-6">
                  <h3 className="text-sm font-bold text-[#f27024] uppercase tracking-widest border-b border-gray-100 pb-2 italic">{t('apply.section0Title')}</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        {t('apply.destinationCountry')}
                      </label>
                      <select
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic text-[#0e2a47]"
                        required
                      >
                        {COUNTRIES.map(c => (
                          <option key={c} value={c}>{t('country.' + c.toLowerCase())}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        {t('apply.selectPackage')}
                      </label>
                      <select
                        value={selectedOption.type}
                        onChange={(e) => {
                          const opt = options.find(o => o.type === e.target.value);
                          if (opt) setSelectedOption(opt);
                        }}
                        className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic font-bold text-[#0e2a47]"
                        required
                      >
                        {options.map(o => (
                          <option key={o.type} value={o.type}>
                            {t('invitation.' + o.type)} — €{o.amount}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-sm font-bold text-[#f27024] uppercase tracking-widest border-b border-gray-100 pb-2 italic">{t('apply.section1Title')}</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        <User size={12} className="text-[#f27024]" /> {t('apply.yourTitle')}
                      </label>
                      <div className="flex gap-4">
                        {[
                          { value: 'Mr.', label: t('apply.titleMr') },
                          { value: 'Mrs.', label: t('apply.titleMrs') },
                          { value: 'Miss.', label: t('apply.titleMiss') }
                        ].map(title => (
                          <label key={title.value} className="flex items-center gap-2 cursor-pointer">
                            <input 
                              type="radio" 
                              name="title"
                              value={title.value}
                              checked={formData.title === title.value}
                              onChange={(e) => setFormData({...formData, title: e.target.value})}
                              className="w-4 h-4 text-[#f27024] focus:ring-[#f27024] border-gray-300"
                            />
                            <span className="text-xs font-bold text-[#0e2a47] italic">{title.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        {t('apply.fullName')}
                      </label>
                      <input 
                        name="fullName"
                        type="text" 
                        className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                        placeholder={t('apply.fullNamePlaceholder')}
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        {t('apply.dob')}
                      </label>
                      <input 
                        name="dob"
                        type="date" 
                        className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                        value={formData.dob}
                        onChange={(e) => setFormData({...formData, dob: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        {t('apply.passportNumber')}
                      </label>
                      <input 
                        name="passportNumber"
                        type="text" 
                        className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                        placeholder={t('apply.passportPlaceholder')}
                        value={formData.passportNumber}
                        onChange={(e) => setFormData({...formData, passportNumber: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        {t('apply.issuingCountry')}
                      </label>
                      <input 
                        name="issuingCountry"
                        type="text" 
                        className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                        placeholder={t('apply.issuingCountryPlaceholder')}
                        value={formData.issuingCountry}
                        onChange={(e) => setFormData({...formData, issuingCountry: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        {t('apply.expiryDate')}
                      </label>
                      <input 
                        name="expiryDate"
                        type="date" 
                        className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                        value={formData.expiryDate}
                        onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-sm font-bold text-[#f27024] uppercase tracking-widest border-b border-gray-100 pb-2 italic">{t('apply.section2Title')}</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        <Phone size={12} className="text-[#f27024]" /> {t('apply.phone')}
                      </label>
                      <input 
                        name="phone"
                        type="text" 
                        className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                        placeholder={t('apply.phonePlaceholder')}
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        <Mail size={12} className="text-[#f27024]" /> {t('apply.email')}
                      </label>
                      <input 
                        name="email"
                        type="email" 
                        className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                        placeholder={t('apply.emailPlaceholder')}
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                      {t('apply.homeAddress')}
                    </label>
                    <input 
                      name="address"
                      type="text" 
                      className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                      placeholder={t('apply.homeAddressPlaceholder')}
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                    />
                  </div>
                </div>

                {/* Professional Information */}
                <div className="space-y-6">
                  <h3 className="text-sm font-bold text-[#f27024] uppercase tracking-widest border-b border-gray-100 pb-2 italic">{t('apply.section3Title')}</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        {t('apply.yourProfession')}
                      </label>
                      <div className="flex gap-4">
                        {[
                          { value: 'Job', label: t('apply.profJob') },
                          { value: 'Business', label: t('apply.profBusiness') }
                        ].map(prof => (
                          <label key={prof.value} className="flex items-center gap-2 cursor-pointer">
                            <input 
                              type="radio" 
                              name="profession"
                              value={prof.value}
                              checked={formData.profession === prof.value}
                              onChange={(e) => setFormData({...formData, profession: e.target.value})}
                              className="w-4 h-4 text-[#f27024] focus:ring-[#f27024] border-gray-300"
                            />
                            <span className="text-xs font-bold text-[#0e2a47] italic">{prof.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        {t('apply.yourDesignation')}
                      </label>
                      <input 
                        name="designation"
                        type="text" 
                        className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                        placeholder={t('apply.designationPlaceholder')}
                        value={formData.designation}
                        onChange={(e) => setFormData({...formData, designation: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        {t('apply.annualIncome')}
                      </label>
                      <input 
                        name="annualIncome"
                        type="number" 
                        className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                        placeholder={t('apply.annualIncomePlaceholder')}
                        value={formData.annualIncome}
                        onChange={(e) => setFormData({...formData, annualIncome: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        {t('apply.employerName')}
                      </label>
                      <input 
                        name="employerName"
                        type="text" 
                        className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                        placeholder={t('apply.employerNamePlaceholder')}
                        value={formData.employerName}
                        onChange={(e) => setFormData({...formData, employerName: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                      {t('apply.employerAddress')}
                    </label>
                    <input 
                      name="employerAddress"
                      type="text" 
                      className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                      placeholder={t('apply.employerAddressPlaceholder')}
                      value={formData.employerAddress}
                      onChange={(e) => setFormData({...formData, employerAddress: e.target.value})}
                    />
                  </div>
                </div>

                {/* Additional Details */}
                <div className="space-y-6">
                  <h3 className="text-sm font-bold text-[#f27024] uppercase tracking-widest border-b border-gray-100 pb-2 italic">{t('apply.section4Title')}</h3>
                  <textarea 
                    name="otherDetails" 
                    className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic min-h-[120px]"
                    placeholder={t('apply.otherDetailsPlaceholder')}
                    value={formData.otherDetails}
                    onChange={(e) => setFormData({...formData, otherDetails: e.target.value})}
                  ></textarea>
                </div>

                {/* Payment Section */}
                <div className="space-y-6 bg-section-gray p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-sm font-bold text-[#0e2a47] uppercase tracking-widest mb-6 italic">{t('apply.section5Title')}</h3>
                  
                  {/* Summary */}
                  <div className="bg-white p-4 rounded-xl border border-gray-100 mb-6 flex justify-between items-center shadow-sm">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{t('apply.totalToPay')}</span>
                    <span className="text-2xl font-extrabold text-[#0e2a47]">€{selectedOption.amount}</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { id: 'stripe', label: t('apply.paymentStripe') },
                      { id: 'bank', label: t('apply.paymentBank') }
                    ].map(method => (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => handlePaymentMethodChange(method.id)}
                        className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center justify-center gap-2 text-center ${
                          formData.paymentMethod === method.id 
                            ? 'border-[#f27024] bg-white shadow-md' 
                            : 'border-transparent bg-white/50 hover:bg-white hover:border-gray-200'
                        }`}
                      >
                        <span className="text-[10px] font-bold text-[#0e2a47] italic">{method.label}</span>
                      </button>
                    ))}
                  </div>

                  {/* Bank Account Details */}
                  {formData.paymentMethod === 'bank' && (
                    <div className="mt-6 p-6 bg-white rounded-xl border border-gray-200 animate-fade-in">
                      <h4 className="text-sm font-bold text-[#0e2a47] uppercase tracking-widest mb-4 italic">{t('apply.bankDetails')}</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-500">{t('apply.accHolder')}</span>
                          <span className="font-semibold text-[#0e2a47]">M. Karim Haddouchane</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">{t('apply.rib')}</span>
                          <span className="font-semibold text-[#0e2a47]">230 380 5605342214023500 73</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">{t('apply.iban')}</span>
                          <span className="font-semibold text-[#0e2a47] break-all">MA64 2303 8056 0534 2214 0235 0073</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-500">{t('apply.swift')}</span>
                          <span className="font-semibold text-[#0e2a47]">CIHMMAMC</span>
                        </div>
                      </div>
                      <p className="mt-4 text-xs text-gray-500 italic">
                        {t('apply.bankNote')}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex items-start gap-3 p-4 bg-orange/5 rounded-lg border border-orange/10">
                  <div className="shrink-0 pt-0.5">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#f27024] focus:ring-[#f27024]" required />
                  </div>
                  <p className="text-[10px] text-gray-500 leading-relaxed italic">
                    {t('apply.agreement')}
                  </p>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#f27024] text-white py-5 rounded-lg font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t('apply.processing') : t('apply.proceedPayment')}
                </button>
              </form>
            </div>
          </div>

          {/* Guidelines Sidebar */}
          <div className="lg:col-span-1 order-1 lg:order-2 space-y-8">
            <div className="bg-[#0e2a47] p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-6 uppercase italic leading-tight">{t('apply.notice')}</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <AlertCircle size={24} className="text-[#f27024] shrink-0" />
                  <p className="text-xs text-white/70 italic leading-relaxed">
                    {t('apply.noticeText')}
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10 italic">
                  <p className="text-[10px] text-white/50 mb-2 uppercase tracking-widest">{t('apply.hardCopyTitle')}</p>
                  <p className="text-xs">{t('apply.hardCopyText')}</p>
                </div>
              </div>
            </div>

            <div className="bg-section-gray p-8 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-[#0e2a47] mb-6 uppercase italic">{t('apply.quickSteps')}</h3>
              <div className="space-y-6">
                {[
                  { step: '1', text: t('apply.step1') },
                  { step: '2', text: t('apply.step2') },
                  { step: '3', text: t('apply.step3') }
                ].map((s, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <span className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center font-bold text-[#f27024] shrink-0 italic">{s.step}</span>
                    <span className="text-xs text-[#0e2a47] font-semibold italic">{s.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default ApplyInvitation;