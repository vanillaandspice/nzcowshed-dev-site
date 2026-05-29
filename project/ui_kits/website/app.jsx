// App — hash-router + page mounting

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "primaryColor": "#EC7926",
  "accentColor": "#2A9D8F",
  "brandPurple": "#3B1F6E",
  "headingFont": "Bebas Neue"
}/*EDITMODE-END*/;

const HEADING_STACKS = {
  "Bebas Neue": '"Bebas Neue", Impact, "Arial Narrow", sans-serif',
  "Oswald":     '"Oswald", Impact, "Arial Narrow", sans-serif',
  "Anton":      '"Anton", Impact, "Arial Narrow", sans-serif',
};

function useHashRoute() {
  const [hash, setHash] = React.useState(window.location.hash || '#/');
  React.useEffect(() => {
    const onChange = () => { setHash(window.location.hash || '#/'); window.scrollTo(0, 0); };
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return hash;
}

function App() {
  const route = useHashRoute();
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const onNavigate = (href) => { window.location.hash = href; };

  let page;
  if (route === '#/' || route === '#') page = <HomePage onNavigate={onNavigate} />;
  else if (route === '#/services') page = <ServicesPage onNavigate={onNavigate} />;
  else if (route === '#/services/cowshed-grooving') page = <CowshedGroovingPage onNavigate={onNavigate} />;
  else if (route === '#/yards') page = <YardsPage onNavigate={onNavigate} />;
  else if (route === '#/car-parks') page = <CarParksPage onNavigate={onNavigate} />;
  else if (route === '#/boat-ramps-marine-docks') page = <BoatRampsPage onNavigate={onNavigate} />;
  else if (route === '#/testimonials') page = <TestimonialsPage onNavigate={onNavigate} />;
  else if (route === '#/about') page = <AboutPage onNavigate={onNavigate} />;
  else if (route === '#/contact') page = <ContactPage onNavigate={onNavigate} />;
  else if (route === '#/our-work') page = <OurWorkPage onNavigate={onNavigate} />;
  else {
    // Sub-service pages without dedicated mocks — link back to services hub
    page = (
      <main>
        <Section bg="deep-purple" narrow style={{ textAlign:'center', minHeight:'40vh', display:'flex', flexDirection:'column', justifyContent:'center' }}>
          <h1 style={{ fontFamily:'var(--font-heading)', fontSize:'2.5rem', color:'var(--concrete-white)', textTransform:'uppercase', letterSpacing:'0.02em', margin:'0 0 1rem' }}>
            {route.replace('#/', '').replace(/-/g, ' ')}
          </h1>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'1.125rem', color:'rgba(255,255,255,0.9)', margin:'0 0 2rem' }}>
            Detail page pending — follows the same template as Cowshed Grooving.
          </p>
          <div style={{ display:'flex', gap:'0.75rem', justifyContent:'center', flexWrap:'wrap' }}>
            <Button variant="ghost" href="#/services" onClick={() => onNavigate('#/services')}>Back to services</Button>
            <Button variant="primary" href="#/contact" onClick={() => onNavigate('#/contact')}>Get a Quote</Button>
          </div>
        </Section>
      </main>
    );
  }

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      '--safety-orange': t.primaryColor,
      '--teal': t.accentColor,
      '--deep-purple': t.brandPurple,
      '--font-heading': HEADING_STACKS[t.headingFont] || HEADING_STACKS["Bebas Neue"],
    }}>
      <Header onNavigate={onNavigate} route={route} />
      <div style={{ flex: 1 }}>{page}</div>
      <Footer onNavigate={onNavigate} />

      <TweaksPanel>
        <TweakSection label="Brand colours" />
        <TweakColor label="Primary CTA" value={t.primaryColor}
          options={['#EC7926', '#E8590C', '#D6471A', '#C026D3']}
          onChange={(v) => setTweak('primaryColor', v)} />
        <TweakColor label="Accent (teal)" value={t.accentColor}
          options={['#2A9D8F', '#1B8A9E', '#0E7C86', '#3FAE6B']}
          onChange={(v) => setTweak('accentColor', v)} />
        <TweakColor label="Brand purple" value={t.brandPurple}
          options={['#3B1F6E', '#2D1B5E', '#4A2A7A', '#241046']}
          onChange={(v) => setTweak('brandPurple', v)} />
        <TweakSection label="Type" />
        <TweakRadio label="Heading font" value={t.headingFont}
          options={['Bebas Neue', 'Oswald', 'Anton']}
          onChange={(v) => setTweak('headingFont', v)} />
      </TweaksPanel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
