import styles from "../styles/skills.module.scss";
import html from "../images/html.png";
import css from "../images/css.png";
import sass from "../images/sass.png";
import js from "../images/js.png";
import react from "../images/react.png";
import bs from "../images/bs.png";

import numpy from "../images/numpy.png";
import yolo from "../images/yolo.png";
import py from "../images/python.png";
import tf from "../images/tf.png";
import pytorch from "../images/pytorch.png";

import vs from "../images/vs.png";
import github from "../images/github.png";
import colab from "../images/colab.png";
import kaggle from "../images/kaggle.png";
import cvat from "../images/cvat.png";

const Skills = ({ darkMode }) => {
  const frontend = [html, css, sass, js, react, bs];
  const ai = [numpy, yolo, py, tf, pytorch];
  const tools = [vs, github, colab, kaggle, cvat];

  return (
    <div className={`${styles.feature} ${darkMode ? styles.darkMode : ""}`}>

      <h1>Skills & Tools</h1>

      <div className={styles.cards}>

        <div className={styles.container}>
          <h4>Frontend</h4>
          <div className={styles.grid}>
            {frontend.map((img, index) => (
              <div key={index} className={styles.item}>
                <img src={img} alt="frontend skill" />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.container}>
          <h4>AI / ML</h4>
          <div className={styles.grid}>
            {ai.map((img, index) => (
              <div key={index} className={styles.item}>
                <img src={img} alt="ai skill" />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.container}>
          <h4>Tools</h4>
          <div className={styles.grid}>
            {tools.map((img, index) => (
              <div key={index} className={styles.item}>
                <img src={img} alt="tool" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skills;