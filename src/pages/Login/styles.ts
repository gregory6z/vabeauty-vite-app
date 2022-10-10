import styled, { css } from "styled-components";

export const Container = styled.div`
  > div {
    max-width: 1120px;
    margin: 0 auto;
    box-shadow: 10px 10px 63px -19px rgba(30, 60, 71, 1);
    -webkit-box-shadow: 10px 10px 63px -19px rgba(30, 60, 71, 1);
    -moz-box-shadow: 10px 10px 63px -19px rgba(30, 60, 71, 1);
    margin-top: 4rem;
    height: 75vh;
    border-bottom: 5px solid ${props => props.theme["pink-800"]};
    margin-bottom:4rem ;

    border-radius: 12px;

    display: flex;

    justify-content: space-between;

    @media (max-width: 960px) {
      height: 100%;
      max-width: initial;
      width: 100%;
      margin-top: initial;
      flex-direction: column;
      border-radius: initial;
      padding-top: 2rem;
      background: ${(props) => props.theme["cyan-100"]};
    }
  }
`;
