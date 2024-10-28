import LogIn from "./views/Login/LogIn";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./views/Home/Home";
import SimpleLayout from "./components/Layout/SimpleLayout";
import DiagnosticQuiestions from './views/DiagnosticQuiestions/DiagnosticQuiestions';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<SimpleLayout />}>
            <Route path="/login" element={<LogIn />} />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route path="/inicio" element={<Home />} />
            <Route path="/monitoreo" element={<Home />} />
            <Route path="/capacitaciones" element={<Home />} />
            <Route path="/gestor-contrasenas" element={<Home />} />
            <Route path="preguntas-diagnostico" element={<DiagnosticQuiestions />} />  
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
