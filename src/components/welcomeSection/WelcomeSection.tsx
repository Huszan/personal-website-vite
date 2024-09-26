import { forwardRef } from "react";
import "./WelcomeSection.scss";
import { Button } from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { downloadFile } from "../../utils/BaseUtils";
import { ContactButton } from "../contactButton/ContactButtton";
import SocialLinks from "../socialLinks/SocialLinks";

const WelcomeSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="welcome-section main-section">
      <img
        className="personal-image"
        src="\src\assets\face3_bg.png"
        alt="Personal photography"
      />
      <div className="about-me-wrapper">
        <h5 className="t-sub">Hi there! I'm</h5>
        <h1>
          Mateusz <span className="t-acc">Jacenty</span>
        </h1>
        <span>
          <b>Front-end Developer</b> from Poland, passionate about creating{" "}
          <b>intuitive</b> and <b>responsive</b> web experiences.
        </span>
        <ul className="buttons-wrap">
          <li>
            <Button variant="solid" onClick={() => downloadFile("d_cv")}>
              <FontAwesomeIcon className="fa-icon" icon={faDownload} /> Download
              CV
            </Button>
          </li>
          <li>
            <ContactButton email="mateuszjacenty1@gmail.com" />
          </li>
        </ul>
        <SocialLinks />
      </div>
    </section>
  );
});

export default WelcomeSection;
