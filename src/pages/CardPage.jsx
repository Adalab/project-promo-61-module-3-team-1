/*import sendDataToApi from '../services/Api';
import { useState } from 'react';*/



const CardPage = ({ formData}) => {

    

  

return (
    <div className='cardPage'>
        <section className="preview">
            <div className="projectImage"></div>
            <article className="card">
            <h2 className="card__projectTitle"><span className="card__projectTitle--text">Personal project card</span></h2>

            <div className="card__author">
                <div className="card__authorPhoto"></div>
                <p className="card__job">
                {formData.job || "Full stack Developer"}
                </p>
                <h3 className="card__name"> {formData.autor || "Emmelie Bjôrklund"}</h3>
            </div>
        
            <div className="card__project">            
                <h3 className="card__name">{formData.name || "Elegant Workspace"}</h3>
                <p className="card__slogan">{formData.slogan || "Diseños Exclusivos"}</p>
                <h3 className="card__descriptionTitle">Product description</h3>
                <p className="card__description">{formData.desc || "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione"}</p>

                <div className="card__technicalInfo">
                <p className="card__technologies">{formData.technologies || "React JS - HTML - CSS"}</p>
            
                <a className="icon icon__www" href={formData.demo ? (formData.demo.startsWith("http") ? formData.demo : `https://${formData.demo}`) : "#"} title="Haz click para ver el proyecto online">
                    Web link
                </a>
                <a className="icon icon__github" href={formData.repo ? (formData.repo.startsWith("http") ? formData.repo : `https://${formData.repo}`) : "#"} title="Haz click para ver el código del proyecto">
                    GitHub link
                </a>
                
                </div>
            </div>
            </article>
        </section>
    </div>
    
)
}

export default CardPage;