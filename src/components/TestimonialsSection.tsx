import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    location: 'London, UK',
    title: 'Amazing Experience',
    review: 'GLOBESTAR Consultancy is definitely a HIGHLY recommended Travel Agency. Big applause and very grateful to the team for their efforts and assistance with our holiday booking. They are truly knowledgeable, and skilled and have empathy throughout the process. The recommendations of its clients speak for themselves. Please continue to guide, support and help other aspiring travelers like us. Thank you from the bottom of my heart.',
  },
  {
    name: 'James Thomas',
    location: 'New York, USA',
    title: 'Top-Notch Service',
    review: 'Thank you GLOBESTAR for your excellent service. The team is so helpful and loyal in their service. They always answered all our questions and concerns at all hours without getting annoyed. They explained the whole process from booking to arrival and made it a stress-free process. I highly recommend GLOBESTAR to my friends and family who are looking for a great travel agent.',
  },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 text-center">
      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Clients Testimonials</p>
      <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">
        What Customers<br />Saying About GLOBESTAR
      </h2>
      <div className="w-12 h-1 bg-orange mx-auto mt-4 mb-12" />

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map(t => (
          <div key={t.name} className="bg-background border rounded-lg p-8 text-left shadow-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-section-gray flex items-center justify-center text-navy font-bold text-lg">
                {t.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-navy">{t.name}</h4>
                <p className="text-muted-foreground text-xs">{t.location}</p>
              </div>
              <div className="ml-auto flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <p className="font-semibold text-orange text-sm mb-2">{t.title}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{t.review}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2 justify-center mt-8">
        <span className="w-3 h-3 rounded-full bg-orange" />
        <span className="w-3 h-3 rounded-full bg-border" />
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
