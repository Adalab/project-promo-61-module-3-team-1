import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.scss";
import { Link } from "react-router-dom";



const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      <div 
        className="header__logo"
        onClick={() => navigate("/")}
      >
        ProjectBoard
      </div>

      <nav className={`header__nav ${menuOpen ? "active" : ""}`}>
        <span 
          className="header__link"
          onClick={() => navigate("/")}
        >
          Inicio
        </span>

        <span className="header__link">
          Proyectos
        </span>

       
        <Link to="/Contact"className="header__link">Contacto</Link>
      </nav>

      <div 
        className="header__menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

    </header>
  );
};

export default Header;
