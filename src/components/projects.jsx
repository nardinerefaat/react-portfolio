import styles from "../styles/projects.module.scss";
import { motion } from "framer-motion";
import project1 from "../videos/1.mp4";
import project2 from "../videos/2.mp4";
import project3 from "../videos/3.mp4";
import project4 from "../videos/4.mp4";
import project5 from "../videos/5.mp4";
import project6 from "../videos/6.mp4";
import project7 from "../videos/7.mp4";
const Projects = ({ darkMode }) => {
  const projects = [
  {
    title: "Tech E-commerce",
    video: project1,
    link: "https://landingpage-elevvo.vercel.app/",
  },
  {
    title: "Text Editor",
    video: project6,
    link: "https://text-editor-beta-nine.vercel.app/",
  },
  {
    title: "Quote Generator",
    video: project7,
    link: "https://quotegenerator-phi-two.vercel.app/",
  },
  {
    title: "FAQ Page",
    video: project4,
    link: "https://faq-4fsj.vercel.app/",
  },
  {
    title: "Design Team Website",
    video: project2,
    link: "https://front-end-website-eight.vercel.app/",
  },
  {
    title: "Restaurant Menu",
    video: project5,
    link: "https://restaurant-menu-seven-gamma.vercel.app/",
  },
  {
    title: "E-commerce Cosmetics",
    video: project3,
    link: "https://front-end-three-henna.vercel.app/",
  },
];
  return (
    <div className={`${styles.feature} ${darkMode ? styles.darkMode : ""}`}>
      
      <h1>Projects</h1>

      <div className={styles.cards}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={styles.container}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            
            <h4>{project.title}</h4>

            <video autoPlay muted loop className={styles.video}>
              <source src={project.video} type="video/mp4" />
            </video>

            <a href={project.link} target="_blank" rel="noreferrer">
              <button>Live Demo</button>
            </a>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;