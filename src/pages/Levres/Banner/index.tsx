import { LazyLoadImage } from "react-lazy-load-image-component";
import { BannerContainer } from "./styles";

export function Banner() {
  return (
    <BannerContainer>
      <h1>Lèvres</h1>
      <LazyLoadImage
        effect="blur"
        height="100%"
        src="/sourcils/LevresBannerImg.png"
        alt=""
      />
    </BannerContainer>
  );
}
