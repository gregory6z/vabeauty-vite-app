import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 5rem;
  padding: 0 2rem;
  background: ${({ theme }) => theme["cyan-500"]};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
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
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    padding: 0 0.5rem;
    color: ${({ theme }) => theme["gray-300"]};
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
      color: ${({ theme }) => theme.white};
    }
    &.active {
      color: ${({ theme }) => theme["pink-500"]};
      font-weight: bold;
      border-bottom: 3px ${({ theme }) => theme["pink-500"]} solid;
      cursor: pointer;
    }
  }
`;
