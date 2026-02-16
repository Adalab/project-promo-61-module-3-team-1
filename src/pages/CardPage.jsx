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
        }, []);


    
    return (
    <section>
      
        {url && (
        <iframe
            src={url}
            title="Tarjeta"
            width="100%"
            height="600"
        />
        )}
     
    </section>
  );
    

}

export default CardPage;