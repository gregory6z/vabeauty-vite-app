import {
  CalendarPlus,
  Clock,
  EnvelopeSimple,
  MapPin,
  Phone,
} from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { ContactContainer, ContactContent } from "./styles";

export function Contact() {
  const navigate = useNavigate();

  function handleAddService() {
    navigate("/services");
  }
  return (
    <ContactContainer>
      <ContactContent>
        <div
          className="textContainer"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          <h1>Contactez-nous!</h1>
          <div className="contactDiv">
            <MapPin size={32} />
            <p>22 Av. Georges Clemenceau 13400 Aubagne</p>
          </div>
          <div className="contactDiv">
            <EnvelopeSimple size={32} />
            <p>contact@vabeauty.com</p>
          </div>

          <div className="contactDiv">
            <Phone size={32} />
            <p>07 61 57 55 70</p>
          </div>
          <div className="contactDiv">
            <Clock size={32} />
            <p>
              Ouverture du lundi au vendredi: <br /> 08:00h jusqu'à 21:00h
            </p>
          </div>

          <button onClick={handleAddService}>
            {" "}
            <CalendarPlus size={24} /> PRENDRE RENDEZ-VOUS
          </button>
        </div>
        <div
          className="imgContainer"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img src="/sourcils/gpsImg.png" alt="" />
        </div>
      </ContactContent>
    </ContactContainer>
  );
}
