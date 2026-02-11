import "../../main.scss";
import logoSponsor from "../../images/logo-adalab.png"

const Footer = () => {
  return (
    <>
        <footer className="footer">
            <img className="logoSponsor" src={logoSponsor} alt="Logo Adalab"/>
        </footer>
    </>
  );
}

export default Footer;
