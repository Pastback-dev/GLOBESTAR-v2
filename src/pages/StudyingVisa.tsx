import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CheckCircle2, BookOpen, GraduationCap, Globe, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageHero = ({ title, breadcrumb }: { title: string; breadcrumb: string }) => (
  <div className="bg-[#0e2a47] py-16 md:py-24 text-white text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
      <p className="text-orange text-sm uppercase tracking-widest">{breadcrumb}</p>
    </div>
  </div>
);

const StudyingVisa = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <PageHero title="Studying Visas & Admissions" breadcrumb="Home / Visas / Studying Visas" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-[#f27024] text-sm font-bold uppercase tracking-widest mb-3">STUDENT ADMISSIONS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e2a47] mb-6">Study Abroad Opportunities</h2>
          <div className="w-16 h-1 bg-[#f27024] mx-auto mb-8"></div>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Easy Inspire Ltd provides admission services for studying in the United Kingdom & Ireland. We collaborate with a wide range of universities offering programs including ESL, ESOL, Foundation, Undergraduate, and Postgraduate courses across various fields.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
            <h3 className="text-xl font-bold text-[#0e2a47] mb-4">UNITED KIGDOM</h3>
            <p className="text-sm text-gray-500 mb-6 font-medium">Study in the UK with top universities.</p>
            <a href="https://www.applyboard.com/partners/1505191/intake-form" target="_blank" className="block w-full bg-[#0e2a47] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">Apply Now</a>
          </div>
          <div className="bg-white border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
            <h3 className="text-xl font-bold text-[#0e2a47] mb-4">IRELAND</h3>
            <p className="text-sm text-gray-500 mb-6 font-medium">Pursue your degree in Ireland's major cities.</p>
            <a href="https://www.applyboard.com/partners/1505191/intake-form" target="_blank" className="block w-full bg-[#0e2a47] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">Apply Now</a>
          </div>
          <div className="bg-white border rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
            <h3 className="text-xl font-bold text-[#0e2a47] mb-4">GERMAN</h3>
            <p className="text-sm text-gray-500 mb-6 font-medium">Explore educational excellence in Germany.</p>
            <a href="https://www.applyboard.com/partners/1505191/intake-form" target="_blank" className="block w-full bg-[#0e2a47] text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">Apply Now</a>
          </div>
        </div>

        <div className="bg-section-gray p-8 md:p-12 rounded-2xl mb-20 text-center">
          <h3 className="text-2xl font-bold text-[#0e2a47] mb-6">Apply for Language Programs</h3>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            To apply for language programs, there is no need to take the IELTS exam. There are no age restrictions, and study gaps are not considered as an issue. Tuition fees can be paid after obtaining the visa.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Spain', lang: 'Spanish' },
              { name: 'Italy', lang: 'Italian' },
              { name: 'Poland', lang: 'Polish' },
              { name: 'France', lang: 'Portuguese' },
            ].map(lang => (
              <div key={lang.name} className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-bold text-[#0e2a47]">{lang.name}</p>
                <p className="text-xs text-[#f27024] uppercase tracking-wider">{lang.lang} Language</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-sm border">
            <h3 className="text-xl font-bold text-[#0e2a47] mb-6">How Long Does It Take?</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Clock className="text-[#f27024] shrink-0" size={20} />
                <p className="text-sm text-gray-600"><span className="font-bold">Study Visa:</span> Usually processed in one to two months, depending on country and embassy.</p>
              </div>
              <div className="flex gap-3">
                <Clock className="text-[#f27024] shrink-0" size={20} />
                <p className="text-sm text-gray-600"><span className="font-bold">Admission:</span> Processed in two to four weeks.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#0e2a47] p-8 rounded-xl text-white">
            <h3 className="text-xl font-bold mb-6">Document Requirements</h3>
            <ul className="space-y-3">
              {[
                'All educational documents (which having).',
                'Scanned Current Passport.',
                'Scanned ID/Residence Card.',
                'Digital picture with white background.',
                'Resume with your education & job details.',
              ].map((req, idx) => (
                <li key={idx} className="flex items-center gap-3 text-white/80 text-sm">
                  <CheckCircle2 className="text-[#f27024]" size={16} />
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

export default StudyingVisa;