import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  /* padding-block: 2rem; */
`;

export const ServiceContainer = styled.div`
  /* border-bottom: 0.5px solid rgb(218, 218, 218);
  border-top: 0.875px solid rgb(218, 218, 218);
  border-left: 0.875px solid rgb(218, 218, 218);
  border-right: 0.875px solid rgb(218, 218, 218); */

  margin: 0 auto;

  width: 70rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 100%;
    padding: initial;
  }

  &:nth-child(2) {
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;

    @media (max-width: 1024px) {
      border-top-right-radius: initial;
      border-top-left-radius: initial;
    }
  }
  &:last-child {
    margin-bottom: 4rem;
  }

  h1 {
    text-align: left;
    margin-left: 40.5%;
    font-family: "Prata";
    font-size: 2rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme["cyan-700"]};
    @media (max-width: 1024px) {
      margin-top: 4rem;
    }
  }
  .Container {
    display: flex;
    align-items: flex-start;
    @media (max-width: 1024px) {
      /* flex-direction: column; */
      gap: 1rem;
      padding: 0 2rem;
      /* padding: initial; */
    }
    @media (max-width: 625px) {
      flex-direction: column;
      padding: none;
    }
  }

  .imgContainer {
    margin-top: 2rem;
    width: 228px;
    height: 241px;

    @media (max-width: 1024px) {
      margin: 0 auto;
    }

    border-radius: 6px;

    img {
      border-radius: 6px;
      width: 228px;
      height: 241px;
    }
  }

  &:last-child {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    border-bottom: transparent;
  }

  padding: 3.5rem 3.5rem;

  display: flex;
  align-items: flex-start;
  flex-direction: row;
`;

export const ServiceCardContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  flex: 1;
  padding: 0 1rem;

  @media (max-width: 625px) {
    padding: initial;
  }
`;

export const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 0.5px solid ${({ theme }) => theme["gray-300"]};
  background: ${({ theme }) => theme.white};
  padding: 2rem;
  border-radius: 6px;

  &:last-child {
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-block: 1rem;
    color: ${({ theme }) => theme["cyan-600"]};
  }

  .descriptions {
    p {
      margin-top: 0.25rem;
      font-size: 1rem;
      opacity: 80%;
    }
  }

  strong {
    font-size: 1.5rem;
    flex: 1;
    text-align: center;
    letter-spacing: 0.08rem;
    margin-block: 2rem 1rem;
    color: ${({ theme }) => theme["cyan-500"]};
  }

  button {
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
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.5rem;
`;
