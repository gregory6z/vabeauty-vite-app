import styled, { css } from "styled-components";

import { darken } from "polished";

export const ContainerSignIn = styled.div`
  background: ${({ theme }) => theme["cyan-500"]};

  border: 0.2px solid rgb(218, 218, 218);
  border-radius: 0 7px 7px 0;

  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    margin-top: 4rem;

    @media (max-width: 768px) {
      width: 60%;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0 0 7px 7px;
  }

  > div {
    width: 50%;
    height: 100%;
    @media (max-width: 768px) {
      padding-top: 2rem;
      flex: initial;
      height: initial;
      width: 90%;
      margin-bottom: 6rem;
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  h3 {
    color: ${({ theme }) => theme["gray-100"]};
    letter-spacing: 0.08rem;
  }
  label {
    color: ${({ theme }) => theme["cyan-100"]};
  }

  label + input {
    margin-top: 0.5rem;
  }
  input + label {
    margin-top: 0.5rem;
  }

  h3 {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }

  input {
    padding: 0.5rem 1rem;
    border-radius: 7px;

    background: ${(props) => props.theme["gray-100"]};
    outline: transparent;
    border: 2px transparent solid;

    &:focus {
      outline: transparent;
      border: 2px solid ${(props) => props.theme["pink-500"]};

      box-shadow: 0 0 0 2px white;
    }
  }

  a {
    margin-top: 0.5rem;
    font-size: 0.75rem;
    color: ${({ theme }) => theme["gray-300"]};

    transition: color 200ms;

    &:hover {
      color: ${({ theme }) => theme["gray-100"]};
    }
  }

  button {
    letter-spacing: 0.08rem;
    margin-top: 2rem;
    padding: 1rem;
    border-radius: 7px;
    border: 0;
    font-weight: 700;
    color: ${({ theme }) => theme.white};
    background: ${({ theme }) => theme["pink-500"]};
    cursor: pointer;

    transition: background-color 200ms;

    &:hover {
      background: ${darken(0.05, "#e3a6b7")};
    }
  }
`;
