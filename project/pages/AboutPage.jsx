// AboutPage — brand + history

function AboutPage({ onNavigate }) {
  return (
    <main>
      <Section bg="deep-purple">
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 'var(--space-stack-lg)', alignItems: 'center' }}>
          <div>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.125rem', letterSpacing: '0.05em', color: 'var(--teal)', textTransform: 'uppercase', margin: '0 0 0.75rem' }}>About</p>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', color: 'var(--concrete-white)', textTransform: 'uppercase', letterSpacing: '0.02em', margin: '0 0 1rem' }}>
              The original NZ groover
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.25rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.9)', margin: 0 }}>Neil Taylor developed the technique. and designed the machines for the job.  Now Son in Law Scott is on the tools, Neil still keeps an eye on the work, making sure it meets the high standards he set.

            </p>
          </div>
          <div style={{ background: `#000 center/cover url(../../assets/brand/truck-scott.jpg)`, aspectRatio: '4/3', borderRadius: 'var(--radius)' }} />
        </div>
      </Section>

      <Section bg="concrete-white" narrow>
        <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--deep-purple)', textTransform: 'uppercase', letterSpacing: '0.02em', margin: '0 0 1rem' }}>The history</h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', lineHeight: 1.6, margin: '0 0 1rem' }}>
          NZ Cowshed Groovers was founded by <strong>Neil Taylor</strong>, who developed the grooving technique and built the custom machinery still in use today. Neil's work is recognised across the North Island dairy community — the technique itself is a barrier to entry for competitors.
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', lineHeight: 1.6, margin: '0 0 1rem' }}>
          <strong>Scott Coker</strong> is the incoming owner-operator. Scott is married to Neil's daughter Sarsha — the business continues with family lineage. Scott brings two decades' experience running fabrication and franchise businesses, and is committed to keeping every part of the technique exactly as Neil developed it.
        </p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', lineHeight: 1.6, margin: 0 }}>You'll still get the same wet-saw method, the same lifetime guarantee, and an 027 number that rings the operator. The voice on the other end is just Scott now.

        </p>
      </Section>

      <Section bg="surface" narrow>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--deep-purple)', textTransform: 'uppercase', letterSpacing: '0.02em', margin: '0 0 1rem' }}>How we work</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
          'Wet-saw diamond blade — proprietary technique developed by Neil Taylor',
          'Ride-on machinery — built for NZ farm conditions',
          '100% lifetime guarantee on every groove',
          'North Island focus — nationwide capability',
          'Single-operator + casual crew — direct line to Scott on every job'].
          map((line, i) =>
          <li key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', lineHeight: 1.5, paddingLeft: '1.5rem', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--teal)', fontWeight: 700 }}>—</span> {line}
            </li>
          )}
        </ul>
      </Section>

      <Section bg="safety-orange" narrow style={{ textAlign: 'center' }}>
        <Button variant="ghost" href="#/contact" onClick={() => onNavigate('#/contact')}>Get a Quote</Button>
      </Section>
    </main>);

}

Object.assign(window, { AboutPage });