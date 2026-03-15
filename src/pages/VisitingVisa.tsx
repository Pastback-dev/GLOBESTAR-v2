import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Plane, CheckCircle2, MapPin } from 'lucide-react';

const VisitingVisa = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />
    <section className="py-20 bg-section-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center text-orange-foreground">
              <Plane size={24} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-navy">Visiting & Tourist Visas</h1>
          </div>
          <div className="w-20 h-1 bg-orange mb-8" />
          
          <div className="bg-background p-8 rounded-xl shadow-sm border mb-12">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Planning a short trip or visiting family? We assist in obtaining visit visas and E-visas for multiple destinations worldwide with high success rates.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                  <MapPin size={18} className="text-orange" /> Popular Destinations
                </h3>
                <ul className="space-y-3">
                  {['Albania', 'Moldova', 'Georgia', 'Hong Kong', 'Turkey'].map(c => (
                    <li key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={14} className="text-orange" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-navy/5 p-6 rounded-lg">
                <h4 className="font-bold text-navy mb-2">E-Visa Services</h4>
                <p className="text-sm text-muted-foreground">
                  Fast-track your application with our digital visa processing for eligible countries. Get your travel authorization quickly and securely.
                </p>
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

export default VisitingVisa;