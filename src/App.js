import './App.css';
import Hero from './components/Hero'
import Projects from './components/Projects';
// import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

import React, { useRef } from 'react';

const App = () => {

  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App text-dark">
      <Hero scrollToProjects={scrollToProjects}/>
      <Projects ref={projectsRef}/>
      {/* <AboutMe/> */}
      <Footer/>
    </div>
  );
}

export default App;
