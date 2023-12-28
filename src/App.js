import './App.css';
import Hero from './components/Hero'
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import { useRef } from 'react';

const App = () => {

  const projectsRef = useRef(null);

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Hero scrollToProjects={scrollToProjects} />
      <Projects ref={projectsRef} />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
