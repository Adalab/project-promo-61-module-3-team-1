import sendDataToApi from '../services/Api';
import { useState, useEffect } from 'react';



const CardPage =  ({ formData}) => {
    
    
        const [url, setUrl] = useState("");

        useEffect(() => {

            const createCard = async () => {
            const returnedUrl = await sendDataToApi(formData);
            setUrl(returnedUrl);
            };
            createCard();
        }, [formData]);


    
    return (
   <section>
    <h2>Tu tarjeta creada:</h2>

        {url ? (
        <>
            <a href={url} target="_blank" rel="noopener noreferrer">
            Abrir tarjeta en nueva pestaña
            </a>

            <iframe
            src={url}
            title="Tarjeta creada"
            width="100%"
            height="600"
            style={{ border: "none", marginTop: "20px" }}
            />
        </>
        ) : (
        <p>Creando tarjeta...</p>
        )}
    </section>
    );
  
    

}

export default CardPage;