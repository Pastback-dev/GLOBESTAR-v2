import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { User, ShieldCheck, Award, Briefcase } from 'lucide-react';

const PageHero = ({ title, breadcrumb }: { title: string; breadcrumb: string }) => (
  <div className="bg-[#0e2a47] py-16 md:py-24 text-white text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">{title}</h1>
      <p className="text-orange text-sm uppercase tracking-widest font-medium">{breadcrumb}</p>
    </div>
  </div>
);

const teamMembers = [
  { name: 'Director, EasyInspire Ltd', role: 'Management', icon: User },
  { name: 'Dr. John Doe', role: 'Legal Services', icon: ShieldCheck },
  { name: 'Senior Consultant', role: 'Immigration Expert', icon: Award },
];

const OurTeam = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <PageHero title="Our Team" breadcrumb="Home / About / Our Team" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-[#f27024] text-sm font-bold uppercase tracking-widest mb-3">EXPERIENCED PROFESSIONALS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e2a47] mb-6 uppercase">Meet Our Experts</h2>
          <div className="w-16 h-1 bg-[#f27024] mx-auto mb-8"></div>
          <p className="text-gray-600 leading-relaxed italic max-w-2xl mx-auto">
            EasyInspire is powered by a team of dedicated immigration consultants and legal experts committed to your success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all text-center group">
              <div className="w-24 h-24 rounded-full bg-section-gray flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0e2a47] group-hover:text-white transition-colors duration-300">
                <member.icon size={40} className="text-[#0e2a47] group-hover:text-[#f27024]" />
              </div>
              <h3 className="text-xl font-bold text-[#0e2a47] mb-2 uppercase italic">{member.name}</h3>
              <p className="text-[#f27024] text-xs font-bold uppercase tracking-widest mb-6">{member.role}</p>
              <div className="w-8 h-0.5 bg-gray-100 mx-auto mb-6"></div>
              <p className="text-gray-500 text-sm italic">
                Professional expertise in legal and immigration processes.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-[#0e2a47] rounded-3xl text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#f27024]/10 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 uppercase italic">20 Years of Combined Experience</h3>
            <p className="text-white/70 max-w-2xl mx-auto text-sm leading-relaxed mb-8">
              Our team consists of specialists from across Lithuania and the EU to ensure your applications meet every single requirement.
            </p>
            <div className="flex justify-center gap-12 text-[#f27024]">
              <div className="text-center">
                <p className="text-3xl font-bold mb-1 italic">98%</p>
                <p className="text-[10px] text-white uppercase tracking-widest">Visa Success Rate</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold mb-1 italic">500+</p>
                <p className="text-[10px] text-white uppercase tracking-widest">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold mb-1 italic">15+</p>
                <p className="text-[10px] text-white uppercase tracking-widest">Destinations</p>
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

export default OurTeam;