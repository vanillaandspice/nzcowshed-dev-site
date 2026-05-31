import { useState } from 'react';

const FORMSPREE_ID = 'REPLACE_WITH_FORMSPREE_ID';

const services = [
  'Cowshed Grooving',
  'Yards',
  'Car Parks',
  'Boat Ramps / Marine Docks',
  'Other / Not sure',
];

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function EnquiryForm() {
  const [state, setState] = useState<FormState>('idle');
  const [fields, setFields] = useState({
    name: '', phone: '', email: '', service: '', message: '',
  });

  function update(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setFields(f => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState('submitting');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(fields),
      });
      setState(res.ok ? 'success' : 'error');
    } catch {
      setState('error');
    }
  }

  if (state === 'success') {
    return (
      <div style={{ padding: '2rem', background: 'var(--secondary-container)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
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

  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <label style={labelStyle}>
          Name *
          <input name="name" type="text" required value={fields.name} onChange={update} style={inputStyle} placeholder="Your name" />
        </label>
        <label style={labelStyle}>
          Phone
          <input name="phone" type="tel" value={fields.phone} onChange={update} style={inputStyle} placeholder="027 000 0000" />
        </label>
      </div>
      <label style={labelStyle}>
        Email *
        <input name="email" type="email" required value={fields.email} onChange={update} style={inputStyle} placeholder="you@example.com" />
      </label>
      <label style={labelStyle}>
        Service
        <select name="service" value={fields.service} onChange={update} style={inputStyle}>
          <option value="">Select a service...</option>
          {services.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </label>
      <label style={labelStyle}>
        Message
        <textarea
          name="message"
          rows={5}
          value={fields.message}
          onChange={update}
          style={{ ...inputStyle, resize: 'vertical' }}
          placeholder="Tell us about your job — size, surface type, location..."
        />
      </label>
      {state === 'error' && (
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--error)', fontSize: '0.9rem', margin: 0 }}>
          Something went wrong. Please try again or call 0274 747 775.
        </p>
      )}
      <button
        type="submit"
        disabled={state === 'submitting'}
        style={{
          fontFamily: 'var(--font-heading)', fontSize: '1.25rem',
          letterSpacing: '0.05em', textTransform: 'uppercase',
          background: state === 'submitting' ? 'var(--outline)' : 'var(--safety-orange)',
          color: 'var(--concrete-white)', border: 'none',
          padding: '0.875rem 2rem', borderRadius: 'var(--radius)',
          cursor: state === 'submitting' ? 'not-allowed' : 'pointer',
          alignSelf: 'flex-start',
        }}
      >
        {state === 'submitting' ? 'Sending...' : 'Send enquiry'}
      </button>
    </form>
  );
}
