import {
  DepositionsContainer,
  DepositionsContent,
  DepositionsHeader,
  DepositionsItems,
} from "./styles";

export function Depositions() {
  return (
    <DepositionsContainer>
      <DepositionsContent>
        <DepositionsHeader>
          <span>DEPOSITIONS</span>
          <p>Ce que les clients disent de Va Beauty</p>

          <DepositionsItems>
            <div></div>
            <div></div>
          </DepositionsItems>
        </DepositionsHeader>
      </DepositionsContent>
    </DepositionsContainer>
  );
}
