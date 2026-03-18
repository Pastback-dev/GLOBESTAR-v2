import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CheckCircle2, Clock, Euro } from 'lucide-react';
import { Link } from 'react-router-dom';

const PageHero = ({ title, breadcrumb }: { title: string; breadcrumb: string }) => (
  <div className="bg-[#0e2a47] py-16 md:py-24 text-white text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
      <p className="text-orange text-sm uppercase tracking-widest">{breadcrumb}</p>
    </div>
  </div>
);

const VisaCard = ({ country, price, prepayment, readyPay, duration, job, salary, facility, time }: any) => (
  <div className="bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <div className="bg-[#0e2a47] p-6 text-white flex justify-between items-start">
      <div>
        <h3 className="text-xl font-bold">{country}</h3>
        <div className="flex items-center gap-2 mt-1 text-white/70 text-sm">
          <Clock size={14} />
          <span>{duration}</span>
        </div>
      </div>
      <div className="text-right">
        <div className="text-2xl font-bold text-[#f27024]">€{price}</div>
        <div className="text-xs text-white/70">Prepayment: €{prepayment}</div>
      </div>
    </div>
    <div className="p-6">
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm py-2 border-b border-gray-100 italic">
          <span className="text-gray-500">When docs are ready:</span>
          <span className="font-semibold text-[#0e2a47] uppercase">€{readyPay}</span>
        </div>
        <div className="flex justify-between text-sm py-2 border-b border-gray-100 italic">
          <span className="text-gray-500">Job:</span>
          <span className="font-semibold text-[#0e2a47] uppercase">{job}</span>
        </div>
        <div className="flex justify-between text-sm py-2 border-b border-gray-100 italic">
          <span className="text-gray-500">Salary:</span>
          <span className="font-semibold text-[#0e2a47] uppercase">{salary}</span>
        </div>
        <div className="flex justify-between text-sm py-2 border-b border-gray-100 italic">
          <span className="text-gray-500">Facilities:</span>
          <span className="font-semibold text-[#0e2a47] uppercase">{facility}</span>
        </div>
        <div className="flex justify-between text-sm py-2 border-b border-gray-100 italic">
          <span className="text-gray-500">Processing time:</span>
          <span className="font-semibold text-[#0e2a47] uppercase">{time}</span>
        </div>
      </div>
      <Link 
        to="/contact" 
        className="block w-full text-center bg-[#f27024] text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
      >
        Apply Now
      </Link>
    </div>
  </div>
);

const WorkingVisa = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <PageHero title="Working Visas & Permits" breadcrumb="Home / Visas / Working Visas" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-[#f27024] text-sm font-bold uppercase tracking-widest mb-3">WORK PERMITS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e2a47] mb-6">Working Visas by Country</h2>
          <div className="w-16 h-1 bg-[#f27024] mx-auto mb-8"></div>
          <p className="text-gray-600 leading-relaxed">
            We facilitate the acquisition of work permits for various Schengen countries and non-Schengen regions. 
            Our professional team handles the entire process from documentation to approval. 
            Prices include government fees, processing, and our service fee.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <VisaCard 
            country="Czech Republic" price="1750 ($1925 / 19250 MAD)" prepayment="800 ($880 / 8800 MAD)" readyPay="950 ($1045 / 10450 MAD)" 
            duration="3 Month work permit" job="Warehouse worker" salary="850 € ($935 / 9350 MAD)" 
            facility="Accommodation" time="45 days"
          />
          <VisaCard 
            country="Poland" price="1750 ($1925 / 19250 MAD)" prepayment="800 ($880 / 8800 MAD)" readyPay="950 ($1045 / 10450 MAD)" 
            duration="12 Month work permit" job="Fitter worker" salary="1050 € ($1155 / 11550 MAD)" 
            facility="Accommodation" time="60 days"
          />
          <VisaCard 
            country="Lithuania" price="1750 ($1925 / 19250 MAD)" prepayment="800 ($880 / 8800 MAD)" readyPay="950 ($1045 / 10450 MAD)" 
            duration="One Year" job="Electricians, Plumber, Fitter, Con." salary="15 € Per Hour" 
            facility="Transport & Medical" time="40 days"
          />
          <VisaCard 
            country="Malta" price="2450 ($2695 / 26950 MAD)" prepayment="1300 ($1430 / 14300 MAD)" readyPay="1150 ($1265 / 12650 MAD)" 
            duration="One Year" job="Factory worker" salary="1100 € ($1210 / 12100 MAD)" 
            facility="Accommodation" time="65 days"
          />
          <VisaCard 
            country="Romania" price="2350 ($2585 / 25850 MAD)" prepayment="1100 ($1210 / 12100 MAD)" readyPay="1250 ($1375 / 13750 MAD)" 
            duration="One Year" job="Fitter worker" salary="1050 € ($1155 / 11550 MAD)" 
            facility="Accommodation" time="90 days"
          />
          <VisaCard 
            country="Estonia" price="2250 ($2475 / 24750 MAD)" prepayment="1000 ($1100 / 11000 MAD)" readyPay="1250 ($1375 / 13750 MAD)" 
            duration="One Year" job="General workers" salary="1250 € ($1375 / 13750 MAD)" 
            facility="Transport & Medical" time="60 days"
          />
          <VisaCard 
            country="United Kingdom" price="2400 ($2640 / 26400 MAD)" prepayment="1015 ($1117 / 11165 MAD)" readyPay="1385 ($1524 / 15235 MAD)" 
            duration="12 Month work permit" job="Pickers, Warehouse workers" salary="11 £ Hourly" 
            facility="Accommodation" time="60 days"
          />
          <VisaCard 
            country="Spain" price="3450 ($3795 / 37950 MAD)" prepayment="1450 ($1595 / 15950 MAD)" readyPay="2000 ($2200 / 22000 MAD)" 
            duration="12 Month work permit" job="Saleman, Supervisor & Marketing" salary="1650€ - 2050€ ($1815-2255 / 18150-22550 MAD)" 
            facility="Accommodation" time="60 days"
          />
          <VisaCard 
            country="Italy" price="1850 ($2035 / 20350 MAD)" prepayment="900 ($990 / 9900 MAD)" readyPay="950 ($1045 / 10450 MAD)" 
            duration="One Year" job="General Farm, Warehouse" salary="1150 € ($1265 / 12650 MAD)" 
            facility="Transport & Medical" time="60 days"
          />
          <VisaCard 
            country="Hungary" price="1850 ($2035 / 20350 MAD)" prepayment="800 ($880 / 8800 MAD)" readyPay="1050 ($1155 / 11550 MAD)" 
            duration="12 Month work permit" job="Factory Workers" salary="12 € Per Hour" 
            facility="Accommodation" time="35 days"
          />
          <VisaCard 
            country="Slovakia" price="2050 ($2255 / 22550 MAD)" prepayment="1010 ($1111 / 11110 MAD)" readyPay="1040 ($1144 / 11440 MAD)" 
            duration="12 Month work permit" job="General workers" salary="800 $" 
            facility="Assist: To get Accommodation" time="50 days"
          />
          <VisaCard 
            country="Bulgaria" price="2150 ($2365 / 23650 MAD)" prepayment="1000 ($1100 / 11000 MAD)" readyPay="1150 ($1265 / 12650 MAD)" 
            duration="12 Month work permit" job="Worker in GH/Cleaner/Driver/Builder" salary="600-650 € ($660-715 / 6600-7150 MAD)" 
            facility="Free Accommodation & Transport" time="50 days"
          />
          <VisaCard 
            country="Albania" price="1750 ($1925 / 19250 MAD)" prepayment="800 ($880 / 8800 MAD)" readyPay="950 ($1045 / 10450 MAD)" 
            duration="12 Months" job="Warehouse" salary="117600 ALL" 
            facility="Medical: Including" time="2 Weeks"
          />
          <VisaCard 
            country="Belarus" price="3550 ($3905 / 39050 MAD)" prepayment="1550 ($1705 / 17050 MAD)" readyPay="2000 ($2200 / 22000 MAD)" 
            duration="Open Work Permit" job="General Worker" salary="1050 € ($1155 / 11550 MAD)" 
            facility="Accommodation" time="16 Weeks"
          />
          <VisaCard 
            country="Serbia" price="1750 ($1925 / 19250 MAD)" prepayment="800 ($880 / 8800 MAD)" readyPay="950 ($1045 / 10450 MAD)" 
            duration="6 Month work permit" job="Factory Worker" salary="800 € ($880 / 8800 MAD)" 
            facility="Medical: Included" time="2 Weeks"
          />
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-white p-8 rounded-xl shadow-sm border">
            <h3 className="text-2xl font-bold text-[#0e2a47] mb-6">How To Get a Work Visa?</h3>
            <div className="space-y-6">
              {[
                { title: 'Find a job/ Work Permit', text: 'Before applying for your work permit, you have to find a job in a foreign country. You must provide evidence of a work contract when you submit your visa application. Here we will provide your work permit to our clients.' },
                { title: 'Make an appointment at the embassy', text: 'Find a representative office that issues work visas for your destination country. You have to make an appointment to attend your visa interview.' },
                { title: 'Prepare your documents', text: 'You need to have your documents prepared by translating them and verifying them as required.' },
                { title: 'Submit your application', text: 'In some cases, your employer applies for the work permit on your behalf (only in Evisa countries), but there are instances where you may have to submit your application on your own.' },
                { title: 'Attend the visa interview', text: 'Once the date of your appointment comes, you have to go to the embassy/consulate and finish your visa interview. Some visa offices may ask you to submit the visa payment the same day as your interview— make sure you check with the visa office.' },
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#f27024] text-white flex items-center justify-center shrink-0 font-bold">{idx + 1}</div>
                  <div>
                    <h4 className="font-bold text-[#0e2a47] mb-1">{step.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0e2a47] p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-6">Document Requirements</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                'Passport Scanned all pages.',
                'ID/Residence card scanned copy.',
                'Digital picture with white background.',
                'Resume with your job experience.',
                'Police Clearance Certificate for some countries.',
              ].map((req, idx) => (
                <li key={idx} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="text-[#f27024]" size={18} />
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

export default WorkingVisa;