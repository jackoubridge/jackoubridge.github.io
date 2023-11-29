import './App.css';
import Hero from './components/Hero'
import Projects from './components/Projects';
import AboutMe from './components/Aboutme';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App text-dark">
      <Hero/>
      <Projects/>
      {/* <AboutMe/> */}
      <Footer/>
    </div>
  );
}

export default App;
