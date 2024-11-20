import LogIn from "./views/Login/LogIn";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LayoutNoSidebar from "./components/Layout/LayoutNoSidebar";
import Home from "./views/Home/Home";
import SimpleLayout from "./components/Layout/SimpleLayout";
import DiagnosticQuiestions from "./views/DiagnosticQuiestions/DiagnosticQuiestions";
import useAuth from "./hooks/useAuth";
import NotFound from "./views/NotFound/NotFound";
import PasswordManager from "./views/PasswordManager/PasswordManager";
import Phishing from "./views/Capacitaciones/Phishing";
import Capacitaciones from "./views/Capacitaciones/Capacitaciones";
import Monitoreo from "./views/Monitoreo/Monitoreo";

function App() {
  const { currentUser } = useAuth();
  return (
    <>
      <Routes>
        {!currentUser ? (
          <Route path="/" element={<SimpleLayout />}>
            <Route path="/" element={<LogIn />} />
          </Route>
        ) : (
          <>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/monitoreo" element={<Monitoreo />} />
              <Route path="/capacitaciones" element={<Capacitaciones />} />
              <Route path="/capacitaciones/phishing" element={<Phishing />} />
              <Route path="/gestor-contrasenas" element={<PasswordManager />} />
            </Route>
            <Route path="/preguntas-diagnostico" element={<LayoutNoSidebar />}>
              <Route
                path="/preguntas-diagnostico"
                element={<DiagnosticQuiestions />}
              />
            </Route>
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
