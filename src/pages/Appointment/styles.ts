import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const CheckoutContainer = styled.div`
  margin: 2.5rem auto;
  width: 1120px;

  @media (max-width: 1130px) {
    overflow: hidden;
    width: 100%;

    margin: initial;
  }

  .middleText {
    @media (max-width: 1130px) {
      display: none;
    }
    margin-top: -1.25rem;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme["cyan-700"]};
    h1 {
      font-family: "Prata";
      font-weight: 400;
      font-size: 2.5rem;
    }

    button {
      color: ${({ theme }) => theme["cyan-700"]};
      position: relative;
      bottom: -1rem;
      border: 0;
      cursor: pointer;
      background: transparent;

      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  main {
    box-shadow: 10px 10px 63px -46px rgba(30, 60, 71, 1);
    -webkit-box-shadow: 10px 10px 63px -46px rgba(30, 60, 71, 1);
    -moz-box-shadow: 10px 10px 63px -46px rgba(30, 60, 71, 1);
    border: 0.5px solid rgb(218, 218, 218);
    padding: 3.5rem 3.5rem 3rem;
    border-radius: 12px;
    background: ${({ theme }) => theme["gray-50"]};
    width: 100%;
    height: 40.5rem;
    gap: 2.5rem;
    display: flex;

    .apres-midi {
      margin-top: 1rem;
    }

    .calendar {
      @media (max-width: 900px) {
        width: 22rem;
        margin: 0 auto;
      }
      @media (max-width: 430px) {
        width: 22rem;
      }
    }

    @media (max-width: 1130px) {
      border-radius: initial;
      height: 100%;
      padding-bottom: 4rem;
    }
    @media (max-width: 900px) {
      flex-direction: column;
    }
    @media (max-width: 450px) {
      padding: initial;
      width: 100%;
      padding: 1rem;
    }
  }
`;

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 2.5rem;
    color: ${({ theme }) => theme["cyan-700"]};
    letter-spacing: 0.1rem;
  }
  p {
    margin-bottom: 1rem;
  }
`;

export const SchedulesContainer = styled.div`
  flex: 1;

  span {
    display: inline-block;
    width: 80%;
    margin-bottom: 1rem;
  }

  h3 + button {
    margin-top: 1rem;
  }
`;

export const SchedulerButtons = styled.div`
  flex-wrap: wrap;
  display: flex;
  gap: 0.75rem 0.75rem;
  margin-block: 0.5rem;
  flex-direction: row;
`;

export const RadioButton = styled(RadioGroup.Item)`
  width: 85px;
  height: 40px;
  border: 0.5px solid ${({ theme }) => theme["gray-300"]};
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) => props.theme.white};
  color: ${(props) => props.theme["cyan-700"]};
  font-weight: 700;
  letter-spacing: 0.1rem;

  &[disabled] {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &[data-state="unchecked"]:not(:disabled):hover {
    background: #eaf0f2;
  }

  &[data-state="checked"] {
    background: ${({ theme }) => theme["pink-500"]};
  }
`;

export const ConfirmationButton = styled.button`
  letter-spacing: 0.1rem;
  margin-top: 2.5rem;
  padding: 1rem 1rem;
  width: 100%;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  background: ${({ theme }) => theme["pink-500"]};
  color: ${({ theme }) => theme["cyan-700"]};
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  transition: background-color 200ms;

  &:not(:disabled):hover {
    background: ${({ theme }) => theme["pink-600"]};
    color: ${({ theme }) => theme["cyan-700"]};
  }

  &:disabled {
    background: ${({ theme }) => theme["pink-600"]};
    cursor: not-allowed;
  }
`;
