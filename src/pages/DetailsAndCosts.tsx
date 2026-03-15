import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Search, Phone, Mail, CheckCircle2, ArrowRight, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const pricingData = [
  { country: "Lithuania", mainPrice: "400", types: ["Visit Invitation: €300", "Business Invitation: €400", "Family Invitation: €250 Per Person"], note: "The Letter of Mediation approved by Migration costs €750." },
  { country: "Estonia", mainPrice: "500", types: ["Tourist Invitation: €300", "Business Invitation: €500", "Family Invitation: €250 Per Person"], note: "The cost of the Family Invitation letter is per person." },
  { country: "Albania", mainPrice: "400", types: ["Tourist Invitation: €300", "Business Invitation: €400", "Family Invitation: €250 Per Person"], note: "The cost of the Family Invitation letter is per person." },
  { country: "Belarus", mainPrice: "400", types: ["Visit Invitation: €300", "Business Invitation: €400", "Family Invitation: €250 Per Person"], note: "The cost of the Family Invitation letter is per person." },
  { country: "United Kingdom", mainPrice: "450", types: ["Visit Invitation: €300", "Business Invitation: €450", "Family Invitation: €250 Per Person"], note: "The cost of the Family Invitation letter is per person." },
  { country: "Russia", mainPrice: "450", types: ["Tourist Invitation: €450", "Business Invitation: N/A", "Family Invitation: €400 Per Person"], note: "The cost of the Family Invitation letter is per person." },
  { country: "Serbia", mainPrice: "300", types: ["Tourist Invitation: €300", "Business Invitation: N/A", "Family Invitation: €250 Per Person"], note: "The cost of the Family Invitation letter is per person." },
  { country: "Kosovo", mainPrice: "300", types: ["Tourist Invitation: €300", "Business Invitation: N/A", "Family Invitation: €250 Per Person"], note: "The cost of the Family Invitation letter is per person." },
  { country: "Cyprus", mainPrice: "300", types: ["Tourist Invitation: €300", "Business Invitation: €450", "Family Invitation: €250 Per Person"], note: "The cost of the Family Invitation letter is per person." },
  { country: "Spain", mainPrice: "750", types: ["Tourist Invitation: €300", "Police Approved Invitation: €750", "Family Invitation: €250 Per Person"], note: "The b. invitation letter is approved by the police/magistrate" },
  { country: "Sweden", mainPrice: "450", types: ["Tourist Invitation: €300", "Business Invitation: €450", "Family Invitation: €250 Per Person"], note: "The family invitation letter will be of tourist type." },
  { country: "Hungary", mainPrice: "450", types: ["Tourist Invitation: €300", "Business Invitation: €450", "Family Invitation: €250 Per Person"], note: "The family invitation letter will be of tourist type." },
  { country: "Luxembourg", mainPrice: "450", types: ["Tourist Invitation: €300", "Business Invitation: €450", "Family Invitation: €250 Per Person"], note: "The family invitation letter will be of tourist type." },
  { country: "Netherlands", mainPrice: "450", types: ["Tourist Invitation: €300", "Business Invitation: €450", "Family Invitation: €250 Per Person"], note: "The family invitation letter will be of tourist type." },
  { country: "Germany", mainPrice: "500", types: ["Tourist Invitation: €300", "Business Invitation: €450", "Family Invitation: €250 Per Person"], note: "The family invitation letter will be of tourist type." },
  { country: "Czech Republic", mainPrice: "450", types: ["Tourist Invitation: €300", "Business Invitation: €450", "Family Invitation: €250 Per Person"], note: "The family invitation letter will be of tourist type." },
  { country: "Denmark", mainPrice: "500", types: ["Tourist Invitation: €300", "Business Invitation: €500", "Family Invitation: €250 Per Person"], note: "The family invitation letter will be of tourist type." },
  { country: "Finland", mainPrice: "450", types: ["Tourist Invitation: €300", "Business Invitation: €450", "Family Invitation: €250 Per Person"], note: "The family invitation letter will be of tourist type." },
  { country: "France", mainPrice: "500", types: ["Tourist Invitation: €300", "Business Invitation: €500", "Family Invitation: €250 Per Person"], note: "The family invitation letter will be of tourist type." },
  { country: "Iceland", mainPrice: "450", types: ["Tourist Invitation: €300", "Business Invitation: €450", "Family Invitation: €250 Per Person"], note: "The family invitation letter will be of tourist type." },
  { country: "Norway", mainPrice: "400", types: ["Tourist Invitation: €300", "Business Invitation: €400", "Family Invitation: €250 Per Person"], note: "The family invitation letter will be of tourist type." },
  { country: "Poland", mainPrice: "450", types: ["Tourist Invitation: €300", "Business Invitation: €450", "Family Invitation: €250 Per Person"], note: "The family invitation letter will be of tourist type." },
  { country: "Portugal", mainPrice: "500", types: ["Tourist Invitation: €300", "Business Invitation: €500", "Family Invitation: €250 Per Person"], note: "The family invitation letter will be of tourist type." },
  { country: "Ireland", mainPrice: "450", types: ["Tourist Invitation: €300", "Business Invitation: €450", "Family Invitation: €250 Per Person"], note: "The family invitation letter will be of tourist type." },
];

