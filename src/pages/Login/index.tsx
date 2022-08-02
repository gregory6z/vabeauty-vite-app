import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Container } from "./styles";

export function Login() {
  return (
    <Container>
      <div className="container">
        <SignUp />
        <SignIn />
      </div>
    </Container>
  );
}
