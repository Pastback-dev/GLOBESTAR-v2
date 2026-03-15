import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Briefcase, CheckCircle2, Globe } from 'lucide-react';

const WorkingVisa = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />
    <section className="py-20 bg-section-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center text-orange-foreground">
              <Briefcase size={24} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-navy">Working Visa & Permits</h1>
          </div>
          <div className="w-20 h-1 bg-orange mb-8" />
          
          <div className="bg-background p-8 rounded-xl shadow-sm border mb-12">
            <p className="text-muted-foreground leading-relaxed mb-6">
              We facilitate the acquisition of work permits for various Schengen countries and non-Schengen regions. Our professional team handles the entire process from documentation to approval.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                  <Globe size={18} className="text-orange" /> Schengen Countries
                </h3>
                <ul className="space-y-3">
                  {['Czech Republic', 'Poland', 'Lithuania', 'Croatia', 'Italy', 'Hungary', 'Slovakia', 'Bulgaria'].map(c => (
                    <li key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={14} className="text-orange" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                  <Globe size={18} className="text-orange" /> Non-Schengen & Others
                </h3>
                <ul className="space-y-3">
                  {['United Kingdom', 'Albania', 'Belarus', 'Serbia'].map(c => (
                    <li key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={14} className="text-orange" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FooterSection />
    <WhatsAppButton />
  </div>
);

export default WorkingVisa;