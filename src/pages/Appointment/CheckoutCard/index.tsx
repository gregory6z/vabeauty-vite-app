import {
  CalendarPlus,
  Clock,
  CurrencyEur,
  HeartStraight,
} from "phosphor-react";
import { useContext } from "react";
import { ServicesContext } from "../../../context/ServicesContext";
import {
  CartServiceContainer,
  CheckoutCardContainer,
  CartServiceItem,
} from "./styles";

export function CheckoutCard() {
  const { cartItem } = useContext(ServicesContext);
  return (
    <CheckoutCardContainer>
      <CartServiceContainer>
        <CartServiceItem>
          <HeartStraight size={24} />
          <p>
            Service: <strong>{cartItem?.name}</strong>
          </p>
        </CartServiceItem>
        <CartServiceItem>
          <CurrencyEur size={24} />
          <p>
            Price: <strong>{cartItem?.price}€</strong>
          </p>
        </CartServiceItem>
        <CartServiceItem>
          <Clock size={24} />

          <p>
            Duration:<strong> {cartItem?.duration} Minutes</strong>
          </p>
        </CartServiceItem>
      </CartServiceContainer>
      <CalendarPlus size={72} />
    </CheckoutCardContainer>
  );
}
