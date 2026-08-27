import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="visual-main-card">
        <Image
          className="hero-photo"
          src="/images/commercante-marche-portrait-colore.png"
          alt=""
          fill
          sizes="(max-width: 820px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="hero-stamp">
        <svg viewBox="0 0 112 112" fill="none" aria-hidden="true">
          <defs>
            <path id="stamp-arc" d="M56,10 a46,46 0 1,1 -0.1,0" />
          </defs>
          <text fontSize="10.5" fill="currentColor" letterSpacing="2.8" fontWeight="600">
            <textPath href="#stamp-arc">POINTE-NOIRE · COMMERCE · LCB · 2025 · </textPath>
          </text>
          <circle cx="56" cy="56" r="16" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <text x="56" y="60" textAnchor="middle" fontSize="8" fill="currentColor" fontWeight="700" letterSpacing="1">
            LCB
          </text>
        </svg>
      </div>
    </div>
  );
}
