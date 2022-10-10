import styled from "styled-components";

export const CheckoutCardContainer = styled.div`
  margin: 0 auto;
  display: flex;
  border-radius: 6px;
  margin-bottom: 2rem;
  font-size: 1.15rem;
  gap: 2.5rem;
  background: ${({ theme }) => theme.white};

  border: 3px solid ${({ theme }) => theme["pink-700"]};
  padding: 0.75rem;
  align-items: center;
  justify-content: center;

  svg {
    color: ${({ theme }) => theme["pink-700"]};
  }

  /* background:${({ theme }) => theme["cyan-200"]} ; */

  flex-direction: row;

  strong {
    font-size: 1.125rem;
    color: ${({ theme }) => theme["cyan-700"]};
  }
`;

export const CartServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const CartServiceItem = styled.div`
  display: flex;
  gap: 0.5rem;
`;
