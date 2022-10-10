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
import 'react-lazy-load-image-component/src/effects/blur.css';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import { useNavigate } from "react-router-dom";
import { Reveal } from "../../../components/ScrollReveal/ScrollReveal";


export function Hero() {
  const navigate = useNavigate();


  function handleAddService() {
    navigate("/services");
  }
  return (
    <HeroContainer>
      <HeroContent>
        <Reveal origin="top">
        <IntroTitle>
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
        </IntroTitle></Reveal>
        
        
        <ImageContainer>
      
          <LazyLoadImage src={womanImg} alt="" className="womanImg" loading="lazy" effect="blur" placeholderSrc="red" width="100%" height="100%"  />
        </ImageContainer>
      </HeroContent>
    </HeroContainer>
  );
}
