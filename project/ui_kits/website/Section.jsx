// Section — full-bleed section with alternating background + 5rem vertical padding
// Mirrors src/components/layout/SectionContainer.tsx

function Section({ bg = 'surface', children, id, style = {}, narrow = false }) {
  const bgMap = {
    'deep-purple':     { background: 'var(--deep-purple)', color: 'var(--concrete-white)' },
    'surface':         { background: 'var(--surface)', color: 'var(--text-main)' },
    'concrete-white':  { background: 'var(--concrete-white)', color: 'var(--text-main)' },
    'safety-orange':   { background: 'var(--safety-orange)', color: 'var(--concrete-white)' },
    'inverse-surface': { background: 'var(--inverse-surface)', color: 'var(--concrete-white)' },
    'primary':         { background: 'var(--primary)', color: 'var(--concrete-white)' },
  };
  return (
    <section id={id} style={{
      padding: 'var(--space-section) var(--space-grid-margin)',
      ...bgMap[bg],
      ...style,
    }}>
      <div style={{ maxWidth: narrow ? 720 : 1200, margin: '0 auto', width: '100%' }}>
        {children}
      </div>
    </section>
  );
}

Object.assign(window, { Section });
