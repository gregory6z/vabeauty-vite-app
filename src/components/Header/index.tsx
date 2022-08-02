import { NavLink } from "react-router-dom";

import { HeaderContainer, NavContainer } from "./styles";

import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={logoImg} alt="va-beauty-logo" />
        </NavLink>

        <NavContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/sourcils">Sourcils</NavLink>
          <NavLink to="/levres">Levres</NavLink>
          <NavLink to="/makeup">MakeUp</NavLink>{" "}
          <NavLink to="/contact">Contact</NavLink>
        </NavContainer>
      </div>
    </HeaderContainer>
  );
}
