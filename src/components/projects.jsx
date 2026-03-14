import  {useState} from 'react'
import project1 from '../videos/1.mp4'
import project2 from '../videos/2.mp4'
import project3 from '../videos/3.mp4'
import project4 from '../videos/4.mp4'
import project5 from '../videos/5.mp4'

import styles from '../styles/projects.module.scss'

const Projects = ({darkMode}) => {
   
  const projects = [project1,project2,project3]
 
  return (
    <div id='featuredProducts' 
      className={`${styles.feature} 
      ${darkMode?"darkMode" : ""}`}>
      
      <h1>Projects</h1>
      <div className={styles.cards}>

        <div className={`${styles.container}
        ${darkMode?styles.darkMode:styles.item}
        `}>
          <h4>Front-End</h4>
          <div 
             >
              <video  autoPlay muted loop  className={`${styles.item} `}>
                <source src={project1} type="video/mp4"/>
              </video>
          </div> 
          <a 
            href="https://landingpage-elevvo.vercel.app/"
            target='_blank'
            >

              <button>Live Demo</button>
          </a>
            
        </div>
         <div className={`${styles.container}
        ${darkMode?styles.darkMode:styles.item}
        `}>
          <h4>Front-End</h4>
          <div>
              <video autoPlay muted loop  className={`${styles.item} `}>
                <source src={project4} type="video/mp4"/>
              </video>
          </div>

         <a 
            href="https://faq-4fsj.vercel.app/"
            target='_blank'
            >

              <button>Live Demo</button>
          </a>
            
        </div>
        <div className={`${styles.container}
        ${darkMode?styles.darkMode:styles.item}
        `}>
          <h4>Front-End</h4>
          <div>
              <video   autoPlay muted loop  className={`${styles.item} `}>
                <source src={project2} type="video/mp4"/>
              </video>
          </div> 
          <a 
            href="https://front-end-website-eight.vercel.app/"
            target='_blank'
            >

              <button>Live Demo</button>
          </a>
            
        </div>
        <div className={`${styles.container}
        ${darkMode?styles.darkMode:styles.item}
        `}>
          <h4>Front-End</h4>
          <div>
              <video   autoPlay muted loop  className={`${styles.item} `}>
                <source src={project5} type="video/mp4"/>
              </video>
          </div> 
          <a 
            href="https://restaurant-menu-seven-gamma.vercel.app/"
            target='_blank'
            >

              <button>Live Demo</button>
          </a>
            
        </div>
        <div className={`${styles.container}
        ${darkMode?styles.darkMode:styles.item}
        `}>
          <h4>Front-End</h4>
          <div>
              <video autoPlay muted loop  className={`${styles.item} `}>
                <source src={project3} type="video/mp4"/>
              </video>
          </div>

         <a 
            href="https://front-end-three-henna.vercel.app/"
            target='_blank'
            >

              <button>Live Demo</button>
          </a>
            
        </div>
       
        </div>
    </div>
  )
}

export default Projects




