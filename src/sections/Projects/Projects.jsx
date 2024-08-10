import React from "react";
import styles from "./ProjectsStyles.module.css";
import amaze from "../../assets/amazonLOGO.png";
import ProjectsCard from "../../common/ProjectsCard";
import game from "../../assets/rock-paper-scissor.png";
import modern from "../../assets/websiteModern.png";
import myPortfolio from "../../assets/portfolio.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectContainer}>
        <ProjectsCard
          src={amaze}
          link="https://github.com/Snehaaa24/Amazon-Clone"
          h3="Amazon-Clone"
          p="Front-End"
        />
        <ProjectsCard
          src={game}
          link="https://github.com/Snehaaa24/RockPaperScissor"
          h3="Rock-Paper-Scissor"
          p="Game"
        />
        <ProjectsCard
          src={modern}
          link="https://github.com/Snehaaa24/Modern-Website-Clone"
          h3="Modern-Website-Clone"
          p="Using Js Libraries"
        />
        <ProjectsCard
          src={myPortfolio}
          link="https://github.com/Snehaaa24/MyPortfolio.git"
          h3="This website ;)"
          p="React Based"
        />
      </div>
    </section>
  );
}

export default Projects;
