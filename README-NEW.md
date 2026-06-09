# Nardine Refaat - Portfolio Website
 
A modern, responsive portfolio website built with React showcasing projects, skills, and professional experience as an AI Engineer.
 
## Features
 
- **Dark/Light Mode Toggle** - Switch between themes for comfortable viewing
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Smooth Animations** - Built with Framer Motion for engaging user interactions
- **Project Showcase** - Interactive portfolio with video demonstrations
- **Skills Section** - Technical skills visualization
- **Education Timeline** - Academic background display
- **Soft Skills Highlight** - Personal strengths and competencies
- **Smooth Scrolling** - Seamless navigation between sections
- **Modern UI/UX** - Clean, professional design with SCSS styling

## Technical Skills

- **Programming:** Python, JavaScript (ES6+), modular coding, object-oriented design
- **AI & ML:** Machine learning, deep learning, NLP, LLM fundamentals, data preprocessing, feature engineering, model evaluation, real-time inference
- **Libraries & Frameworks:** NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch, Streamlit, imbalanced-learn
- **Data Engineering:** Apache Kafka, event-driven architecture, streaming pipelines, Kafka producers/consumers, scalable data flow
- **Frontend:** React.js, Bootstrap 5, responsive web design, modern SPA development, performance optimization
- **Tools & Workflow:** Git, GitHub, VS Code, Jupyter Notebook, Kaggle, Vercel, collaborative development

## Tech Stack
 
### Frontend
- **React 19.2.4** - Core framework
- **React Router DOM 7.13.1** - Navigation routing
- **Framer Motion 12.38.0** - Animation library
- **React Icons 5.5.0** - Icon components
- **React Scroll 1.9.3** - Smooth scrolling
 
### Styling
- **SCSS/Sass 1.97.3** - CSS preprocessing
- **CSS Modules** - Component-scoped styling
 
### Development Tools
- **Create React App** - Project scaffolding
- **React Testing Library** - Testing framework
- **ESLint** - Code linting
- **Web Vitals** - Performance monitoring
 
## Installation
 
1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolioCopy
   ```
 
2. **Install dependencies**
   ```bash
   npm install
   ```
 
3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Add your environment variables
   ```
 
## Usage
 
### Development
```bash
npm start
```
Opens the application in development mode at [http://localhost:3000](http://localhost:3000)
 
### Production Build
```bash
npm run build
```
Builds the app for production to the `build` folder.
 
### Testing
```bash
npm test
```
Launches the test runner in interactive watch mode.
 
### Eject (One-way operation)
```bash
npm run eject
```
**Note: This is irreversible.** Ejects from Create React App and copies all configuration files.
 
## Folder Structure
 
```
portfolioCopy/
|
|--- public/                 # Static assets
|   |--- index.html         # Main HTML template
|   |--- favicon.ico        # Site favicon
|   |--- manifest.json      # PWA manifest
|   |--- *.json            # Data files
|
|--- src/                   # Source code
|   |--- components/        # React components
|   |   |--- aboutme.jsx   # About section
|   |   |--- education.jsx # Education timeline
|   |   |--- footer.jsx    # Footer component
|   |   |--- navbar.jsx    # Navigation bar
|   |   |--- projects.jsx  # Projects showcase
|   |   |--- skills.jsx    # Skills display
|   |   |--- softskills.jsx # Soft skills section
|   |
|   |--- styles/            # SCSS modules
|   |   |--- *.module.scss # Component styles
|   |
|   |--- images/            # Static images
|   |--- videos/            # Project demo videos
|   |--- pdf/              # Documents (CV, etc.)
|   |
|   |--- App.js            # Main application component
|   |--- App.css           # Global styles
|   |--- index.js          # Application entry point
|   |--- index.css         # Base styles
|
|--- package.json          # Dependencies and scripts
|--- .env                 # Environment variables
|--- .gitignore           # Git ignore rules
|--- README.md            # This file
```
 
## Key Components
 
### Navigation
- Sticky navbar with smooth scroll navigation
- Dark mode toggle switch
- Responsive mobile menu
 
### Sections
- **About Me** - Introduction with professional summary
- **Skills** - Technical skills with visual representation
- **Projects** - Portfolio items with video demos and links
- **Education** - Academic background timeline
- **Soft Skills** - Personal competencies display
- **Footer** - Contact information and social links
 
### Styling Approach
- SCSS modules for component-scoped styling
- CSS custom properties for theme variables
- Responsive design with mobile-first approach
- Smooth transitions and micro-interactions
 
## Environment Variables
 
Create a `.env` file in the root directory:
 
```env
# Add your environment variables here
```
 
## Deployment
 
### Build for Production
```bash
npm run build
```
 
### Deploy to Vercel
1. Connect your repository to Vercel
2. Configure build settings (if needed)
3. Deploy automatically
 
### Deploy to Netlify
1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
 
## Performance Optimization
 
- Code splitting with React.lazy()
- Image optimization
- Bundle size monitoring with Web Vitals
- Lazy loading for heavy components
- Optimized animations with Framer Motion
 
## Future Improvements
 
- [ ] **TypeScript Migration** - Convert to TypeScript for better type safety
- [ ] **CMS Integration** - Add Contentful or Strapi for dynamic content management
- [ ] **PWA Features** - Service worker and offline capabilities
- [ ] **Advanced Animations** - More complex scroll-triggered animations
- [ ] **Blog Section** - Add a blog functionality
- [ ] **Contact Form** - Implement functional contact form with backend
- [ ] **Internationalization** - Multi-language support (i18n)
- [ ] **Unit Tests** - Comprehensive test coverage
- [ ] **Storybook** - Component documentation and testing
- [ ] **Performance Monitoring** - Add analytics and performance tracking
- [ ] **SEO Optimization** - Meta tags, structured data, and sitemap
- [ ] **Accessibility** - WCAG compliance improvements
- [ ] **Component Library** - Extract reusable components to separate package
 
## Contributing
 
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
 
## License
 
This project is licensed under the MIT License - see the LICENSE file for details.
 
## Contact
 
- **Portfolio**: [Live Demo](https://landingpage-elevvo.vercel.app/)
- **Email**: [Your Email]
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]
 
---
 
Built with passion and modern web technologies. Available for AI Engineer opportunities!
# Portfolio Website - AI Engineer
 
A high-performance portfolio application demonstrating advanced React architecture with component-based design, state management, and optimized rendering. Built with React 19, Framer Motion animations, and SCSS modules for scalable, maintainable code.
 
**Technical Highlights:**
- Component-scoped styling with CSS Modules and SCSS preprocessing
- Smooth scroll navigation and dark mode theming with React hooks
- Video-based project showcase with lazy loading and performance optimization
- Responsive layout system with mobile-first design principles
- Modern animation library integration for enhanced user interactions