import GetAvatar from "../GetAvatar/GetAvatar";

const Form = ({ formData, setFormData, updateProjectAvatar }) => {

const handleInput = (ev) => {
    const inputName = ev.target.name;
    const inputValue = ev.target.value;

    setFormData({
        ...formData,
        [inputName]: inputValue
    });
};


    return (
        <form className="addForm">
            <h2 className="title">Información</h2>
            <fieldset className="addForm__group">
                <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
                <input className="addForm__input" type="text" id="name" placeholder="Nombre del proyecto" name="name" value={formData.name} onChange={handleInput} />

                <input className="addForm__input" type="text" id="slogan" placeholder="Slogan" name="slogan" value={formData.slogan} onChange={handleInput} />

                <div className="addForm__2col">
                    <input className="addForm__input" type="url" id="repo" placeholder="Link al repositorio" name="repo" value={formData.repo} onChange={handleInput} />

                    <input className="addForm__input" type="url" id="demo" placeholder="Link a la demo" name="demo" value={formData.demo} onChange={handleInput} />
                </div>         

                <input className="addForm__input" type="text" id="technologies" placeholder="Tecnologías" name="technologies" value={formData.technologies} onChange={handleInput} />

                <textarea className="addForm__input" type="text" id="desc" placeholder="Descripción" rows="5" name="desc" value={formData.desc} onChange={handleInput} ></textarea>
            </fieldset>
        
            <fieldset className="addForm__group">
                <legend className="addForm__title">Cuéntanos sobre la autora</legend>

                <input className="addForm__input" type="text" id="autor" placeholder="Nombre" name="autor" value={formData.autor} onChange={handleInput} />

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

                <input className="addForm__hidden" type="file" id="photo" name="photo"  onChange={handleInput} />

                <button className="button--large">Guardar proyecto</button>
            </fieldset>
            
        </form>
    )
}

export default Form;

