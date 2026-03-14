import { useState  } from "react"
import { Link } from "react-scroll"
import styles from '../styles/nav.module.scss'
import { IoMenu } from "react-icons/io5"
import { CgDarkMode } from "react-icons/cg";
import { SiFrontendmentor } from "react-icons/si";


const Navbar = ({darkMode , handleDarkMode}) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className={`${styles.navbar} 
      ${darkMode?"darkMode" : ""}
      ${darkMode?styles.darkMode : ""}
      
      `}>
        
        <div className={styles.logo}>
          
          <CgDarkMode 
              className={`${styles.iconLogo} ${styles.darkModeIcon}
              ${darkMode?styles.dark : styles.light} `
            }
              onClick={handleDarkMode}
          />
          
          <SiFrontendmentor className={styles.iconLogo}/>
          <h4>Nardine Refaat</h4>
        </div>
        <div className={`${styles.links} ${darkMode?"darkMode":""}`}>
          <Link to="aboutme" smooth duration={500}>About Me</Link>
          <Link to="skills" smooth duration={500}>Skills And Tools</Link>
          <Link to="projects" smooth duration={500}>Projects</Link>
          <Link to="education" smooth duration={500}>Education</Link>
          <Link to="softskills" smooth duration={500}>Softskills</Link>
          <Link to="footer" smooth duration={500}>Contact Me</Link>
        </div>

        <IoMenu className={styles.menuIcon} onClick={() => setOpen(!open)} />
      </nav>

      {open && (
        <div className={`${styles.mobileMenu} ${darkMode?"darkMode":""}`}>
          <Link to="aboutme" smooth duration={500} onClick={()=>setOpen(false)}>About Me</Link>
          <Link to="skills" smooth duration={500} onClick={()=>setOpen(false)}>Skills And Tools</Link>
          <Link to="projects" smooth duration={500} onClick={()=>{setOpen(false)}}>Projects</Link>
          <Link to="education" smooth duration={500} onClick={()=>setOpen(false)}>Education</Link>
          <Link to="softskills" smooth duration={500} onClick={()=>setOpen(false)}>Softskills</Link>
          <Link to="footer" smooth duration={500} onClick={()=>setOpen(false)}>Contact Me</Link>
        </div>
      )}
    </>
  )
}

export default Navbar