import { BrandMark } from "@/components/BrandMark";
import { Icon } from "@/components/ui/Icons";
import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="La Congolaise Business, un accompagnement proche du terrain">
      <div className="visual-orbit visual-orbit-one" aria-hidden="true" />
      <div className="visual-orbit visual-orbit-two" aria-hidden="true" />
      <div className="visual-main-card">
        <Image className="hero-photo" src="/images/ChatGPT Image 27 août 2026, 19_13_03 (3).png" alt="Commerçante dans son étal au marché" fill sizes="(max-width: 820px) 80vw, 430px" priority />
        <div className="hero-photo-shade" aria-hidden="true" />
        <div className="visual-brand"><BrandMark compact inverse /></div>
        <div className="visual-stripe" aria-hidden="true"><span /><span /><span /></div>
        <div className="market-illustration" aria-hidden="true">
          <div className="market-awning"><i /><i /><i /><i /><i /></div>
          <div className="market-body">
            <span className="market-box box-one" />
            <span className="market-box box-two" />
            <span className="market-box box-three" />
            <span className="market-person" />
          </div>
        </div>
        <div className="visual-caption">
          <span>Proximité terrain</span>
          <strong>Une solution pensée à partir de votre besoin.</strong>
        </div>
      </div>
      <div className="visual-note visual-note-middle">
        <span className="note-dot" aria-hidden="true" />
        <div><small>Parcours LCB</small><strong>Étude du besoin</strong></div>
      </div>
      <div className="visual-note visual-note-top">
        <span className="icon-bubble"><Icon name="shop" size={18} /></span>
        <div><small>Commerçants</small><strong>Votre activité d'abord</strong></div>
      </div>
      <div className="visual-note visual-note-bottom">
        <span className="icon-bubble amber"><Icon name="compass" size={18} /></span>
        <div><small>Accompagnement</small><strong>Un conseiller à vos côtés</strong></div>
      </div>
    </div>
  );
}
