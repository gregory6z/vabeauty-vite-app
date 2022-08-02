import { ContainerSignIn, FormContainer } from "./styles";

import logoImg from "../../../assets/logoLogin.svg";

export function SignIn() {
  function handleSignIn(data: any) {}

  return (
    <ContainerSignIn>
      <img src={logoImg} alt="" />
      <div className="container">
        <FormContainer>
          <h3>CONNECTION</h3>
          <label>Mail</label>
          <input type="email" id="email" placeholder="exemple@email.com" />
          <label>Mot de Passe</label>
          <input type="password" id="password" placeholder="••••••••••" />
          <a href="">Mot de passe oublie ?</a>
          <button type="submit">CONNECTER</button>
        </FormContainer>
      </div>
    </ContainerSignIn>
  );
}
