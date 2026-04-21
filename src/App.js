import "./App.css";
import Navbar from "./components/navbar";
import AboutMe from "./components/aboutme";
import Skills from "./components/skills";
import Education from "./components/education";
import Footer from "./components/footer";
import Projects from "./components/projects";
import Softskills from "./components/softskills";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`layout ${darkMode ? "dark" : ""}`}>

      <Navbar darkMode={darkMode} handleDarkMode={handleDarkMode} />

      <main className="content">

        <section id="aboutme">
          <AboutMe darkMode={darkMode} />
        </section>

        <section id="skills">
          <Skills darkMode={darkMode} />
        </section>

        <section id="projects">
          <Projects darkMode={darkMode} />
        </section>

        <section id="education">
          <Education darkMode={darkMode} />
        </section>

        <section id="softskills">
          <Softskills darkMode={darkMode} />
        </section>

        <section id="footer">
          <Footer darkMode={darkMode} />
        </section>

      </main>
    </div>
  );
}

export default App;