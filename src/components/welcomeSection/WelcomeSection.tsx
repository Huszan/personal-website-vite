import { forwardRef } from "react";
import "./WelcomeSection.scss";
import { Button } from "../button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Anchor } from "../anchor/Anchor";
import { downloadFile } from "../../utils/BaseUtils";
import { ContactButton } from "../contactButton/ContactButtton";

export interface WelcomeSectionProps {}

export const WelcomeSection = forwardRef<HTMLElement>(
  (props: WelcomeSectionProps, ref) => {
    return (
      <section ref={ref} className="welcome-section">
        <img
          className="personal-image"
          src="\src\assets\face3_bg.png"
          alt="Personal photography"
        />
        <div className="about-me-wrapper">
          <h5 className="sub">Hi there! I'm</h5>
          <h1>
            Mateusz <span className="t-acc">Jacenty</span>
          </h1>
          <h6 className="sub">Front-end Developer from Poland</h6>
          <ul className="buttons-wrap">
            <li>
              <Button variant="solid" onClick={() => downloadFile("d_cv")}>
                <FontAwesomeIcon className="fa-icon" icon={faDownload} />{" "}
                Download CV
              </Button>
            </li>
            <li>
              <ContactButton email="mateuszjacenty1@gmail.com" />
            </li>
          </ul>
          <ul className="buttons-wrap">
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
        </div>
      </section>
    );
  }
);
