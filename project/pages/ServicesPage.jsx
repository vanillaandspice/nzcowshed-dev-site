// ServicesPage — services hub: 4 surface tiles + intro

function ServicesPage({ onNavigate }) {
  return (
    <main>
      <Section bg="deep-purple" narrow style={{ textAlign: 'center' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: 'var(--concrete-white)', textTransform: 'uppercase', letterSpacing: '0.02em', margin: '0 0 1rem' }}>
          Concrete grooving services
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.9)', lineHeight: 1.6, margin: 0, fontWeight: "700", fontSize: "20px" }}>One method — wet-saw diamond blade. Many surfaces.
More Grip - Less Slip
</p>
      </Section>

      <Section bg="surface">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-gutter)' }}>
          {SERVICES.map((s) =>
          <ServiceTile key={s.title} {...s} onNavigate={onNavigate} />
          )}
        </div>
      </Section>

      <Section bg="concrete-white" narrow>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--deep-purple)', textTransform: 'uppercase', letterSpacing: '0.02em', margin: '0 0 1rem' }}>
          One method, every surface
        </h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', lineHeight: 1.6, margin: '0 0 1rem' }}>
          We use a ride-on wet-saw with diamond blades to grind crosshatch grooves directly into your existing concrete. Dust-free. Chip-free. No chemicals, no new surface to lay, no major shutdown.
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', lineHeight: 1.6, margin: '0 0 1.5rem' }}>
          The technique was developed by Neil Taylor over decades. Grooves last 10–12 years with zero maintenance. Every job carries our 100% lifetime guarantee.
        </p>
        <Button variant="primary" href="#/contact" onClick={() => onNavigate('#/contact')}>Request a callback &amp; quote</Button>
      </Section>
    </main>);

}

Object.assign(window, { ServicesPage });