// CarParksPage — service detail for commercial car parks / loading bays

function CarParksPage({ onNavigate }) {
  return (
    <main>
      <Section bg="deep-purple">
        <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:'var(--space-stack-lg)', alignItems:'center' }}>
          <div>
            <p style={{ fontFamily:'var(--font-heading)', fontSize:'1.125rem', letterSpacing:'0.05em', color:'var(--teal)', textTransform:'uppercase', margin:'0 0 0.75rem' }}>Services / Car Parks</p>
            <h1 style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(2.25rem, 5vw, 3.5rem)', color:'var(--concrete-white)', textTransform:'uppercase', letterSpacing:'0.02em', margin:'0 0 1rem' }}>
              Car parks that grip
            </h1>
            <p style={{ fontFamily:'var(--font-body)', fontSize:'1.25rem', lineHeight:1.6, color:'rgba(255,255,255,0.9)', margin:0 }}>
              Wet concrete car parks, school footpaths, commercial loading bays. Grooved so people, vehicles, and forklifts keep their footing in every condition.
            </p>
          </div>
          <div style={{ background:`#000 center/cover url(../../assets/photos/cowshed-2b.jpg)`, aspectRatio:'4/3' }} />
        </div>
      </Section>

      <Section bg="concrete-white" narrow>
        <p style={{ fontFamily:'var(--font-heading)', fontSize:'1.125rem', letterSpacing:'0.05em', color:'var(--safety-orange)', textTransform:'uppercase', margin:'0 0 0.5rem' }}>Case study</p>
        <h2 style={{ fontFamily:'var(--font-heading)', fontSize:'2rem', color:'var(--deep-purple)', textTransform:'uppercase', letterSpacing:'0.02em', margin:'0 0 1.5rem', lineHeight:1.15 }}>
          Airways NZ — slippery car park grooved &amp; re-opened within 48 hours of closure
        </h2>

        <h3 style={{ fontFamily:'var(--font-heading)', fontSize:'1.25rem', color:'var(--deep-purple)', textTransform:'uppercase', letterSpacing:'0.05em', margin:'0 0 0.5rem' }}>The problem</h3>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'1.125rem', lineHeight:1.6, margin:'0 0 1.5rem' }}>
          This national organisation, which is very OSH conscious, immediately closed the car park when a staff member slipped — and kept it closed until the slippery surface could be fixed.
        </p>

        <h3 style={{ fontFamily:'var(--font-heading)', fontSize:'1.25rem', color:'var(--deep-purple)', textTransform:'uppercase', letterSpacing:'0.05em', margin:'0 0 0.5rem' }}>The solution</h3>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'1.125rem', lineHeight:1.6, margin:'0 0 1.5rem' }}>
          NZ Cowshed Groovers were at the airport the next day to groove the car park.
        </p>

        <p style={{
          fontFamily:'var(--font-heading)', fontSize:'1.75rem', letterSpacing:'0.02em',
          color:'var(--safety-orange)', textTransform:'uppercase', margin:'1.5rem 0 0',
          borderTop:'3px solid var(--teal)', paddingTop:'1rem',
        }}>
          Re-opened with a new non-slip surface within 48 hours.
        </p>
      </Section>

      <Section bg="surface" narrow>
        <Card><TestimonialBlock quote="Floor in the loading bay was causing forklifts to slip." attribution="Inghams Chickens yard" business="Waikato" /></Card>
      </Section>

      <Section bg="safety-orange" narrow style={{ textAlign:'center' }}>
        <Button variant="ghost" href="#/contact" onClick={() => onNavigate('#/contact')}>Free Quote</Button>
      </Section>
    </main>
  );
}

Object.assign(window, { CarParksPage });
