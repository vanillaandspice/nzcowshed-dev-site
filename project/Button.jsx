// Button — Primary (orange) / Secondary (teal outline) / Ghost (white outline)
// Sharp 0px radius, Bebas Neue uppercase, 48px min height
// Mirrors src/components/ui/Button.tsx

function Button({ variant = 'primary', href, onClick, type = 'button', disabled, children, className = '', fullWidth = false, style = {} }) {
  const baseStyle = {
    fontFamily: 'var(--font-heading)',
    fontSize: '1.125rem',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    minHeight: 48,
    padding: '0 2rem',
    borderRadius: 0,
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'none',
    transition: 'filter 150ms ease, transform 150ms ease',
    textDecoration: 'none',
    opacity: disabled ? 0.5 : 1,
    ...style
  };
  const variants = {
    primary: { background: 'var(--safety-orange)', color: 'var(--concrete-white)', boxShadow: 'inset 0 0 0 2px var(--teal)' },
    secondary: { background: 'transparent', color: 'var(--teal)', border: '2px solid var(--teal)' },
    ghost: { background: 'transparent', color: 'var(--concrete-white)', border: '2px solid var(--concrete-white)' }
  };
  const finalStyle = { ...baseStyle, ...variants[variant], ...style };

  const onMouseDown = (e) => {if (!disabled) e.currentTarget.style.transform = 'scale(0.95)';};
  const onMouseUp = (e) => {e.currentTarget.style.transform = 'scale(1)';};
  const onMouseEnter = (e) => {if (!disabled) e.currentTarget.style.filter = 'brightness(0.9)';};
  const onMouseLeave = (e) => {e.currentTarget.style.filter = 'none';e.currentTarget.style.transform = 'scale(1)';};

  const handlers = { onMouseDown, onMouseUp, onMouseEnter, onMouseLeave };

  if (href) {
    return (
      <a href={href} className={className} style={{ ...finalStyle, border: "rgb(255, 255, 255)" }} {...handlers}
      onClick={(e) => {if (onClick) {e.preventDefault();onClick();}}}>
        {children}
      </a>);

  }
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={className} style={finalStyle} {...handlers}>
      {children}
    </button>);

}

Object.assign(window, { Button });