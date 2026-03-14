import cardFlight from '@/assets/card-flight.jpg';
import cardHotel from '@/assets/card-hotel.jpg';
import cardVisa from '@/assets/card-visa.jpg';

const cards = [
  { img: cardFlight, title: 'Book a Flight' },
  { img: cardHotel, title: 'Reserve a Hotel' },
  { img: cardVisa, title: 'Apply for Visa' },
];

const ThreeCardSection = () => (
  <section className="py-16 bg-section-gray">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map(card => (
          <div key={card.title} className="group cursor-pointer">
            <div className="overflow-hidden rounded-t-lg">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="bg-background text-center py-5 rounded-b-lg shadow-md">
              <h3 className="text-navy font-semibold">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ThreeCardSection;
