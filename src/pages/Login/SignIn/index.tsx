import { ContainerSignIn, FormContainer, Input } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import logoImg from "../../../assets/logoLogin.svg";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface SignInFormData {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup
      .string()
      .email("Entrez une adresse mail valide")
      .required("Mail obrigatoire"),

    password: yup
      .string()
      .min(6, "Le mot de passe doit contenir au moins 6 caractères")
      .required("Mot de passe obligatoire"),
  })
  .required();

export function SignIn() {
  const navigate = useNavigate();
  const { signIn, isLoading, isAuthenticated, user, error } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/appointment");
    }
  }, [navigate, user]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data: SignInFormData) {
    try {
      signIn({
        email: data.email,
        password: data.password,
      });
      if (isAuthenticated) {
        navigate("/appointment");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <ContainerSignIn>
      <img src={logoImg} alt="" />

      <div className="container">
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <h3>CONNECTION</h3>

          <label>Mail</label>
          <Input
            type="text"
            id="email"
            placeholder="exemple@email.com"
            hasError={!!errors.email?.message || !!error}
            {...register("email")}
          />

          <label>Mot de Passe</label>
          <Input
            type="password"
            id="password"
            placeholder="••••••••••"
            hasError={!!error}
            {...register("password")}
          />
          <a href="">Mot de passe oublie ?</a>
          <div>{error && <p>Mail ou mot de passe incorrect</p>}</div>

          <button type="submit">CONNECTER</button>
        </FormContainer>
      </div>
    </ContainerSignIn>
  );
}
function useHistory() {
  throw new Error("Function not implemented.");
}
