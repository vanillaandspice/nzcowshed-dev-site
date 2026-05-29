// Footer — 3-column deep-purple footer + bottom strip
// Mirrors src/components/layout/Footer.tsx

const FOOTER_LINKS = {
  services: [
    { label: 'Cowshed Grooving',           href: '#/services/cowshed-grooving' },
    { label: 'Yards',                       href: '#/yards' },
    { label: 'Car Parks',                   href: '#/car-parks' },
    { label: 'Boat Ramps & Marine Docks',   href: '#/boat-ramps-marine-docks' },
  ],
  company: [
    { label: 'About',        href: '#/about' },
    { label: 'Testimonials', href: '#/testimonials' },
    { label: 'Our Work',     href: '#/our-work' },
  ],
};

function FooterColumn({ heading, children }) {
  return (
    <div>
      <h3 style={{
        fontFamily: 'var(--font-heading)', fontSize: '1.125rem',
        letterSpacing: '0.05em', color: 'var(--teal)',
        textTransform: 'uppercase', margin: '0 0 1rem',
      }}>{heading}</h3>
      {children}
    </div>
  );
}

function FooterLink({ href, onClick, children }) {
  return (
    <a href={href} onClick={onClick} style={{
      fontFamily: 'var(--font-body)', fontSize: '1rem',
      color: 'rgba(255,255,255,0.8)', textDecoration: 'none',
      display: 'block', marginBottom: 4,
    }}
    onMouseEnter={(e)=>e.currentTarget.style.color='var(--teal)'}
    onMouseLeave={(e)=>e.currentTarget.style.color='rgba(255,255,255,0.8)'}>
      {children}
    </a>
  );
}

function Footer({ onNavigate }) {
  const go = (href) => (e) => { e.preventDefault(); onNavigate(href); };
  return (
    <footer style={{ background: 'var(--deep-purple)', color: 'var(--concrete-white)' }}>
      {/* Grooved-surface texture strip — visual link to the product */}
      <div aria-hidden="true" style={{
        height: 40,
        background: 'center / cover no-repeat url(../../assets/brand/grooved-surface-raw.png)',
        opacity: 0.5,
        borderBottom: '3px solid var(--teal)',
      }} />
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: 'var(--space-section) var(--space-grid-margin)',
      }}>
        {/* Brand lockup */}
        <a href="#/" onClick={go('#/')} style={{ display: 'block', width: 'fit-content', margin: '0 auto 2.5rem' }}>
          <img src="../../assets/brand/banner-logo.png" alt="NZ Cowshed Groovers — anti-slip surface" style={{
            display: 'block', width: 'min(420px, 80vw)', height: 'auto',
            borderRadius: 'var(--radius-lg)',
            border: '3px solid var(--teal)',
          }} />
        </a>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 'var(--space-stack-lg)',
        }}>
          <FooterColumn heading="Services">
            {FOOTER_LINKS.services.map((l) => (
              <FooterLink key={l.href} href={l.href} onClick={go(l.href)}>{l.label}</FooterLink>
            ))}
          </FooterColumn>
          <FooterColumn heading="Company">
            {FOOTER_LINKS.company.map((l) => (
              <FooterLink key={l.href} href={l.href} onClick={go(l.href)}>{l.label}</FooterLink>
            ))}
          </FooterColumn>
          <FooterColumn heading="Contact">
            <FooterLink href="tel:+6427474775">0274 747 775</FooterLink>
            <FooterLink href="mailto:info@nzcowshedgroovers.co.nz">info@nzcowshedgroovers.co.nz</FooterLink>
            <div style={{ marginTop: '1rem' }}>
              <Button variant="secondary" href="#/contact" onClick={() => onNavigate('#/contact')}>Enquire Now</Button>
            </div>
          </FooterColumn>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(42,157,143,0.3)' }}>
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          padding: '1rem var(--space-grid-margin)',
          display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
          gap: '0.5rem',
          fontFamily: 'var(--font-body)', fontSize: '1rem',
          color: 'var(--outline-variant)',
        }}>
          <span>© {new Date().getFullYear()} NZ Cowshed Groovers. New Zealand owned and operated.</span>
          <span>Anti-slip surface™</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Footer, FOOTER_LINKS });
