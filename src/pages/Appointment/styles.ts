import styled from "styled-components";

export const CheckoutContainer = styled.div`
  margin: 0 auto;
  width: 1120px;

  .checkoutCard {
    margin-top: 2rem;
  }

  .middleText {
    margin-top: 1rem;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    h1 {
      font-family: "Prata";
      font-weight: 400;
    }

    button {
      position: relative;
      bottom: -1rem;
      border: 0;
      cursor: pointer;
      background: transparent;

      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  main {
    border-radius: 12px;
    background: white;
    width: 100%;
    height: 62vh;
  }
`;
