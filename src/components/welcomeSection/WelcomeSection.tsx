import { forwardRef } from "react";
import "./WelcomeSection.scss";
import { Button } from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { downloadFile } from "../../utils/BaseUtils";
import { ContactButton } from "../contactButton/ContactButtton";
import SocialLinks from "../socialLinks/SocialLinks";
import FacePNG from "../../assets/images/face3_bg.png";

const WelcomeSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section ref={ref} className="welcome-section main-section">
      <img
        className="personal-image"
        src={FacePNG}
        alt="Personal photography"
      />
      <div className="about-me-wrapper">
        <h6 className="t-sub">Hi there! I'm</h6>
        <h1>
          Mateusz <span className="t-acc">Jacenty</span>
        </h1>
        <span className="t-sub">
          <b>Front-end Developer</b> from Poland, passionate about creating{" "}
          <b>intuitive</b> and <b>responsive</b> web experiences.
        </span>
        <div className="buttons-wrap">
          <Button variant="solid" onClick={() => downloadFile("d_cv")}>
            <FontAwesomeIcon className="fa-icon" icon={faDownload} /> Download
            CV
          </Button>
          <ContactButton email="mateuszjacenty1@gmail.com" />
        </div>
        <SocialLinks />
      </div>
    </section>
  );
});

export default WelcomeSection;
