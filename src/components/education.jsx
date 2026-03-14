import { MdCastForEducation } from "react-icons/md";
import { MdModelTraining } from "react-icons/md";


import styles from '../styles/education.module.scss'

const Education = ({darkMode}) => {
  return (
    <div
        className={`
          ${styles.mainContainer}
          ${darkMode?"darkMode" : ""}`} 
        >
    <h1>Education</h1>
    <div 
      className={`${styles.container}`} 
      >
      {/* <h3>Education</h3> */}
      <div className={styles.items}>
        <div>
          <MdCastForEducation className={styles.icon}/>
          <h4>Education</h4>
          <p><b>2020 - 2025 </b><br />
            Bachelor Degree
            Faculty Of Engineering Alexandria University
            Communication And Electronics department</p>
        </div>
        <div>
          <MdModelTraining className={styles.icon}/>
          <h4>Courses</h4>
          <p>
            <b>Web Development</b><br />
            Itida & Ministry Of Communication - Alexandria, Egypt
          </p>
          <p>
            <b>Full Stack course</b> <br />
            MEC Academy - Cairo, Egypt (Online)
          </p>
          <p>
            <b>Machine Learning </b> <br />
            MEC Academy - Cairo, Egypt (Online)
          </p>
          <p>
            <b>Trainee At National Telecommunication Institute (NTI)
            </b> <br />
           NTI - Alexandria, Egypt
          </p>
        </div>
        
      </div>
    </div>
</div>
  )
}

export default Education

