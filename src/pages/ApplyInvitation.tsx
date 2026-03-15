import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { User, Phone, Mail, Globe, Calendar, FileText, Upload } from 'lucide-react';
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e2a47] mb-6 uppercase">Application Form</h2>
          <div className="w-16 h-1 bg-[#f27024] mx-auto mb-8"></div>
          <p className="text-gray-600 leading-relaxed uppercase font-bold italic">
            Please fill out the form below carefully
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-2xl border border-gray-100">
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="flex items-center gap-2 text-xs font-bold text-[#0e2a47] uppercase tracking-wider mb-3">
                  <User size={14} className="text-[#f27024]" /> Full Name (As in Passport) *
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
                <label className="flex items-center gap-2 text-xs font-bold text-[#0e2a47] uppercase tracking-wider mb-3">
                  <Mail size={14} className="text-[#f27024]" /> Email Address *
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
                <label className="flex items-center gap-2 text-xs font-bold text-[#0e2a47] uppercase tracking-wider mb-3">
                  <Phone size={14} className="text-[#f27024]" /> Phone / WhatsApp *
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
                <label className="flex items-center gap-2 text-xs font-bold text-[#0e2a47] uppercase tracking-wider mb-3">
                  <Globe size={14} className="text-[#f27024]" /> Nationality *
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
                <label className="flex items-center gap-2 text-xs font-bold text-[#0e2a47] uppercase tracking-wider mb-3">
                  <FileText size={14} className="text-[#f27024]" /> Invitation Type *
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
                </select>
              </div>
              <div>
                <label className="flex items-center gap-2 text-xs font-bold text-[#0e2a47] uppercase tracking-wider mb-3">
                  <Calendar size={14} className="text-[#f27024]" /> Proposed Duration *
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
              <label className="block text-xs font-bold text-[#0e2a47] uppercase tracking-wider mb-4 text-center">
                Passport Copy Upload (Scan) *
              </label>
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-gray-400">
                  <Upload size={32} />
                </div>
                <p className="text-xs text-gray-500 italic">Drag and drop or click to upload PDF/JPG/PNG</p>
                <button type="button" className="bg-[#0e2a47] text-white px-6 py-2 rounded font-bold text-xs uppercase tracking-widest">Select File</button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0e2a47] uppercase tracking-wider mb-3 italic">Additional Information / Special Requests</label>
              <textarea 
                rows={4} 
                className="w-full bg-section-gray border-0 rounded-lg px-4 py-4 text-sm focus:ring-2 focus:ring-[#f27024] outline-none resize-none italic"
                placeholder="Any other details we should know..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <div className="flex items-start gap-3">
              <div className="shrink-0 pt-0.5">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#f27024] focus:ring-[#f27024]" required />
              </div>
              <p className="text-xs text-gray-500 leading-relaxed italic">
                I agree that the information provided is accurate and authentic. I understand that processing fees are required to initiate the application.
              </p>
            </div>

            <button className="w-full bg-[#f27024] text-white py-5 rounded-lg font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-xl shadow-orange-500/20">
              Submit Application
            </button>
          </form>
        </div>
      </div>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default ApplyInvitation;