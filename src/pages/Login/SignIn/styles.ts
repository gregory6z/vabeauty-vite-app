import styled, { css } from "styled-components";

export const ContainerSignIn = styled.div`
  background: ${({ theme }) => theme["cyan-750"]};

  border-end-end-radius: 12px;
  border-top-right-radius: 12px;

  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 1025px) {
    overflow: auto;
  }

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
    color: ${({ theme }) => theme["cyan-200"]};
    letter-spacing: 0.1rem;
    font-size: 1.5rem;
  }
  label {
    color: ${({ theme }) => theme["cyan-200"]};
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
    background: ${({ theme }) => theme["cyan-600"]};
    color: white;

    outline: transparent;
    border: 2px transparent solid;

    &::placeholder {
      color: ${({ theme }) => theme["gray-200"]};
    }
  }

  a {
    margin-top: 0.5rem;
    font-size: 0.75rem;
    color: ${({ theme }) => theme["gray-300"]};
    padding-bottom: 0.25rem;

    transition: color 200ms;

    &:hover {
      color: ${({ theme }) => theme["gray-100"]};
    }
  }

  p {
    font-size: 0.75rem;
    color: #fff;
    font-weight: bold;

    position: absolute;
  }

  button {
    letter-spacing: 0.1rem;
    margin-top: 2rem;
    padding: 1rem;
    border-radius: 7px;
    border: 0;
    font-weight: 700;
    color: ${({ theme }) => theme.white};

    background: ${({ theme }) => theme["pink-700"]};
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    transition: background-color 200ms;

    &:hover {
      background: #d78097;
    }
  }
`;

interface InputContainerProps {
  hasError: boolean;
}

export const Input = styled.input<InputContainerProps>`
  &:focus {
    outline: transparent;

    box-shadow: 0 0 0 3px ${(props) => props.theme["pink-800"]};
  }

  ${({ hasError }) =>
    hasError &&
    css`
      background: #fb8484;
      color: ${(props) => props.theme["gray-50"]};
      &::placeholder {
        color: ${(props) => props.theme["gray-200"]};
      }
      &:focus {
        outline: transparent;

        border: 2px solid transparent;
        box-shadow: 0 0 0 3px ${(props) => props.theme["red-error"]};
        color: ${(props) => props.theme["gray-50"]};
      }
    `};
`;
