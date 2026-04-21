import { MdCastForEducation, MdModelTraining } from "react-icons/md";
import styles from "../styles/education.module.scss";

const Education = ({ darkMode }) => {
  return (
    <div className={`${styles.mainContainer} ${darkMode ? styles.dark : ""}`}>

      <h1>Education</h1>

      <div className={styles.container}>

        <div className={styles.card}>
          <MdCastForEducation className={styles.icon} />
          <h4>Education</h4>

          <p>
            <b>2020 - 2025</b><br />
            Bachelor of Engineering<br />
            Faculty of Engineering, Alexandria University<br />
            Communication & Electronics Department
          </p>
        </div>

        <div className={styles.card}>
          <MdModelTraining className={styles.icon} />
          <h4>Courses</h4>

          <p><b>Web Development</b> - ITIDA</p>
          <p><b>Full Stack</b> - MEC Academy</p>
          <p><b>Machine Learning</b> - MEC Academy</p>
          <p><b>NTI Training</b> - National Telecom Institute</p>

        </div>

      </div>
    </div>
  );
};

export default Education;