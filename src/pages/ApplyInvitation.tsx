import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { User, Phone, Mail, Globe, Calendar, FileText, Upload, AlertCircle } from 'lucide-react';
import { useState } from 'react';

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
    name: '',
    email: '',
    phone: '',
    nationality: '',
    passportNumber: '',
    visaType: '',
    duration: '',
    message: ''
  });

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
          <p className="text-gray-600 leading-relaxed uppercase font-bold italic text-sm">
            Please fill out the online invitation form with the correct spellings
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                      <User size={12} className="text-[#f27024]" /> Full Name (As in Passport) *
                    </label>
                    <input 
                      type="text" 
                      className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                      <Mail size={12} className="text-[#f27024]" /> Email Address *
                    </label>
                    <input 
                      type="email" 
                      className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                      <Phone size={12} className="text-[#f27024]" /> Phone / WhatsApp *
                    </label>
                    <input 
                      type="text" 
                      className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                      placeholder="+1 234 567 890"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                      <Globe size={12} className="text-[#f27024]" /> Nationality *
                    </label>
                    <input 
                      type="text" 
                      className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none italic"
                      placeholder="Your nationality"
                      value={formData.nationality}
                      onChange={(e) => setFormData({...formData, nationality: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                      <FileText size={12} className="text-[#f27024]" /> Invitation Type *
                    </label>
                    <select 
                      className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none appearance-none italic"
                      value={formData.visaType}
                      onChange={(e) => setFormData({...formData, visaType: e.target.value})}
                    >
                      <option value="">Select Visa Type</option>
                      <option value="visit">Visit Visa Invitation</option>
                      <option value="family">Family Visa Invitation</option>
                      <option value="business">Business Visa Invitation</option>
                      <option value="tourist">Tourist Visa Invitation</option>
                      <option value="group">Group Visa Invitation</option>
                      <option value="private">Private Invitation</option>
                    </select>
                  </div>
                  <div>
                    <label className="flex items-center gap-2 text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">
                      <Calendar size={12} className="text-[#f27024]" /> Proposed Duration *
                    </label>
                    <select 
                      className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none appearance-none italic"
                      value={formData.duration}
                      onChange={(e) => setFormData({...formData, duration: e.target.value})}
                    >
                      <option value="">Select Duration</option>
                      <option value="15">15 Days</option>
                      <option value="30">30 Days</option>
                      <option value="90">90 Days</option>
                      <option value="180">180 Days / 6 Months</option>
                      <option value="365">1 Year</option>
                    </select>
                  </div>
                </div>

                <div className="bg-section-gray p-8 rounded-xl border-2 border-dashed border-gray-200">
                  <label className="block text-[10px] font-bold text-[#0e2a47] uppercase tracking-wider mb-4 text-center italic">
                    Attach Passport (Clear Scan) *
                  </label>
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-gray-400 group hover:bg-[#0e2a47] hover:text-[#f27024] transition-colors cursor-pointer shadow-sm">
                      <Upload size={24} />
                    </div>
                    <p className="text-[10px] text-gray-500 italic text-center">After filling out the form, please attach a scanned copy of your passport.</p>
                    <button type="button" className="bg-[#0e2a47] text-white px-8 py-3 rounded font-bold text-xs uppercase tracking-widest hover:bg-[#f27024] transition-colors">Select Passport Copy</button>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-orange/5 rounded-lg border border-orange/10">
                  <div className="shrink-0 pt-0.5">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#f27024] focus:ring-[#f27024]" required />
                  </div>
                  <p className="text-[10px] text-gray-500 leading-relaxed italic">
                    I agree that all payments are non-refundable. Once payment is confirmed, the invitation letter will be issued within 3 business days.
                  </p>
                </div>

                <button className="w-full bg-[#f27024] text-white py-5 rounded-lg font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-xl shadow-orange-500/20">
                  Submit & Proceed to Payment
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