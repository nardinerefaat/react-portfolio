
import { GiSkills } from "react-icons/gi";


import styles from '../styles/education.module.scss'

const Softskills = ({darkMode}) => {
  return (
    <div
        className={`
          ${styles.mainContainer}
          ${darkMode?"":styles.lightMode}`} 
        >
    <h1>Softskills</h1>
    <div 
      className={`${styles.container}
          ${darkMode?"":styles.lightMode}
      `} 
      >
      <div className={styles.items}>
        <div>
           <div className={styles.card}>
            <h4><h2>Softskills</h2></h4>
            <p>Painting</p>
            <p>Team Work</p>
            <p>Communications</p>
            <p>Event Planner</p>
            <p>Planners, Diaries and To-do-list Designer</p>
            <p>Playing music</p>

           </div>
           <div className={styles.card}>

            <h4><h2>Languages</h2></h4>
            <p>Spanish - A1</p>
            <p>English - B2</p>
           </div>
            
        </div>
        
        
      </div>
    </div>
</div>
  )
}

export default Softskills

