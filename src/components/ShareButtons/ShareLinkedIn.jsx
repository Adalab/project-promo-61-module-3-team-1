import { FaLinkedin } from "react-icons/fa";

const ShareLinkedIn =  ({ url }) => {

    if (!url) return null;
    const encodedUrl = encodeURIComponent(url);
    
    

    return (
        <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="butShare"
        >
        <FaLinkedin className="button__icon" />
        Compartir en LinkedIn
        </a>
    );
};

export default ShareLinkedIn;