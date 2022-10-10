import styled from "styled-components";

export const SuccessContainer = styled.section`
  width: 100%;
  text-align: center;
  border-radius: 12px;

  svg {
    color: ${({ theme }) => theme["pink-800"]};
  }

  h1 {
    margin-top: 2rem;
    font-size: 2rem;
    color: ${({ theme }) => theme["pink-800"]};
  }
`;

export const RendeVousContainer = styled.div`
  display: flex;
  text-align: left;
  align-items: center;

  @media (max-width: 1160px) {
    flex-direction: column;
    gap: initial;
  }

  justify-content: center;
  gap: 4rem;
  margin-bottom: 4.5rem;
`;

export const ServicesContainer = styled.div`
  margin-top: 3.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media (max-width: 1160px) {
    order: 1;
  }
  svg {
    color: ${({ theme }) => theme["cyan-600"]};
  }
`;
export const ServiceDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    font-size: 1.25rem;
  }
  strong {
    color: ${({ theme }) => theme["cyan-600"]};
  }
`;

export const IconsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
 
`;
export const MakeAnotherAppointmentButton = styled.button`
  border: 3px solid ${({ theme }) => theme["pink-800"]};
  cursor: pointer;
  background: transparent;
  padding: 1rem 1.5rem;
  border-radius: 6px;
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme["cyan-600"]};
  margin: 0 auto;
  margin-top:1rem ;

  svg {
    color: ${({ theme }) => theme["cyan-600"]};
  }
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  &:hover {
    border: 3px solid transparent;
    background: ${({ theme }) => theme["pink-800"]};
    color: ${({ theme }) => theme["cyan-100"]};

    svg {
      color: ${({ theme }) => theme["cyan-100"]};
    }
  }
`;
