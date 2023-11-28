import './App.css';
import Hero from './components/Hero'
import Projects from './components/Projects';
// import AboutMe from './components/Aboutme';

const Footer = () => {
  return(
    <>
    <footer className="myfooter position-relative bottom-0 m-0 p-0">
      <span className='text-center d-block w-100'>© 2023 Jack Oubridge</span>
    </footer>
    </>
  )
}

const App = () => {
  return (
    <div className="App text-dark">
      <Hero/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
