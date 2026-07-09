// Basketball seam icon — single weight line, court motif
export function BasketballIcon({ size = 20, className = "", style }: { size?: number; className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2C12 2 8 7 8 12s4 10 4 10" />
      <path d="M12 2c0 0 4 5 4 10s-4 10-4 10" />
      <path d="M2 12h20" />
      <path d="M4.5 6.5C7 8 9.5 9.5 12 9.5s5-1.5 7.5-3" />
      <path d="M4.5 17.5C7 16 9.5 14.5 12 14.5s5 1.5 7.5 3" />
    </svg>
  );
}

// Arrow right — minimal, court-line feel
export function ArrowRight({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

// Menu icon
export function MenuIcon({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 6h16M4 12h10M4 18h16" />
    </svg>
  );
}

// Close icon
export function CloseIcon({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}
