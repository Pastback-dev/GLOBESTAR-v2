import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { User } from 'lucide-react';

const team = [
  { 
    name: 'MR. IrfanHussain', 
    role: 'CEO - Founder', 
    bio: 'Leading the vision of GLOBESTAR with over two decades of expertise in global mobility.' 
  },
  { 
    name: 'Mr. THOMAS ALAN', 
    role: 'Director & Marketing Manager', 
    bio: 'Driving international growth and strategic partnerships across global markets.' 
  },
  { 
    name: 'Mrs. Aldona', 
    role: 'Immigration Expert', 
    bio: 'Specializing in complex immigration cases and ensuring compliance with international regulations.' 
  },
  { 
    name: 'Mr. Jonas', 
    role: 'International Relations Officer', 
    bio: 'Managing relationships with global institutions and facilitating seamless travel experiences.' 
  },
];

const OurTeam = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />
    
    {/* Company Info Section */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-orange font-bold uppercase tracking-widest mb-2">Easy Inspire</p>
          <p className="text-navy font-semibold mb-8">Lithuania - Albania - Belarus</p>
          
          <div className="inline-block bg-section-gray px-4 py-1 rounded-full mb-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-bold">HOW WE HELP CLIENTS</p>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-navy mb-6 leading-tight">
            Our Best Experts Ready To Help
          </h1>
          
          <div className="w-16 h-1 bg-orange mx-auto mb-8" />
          
          <p className="text-muted-foreground leading-relaxed text-lg">
            Easy Inspire MB is an approved Lithuanian company from the <span className="text-navy font-semibold">VALSTYBĖS ĮMONIŲ REGISTRŲ CENTRAS</span> (State Enterprise Register), Lithuania. We push the boundaries of global mobility, powering positive outcomes in business and beyond. Our team partners closely with you, providing extensive expertise and seamless tech-enabled experiences—so you can contact our competent team and consultants to take the right direction for your future. Because we understand better your future.
          </p>
        </div>

        {/* Team Grid */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-navy mb-2">Meet Our Professionals</h2>
          <p className="text-muted-foreground text-sm">Dedicated experts committed to your success</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="bg-background p-8 rounded-lg shadow-sm border hover:shadow-md transition-shadow group">
              <div className="w-20 h-20 bg-navy/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange/10 transition-colors">
                <User size={40} className="text-navy group-hover:text-orange transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-1">{member.name}</h3>
              <p className="text-orange font-semibold text-[10px] mb-4 uppercase tracking-wider">{member.role}</p>
              <p className="text-muted-foreground text-xs leading-relaxed">{member.bio}</p>
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