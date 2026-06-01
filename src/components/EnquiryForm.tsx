import { useForm, ValidationError } from '@formspree/react';

const FORMSPREE_ID = 'xgoqjaov';

const services = [
  'Cowshed Grooving',
  'Yards',
  'Car Parks',
  'Boat Ramps / Marine Docks',
  'Other / Not sure',
];

export default function EnquiryForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  if (state.succeeded) {
    return (
      <div style={{ padding: '2rem', background: 'var(--surface)', borderRadius: 'var(--radius)', textAlign: 'center', border: '2px solid var(--teal)' }}>
        <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--deep-purple)', letterSpacing: '0.02em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Message received
        </p>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--on-surface)', margin: 0 }}>
          Scott will be in touch shortly. For urgent jobs call{' '}
          <a href="tel:+6427474775" style={{ color: 'var(--safety-orange)', fontWeight: 700 }}>0274 747 775</a>.
        </p>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '0.75rem 1rem',
    fontFamily: 'var(--font-body)', fontSize: '1rem',
    border: 'var(--border-input)', borderRadius: 'var(--radius)',
    background: 'var(--concrete-white)', color: 'var(--text-main)',
    marginTop: '0.375rem', boxSizing: 'border-box',
  };
  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-heading)', fontSize: '1rem',
    letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--deep-purple)',
    display: 'block',
  };
  const errorStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)', color: 'var(--error)', fontSize: '0.85rem',
    marginTop: '0.25rem', display: 'block',
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={labelStyle}>
            Name *
            <input id="name" name="name" type="text" required style={inputStyle} placeholder="Your name" />
          </label>
          <ValidationError field="name" errors={state.errors} style={errorStyle} />
        </div>
        <div>
          <label style={labelStyle}>
            Phone
            <input id="phone" name="phone" type="tel" style={inputStyle} placeholder="027 000 0000" />
          </label>
        </div>
      </div>

      <div>
        <label style={labelStyle}>
          Email *
          <input id="email" name="email" type="email" required style={inputStyle} placeholder="you@example.com" />
        </label>
        <ValidationError field="email" errors={state.errors} style={errorStyle} />
      </div>

      <label style={labelStyle}>
        Service
        <select id="service" name="service" style={inputStyle}>
          <option value="">Select a service...</option>
          {services.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </label>

      <div>
        <label style={labelStyle}>
          Message
          <textarea
            id="message"
            name="message"
            rows={5}
            style={{ ...inputStyle, resize: 'vertical' }}
            placeholder="Tell us about your job — size, surface type, location..."
          />
        </label>
        <ValidationError field="message" errors={state.errors} style={errorStyle} />
      </div>

      <ValidationError errors={state.errors} style={{ ...errorStyle, fontSize: '0.9rem' }} />

      <button
        type="submit"
        disabled={state.submitting}
        style={{
          fontFamily: 'var(--font-heading)', fontSize: '1.25rem',
          letterSpacing: '0.05em', textTransform: 'uppercase',
          background: state.submitting ? 'var(--outline)' : 'var(--safety-orange)',
          color: 'var(--concrete-white)', border: 'none',
          padding: '0.875rem 2rem', borderRadius: 'var(--radius)',
          cursor: state.submitting ? 'not-allowed' : 'pointer',
          alignSelf: 'flex-start',
        }}
      >
        {state.submitting ? 'Sending...' : 'Send enquiry'}
      </button>
    </form>
  );
}
