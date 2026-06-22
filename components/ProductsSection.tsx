import { products, type Product } from "@/lib/products";


// ---------------------------------------------------------------------------
// Inline SVG icons keyed by iconType
// ---------------------------------------------------------------------------
function ProductIcon({ type, className }: { type: string; className?: string }) {
  const icons: Record<string, React.ReactNode> = {
    case: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="13" x2="12" y2="16" strokeWidth="2" />
      </svg>
    ),
    uv: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ),
    ultrasonic: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 10a10 10 0 000 4M6 7a7 7 0 000 10M22 10a10 10 0 010 4M18 7a7 7 0 010 10" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    cleaning: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C12 2 5 9 5 14a7 7 0 0014 0c0-5-7-12-7-12z" />
        <path d="M9.5 16.5A3 3 0 0015 14" />
      </svg>
    ),
    hook: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v9" />
        <path d="M12 11a5 5 0 01-5 5H5a5 5 0 000 6h14" />
