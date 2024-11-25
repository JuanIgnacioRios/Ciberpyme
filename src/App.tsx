import React from "react";
import LogIn from "./views/Login/LogIn";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
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
import { useEffect } from "react";
import useDiagnostic from "./hooks/useDiagnostic";
import { IDiagnosticState } from "./store/slices/diagnosticSlice";
import { apiFetch } from "./api/apiFetch";
import usePhishing from "./hooks/usePhishing";
import { IPhishingCampaign } from "./store/slices/phishingSlice";

function App() {
  const { currentUser } = useAuth();
  const { setEmailList, setPreviousCampaigns } = usePhishing();
  const { setDiagnostic } = useDiagnostic();
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      apiFetch<IDiagnosticState>(`/diagnostic/${currentUser.username}`)
        .then((response) => {
          setDiagnostic(response);
          if (response.score === -1) navigate("/preguntas-diagnostico");
        })
        .catch(() => {
          navigate("/preguntas-diagnostico");
        });
      apiFetch<string[]>(`/phishing/emails/${currentUser.username}`).then(
        (response) => {
          setEmailList(response);
        }
      );
      apiFetch<IPhishingCampaign[]>(
        `/phishing/campaigns/${currentUser.username}`
      ).then((response) => {
        setPreviousCampaigns(response);
      });
    }
  }, [currentUser]);

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
