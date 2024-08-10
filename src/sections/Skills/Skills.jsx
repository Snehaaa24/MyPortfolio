import styles from "./SkillsStyles.module.css";
import checkmarkIcon from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkmarkIcon} skill="HTML" />
        <SkillList src={checkmarkIcon} skill="Python" />
        <SkillList src={checkmarkIcon} skill="C#" />
        <SkillList src={checkmarkIcon} skill="SQL" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkmarkIcon} skill="HTML" />
        <SkillList src={checkmarkIcon} skill="CSS" />
        <SkillList src={checkmarkIcon} skill="Js" />
        <SkillList src={checkmarkIcon} skill="React" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkmarkIcon} skill="Net/DotNet Core" />
        <SkillList src={checkmarkIcon} skill="MySQL" />
        <SkillList src={checkmarkIcon} skill="Git" />
      </div>
    </section>
  );
}

export default Skills;
