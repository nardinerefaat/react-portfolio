import styles from "../styles/skills.module.scss";

const Skills = ({ darkMode }) => {
  const frontendSkills = [
    "React.js",
    "Bootstrap 5",
    "Responsive Web Design",
    "Performance Optimization",
  ];

  const aiSkills = [
    "Python",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "LLM Fundamentals",
    "Data Preprocessing",
    "Feature Engineering",
    "Model Evaluation",
    "sklearn","tensorflow","pytorch"
  ];

  const dataEngineeringSkills = [
    "Apache Kafka",
    "Event-Driven Architecture",
    "Streaming Pipelines",
    "Kafka Producers & Consumers",
    "Scalable Data Flow",
  ];

  const toolSkills = [
    "Git",
    "GitHub",
    "VS Code",
    "Jupyter Notebook",
    "Kaggle",
    "Vercel",
    "Streamlit",
   
  ];

  const categories = [
    { title: "Frontend", skills: frontendSkills },
    { title: "AI / ML", skills: aiSkills },
    { title: "Data Engineering", skills: dataEngineeringSkills },
    { title: "Tools", skills: toolSkills },
  ];

  return (
    <div className={`${styles.feature} ${darkMode ? styles.darkMode : ""}`}>

      <h1>Skills & Tools</h1>

      <div className={styles.cards}>
        {categories.map((category) => (
          <div key={category.title} className={styles.container}>
            <h4>{category.title}</h4>
            <div className={styles.skillList}>
              {category.skills.map((skill, index) => (
                <span key={index} className={styles.skillBadge}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;