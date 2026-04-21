import styles from "../styles/projects.module.scss";
import { motion ,AnimatePresence  } from "framer-motion";
import project1 from "../videos/1.mp4";
import project2 from "../videos/2.mp4";
import project3 from "../videos/3.mp4";
import project4 from "../videos/4.mp4";
import project5 from "../videos/5.mp4";
import project6 from "../videos/6.mp4";
import project7 from "../videos/7.mp4";
import { useState } from "react";
const Projects = ({ darkMode }) => {
  const projects = [
  {
    title: "Tech E-commerce",
    video: project1,
    link: "https://landingpage-elevvo.vercel.app/",
    desc: `A responsive e-commerce landing page built with React and modern UI practices.
          This project focuses 
          on component reusability,
          responsive layout design, 
          and smooth user experience. 
          I implemented structured UI 
          components and managed state 
          using React hooks.`,
    keyFeatures:`
           Responsive design across all devices
          , Modular and reusable components
          , Smooth UI interactions and transitions
          , Optimized layout structure for performance.`,
    techStack :`React, SCSS, JavaScript (context API and Hooks)`,     
},

  {
    title: "Text Editor",
    video: project6,
    link: "https://text-editor-beta-nine.vercel.app/",
    desc:`A simple text editor web application built using React.
          The project demonstrates dynamic state handling and real-time user input updates. It focuses on clean UI and functional user interaction design.`,
    keyFeatures:`Real-time text editing
                , Dynamic state updates
                , Clean and minimal UI
                , Responsive design.`,
    techStack:`React, SCSS`
  },
  {
    title: "Quote Generator",
    video: project7,
    link: "https://quotegenerator-phi-two.vercel.app/",
    desc:`A random quote generator application built with React.
        The app f ches and displays quotes dynamically, demonstrating API-like data handling and state updates.
`   ,    
    keyFeatures:` Dynamic quote generation
                 , Clean UI with responsive layout
                 , Smooth user interaction experience.`,
    techStack:`React, JavaScript, SCSS`
  },
  {
    title: "FAQ Page",
    video: project4,
    link: "https://faq-4fsj.vercel.app/",
    desc:`Interactive FAQ page built using React components.
    This project focuses on UI state toggling and accordion-style interaction patterns.
    `,

    keyFeatures:`Expand/collapse functionality
                , Clean component structure
                , Smooth UI transitions.`,
    techStack:`React, SCSS`
  },
  
  {
    title: "Restaurant Menu",
    video: project5,
    link: "https://restaurant-menu-seven-gamma.vercel.app/",
    desc:`A dynamic restaurant menu web app, featuring categorized food items and interactive filtering.`,
    keyFeatures:`Category-based filtering system,
    Responsive and mobile-friendly UI,
    Dynamic rendering of menu items.`,
    techStack:`HTML, SCSS, JavaScript`
  },
  {
    title: "E-commerce Cosmetics",
    video: project3,
    link: "https://front-end-three-henna.vercel.app/",
    desc:`A modern e-commerce cosmetics UI , focusing on product display, layout structure, and user-friendly browsing experience.`,
    keyFeatures:`Product listing layout with clean UI,
    Responsive grid system(under process),
    Smooth user interaction design`,
    techStack:`HTML, SCSS, JavaScript`
  },
  {
    title: "Design Team Website",
    video: project2,
    link: "https://front-end-website-eight.vercel.app/",
    desc:`Team Website`,
    keyFeatures:`Product listing layout with clean UI,
    Responsive grid system(under process),
    Smooth user interaction design`,
    techStack:`HTML, SCSS, JavaScript`
    
  },
];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleShowDesc =(index)=>{
    setActiveIndex(activeIndex === index ? null :index)
  }
  return (
    <div className={`${styles.feature} ${darkMode ? styles.darkMode : ""}`}>
      
      <h1>Projects</h1>

      <div className={styles.cards}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={styles.container}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            viewport={{ once: true }}
          >
            
            <h4>{project.title}</h4>

            <video autoPlay muted loop className={styles.video}>
              <source src={project.video} type="video/mp4" muted loop/>
            </video>

            <a href={project.link} target="_blank" rel="noreferrer">
              <button>Live Demo</button>
            </a>
              <button onClick={()=>handleShowDesc(index)}>Description</button>
              
              <AnimatePresence mode="wait">
              {activeIndex=== index &&(
                <motion.div
                    className={styles.content}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  <p key={index}><b>Project Description:</b> {project.desc}</p><br />
                  <p key={index}><b>Key Features:</b> {project.keyFeatures}</p><br/>
                  <p key={index}><b>Tech Stack:</b> {project.techStack}</p><br/>
                </motion.div>
                
                )}
              </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;