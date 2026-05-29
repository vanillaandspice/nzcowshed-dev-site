// StatCallout — big-number proof block (15,000 movements)
// Used as the standalone durability-proof section

function StatCallout({ number, label, sublabel, attribution, business }) {
  return (
    <section style={{
      background: 'var(--primary)',
      color: 'var(--concrete-white)',
      padding: '4rem var(--space-grid-margin)',
      textAlign: 'center'
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <p style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(4rem, 12vw, 8rem)', lineHeight: 0.9,
          color: 'var(--teal)', margin: 0, letterSpacing: '0.02em'
        }}>{number}</p>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '1.25rem',
          color: 'var(--concrete-white)', margin: '0.75rem 0 0'
        }}>{label}</p>
        <p style={{
          fontFamily: 'var(--font-body)',
          color: 'var(--concrete-white)', fontWeight: 700, margin: '0.25rem 0 0', fontSize: "6px"
        }}>{sublabel}</p>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '1rem',
          color: 'rgba(255,255,255,0.7)', margin: '0.5rem 0 0', fontStyle: 'italic'
        }}>{attribution}</p>
        {business &&
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '0.875rem',
          color: 'rgba(255,255,255,0.55)', margin: '0.125rem 0 0'
        }}>{business}</p>
        }
      </div>
    </section>);

}

Object.assign(window, { StatCallout });