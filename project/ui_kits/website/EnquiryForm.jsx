// EnquiryForm — main lead-capture form
// Field set per client spec: company + contact + region + site + size + consent.

const REGIONS = [
  'Northland', 'Auckland', 'Waikato', 'Bay of Plenty', 'Gisborne',
  "Hawke's Bay", 'Taranaki', 'Manawatu-Whanganui', 'Wellington', 'South Island',
];

const SIZE_OPTIONS = ['1-400 M²', '401-800 M²', '801+ M²', 'Other'];

const EMPTY = {
  company: '', firstName: '', lastName: '', phone: '', email: '',
  region: '', address: '', size: '', sizeOther: '', notes: '', consent: false,
};

const selectStyle = {
  width: '100%', border: '2px solid var(--deep-purple)', borderRadius: 'var(--radius)',
  padding: '0.75rem 1rem', fontFamily: 'var(--font-body)', fontSize: '1rem',
  background: 'var(--concrete-white)', color: 'var(--text-main)', outline: 'none',
};
const selectLabelStyle = {
  display: 'block', fontFamily: 'var(--font-heading)', fontSize: '1.125rem',
  letterSpacing: '0.05em', textTransform: 'uppercase',
  color: 'var(--deep-purple)', marginBottom: '0.25rem',
};

function EnquiryForm() {
  const [state, setState] = React.useState(EMPTY);
  const [submitted, setSubmitted] = React.useState(false);
  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setState((s) => ({ ...s, [name]: type === 'checkbox' ? checked : value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('Enquiry submitted (mock):', state);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{
        background: 'var(--concrete-white)', borderTop: '3px solid var(--teal)',
        padding: '2rem', textAlign: 'center',
      }}>
        <h3 style={{
          fontFamily: 'var(--font-heading)', fontSize: '2rem',
          letterSpacing: '0.02em', color: 'var(--deep-purple)',
          textTransform: 'uppercase', margin: '0 0 0.75rem',
        }}>Thanks — we'll be in touch</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.125rem', lineHeight: 1.5, margin: '0 0 1.5rem' }}>
          Scott will give you a call back within a working day. If it's urgent, ring <strong>0274 747 775</strong> directly.
        </p>
        <Button variant="secondary" onClick={() => { setSubmitted(false); setState(EMPTY); }}>
          Send another
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} style={{
      background: 'var(--concrete-white)', borderTop: '3px solid var(--teal)',
      padding: '2rem',
    }}>
      <Field label="Company name" name="company" value={state.company} onChange={onChange} required placeholder="Your farm or business" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <Field label="First name" name="firstName" value={state.firstName} onChange={onChange} required />
        <Field label="Last name"  name="lastName"  value={state.lastName}  onChange={onChange} required />
        <Field label="Phone number" name="phone" value={state.phone} onChange={onChange} required placeholder="027..." />
        <Field label="Email address" name="email" value={state.email} onChange={onChange} type="email" required />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="region" style={selectLabelStyle}>
          Region<span style={{ color: 'var(--safety-orange)' }}> *</span>
        </label>
        <select id="region" name="region" value={state.region} onChange={onChange} required style={selectStyle}>
          <option value="" disabled>Select your region…</option>
          {REGIONS.map((r) => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>

      <Field label="Address of site" name="address" value={state.address} onChange={onChange} required placeholder="123 Rural Rd, RD2, Patetonga 3473" />

      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="size" style={selectLabelStyle}>
          Estimate of square metres required<span style={{ color: 'var(--safety-orange)' }}> *</span>
        </label>
        <select id="size" name="size" value={state.size} onChange={onChange} required style={selectStyle}>
          <option value="" disabled>Select an estimate…</option>
          {SIZE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      {state.size === 'Other' && (
        <Field label="Other — please specify" name="sizeOther" value={state.sizeOther} onChange={onChange} required placeholder="e.g. 1,200 M²" />
      )}

      <Field label="Any other information" name="notes" value={state.notes} onChange={onChange} rows={3} placeholder="Tell us what you've got." />

      <label style={{
        display: 'flex', gap: '0.75rem', alignItems: 'flex-start',
        fontFamily: 'var(--font-body)', fontSize: '0.9375rem', lineHeight: 1.5,
        color: 'var(--text-main)', margin: '0.5rem 0 1.5rem', cursor: 'pointer',
      }}>
        <input type="checkbox" name="consent" checked={state.consent} onChange={onChange} required style={{
          width: 20, height: 20, marginTop: 2, accentColor: 'var(--deep-purple)', flexShrink: 0,
        }} />
        <span>
          I request an estimate/quote from NZ Cowshed Groovers to provide services on our site and I am authorised by the company listed above to do so.<span style={{ color: 'var(--safety-orange)' }}> *</span>
        </span>
      </label>

      <Button variant="primary" type="submit" fullWidth>Send enquiry</Button>
    </form>
  );
}

Object.assign(window, { EnquiryForm });
