import sendDataToApi from '../services/Api';
import { useState, useEffect } from 'react';
import './cardPage.scss';

import ShareLinkedIn from '../components/ShareButtons/ShareLinkedIn';
import ShareWhatsApp from '../components/ShareButtons/ShareWhatsApp';
import ShareTwitter from '../components/ShareButtons/ShareTwitter';

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

       {url ? (
        <>
         

            <iframe
            src={url}
            title="Tarjeta creada"
            width="100%"
            height="600"
            style={{ border: "none", marginTop: "20px" }}
            />

            <a href={url} target="_blank" rel="noopener noreferrer" className='linkWindow npm run dev
            '>
            Abrir tarjeta en nueva pestaña
            </a>

            </>
            ) : (
            <p>Creando tarjeta...</p>
            )}

    {/*LOS BOTONES NO LANZAN LA PREVIEW A RRSS PORQUE PESA MUCHO, PROBLEMA DE BACK DE LA API*/ }
        <div className='shareButtons'>
            <button
                className="button--large"
                >
                <ShareLinkedIn  
                    url={url}
                    
                />
            </button>
            
            <button
                className="button--large"
                >
                <ShareWhatsApp 
                    url={url}
                    title="Mira mi proyecto"
                    />
            </button>

            <button
                className="button--large"
                >
                <ShareTwitter 
                    url={url}
                    title="Mira mi proyecto"
                    />
            </button>

        </div>
    </section>
    );
  
    

}

export default CardPage;