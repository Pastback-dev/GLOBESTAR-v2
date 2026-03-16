import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Search, Phone, Mail, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const PageHero = ({ title, breadcrumb }: { title: string; breadcrumb: string }) => (
  <div className="bg-[#0e2a47] py-16 md:py-24 text-white text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase">{title}</h1>
      <p className="text-orange text-sm uppercase tracking-widest">{breadcrumb}</p>
    </div>
  </div>
);

const ServiceCard = ({ country, businessPrice, options, note }: any) => (
  <div className="bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <div className="p-6 border-b border-gray-100">
      <h3 className="text-xl font-bold text-[#0e2a47] mb-1">{country}</h3>
      <p className="text-xs text-[#f27024] font-bold uppercase tracking-widest">Visa Invitation Letters</p>
    </div>
    <div className="bg-gray-50 flex items-center justify-between px-6 py-4">
      <div className="flex flex-col">
        <span className="text-3xl font-bold text-[#0e2a47]">€</span>
        <span className="text-4xl font-extrabold text-[#0e2a47] leading-none">{businessPrice}</span>
      </div>
      <div className="text-right">
        <span className="block text-xs font-bold text-gray-400 uppercase">Business Invitation</span>
      </div>
    </div>
    <div className="p-6 space-y-3 mb-4">
      {options.map((opt: string, idx: number) => (
        <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
          <CheckCircle2 size={14} className="text-[#f27024] shrink-0 mt-0.5" />
          <span>{opt}</span>
        </div>
      ))}
    </div>
    <div className="px-6 pb-6">
      <Link
        to="/apply-invitation"
        className="block w-full text-center bg-[#0e2a47] text-white py-3 rounded font-bold uppercase tracking-widest text-xs hover:bg-navy-800 transition-colors"
      >
        Apply Now
      </Link>
      {note && (
        <p className="text-[10px] text-gray-400 mt-4 italic leading-tight">
          Note: {note}
        </p>
      )}
    </div>
  </div>
);

