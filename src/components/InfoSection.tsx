import { Newspaper, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const news = [
  {
    date: 'March 2025',
    title: 'Good news for bus drivers looking to immigrate to Lithuania',
    excerpt: 'Lithuania has opened new immigration pathways for experienced bus drivers with valid licenses, offering work permits and residency options.',
    category: 'Immigration News',
  },
  {
    date: 'February 2025',
    title: 'New working visa opportunities in Malta for 2025',
    excerpt: 'Malta has expanded its working visa program with new sectors including hospitality, healthcare and IT, with fast-track processing available.',
    category: 'Visa Updates',
  },
  {
    date: 'January 2025',
    title: 'Albania e-visa: Complete guide for 2025 applicants',
    excerpt: 'Albania has simplified its e-visa process, making it easier and faster for travelers to obtain an electronic visa for tourism and business.',
    category: 'E-Visa Information',
  },
];

const InfoSection = () => (
  <section className="py-20 bg-section-gray">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Latest Updates</p>
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">News & Immigration Updates</h2>
        <div className="w-12 h-1 bg-orange mx-auto" />
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {news.map((n, i) => (
          <article key={i} className="bg-background rounded-lg overflow-hidden shadow-sm border hover:shadow-lg transition-shadow duration-300">
            <div className="bg-navy h-3 w-full" />
            <div className="p-6">
              <span className="inline-block bg-orange/10 text-orange text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                {n.category}
              </span>
              <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                <Clock size={12} />
                <span>{n.date}</span>
              </div>
              <h3 className="text-navy font-bold mb-3 line-clamp-2">{n.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{n.excerpt}</p>
              <Link to="/contact" className="inline-flex items-center gap-1 text-orange text-sm font-semibold hover:underline">
                Read More <ArrowRight size={12} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default InfoSection;