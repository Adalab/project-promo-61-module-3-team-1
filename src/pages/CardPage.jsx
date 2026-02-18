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

        {url 
            ? (
                <>
                    <iframe className='iframe'
                    src={url}
                    title="Tarjeta creada"
                    width="100%"
                    height="00"
                    style={{ border: "none", marginTop: "20px" }}
                    />
                    <a href={url} target="_blank" rel="noopener noreferrer">
                    Abrir tarjeta en nueva pestaña
                    </a>

                </>)

            : (
                <p>Creando tarjeta...</p>
                )
        }

        <div className='shareButtons'>
            <button
                className="button--large"
                >
                <ShareLinkedIn />
            </button>
            
            <button
                className="button--large"
                >
                <ShareWhatsApp />
            </button>

            <button
                className="button--large"
                >
                <ShareTwitter />
            </button>

        </div>
    </section>
    );
  
    

}

export default CardPage;