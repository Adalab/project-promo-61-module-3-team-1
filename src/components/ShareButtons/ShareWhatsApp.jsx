import { FaWhatsapp } from "react-icons/fa";

const ShareWhatsApp = () => {
    const whatsAppUrl = encodeURIComponent("https://tusitio.com");
    const message = "Mira este contenido:";
    const text = encodeURIComponent(`${message} ${whatsAppUrl}`);

    return (
        <a
        href={`https://wa.me/?text=${text}`}
        target="_blank"
        rel="noopener noreferrer"
        className="butShare"
        >
         <FaWhatsapp className="button__icon" />   
        Compartir en WhatsApp
        </a>
    );
};

export default ShareWhatsApp;