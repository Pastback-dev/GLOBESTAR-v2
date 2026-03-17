import { ArrowRight, Users, Plane, Briefcase, Heart, MapPin, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const invitationTypes = [
  {
    icon: Users,
    title: 'Group Invitation',
    description: 'A group invitation is a written document from a company to obtain tourist group visas.',
    link: '/apply-invitation',
  },
  {
    icon: Plane,
    title: 'Visit Invitation',
    description: 'A visa invitation letter is a written letter from the company for a visitor visa.',
    link: '/apply-invitation',
  },
  {
    icon: Briefcase,
    title: 'Business Invitation',
    description: 'A visa invitation letter is a written letter from the company for a business visa purpose.',
    link: '/apply-invitation',
  },
  {
    icon: Heart,
    title: 'Family Invitation',
    description: 'A visa invitation letter is a written letter from the company for a Family visitor visa.',
    link: '/apply-invitation',
  },
  {
    icon: MapPin,
    title: 'Tourist Invitation',
    description: 'A visa invitation letter is a written letter from the tourist company for a tourist visa purpose.',
    link: '/apply-invitation',
  },
  {
    icon: User,
    title: 'Private Invitation',
    description: 'A private invitation letter is a written document from an individual to obtain a tourist visa.',
    link: '/apply-invitation',
  },
];

const VisaSolutionsSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-[#f27024] text-sm font-bold uppercase tracking-widest mb-3">We Provide the Visa solutions</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0e2a47] mb-8 uppercase italic">Visa Invitation Letters</h2>
        <div className="w-16 h-1 bg-[#f27024] mx-auto mb-8"></div>
        <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
          A visa invitation letter is a written letter from a company or person who lives in the country you wish to visit. This letter serves as an invitation to stay with them, and by extension, guarantees that you will not overstay your visa. We offer company invitation letters for business, family, and visit visas for countries such as Lithuania, Albania, Belarus, the UK, Russia, Serbia, Moldova, Kosovo, Ukraine, Spain, Sweden, Hungary, Luxembourg, Netherlands & German and more.
        </p>
      </div>

      {/* Invitation Types Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {invitationTypes.map((type, idx) => (
          <div key={idx} className="bg-white border rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all group">
            <p className="text-[#f27024] text-xs font-bold uppercase tracking-widest mb-4">VISA TYPES</p>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#0e2a47]/10 flex items-center justify-center group-hover:bg-[#f27024] transition-colors">
                <type.icon size={24} className="text-[#0e2a47] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#0e2a47]">{type.title}</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {type.description}
            </p>
            <Link
              to={type.link}
              className="inline-flex items-center gap-2 text-[#f27024] font-semibold text-sm hover:gap-3 transition-all"
            >
              Apply / View Details <ArrowRight size={16} />
            </Link>
          </div>
        ))}
      </div>

      {/* View All Link */}
      <div className="text-center">
        <Link
          to="/types-of-invitation"
          className="inline-flex items-center gap-2 text-[#0e2a47] font-bold text-sm uppercase tracking-widest hover:text-[#f27024] transition-colors"
        >
          View All Invitation Types <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  </section>
);

export default VisaSolutionsSection;
