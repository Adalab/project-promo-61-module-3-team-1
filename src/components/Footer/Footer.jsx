import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="page__footer">
      <small className="copy-footer">
        © 2026 Todos los derechos reservados.{" "}
        <a
          className="link__adalab"
          href="https://adalab.es"
          target="_blank"
          rel="noopener noreferrer"
        >
          Adalab
        </a>
      </small>
    </footer>
  );
};

export default Footer;
