
import { GiSkills } from "react-icons/gi";


import styles from '../styles/education.module.scss'

const Softskills = ({darkMode}) => {
  return (
    <div
        className={`
          ${styles.mainContainer}
          ${darkMode?"darkMode" : ""}`} 
        >
    <h1>Softskills</h1>
    <div 
      className={`${styles.container}`} 
      >
      <div className={styles.items}>
        <div>
            <GiSkills className={styles.icon}/>
            <h4><h2>Softskills</h2></h4>
            <h3>Painting</h3>
            <h3>Team Work</h3>
            <h3>Communications</h3>
            <h3>Event Planner</h3>
            <h3>Planners, Diaries and To-do-list Designer</h3>
            <h3>Playing music</h3>
            <br />
            <h4><h2>Languages</h2></h4>
            <h3>Spanish - A1</h3>
            <h3>English - B2</h3>
            
        </div>
        
        
      </div>
    </div>
</div>
  )
}

export default Softskills

