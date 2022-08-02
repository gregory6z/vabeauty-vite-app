import styled, { css } from "styled-components";

export const SuccessContainer = styled.div`
  > div {
    margin-bottom: 2rem;
    width: 100%;
    display: flex;
    padding-top: 6rem;

    flex-direction: column;

    @media (max-width: 768px) {
      text-align: center;
      margin: 0 auto;
    }

    svg {
      color: ${({ theme }) => theme["pink-500"]};
      margin: 0 auto;
      margin-bottom: 1rem;
    }

    h1 {
      font-weight: 700;
      font-size: 18px;
      line-height: 150%;
      color: ${({ theme }) => theme["pink-500"]};
      letter-spacing: 0.08rem;
      margin-bottom: 1.5rem;
    }
    p {
      max-width: 70%;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: ${({ theme }) => theme["cyan-500"]};
      margin-bottom: 4.5rem;

      @media (max-width: 768px) {
        text-align: center;
        max-width: initial;
        padding: 1rem;
        font-size: 12px;
      }
    }
  }
`;

export const SocialMedia = styled.div`
  color: ${({ theme }) => theme["pink-500"]};
  display: flex;
  justify-content: flex-end;
  width: 30%;

  margin-left: 70%;
`;
