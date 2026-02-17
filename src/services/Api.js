const sendDataToApi = async (userData) => {
    try {
        const respuesta = await fetch("https://api-pw.dev.adalab.es/api/projectCard", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"},
            body: JSON.stringify(userData)
            });

            if (!respuesta.ok) {
                throw new Error ("Error en la petición")
            }
            const data = await respuesta.json();
            const url = data.cardURL;            
            console.log(url);
            return url; //para usarla fuera

        } catch (error) {
            console.error(error)
        }

    };





export default sendDataToApi;
