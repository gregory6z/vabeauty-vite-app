import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme["gray-50"]};

  padding: 0 1rem;
`;

export const ContactContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  height: calc(100vh - 5rem);
  align-items: center;
  display: flex;

  @media (max-width: 765px) {
    flex-direction: column;
    padding-top: 4rem;
    height: initial;
  }

  .textContainer {
    @media (max-width: 765px) {
      flex-direction: column;
      width: 100%;
      height: initial;

      h1{
        text-align: center;
      }
    }
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h1 {
      font-size: 2.5rem;
      margin-bottom: 2rem;
      color: ${(props) => props.theme["cyan-700"]};
    }
    p {
      font-size: 1.125rem;
    }

    .contactDiv {
      display: flex;
      gap: 0.5rem;
      align-items: center;

      svg {
        color: ${(props) => props.theme["pink-700"]};
      }
    }

    button {
      @media (max-width: 765px) {
        width: 100%;
      }
      margin-top: 1rem;
      background: ${(props) => props.theme["pink-500"]};
      border: 0;
      width: 80%;
      font-size: 1.125rem;

      padding: 0.75rem 2rem;
      border: 0;
      border-radius: 6px;
      background: ${({ theme }) => theme["pink-300"]};

      font-weight: bold;
      letter-spacing: 0.1rem;
      color: ${({ theme }) => theme["cyan-600"]};

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      transition: 300ms;
      cursor: pointer;

      @media (max-width: 1024px) {
        font-size: 0.75rem;
      }

      &:hover {
        color: ${({ theme }) => theme["cyan-700"]};
        background: ${({ theme }) => theme["pink-500"]};
      }
    }
  }

  .imgContainer {
    @media (max-width: 765px) {
      flex-direction: column;
      width: 100%;
      height: initial;
      margin-block: 4rem 8rem;
    }
    flex: 1;
    border-radius: 5px;
    width: 50%;
    height: 30rem;

    box-shadow: 10px 10px 63px -46px rgba(30, 60, 71, 1);
    -webkit-box-shadow: 10px 10px 63px -46px rgba(30, 60, 71, 1);
    -moz-box-shadow: 10px 10px 63px -46px rgba(30, 60, 71, 1);
    border: 0.5px solid rgb(218, 218, 218);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }
`;
