import styled from "styled-components";

export const DepositionsContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme["gray-100"]};
  height: calc(100vh - 5rem);
  margin-top: 5rem;
  border-block: 0.05px solid #0ea5d7;
`;

export const DepositionsContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

export const DepositionsHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    display: block;
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
`;

export const DepositionsItems = styled.div`
  display: flex;
  width: 10rem;
  height: 10rem;
  background: red;
`;
