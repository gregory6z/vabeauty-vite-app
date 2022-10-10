import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  /* background: ${(props) => props.theme["cyan-600"]}; */
  /* background-image: linear-gradient(
    109.6deg,
    ${(props) => props.theme["cyan-500"]} 14.2%,
    ${(props) => props.theme["cyan-600"]} 84%
  ); */

  background: linear-gradient(
    109.74deg,
    ${(props) => props.theme["cyan-600"]} 0.63%,
    ${(props) => props.theme["cyan-700"]} 93.09%
  );

  padding: 0 2rem;
  border-bottom: 0.05px solid #0ea5d7;
  overflow: hidden;

  @media (max-width: 1000px) {
    height: initial;
  }
`;

export const HeroContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-end;
  } ;
`;

export const IntroTitle = styled.div`
  @media (max-width: 1000px) {
    text-align: center;
  }

  span {
    font-size: 1.125rem;
    display: inline-block;
    letter-spacing: 0.1rem;
    font-weight: bold;

    color: ${(props) => props.theme["pink-600"]};

    @media (max-width: 375px) {
      font-size: 0.75rem;
      margin-block: initial;
    }

    @media (max-width: 1000px) {
      margin-block: 4rem 2rem;
      font-size: 1rem;
    }
  }
  h1 {
    margin-top: 2rem;
    font-size: 3.5rem;
    font-family: "Prata";
    color: ${(props) => props.theme["gray-50"]};
    @media (max-width: 1000px) {
      font-size: 2.75rem;
    }
    @media (max-width: 375px) {
      font-size: 2rem;
      margin-top: initial;
    }
  }
  p {
    margin-block: 2rem;
    font-size: 1.5rem;
    padding-right: 4rem;

    color: ${(props) => props.theme["gray-200"]};

    @media (max-width: 1000px) {
      font-size: 1.25rem;
      margin-block: 1rem 2.5rem;
      padding: 0 4rem;
    }
    @media (max-width: 375px) {
      font-size: 0.875rem;
      padding: initial;
    }
  }

  button {
    color: ${(props) => props.theme["cyan-600"]};
    background: ${(props) => props.theme["pink-600"]};
    border: 0;
    padding: 1.5rem 2rem;
    letter-spacing: 0.1rem;
    border-radius: 7px;
    font-weight: bold;
    font-size: 1.125rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: background-color 200ms;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme["pink-700"]};
    }

    @media (max-width: 1000px) {
      margin: 0 auto;
      margin-bottom: 8rem;
    }
    @media (max-width: 375px) {
      margin-bottom: 5rem;
    }
    @media (max-width: 425px) {
      font-size: 0.875rem;
      padding: 1rem 1rem;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 1rem;
  height: calc(93vh - 5rem);
  position: relative;
  bottom: 0;

  @media (max-width: 1000px) {
    width: 40rem;
    margin: initial;
    margin-top: 1rem;
    /* height: initial; */
    margin: 0 auto;
  }

  @media (max-width: 600px) {
  width: 25rem;
    height: 50vh;
  }

  .womanImg {
    filter: drop-shadow(10px 20px 120px ${(props) => props.theme["cyan-200"]});
    bottom: 0;
    position: absolute;
    width: 125%;
    object-position: -1rem 1rem;

    @media (min-height: 1000px) {
      width: 135%;
    }

    @media (max-width: 1000px) {
      width: 100%;
      height: 100%;

      object-position: initial;
    }
    /* @media (max-width: 724px) {
      width: 30rem;
      object-position: 1rem 1rem;
    }

    @media (max-width: 375px) {
      width: 20rem;
      object-position: 1rem 1rem;
      object-fit: fill;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    } */
  }
`;
