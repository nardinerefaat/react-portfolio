import styles from '../styles/skills.module.scss'
import html from '../images/html.png'
import css from '../images/css.png'
import sass from '../images/sass.png'
import js from '../images/js.png'
import react from '../images/react.png'
import bs from '../images/bs.png'
import ts from '../images/ts.png'
import numpy from '../images/numpy.png'
import yolo from '../images/yolo.png'
import py from '../images/python.png'
import tf from '../images/tf.png'
import pytorch from '../images/pytorch.png'
import vs from '../images/vs.png'
import github from '../images/github.png'
import colab from '../images/colab.png'
import kaggle from '../images/kaggle.png'
import cvat from '../images/cvat.png'

const Skills = ({darkMode}) => {
 

 

  const frontend = [html,css,sass,js,react,bs,ts]
  const ai = [numpy,yolo,py,tf,pytorch]
  const tools = [vs,github,colab,kaggle,cvat]
 

    


  return (
    <div id='featuredProducts' 
      className={`${styles.feature} 
      ${darkMode?"darkMode" : ""}`}>
      
      <h1>Skills And Tools</h1>
    
      <div className={styles.cards}>

        <div className={`${styles.container}
        ${darkMode?styles.darkMode:styles.item}
        `}>
          <h4>Front-End</h4>
          {frontend.map((item)=>(
            <div 
                key={item.id} 
                className={`${styles.item} 
                `  
              }       
            >
              <img src={item} alt={item.title} />
            
            </div> 
            ))

            }
        </div>
        <div className={`${styles.container}
          ${darkMode?styles.darkMode:styles.item}
          `}
          >
            <h4>Ai / Machine Learning <br /></h4>  
            {ai.map((item)=>(
              <div 
                  key={item.id} 
                  className={`${styles.item} 
                  `}>
                <img src={item} alt={item.title} />
              </div> 

            ))

            }
            </div>
        <div className={`${styles.container}
          ${darkMode?styles.darkMode:styles.item}
          `}
          >
            <h4>Tools<br /></h4>  
            {tools.map((item)=>(
              <div 
                  key={item.id} 
                  className={`${styles.item} 
                  `}>
                <img src={item} alt={item.title} />
              </div> 

            ))

            }
            </div>
        </div>
    </div>
  )
}

export default Skills
