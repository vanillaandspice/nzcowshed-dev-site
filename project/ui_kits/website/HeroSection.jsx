// HeroSection — homepage hero block
// Big Bebas H1, lead sub, primary CTA — on the branded grooved-landscape backdrop
// with the cow mascot breaking the bottom edge.

function HeroSection({ onNavigate }) {
  return (
    <section style={{
      position: 'relative',
      background: 'var(--deep-purple)',
      color: 'var(--concrete-white)',
      padding: '5rem var(--space-grid-margin) 6.5rem',
      textAlign: 'center',
      overflow: 'visible',
      isolation: 'isolate',
    }}>
      {/* Branded grooved-landscape backdrop */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: -2,
        background: 'center bottom / cover no-repeat url(../../assets/brand/landscape.png)',
      }} />
      {/* Purple scrim keeps Bebas white legible & brand purple dominant */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, zIndex: -1,
        background: 'linear-gradient(180deg, rgba(59,31,110,0.86) 0%, rgba(59,31,110,0.78) 55%, rgba(59,31,110,0.92) 100%)',
      }} />

      <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative' }}>
        <h1 style={{
          fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.25rem, 6vw, 4.5rem)',
          lineHeight: 1.1, letterSpacing: '0.02em',
          color: 'var(--concrete-white)', textTransform: 'uppercase',
          margin: '0 0 1rem',
          textShadow: '0 2px 12px rgba(37,2,89,0.45)',
        }}>Stop Losing Money to Slipping Cows</h1>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: '1.25rem', lineHeight: 1.6,
          color: 'rgba(255,255,255,0.92)', maxWidth: 640, margin: '0 auto 2rem',
        }}>We cut grooves into your concrete so cows move safely, milk faster, and you get on with your day.</p>
        <Button variant="primary" href="#/contact" onClick={() => onNavigate('#/contact')}>Get a Quote</Button>
      </div>

      {/* Cow mascot — breaks the bottom edge into the next section */}
      <img src="../../assets/brand/cow.png" alt="" aria-hidden="true" style={{
        position: 'absolute', right: 'clamp(8px, 5vw, 80px)', bottom: '-2px',
        width: 'clamp(140px, 18vw, 230px)', height: 'auto',
        filter: 'drop-shadow(0 6px 10px rgba(37,2,89,0.35))',
        pointerEvents: 'none', zIndex: 2,
      }} />
    </section>
  );
}

Object.assign(window, { HeroSection });
