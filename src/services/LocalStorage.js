//Guardar en localStorage
const saveInStorage = (formData) => {
localStorage.setItem('formData', JSON.stringify(formData));
};

//Cargar desde localStorage
const loadFromStorage = () => {
    const storedData = localStorage.getItem('formData')

    if (storedData) {
        return JSON.parse(storedData)
    } else {
        return null;
    };
};

export { saveInStorage, loadFromStorage } 