import styles from "../styles/home.module.scss"
import img from "../images/1.jpg"
import cv from '../pdf/cv.pdf'
const AboutMe = ({ darkMode }) => {


  
  return (
    <div
      className={`${styles.home} ${darkMode ? "darkMode" : ""}`}
    >

      <div className={styles.content}>

        <div className={styles.text}>
          <h1>
            Hello, I am Nardine Refaat, <br/>
            FrontEnd React Developer
          </h1>
          <p>
            I’m a passionate Frontend 
            Developer who enjoys building 
            modern, responsive, and 
            user-friendly web applications. 
            I love turning ideas and designs 
            into interactive digital 
            experiences using technologies 
            like HTML, CSS, JavaScript, and 
            React. Alongside frontend 
            development, I’m also expanding 
            my knowledge in networking and 
            currently studying for the CCNA 
            certification, which helps me 
            better understand how web 
            applications interact with 
            networks and infrastructure. 
            I’m committed to writing clean, 
            maintainable code and 
            continuously improving my 
            skills by learning new 
            technologies and best practices.

          </p> 

          <a 
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            download="Nardine Refaat CV"
          >
            <button>Download CV</button>
          </a>
        </div>

        <div className={styles.imageContainer}>
          <img src={img} alt="nardine_refaat"/>
        </div>

      </div>

    </div>
  )
}

export default AboutMe