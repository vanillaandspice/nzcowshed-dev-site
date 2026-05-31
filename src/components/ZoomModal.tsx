import { useState, useEffect } from 'react';

interface Props {
  src: string;
  alt: string;
}

export default function ZoomModal({ src, alt }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Enlarge newspaper clipping"
        style={{
          display: 'block', width: '100%', padding: 0,
          border: '1px solid var(--outline-variant)',
          background: 'var(--concrete-white)',
          cursor: 'zoom-in', borderRadius: 'var(--radius)',
          overflow: 'hidden', position: 'relative',
        }}
      >
        <img src={src} alt={alt} style={{ display: 'block', width: '100%', height: 'auto' }} />
        <span style={{
          position: 'absolute', bottom: 8, right: 8,
          background: 'rgba(37,2,89,0.9)', color: 'var(--concrete-white)',
          fontFamily: 'var(--font-heading)', fontSize: '0.75rem',
          letterSpacing: '0.05em', textTransform: 'uppercase',
          padding: '4px 8px', borderRadius: 'var(--radius-sm)',
        }}>
          Click to enlarge
        </span>
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged image"
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            background: 'rgba(37,2,89,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '2rem', cursor: 'zoom-out',
          }}
        >
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            style={{
              position: 'absolute', top: 16, right: 16,
              background: 'rgba(255,255,255,0.15)', border: 'none',
              color: 'white', borderRadius: '50%',
              width: 40, height: 40, cursor: 'pointer',
              fontSize: '1.25rem', lineHeight: 1,
            }}
          >
            ×
          </button>
          <img
            src={src}
            alt={alt}
            style={{ maxWidth: '90vw', maxHeight: '85vh', objectFit: 'contain', borderRadius: 'var(--radius)' }}
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