const tags = [
  "Visa Invitation Letters", "Tourist Visa Invitation Letter", "Business Visa Invitation Letter", "Family Visa Invitation Letter", 
  "Visit Visa Invitation Letter", "Private Invitation Letter", "Group Invitation Letter", "Schengen Visa Invitation Letter", 
  "Europe Visa Invitation Letter", "UK Visa Invitation Letter", "Visa Support Letters", "Visa Sponsorship Letters", 
  "Visa Invitation Documents", "Letter of Mediation for Visa", "Apply Invitation Letter Online", "Professional Visa Invitation Services", 
  "Visa Application Support", "Visa Processing Help", "Travel Visa Help", "Work Visa Assistance", "Study Visa Assistance", 
  "Visa Support Services", "Visa Sponsorship Documents", "Europe Visa Help", "Easy Inspire MB", "Visa Invitation Company", 
  "Professional Invitation Letter Services", "Business Immigration Services Europe", "Company Registration in Europe", 
  "Bank Account Assistance Europe", "Visa Support Europe", "Lithuania Invitation Letter", "Lithuania Visa Invitation", 
  "Albania Invitation Letter", "Albania Visa Invitation", "Belarus Invitation Letter", "Belarus Visa Invitation", 
  "UK Invitation Letter", "United Kingdom Visa Invitation", "Russia Invitation Letter", "Russia Visa Invitation", 
  "Ukraine Invitation Letter", "Ukraine Visa Invitation", "Spain Invitation Letter", "Spain Visa Invitation", 
  "Sweden Invitation Letter", "Sweden Visa Invitation", "Hungary Invitation Letter", "Hungary Visa Invitation", 
  "Luxembourg Invitation Letter", "Netherlands Invitation Letter", "Germany Invitation Letter", "Czech Republic Invitation Letter", 
  "Denmark Invitation Letter", "Finland Invitation Letter", "France Invitation Letter", "Iceland Invitation Letter", 
  "Norway Invitation Letter", "Poland Invitation Letter", "Portugal Invitation Letter", "Ireland Invitation Letter", 
  "Serbia Invitation Letter", "Moldova Invitation Letter", "Kosovo Invitation Letter"
];

