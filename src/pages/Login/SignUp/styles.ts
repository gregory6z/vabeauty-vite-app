import styled, { css } from "styled-components";

export const ContainerSignUp = styled.div`
  display: flex;

  justify-content: center;
  flex: 1;
  height: 100%;

  background: ${(props) => props.theme["cyan-600"]};
  border-start-start-radius: 12px;
  border-end-start-radius: 12px;

  @media (min-width: 1025px) {
    overflow: auto;
  }

  @media (max-width: 960px) {
    border-radius: initial;
  }

  > div {
    width: 100%;
    padding: 4rem 7rem;

    @media (max-width: 768px) {
      flex: initial;
      height: initial;
      width: 90%;
      padding: initial;
      padding-block: 2rem;
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
    color: ${(props) => props.theme["cyan-100"]};
    font-size: 0.75rem;
    text-align: right;
    margin-top: 0.25rem;
  }

  h3 {
    margin-bottom: 2.2rem;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme["gray-100"]};
  }

  label {
    color: ${({ theme }) => theme["gray-100"]};
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }

  label + input {
    margin-top: 0.5rem;
  }

  input {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
    border-radius: 7px;

    background: ${(props) => props.theme["cyan-100"]};

    /* border: 0.2px solid rgb(218, 218, 218); */
    border: 0;
  }

  a {
    margin-top: 0.5rem;
    font-size: 0.75rem;
    color: ${({ theme }) => theme["pink-500"]};
  }

  button {
    letter-spacing: 0.1rem;
    border: ${({ theme }) => theme["pink-800"]} 3px solid;
    margin-top: 2.5rem;
    padding: 0.875rem;
    border-radius: 7px;
    cursor: pointer;
    background: transparent;

    margin-bottom: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    font-weight: 700;
    color: ${({ theme }) => theme["cyan-100"]};

    transition: 300ms;

    &:hover {
      color: ${({ theme }) => theme.white};
      border: 3px solid transparent;
      background: ${({ theme }) => theme["pink-700"]};
    }
  }
`;
interface InputContainerProps {
  hasError: boolean;
}

export const Input = styled.input<InputContainerProps>`
  &:focus {
    outline: transparent;

    box-shadow: 0 0 0 3.5px ${(props) => props.theme["pink-700"]};
  }

  ${({ hasError }) =>
    hasError &&
    css`
      box-shadow: 0 0 0 3.5px ${(props) => props.theme["red-error"]};
    `}
`;
