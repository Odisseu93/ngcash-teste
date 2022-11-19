import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./assets/context/AuthProvider";
import { Cadastro } from "./pages/Cadastro/ixdex";
import { Login } from "./pages/Login";
import GlobalStyle from "./styles/global";
import { theme } from "./styles/theme";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Logado } from "./components/Private/Logado";

function App() {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <Router>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path={"/cadastro"} element={<Cadastro />} />
              <Route path={"/login"} element={<Login />} />
              <Route
                path={"/logado"}
                element={
                  <Logado>
                    <h2>teste componente logado!</h2>
                  </Logado>
                }
              />
            </Routes>
          </ThemeProvider>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
