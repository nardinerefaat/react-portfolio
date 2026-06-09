import styles from "../styles/projects.module.scss";
import { motion ,AnimatePresence  } from "framer-motion";
import project1 from "../videos/1.mp4";
import project2 from "../videos/2.mp4";
import project3 from "../videos/3.mp4";
import project4 from "../videos/4.mp4";
import project5 from "../videos/5.mp4";
import project6 from "../videos/6.mp4";
import project7 from "../videos/7.mp4";
import project8 from "../videos/8.mp4";
import project9 from "../videos/9.mp4";
import optiImage from "../images/opti.jpeg";
import { useState } from "react";
const Projects = ({ darkMode }) => {
  const projects = [
  {
    title: "Handwritten Character Recognition AI",
    video: project8,
    link: "https://handwritten-character-recognition-niky6fmwsv52hxjlcqsfss.streamlit.app/",
    desc:`An AI-powered handwritten character recognition application built with Streamlit.
          This project demonstrates computer vision, model inference, and an intuitive user experience for recognizing handwritten inputs.
          It highlights AI engineering skills in deployment and web-based model interaction.`,
    keyFeatures:`
          Real-time handwriting recognition
          , Computer vision model deployment
          , Streamlit interface for fast experimentation
          , User-friendly AI-driven input handling.`,
    techStack:`Python, Streamlit, OpenCV, Machine Learning, Computer Vision`
  },
  {
    title: "Kafka AI Routing Model",
    video: project9,
    desc:`Developed a real-time AI routing engine using Apache Kafka streaming and machine learning.
          Trained a Random Forest model and implemented inference through Kafka consumers for low-latency routing.
          This project focuses on scalable data pipelines and real-time AI-driven decision making.
          It does not have a public live server demo.`,
    keyFeatures:`Real-time Kafka streaming
          , Random Forest model inference
          , Scalable event-driven routing
          , Low-latency AI decision pipeline.`,
    techStack:`Python, Apache Kafka, Scikit-learn, Kafka Consumers, Real-time Streaming`
  },
  {
    title: "Smart Glass Graduation Project",
    image: optiImage,
    link: "https://www.linkedin.com/posts/nardine-refaat-783286290_opti-yolo-objectdetection-ugcPost-7355941052136013824-ig_V/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEaFDNMBEhioYyz9AaFCuZYbARKKNtKjBic",
    desc:`Contributed to a smart assistive application for visually impaired users as a graduation project.
          Participated in solving real-world technical challenges and integrating multiple AI modules.
          Connected object detection, face recognition, and currency recognition with asynchronous processing for lower latency.
          Optimized performance for fast and reliable operation on mobile hardware.`,
    keyFeatures:`Object detection module development
          , Face recognition integration
          , Currency recognition support
          , Asynchronous low-latency AI pipeline
          , Mobile hardware performance optimization.`,
    techStack:`Python, YOLO, Object Detection, Face Recognition, Asynchronous AI Systems`
  },
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

            {project.image ? (
              <img src={project.image} alt={project.title} className={styles.video} />
            ) : (
              <video autoPlay muted loop className={styles.video}>
                <source src={project.video} type="video/mp4" muted loop/>
              </video>
            )}

            {project.link ? (
              <a href={project.link} target="_blank" rel="noreferrer">
                <button>Live Demo</button>
              </a>
            ) : (
              <button disabled className={styles.disabledButton}>
                No live demo
              </button>
            )}
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