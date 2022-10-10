import {
  HeroContainer,
  HeroContent,
  ImageContainer,
  IntroTitle,
} from "./styles";

import womanImg from "../../../assets/valescaImg.png";
import { CalendarCheck } from "phosphor-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();

  function handleAddService() {
    navigate("/services");
  }
  return (
    <HeroContainer>
      <HeroContent>
        <IntroTitle data-aos="fade-up">
          <span>SOYEZ LES BIENVENUS CHEZ NOUS 👋</span>
          <h1>Le centre d’esthétique fait pour vous</h1>
          <p>
            Aujourd'hui, c'est le moment parfait pour obtenir l’apparence de vos
            rêves, nous du <strong>VA Beauty</strong> prenons soin de vous.
          </p>
          <button onClick={handleAddService}>
            <CalendarCheck size={32} />
            PLANIFIER VOTRE RENDEZ-VOUS
          </button>
        </IntroTitle>
        <ImageContainer data-aos="fade-left">
          <img src={womanImg} alt="" className="womanImg" loading="lazy" />
        </ImageContainer>
      </HeroContent>
    </HeroContainer>
  );
}
