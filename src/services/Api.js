
const sendDataToApi = (userData) => {
    return fetch("https://apipw.dev.adalab.es/api/projectCard ", {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json());

}

export default sendDataToApi;