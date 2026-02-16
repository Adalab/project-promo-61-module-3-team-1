import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./Landing.scss";

      const projects = [
        {
          name:"Elegant Workspace",
          author: "Maddie",
          description:"Diseños exclusivos con tecnología moderna."
        },
         { 
          name:"Elegant Workspace",
          author: "Carmen",
          description:"Diseños exclusivos con tecnología moderna."


        },
        { 
          name:"Elegant Workspace",
          author: "Yiyi",
          description:"Diseños exclusivos con tecnología moderna."
        },
        {
          name:"Elegant Workspace",
          author: "Equipo 1",
          description:"Diseños exclusivos con tecnología moderna."
        }
];
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
          className="landing__button" onClick={() => navigate("/form")}
        >
          NUEVO PROYECTO
        </button>
      </div>

          <div className="landing__grid">
            {projects.map((project,index)=> (
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
             <Footer />
           </div>
);
}