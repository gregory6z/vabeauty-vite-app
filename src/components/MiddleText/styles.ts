import styled from "styled-components";

export const MiddleTextContainer = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
  width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  margin-top:1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme["gray-50"]};
  h1 {
    font-family: "Prata";
    font-weight: 400;
    font-size: 2.5rem;
 
  }

  button {
    color: ${({ theme }) => theme["gray-50"]};
    position: relative;
    bottom: -1rem;
    border: 0;
    cursor: pointer;
    background: transparent;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
