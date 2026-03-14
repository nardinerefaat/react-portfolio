import { FaMobile } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


import styles from '../styles/footer.module.scss'
const Footer = ({darkMode}) => {
  return (
     <div
        className={`
          ${styles.mainContainer}
          ${darkMode?"darkMode" : ""}`} 
        >

      <h1>Contact Me</h1>
    <div 
      className={`${styles.container}
      
      
      `}
      
      >
        <div className={styles.items}>
            <a href="tel:+201287593651"  className={styles.phone}><FaMobile /></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nardinerefaat2@gmail.com" rel="noreferrer" className={styles.gmail} target='_blank' style={{color:"red"}}><SiGmail/></a>
            <a href="https://wa.me/1287593651" target='_blank' style={{color:"green"}} rel="noreferrer" className={styles.whatsapp}><IoLogoWhatsapp/></a>
            <a href="https://github.com/nardinerefaat" target='_blank' style={{color:"black"}} rel="noreferrer" className={styles.github}><FaGithub/></a>
            <a href="https://www.linkedin.com/in/nardine-refaat-783286290/" target='_blank' style={{color:"rgb(0, 79, 168)"}} rel="noreferrer" className={styles.linkedin}><FaLinkedin/></a>
        </div>

        <p><b>Gmail:</b>  nardinerefaat2@gmail.com</p>
        <p><b>Phone Number/WhatsApp:</b> +201287593651</p>

    </div>
    </div>
  )
}

export default Footer
