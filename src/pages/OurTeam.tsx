import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { User } from 'lucide-react';

const team = [
  { name: 'John Doe', role: 'CEO & Founder', bio: '20+ years of experience in global travel consultancy.' },
  { name: 'Jane Smith', role: 'Senior Visa Consultant', bio: 'Expert in European work permits and study visas.' },
  { name: 'Michael Brown', role: 'Operations Manager', bio: 'Ensuring smooth processes for all our clients.' },
];

const OurTeam = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />
    <section className="py-20 bg-section-gray">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-navy mb-4">Our Professional Team</h1>
        <div className="w-12 h-1 bg-orange mx-auto mb-12" />
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-background p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
              <div className="w-20 h-20 bg-navy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User size={40} className="text-navy" />
              </div>
              <h3 className="text-xl font-bold text-navy mb-1">{member.name}</h3>
              <p className="text-orange font-semibold text-sm mb-4 uppercase tracking-wider">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <FooterSection />
    <WhatsAppButton />
  </div>
);

export default OurTeam;