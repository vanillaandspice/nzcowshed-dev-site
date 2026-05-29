// GrooveDivider — crosshatch SVG pattern between sections
// Mirrors src/components/ui/GrooveDivider.tsx

function GrooveDivider({ height = 32, className = '' }) {
  return (
    <svg width="100%" height={height} xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" aria-hidden="true" className={className} style={{ display: 'block' }}>
      <defs>
        <pattern id="groove-crosshatch" x="0" y="0" width="24" height="16" patternUnits="userSpaceOnUse">
          <rect width="24" height="16" fill="#edeeef" />
          <line x1="0" y1="0" x2="24" y2="0" stroke="#cbc4d2" strokeWidth="2" />
          <line x1="0" y1="0" x2="0"  y2="16" stroke="#cbc4d2" strokeWidth="2" />
        </pattern>
      </defs>
      <rect width="100%" height={height} fill="url(#groove-crosshatch)" />
    </svg>
  );
}

Object.assign(window, { GrooveDivider });
