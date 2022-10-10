import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  .menu {
    border: 0;
    background: transparent;

    letter-spacing: 0;
    align-items: center;
    justify-content: center;
    display: flex;

    @media (min-width: 745px) {
      display: none;
    }
  }

  width: 100%;
  height: 5rem;
  padding: 0 2rem;
  background: ${(props) => props.theme["gray-50"]};
  border-bottom: 0.05px solid #0ea5d7;
  /* background: #202024; */

  /* background-image: linear-gradient(
    109.6deg,
    ${(props) => props.theme["cyan-500"]} 14.2%,
    ${(props) => props.theme["cyan-600"]} 84%
  ); */

  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 1120px;
    display: flex;

    align-items: center;
    justify-content: space-between;
  }
  img {
    margin-top: 5px;
  }
`;

export const NavContainer = styled.nav`
  @media (max-width: 746px) {
    visibility: hidden;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 740px) {
    flex-direction: column;
  }

  a {
    text-decoration: none;
    padding: 0 0.5rem;
    color: ${({ theme }) => theme["cyan-600"]};
    font-size: 1.125rem;
    font-weight: 400;

    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;

    height: 5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: color 100ms;

    & + a {
      margin-left: 1rem;
    }
    &:hover {
      color: ${({ theme }) => theme["cyan-700"]};
    }
    &.active {
      color: ${({ theme }) => theme["pink-600"]};
      font-weight: bold;
      border-bottom: 3px ${({ theme }) => theme["pink-500"]} solid;
      cursor: pointer;
    }
  }
`;
