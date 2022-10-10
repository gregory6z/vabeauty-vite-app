import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${(props) => props.theme["cyan-800"]};
  padding: 0 1rem;
`;

export const FooterContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 2rem;

  color: ${(props) => props.theme["gray-50"]};

  .socialNetworks {
    display: flex;
    gap: 0.5rem;
  }
`;
