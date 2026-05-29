// OurWorkPage — photo gallery of finished jobs

const JOBS = [
  { photo: '../../assets/photos/yard-grooved.jpg',           title: 'Cowshed yard',         caption: 'Wet morning — grooves visible across the full pad.' },
  { photo: '../../assets/photos/frankton-sale-yards.jpg',    title: 'Frankton Sale Yards',  caption: '186 m² of grooved sale yard, drafting drift gone.' },
  { photo: '../../assets/photos/livestock-improvements.jpg', title: 'Livestock Improvements yard', caption: 'Bulls now stand instead of slipping. Water runs off.' },
  { photo: '../../assets/photos/cowshed-2b.jpg',             title: 'Car Park',             caption: 'Residential driveway grooved end-to-end for all-weather grip.' },
  { photo: '../../assets/photos/boatramp-grooved.jpg',       title: 'Boat ramp',            caption: 'Crosshatch grooves, waterline grip.' },
];

function OurWorkPage({ onNavigate }) {
  return (
    <main>
      <Section bg="deep-purple" narrow style={{ textAlign:'center' }}>
        <h1 style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(2.25rem, 5vw, 3.5rem)', color:'var(--concrete-white)', textTransform:'uppercase', letterSpacing:'0.02em', margin:'0 0 1rem' }}>
          Our work
        </h1>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'1.25rem', color:'rgba(255,255,255,0.9)', lineHeight:1.6, margin:0 }}>
          Real jobs on real farms. Click any photo for the story.
        </p>
      </Section>

      <Section bg="surface">
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'var(--space-gutter)' }}>
          {JOBS.map((j) => (
            <div key={j.title} style={{ background:'var(--concrete-white)', borderTop:'3px solid var(--teal)' }}>
              <div style={{ aspectRatio:'4/3', background:`#000 center/cover url(${j.photo})` }} />
              <div style={{ padding:'1rem 1.25rem 1.25rem' }}>
                <h4 style={{ fontFamily:'var(--font-heading)', fontSize:'1.25rem', color:'var(--deep-purple)', textTransform:'uppercase', letterSpacing:'0.02em', margin:'0 0 0.25rem' }}>{j.title}</h4>
                <p style={{ fontFamily:'var(--font-body)', fontSize:'0.9375rem', lineHeight:1.5, margin:0 }}>{j.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="concrete-white" narrow style={{ textAlign:'center' }}>
        <Button variant="primary" href="#/contact" onClick={() => onNavigate('#/contact')}>Get a Quote</Button>
      </Section>
    </main>
  );
}

Object.assign(window, { OurWorkPage, JOBS });
