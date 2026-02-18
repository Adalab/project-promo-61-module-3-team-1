import { FaLinkedin } from "react-icons/fa";

const ShareLinkedIn = () => {
    const linkedInUrl = encodeURIComponent("https://tusitio.com");
    

    return (
        <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${linkedInUrl}`}
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