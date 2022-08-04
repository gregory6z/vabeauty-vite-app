import { Pencil, SignOut } from "phosphor-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { CheckoutCard } from "./CheckoutCard";
import { CheckoutContainer } from "./styles";

export function Appointment() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    signOut();
    navigate("/");
  }

  return (
    <CheckoutContainer>
      <div className="checkoutCard">
        <CheckoutCard />
      </div>

      <div className="middleText">
        <button onClick={handleSignOut}>
          <SignOut size={16} />
          Sortir
        </button>

        <h1>Bienvenue {user?.name}</h1>
        <button>
          Editer profile <Pencil size={16} />
        </button>
      </div>

      <main>
        <div>
          <h3>RENDE-VOUS</h3>
          <p>Selectioner la date</p>
          <div></div>
        </div>
        <div>Segunda parte</div>
      </main>
    </CheckoutContainer>
  );
}
