import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";
import { ServicesContainer, ServicesContent } from "./styles";

export function Services() {
  return (
    <ServicesContainer data-aos="fade-left">
      <main>
        <h1>
          Comment pouvons-nous vous rendre <br />
          encore plus belle ?
        </h1>

        <ServicesContent>
          <div>
            <NavLink to="/sourcils" className="link">
              <LazyLoadImage
                src="/sourcils/SourcilsBannerImg.png"
                height="100%"
                effect="blur"
              />
              <h2>Sourcils</h2>
            </NavLink>
          </div>

          <div>
            <NavLink to="/levres" className="link">
              <LazyLoadImage
                src="/sourcils/LevresBannerImg.png"
                height="100%"
                effect="blur"
              />
              <h2>Lévres</h2>
            </NavLink>
          </div>

          <div>
            <NavLink to="/make" className="link">
              <LazyLoadImage
                src="/sourcils/MakeBannerImg.png"
                height="100%"
                effect="blur"
              />
              <h2>MakeUp</h2>
            </NavLink>
          </div>
        </ServicesContent>
      </main>
    </ServicesContainer>
  );
}
