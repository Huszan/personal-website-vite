import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Anchor } from "../anchor/Anchor";
import "./SocialLinks.scss";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SocialLinks = () => {
  return (
    <ul className="social-links">
      <li>
        <Anchor
          variant="icon"
          href="https://github.com/Huszan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="fa-icon" icon={faGithub} />
        </Anchor>
      </li>
      <li>
        <Anchor
          variant="icon"
          href="https://www.linkedin.com/in/mateusz-jacenty-895917186/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className="fa-icon" icon={faLinkedin} />
        </Anchor>
      </li>
    </ul>
  );
};

export default SocialLinks;
