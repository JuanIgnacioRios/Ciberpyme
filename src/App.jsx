import LogIn from './views/Login/LogIn'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './views/Navbar/Navbar';
import DiagnosticQuiestions from './views/DiagnosticQuiestions/DiagnosticQuiestions';

function App() {

  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="preguntas-diagnostico" element={<DiagnosticQuiestions />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
