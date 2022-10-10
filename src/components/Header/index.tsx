import { NavLink } from "react-router-dom";

import { HeaderContainer, NavContainer } from "./styles";

import logoImg from "../../assets/logo.svg";
import { List } from "phosphor-react";
import { useAuth } from "../../context/AuthContext";

export function Header() {
  const { isAuthenticated } = useAuth();

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
          <NavLink to="/make">MakeUp</NavLink>
          {!isAuthenticated ? (
            <NavLink to="/login">Connecter</NavLink>
          ) : (
            <NavLink to="/appointment">Rendez-vous</NavLink>
          )}
        </NavContainer>

        <button className="menu">
          <List size="32" color="#0891b2" />
        </button>
      </div>
    </HeaderContainer>
  );
}
