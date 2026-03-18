import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { User, Phone, Mail, Globe, Calendar, FileText, Upload, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const PageHero = ({ title, breadcrumb }: { title: string; breadcrumb: string }) => (
  <div className="bg-[#0e2a47] py-16 md:py-24 text-white text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase">{title}</h1>
      <p className="text-orange text-sm uppercase tracking-widest">{breadcrumb}</p>
    </div>
  </div>
);

const ApplyInvitation = () => {
  const [formData, setFormData] = useState({
    country: '',
    invitationType: '',
    travelerCount: '',
    embassy: '',
    startDate: '',
    finishDate: '',
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [files, setFiles] = useState<{
    passport: File | null;
    wifePassport: File | null;
    otherPassports: File | null;
  }>({
    passport: null,
    wifePassport: null,
    otherPassports: null
  });

  const [paymentFee, setPaymentFee] = useState(0);

  const countries = ["USA", "UK", "Canada", "Australia", "Germany", "France", "UAE", "Saudi Arabia", "Turkey", "Other"];
  const travelerOptions = ["1", "2", "3", "4", "5", "6+"];

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

    // Append files
    if (files.passport) submissionData.append('passport', files.passport);
    if (files.wifePassport) submissionData.append('wifePassport', files.wifePassport);
    if (files.otherPassports) submissionData.append('otherPassports', files.otherPassports);

    try {
      const response = await fetch("https://usebasin.com/f/f9e46ce0d9c7", {
        method: "POST",
        body: submissionData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast.success("Application submitted successfully! We will process it within 3 business days.");
        // Reset form
        setFormData({
          country: '',
          invitationType: '',
          travelerCount: '',
          embassy: '',
          startDate: '',
          finishDate: '',
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
        setFiles({
          passport: null,
          wifePassport: null,
          otherPassports: null
        });
      } else {
        const data = await response.json();
        if (data.errors) {
          toast.error(data.errors.map((error: { message: string }) => error.message).join(", "));
        } else {
          toast.error("Oops! There was a problem submitting your application.");
        }
      }
    } catch (error) {
      toast.error("Oops! There was a problem submitting your application.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <PageHero title="Apply Invitation Letter" breadcrumb="Home / Invitations / Apply Invitation" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-[#f27024] text-sm font-bold uppercase tracking-widest mb-3">INVITATION APPLICATION</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e2a47] mb-6 uppercase italic leading-tight">Apply for an Invitation Letter</h2>
          <div className="w-16 h-1 bg-[#f27024] mx-auto mb-8"></div>
          <p className="text-gray-600 leading-relaxed uppercase font-bold italic text-sm max-w-2xl mx-auto">
            Most Important Instructions: Please complete the application form with accurate information that matches your travel documents. Incomplete forms will not be accepted. Upload the required documents in PDF format and proceed to make the payment using Bank Account transfer.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* Trip Details */}
                <div className="space-y-6">
                  <h3 className="text-sm font-bold text-[#f27024] uppercase tracking-widest border-b border-gray-100 pb-2 italic">1. Trip Details</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        <Globe size={12} className="text-[#f27024]" /> Choose Country *
                      </label>
                      <select 
                        name="country"
                        className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                        value={formData.country}
                        onChange={(e) => setFormData({...formData, country: e.target.value})}
                        required
                      >
                        <option value="">Select Country</option>
                        {countries.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        <FileText size={12} className="text-[#f27024]" /> Choose Invitation Type *
                      </label>
                      <select 
                        name="invitationType"
                        className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                        value={formData.invitationType}
                        onChange={(e) => setFormData({...formData, invitationType: e.target.value})}
                        required
                      >
                        <option value="">Select Invitation Type</option>
                        <option value="visit">Visit Letter</option>
                        <option value="family">Family Letter</option>
                        <option value="business">Business Letter</option>
                        <option value="mediation">Mediation Letter</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        <User size={12} className="text-[#f27024]" /> Select the Number of Traveler
                      </label>
                      <select 
                        name="travelerCount"
                        className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                        value={formData.travelerCount}
                        onChange={(e) => setFormData({...formData, travelerCount: e.target.value})}
                      >
                        <option value="">Select Number</option>
                        {travelerOptions.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        <Globe size={12} className="text-[#f27024]" /> Embassy, where you will apply the visa
                      </label>
                      <input 
                        name="embassy"
                        type="text" 
                        className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                        placeholder="E.g. 42 Wallaby Way"
                        value={formData.embassy}
                        onChange={(e) => setFormData({...formData, embassy: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        <Calendar size={12} className="text-[#f27024]" /> Travel Start Date *
                      </label>
                      <input 
                        name="startDate"
                        type="date" 
                        className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                        value={formData.startDate}
                        onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        <Calendar size={12} className="text-[#f27024]" /> Travel Finish Date *
                      </label>
                      <input 
                        name="finishDate"
                        type="date" 
                        className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                        value={formData.finishDate}
                        onChange={(e) => setFormData({...formData, finishDate: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="space-y-6">
                  <h3 className="text-sm font-bold text-[#f27024] uppercase tracking-widest border-b border-gray-100 pb-2 italic">2. Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        <User size={12} className="text-[#f27024]" /> Your Title *
                      </label>
                      <div className="flex gap-4">
                        {['Mr.', 'Mrs.', 'Miss.'].map(title => (
                          <label key={title} className="flex items-center gap-2 cursor-pointer">
                            <input 
                              type="radio" 
                              name="title"
                              value={title}
                              checked={formData.title === title}
                              onChange={(e) => setFormData({...formData, title: e.target.value})}
                              className="w-4 h-4 text-[#f27024] focus:ring-[#f27024] border-gray-300"
                            />
                            <span className="text-xs font-bold text-[#0e2a47] italic">{title}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        Full Name *
                      </label>
                      <input 
                        name="fullName"
                        type="text" 
                        className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        Date of Birth *
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
                        Passport Number *
                      </label>
                      <input 
                        name="passportNumber"
                        type="text" 
                        className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                        placeholder="Passport Number"
                        value={formData.passportNumber}
                        onChange={(e) => setFormData({...formData, passportNumber: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        Issuing Country
                      </label>
                      <input 
                        name="issuingCountry"
                        type="text" 
                        className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                        placeholder="Issuing Country"
                        value={formData.issuingCountry}
                        onChange={(e) => setFormData({...formData, issuingCountry: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        Date of Expire
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
                  <h3 className="text-sm font-bold text-[#f27024] uppercase tracking-widest border-b border-gray-100 pb-2 italic">3. Contact Information</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        <Phone size={12} className="text-[#f27024]" /> Phone *
                      </label>
                      <input 
                        name="phone"
                        type="text" 
                        className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                        placeholder="E.g., +1 300 400 5000"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        <Mail size={12} className="text-[#f27024]" /> Email Address *
                      </label>
                      <input 
                        name="email"
                        type="email" 
                        className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                      Home Address
                    </label>
                    <input 
                      name="address"
                      type="text" 
                      className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                      placeholder="E.g., 42 Wallaby Way"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                    />
                  </div>
                </div>

                {/* Professional Information */}
                <div className="space-y-6">
                  <h3 className="text-sm font-bold text-[#f27024] uppercase tracking-widest border-b border-gray-100 pb-2 italic">4. Professional Information</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        Your Profession
                      </label>
                      <div className="flex gap-4">
                        {['Job', 'Business'].map(prof => (
                          <label key={prof} className="flex items-center gap-2 cursor-pointer">
                            <input 
                              type="radio" 
                              name="profession"
                              value={prof}
                              checked={formData.profession === prof}
                              onChange={(e) => setFormData({...formData, profession: e.target.value})}
                              className="w-4 h-4 text-[#f27024] focus:ring-[#f27024] border-gray-300"
                            />
                            <span className="text-xs font-bold text-[#0e2a47] italic">{prof}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        Your Designation
                      </label>
                      <input 
                        name="designation"
                        type="text" 
                        className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                        placeholder="Your Designation"
                        value={formData.designation}
                        onChange={(e) => setFormData({...formData, designation: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        Your Annual Income in Euro
                      </label>
                      <input 
                        name="annualIncome"
                        type="number" 
                        className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                        placeholder="Your Annual Income in Euro"
                        value={formData.annualIncome}
                        onChange={(e) => setFormData({...formData, annualIncome: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                        Employer Name
                      </label>
                      <input 
                        name="employerName"
                        type="text" 
                        className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                        placeholder="Employer Name"
                        value={formData.employerName}
                        onChange={(e) => setFormData({...formData, employerName: e.target.value})}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                      Employer Address
                    </label>
                    <input 
                      name="employerAddress"
                      type="text" 
                      className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                      placeholder="E.g., 42 Wallaby Way"
                      value={formData.employerAddress}
                      onChange={(e) => setFormData({...formData, employerAddress: e.target.value})}
                    />
                  </div>
                </div>

                {/* Document Uploads */}
                <div className="space-y-6">
                  <h3 className="text-sm font-bold text-[#f27024] uppercase tracking-widest border-b border-gray-100 pb-2 italic">5. Documents Upload (PDF Only)</h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-section-gray p-6 rounded-xl border-2 border-dashed border-gray-200 text-center">
                      <label className="block text-[9px] font-bold text-[#0e2a47] uppercase tracking-wider mb-4 italic">
                        Passport (main applicant) *
                      </label>
                      <input 
                        name="passport"
                        type="file" 
                        accept=".pdf"
                        className="hidden" 
                        id="passport-upload"
                        onChange={(e) => setFiles({...files, passport: e.target.files?.[0] || null})}
                      />
                      <label htmlFor="passport-upload" className="cursor-pointer group">
                        <div className="w-12 h-12 rounded-full bg-white mx-auto flex items-center justify-center text-gray-400 group-hover:bg-[#0e2a47] group-hover:text-[#f27024] transition-colors shadow-sm mb-3">
                          <Upload size={18} />
                        </div>
                        <p className="text-[10px] text-gray-500 italic">
                          {files.passport ? files.passport.name : "Choose File"}
                        </p>
                      </label>
                    </div>

                    <div className="bg-section-gray p-6 rounded-xl border-2 border-dashed border-gray-200 text-center">
                      <label className="block text-[9px] font-bold text-[#0e2a47] uppercase tracking-wider mb-4 italic">
                        Wife Passport
                      </label>
                      <input 
                        name="wifePassport"
                        type="file" 
                        accept=".pdf"
                        className="hidden" 
                        id="wife-passport-upload"
                        onChange={(e) => setFiles({...files, wifePassport: e.target.files?.[0] || null})}
                      />
                      <label htmlFor="wife-passport-upload" className="cursor-pointer group">
                        <div className="w-12 h-12 rounded-full bg-white mx-auto flex items-center justify-center text-gray-400 group-hover:bg-[#0e2a47] group-hover:text-[#f27024] transition-colors shadow-sm mb-3">
                          <Upload size={18} />
                        </div>
                        <p className="text-[10px] text-gray-500 italic">
                          {files.wifePassport ? files.wifePassport.name : "Choose File"}
                        </p>
                      </label>
                    </div>

                    <div className="bg-section-gray p-6 rounded-xl border-2 border-dashed border-gray-200 text-center">
                      <label className="block text-[9px] font-bold text-[#0e2a47] uppercase tracking-wider mb-4 italic">
                        Other all Passports
                      </label>
                      <input 
                        name="otherPassports"
                        type="file" 
                        accept=".pdf"
                        className="hidden" 
                        id="other-passports-upload"
                        onChange={(e) => setFiles({...files, otherPassports: e.target.files?.[0] || null})}
                      />
                      <label htmlFor="other-passports-upload" className="cursor-pointer group">
                        <div className="w-12 h-12 rounded-full bg-white mx-auto flex items-center justify-center text-gray-400 group-hover:bg-[#0e2a47] group-hover:text-[#f27024] transition-colors shadow-sm mb-3">
                          <Upload size={18} />
                        </div>
                        <p className="text-[10px] text-gray-500 italic">
                          {files.otherPassports ? files.otherPassports.name : "Choose File"}
                        </p>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Additional Details */}
                <div className="space-y-6">
                  <h3 className="text-sm font-bold text-[#f27024] uppercase tracking-widest border-b border-gray-100 pb-2 italic">6. Other Details</h3>
                  <textarea 
                    name="otherDetails" 
                    className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic min-h-[120px]"
                    placeholder="E.g., type your other details if you want."
                    value={formData.otherDetails}
                    onChange={(e) => setFormData({...formData, otherDetails: e.target.value})}
                  ></textarea>
                </div>

                {/* Payment Section */}
                <div className="space-y-6 bg-section-gray p-8 rounded-2xl border border-gray-100">
                  <h3 className="text-sm font-bold text-[#0e2a47] uppercase tracking-widest mb-6 italic">7. Payment Method</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { id: 'bank', label: 'Bank Account' }
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
                  <div className="mt-6 p-6 bg-white rounded-xl border border-gray-200">
                    <h4 className="text-sm font-bold text-[#0e2a47] uppercase tracking-widest mb-4 italic">Bank Account Details</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Account Holder:</span>
                        <span className="font-semibold text-[#0e2a47]">M. Karim Haddouchane</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">RIB:</span>
                        <span className="font-semibold text-[#0e2a47]">230 380 5605342214023500 73</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">IBAN:</span>
                        <span className="font-semibold text-[#0e2a47] break-all">MA64 2303 8056 0534 2214 0235 0073</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">SWIFT Code:</span>
                        <span className="font-semibold text-[#0e2a47]">CIHMMAMC</span>
                      </div>
                    </div>
                    <p className="mt-4 text-xs text-gray-500 italic">
                      Please include your full name and application reference in the payment description.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-orange/5 rounded-lg border border-orange/10">
                  <div className="shrink-0 pt-0.5">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#f27024] focus:ring-[#f27024]" required />
                  </div>
                  <p className="text-[10px] text-gray-500 leading-relaxed italic">
                    I agree that all information provided is accurate and matches my travel documents. I understand that payments are non-refundable.
                  </p>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#f27024] text-white py-5 rounded-lg font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Processing...' : 'Proceed Your Payment'}
                </button>
              </form>
            </div>
          </div>

          {/* Guidelines Sidebar */}
          <div className="lg:col-span-1 order-1 lg:order-2 space-y-8">
            <div className="bg-[#0e2a47] p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-6 uppercase italic leading-tight">Notice</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <AlertCircle size={24} className="text-[#f27024] shrink-0" />
                  <p className="text-xs text-white/70 italic leading-relaxed">
                    Once payment is confirmed, we will send your invitation letter to your email within 3 business days.
                  </p>
                </div>
                <div className="p-4 bg-white/5 rounded-lg border border-white/10 italic">
                  <p className="text-[10px] text-white/50 mb-2 uppercase tracking-widest">Hard Copy Requests</p>
                  <p className="text-xs">If you require a hard copy, an additional charge of up to $65 may apply depending on your country.</p>
                </div>
              </div>
            </div>

            <div className="bg-section-gray p-8 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-[#0e2a47] mb-6 uppercase italic">Quick Steps</h3>
              <div className="space-y-6">
                {[
                  { step: '1', text: 'Fill In The Invitation Form' },
                  { step: '2', text: 'Attach Passport & Proceed Payment' },
                  { step: '3', text: 'Receive your Invitation within 3 Days' }
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