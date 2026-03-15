import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useState } from 'react';

const PageHero = ({ title, breadcrumb }: { title: string; breadcrumb: string }) => (
  <div className="bg-navy py-16 px-4">
    <div className="container mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h1>
      <p className="text-orange text-sm">{breadcrumb}</p>
    </div>
  </div>
);

const CompanyRegistrationForm = () => {
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

  const packages = ['Back – From €1,200', 'Advance – From €1,800', 'Premier – From €2,500'];
  const countries = ['Lithuania', 'Estonia', 'Albania'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Application submitted! Our team will contact you within 24 hours.');
  };

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <PageHero title="Apply for Company Registration" breadcrumb="Home / Company Reg / Apply for Company Reg" />

      <section className="py-20 bg-section-gray">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Online Application</p>
            <h2 className="text-3xl font-bold text-navy mb-4">Company Registration Form</h2>
            <div className="w-12 h-1 bg-orange mx-auto mb-4" />
            <p className="text-muted-foreground text-sm">Complete the form below to begin your company registration. We'll review your application and contact you within 24-48 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-background border rounded-xl shadow-sm p-8 space-y-8">
            {/* Section 1 - Package & Country */}
            <div>
              <h3 className="text-navy font-bold text-lg mb-4 pb-2 border-b">1. Registration Details</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Select Package *</label>
                  <select value={form.package} onChange={e => setForm({ ...form, package: e.target.value })} required className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange">
                    <option value="">Select Package</option>
                    {packages.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Country *</label>
                  <select value={form.country} onChange={e => setForm({ ...form, country: e.target.value })} required className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange">
                    <option value="">Select Country</option>
                    {countries.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2 - Company Names */}
            <div>
              <h3 className="text-navy font-bold text-lg mb-4 pb-2 border-b">2. Proposed Company Names</h3>
              <p className="text-muted-foreground text-xs mb-4">Please provide 2 preferred company names in order of preference. We'll use the first available name.</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Proposed Company Name 1 *</label>
                  <input type="text" placeholder="First choice company name" value={form.companyName1} onChange={e => setForm({ ...form, companyName1: e.target.value })} required className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Proposed Company Name 2</label>
                  <input type="text" placeholder="Second choice company name" value={form.companyName2} onChange={e => setForm({ ...form, companyName2: e.target.value })} className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Business Activities / Nature of Business *</label>
                  <textarea rows={3} placeholder="Describe the main business activities (e.g. import/export, IT consultancy, logistics...)" value={form.businessActivities} onChange={e => setForm({ ...form, businessActivities: e.target.value })} required className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange resize-none" />
                </div>
              </div>
            </div>

            {/* Section 3 - Director 1 */}
            <div>
              <h3 className="text-navy font-bold text-lg mb-4 pb-2 border-b">3. Director / Shareholder 1 (Primary)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Full Name (as on passport) *</label>
                  <input type="text" placeholder="Full Legal Name" value={form.directorName} onChange={e => setForm({ ...form, directorName: e.target.value })} required className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Nationality *</label>
                  <input type="text" placeholder="Nationality" value={form.directorNationality} onChange={e => setForm({ ...form, directorNationality: e.target.value })} required className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Date of Birth *</label>
                  <input type="date" value={form.directorDob} onChange={e => setForm({ ...form, directorDob: e.target.value })} required className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Passport Number *</label>
                  <input type="text" placeholder="Passport Number" value={form.directorPassport} onChange={e => setForm({ ...form, directorPassport: e.target.value })} required className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Email Address *</label>
                  <input type="email" placeholder="your@email.com" value={form.directorEmail} onChange={e => setForm({ ...form, directorEmail: e.target.value })} required className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Phone Number *</label>
                  <input type="tel" placeholder="+1 234 567 890" value={form.directorPhone} onChange={e => setForm({ ...form, directorPhone: e.target.value })} required className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Residential Address *</label>
                  <input type="text" placeholder="Full residential address" value={form.directorAddress} onChange={e => setForm({ ...form, directorAddress: e.target.value })} required className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Share Percentage (%)</label>
                  <input type="number" min="0" max="100" placeholder="e.g. 100" value={form.sharePercent} onChange={e => setForm({ ...form, sharePercent: e.target.value })} className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange" />
                </div>
              </div>
            </div>

            {/* Section 4 - Director 2 (optional) */}
            <div>
              <h3 className="text-navy font-bold text-lg mb-4 pb-2 border-b">4. Director / Shareholder 2 (Optional)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Full Name</label>
                  <input type="text" placeholder="Full Legal Name (if applicable)" value={form.director2Name} onChange={e => setForm({ ...form, director2Name: e.target.value })} className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Nationality</label>
                  <input type="text" placeholder="Nationality" value={form.director2Nationality} onChange={e => setForm({ ...form, director2Nationality: e.target.value })} className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Email</label>
                  <input type="email" placeholder="director2@email.com" value={form.director2Email} onChange={e => setForm({ ...form, director2Email: e.target.value })} className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange" />
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-navy mb-2">Additional Information / Special Requirements</label>
              <textarea rows={4} placeholder="Any special requirements or additional information we should know..." value={form.additionalInfo} onChange={e => setForm({ ...form, additionalInfo: e.target.value })} className="w-full border rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange resize-none" />
            </div>

            <button type="submit" className="w-full bg-orange text-white py-4 rounded text-sm font-bold hover:bg-orange-hover transition-colors">
              Submit Company Registration Application →
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
