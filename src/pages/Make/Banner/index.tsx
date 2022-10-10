import { BannerContainer } from "./styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
export function Banner() {
  return (
    <BannerContainer>
      <h1>Make-up</h1>
      <LazyLoadImage
        effect="blur"
        src="/sourcils/MakeBannerImg.png"
        height="100%"
      />
    </BannerContainer>
  );
}
