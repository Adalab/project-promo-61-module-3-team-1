import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.scss";

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

        <span className="header__link">
          Contacto
        </span>
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
