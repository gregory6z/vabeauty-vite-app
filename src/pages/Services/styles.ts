import styled from "styled-components";

export const ServicesContainer = styled.div`
  margin: 2.5rem auto;
  width: 1120px;

  @media (max-width: 1130px) {
    overflow: hidden;
    width: 100%;

    margin: initial;
  }

  main {
    box-shadow: 10px 10px 63px -46px rgba(30, 60, 71, 1);
    -webkit-box-shadow: 10px 10px 63px -46px rgba(30, 60, 71, 1);
    -moz-box-shadow: 10px 10px 63px -46px rgba(30, 60, 71, 1);
    border: 0.5px solid rgb(218, 218, 218);
    padding: 3.5rem 3.5rem 3rem;
    border-radius: 12px;
    background: ${({ theme }) => theme["gray-50"]};
    width: 100%;
    height: 40.5rem;

    flex-direction: column;
    display: flex;

    @media (max-width: 700px) {
      padding: 0 1rem;
      align-items: center;
      padding-top: 25%;

      height: calc(100vh - 5rem);
    }

    h1 {
      text-align: center;
      margin-top: 2rem;
      color: ${(props) => props.theme["cyan-700"]};

      @media (max-width: 700px) {
        font-size: 1.5rem;
        margin-top: initial;
      }
    }
  }
`;

export const ServicesContent = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  div {
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    .link {
      display: flex;
      flex-direction: column;
      border-radius: 5px;
      flex: 1;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      text-decoration: none;
      transition: 300ms;
      opacity: 75%;
      text-decoration-color: ${(props) => props.theme["pink-700"]};

      img {
        width: 100%;
        height: 14rem;

        @media (max-width: 700px) {
          height: 8rem;
        }
      }
      h2 {
        text-decoration: none;
        color: ${(props) => props.theme["cyan-700"]};
        font-weight: normal;
        font-family: "Prata";
      }

      &:hover {
        opacity: 100%;
        text-decoration: underline;

        color: ${(props) => props.theme["pink-700"]};
      }
    }

    img {
      width: 100%;
      height: 14rem;

      @media (max-width: 700px) {
        height: 8rem;
      }
    }
  }
`;
