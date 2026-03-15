import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { FileText, Users, Plane, Heart, MapPin, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageHero = ({ title, breadcrumb }: { title: string; breadcrumb: string }) => (
  <div className="bg-[#0e2a47] py-16 md:py-24 text-white text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase">{title}</h1>
      <p className="text-orange text-sm uppercase tracking-widest">{breadcrumb}</p>
    </div>
  </div>
);

const invitationTypes = [
  {
    icon: Plane,
    title: 'Visit Invitation',
    definition: 'A visa invitation letter is a written letter from the company for a visitor visa purpose as an invitation to stay with them.'
  },
  {
    icon: Briefcase,
    title: 'Business Invitation',
    definition: 'A visa invitation letter is a written letter from the company for a business visa purpose, usually for attending meetings or conferences.'
  },
  {
    icon: Heart,
    title: 'Family Invitation',
    definition: 'A visa invitation letter is a written letter from the company for a Family visitor visa purpose if you intend to visit your family.'
  },
  {
    icon: MapPin,
    title: 'Tourist Invitation',
    definition: 'A visa invitation letter is a written letter from the tourist company for a tourist visa purpose to explore the country.'
  },
  {
    icon: Users,
    title: 'Group Invitation',
    definition: 'A group invitation is a written document from a company to obtain tourist group visas for multiple people traveling together.'
  },
  {
    icon: FileText,
    title: 'Private Invitation',
    definition: 'A private invitation letter is a written document from an individual in the host country to obtain a tourist visa.'
  }
];

const TypesOfInvitation = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <PageHero title="Types of Invitation" breadcrumb="Home / Invitations / Types of Invitation" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-[#f27024] text-sm font-bold uppercase tracking-widest mb-3">VISA DOCUMENTATION</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e2a47] mb-6 uppercase italic">Types of Invitation Letters</h2>
          <div className="w-16 h-1 bg-[#f27024] mx-auto mb-8"></div>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto italic">
            A visa invitation letter serves as a guarantee to the embassy that you have a specific purpose for your visit and that you will not overstay your visa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {invitationTypes.map((type, idx) => (
            <div key={idx} className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all group">
              <div className="w-16 h-16 rounded-full bg-section-gray flex items-center justify-center mb-6 group-hover:bg-[#0e2a47] group-hover:text-[#f27024] transition-colors">
                <type.icon size={32} className="text-[#0e2a47] group-hover:text-[#f27024]" />
              </div>
              <h3 className="text-xl font-bold text-[#0e2a47] mb-4 uppercase italic">{type.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 italic">
                {type.definition}
              </p>
              <div className="w-full h-0.5 bg-gray-50 mb-6"></div>
              <Link to="/apply-invitation" className="text-[#f27024] font-bold text-xs uppercase tracking-widest hover:underline underline-offset-4 italic">
                Request Invitation
              </Link>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-section-gray p-8 md:p-12 rounded-3xl border border-gray-100">
          <h3 className="text-2xl font-bold text-[#0e2a47] mb-6 italic uppercase">Why do you need an Invitation Letter?</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
            This letter serves as an invitation to stay with them, and by extension, guarantees that you will not overstay your visa. Embassies require this as proof of accommodation and purpose of stay.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="bg-white px-4 py-2 rounded-full text-[10px] font-bold text-[#0e2a47] border border-gray-100 uppercase tracking-widest italic">Lithuania</span>
            <span className="bg-white px-4 py-2 rounded-full text-[10px] font-bold text-[#0e2a47] border border-gray-100 uppercase tracking-widest italic">Albania</span>
            <span className="bg-white px-4 py-2 rounded-full text-[10px] font-bold text-[#0e2a47] border border-gray-100 uppercase tracking-widest italic">United Kingdom</span>
            <span className="bg-white px-4 py-2 rounded-full text-[10px] font-bold text-[#0e2a47] border border-gray-100 uppercase tracking-widest italic">Belarus</span>
            <span className="bg-white px-4 py-2 rounded-full text-[10px] font-bold text-[#0e2a47] border border-gray-100 uppercase tracking-widest italic">Russia</span>
          </div>
        </div>
      </div>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default TypesOfInvitation;