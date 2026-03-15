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
    title: 'Visit Visa Invitation',
    definition: 'A document provided to individuals applying for visit visas, serving as a formal invitation from a host or sponsoring party in the destination country to stay with them.'
  },
  {
    icon: Briefcase,
    title: 'Business Visa Invitation',
    definition: 'A formal invitation letter from a company for business visa purposes, usually for attending meetings, conferences, or professional engagements.'
  },
  {
    icon: Heart,
    title: 'Family Visa Invitation',
    definition: 'A written letter from a host or company for family visitor visa purposes, required if you intend to visit your family members in the destination country.'
  },
  {
    icon: MapPin,
    title: 'Tourist Visa Invitation',
    definition: 'A written letter from a registered tourist company for tourist visa purposes, outlining the plan to explore and visit the country.'
  },
  {
    icon: FileText,
    title: 'Private Invitation',
    definition: 'A written document from an individual in the host country to facilitate a tourist or private visit visa for an applicant.'
  },
  {
    icon: Users,
    title: 'Group Invitation',
    definition: 'A document issued by a company to facilitate tourist group visas for multiple individuals traveling together to the same destination.'
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
            Choosing GLOBESTAR ensures a professionally crafted invitation letter that aligns with the specific visa application requirements of each respective country.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {invitationTypes.map((type, idx) => (
            <div key={idx} className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all group">
              <div className="w-16 h-16 rounded-full bg-section-gray flex items-center justify-center mb-6 group-hover:bg-[#0e2a47] group-hover:text-[#f27024] transition-colors">
                <type.icon size={32} className="text-[#0e2a47] group-hover:text-[#f27024]" />
              </div>
              <h3 className="text-xl font-bold text-[#0e2a47] mb-4 uppercase italic leading-tight">{type.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 italic">
                {type.definition}
              </p>
              <div className="w-full h-0.5 bg-gray-50 mb-6"></div>
              <Link to="/details-and-costs" className="text-[#f27024] font-bold text-xs uppercase tracking-widest hover:underline underline-offset-4 italic">
                View Pricing & Apply
              </Link>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto bg-section-gray p-8 md:p-12 rounded-3xl border border-gray-100">
          <h3 className="text-2xl font-bold text-[#0e2a47] mb-6 italic uppercase">Why do you need an Invitation Letter?</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-8 italic">
            Visa officers consider the invitation letter as a supporting document to assess the genuineness of the visit and the applicant’s intention to return to their home country. Trust in our expertise to facilitate your journey and enhance your chances of a successful visa application.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              'Lithuania', 'Albania', 'United Kingdom', 'Belarus', 'Russia',
              'Ukraine', 'Spain', 'Sweden', 'Hungary', 'Slovakia', 'Poland'
            ].map((country, i) => (
              <span key={i} className="bg-white px-4 py-2 rounded-full text-[10px] font-bold text-[#0e2a47] border border-gray-100 uppercase tracking-widest italic">{country}</span>
            ))}
          </div>
        </div>
      </div>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default TypesOfInvitation;