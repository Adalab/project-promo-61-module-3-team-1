import imgYiyi from "../images/imageYiyi.png";
import imgMaddie from "../images/imageMaddie.png";
import imgCarmen from "../images/imageCarmen.png";

import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import './Contact.scss';


const Projects = () => {

   
    return (
        <div className="pageContact">
            <p>Some Examples</p>
        <div className="containerimgChicas">
            <img src={imgMaddie} alt="Maddie" className="imgChicas"/>
            <img src={imgYiyi} alt="Yiyi" className="imgChicas"/>
            <img src={imgCarmen} alt="Carmen" className="imgCar"/>
        </div>
        
      </div>
      
    )
}

export default Projects;