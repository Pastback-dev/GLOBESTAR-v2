import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Plane, Briefcase, Users, Heart, User, Globe, ArrowRight } from 'lucide-react';

const invitationTypes = [
  {
    icon: Plane,
    title: 'Visit Visa Invitation Letter',
    category: 'Visit',
    desc: 'A visit invitation letter is essential for visa applications, inviting someone to a country for tourism. It includes detailed host information and specifies the purpose of the visit, like "Canada tourist visa invitation letter sample," "USA invitation letter for tourist visa," "UK tourist visa invitation letter sample," "Lithuania tourist visa invitation letter," "Albania tourist visa invitation letter sample," and "Belarus invitation letter for tourist visa."'
  },
  {
    icon: Briefcase,
    title: 'Business Visa Invitation Letter',
    category: 'Business',
    desc: 'A business invitation letter is a formal document from a company or organization inviting a foreign national for business-related purposes. It provides essential visit details crucial for the visa application process, such as ("USA business visa invitation letter template," "Canada business visa invitation letter requirements," "UK business visa invitation letter requirements," "Lithuania business visa invitation letter template," "Albania business visa invitation letter requirements," and "Belarus business visa invitation letter template").'
  },
  {
    icon: Heart,
    title: 'Family Visa Invitation Letter',
    category: 'Family',
    desc: 'A family invitation letter is a formal document issued by an individual or family member in one country, inviting a relative from another country to visit. It supports the visa application by demonstrating the purpose of the visit and the host\'s ties to the country. It plays a crucial role in the visa approval process and can be issued by either a company or an individual.'
  },
  {
    icon: Globe,
    title: 'Tourist Visa Invitation Letter',
    category: 'Tourist',
    desc: 'A visit invitation letter is essential for visa applications, inviting someone to a country for tourism. It includes detailed host information and specifies the purpose of the visit, like "Canada tourist visa invitation letter sample," "USA invitation letter for a tourist visa," "UK tourist visa invitation letter sample," "Lithuania tourist visa invitation letter," "Albania tourist visa invitation letter sample," and "Belarus invitation letter for a tourist visa."'
  },
  {
    icon: User,
    title: 'Private Invitation Letter',
    category: 'Private',
    desc: 'A private invitation letter is a formal document issued by an individual in one country, inviting someone from another country to visit. It supports the visa application by demonstrating the purpose of the visit and the host\'s ties to the country. It plays a crucial role in the visa approval process and can be issued by either a company or an individual.'
  },
  {
    icon: Users,
    title: 'Group Invitation Letter',
    category: 'Group',
    desc: 'A group invitation letter is a formal document issued by an individual or organization in one country, inviting a group of people from another country to visit. It supports the visa application by demonstrating the purpose of the visit and the host\'s ties to the country. It plays a crucial role in the visa approval process.'
  }
];

const tags = [
  "Invitation Letters for Visas", "Visa Invitation Letter", "Visit Visa Invitation Letter", "Business Visa Invitation Letter", 
  "Family Visa Invitation Letter", "Tourist Visa Invitation Letter", "Private Invitation Letter", "Group Invitation Letter", 
  "Lithuania Invitation Letter", "Estonia Invitation Letter", "Albania Invitation Letter", "Belarus Invitation Letter", 
  "United Kingdom Invitation Letter", "Russia Invitation Letter", "Serbia Invitation Letter", "Moldova Invitation Letter", 
  "Kosovo Invitation Letter", "Spain Invitation Letter", "Sweden Invitation Letter", "Hungary Invitation Letter", 
  "Luxembourg Invitation Letter", "Netherlands Invitation Letter", "Germany Invitation Letter", "Czech Republic Invitation Letter", 
  "Denmark Invitation Letter", "Finland Invitation Letter", "France Invitation Letter", "Iceland Invitation Letter", 
  "Norway Invitation Letter", "Poland Invitation Letter", "Portugal Invitation Letter", "Ireland Invitation Letter", 
  "Canada Invitation Letter", "USA Invitation Letter", "UK Invitation Letter Sample", "Canada Tourist Visa Invitation Letter", 
  "USA Business Visa Invitation Letter", "UK Family Visa Invitation Letter", "Lithuania Tourist Visa Invitation Letter", 
  "Albania Visa Invitation Sample", "Belarus Business Invitation Letter", "Schengen Visa Invitation Letter", 
  "Visa Support Services", "Travel Visa Help", "Work Visa Assistance", "Study Visa Assistance", "Visa Sponsorship Documents", 
  "Europe Visa Help", "Visa Processing Help"
];

const InvitationTypes = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />
    <section className="py-20 bg-section-gray">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-bold text-navy mb-6">Invitation Letters for Visas</h1>
          <div className="w-16 h-1 bg-orange mx-auto mb-8" />
          <p className="text-muted-foreground leading-relaxed mb-8">
            Invitation letters are available for Lithuania, Estonia, Albania, Belarus, the United Kingdom, Russia, Serbia, Moldova, Kosovo, Spain, Sweden, Hungary, Luxembourg, the Netherlands, Germany, the Czech Republic, Denmark, Finland, France, Iceland, Norway, Poland, Portugal, and Ireland.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed text-left bg-background p-6 rounded-lg border shadow-sm">
            An invitation letter for a visa application is a crucial document required when applying for a visitor visa to another country. It is a formal letter submitted by the applicant to the embassy or consulate of the country they wish to visit. This important document is typically written by the host, who may be a company or an individual extending the invitation, and it is directed either to the applicant or to the consular officer handling the visa application. The purpose of the invitation letter is to confirm that the host will provide accommodation and support to the applicant during their stay in the host country where the host is lawfully residing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {invitationTypes.map((type) => (
            <div key={type.title} className="bg-background p-8 rounded-lg border shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="w-12 h-12 bg-navy/5 rounded flex items-center justify-center mb-6">
                <type.icon className="text-navy" size={24} />
              </div>
              <p className="text-orange font-bold text-[10px] uppercase tracking-widest mb-2">{type.category}</p>
              <h3 className="text-xl font-bold text-navy mb-4">{type.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{type.desc}</p>
              <button className="text-navy font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:text-orange transition-colors">
                Read More <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mb-20">
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 bg-orange text-orange-foreground px-8 py-4 rounded font-bold hover:bg-orange-hover transition-colors"
          >
            Apply Invitation Letter Online or Manually Click Here
          </a>
        </div>

        <div className="border-t pt-12">
          <h4 className="text-navy font-bold mb-6 text-center">Related Tags</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {tags.map((tag) => (
              <span key={tag} className="bg-background border px-3 py-1 rounded-full text-[10px] text-muted-foreground hover:border-orange hover:text-orange cursor-default transition-colors">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
    <FooterSection />
    <WhatsAppButton />
  </div>
);

export default InvitationTypes;