import { Hero } from "./Hero";
import {
  AboutUsHeader,
  HomeContainer,
  AboutUsContainer,
  AboutUsVaBeauty,
  AboutUsValesca,
} from "./styles";

import valescaImg from "../../assets/valesca.png";
import salonImg from "../../assets/salonImg.png";
import { Footer } from "../../components/Footer";
import { Contact } from "./Contact";
import { useEffect } from "react";
import { Depositions } from "./Depositions";
import { Reveal } from "../../components/ScrollReveal/ScrollReveal";

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HomeContainer className="#home">
      <Hero />
      <AboutUsContainer>
      <Reveal origin="top">
        <AboutUsHeader >
        
          <span>À PROPOS</span>
          <p>
            Ayez un visuelle impeccable grâce à VA Beauty. Nous offrons un
            service de qualité à la hauteur de vos attentes.!
          </p>
        </AboutUsHeader></Reveal>

        <Reveal origin="left" delay={200}>
        <AboutUsVaBeauty>
        
          <div
            className="textContainer"
           
          >
            <h1>VA Beauty</h1>
            <div>
              <p>
                Vivez une expérience incroyable avec VA BEAUTY Notre mission est
                de vous apporter constamment les nouveaux styles et les idées,
                en suivant les tendances actuelles. Nous nous éduquons
                constamment sur les meilleures pratiques dans ce vaste domaine.
                Nous promettons d’accorder une attention particulière aux
                détails de vos besoins, à maintenir le meilleur standard dans la
                propreté de notre salon, à dépasser vos attentes et à bien vous
                répondre!
              </p>
              <p>
                Pour les personnes qui recherchent un endroit qui offre un
                excellent service à la clientèle, les soins de sourcils, levres
                et make-up et des services exceptionnels, Le salon VA beauty est
                un excellent choix.
              </p>
            </div>
          </div>
          <div
            className="imgContainer"
       
          >
        
            <img src={salonImg} alt="" />
          </div>
        </AboutUsVaBeauty></Reveal>
      </AboutUsContainer>
      <Reveal origin="top"  delay={200}>
      <img
        src="/sourcils/marcas.svg"
        width="100%"
      
      /></Reveal>
      <AboutUsContainer>
      <Reveal origin="left"  delay={200}>
        
        <AboutUsValesca>
          <div
            className="imgContainer"
           
          >
            <img src={valescaImg} width="340px" />
          </div>
          <div
            className="specifications"
           
          >
            <h3>Valesca Vieira</h3>
            <strong>
              Profissionelle en micropigmentation et dépigmentation.
            </strong>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim. Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia consequat
              duis enim. Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim. Amet minim
              mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            </p>
          </div>
        </AboutUsValesca></Reveal>
      </AboutUsContainer>

      {/* <Depositions /> */}
      <Reveal origin="top">
      <Contact /></Reveal>
      <Footer />
    </HomeContainer>
  );
}
