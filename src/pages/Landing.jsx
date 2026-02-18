import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./Landing.scss";

const projects = [
  {
    name: "Elegant Workspace",
    author: "Maddie",
    description: "Diseños exclusivos con tecnología moderna."
  },
  {
    name: "Elegant Workspace",
    author: "Carmen",
    description: "Diseños exclusivos con tecnología moderna."
  },
  {
    name: "Elegant Workspace",
    author: "Yiyi",
    description: "Diseños exclusivos con tecnología moderna."
  },
  {
    name: "Elegant Workspace",
    author: "Equipo 1",
    description: "Diseños exclusivos con tecnología moderna."
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
