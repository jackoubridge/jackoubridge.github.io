import Hero from '../components/Hero'
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import { useRef } from 'react';

const Home = () => {

    const projectsRef = useRef(null);

    const scrollToProjects = () => {
        if (projectsRef.current) {
            projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    /* 
    My Render Node.js app spins down with inactivity
    Sending a request to wake it up so that loading times are shorter for real users
    */
    fetch("https://jiggz.net", { mode: 'no-cors', })
        .then(response => { })
        .catch(error => { });

    return (
        <div className="App">
            <Hero scrollToProjects={scrollToProjects} />
            <div className='content m-0 p-0 w-100 h-auto rounded'>
                <Projects ref={projectsRef} />
                <Skills />
                <Footer />
            </div>
        </div>
    );
}

export default Home;
