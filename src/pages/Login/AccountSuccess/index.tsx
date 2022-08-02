import {
  Check,
  FacebookLogo,
  InstagramLogo,
  SnapchatLogo,
} from "phosphor-react";
import { SuccessContainer, SocialMedia } from "./styles";

export function AccountSuccess() {
  return (
    <SuccessContainer>
      <div>
        <Check size={140} />
        <h1>MERCI POUR VOTRE INSCRIPTION </h1>
        <p>
          Maintenant vous pouvez vous <strong>connecter</strong> et réaliser
          votre premier <strong>rende vous</strong>.
        </p>
        <SocialMedia>
          <InstagramLogo size={25} />
          <FacebookLogo size={25} />
          <SnapchatLogo size={25} />
        </SocialMedia>
      </div>
    </SuccessContainer>
  );
}
