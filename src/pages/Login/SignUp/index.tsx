import { ContainerSignUp, FormContainer, Input } from "./styles";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { api } from "../../../services/api";
import { useState } from "react";
import { AccountSuccess } from "../AccountSuccess";

interface SignUpFormData {
  name: string;
  email: string;
  telephone: string;
  password: string;
  passwordConfirmation: string;
}

const schema = yup
  .object({
    name: yup.string().required("Nom obrigatoire"),
    email: yup
      .string()
      .email("Entrez une adresse mail valide")
      .required("Mail obrigatoire"),
    telephone: yup.string().required("Telephone obrigatoire"),
    password: yup
      .string()
      .min(6, "Le mot de passe doit contenir au moins 6 caractères")
      .required("Mot de passe obligatoire"),
    passwordConfirmation: yup
      .string()
      .required("Confirmer le mot de passe est obligatoire")
      .oneOf(
        [yup.ref("password")],
        "Les mots de passe doivent être identiques"
      ),
  })
  .required();

export function SignUp() {
  const [accountSuccess, setAccountSuccess] = useState<boolean | null>(null);
  const [errorForm, setErrorForm] = useState<boolean | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: yupResolver(schema),
  });

  async function onSubmit(userData: SignUpFormData) {
    try {
      await schema.validate(userData, {
        abortEarly: false,
      });
      await api.post("/user", userData);

      setAccountSuccess(true);
    } catch (err) {
      setErrorForm(true);
    }
  }

  return (
    <ContainerSignUp>
      <div>
        {accountSuccess ? (
          <AccountSuccess />
        ) : (
          <FormContainer onSubmit={handleSubmit(onSubmit)}>
            <h3>CRÉER UN COMPTE</h3>

            {errorForm && <p>*Mail déjà enregistré essayez-en un autre</p>}

            <label htmlFor="">Nom</label>
            <Input
              type="text"
              placeholder="Mon Prenom"
              {...register("name")}
              hasError={!!errors.name?.message}
            />
            <span>{errors.name?.message}</span>

            <label htmlFor="">Mail</label>
            <Input
              type="text"
              placeholder="exemple@mail.com"
              {...register("email")}
              hasError={!!errors.email?.message || !!errorForm}
            />
            <span>{errors.email?.message}</span>

            <label htmlFor="">Telephone</label>
            <Input
              type="text"
              placeholder="06 06 06 06 06"
              hasError={!!errors.telephone?.message}
              {...register("telephone")}
            />
            <span>{errors.telephone?.message}</span>

            <label htmlFor="">Mot de passe</label>
            <Input
              type="password"
              placeholder="••••••••••"
              hasError={!!errors.password?.message}
              {...register("password")}
            />
            <span>{errors.password?.message}</span>

            <label htmlFor="">Confirmation mot de passe</label>
            <Input
              type="password"
              placeholder="••••••••••"
              hasError={!!errors.passwordConfirmation?.message}
              {...register("passwordConfirmation")}
            />
            <span>{errors.passwordConfirmation?.message}</span>

            <button>S'INSCRIRE</button>
          </FormContainer>
        )}
      </div>
    </ContainerSignUp>
  );
}
