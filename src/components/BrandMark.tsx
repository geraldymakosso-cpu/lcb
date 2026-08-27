import Image from "next/image";

type BrandMarkProps = {
  compact?: boolean;
  inverse?: boolean;
};

export function BrandMark({ compact = false, inverse = false }: BrandMarkProps) {
  const textColor = inverse ? "var(--white)" : "var(--ink)";
  return (
    <span className="brand-lockup" aria-label="La Congolaise Business">
      <Image className="brand-symbol" src="/logos/la-congolaise-business-mark.svg" alt="" width={48} height={48} priority />
      <span className={`brand-copy ${compact ? "brand-copy-compact" : ""}`} style={{ color: textColor }}>
        <strong>La Congolaise</strong>
        <small>Business</small>
      </span>
    </span>
  );
}
