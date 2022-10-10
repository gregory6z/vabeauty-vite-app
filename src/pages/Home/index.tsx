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

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HomeContainer className="#home">
      <Hero />
      <AboutUsContainer>
        <AboutUsHeader data-aos="fade-left" data-aos-duration="800">
          <span>À PROPOS</span>
          <p>
            Ayez un visuelle impeccable grâce à VA Beauty. Nous offrons un
            service de qualité à la hauteur de vos attentes.!
          </p>
        </AboutUsHeader>
        <AboutUsVaBeauty>
          <div
            className="textContainer"
            data-aos="fade-left"
            data-aos-duration="800"
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
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <img src={salonImg} alt="" />
          </div>
        </AboutUsVaBeauty>
      </AboutUsContainer>
      <img
        src="/sourcils/marcas.svg"
        width="100%"
        data-aos="fade-down"
        data-aos-duration="800"
      />
      <AboutUsContainer>
        <AboutUsValesca>
          <div
            className="imgContainer"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img src={valescaImg} width="340px" />
          </div>
          <div
            className="specifications"
            data-aos="fade-right"
            data-aos-duration="800"
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
        </AboutUsValesca>
      </AboutUsContainer>

      {/* <Depositions /> */}

      <Contact />
      <Footer />
    </HomeContainer>
  );
}
