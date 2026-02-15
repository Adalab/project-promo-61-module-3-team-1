import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./Landing.scss";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <Header/>

      <div className="landing__header">
        <h1 className="landing__title">
          Proyectos Molones
        </h1>

        <p className="landing__subtitle">
          Escaparate en línea para recoger ideas a través de la tecnología.
        </p>

        <button
          className="landing__button"
          onClick={() => navigate("/form")}
        >
          NUEVO PROYECTO
        </button>
      </div>

      <div className="landing__grid">

        <div className="landing__card">
          <h3 className="landing__card-title">
            Elegant Workspace
          </h3>
          <p className="landing__card-text">
            Diseños exclusivos con tecnología moderna.
          </p>
        </div>

        <div className="landing__card">
          <h3 className="landing__card-title">
            Elegant Workspace
          </h3>
          <p className="landing__card-text">
            Diseños exclusivos con tecnología moderna.
          </p>
        </div>

        <div className="landing__card">
          <h3 className="landing__card-title">
            Elegant Workspace
          </h3>
          <p className="landing__card-text">
            Diseños exclusivos con tecnología moderna.
          </p>
        </div>

        <div className="landing__card">
          <h3 className="landing__card-title">
            Elegant Workspace
          </h3>
          <p className="landing__card-text">
            Diseños exclusivos con tecnología moderna.
          </p>
        </div>

      </div>

      <Footer />

    </div>
  );
}
