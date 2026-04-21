import { useState } from "react";
import { Link } from "react-scroll";
import styles from "../styles/nav.module.scss";
import { IoMenu } from "react-icons/io5";
import { CgDarkMode } from "react-icons/cg";
import { SiFrontendmentor } from "react-icons/si";

const Navbar = ({ darkMode, handleDarkMode }) => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <nav className={`${styles.navbar} ${darkMode ? styles.darkMode : ""}`}>

        {/* LOGO */}
        <div className={styles.logo}>
          <SiFrontendmentor className={styles.icon} />

          <h4>Nardine Refaat</h4>

          <CgDarkMode
            className={styles.darkIcon}
            onClick={handleDarkMode}
          />
        </div>

        {/* LINKS */}
        <div className={styles.links}>
          <Link to="aboutme" smooth duration={500} spy activeClass={styles.active}>
            About
          </Link>

          <Link to="skills" smooth duration={500} spy activeClass={styles.active}>
            Skills
          </Link>

          <Link to="projects" smooth duration={500} spy activeClass={styles.active}>
            Projects
          </Link>

          <Link to="education" smooth duration={500} spy activeClass={styles.active}>
            Education
          </Link>

          <Link to="footer" smooth duration={500} spy activeClass={styles.active}>
            Contact
          </Link>
        </div>

        {/* MOBILE ICON */}
        <IoMenu
          className={styles.menuIcon}
          onClick={() => setOpen(!open)}
        />
      </nav>

      <div
        className={`${styles.mobileMenu} ${open ? styles.open : ""} ${
          darkMode ? styles.darkMode : ""
        }`}
      >
        <Link to="aboutme" smooth duration={500} onClick={closeMenu}>About</Link>
        <Link to="skills" smooth duration={500} onClick={closeMenu}>Skills</Link>
        <Link to="projects" smooth duration={500} onClick={closeMenu}>Projects</Link>
        <Link to="education" smooth duration={500} onClick={closeMenu}>Education</Link>
        <Link to="footer" smooth duration={500} onClick={closeMenu}>Contact</Link>
      </div>
    </>
  );
};

export default Navbar;