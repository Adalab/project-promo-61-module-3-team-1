import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./Landing.scss";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

import Contact from "./Contact.jsx";





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
      <div className="center">
            <h2>Share it on social media</h2>
            <div className="icons">
            <FaWhatsapp className="button__icon" />
            <FaLinkedin className="button__icon" />
            <FaXTwitter className="button__icon" /> 
            </div>
        </div>
      <Contact/>
      
      
      
      

      
    </div>
  );
}
