import { LazyLoadImage } from "react-lazy-load-image-component";
import { BannerContainer } from "./styles";

export function Banner() {
  return (
    <BannerContainer>
      <h1>Sourcils</h1>
      <LazyLoadImage
        height="100%"
        
        effect="blur"
        src="/sourcils/SourcilsBannerImg.png"
        alt=""
      />
    </BannerContainer>
  );
}
