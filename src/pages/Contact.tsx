import { TopBar, Navbar } from '@/components/Header';
import FooterSection from '@/components/FooterSection';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CheckCircle2, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';

const PageHero = ({ title, breadcrumb }: { title: string; breadcrumb: string }) => (
  <div className="bg-[#0e2a47] py-16 md:py-24 text-white text-center">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 uppercase">{title}</h1>
      <p className="text-orange text-sm uppercase tracking-widest">{breadcrumb}</p>
    </div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    country: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://usebasin.com/f/968d45594d0f", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({
          firstName: '',
          email: '',
          phone: '',
          country: '',
          service: '',
          message: ''
        });
      } else {
        const data = await response.json();
        if (data.errors) {
          toast.error(data.errors.map((error: { message: string }) => error.message).join(", "));
        } else {
          toast.error("Oops! There was a problem submitting your form");
        }
      }
    } catch (error) {
      toast.error("Oops! There was a problem submitting your form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <PageHero title="Contact" breadcrumb="Home / Contact" />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-[#f27024] text-sm font-bold uppercase tracking-widest mb-3">GET IN TOUCH</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0e2a47] mb-6">Contact GLOBESTAR</h2>
          <div className="w-16 h-1 bg-[#f27024] mx-auto mb-8"></div>
          <p className="text-gray-600 leading-relaxed uppercase font-bold">
            Lets Start Conversation Today
          </p>
          <p className="text-gray-600">HOW WE HELP CLIENTS</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <div className="bg-[#0e2a47] p-8 md:p-12 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-[#f27024]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">ADDRESS</h4>
                  <p className="text-white/70 text-sm leading-relaxed">
                    N, 3 Ave Zerktouni,<br />Khénifra 54000, Morocco
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="text-[#f27024]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">PHONE</h4>
                  <a href="tel:+34624132171" className="text-white/70 text-sm block hover:text-[#f27024] transition-colors">+34 624 13 21 71</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="text-[#f27024]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">EMAIL</h4>
                  <a href="mailto:globestarvisa@gmail.com" className="text-white/70 text-sm block hover:text-[#f27024] transition-colors text-wrap break-all">globestarvisa@gmail.com</a>
                  <a href="mailto:globestarvisa@gmail.com" className="text-white/70 text-sm block hover:text-[#f27024] transition-colors text-wrap break-all">globestarvisa@gmail.com</a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Clock className="text-[#f27024]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">WORKING HOURS</h4>
                  <p className="text-white/70 text-sm">Monday – Friday: 9:00 – 18:00</p>
                  <p className="text-white/70 text-sm">Saturday & Sunday: Closed</p>
                </div>
              </div>
            </div>


          </div>

          {/* Right - Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-[#0e2a47] mb-8">Send Us a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#0e2a47] uppercase tracking-wider mb-2">FIRST NAME *</label>
                  <input
                    name="firstName"
                    type="text"
                    required
                    placeholder="Your first name"
                    className="w-full bg-section-gray border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#f27024] outline-none"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0e2a47] uppercase tracking-wider mb-2">EMAIL ADDRESS *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-section-gray border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#f27024] outline-none"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#0e2a47] uppercase tracking-wider mb-2">PHONE NUMBER</label>
                  <input
                    name="phone"
                    type="text"
                    placeholder="+1 234 567 890"
                    className="w-full bg-section-gray border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#f27024] outline-none"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0e2a47] uppercase tracking-wider mb-2">YOUR COUNTRY</label>
                  <input
                    name="country"
                    type="text"
                    placeholder="Your country of residence"
                    className="w-full bg-section-gray border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#f27024] outline-none"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#0e2a47] uppercase tracking-wider mb-2">SERVICE INTERESTED IN</label>
                <select
                  name="service"
                  className="w-full bg-section-gray border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#f27024] outline-none appearance-none"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="">Select a Service</option>
                  <option value="work">Work Permit</option>
                  <option value="visit">Visit Visa / E-Visa</option>
                  <option value="study">Study Abroad</option>
                  <option value="invitation">Invitation Letter</option>
                  <option value="company">Company Registration</option>
                  <option value="immigration">Business Immigration</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-[#0e2a47] uppercase tracking-wider mb-2">MESSAGE *</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us how we can help you..."
                  className="w-full bg-section-gray border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-[#f27024] outline-none resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#f27024] text-white py-4 rounded-lg font-bold uppercase tracking-widest hover:bg-opacity-90 transition-all shadow-lg shadow-orange-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>

      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
