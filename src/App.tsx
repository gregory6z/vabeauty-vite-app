import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { AuthProvider } from "./context/AuthContext";
import { ServicesContextProvider } from "./context/ServicesContext";
import { useEffect } from "react";
import AOS from "aos";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <ServicesContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ServicesContextProvider>
      </AuthProvider>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
