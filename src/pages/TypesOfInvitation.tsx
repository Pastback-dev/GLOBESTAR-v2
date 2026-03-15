import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Link } from 'react-router-dom';
import { ArrowRight, Plane, Briefcase, Users, Heart, User, Globe } from 'lucide-react';

const invitationTypes = [
  {
    icon: Plane,
    category: "Visit",
    title: "Visit Visa",
    subtitle: "Invitation Letter",
    description: "A visit invitation letter is essential for visa applications, inviting someone to a country for tourism. It includes detailed host information and specifies the purpose of the visit, like \"Canada tourist visa invitation letter sample,\" \"USA invitation letter for tourist visa,\" \"UK tourist visa invitation letter sample,\" \"Lithuania tourist visa invitation letter,\" \"Albania tourist visa invitation letter sample,\" and \"Belarus invitation letter for tourist visa.\""
  },
  {
    icon: Briefcase,
    category: "Business",
    title: "Business Visa",
    subtitle: "Invitation Letter",
    description: "A business invitation letter is a formal document from a company or organization inviting a foreign national for business-related purposes. It provides essential visit details crucial for the visa application process, such as (\"USA business visa invitation letter template,\" \"Canada business visa invitation letter requirements,\" \"UK business visa invitation letter requirements,\" \"Lithuania business visa invitation letter template,\" \"Albania business visa invitation letter requirements,\" and \"Belarus business visa invitation letter template\")."
  },
  {
    icon: Heart,
    category: "Family",
    title: "Family Visa",
    subtitle: "Invitation Letter",
    description: "A family invitation letter is a formal document issued by an individual or family member in one country, inviting a relative from another country to visit. It supports the visa application by demonstrating the purpose of the visit and the host's ties to the country. It plays a crucial role in the visa approval process and can be issued by either a company or an individual."
  },
  {
    icon: Globe,
    category: "Tourist Invitation Letter",
    title: "Tourist Visa",
    subtitle: "Invitation Letter",
    description: "A visit invitation letter is essential for visa applications, inviting someone to a country for tourism. It includes detailed host information and specifies the purpose of the visit, like \"Canada tourist visa invitation letter sample,\" \"USA invitation letter for a tourist visa,\" \"UK tourist visa invitation letter sample,\" \"Lithuania tourist visa invitation letter,\" \"Albania tourist visa invitation letter sample,\" and \"Belarus invitation letter for a tourist visa.\""
  },
  {
    icon: User,
    category: "Private Invitation",
    title: "Private",
    subtitle: "Invitation Letter",
    description: "A private invitation letter is a formal document issued by an individual in one country, inviting someone from another country to visit. It supports the visa application by demonstrating the purpose of the visit and the host's ties to the country. It plays a crucial role in the visa approval process and can be issued by either a company or an individual."
  },
  {
    icon: Users,
    category: "Group Invitation",
    title: "Group",
    subtitle: "Invitation Letter",
    description: "A group invitation letter is a formal document issued by an individual or organization in one country, inviting a group of people from another country to visit. It supports the visa application by demonstrating the purpose of the visit and the host's ties to the country. It plays a crucial role in the visa approval process and can be issued by either a company or an individual."
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

const TypesOfInvitation = () => (
  <div className="min-h-screen">
    <TopBar />
    <Navbar />
    
    {/* Hero Section */}
    <section className="py-16 bg-navy text-navy-foreground">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">Invitation Letters for Visas</h1>
        <div className="w-20 h-1 bg-orange mb-8" />
        <p className="max-w-4xl text-navy-foreground/80 leading-relaxed text-sm md:text-base">
          Invitation letters are available for Lithuania, Estonia, Albania, Belarus, the United Kingdom, Russia, Serbia, Moldova, Kosovo, Spain, Sweden, Hungary, Luxembourg, the Netherlands, Germany, the Czech Republic, Denmark, Finland, France, Iceland, Norway, Poland, Portugal, and Ireland. An invitation letter for a visa application is a crucial document required when applying for a visitor visa to another country. It is a formal letter submitted by the applicant to the embassy or consulate of the country they wish to visit. This important document is typically written by the host, who may be a company or an individual extending the invitation, and it is directed either to the applicant or to the consular officer handling the visa application. The purpose of the invitation letter is to confirm that the host will provide accommodation and support to the applicant during their stay in the host country where the host is lawfully residing. Invitation letters come in various types, each designed to suit specific circumstances.
        </p>
      </div>
    </section>

    {/* Grid Section */}
    <section className="py-20 bg-section-gray">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {invitationTypes.map((type, index) => (
            <div key={index} className="bg-background p-8 rounded-lg shadow-sm border hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-navy/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange/10 transition-colors">
                <type.icon className="text-navy group-hover:text-orange transition-colors" size={28} />
              </div>
              <p className="text-orange font-bold text-[10px] uppercase tracking-widest mb-2">{type.category}</p>
              <h3 className="text-xl font-bold text-navy mb-1">{type.title}</h3>
              <p className="text-navy/60 font-semibold text-xs uppercase tracking-wider mb-4">{type.subtitle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-4">
                {type.description}
              </p>
              <button className="text-navy font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:text-orange transition-colors">
                Read More <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <Link 
            to="/apply-invitation" 
            className="inline-flex items-center gap-3 bg-orange text-orange-foreground px-8 py-4 rounded-lg font-bold hover:bg-orange-hover transition-all shadow-lg hover:-translate-y-1"
          >
            Apply Invitation Letter Online or Manually Click Here <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>

    {/* Tags Section */}
    <section className="py-12 bg-background border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-2 justify-center">
          <span className="text-navy font-bold text-xs uppercase tracking-widest mr-2 self-center">Tags:</span>
          {tags.map((tag, index) => (
            <span key={index} className="text-[10px] text-muted-foreground bg-section-gray px-2 py-1 rounded hover:text-orange transition-colors cursor-default">
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

export default TypesOfInvitation;