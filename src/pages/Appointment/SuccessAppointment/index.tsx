import { format } from "date-fns/esm";
import fr from "date-fns/locale/fr";

import {
  CalendarCheck,
  CalendarPlus,
  Check,
  Clock,
  FacebookLogo,
  HeartStraight,
  InstagramLogo,
  SnapchatLogo,
} from "phosphor-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ServicesContext } from "../../../context/ServicesContext";
import {
  SuccessContainer,
  IconsContainer,
  RendeVousContainer,
  ServicesContainer,
  MakeAnotherAppointmentButton,
  ServiceDiv,
  SocialMedia,
} from "./styles";

interface Props {
  date?: Date;
}

export function SuccessAppointment({ date }: Props) {
  const navigate = useNavigate();

  function handleAddService() {
    navigate("/services");
  }

  const { cartItem } = useContext(ServicesContext);

  function firstUpperCase(dateFormatted: string) {
    return dateFormatted.charAt(0).toUpperCase() + dateFormatted.slice(1);
  }

  const dateFormatted = format(date as Date, "iiii d MMMM' à ' HH:mm'h'", {
    locale: fr,
  });

  return (
    <SuccessContainer>
      <h1 data-aos="fade-right">MERCI POUR VOTRE PREFERENCE</h1>
      <RendeVousContainer data-aos="fade-right">
        <ServicesContainer>
          <ServiceDiv>
            <HeartStraight size={36} weight="regular" />

            <p>
              Service: <strong>{cartItem?.name}</strong>
            </p>
          </ServiceDiv>
          <ServiceDiv>
            <Clock size={36} weight="regular" />

            <p>
              Duration: <strong>{cartItem?.duration} minutes</strong>
            </p>
          </ServiceDiv>
          <ServiceDiv>
            <CalendarCheck size={36} weight="regular" />
            <p>
              Votre rendez-vous est confirmé pour:
              <p>
                <strong>{firstUpperCase(dateFormatted)}</strong>
              </p>
            </p>
          </ServiceDiv>
        </ServicesContainer>
        <IconsContainer>
          <Check size={240} />
          <SocialMedia>
            <InstagramLogo size={32} />
            <FacebookLogo size={32} />
            <SnapchatLogo size={32} />
          </SocialMedia>
        </IconsContainer>
      </RendeVousContainer>
      <MakeAnotherAppointmentButton type="button" onClick={handleAddService}>
        <CalendarPlus size={40} weight="regular" />
        PRENDRE UN AUTRE RENDEZ-VOUS
      </MakeAnotherAppointmentButton>
    </SuccessContainer>
  );
}
