import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="La Congolaise Business, un accompagnement proche du terrain">
      <div className="visual-orbit visual-orbit-one" aria-hidden="true" />
      <div className="visual-orbit visual-orbit-two" aria-hidden="true" />
      <div className="visual-main-card">
        <Image className="hero-photo" src="/images/ChatGPT Image 27 août 2026, 19_37_17 (2).png" alt="Commerçante dans son étal au marché" fill sizes="(max-width: 820px) 80vw, 430px" priority />
      </div>
    </div>
  );
}
