import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { GraduationCap, CheckCircle2, BookOpen } from 'lucide-react';

const StudyingVisa = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />
    <section className="py-20 bg-section-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-orange rounded-lg flex items-center justify-center text-orange-foreground">
              <GraduationCap size={24} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-navy">Studying Visas & Permits</h1>
          </div>
          <div className="w-20 h-1 bg-orange mb-8" />
          
          <div className="bg-background p-8 rounded-xl shadow-sm border mb-12">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Achieve your academic dreams with our comprehensive study permit assistance. We help students secure visas for top educational destinations in Europe and beyond.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-navy mb-4 flex items-center gap-2">
                  <BookOpen size={18} className="text-orange" /> Study Destinations
                </h3>
                <ul className="space-y-3">
                  {['Ireland', 'United Kingdom', 'Germany'].map(c => (
                    <li key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 size={14} className="text-orange" /> {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-l pl-8">
                <h4 className="font-bold text-navy mb-2">Our Support Includes:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• University Admission Guidance</li>
                  <li>• Document Preparation</li>
                  <li>• Financial Proof Assistance</li>
                  <li>• Interview Preparation</li>
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

export default StudyingVisa;