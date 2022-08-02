import styled, { css } from "styled-components";

export const Container = styled.div`
  > div {
    max-width: 1120px;
    margin: 0 auto;
    background: ${({ theme }) => theme.white};
    margin-top: 4rem;
    height: 75vh;

    border: 0.2px solid rgb(218, 218, 218);
    border-radius: 7px;

    display: flex;

    justify-content: space-between;

    @media (max-width: 768px) {
      max-width: initial;
      width: 100%;
      margin-top: 2rem;
      flex-direction: column;
      gap: 2rem;
    }
  }
`;
