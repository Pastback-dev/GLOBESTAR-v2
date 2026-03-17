import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { User, ShieldCheck, Award, Briefcase, Globe, CheckCircle2 } from 'lucide-react';

const PageHero = ({ title, breadcrumb }: { title: string; breadcrumb: string }) => (
  <div className="bg-[#0e2a47] py-16 md:py-24 text-white text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-tighter">{title}</h1>
      <p className="text-orange text-sm uppercase tracking-widest font-medium">{breadcrumb}</p>
    </div>
  </div>
);

const teamMembers = [
  { name: 'Director, GLOBESTAR', role: 'Management & Operations', icon: User },
  { name: 'Legal Consultant', role: 'Visa & Immigration Law', icon: ShieldCheck },
  { name: 'Senior Consultant', role: 'Business Immigration Expert', icon: Award },
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
          <p className="text-gray-600 leading-relaxed italic max-w-3xl mx-auto">
            GLOBESTAR is a reputable and well-established company specializing in providing and arranging invitations for individuals seeking to visit European countries and the UK. Our team is dedicated to professional excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-20">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all text-center group">
              <div className="w-24 h-24 rounded-full bg-section-gray flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0e2a47] group-hover:text-white transition-colors duration-300">
                <member.icon size={40} className="text-[#0e2a47] group-hover:text-[#f27024]" />
              </div>
              <h3 className="text-xl font-bold text-[#0e2a47] mb-2 uppercase italic">{member.name}</h3>
              <p className="text-[#f27024] text-xs font-bold uppercase tracking-widest mb-6">{member.role}</p>
              <div className="w-8 h-0.5 bg-gray-100 mx-auto mb-6"></div>
              <p className="text-gray-500 text-sm italic">
                Deep expertise in facilitating invitations for Lithuania, Albania, Belarus, and the UK.
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center bg-section-gray p-8 md:p-16 rounded-3xl mb-20">
          <div>
            <h3 className="text-2xl font-bold text-[#0e2a47] mb-6 uppercase italic">20 Years of Combined Experience</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-8 italic">
              Trust in our expertise to facilitate your journey and enhance your chances of a successful visa application.
            </p>
            <div className="space-y-4">
              {[
                'Reputable and well-established company',
                'Professionally crafted invitation letters',
                'Align with specific visa application requirements',
                'Dedicated support team'
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#f27024]" size={18} />
                  <span className="text-sm text-[#0e2a47] font-medium italic">{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <p className="text-4xl font-bold text-[#f27024] mb-2 italic">98%</p>
              <p className="text-[10px] text-[#0e2a47] font-bold uppercase tracking-widest">Visa Success Rate</p>
            </div>
            <div className="bg-[#0e2a47] p-8 rounded-2xl shadow-sm text-center text-white">
              <p className="text-4xl font-bold text-white mb-2 italic">500+</p>
              <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest">Happy Clients</p>
            </div>
            <div className="bg-[#0e2a47] p-8 rounded-2xl shadow-sm text-center text-white">
              <p className="text-4xl font-bold text-white mb-2 italic">15+</p>
              <p className="text-[10px] text-white/70 font-bold uppercase tracking-widest">Destinations</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <p className="text-4xl font-bold text-[#f27024] mb-2 italic">24/7</p>
              <p className="text-[10px] text-[#0e2a47] font-bold uppercase tracking-widest">Client Support</p>
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