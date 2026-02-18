import { FaXTwitter } from "react-icons/fa6";

const ShareTwitter = ({ url, title }) => {
  const text = encodeURIComponent(`${title} ${url}`);

  return (
    <a
      href={`https://twitter.com/intent/tweet?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      className="butShare"
    >
      <FaXTwitter className="button__icon" />   
      Compartir en X
    </a>
  );
};

export default ShareTwitter;