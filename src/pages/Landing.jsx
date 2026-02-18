import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./Landing.scss";
import yiyi from "../images/yiyi-avatar.png";
import carmen from "../images/carmen-avatar.png";
import maddie from "../images/maddie-avatar.png";
import together from "../images/together-avatar.png";

const projects = [
  {
    name: "Visionary Corner",
    author: "Maddie",
    description: "Diseños exclusivos con tecnología moderna.",
    image: maddie
  },
  {
    name: "Urban Tech Lab",
    author: "Carmen",
    description: "Soluciones elegantes pensadas para inspirar.",
    image: carmen
  },
  {
    name: "Future Design Hub",
    author: "Yiyi",
    description: "Creatividad y funcionalidad unidas en cada detalle.",
    image: yiyi
  },
  {
    name: "Elegant Workspace",
    author: "Equipo 1",
    description: "Innovación visual diseñada para el día a día.",
    image: together
  }
];

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      

      <div className="landing__header">
        <h1 className="landing__title">Project Board</h1>

        <p className="landing__subtitle">
          Generate a shareable visual card for your projects.
        </p>

        <button
          className="landing__button"
          onClick={() => navigate("/form")}
        >
          CREATE NEW PROJECT
        </button>
      </div>

      <div className="landing__grid">
        {projects.map((project, index) => (
          <div key={index} className="landing__card">
            <img src={project.image} alt={project.name} className="landing__card-image" />

            <h3 className="landing__card-title">
              {project.name}
            </h3>

            <p className="landing__card-text">
              {project.description}
            </p>

            <span className="landing__card-author">
              {project.author}
            </span>
          </div>
        ))}
      </div>
      <div>
        <h2>Share it on social media</h2>
      </div>

      
    </div>
  );
}
