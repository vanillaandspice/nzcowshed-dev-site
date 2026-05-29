// TestimonialsPage — full testimonials grid

const TESTIMONIALS = [
  { quote: "Completely different herd to milk. Cows are flowing through the shed much better. No more slips and faster milking times.", name: "Trevor", biz: "Patetonga" },
  { quote: "It instantly showed in the stock. They felt secure and were 100% more settled.", name: "Kelly & Tina Woollier", biz: "Dairy Farmers" },
  { quote: "Fitted in with our milking times. Good communication. Cows no longer slip on the yard — much easier to draft and handle.", name: "Graham & Odele Wells", biz: "Dairy Farmers" },
  { quote: "Water runs off the surface better, no algae build up — we used to have bulls slip every day, but now they don't slip at all.", name: "Lance Pettigrew", biz: "Livestock Improvements" },
  { quote: "Floor in the loading bay was causing forklifts to slip.", name: "Inghams Chickens yard", biz: "Waikato" },
  { quote: "Cows were slipping when going through yards. Very pleased with the yard — prevented the cows from slipping over. It has been a 100% improvement.", name: "John", biz: "Frankton Sale Yards, Otorohanga" },
  { quote: "Cows don't slip easily, but even if they do start to slip, they catch themselves and stand again with no trouble.", name: "John", biz: "Otorohanga" },
  { quote: "Thanks a lot Neil, has made a big difference — the flow is definitely a hell of a lot better.", name: "Kevin", biz: "Patetonga" },
  { quote: "I should have done the whole yard first off. Absolutely recommend.", name: "Kelly & Tina Woollier", biz: "Dairy Farmers" },
];

function TestimonialsPage({ onNavigate }) {
  return (
    <main>
      <Section bg="deep-purple" narrow style={{ textAlign:'center' }}>
        <h1 style={{ fontFamily:'var(--font-heading)', fontSize:'clamp(2.25rem, 5vw, 3.5rem)', color:'var(--concrete-white)', textTransform:'uppercase', letterSpacing:'0.02em', margin:'0 0 1.5rem' }}>
          What farmers say
        </h1>
        <blockquote style={{ margin:0 }}>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'clamp(1.25rem, 2.5vw, 1.75rem)', lineHeight:1.5, fontStyle:'italic', color:'var(--concrete-white)', margin:'0 0 1rem' }}>
            "We considered many other options before finding your website. No other option compared. Vast improvement — no slipping, stable footing, cattle settled, easy to handle."
          </p>
          <cite style={{ fontFamily:'var(--font-body)', fontSize:'1.125rem', fontWeight:700, color:'var(--teal)', fontStyle:'normal' }}>— Gordon Wright</cite>
        </blockquote>
      </Section>

      <StatCallout number="15,000" label="cattle movements through one yard since we grooved it. " sublabel={"Not a single problem.\n\n"} attribution="— Gordon Wright" />

      <Section bg="surface">
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'var(--space-gutter)' }}>
          {TESTIMONIALS.map((t, i) => (
            <Card key={i}><TestimonialBlock quote={t.quote} attribution={t.name} business={t.biz} /></Card>
          ))}
        </div>
      </Section>

      <Section bg="safety-orange" narrow style={{ textAlign:'center' }}>
        <h2 style={{ fontFamily:'var(--font-heading)', fontSize:'2rem', color:'var(--concrete-white)', textTransform:'uppercase', letterSpacing:'0.02em', margin:'0 0 1rem' }}>Ready to join them?</h2>
        <Button variant="ghost" href="#/contact" onClick={() => onNavigate('#/contact')}>Get a Quote</Button>
      </Section>
    </main>
  );
}

Object.assign(window, { TestimonialsPage, TESTIMONIALS });
