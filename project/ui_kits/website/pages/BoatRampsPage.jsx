// BoatRampsPage — service detail for boat ramps & marine docks

function BoatRampsPage({ onNavigate }) {
  return (
    <main>
      <Section bg="deep-purple">
        <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:'var(--space-stack-lg)', alignItems:'center' }}>
          <div>
            <p style={{ fontFamily:'var(--font-heading)', fontSize:'1.125rem', letterSpacing:'0.05em', color:'var(--teal)', textTransform:'uppercase', margin:'0 0 0.75rem' }}>Services / Boat Ramps &amp; Marine Docks</p>
            <h1 style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(2.25rem, 5vw, 3.5rem)', color:'var(--concrete-white)', textTransform:'uppercase', letterSpacing:'0.02em', margin:'0 0 1rem' }}>
              Safer boat ramps
            </h1>
            <p style={{ fontFamily:'var(--font-body)', fontSize:'1.25rem', lineHeight:1.6, color:'rgba(255,255,255,0.9)', margin:'0 0 1.5rem' }}>
              Boat ramps can be dangerous. Grooving slippery boat-ramp surfaces prevents falls and makes it easier to gain traction when putting in and taking out boats.
            </p>
            <Button variant="primary" href="#/contact" onClick={() => onNavigate('#/contact')} style={{ borderColor: 'rgb(59, 31, 110)' }}>Free Quote</Button>
          </div>
          <div style={{ background:`#000 center/cover url(../../assets/photos/boatramp-grooved.jpg)`, aspectRatio:'4/3' }} />
        </div>
      </Section>

      <Section bg="concrete-white" narrow>
        <h2 style={{ fontFamily:'var(--font-heading)', fontSize:'2rem', color:'var(--deep-purple)', textTransform:'uppercase', letterSpacing:'0.02em', margin:'0 0 1rem' }}>Safer boats. Safer people.</h2>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'1.125rem', lineHeight:1.6, margin:'0 0 1rem' }}>
          Boat safety and water safety are hot topics around New Zealand. Safe boat ramps are better boat ramps.
        </p>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'1.125rem', lineHeight:1.6, margin:0 }}>
          NZ Cowshed Groovers can improve your boat ramp wherever you are in New Zealand.
        </p>
      </Section>

      <Section bg="surface" narrow>
        <h3 style={{ fontFamily:'var(--font-heading)', fontSize:'1.5rem', color:'var(--deep-purple)', textTransform:'uppercase', letterSpacing:'0.02em', margin:'0 0 1rem' }}>What you get</h3>
        <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'0.75rem' }}>
          {[
            'Crosshatch grooves at the waterline — grip when wet, grip when dry',
            'Stops algae and slime build-up on the ramp surface',
            'Traction for trailer wheels and feet alike',
            'Done in a day for most public ramps',
            '100% lifetime guarantee — same as every other job',
          ].map((line, i) => (
            <li key={i} style={{ fontFamily:'var(--font-body)', fontSize:'1.125rem', lineHeight:1.5, paddingLeft:'1.5rem', position:'relative' }}>
              <span style={{ position:'absolute', left:0, color:'var(--teal)', fontWeight:700 }}>—</span> {line}
            </li>
          ))}
        </ul>
      </Section>

      <Section bg="safety-orange" narrow style={{ textAlign:'center' }}>
        <Button variant="ghost" href="#/contact" onClick={() => onNavigate('#/contact')}>Free Quote</Button>
      </Section>
    </main>
  );
}

Object.assign(window, { BoatRampsPage });
