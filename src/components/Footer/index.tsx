import { FacebookLogo, InstagramLogo, SnapchatLogo } from "phosphor-react";
import { FooterContainer, FooterContent } from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <img src="/sourcils/logoFooter.svg" alt="" />
          <p>©2022 - VA Beauty. </p>
          <p>Tous les droits sont réservés.</p>
        </div>
        <div className="socialNetworks">
          <FacebookLogo size={32} />
          <InstagramLogo size={32} />
          <SnapchatLogo size={32} />
        </div>
      </FooterContent>
    </FooterContainer>
  );
}
