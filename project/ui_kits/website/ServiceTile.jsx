// ServiceTile — photo + caption tile for the "where we work" grid

function ServiceTile({ photo, title, blurb, href, onNavigate }) {
  const go = (e) => { if (href && onNavigate) { e.preventDefault(); onNavigate(href); } };
  return (
    <a href={href} onClick={go} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
      <div style={{
        background: 'var(--concrete-white)',
        borderTop: '3px solid var(--teal)',
        overflow: 'hidden',
        transition: 'filter 150ms ease, transform 150ms ease',
      }}
      onMouseEnter={(e)=>e.currentTarget.style.filter='brightness(0.95)'}
      onMouseLeave={(e)=>e.currentTarget.style.filter='none'}>
        <div style={{
          aspectRatio: '4 / 3', background: `#1a1a1a center/cover url(${photo})`,
        }} />
        <div style={{ padding: '1.25rem 1.25rem 1.5rem' }}>
          <h4 style={{
            fontFamily: 'var(--font-heading)', fontSize: '1.75rem',
            letterSpacing: '0.02em', color: 'var(--deep-purple)',
            textTransform: 'uppercase', margin: '0 0 0.5rem',
          }}>{title}</h4>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: 1.5,
            color: 'var(--text-main)', margin: 0,
          }}>{blurb}</p>
        </div>
      </div>
    </a>
  );
}

Object.assign(window, { ServiceTile });
