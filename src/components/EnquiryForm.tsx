import { useState } from 'react';

const FORMSPREE_ID = 'xgoqjaov';

const regions = [
  'Northland', 'Auckland', 'Waikato', 'Bay of Plenty', 'Gisborne',
  "Hawke's Bay", 'Taranaki', 'Manawatu-Whanganui', 'Wellington', 'South Island',
];

const m2Opts = ['Under 100 m²', '100–400 m²', '401–800 m²', '801+ m²', 'Not sure'];

type Step = 1 | 2 | 3;

interface FormData {
  firstName: string; lastName: string; phone: string;
  email: string; region: string; siteAddress: string;
  company: string; squareMetres: string; otherInfo: string;
}

async function post(data: Partial<FormData> & Record<string, string>) {
  const body = new FormData();
  Object.entries(data).forEach(([k, v]) => v && body.append(k, v));
  return fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
    method: 'POST', body,
    headers: { Accept: 'application/json' },
  });
}

export default function EnquiryForm() {
  const [step, setStep]           = useState<Step>(1);
  const [done, setDone]           = useState(false);
  const [busy, setBusy]           = useState(false);
  const [partialSent, setPartialSent] = useState(false);
  const [authorised, setAuthorised]   = useState(false);

  const [form, setForm] = useState<FormData>({
    firstName: '', lastName: '', phone: '',
    email: '', region: '', siteAddress: '',
    company: '', squareMetres: '', otherInfo: '',
  });

  const set = (k: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }));

  // ── Step 1: save contact details immediately ──────────────────────────────
  const handleStep1 = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!partialSent) {
      setBusy(true);
      await post({
        firstName: form.firstName,
        lastName:  form.lastName,
        phone:     form.phone,
        _subject:  `Quick enquiry — ${form.firstName} ${form.lastName} (phone captured)`,
        _formStage: 'Step 1 only — no further details yet',
      });
      setPartialSent(true);
      setBusy(false);
    }
    setStep(2);
  };

  // ── Step 2: optional, no submission ──────────────────────────────────────
  const handleStep2 = (e: React.FormEvent) => { e.preventDefault(); setStep(3); };

  // ── Step 3: full submission ───────────────────────────────────────────────
  const handleStep3 = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    await post({
      ...form,
      _subject: `Quote request — ${form.firstName} ${form.lastName}${form.region ? ` — ${form.region}` : ''}`,
      _formStage: 'Complete',
      authorisation: 'yes',
    });
    setBusy(false);
    setDone(true);
  };

  // ── Shared styles ─────────────────────────────────────────────────────────
  const inp: React.CSSProperties = {
    display: 'block', width: '100%',
    padding: '0.8rem 1rem',
    fontFamily: 'var(--font-body)', fontSize: '1rem',
    border: '2px solid var(--deep-purple)',
    borderRadius: 'var(--radius)',
    background: '#fff', color: 'var(--text-main)',
    marginTop: '0.375rem', boxSizing: 'border-box',
    transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
  };
  const lbl: React.CSSProperties = {
    fontFamily: 'var(--font-heading)', fontSize: '0.9rem',
    letterSpacing: '0.05em', textTransform: 'uppercase',
    color: 'var(--deep-purple)', display: 'block',
  };
  const row: React.CSSProperties = {
    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem',
  };

  // ── Success ───────────────────────────────────────────────────────────────
  if (done) return (
    <div style={{ padding: '2.5rem 2rem', background: 'var(--deep-purple)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
      <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>✓</div>
      <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', color: 'var(--concrete-white)', letterSpacing: '0.02em', textTransform: 'uppercase', margin: '0 0 0.5rem' }}>
        Request received
      </p>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', color: 'rgba(255,255,255,0.8)', margin: '0 0 1.25rem', lineHeight: 1.6 }}>
        We'll be in touch shortly. For urgent jobs call Scott directly:
      </p>
      <a href="tel:+6427474775" style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'var(--safety-orange)', textDecoration: 'none', letterSpacing: '0.02em' }}>
        0274 747 775
      </a>
    </div>
  );

  // ── Step indicator — three subtle dashes ─────────────────────────────────
  const StepBar = () => (
    <div style={{ display: 'flex', gap: 5, marginBottom: '1.75rem' }}>
      {([1, 2, 3] as Step[]).map(n => (
        <div key={n} style={{
          flex: 1, height: 3, borderRadius: 2,
          background: step > n ? 'var(--teal)' : step === n ? 'var(--safety-orange)' : 'rgba(59,31,110,0.15)',
          transition: 'background 0.3s ease',
        }} />
      ))}
    </div>
  );

  // ── Button styles ─────────────────────────────────────────────────────────
  const btnPrimary: React.CSSProperties = {
    fontFamily: 'var(--font-heading)', fontSize: '1.2rem',
    letterSpacing: '0.05em', textTransform: 'uppercase',
    background: busy ? 'var(--outline)' : 'var(--safety-orange)',
    color: '#fff', border: 'none',
    padding: '0.875rem 2.25rem',
    borderRadius: 'var(--radius)',
    cursor: busy ? 'not-allowed' : 'pointer',
    width: '100%', marginTop: '0.5rem',
    transition: 'background 0.2s ease, transform 0.15s ease, box-shadow 0.15s ease',
  };
  const btnGhost: React.CSSProperties = {
    fontFamily: 'var(--font-heading)', fontSize: '1rem',
    letterSpacing: '0.05em', textTransform: 'uppercase',
    background: 'transparent', color: 'var(--deep-purple)',
    border: '2px solid var(--outline)',
    padding: '0.75rem 1.5rem',
    borderRadius: 'var(--radius)',
    cursor: 'pointer', width: '100%', marginTop: '0.5rem',
    transition: 'border-color 0.15s ease, color 0.15s ease',
  };
  const btnLink: React.CSSProperties = {
    fontFamily: 'var(--font-body)', fontSize: '0.9rem',
    color: 'var(--on-surface-variant)', background: 'none', border: 'none',
    cursor: 'pointer', textDecoration: 'underline', padding: '0.5rem 0',
    display: 'block', width: '100%', textAlign: 'center', marginTop: '0.25rem',
  };

  // ── Step heading ──────────────────────────────────────────────────────────
  const Heading = ({ title, sub }: { title: string; sub: string }) => (
    <div style={{ marginBottom: '1.5rem' }}>
      <h3 style={{
        fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.75rem,4vw,2.25rem)',
        color: 'var(--deep-purple)', textTransform: 'uppercase',
        letterSpacing: '0.02em', margin: '0 0 0.375rem',
      }}>{title}</h3>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--on-surface-variant)', margin: 0 }}>{sub}</p>
    </div>
  );

  // ─────────────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Inject focus & animation styles once */}
      <style>{`
        .eq-input:focus {
          outline: none;
          border-color: var(--teal) !important;
          box-shadow: 0 0 0 3px rgba(42,157,143,0.18);
        }
        .eq-select:focus {
          outline: none;
          border-color: var(--teal) !important;
          box-shadow: 0 0 0 3px rgba(42,157,143,0.18);
        }
        @keyframes eqSlideIn {
          from { opacity: 0; transform: translateX(18px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .eq-step { animation: eqSlideIn 0.28s cubic-bezier(0.2,0,0,1) both; }
        .eq-pill {
          padding: 0.6rem 1.1rem;
          border: 2px solid var(--outline-variant);
          border-radius: 99px;
          background: transparent;
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--on-surface-variant);
          cursor: pointer;
          transition: all 0.15s ease;
          white-space: nowrap;
        }
        .eq-pill:hover { border-color: var(--deep-purple); color: var(--deep-purple); }
        .eq-pill.eq-pill--on {
          background: var(--deep-purple);
          border-color: var(--deep-purple);
          color: #fff;
          font-weight: 600;
        }
        .eq-btn-primary:hover:not(:disabled) {
          background: #f08030 !important;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(236,121,38,0.4);
        }
        .eq-btn-ghost:hover {
          border-color: var(--deep-purple) !important;
          color: var(--deep-purple) !important;
        }
        .eq-textarea:focus {
          outline: none;
          border-color: var(--teal) !important;
          box-shadow: 0 0 0 3px rgba(42,157,143,0.18);
        }
      `}</style>

      <StepBar />

      {/* ── STEP 1 ─────────────────────────────────────────── */}
      {step === 1 && (
        <form onSubmit={handleStep1} className="eq-step" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Heading
            title="Let's get started"
            sub="Let me know your name and number — so I can get back to you."
          />

          <div style={row}>
            <div>
              <label style={lbl}>
                First name *
                <input className="eq-input" name="firstName" type="text" required autoComplete="given-name"
                  value={form.firstName} onChange={set('firstName')}
                  style={inp} placeholder="First name" />
              </label>
            </div>
            <div>
              <label style={lbl}>
                Last name *
                <input className="eq-input" name="lastName" type="text" required autoComplete="family-name"
                  value={form.lastName} onChange={set('lastName')}
                  style={inp} placeholder="Last name" />
              </label>
            </div>
          </div>

          <div>
            <label style={lbl}>
              Phone number *
              <input className="eq-input" name="phone" type="tel" required autoComplete="tel"
                value={form.phone} onChange={set('phone')}
                style={{ ...inp, fontSize: '1.1rem', letterSpacing: '0.02em' }}
                placeholder="027 000 0000" />
            </label>
          </div>

          <div style={{ marginTop: '0.5rem' }}>
            <button type="submit" disabled={busy} className="eq-btn-primary" style={btnPrimary}>
              {busy ? 'Saving…' : 'Continue →'}
            </button>
          </div>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--on-surface-variant)', textAlign: 'center', margin: 0 }}>
            We'll never share your details. <a href="tel:+6427474775" style={{ color: 'var(--teal)' }}>Or just call Scott now →</a>
          </p>
        </form>
      )}

      {/* ── STEP 2 ─────────────────────────────────────────── */}
      {step === 2 && (
        <form onSubmit={handleStep2} className="eq-step" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Heading
            title="A bit more"
            sub="Optional — helps us prepare a more accurate quote before we call."
          />

          <div>
            <label style={lbl}>
              Email address
              <input className="eq-input" name="email" type="email" autoComplete="email"
                value={form.email} onChange={set('email')}
                style={inp} placeholder="you@example.com" />
            </label>
          </div>

          <div>
            <label style={lbl}>
              Region
              <select className="eq-select" name="region"
                value={form.region} onChange={set('region')}
                style={{ ...inp, appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23494550' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', paddingRight: '2.5rem' }}>
                <option value="">Select your region…</option>
                {regions.map(r => <option key={r} value={r}>{r}</option>)}
              </select>
            </label>
          </div>

          <div>
            <label style={lbl}>
              Farm or site address
              <input className="eq-input" name="siteAddress" type="text" autoComplete="street-address"
                value={form.siteAddress} onChange={set('siteAddress')}
                style={inp} placeholder="Street address, town" />
            </label>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
            <button type="submit" className="eq-btn-primary" style={btnPrimary}>
              Continue →
            </button>
            <button type="button" className="eq-btn-ghost" style={btnGhost}
              onClick={() => setStep(1)}>
              ← Back
            </button>
            <button type="button" style={btnLink}
              onClick={() => setStep(3)}>
              Skip this step
            </button>
          </div>
        </form>
      )}

      {/* ── STEP 3 ─────────────────────────────────────────── */}
      {step === 3 && (
        <form onSubmit={handleStep3} className="eq-step" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Heading
            title="Tell us about the job"
            sub="All optional — but the more you tell us, the better quote we can prepare."
          />

          <div>
            <label style={lbl}>
              Company or farm name
              <input className="eq-input" name="company" type="text"
                value={form.company} onChange={set('company')}
                style={inp} placeholder="Your farm or business name" />
            </label>
          </div>

          <div>
            <p style={{ ...lbl, marginBottom: '0.6rem' }}>Approximate area</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {m2Opts.map(opt => (
                <button
                  key={opt} type="button"
                  className={`eq-pill${form.squareMetres === opt ? ' eq-pill--on' : ''}`}
                  onClick={() => setForm(f => ({ ...f, squareMetres: opt === f.squareMetres ? '' : opt }))}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label style={lbl}>
              Anything else we should know?
              <textarea className="eq-textarea" name="otherInfo" rows={3}
                value={form.otherInfo} onChange={set('otherInfo')}
                style={{ ...inp, resize: 'vertical', marginTop: '0.375rem' }}
                placeholder="Surface type, access, timing, anything useful…"
              />
            </label>
          </div>

          {/* Consent */}
          <div style={{
            background: 'var(--surface)',
            border: '2px solid var(--teal)',
            borderRadius: 'var(--radius)',
            padding: '1rem 1.25rem',
          }}>
            <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer', lineHeight: 1.55 }}>
              <input
                type="checkbox"
                required
                checked={authorised}
                onChange={e => setAuthorised(e.target.checked)}
                style={{ accentColor: 'var(--teal)', width: 20, height: 20, flexShrink: 0, marginTop: '0.1rem' }}
              />
              <span>
                <strong style={{ color: 'var(--deep-purple)' }}>* </strong>
                I request an estimate from NZ Cowshed Groovers and am authorised to do so on behalf of the farm or business listed.
              </span>
            </label>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.5rem' }}>
            <button type="submit" disabled={busy} className="eq-btn-primary" style={btnPrimary}>
              {busy ? 'Sending…' : 'Send my request →'}
            </button>
            <button type="button" className="eq-btn-ghost" style={btnGhost}
              onClick={() => setStep(2)}>
              ← Back
            </button>
          </div>
        </form>
      )}
    </>
  );
}
