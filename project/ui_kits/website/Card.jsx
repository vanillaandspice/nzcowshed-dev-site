// Card — flat white with 3px teal top border, no shadow
// Mirrors src/components/ui/Card.tsx

function Card({ children, className = '', style = {} }) {
  return (
    <div className={className} style={{
      background: 'var(--concrete-white)',
      borderTop: '3px solid var(--teal)',
      padding: '1.5rem',
      borderRadius: 0,
      ...style,
    }}>
      {children}
    </div>
  );
}

Object.assign(window, { Card });
