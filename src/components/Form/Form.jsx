import GetAvatar from "../GetAvatar/GetAvatar";
import { useNavigate } from "react-router-dom";

const Form = ({ formData, setFormData, updateProjectAvatar, resetForm }) => {

    
    const handleInput = (ev) => {
        const inputName = ev.target.name;
        
        setFormData({
            ...formData,
            [inputName]: ev.target.type === "file"
                ? ev.target.files[0]
                : ev.target.value
        });
};

    const navigate = useNavigate();
    // SUBMIT FORMULARIO
    const handleSubmit = (ev) => {
        
            ev.preventDefault();
            
                    
            navigate("/cardPage");
        };


    return (
        <form className="addForm" onSubmit={handleSubmit}>
            <h2 className="title">Información</h2>

            <fieldset className="addForm__group">
                <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
                <input className="addForm__input" type="text" id="name" placeholder="Nombre del proyecto" required name="name" value={formData.name} onChange={handleInput} />

                <input className="addForm__input" type="text" id="slogan" placeholder="Slogan" name="slogan" value={formData.slogan} onChange={handleInput} />

                <div className="addForm__2col">
                    <input className="addForm__input" type="url" id="repo" placeholder="Link al repositorio" name="repo" value={formData.repo} onChange={handleInput} />

                    <input className="addForm__input" type="url" id="demo" placeholder="Link a la demo" name="demo" value={formData.demo} onChange={handleInput} />
                </div>         

                <input className="addForm__input" type="text" id="technologies" placeholder="Tecnologías" required name="technologies" value={formData.technologies} onChange={handleInput} />

                <textarea className="addForm__input" type="text" id="desc" placeholder="Descripción" rows="5" minLength={20} maxLength={300} name="desc" value={formData.desc} onChange={handleInput} ></textarea>
            </fieldset>
        
            <fieldset className="addForm__group">
                <legend className="addForm__title">Cuéntanos sobre la autora</legend>

                <input className="addForm__input" type="text" id="autor" placeholder="Nombre" required name="autor" value={formData.autor} onChange={handleInput} />

                <input className="addForm__input" type="text" id="job" placeholder="Trabajo" name="job" value={formData.job} onChange={handleInput} />
            </fieldset>
        
            <fieldset className="addForm__group--upload">
                    <GetAvatar
                    avatar={formData.image}
                    updateAvatar={updateProjectAvatar}
                    text="Subir foto del proyecto"
                    />
                {/* <label htmlFor="image" className="button">Subir foto del proyecto</label> */}

                <input className="addForm__hidden" type="file" id="image" name="image"  onChange={handleInput} />

                <label htmlFor="photo" className="button">Subir foto de la autora</label>

                <input className="addForm__hidden" type="file" id="photo" name="photo"  onChange={handleInput}  />

                <button className="button--large">Guardar proyecto</button>
                <button type="button" className="button button--large" onClick={resetForm}>Reset</button>
            </fieldset>
            
        </form>
    )
}

export default Form;

