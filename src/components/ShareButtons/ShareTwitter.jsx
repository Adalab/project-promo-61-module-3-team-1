import { FaXTwitter } from "react-icons/fa6";

const ShareTwitter = ({ url, title }) => {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  return (
    <a
      href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
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