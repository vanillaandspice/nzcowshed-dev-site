// AboutPage — brand + history

function AboutPage({ onNavigate }) {
  const [zoom, setZoom] = React.useState(false);
  const CLIPPING_SRC = '../../assets/brand/neil-clipping.png';
  const CLIPPING_TITLE = 'Neil Taylor working on the Waikato Student Union, long before he set up NZ Cowshed Groovers.';

  React.useEffect(() => {
    if (!zoom) return;
    const onKey = (e) => { if (e.key === 'Escape') setZoom(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [zoom]);

  return (
    <main>
      <Section bg="deep-purple">
        <div style={{ display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:'var(--space-stack-lg)', alignItems:'center' }}>
          <div>
            <p style={{ fontFamily:'var(--font-heading)', fontSize:'1.125rem', letterSpacing:'0.05em', color:'var(--teal)', textTransform:'uppercase', margin:'0 0 0.75rem' }}>About</p>
            <h1 style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(2.25rem, 5vw, 3.5rem)', color:'var(--concrete-white)', textTransform:'uppercase', letterSpacing:'0.02em', margin:'0 0 1rem' }}>
              The original NZ groover
            </h1>
            <p style={{ fontFamily:'var(--font-body)', fontSize:'1.25rem', lineHeight:1.6, color:'rgba(255,255,255,0.9)', margin:0 }}>
              Neil Taylor developed the technique. The machines were built for the job. We've been on NZ farms for decades.
            </p>
          </div>
          <div style={{ background:`#000 center/cover url(../../assets/brand/truck-scott.jpg)`, aspectRatio:'4/3', borderRadius:'var(--radius)' }} />
        </div>
      </Section>

      <Section bg="concrete-white" narrow>
        <h2 style={{ fontFamily:'var(--font-heading)', fontSize:'2rem', color:'var(--deep-purple)', textTransform:'uppercase', letterSpacing:'0.02em', margin:'0 0 1rem' }}>The history</h2>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'1.125rem', lineHeight:1.6, margin:'0 0 1rem' }}>
          NZ Cowshed Groovers was founded by <strong>Neil Taylor</strong>, who developed the grooving technique and built the custom machinery still in use today. Neil's work is recognised across the North Island dairy community — the technique itself is a barrier to entry for competitors.
        </p>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'1.125rem', lineHeight:1.6, margin:'0 0 1rem' }}>
          <strong>Scott Coker</strong> is the incoming owner-operator. Scott is married to Neil's daughter Sarsha — the business continues with family lineage. Scott brings two decades' experience running fabrication and franchise businesses, and is committed to keeping every part of the technique exactly as Neil developed it.
        </p>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'1.125rem', lineHeight:1.6, margin:0 }}>
          You'll still get the same wet-saw method, the same lifetime guarantee, and a 027 number that rings the operator. The voice on the other end is just Scott now.
        </p>
      </Section>

      <Section bg="surface">
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--space-stack-lg)', alignItems:'center' }}>
          <div>
            <h3 style={{ fontFamily:'var(--font-heading)', fontSize:'1.5rem', color:'var(--deep-purple)', textTransform:'uppercase', letterSpacing:'0.02em', margin:'0 0 1rem' }}>How we work</h3>
            <ul style={{ listStyle:'none', padding:0, margin:0, display:'flex', flexDirection:'column', gap:'0.75rem' }}>
              {[
                'Wet-saw diamond blade — proprietary technique developed by Neil Taylor',
                'Ride-on machinery — built for NZ farm conditions',
                '100% lifetime guarantee on every groove',
                'North Island focus — nationwide capability',
                'Single-operator + casual crew — direct line to Scott on every job',
              ].map((line, i) => (
                <li key={i} style={{ fontFamily:'var(--font-body)', fontSize:'1.125rem', lineHeight:1.5, paddingLeft:'1.5rem', position:'relative' }}>
                  <span style={{ position:'absolute', left:0, color:'var(--teal)', fontWeight:700 }}>—</span> {line}
                </li>
              ))}
            </ul>
          </div>

          <figure style={{ margin:0 }}>
            <button onClick={() => setZoom(true)} aria-label="Enlarge newspaper clipping" style={{
              display:'block', width:'100%', padding:0, border:'1px solid var(--outline-variant)',
              background:'var(--concrete-white)', cursor:'zoom-in', borderRadius:'var(--radius)',
              overflow:'hidden', position:'relative',
            }}>
              <img src={CLIPPING_SRC} alt={CLIPPING_TITLE} style={{ display:'block', width:'100%', height:'auto' }} />
              <span style={{
                position:'absolute', bottom:8, right:8,
                background:'rgba(37,2,89,0.9)', color:'var(--concrete-white)',
                fontFamily:'var(--font-heading)', fontSize:'0.75rem', letterSpacing:'0.05em',
                textTransform:'uppercase', padding:'4px 8px', borderRadius:'var(--radius-sm)',
              }}>Click to enlarge</span>
            </button>
            <figcaption style={{
              fontFamily:'var(--font-body)', fontSize:'0.875rem', lineHeight:1.4,
              color:'var(--on-surface-variant)', margin:'0.75rem 0 0', fontStyle:'italic',
            }}>{CLIPPING_TITLE}</figcaption>
          </figure>
        </div>
      </Section>

      {/* Lightbox */}
      {zoom && (
        <div onClick={() => setZoom(false)} role="dialog" aria-modal="true" aria-label="Newspaper clipping" style={{
          position:'fixed', inset:0, zIndex:200,
          background:'rgba(37,2,89,0.92)', display:'flex', flexDirection:'column',
          alignItems:'center', justifyContent:'center', padding:'var(--space-grid-margin)',
          cursor:'zoom-out',
        }}>
          <button onClick={() => setZoom(false)} aria-label="Close" style={{
            position:'absolute', top:20, right:24, background:'transparent', border:'none',
            color:'var(--concrete-white)', fontSize:32, lineHeight:1, cursor:'pointer',
          }}>✕</button>
          <img src={CLIPPING_SRC} alt={CLIPPING_TITLE} onClick={(e) => e.stopPropagation()} style={{
            maxWidth:'min(1000px, 92vw)', maxHeight:'82vh', width:'auto', height:'auto',
            background:'var(--concrete-white)', border:'3px solid var(--teal)',
            boxShadow:'0 20px 60px rgba(0,0,0,0.45)', cursor:'default',
          }} />
          <p style={{
            fontFamily:'var(--font-body)', fontSize:'1rem', lineHeight:1.4, color:'rgba(255,255,255,0.85)',
            margin:'1rem 0 0', maxWidth:700, textAlign:'center', fontStyle:'italic',
          }}>{CLIPPING_TITLE}</p>
        </div>
      )}

      <Section bg="safety-orange" narrow style={{ textAlign:'center' }}>
        <Button variant="ghost" href="#/contact" onClick={() => onNavigate('#/contact')}>Get a Quote</Button>
      </Section>
    </main>
  );
}

Object.assign(window, { AboutPage });
