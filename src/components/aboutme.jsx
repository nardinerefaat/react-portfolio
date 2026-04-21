import styles from "../styles/home.module.scss";
import img from "../images/1.jpg";
import cv from "../pdf/cv.pdf";
import { motion } from "framer-motion";

const AboutMe = ({ darkMode }) => {
  return (
    <div id="home" className={`${styles.home} ${darkMode ? styles.darkMode : ""}`}>

      <div className={styles.content}>

        <motion.div
          className={styles.text}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>
            React Frontend Developer <br />
            Building fast, scalable & user-friendly web apps
          </h1>

          <p>
            I specialize in React, Context API, and modern UI development.
            I focus on performance, clean architecture, and seamless user experience.
          </p>

          <p className={styles.highlight}>
            Available for Frontend Developer roles 🚀
          </p>

          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryBtn}>
              View My Work
            </a>

            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              download="Nardine_Refaat_CV"
              className={styles.secondaryBtn}
            >
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src={img} alt="Nardine Refaat portrait" />
        </motion.div>

      </div>
    </div>
  );
};

export default AboutMe;