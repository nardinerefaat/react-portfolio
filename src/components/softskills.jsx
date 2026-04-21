import styles from "../styles/education.module.scss";

const Softskills = ({ darkMode }) => {
  return (
    <div className={`${styles.mainContainer} ${darkMode ? styles.dark : ""}`}>

      <h1>Soft Skills</h1>

      <div className={styles.container}>

        <div className={styles.card}>
          <h4>Skills</h4>
          <p>Teamwork</p>
          <p>Communication</p>
          <p>Event Planning</p>
          <p>Creative Thinking</p>
          <p>Designing Systems & To-do Apps</p>
        </div>

        <div className={styles.card}>
          <h4>Languages</h4>
          <p>English - B2</p>
          <p>Spanish - A1</p>
        </div>

      </div>
    </div>
  );
};

export default Softskills;