const Sidebar = () => (
  <div className="space-y-12">
    <div>
      <h3 className="text-lg font-bold text-[#0e2a47] mb-6 flex items-center gap-2">
        <span className="w-1 h-6 bg-[#f27024]"></span>
        Search
      </h3>
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border-b-2 border-gray-100 py-2 pr-10 focus:border-[#f27024] outline-none transition-colors"
        />
        <Search className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
      </div>
    </div>

    <div>
      <h3 className="text-lg font-bold text-[#0e2a47] mb-6 flex items-center gap-2">
        <span className="w-1 h-6 bg-[#f27024]"></span>
        Our Top Services
      </h3>
      <ul className="space-y-4">
        {[
          { name: 'Working Visas', to: '/working-visa' },
          { name: 'Visiting Visas', to: '/visiting-visa' },
          { name: 'Studying Visas', to: '/studying-visa' },
          { name: 'Visit Visa Invitation', to: '/details-and-costs' },
          { name: 'Family Visa Invitation', to: '/details-and-costs' },
          { name: 'Business Visa Invitation', to: '/details-and-costs' },
          { name: 'Apply Invitation Letter', to: '/apply-invitation' },
          { name: 'Company Registration', to: '/company-registration' },
          { name: 'Business Immigration', to: '/business-immigration' },
          { name: 'Bank Accounts', to: '/bank-account' }
        ].map((s, i) => (
          <li key={i}>
            <Link to={s.to} className="text-sm text-gray-600 hover:text-[#f27024] transition-colors flex items-center justify-between group">
              <span>{s.name}</span>
              <span className="text-gray-300 group-hover:text-[#f27024]">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>

    <div className="bg-[#0e2a47] p-8 rounded-xl text-white">
      <h3 className="text-xl font-bold mb-8">Any Questions?</h3>
      <div className="space-y-8">
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
            <Phone size={18} className="text-[#f27024]" />
          </div>
          <div>
            <p className="text-[10px] text-white/50 uppercase tracking-widest mb-1">Call / WhatsApp</p>
            <p className="font-bold text-sm">+34 624 13 21 71</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
            <Phone size={18} className="text-[#f27024]" />
          </div>
          <div>
            <p className="text-[10px] text-white/50 uppercase tracking-widest mb-1">UK WhatsApp Only</p>
            <p className="font-bold text-sm">+44 7492 219937</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
            <Mail size={18} className="text-[#f27024]" />
          </div>
          <div>
            <p className="text-[10px] text-white/50 uppercase tracking-widest mb-1">Email Us</p>
            <p className="font-bold text-sm break-all">info@globestar.eu</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DetailsAndCosts = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const countries = [
    { country: 'Lithuania', businessPrice: '400', options: ['Visit Invitation: € 300', 'Business Invitation: € 400', 'Family Invitation: € 250 Per Person'], note: 'The Letter of Mediation approved by Migration costs € 750.' },
    { country: 'Estonia', businessPrice: '500', options: ['Tourist Invitation: 300 €', 'Business Invitation: 500 €', 'Family Invitation: 250 € Per Person'], note: 'The cost of the Family Invitation letter is per person.' },
    { country: 'Albania', businessPrice: '400', options: ['Tourist Invitation: € 300', 'Business Invitation: € 400', 'Family Invitation: € 250 Per Person'], note: 'The cost of the Family Invitation letter is per person.' },
    { country: 'Belarus', businessPrice: '400', options: ['Visit Invitation: € 300', 'Business Invitation: € 400', 'Family Invitation: € 250 Per Person'], note: 'The cost of the Family Invitation letter is per person.' },
    { country: 'United Kingdom', businessPrice: '450', options: ['Visit Invitation: € 300', 'Business Invitation: € 450', 'Family Invitation: € 250 Per Person'], note: 'The cost of the Family Invitation letter is per person.' },
    { country: 'Russia', businessPrice: '450', options: ['Tourist Invitation: € 450', 'Business Invitation: N/A', 'Family Invitation: € 400 Per Person'], note: 'The cost of the Family Invitation letter is per person.' },
    { country: 'Serbia', businessPrice: '300', options: ['Tourist Invitation: € 300', 'Business Invitation: N/A', 'Family Invitation: € 250 Per Person'], note: 'The cost of the Family Invitation letter is per person.' },
    { country: 'Kosovo', businessPrice: '300', options: ['Tourist Invitation: 300 €', 'Business Invitation: N/A', 'Family Invitation: 250 € Per Person'], note: 'The cost of the Family Invitation letter is per person.' },
    { country: 'Cyprus', businessPrice: '300', options: ['Tourist Invitation: 300 €', 'Business Invitation: 450 €', 'Family Invitation: 250 € Per Person'], note: 'The cost of the Family Invitation letter is per person.' },
    { country: 'Spain', businessPrice: '750', options: ['Tourist Invitation: € 300', 'Police Approved Invitation: € 750', 'Family Invitation: € 250 Per Person'], note: 'The b. invitation letter is approved by the police/magistrate' },
    { country: 'Sweden', businessPrice: '450', options: ['Tourist Invitation: € 300', 'Business Invitation: € 450', 'Family Invitation: € 250 Per Person'], note: 'The family invitation letter will be of tourist type.' },
    { country: 'Hungary', businessPrice: '450', options: ['Tourist Invitation: € 300', 'Business Invitation: € 450', 'Family Invitation: € 250 Per Person'], note: 'The family invitation letter will be of tourist type.' },
    { country: 'Luxembourg', businessPrice: '450', options: ['Tourist Invitation: € 300', 'Buiness Invitation: € 450', 'Family Invitation: € 250 Per Person'], note: 'The family invitation letter will be of tourist type.' },
    { country: 'Netherlands', businessPrice: '450', options: ['Tourist Invitation: € 300', 'Business Invitation: € 450', 'Family Invitation: € 250 Per Person'], note: 'The family invitation letter will be of tourist type.' },
    { country: 'Germany', businessPrice: '500', options: ['Tourist Invitation: € 300', 'Business Invitation: € 450', 'Family Invitation: € 250 Per Person'], note: 'The family invitation letter will be of tourist type.' },
    { country: 'Czeck Republic', businessPrice: '450', options: ['Tourist Invitation: € 300', 'Buiness Invitation: € 450', 'Family Invitation: € 250 Per Person'], note: 'The family invitation letter will be of tourist type.' },
    { country: 'Denmark', businessPrice: '500', options: ['Tourist Invitation: € 300', 'Business Invitation: € 500', 'Family Invitation: € 250 Per Person'], note: 'The family invitation letter will be of tourist type.' },
    { country: 'Finland', businessPrice: '450', options: ['Tourist Invitation: € 300', 'Business Invitation: € 450', 'Family Invitation: € 250 Per Person'], note: 'The family invitation letter will be of tourist type.' },
    { country: 'France', businessPrice: '500', options: ['Tourist Invitation: € 300', 'Buiness Invitation: € 500', 'Family Invitation: € 250 Per Person'], note: 'The family invitation letter will be of tourist type.' },
    { country: 'Iceland', businessPrice: '450', options: ['Tourist Invitation: € 300', 'Business Invitation: € 450', 'Family Invitation: € 250 Per Person'], note: 'The family invitation letter will be of tourist type.' },
    { country: 'Norway', businessPrice: '400', options: ['Tourist Invitation: € 300', 'Business Invitation: € 400', 'Family Invitation: € 250 Per Person'], note: 'The family invitation letter will be of tourist type.' },
    { country: 'Poland', businessPrice: '450', options: ['Tourist Invitation: € 300', 'Buiness Invitation: € 450', 'Family Invitation: € 250 Per Person'], note: 'The family invitation letter will be of tourist type.' },
    { country: 'Portugal', businessPrice: '500', options: ['Tourist Invitation: € 300', 'Business Invitation: € 500', 'Family Invitation: € 250 Per Person'], note: 'The family invitation letter will be of tourist type.' },
    { country: 'Ireland', businessPrice: '450', options: ['Tourist Invitation: € 300', 'Business Invitation: € 450', 'Family Invitation: € 250 Per Person'], note: 'The family invitation letter will be of tourist type.' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <PageHero title="Details & Costs" breadcrumb="Home / Invitations / Details & Costs" />

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="lg:w-3/4 order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-[#0e2a47] mb-6">Invitation Letter</h2>
            <div className="prose prose-sm max-w-none text-gray-600 space-y-4 mb-12">
              <p>
                A visa invitation letter is a document provided to individuals applying for tourist, visit, business, or family visitor visas. It serves as a formal invitation from a host or sponsoring party in the destination country. While the invitation letter itself does not guarantee the issuance of a visa, it plays a crucial role in the visa application process by providing essential information about the purpose of the visit, the duration of stay, and the relationship between the applicant and the host.
              </p>
              <p>
                Visa officers consider the invitation letter as a supporting document to assess the genuineness of the visit and the applicant’s intention to return to their home country. Although not a guarantee of visa approval, having an invitation letter can significantly increase the chances of obtaining a visa.
              </p>
              <p>
                In the context of visiting Lithuania, Albania, Belarus, the UK, Russia, Ukraine, Spain, Sweden, and Hungary, securing a proper invitation letter is essential. GLOBESTAR is a reputable and well-established company specializing in providing and arranging invitations for individuals seeking to visit these countries.
              </p>
              <p>
                For those planning a visit to Lithuania, a "Lithuania visitor invitation letter" from GLOBESTAR can help communicate the purpose of the visit, the duration of stay, and the relationship between the visitor and the host in Lithuania.
              </p>
            </div>

            <div className="mb-16">
              <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                <h3 className="text-2xl font-bold text-[#0e2a47]">Apply for an Invitation Letter</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {countries.map((c, i) => (
                  <ServiceCard key={i} {...c} />
                ))}
              </div>
            </div>

            <div className="bg-section-gray p-8 rounded-2xl mb-16">
              <h3 className="text-2xl font-bold text-[#0e2a47] mb-6">Types of Invitation Letter</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                GLOBESTAR is a Lithuanian company with multiple offices in Lithuania, Albania, Belarus, Canada, the USA, the UK. It offers the following types of invitation letters:
              </p>
              <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                {[
                  '1. Visit Visa Invitation Letters',
                  '2. Family Visa Invitation Letters',
                  '3. Business Visa Invitation Letters',
                  '4. Tourist Visa Invitation Letters',
                  '5. Private Invitation Letters',
                  '6. Group Invitation Letters'
                ].map((item, i) => (
                  <li key={i} className="text-sm text-gray-700 font-medium">{item}</li>
                ))}
              </ul>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-[#0e2a47] mb-6">Payment Terms</h3>
              <div className="bg-white border rounded-xl p-8 text-sm text-gray-600 leading-relaxed space-y-4 shadow-sm">
                <p>
                  We only accept documents with 100% advanced payment. Payment can be made through bank accounts and Visa/MasterCard credit cards. To view the bank account details, please visit the Services page and click on the Bank Account section. The payment slip will be attached to the Invitation Form.
                </p>
                <p className="font-bold text-[#f27024]">
                  Please note that all payments are non-refundable. Once payment is confirmed, we will issue the invitation letter within 3 business days.
                </p>
                <p>
                  The invitation letter will be sent to your email address. If you require a hard copy, an additional charge will apply. The specific charge depends on your country and may amount to $65.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-[#0e2a47] mb-8 text-center">How to get an Invasion Letter?</h3>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                {[
                  { step: 'Step 1', title: 'Fill In The\nInvitation Form', text: 'Please ensure that you fill out the online invitation form with the correct spellings according to the information in your passport' },
                  { step: 'Step 2', title: 'Attach Passport\n& Proceed Payment', text: "After filling out the form, please attach a scanned copy of your passport, then click the 'Submit' button and proceed with the payment." },
                  { step: 'Step 3', title: 'Get Ready To\nReceive your Invitation', text: 'After receiving your application, passport copy, and payment confirmation, we will send your invitation letter to your email within 3 business days.' },
                ].map((s, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="inline-block px-4 py-1 bg-orange/10 text-orange rounded text-[10px] font-bold uppercase tracking-widest">{s.step}</div>
                    <h4 className="font-bold text-[#0e2a47] leading-tight whitespace-pre-line">{s.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-[#0e2a47] mb-8">Frequently asked Questions</h3>
              <div className="space-y-4">
                {[
                  { q: "How long does it take for a visa invitation letter to be processed?", a: "Normally, we process visa invitation letters within three business days and send them via email. However, shipping may take approximately 3 to 10 days, depending on the destination country." },
                  { q: "Do you also process visa applications for applicants?", a: "We provide visa support documentation (invitations) but the final application must be submitted by the applicant at the embassy or visa center." },
                  { q: "How can we verify the authenticity and legality of the invitation?", a: "All our invitations are issued by legally registered companies and can be verified through the respective government migration portals where applicable." }
                ].map((item, idx) => (
                  <div key={idx} className="border rounded-lg overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-4 text-left font-bold text-[#0e2a47] bg-white hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-sm">{item.q}</span>
                      {openFaq === idx ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {openFaq === idx && (
                      <div className="p-4 bg-gray-50 text-sm text-gray-600 border-t">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4 order-1 lg:order-2">
            <Sidebar />
          </div>
        </div>
      </div>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default DetailsAndCosts;