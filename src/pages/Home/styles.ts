import styled from "styled-components";

export const HomeContainer = styled.div`
  background: ${(props) => props.theme["cyan-100"]};
  width: 100%;
  height: 100%;
`;

export const AboutUsContainer = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  padding-bottom: 4rem;
  padding: 0 2rem;
`;

export const AboutUsHeader = styled.header`
  margin-block: 8rem 2rem;
  text-align: center;
  @media (max-width: 960px) {
    margin-top: 2rem;
  }
  span {
    color: ${(props) => props.theme["cyan-600"]};
    font-size: 0.875rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
  }
  p {
    font-size: 1.5rem;
    padding: 0 10rem;
    margin-bottom: 5rem;
  }

  @media (max-width: 960px) {
    margin-bottom: 8rem;
    width: 100%;

    p {
      padding: 0 2rem;
      font-size: 1.125rem;
    }
  }
`;

export const AboutUsVaBeauty = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 5rem;
  align-items: center;

  @media (max-width: 960px) {
    flex-direction: column;
  }

  h1 {
    margin-bottom: 2rem;
    color: ${(props) => props.theme["cyan-700"]};
    font-size: 2.5rem;
    font-family: "Prata";
    font-weight: normal;
    @media (max-width: 960px) {
      order: 1;
    }
  }
  p {
    font-size: 1rem;
    opacity: 80%;
    @media (max-width: 960px) {
      order: 2;
    }
  }

  > div {
    width: 45%;
    display: flex;
    flex-direction: column;

    @media (max-width: 960px) {
      width: 100%;
      text-align: center;
    }

    > div {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      @media (max-width: 960px) {
        order: 1;
      }
    }
  }
  .textContainer {
    @media (max-width: 960px) {
      order: 2;
    }
  }

  .imgContainer {
    background: linear-gradient(
      180deg,
      #edb9b9 0%,
      rgba(237, 185, 185, 0) 100%
    );

    flex: 1;
    width: 745px;
    height: 460px;
    border-radius: 12px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 12px;
      object-fit: cover;
    }

    @media (max-width: 960px) {
      margin-top: 2rem;
      width: 100%;
    }
  }
`;
export const AboutUsValesca = styled.div`
  padding: 1rem 5rem 6rem;
  display: flex;
  gap: 2rem;
  align-items: center;
  margin-top: 2rem;
  @media (max-width: 960px) {
    flex-direction: column;
    padding: initial;
    margin-top: 10rem;
  }

  .imgContainer {
    background: linear-gradient(
      180deg,
      #edb9b9 0%,
      rgba(237, 185, 185, 0) 100%
    );
    @media (max-width: 960px) {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }

    width: 300px;
    height: 460px;
    border-radius: 12px;

    img {
      border-radius: 12px;
      filter: drop-shadow(10px 30px 40px ${(props) => props.theme["gray-50"]});
    }
  }
  .specifications {
    width: 700px;
    padding: 2rem;

    @media (max-width: 960px) {
      width: 100%;
      text-align: center;
      padding: initial;
    }

    h3 {
      margin-bottom: 1.5rem;
      font-size: 2rem;
      font-family: "Prata";
      font-weight: normal;
      color: ${(props) => props.theme["cyan-700"]};
    }

    h3::after {
      content: "";
      display: block;
      width: 6rem;
      height: 4px;
      margin-block: 0.5rem;
      background: ${(props) => props.theme["pink-600"]};

      @media (max-width: 960px) {
        margin: 0 auto;
        width: 60%;
      }
    }

    strong {
      margin-bottom: 1.5rem;
      display: inline-block;
      width: 70%;
      color: ${(props) => props.theme["cyan-500"]};
      letter-spacing: 0.1rem;

      @media (max-width: 960px) {
        width: 100%;
        width: 100%;
      }
    }
    p {
      opacity: 80%;
      @media (max-width: 960px) {
        width: 100%;
      }
    }
  }
`;
