// HomePage — composition of homepage sections per homepage-copy.md (V3)

const SERVICES = [
  { title: 'Cowsheds',  photo: '../../assets/photos/cowshed-milking-yard.png', blurb: 'The job we do day-in, day-out. Wet-saw grooved so cows walk in and milk faster.', href: '#/services/cowshed-grooving' },
  { title: 'Yards',     photo: '../../assets/photos/yard-grooved.jpg', blurb: 'Loading yards, drafting yards, sale yards. Cows stay on their feet — easier to handle.', href: '#/yards' },
  { title: 'Car Parks', photo: '../../assets/photos/cowshed-2b.jpg',   blurb: 'Wet concrete car parks, school footpaths, commercial loading bays. Grip in all weather.', href: '#/car-parks' },
  { title: 'Boat Ramps', photo: '../../assets/photos/boatramp-grooved.jpg', blurb: 'Crosshatch grooves stop algae build-up and slipping at the waterline.', href: '#/boat-ramps-marine-docks' },
];

function HomePage({ onNavigate }) {
  return (
    <main>
      <HeroSection onNavigate={onNavigate} />

      {/* Problem */}
      <Section bg="concrete-white" narrow>
        <h2 style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(2rem, 4vw, 3rem)', textTransform:'uppercase', color:'var(--deep-purple)', margin:'0 0 1.5rem', textAlign:'center', letterSpacing:'0.02em' }}>
          Slipping cows cost you<br />more than you think
        </h2>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'1.25rem', lineHeight:1.6, margin:'0 0 1rem', textAlign:'center' }}>
          A cow that slips loses condition. A cow that goes down can lose production for weeks. On wet concrete, it's not a matter of if — it's when.
        </p>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'1.25rem', lineHeight:1.6, margin:0, textAlign:'center' }}>
          Most farmers put up with it. The ones who don't call us.
        </p>
      </Section>

      <GrooveDivider />

      {/* Solution */}
      <Section bg="deep-purple">
        <div style={{ display:'grid', gridTemplateColumns:'1.1fr 0.9fr', gap:'var(--space-stack-lg)', alignItems:'center' }}>
          <div>
            <h2 style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(2rem, 4vw, 3rem)', textTransform:'uppercase', color:'var(--concrete-white)', margin:'0 0 1.5rem', letterSpacing:'0.02em' }}>
              Grooving your concrete fixes it
            </h2>
            <p style={{ fontFamily:'var(--font-body)', fontSize:'1.25rem', lineHeight:1.6, color:'rgba(255,255,255,0.9)', margin:'0 0 1.5rem' }}>
              We grind grooves directly into your existing concrete — cowsheds, yards, races, car parks, boat ramps. No new surface. No major downtime. Just concrete that grips.
            </p>
            <ul style={{ listStyle:'none', padding:0, margin:'0 0 2rem', display:'flex', flexDirection:'column', gap:'0.75rem' }}>
              {[
                'Cows move with confidence. Fewer injuries, less stress, better production.',
                'Your shed runs faster. Cows that walk well get in and out quicker. Every morning.',
                'One job, done once. Grooves don\u2019t wear off.',
              ].map((line, i) => (
                <li key={i} style={{
                  fontFamily:'var(--font-body)', fontSize:'1.125rem', lineHeight:1.5,
                  color:'var(--concrete-white)', paddingLeft:'1.5rem', position:'relative',
                }}>
                  <span style={{ position:'absolute', left:0, color:'var(--teal)', fontWeight:700 }}>—</span> {line}
                </li>
              ))}
            </ul>
            <Button variant="ghost" href="#/contact" onClick={() => onNavigate('#/contact')}>Get a Quote</Button>
          </div>
          <figure style={{ margin:0 }}>
            <div style={{
              background:`#000 center/cover url(../../assets/photos/cowshed-grooves-closeup.jpg)`,
              aspectRatio:'4/3', borderRadius:'var(--radius)', borderTop:'3px solid var(--teal)',
            }} />
            <figcaption style={{
              fontFamily:'var(--font-body)', fontSize:'0.875rem', color:'rgba(255,255,255,0.7)',
              margin:'0.75rem 0 0', fontStyle:'italic',
            }}>Crosshatch grooves cut straight into the existing cowshed floor.</figcaption>
          </figure>
        </div>
      </Section>

      {/* Lead testimonial */}
      <Section bg="concrete-white" narrow>
        <TestimonialBlock
          quote="We considered many other options before finding your website. No other option compared. Vast improvement — no slipping, stable footing, cattle settled, easy to handle."
          attribution="Gordon Wright"
        />
      </Section>

      {/* Stat callout */}
      <StatCallout
        showCow
        number="15,000"
        label="cattle movements through one yard since we grooved it. "
        sublabel={"Not a single problem.\n\n"}
        attribution="— Gordon Wright"
      />

      {/* More testimonials */}
      <Section bg="surface">
        <h2 style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(2rem, 4vw, 3rem)', textTransform:'uppercase', color:'var(--deep-purple)', margin:'0 0 2rem', textAlign:'center', letterSpacing:'0.02em' }}>
          More farmer feedback on concrete grooving
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'var(--space-gutter)' }}>
          <Card><TestimonialBlock quote="Completely different herd to milk. Cows are flowing through the shed much better. No more slips and faster milking times." attribution="Trevor, Patetonga" /></Card>
          <Card><TestimonialBlock quote="It instantly showed in the stock. They felt secure and were 100% more settled." attribution="Kelly & Tina Woollier" /></Card>
          <Card><TestimonialBlock quote="Fitted in with our milking times. Good communication. Cows no longer slip on the yard — much easier to draft and handle." attribution="Graham & Odele Wells" /></Card>
        </div>
      </Section>

      {/* Objection */}
      <Section bg="deep-purple" narrow>
        <h2 style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(2rem, 4vw, 3rem)', textTransform:'uppercase', color:'var(--concrete-white)', margin:'0 0 1.5rem', letterSpacing:'0.02em' }}>
          Still thinking about it?
        </h2>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'1.5rem', lineHeight:1.5, color:'var(--concrete-white)', margin:'0 0 0.5rem', fontStyle:'italic' }}>
          "I should have done the whole yard first off."
        </p>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'1rem', color:'var(--teal)', margin:'0 0 1.5rem' }}>— Kelly & Tina Woollier</p>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'1.125rem', lineHeight:1.6, color:'rgba(255,255,255,0.9)', margin:'0 0 2rem' }}>
          The farmers who wait longest are usually the ones who say that. One grooved section and they see the results, then wish they'd done the rest sooner.
        </p>
        <Button variant="primary" href="#/contact" onClick={() => onNavigate('#/contact')}>Request a callback</Button>
      </Section>

      {/* How it works */}
      <Section bg="concrete-white">
        <h2 style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(2rem, 4vw, 3rem)', textTransform:'uppercase', color:'var(--deep-purple)', margin:'0 0 2rem', textAlign:'center', letterSpacing:'0.02em' }}>
          Straightforward
        </h2>
        <ol style={{ listStyle:'none', counterReset:'step', padding:0, margin:0, display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(240px, 1fr))', gap:'var(--space-gutter)' }}>
          {[
            { n:'1', t:'Get a quote',     d:"Tell us what you've got — cowshed, yard, race, whatever needs doing." },
            { n:'2', t:'We come to you',  d:'We bring the gear and get it done.' },
            { n:'3', t:'Your concrete grips', d:'From the day we leave, it works.' },
          ].map((s) => (
            <li key={s.n} style={{ borderTop:'3px solid var(--teal)', paddingTop:'1rem' }}>
              <div style={{ fontFamily:'var(--font-heading)', fontSize:'3rem', color:'var(--safety-orange)', lineHeight:1, letterSpacing:'0.02em' }}>{s.n}</div>
              <h4 style={{ fontFamily:'var(--font-heading)', fontSize:'1.5rem', textTransform:'uppercase', color:'var(--deep-purple)', margin:'0.5rem 0', letterSpacing:'0.02em' }}>{s.t}</h4>
              <p style={{ fontFamily:'var(--font-body)', fontSize:'1rem', lineHeight:1.5, margin:0 }}>{s.d}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Where we work */}
      <Section bg="surface">
        <h2 style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(2rem, 4vw, 3rem)', textTransform:'uppercase', color:'var(--deep-purple)', margin:'0 0 0.5rem', textAlign:'center', letterSpacing:'0.02em' }}>
          We groove it all
        </h2>
        <p style={{ textAlign:'center', fontFamily:'var(--font-body)', fontSize:'1.125rem', color:'var(--on-surface-variant)', margin:'0 0 2rem' }}>
          Cowsheds &middot; Yards &middot; Car Parks &middot; Boat Ramps &amp; Marine Docks
        </p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:'var(--space-gutter)' }}>
          {SERVICES.map((s) => (
            <ServiceTile key={s.title} {...s} onNavigate={onNavigate} />
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section bg="safety-orange" narrow style={{ textAlign:'center', position:'relative', overflow:'hidden' }}>
        <img src="../../assets/brand/cow.png" alt="" aria-hidden="true" style={{
          position:'absolute', left:'-30px', bottom:'-12px',
          width:'clamp(120px, 14vw, 180px)', height:'auto',
          transform:'scaleX(-1)', opacity:0.96,
          filter:'drop-shadow(0 6px 10px rgba(83,35,0,0.28))',
          pointerEvents:'none',
        }} />
        <h2 style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(2rem, 4vw, 3rem)', textTransform:'uppercase', color:'var(--concrete-white)', margin:'0 0 1rem', letterSpacing:'0.02em', position:'relative' }}>
          Tired of watching cows slip?
        </h2>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'1.25rem', lineHeight:1.6, color:'var(--concrete-white)', margin:'0 0 2rem', position:'relative' }}>
          One call and we'll sort it. No obligation — just a straight conversation about what needs doing.
        </p>
        <div style={{ display:'inline-flex', gap:'0.75rem', flexWrap:'wrap', justifyContent:'center', position:'relative' }}>
          <Button variant="ghost" href="#/contact" onClick={() => onNavigate('#/contact')}>Get a Quote</Button>
          <Button variant="ghost" href="tel:+6427474775">Call Scott: 0274 747 775</Button>
        </div>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'1rem', color:'var(--concrete-white)', margin:'2rem 0 0', opacity:0.9 }}>
          New Zealand owned and operated.
        </p>
      </Section>
    </main>
  );
}

Object.assign(window, { HomePage, SERVICES });
