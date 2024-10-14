import LogIn from './views/Login/LogIn'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './views/Navbar/Navbar';

function App() {

  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
