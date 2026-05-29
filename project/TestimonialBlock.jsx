// TestimonialBlock — quote + attribution. Used inline or inside a Card.

function TestimonialBlock({ quote, attribution, business, dark = false }) {
  const quoteColor = dark ? 'var(--concrete-white)' : 'var(--text-main)';
  const attrColor = dark ? 'var(--teal)' : 'var(--deep-purple)';
  const bizColor = dark ? 'rgba(255,255,255,0.65)' : 'var(--on-surface-variant)';
  return (
    <blockquote style={{ margin: 0 }}>
      <p style={{
        fontFamily: 'var(--font-body)', fontSize: '1.25rem', lineHeight: 1.6,
        fontStyle: 'italic', color: quoteColor, margin: '0 0 0.75rem', textAlign: "center"
      }}>"{quote}"</p>
      <cite style={{
        fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 700,
        color: attrColor, fontStyle: 'normal', display: 'block', lineHeight: 1.3, textAlign: "center"
      }}>— {attribution}</cite>
      {business &&
      <div style={{
        fontFamily: 'var(--font-body)', fontSize: '0.875rem', fontWeight: 400,
        color: bizColor, marginTop: 2, lineHeight: 1.3
      }}>{business}</div>
      }
    </blockquote>);

}

Object.assign(window, { TestimonialBlock });