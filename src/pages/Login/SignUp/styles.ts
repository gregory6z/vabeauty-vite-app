import styled, { css } from "styled-components";

export const ContainerSignUp = styled.div`
  display: flex;
  padding-top: 1rem;
  justify-content: center;
  flex: 1;
  height: 100%;

  @media (min-width: 1025px) {
    overflow: auto;
  }

  > div {
    width: 60%;

    @media (max-width: 768px) {
      flex: initial;
      height: initial;
      width: 90%;
 
    }
  }
`;
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  p {
    color: ${(props) => props.theme["red-error"]};
    font-size: 0.75rem;
  }

  span {
    color: ${(props) => props.theme["red-error"]};
    font-size: 0.75rem;
    text-align: right;
    margin-top: 0.25rem;
  }

  h3 {
    font-size: 1.125rem;
    letter-spacing: 0.08rem;
    color: ${({ theme }) => theme["cyan-500"]};
  }
  label {
    color: ${({ theme }) => theme["gray-700"]};
    font-size: 0.75rem;
    margin-top: 0.25rem;
  }

  label + input {
    margin-top: 0.5rem;
  }

  h3 {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }

  input {
    font-size: 0.75rem;
    padding: 0.5rem 1rem;
    border-radius: 7px;

    background: ${(props) => props.theme["gray-100"]};

    border: 0.2px solid rgb(218, 218, 218);
  }

  a {
    margin-top: 0.5rem;
    font-size: 0.75rem;
    color: ${({ theme }) => theme["pink-500"]};
  }

  button {
    letter-spacing: 0.08rem;
    border: ${({ theme }) => theme["pink-500"]} 2px solid;
    margin-top: 2rem;
    padding: 0.875rem;
    border-radius: 7px;
    cursor: pointer;

    margin-bottom: 3rem;

    font-weight: 700;
    color: ${({ theme }) => theme["pink-500"]};
    background: ${({ theme }) => theme.white};

    transition: 300ms;

    &:hover {
      color: ${({ theme }) => theme.white};
      border: 2px solid transparent;
      background: ${({ theme }) => theme["pink-500"]};
    }
  }
`;
interface InputContainerProps {
  hasError: boolean;
}

export const Input = styled.input<InputContainerProps>`
  &:focus {
    outline: transparent;
    border: 2 solid ${(props) => props.theme["pink-500"]};

    box-shadow: 0 0 0 2px ${(props) => props.theme["pink-500"]};
  }

  ${({ hasError }) =>
    hasError &&
    css`
      box-shadow: 0 0 0 2px ${(props) => props.theme["red-error"]};
    `}
`;
