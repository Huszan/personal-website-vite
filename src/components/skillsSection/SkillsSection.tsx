import { forwardRef } from "react";
import "./SkillsSection.scss";
import { skills } from "../../data/SkillsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillsSection = forwardRef<HTMLElement>((props, ref) => {
  const skillElements = skills.map((el) => {
    const style: React.CSSProperties = {
      backgroundColor: el.color,
    };
    return (
      <div className="skill" key={el.name}>
        <FontAwesomeIcon icon={el.icon} className="icon" style={style} />
        <div className="desc">{el.name}</div>
      </div>
    );
  });

  return (
    <section className="main-section skills-section" ref={ref}>
      <h1 className="center">Skills</h1>
      <span className="sub main-section--desc">
        Some technologies i've been working with recently.
        <br />
        I'm also totally into learning new stuff!
      </span>
      <div className="skills-wrapper">{skillElements}</div>
    </section>
  );
});

export default SkillsSection;
