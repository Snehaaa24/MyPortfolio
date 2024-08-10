import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/newprof-photoaidcom-cropped.png";
import linkedInlight from "../../assets/linkedin-light.svg";
import linkedInDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/RESUME.pdf";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import { useTheme } from "../../common/themecontext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const LinkedInIcon = theme === "light" ? linkedInlight : linkedInDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colormodecontainer}>
        <img
          id="prof"
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Sneha <br /> Nair
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://github.com/Snehaaa24" target="_blank">
            <img src={githubIcon} alt="github Icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/sneha-nair-5a8630294/"
            target="_blank"
          >
            <img src={LinkedInIcon} alt="LinkedIn Icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a solid foundation in front-end and back-end technologies and
          real-world project experience.Currently, focusing on data analytics
          and cloud computing.
        </p>
        <button>
          <a href={CV} download>
            RESUME
          </a>
        </button>
      </div>
    </section>
  );
}

export default Hero;
