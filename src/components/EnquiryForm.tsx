import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const FORMSPREE_ID = 'xgoqjaov';

const regions = [
  'Northland',
  'Auckland',
  'Waikato',
  'Bay of Plenty',
  'Gisborne',
  "Hawke's Bay",
  'Taranaki',
  'Manawatu-Whanganui',
  'Wellington',
  'South Island',
];

const m2Options = [
  '1–400 m²',
  '401–800 m²',
  '801+ m²',
  'Other',
];

export default function EnquiryForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);
  const [m2, setM2] = useState('');
  const [m2Other, setM2Other] = useState('');

  if (state.succeeded) {
    return (
      <div style={{ padding: '2rem', background: 'var(--surface)', border: '2px solid var(--teal)', borderRadius: 'var(--radius)', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--deep-purple)', letterSpacing: '0.02em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          Estimate request received
        </p>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--on-surface)', margin: 0 }}>
          We'll be in touch shortly with your estimate. For urgent jobs call{' '}
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
    fontFamily: 'var(--font-heading)', fontSize: '0.95rem',
    letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--deep-purple)',
    display: 'block',
  };
  const errorStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)', color: 'var(--error)', fontSize: '0.82rem',
    marginTop: '0.2rem', display: 'block',
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>

      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--on-surface-variant)', margin: 0 }}>
        Please complete for an estimate to be created. <strong style={{ color: 'var(--deep-purple)' }}>* Required</strong>
      </p>

      {/* Company */}
      <div>
        <label style={labelStyle}>
          Company Name *
          <input name="company" type="text" required style={inputStyle} placeholder="Your company or farm name" />
        </label>
        <ValidationError field="company" errors={state.errors} style={errorStyle} />
      </div>

      {/* Name row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={labelStyle}>
            First Name *
            <input name="firstName" type="text" required style={inputStyle} placeholder="First name" />
          </label>
          <ValidationError field="firstName" errors={state.errors} style={errorStyle} />
        </div>
        <div>
          <label style={labelStyle}>
            Last Name *
            <input name="lastName" type="text" required style={inputStyle} placeholder="Last name" />
          </label>
          <ValidationError field="lastName" errors={state.errors} style={errorStyle} />
        </div>
      </div>

      {/* Phone + Email row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={labelStyle}>
            Phone Number *
            <input name="phone" type="tel" required style={inputStyle} placeholder="027 000 0000" />
          </label>
          <ValidationError field="phone" errors={state.errors} style={errorStyle} />
        </div>
        <div>
          <label style={labelStyle}>
            Email Address *
            <input name="email" type="email" required style={inputStyle} placeholder="you@example.com" />
          </label>
          <ValidationError field="email" errors={state.errors} style={errorStyle} />
        </div>
      </div>

      {/* Region */}
      <div>
        <label style={labelStyle}>
          Region *
          <select name="region" required style={inputStyle} defaultValue="">
            <option value="" disabled>Select your region…</option>
            {regions.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </label>
        <ValidationError field="region" errors={state.errors} style={errorStyle} />
      </div>

      {/* Address */}
      <div>
        <label style={labelStyle}>
          Address of Site *
          <input name="siteAddress" type="text" required style={inputStyle} placeholder="Street address, town" />
        </label>
        <ValidationError field="siteAddress" errors={state.errors} style={errorStyle} />
      </div>

      {/* m2 estimate */}
      <fieldset style={{ border: 'var(--border-input)', borderRadius: 'var(--radius)', padding: '1rem', margin: 0 }}>
        <legend style={{ ...labelStyle, padding: '0 0.5rem' }}>Estimate of Square Metres Required *</legend>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem 1.5rem', marginTop: '0.5rem' }}>
          {m2Options.map(opt => (
            <label key={opt} style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}>
              <input
                type="radio"
                name="squareMetres"
                value={opt === 'Other' ? m2Other || 'Other' : opt}
                required
                checked={m2 === opt}
                onChange={() => setM2(opt)}
                style={{ accentColor: 'var(--teal)', width: 16, height: 16 }}
              />
              {opt}
            </label>
          ))}
        </div>
        {m2 === 'Other' && (
          <input
            name="squareMetresOther"
            type="text"
            placeholder="Enter your m² here"
            value={m2Other}
            onChange={e => setM2Other(e.target.value)}
            style={{ ...inputStyle, marginTop: '0.75rem', maxWidth: 280 }}
          />
        )}
      </fieldset>

      {/* Other info */}
      <div>
        <label style={labelStyle}>
          Other Information to Add
          <textarea
            name="otherInfo"
            rows={4}
            style={{ ...inputStyle, resize: 'vertical' }}
            placeholder="Any additional details about your job — surface type, access, timing…"
          />
        </label>
      </div>

      {/* Consent checkbox */}
      <div style={{
        background: 'var(--surface)',
        border: '2px solid var(--teal)',
        borderRadius: 'var(--radius)',
        padding: '1rem 1.25rem',
      }}>
        <label style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer', lineHeight: 1.5 }}>
          <input
            type="checkbox"
            name="authorisation"
            value="yes"
            required
            style={{ accentColor: 'var(--teal)', width: 20, height: 20, flexShrink: 0, marginTop: '0.1rem' }}
          />
          <span>
            <strong style={{ color: 'var(--deep-purple)' }}>* </strong>
            I request an estimate/quote from NZ Cowshed Groovers to provide services on our site and I am authorised by the company listed above to do so.
          </span>
        </label>
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
        {state.submitting ? 'Sending…' : 'Request Estimate'}
      </button>
    </form>
  );
}
