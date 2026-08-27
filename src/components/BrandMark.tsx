type BrandMarkProps = {
  compact?: boolean;
  inverse?: boolean;
};

export function BrandMark({ compact = false, inverse = false }: BrandMarkProps) {
  const textColor = inverse ? "var(--white)" : "var(--ink)";
  return (
    <span className="brand-lockup" aria-label="LCB — La Congolaise Business">
      <svg
        className="brand-symbol"
        viewBox="0 0 48 48"
        role="img"
        aria-hidden="true"
      >
        <path d="M8 7h10v12c0 6 3.7 10 10 10 7 0 11-4.7 11-12V7h5v11c0 11-6.3 19-17 19S8 30 8 19V7Z" fill="#1C6C3A" />
        <path d="M18 8h10v14c0 3.2 1.8 5.1 5.2 5.6-1.5 1-3.4 1.6-5.8 1.6-6.2 0-9.4-3.9-9.4-9.8V8Z" fill="#F5A623" />
        <path d="M28 8h8v10c0 4.3-1.4 7.1-4.3 8.6-2.5-.7-3.7-2.4-3.7-5.2V8Z" fill="#C0392B" />
        <path d="M22 36h12l-1.8 5.5H23.8L22 36Z" fill="#1C6C3A" />
      </svg>
      <span className="brand-copy" style={{ color: textColor }}>
        <strong>LCB</strong>
        {!compact && <small>La Congolaise Business</small>}
      </span>
    </span>
  );
}
