// Header — sticky deep-purple header w/ logo, nav, services dropdown, primary CTA, mobile menu
// Mirrors src/components/layout/Header.tsx

const NAV_LINKS = [
{ label: 'Services', href: '#/services', dropdown: [
  { label: 'Cowshed Grooving', href: '#/services/cowshed-grooving' },
  { label: 'Yards', href: '#/yards' },
  { label: 'Car Parks', href: '#/car-parks' },
  { label: 'Boat Ramps & Marine Docks', href: '#/boat-ramps-marine-docks' }]
},
{ label: 'Our Work', href: '#/our-work' },
{ label: 'Testimonials', href: '#/testimonials' },
{ label: 'Contact', href: '#/contact' }];


function Header({ onNavigate, route }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const isMobile = window.innerWidth < 768;

  const go = (href) => (e) => {e.preventDefault();setMenuOpen(false);setDropdownOpen(false);onNavigate(href);};

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'var(--deep-purple)'
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '0 var(--space-grid-margin)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 64
      }}>
        <a href="#/" onClick={go('#/')} style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, textDecoration: 'none' }}>
          <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--safety-orange)', fontSize: 20, letterSpacing: '0.05em', textTransform: 'uppercase' }}>NZ Cowshed</span>
          <span style={{ fontFamily: 'var(--font-heading)', color: 'var(--concrete-white)', fontSize: 24, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Groovers</span>
        </a>

        <nav style={{ display: isMobile ? 'none' : 'flex', alignItems: 'center', gap: 32 }}>
          {NAV_LINKS.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.href} style={{ position: 'relative' }}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}>
                  <button onClick={go(link.href)} style={{
                    fontFamily: 'var(--font-heading)', fontSize: '1.125rem', letterSpacing: '0.05em',
                    color: 'var(--concrete-white)', textTransform: 'uppercase',
                    background: 'transparent', border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: 4, padding: 0
                  }}>{link.label} <span>▾</span></button>
                  {dropdownOpen &&
                  <div style={{
                    position: 'absolute', top: '100%', left: 0, marginTop: 4,
                    background: 'var(--deep-purple)', border: '1px solid var(--teal)',
                    minWidth: 240, boxShadow: '0 6px 16px rgba(0,0,0,0.12)', zIndex: 60
                  }}>
                      {link.dropdown.map((item) =>
                    <a key={item.href} href={item.href} onClick={go(item.href)} style={{
                      display: 'block', padding: '0.75rem 1rem',
                      fontFamily: 'var(--font-body)', fontSize: '1rem',
                      color: 'var(--concrete-white)', textDecoration: 'none'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(42,157,143,0.2)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>{item.label}</a>
                    )}
                    </div>
                  }
                </div>);

            }
            return (
              <a key={link.href} href={link.href} onClick={go(link.href)} style={{
                fontFamily: 'var(--font-heading)', fontSize: '1.125rem', letterSpacing: '0.05em',
                color: 'var(--concrete-white)', textTransform: 'uppercase',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--teal)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--concrete-white)'}>{link.label}</a>);

          })}
        </nav>

        <a href="#/contact" onClick={go('#/contact')} style={{
          display: isMobile ? 'none' : 'inline-flex', alignItems: 'center',
          background: 'var(--safety-orange)',
          fontFamily: 'var(--font-heading)', fontSize: '1.125rem', letterSpacing: '0.05em',
          textTransform: 'uppercase', padding: '0.75rem 1.5rem',
          textDecoration: 'none', borderRadius: 0, color: "rgb(59, 31, 110)"
        }}
        onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(0.9)'}
        onMouseLeave={(e) => e.currentTarget.style.filter = 'none'}>
          Get a Quote
        </a>

        <button onClick={() => setMenuOpen(!menuOpen)} style={{
          display: isMobile ? 'inline-flex' : 'none',
          background: 'transparent', border: 'none', color: 'var(--concrete-white)',
          fontSize: 24, cursor: 'pointer', padding: 8
        }} aria-label="Toggle menu">{menuOpen ? '✕' : '☰'}</button>
      </div>

      {menuOpen && isMobile &&
      <div style={{
        position: 'fixed', inset: 0, top: 64, background: 'var(--deep-purple)',
        zIndex: 40, padding: 'var(--space-grid-margin)',
        display: 'flex', flexDirection: 'column', gap: 16, overflowY: 'auto'
      }}>
          {NAV_LINKS.map((link) =>
        <a key={link.href} href={link.href} onClick={go(link.href)} style={{
          fontFamily: 'var(--font-heading)', fontSize: '2rem',
          color: 'var(--concrete-white)', textTransform: 'uppercase',
          padding: '0.5rem 0', borderBottom: '1px solid rgba(42,157,143,0.3)',
          textDecoration: 'none'
        }}>{link.label}</a>
        )}
          <div style={{ marginTop: 'auto', paddingTop: 16 }}>
            <Button variant="primary" href="#/contact" onClick={() => {setMenuOpen(false);onNavigate('#/contact');}} fullWidth>
              Get a Quote
            </Button>
          </div>
        </div>
      }
    </header>);

}

Object.assign(window, { Header, NAV_LINKS });