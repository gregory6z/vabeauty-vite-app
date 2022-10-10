import { CalendarPlus } from "phosphor-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ServicesContext } from "../../../context/ServicesContext";
import { ServiceCard } from "../styles";

interface IProps {
  id: string;
  name: string;
  descriptions: string[];
  price: number;
  duration: number;
}

export function Services({ name, descriptions, price, duration, id }: IProps) {
  const navigate = useNavigate();
  const { addServiceToCart } = useContext(ServicesContext);

  function handleAddService() {
    addServiceToCart({ id, name, price, duration });
    navigate("/appointment");
  }

  return (
    <ServiceCard data-aos="fade-up" data-aos-duration="500">
      <h3>{name}</h3>

      {descriptions.map((description, index) => {
        return (
          <div key={index} className="descriptions">
            <p>{description}</p>
          </div>
        );
      })}

      <strong>TARIF {price}€</strong>
      <button onClick={handleAddService}>
        <CalendarPlus size={26} />
        PRENDRE VOTRE RENDEZ-VOUS
      </button>
    </ServiceCard>
  );
}
