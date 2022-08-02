import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing:border-box; 
    -webkit-font-smoothing: antialiased;

    scrollbar-width: thin ;
    scrollbar-color: ${(props) => props.theme["pink-500"]}

  }

  *::webkit-scrollbar{
    width:6px;
  }

  *::-webkit-scrollbar {
    width: 6px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme["gray-300"]};
    border-radius:6px;
  }


  html {
    @media (max-width: 1080px) {
    font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
 


  body{
    background: ${(props) => props.theme["gray-100"]};
    color: ${(props) => props.theme["gray-900"]};
  }

  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem "DM Sans", sans-serif;
    color: ${(props) => props.theme["gray-700"]};
    
  }
  

`;
