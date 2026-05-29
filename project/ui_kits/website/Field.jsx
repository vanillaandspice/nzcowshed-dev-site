// Field — form field with Bebas Neue uppercase label above
// 2px deep-purple border, no fill

function Field({ label, type = 'text', name, value, onChange, placeholder, required, rows, error }) {
  const inputStyle = {
    width: '100%',
    border: error ? '2px solid var(--error)' : '2px solid var(--deep-purple)',
    borderRadius: 'var(--radius)',
    padding: '0.75rem 1rem',
    fontFamily: 'var(--font-body)',
    fontSize: '1rem',
    color: 'var(--text-main)',
    background: 'var(--concrete-white)',
    boxSizing: 'border-box',
    outline: 'none',
  };
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label htmlFor={name} style={{
        display: 'block',
        fontFamily: 'var(--font-heading)',
        fontSize: '1.125rem',
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        color: 'var(--deep-purple)',
        marginBottom: '0.25rem',
      }}>
        {label}{required && <span style={{ color: 'var(--safety-orange)' }}> *</span>}
      </label>
      {rows ? (
        <textarea id={name} name={name} value={value} onChange={onChange} placeholder={placeholder} rows={rows} style={inputStyle} />
      ) : (
        <input id={name} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} style={inputStyle} />
      )}
      {error && <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.875rem', color: 'var(--error)', marginTop: '0.25rem' }}>{error}</div>}
    </div>
  );
}

Object.assign(window, { Field });
