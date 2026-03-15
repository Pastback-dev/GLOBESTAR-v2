import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CheckCircle2, Globe, Plane, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageHero = ({ title, breadcrumb }: { title: string; breadcrumb: string }) => (
  <div className="bg-[#0e2a47] py-16 md:py-24 text-white text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
      <p className="text-orange text-sm uppercase tracking-widest">{breadcrumb}</p>
    </div>
  </div>
);

const VisitingVisa = () => {
  const evisas = [
    { country: 'Albania E-visa', price: '550' },
    { country: 'Moldova E-visa', price: '1000' },
    { country: 'Georgia E-visa', price: '450' },
    { country: 'Hong Kong E-visa', price: '250' },
    { country: 'Turkey E-visa', price: '150' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <PageHero title="Visiting Visas & E-Visas" breadcrumb="Home / Visas / Visiting Visas" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-[#f27024] text-sm font-bold uppercase tracking-widest mb-3">E-VISA SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e2a47] mb-6">Apply for E-Visa</h2>
          <div className="w-16 h-1 bg-[#f27024] mx-auto mb-8"></div>
          <p className="text-gray-600 leading-relaxed mb-6">
            Travel visas allow the holder to enter a foreign country for tourism and leisure purposes only, and they typically have a specific duration of stay. However, it’s important to note that these visas generally do not grant the bearer the right to work or participate in any business activities while in the host country.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Embassy/ immigration grants three types of visas to applicants, 1. eTA (e-visa), 2. stamp visa & 3. sticker visa. We provide eTA visas for the many countries which are offering but these are for specific nationals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {evisas.map((visa) => (
            <div key={visa.country} className="bg-white border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-16 h-16 bg-section-gray rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="text-[#0e2a47]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0e2a47] mb-2">{visa.country}</h3>
              <div className="text-3xl font-bold text-[#f27024] mb-6">€{visa.price}</div>
              <Link 
                to="/contact" 
                className="block w-full bg-[#0e2a47] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Apply for E-Visa
              </Link>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-white p-8 rounded-xl shadow-sm border">
            <h3 className="text-2xl font-bold text-[#0e2a47] mb-8 text-center">How To Get a Visa?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Fill In The Application Form', step: 'Step 1', text: 'Please make sure to complete the online application form with the accurate spellings as per the information in your passport.' },
                { title: 'Attach Passport & Pay Fee', step: 'Step 2', text: "After completing the form, please upload a scanned copy of your passport and proceed to payment by clicking 'Pay.' Finally, click the 'Submit' button." },
                { title: 'Submit your Application', step: 'Step 3', text: 'After receiving your application, passport copy, and payment confirmation, we will process your E-visa and notify you via email.' },
              ].map((s, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-[#f27024] font-bold text-sm uppercase mb-2">{s.step}</div>
                  <h4 className="font-bold text-[#0e2a47] mb-4 h-12 leading-tight">{s.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-section-gray p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-[#0e2a47] mb-8">Types of Visitor Visas</h3>
            <div className="space-y-6">
              {[
                { title: 'General visitor visa', text: 'This type of visitor visa is typically valid for a limited duration, ranging from a few days to a few months, depending on the country’s regulations. Upon expiration, you may need to either renew it or return to your home country.' },
                { title: 'Family visitor visa', text: 'Family visitor visas allow you to reside in a foreign country with your family. Depending on the specific country’s policies, you may be eligible to apply for renewal after a certain period of residence.' },
                { title: 'Business visitor visa', text: 'Business visitor visas enable you to live in a foreign country and establish your business there. After conducting business activities for a specific duration, you may be eligible to apply for temporary residence status.' },
              ].map((type, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#0e2a47] text-white flex items-center justify-center shrink-0 font-bold">{idx + 1}</div>
                  <div>
                    <h4 className="font-bold text-[#0e2a47] mb-1">{type.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{type.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0e2a47] p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-6">Document Requirements</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                'Scanned all pages of current passport.',
                'Scanned ID/Residence card.',
                'Digital picture with white background.',
                'Police Clearance Certificate (if required)',
              ].map((req, idx) => (
                <li key={idx} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="text-[#f27024]" size={18} />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default VisitingVisa;