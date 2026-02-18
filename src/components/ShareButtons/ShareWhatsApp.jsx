import { FaWhatsapp } from "react-icons/fa";

const ShareWhatsApp =  ({ url, title }) => {
    const text = encodeURIComponent(`${title} ${url}`);
    

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