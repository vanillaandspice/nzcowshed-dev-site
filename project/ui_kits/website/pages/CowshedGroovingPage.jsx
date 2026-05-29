// CowshedGroovingPage — primary service detail

function CowshedGroovingPage({ onNavigate }) {
  return (
    <main>
      <Section bg="deep-purple">
        <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:'var(--space-stack-lg)', alignItems:'center' }}>
          <div>
            <p style={{ fontFamily:'var(--font-heading)', fontSize:'1.125rem', letterSpacing:'0.05em', color:'var(--teal)', textTransform:'uppercase', margin:'0 0 0.75rem' }}>Services / Cowshed Grooving</p>
            <h1 style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(2.25rem, 5vw, 3.5rem)', color:'var(--concrete-white)', textTransform:'uppercase', letterSpacing:'0.02em', margin:'0 0 1rem' }}>
              Cowsheds that don't lose cows
            </h1>
            <p style={{ fontFamily:'var(--font-body)', fontSize:'1.25rem', lineHeight:1.6, color:'rgba(255,255,255,0.9)', margin:'0 0 1.5rem' }}>
              The job we do day-in, day-out. Cowshed floors, races, and yards grooved so cows walk in confidently and out faster.
            </p>
            <Button variant="primary" href="#/contact" onClick={() => onNavigate('#/contact')}>Request a quote</Button>
          </div>
          <div style={{ background:`#000 center/cover url(../../assets/photos/cowshed-grooving-hero.jpg)`, aspectRatio:'4/3' }} />
        </div>
      </Section>

      <Section bg="concrete-white" narrow>
        <h2 style={{ fontFamily:'var(--font-heading)', fontSize:'2rem', color:'var(--deep-purple)', textTransform:'uppercase', letterSpacing:'0.02em', margin:'0 0 1rem' }}>What you get</h2>
        <ul style={{ listStyle:'none', padding:0, margin:'0 0 2rem', display:'flex', flexDirection:'column', gap:'0.75rem' }}>
          {[
            'Wet-saw diamond blade cutting — no dust, no chip-out, no chemicals.',
            'Crosshatch grooves: traction in every direction, drains water off the surface.',
            '20–30 minutes faster milking per session (up to 1 hour/day for a 3-person team).',
            'Grooves last 10–12 years. Zero maintenance.',
            '100% lifetime guarantee. No competitor matches this.',
          ].map((line, i) => (
            <li key={i} style={{ fontFamily:'var(--font-body)', fontSize:'1.125rem', lineHeight:1.5, paddingLeft:'1.5rem', position:'relative' }}>
              <span style={{ position:'absolute', left:0, color:'var(--teal)', fontWeight:700 }}>—</span> {line}
            </li>
          ))}
        </ul>
      </Section>

      <Section bg="surface" narrow>
        <h2 style={{ fontFamily:'var(--font-heading)', fontSize:'2rem', color:'var(--deep-purple)', textTransform:'uppercase', letterSpacing:'0.02em', margin:'0 0 1.5rem' }}>What farmers say</h2>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--space-gutter)' }}>
          <Card><TestimonialBlock quote="Completely different herd to milk. Cows are flowing through the shed much better. Grooving our yard meant no more slips and faster milking times." attribution="Trevor" business="Patetonga" /></Card>
          <Card><TestimonialBlock quote="Water runs off the surface better, no algae build up. We used to have bulls slip every day, but now they don't slip at all." attribution="Lance Pettigrew" business="Livestock Improvements" /></Card>
        </div>
      </Section>

      <Section bg="safety-orange" narrow style={{ textAlign:'center' }}>
        <h2 style={{ fontFamily:'var(--font-heading)', fontSize:'2rem', color:'var(--concrete-white)', textTransform:'uppercase', letterSpacing:'0.02em', margin:'0 0 1rem' }}>Get a number for your shed</h2>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'1.125rem', lineHeight:1.6, color:'var(--concrete-white)', margin:'0 0 1.5rem' }}>
          Grooving runs $16–$48 per m² depending on access and condition. Send us a rough size and we'll come back with a real number.
        </p>
        <Button variant="ghost" href="#/contact" onClick={() => onNavigate('#/contact')} style={{ borderColor: 'rgb(59, 31, 110)' }}>Get a Quote</Button>
      </Section>
    </main>
  );
}

Object.assign(window, { CowshedGroovingPage });
