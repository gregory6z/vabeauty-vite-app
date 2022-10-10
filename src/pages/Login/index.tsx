import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";
import { Container } from "./styles";

export function Login() {
  return (
    <Container data-aos="fade-right">
      <div className="container">
        <SignUp data-aos="fade-right" />
        <SignIn data-aos="fade-right" />
      </div>
    </Container>
  );
}
