import "../../main.scss";
import adalabLogo from "../../images/bg-adalab.png";
import laptopLogo from "../../images/defaultAvatar.png"

const Header = () => {
  return (
    <header className="header">
        <a className="header__brand" href="./" title="Haz click para volver a la página inicial">
            <img 
                className="header__companyLogo" 
                src={laptopLogo}
                alt="Logo proyectos molones"
                />
            <h1 className="header__title">Proyectos molones</h1>
        </a>
        <img 
            className="logoSponsor" 
            src={adalabLogo} 
            alt="Logo Adalab"
            />
    </header>
  );
}

export default Header;
