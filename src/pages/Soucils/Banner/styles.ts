import styled from "styled-components";

export const BannerContainer = styled.div`
  @media (max-width: 920px) {
    width: 100%;

    h1 {
      display: none;
    }

    img {
      width: 100%;
    }
  }

  max-width: 1320px;
  margin: 0 auto;
  height: 20rem;
  background: linear-gradient(95.52deg, #6a8b93 -21.81%, #f7f9f9 58.31%);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-left: 1rem;

  gap: 4rem;

  h1 {
    font-family: "Prata";
    font-weight: normal;
    font-size: 90px;
    color: ${(props) => props.theme["cyan-800"]};
  }

  img {
    height: 100%;
  }
`;
