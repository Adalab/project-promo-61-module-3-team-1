
const sendDataToApi = (userData) => {
    console.log('LLAMADA API');
    return fetch("https://apipw.dev.adalab.es/api/projectCard", { //api no funciona
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json());

}

export default sendDataToApi;