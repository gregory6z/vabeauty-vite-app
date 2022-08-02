import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthProvider>

      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
