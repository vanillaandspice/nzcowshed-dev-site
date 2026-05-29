// YardsPage — service detail for cattle yards / sale yards

function YardsPage({ onNavigate }) {
  return (
    <main>
      <Section bg="deep-purple">
        <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:'var(--space-stack-lg)', alignItems:'center' }}>
          <div>
            <p style={{ fontFamily:'var(--font-heading)', fontSize:'1.125rem', letterSpacing:'0.05em', color:'var(--teal)', textTransform:'uppercase', margin:'0 0 0.75rem' }}>Services / Yards</p>
            <h1 style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(2.25rem, 5vw, 3.5rem)', color:'var(--concrete-white)', textTransform:'uppercase', letterSpacing:'0.02em', margin:'0 0 1rem' }}>
              Yards that grip
            </h1>
            <p style={{ fontFamily:'var(--font-body)', fontSize:'1.25rem', lineHeight:1.6, color:'rgba(255,255,255,0.9)', margin:'0 0 1.5rem' }}>
              Concrete grooving is the fastest, safest &amp; most efficient way to turn your existing concrete into a long lasting non slip surface.
            </p>
            <Button variant="primary" href="#/contact" onClick={() => onNavigate('#/contact')}>Free Quote</Button>
          </div>
          <div style={{ background:`#000 center/cover url(../../assets/photos/yard-grooved.jpg)`, aspectRatio:'4/3' }} />
        </div>
      </Section>

      <Section bg="concrete-white" narrow>
        <h2 style={{ fontFamily:'var(--font-heading)', fontSize:'2rem', color:'var(--deep-purple)', textTransform:'uppercase', letterSpacing:'0.02em', margin:'0 0 1rem' }}>What we groove</h2>
        <ul style={{ listStyle:'none', padding:0, margin:'0 0 2rem', display:'flex', flexDirection:'column', gap:'0.75rem' }}>
          {[
            'Drafting yards — easier handling, less stress on stock',
            'Loading yards — cows stay on their feet up the ramp',
            'Sale yards — proven in commercial multi-truck environments',
            'Feedpads, underpasses, races — anywhere concrete gets wet',
          ].map((line, i) => (
            <li key={i} style={{ fontFamily:'var(--font-body)', fontSize:'1.125rem', lineHeight:1.5, paddingLeft:'1.5rem', position:'relative' }}>
              <span style={{ position:'absolute', left:0, color:'var(--teal)', fontWeight:700 }}>—</span> {line}
            </li>
          ))}
        </ul>
      </Section>

      <Section bg="surface" narrow>
        <Card><TestimonialBlock quote="Cows were slipping when going through yards. Very pleased — prevented the cows from slipping over. It has been a 100% improvement." attribution="John" business="Frankton Sale Yards, Otorohanga" /></Card>
      </Section>

      <Section bg="safety-orange" narrow style={{ textAlign:'center' }}>
        <Button variant="ghost" href="#/contact" onClick={() => onNavigate('#/contact')}>Free Quote</Button>
      </Section>
    </main>
  );
}

Object.assign(window, { YardsPage });
