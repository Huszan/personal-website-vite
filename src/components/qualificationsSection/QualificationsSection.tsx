import { forwardRef } from "react";
import "./QualificationsSection.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal, faUniversity } from "@fortawesome/free-solid-svg-icons";
import SeeMore from "../seeMore/SeeMore";

const QualificationsSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section className="main-section qual-section" ref={ref}>
      <h1 className="center">Qualifications</h1>

      <ul>
        <h3>
          <FontAwesomeIcon icon={faUniversity} /> Education
        </h3>
        <li>
          <h6>Bachelor degree in Computer Science</h6>
          <div className="t-sub">
            Collegium Witelona State University in Legnica
          </div>
          <div className="t-sub-2">Sep 2018 - May 2022</div>
        </li>
      </ul>

      <ul>
        <h3>
          <FontAwesomeIcon icon={faMedal} /> Experience
        </h3>
        <li>
          <h6>Software Developer</h6>
          <div className="t-sub">Robin FUH Robert Sęk</div>
          <div className="t-sub-2">Dec 2023 - May 2024</div>
          <SeeMore className="exp-desc">
            I've been developing a desktop application called Excel Merger
            Assistant, designed to streamline the{" "}
            <b>management and protection of data</b> from Excel report tables.{" "}
            <br />
            This tool simplifies the process and provides users with a{" "}
            <b>user-friendly interface</b> featuring capabilities to easily{" "}
            <b>filter</b>, <b>modify</b>, and <b>validate</b> data.
          </SeeMore>
        </li>
        <li>
          <h6>Front-end Developer</h6>
          <div className="t-sub">Digis</div>
          <div className="t-sub-2">Jan 2023 - Jun 2023</div>
          <SeeMore className="exp-desc">
            This was my first job and I learned how to collaborate with other
            developers using <b>Agile</b> methodology. At first, I worked on{" "}
            <b>fixing bugs</b> and <b>expanding existing components</b> with new
            functionalities. <br />
            Then, I was assigned to a team focused on creating a UI overhaul. I
            worked on <b>creating new components</b> and{" "}
            <b>modifying existing ones</b> based on mockups,{" "}
            <b>creating animations</b>, and <b>fixing bugs</b> in the code.
          </SeeMore>
        </li>
      </ul>
    </section>
  );
});

export default QualificationsSection;
