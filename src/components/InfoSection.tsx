import { Building2, Scale } from 'lucide-react';

const InfoSection = () => (
  <section className="py-20 bg-section-gray">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 mb-16">
        {/* Left */}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">We understand your business needs</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 leading-tight">
            Company Formation<br />in the World
          </h2>
          <div className="w-12 h-1 bg-orange mb-6" />
          <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
            Easy Inspire Ltd. is your ultimate partner in company registration. Aspiring entrepreneurs can take advantage of their streamlined and hassle-free process, saving valuable time and effort. With a team of experienced professionals.
          </p>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded bg-section-gray border flex items-center justify-center shrink-0">
                <Building2 size={22} className="text-navy" />
              </div>
              <div>
                <h4 className="font-bold text-navy mb-1">Company Formation</h4>
                <p className="text-muted-foreground text-sm">Company formation services are available for Lithuania, Albania, Belarus & the UK, etc.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded bg-section-gray border flex items-center justify-center shrink-0">
                <Scale size={22} className="text-navy" />
              </div>
              <div>
                <h4 className="font-bold text-navy mb-1">Legal Support</h4>
                <p className="text-muted-foreground text-sm">We also provide the Virtual business address, phone number, web domain, and account services.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">HOW WE HELP CLIENTS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 leading-tight">
            World Visas News &<br />Updates
          </h2>
          <div className="w-12 h-1 bg-orange mb-6" />
          <p className="text-muted-foreground text-sm leading-relaxed">
            Good news for bus drivers looking to immigrate to Lithuania: The Lithuanian authorities have announced that bus drivers are now eligible to apply for permanent residency through the Skilled Worker program. This program allows skilled workers from around the world to immigrate to Lithuania and contribute to the country's economy. The decision to include bus drivers was made in response to a high demand for bus drivers in Lithuania.
          </p>
        </div>
      </div>

      {/* Partner logos */}
      <div className="flex flex-wrap items-center justify-center gap-12 opacity-40 grayscale">
        {['SkyWings Airlines', 'Grand Hotels', 'TravelSafe Insurance', 'WorldTour Co.'].map(name => (
          <div key={name} className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-navy/10 flex items-center justify-center mb-2">
              <span className="text-navy font-bold text-xs">{name.split(' ').map(w => w[0]).join('')}</span>
            </div>
            <span className="text-xs text-muted-foreground">{name}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InfoSection;