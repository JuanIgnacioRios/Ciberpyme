import './Navbar.css';
import logo from '../../assets/Logo.png';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="nav-links">
                    <a href="">CIBERPYME</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;