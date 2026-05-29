// ContactPage — enquiry form + phone

function ContactPage() {
  return (
    <main>
      <Section bg="deep-purple" narrow style={{ textAlign:'center' }}>
        <img src="../../assets/brand/cow.png" alt="" aria-hidden="true" style={{
          display:'block', width:'clamp(130px, 15vw, 190px)', height:'auto',
          margin:'0 auto 1.25rem',
          filter:'drop-shadow(0 6px 10px rgba(37,2,89,0.4))',
        }} />
        <h1 style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(2.25rem, 5vw, 3.5rem)', color:'var(--concrete-white)', textTransform:'uppercase', letterSpacing:'0.02em', margin:'0 0 1rem' }}>
          Get in touch
        </h1>
        <p style={{ fontFamily:'var(--font-body)', fontSize:'1.25rem', color:'rgba(255,255,255,0.9)', lineHeight:1.6, margin:0 }}>
          Fill in the form below, or call Scott direct: <strong style={{ color:'var(--safety-orange)' }}>0274 747 775</strong>
        </p>
      </Section>

      <Section bg="surface">
        <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:'var(--space-stack-lg)', alignItems:'start' }}>
          <EnquiryForm />
          <div>
            <h3 style={{ fontFamily:'var(--font-heading)', fontSize:'1.5rem', color:'var(--deep-purple)', textTransform:'uppercase', letterSpacing:'0.02em', margin:'0 0 1rem' }}>Or call</h3>
            <a href="tel:+6427474775" style={{ fontFamily:'var(--font-heading)', fontSize:'2rem', color:'var(--safety-orange)', textDecoration:'none', letterSpacing:'0.02em', display:'block', margin:'0 0 1.5rem' }}>
              0274 747 775
            </a>
            <h4 style={{ fontFamily:'var(--font-heading)', fontSize:'1.125rem', letterSpacing:'0.05em', color:'var(--deep-purple)', textTransform:'uppercase', margin:'0 0 0.25rem' }}>Email</h4>
            <a href="mailto:info@nzcowshedgroovers.co.nz" style={{ fontFamily:'var(--font-body)', fontSize:'1rem', color:'var(--text-main)', textDecoration:'underline', display:'block', margin:'0 0 1.5rem' }}>
              info@nzcowshedgroovers.co.nz
            </a>
            <h4 style={{ fontFamily:'var(--font-heading)', fontSize:'1.125rem', letterSpacing:'0.05em', color:'var(--deep-purple)', textTransform:'uppercase', margin:'0 0 0.25rem' }}>Service area</h4>
            <p style={{ fontFamily:'var(--font-body)', fontSize:'1rem', lineHeight:1.5, margin:0 }}>
              North Island, New Zealand — nationwide capability. We come to your farm.
            </p>
            <h4 style={{ fontFamily:'var(--font-heading)', fontSize:'1.125rem', letterSpacing:'0.05em', color:'var(--deep-purple)', textTransform:'uppercase', margin:'1.5rem 0 0.25rem' }}>Pricing</h4>
            <p style={{ fontFamily:'var(--font-body)', fontSize:'1rem', lineHeight:1.5, margin:0 }}>
              <span style={{ color:'rgb(236, 121, 38)' }}>Setup Fee</span> Plus per m² rate depending on access &amp; condition.<br /><br /><span style={{ fontWeight:700 }}>100% lifetime guarantee included.</span>
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}

Object.assign(window, { ContactPage });
