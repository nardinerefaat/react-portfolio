import './App.css'
import Navbar from './components/navbar'
import AboutMe from './components/aboutme'
import Skills from './components/skills'
import Education from './components/education'
import Footer from './components/footer'
import Projects from './components/projects'
import { useState } from 'react'

import Softskills from './components/softskills'


function App() {

  const[darkMode , setDarkMode]= useState(true)

  const handleDarkMode = ()=>{
    setDarkMode(!darkMode)
  }
  

  

  return (
    <div className="layout">
      <Navbar 
        darkMode = {darkMode}
        handleDarkMode={handleDarkMode}
        />
      <main className="content">
        <section id="aboutme">
        <AboutMe 
            darkMode = {darkMode}
            handleDarkMode={handleDarkMode}
        /></section>
        <section id="skills">
          <Skills 
            darkMode = {darkMode}
            handleDarkMode={handleDarkMode}
            />

        </section>
        <section id="projects">
          <Projects 
            darkMode = {darkMode}
            handleDarkMode={handleDarkMode}
          />
        </section>
        <section id="education">
            <Education 
              darkMode = {darkMode}
              handleDarkMode={handleDarkMode}
            
            />
        </section>
        <section id="softskills">
            <Softskills 
              darkMode = {darkMode}
              handleDarkMode={handleDarkMode}
            
            />
        </section>
        <section id="footer">
            <Footer 
              darkMode = {darkMode}
              handleDarkMode={handleDarkMode}
            />
        
        </section>
      </main>
    </div>
  )
}

export default App