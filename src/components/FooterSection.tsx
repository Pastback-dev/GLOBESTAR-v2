import { Star, Send } from 'lucide-react';
import { useState } from 'react';

const FooterSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  return (
    <section id="contact" className="bg-navy py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left - Form */}
          <div>
            <p className="text-orange text-sm font-semibold mb-2">Get Free Assessment Today!</p>
            <h2 className="text-2xl md:text-3xl font-bold text-navy-foreground mb-8 leading-tight">
              Feel Free To Enquire About<br />Any Questions You Got
            </h2>
            <form className="space-y-4" onSubmit={e => e.preventDefault()}>
              <input
                type="text"
                placeholder="Full Name"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full bg-navy-light text-navy-foreground placeholder:text-navy-foreground/50 border-0 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full bg-navy-light text-navy-foreground placeholder:text-navy-foreground/50 border-0 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full bg-navy-light text-navy-foreground placeholder:text-navy-foreground/50 border-0 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange resize-none"
              />
              <button type="submit" className="inline-flex items-center gap-2 bg-orange text-orange-foreground px-8 py-3 rounded text-sm font-semibold hover:bg-orange-hover transition-colors">
                Submit <Send size={14} />
              </button>
            </form>
          </div>

          {/* Right - Ratings */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold text-navy-foreground mb-4">Customer Ratings</h3>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={28} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-5xl font-bold text-navy-foreground mb-2">4.9 / 5.0</p>
            <p className="text-navy-foreground/70 text-sm">By 2000+ Happy Travelers</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-navy-light">
        <div className="flex flex-col md:flex-row items-center justify-between text-navy-foreground/60 text-xs">
          <p>&copy; 2026 GLOBESTAR. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