const DetailsAndCosts = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />
    
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">Invitation Letter</h1>
            <div className="w-20 h-1 bg-orange mb-8" />
            
            <div className="space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>
                A visa invitation letter is a document provided to individuals applying for tourist, visit, business, or family visitor visas. It serves as a formal invitation from a host or sponsoring party in the destination country. While the invitation letter itself does not guarantee the issuance of a visa, it plays a crucial role in the visa application process by providing essential information about the purpose of the visit, the duration of stay, and the relationship between the applicant and the host.
              </p>
              <p>
                Visa officers consider the invitation letter as a supporting document to assess the genuineness of the visit and the applicant’s intention to return to their home country. Although not a guarantee of visa approval, having an invitation letter can significantly increase the chances of obtaining a visa.
              </p>
              <p>
                In the context of visiting Lithuania, Albania, Belarus, the UK, Russia, Ukraine, Spain, Sweden, and Hungary, securing a proper invitation letter is essential. Easy Inspire MB. is a reputable and well-established company specializing in providing and arranging invitations for individuals seeking to visit these countries.
              </p>
            </div>

            {/* Pricing Grid */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-navy mb-8 text-center">Apply for an Invitation Letter</h2>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {pricingData.map((item, idx) => (
                  <div key={idx} className="bg-background border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                    <div className="bg-navy p-4 text-center">
                      <h3 className="text-orange-foreground font-bold text-lg">{item.country}</h3>
                      <p className="text-orange-foreground/70 text-[10px] uppercase tracking-widest">Visa Invitation Letters</p>
                    </div>
                    <div className="p-6 flex-grow">
                      <div className="text-center mb-6">
                        <span className="text-navy font-bold text-4xl">€{item.mainPrice}</span>
                        <p className="text-muted-foreground text-xs mt-1">Business Invitation</p>
                      </div>
                      <ul className="space-y-3 mb-6">
                        {item.types.map((type, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 size={14} className="text-orange shrink-0 mt-0.5" />
                            <span>{type}</span>
                          </li>
                        ))}
                      </ul>
                      <Link to="/apply-invitation" className="block w-full bg-orange text-orange-foreground text-center py-2.5 rounded font-bold text-sm hover:bg-orange-hover transition-colors">
                        Apply Now
                      </Link>
                    </div>
                    <div className="bg-section-gray p-3 border-t">
                      <p className="text-[10px] text-muted-foreground italic text-center">Note: {item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div className="mt-20">
              <h2 className="text-2xl font-bold text-navy mb-12 text-center">How to get an Invitation Letter?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { step: "Step 1", title: "Fill In The Invitation Form", desc: "Please ensure that you fill out the online invitation form with the correct spellings according to the information in your passport" },
                  { step: "Step 2", title: "Attach Passport & Proceed Payment", desc: "After filling out the form, please attach a scanned copy of your passport, then click the 'Submit' button and proceed with the payment." },
                  { step: "Step 3", title: "Get Ready To Receive your Invitation", desc: "After receiving your application, passport copy, and payment confirmation, we will send your invitation letter to your email within 3 business days." }
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="w-12 h-12 bg-orange text-orange-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      {i + 1}
                    </div>
                    <p className="text-orange font-bold text-xs uppercase tracking-widest mb-2">{s.step}</p>
                    <h4 className="text-navy font-bold mb-3">{s.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment & FAQ */}
            <div className="mt-20 grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-navy mb-6">Payment Terms</h3>
                <div className="bg-section-gray p-6 rounded-lg text-sm text-muted-foreground leading-relaxed">
                  <p className="mb-4">We only accept documents with 100% advanced payment. Payment can be made through bank accounts and Visa/MasterCard credit cards.</p>
                  <p className="mb-4">To view the bank account details, please visit the <Link to="/bank-account" className="text-orange font-semibold underline">Bank Account</Link> section.</p>
                  <p>Please note that all payments are non-refundable. Once payment is confirmed, we will issue the invitation letter within 3 business days.</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy mb-6">Frequently asked Questions</h3>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-3 text-navy font-bold text-sm mb-2">
                      <HelpCircle size={18} className="text-orange" />
                      <span>How long does it take?</span>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed">Normally, we process visa invitation letters within three business days and send them via email. Shipping may take 3 to 10 days.</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-3 text-navy font-bold text-sm">
                      <HelpCircle size={18} className="text-orange" />
                      <span>Do you process visa applications?</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Search */}
            <div className="relative">
              <input type="text" placeholder="Search..." className="w-full border rounded px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-orange" />
              <Search className="absolute right-3 top-3 text-muted-foreground" size={18} />
            </div>

            {/* Services */}
            <div className="bg-navy p-6 rounded-lg text-navy-foreground">
              <h3 className="font-bold mb-6 border-b border-navy-light pb-2">Our Top Services</h3>
              <ul className="space-y-3 text-sm">
                {["Working Visas", "Visiting Visas", "Studying Visas", "Visit Visa Invitation", "Family Visa Invitation", "Business Visa Invitation", "Apply Invitation Letter", "Company Registration", "Business Immigration", "Bank Accounts"].map(s => (
                  <li key={s} className="flex items-center gap-2 hover:text-orange transition-colors cursor-pointer group">
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-section-gray p-6 rounded-lg border">
              <h3 className="font-bold text-navy mb-6">Any Questions?</h3>
              <div className="space-y-6">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-orange/10 rounded flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-orange" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase">Call / WhatsApp</p>
                    <p className="text-sm font-bold text-navy">+370 660 22174</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-orange/10 rounded flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-orange" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase">UK WhatsApp</p>
                    <p className="text-sm font-bold text-navy">+44 7492 219937</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-orange/10 rounded flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-orange" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase">Email Us</p>
                    <p className="text-sm font-bold text-navy">info@easyinspire.eu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Tags Section */}
    <section className="py-12 bg-section-gray border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-2 justify-center">
          <span className="text-navy font-bold text-xs uppercase tracking-widest mr-2 self-center">TAGS:</span>
          {tags.map((tag, index) => (
            <span key={index} className="text-[10px] text-muted-foreground bg-background border px-2 py-1 rounded hover:text-orange transition-colors cursor-default">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>

    <FooterSection />
    <WhatsAppButton />
  </div>
);

export default DetailsAndCosts;