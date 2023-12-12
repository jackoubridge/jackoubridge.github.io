import Header from './Header';
import Project from './Project';
import React from 'react';

const Projects = React.forwardRef((props, ref) => {
    return(
      <>
      <div className='projects p-3 container-fluid text-white' ref={ref}>

        <div className='row w-auto d-flex m-0 p-0 justify-content-center'>
          <Header title="My Projects"/>
          <Project 
            title='3D Graphics Engine' 
            repo='PyOpenGL' 
            color='Crimson' 
            langs="GLSL, Python" 
            imglink='https://cdn-icons-png.flaticon.com/512/9417/9417368.png' 
            text='A visually immersive jungle scene created with PyOpenGL. This project includes local illumination, shadow mapping, texture mapping, and OBJ file loading for a captivating virtual experience.'
          />
          <Project 
            title='Microservices' 
            repo='Microservices' 
            color='DarkSlateGray' 
            langs='Go' 
            imglink='https://cdn-icons-png.flaticon.com/512/9673/9673387.png' 
            text="Shazam-like system using microservices. Employs a RESTful API to identify songs from audio fragments, comparing them with a database and determining the played song from a snippet."
          />
          <Project
            title='Full-Stack Web App' 
            repo='Flask-App' 
            color='DarkSlateBlue' 
            langs='JavaScript, Python'
            imglink='https://cdn-icons-png.flaticon.com/512/1336/1336494.png' 
            text="Using SQLAlchemy and Socket.IO, this full-stack app supports a database of users (via Steam login) and real-time simulation gambling. This was my first endeavour into the world of ReactJS and Bootstrap."
          />
          <Project 
            title='Internet of Things' 
            repo="IoT" 
            color="Indigo" 
            langs="C++" 
            imglink="https://cdn-icons-png.flaticon.com/512/4673/4673990.png" 
            text="DIY web server that allows clients on the local network to communicate wirelessly with the Wi-Fi module and change the colour of an LED. Firmware written in Arduino IDE, hardware secured with an elastic band and a hair tie."
          />
          <Project
            title='Ant Colony Optimisation' 
            repo='Ant-Colony-Optimisation-Travelling-Salesman' 
            color='ForestGreen' 
            langs='Python' 
            imglink='https://cdn-icons-png.flaticon.com/512/2103/2103620.png' 
            text="A nature-inspired application that tackles the Travelling Salesman problem. Using pheromones, randomness and a thousand iterations, the power of the colony finds the best fitness."
          />
          <Project
            title='Game Development' 
            repo='unity-project' 
            color='Peru' 
            langs='C++' 
            imglink='https://cdn-icons-png.flaticon.com/512/686/686589.png' 
            text='A first-person shooter Unity project that includes a CharacterController, object spawning and physics, and Ray Casting.'
          />
          <Project
            title="Evolutionary Algorithm" 
            repo='Sudoku-EA' 
            color='MediumPurple' 
            langs='Python' 
            imglink='https://cdn-icons-png.flaticon.com/512/11918/11918995.png' 
            text="This implementation of a famous problem-solving method uses genetic mutation and crossover to find the best Sudoku board given a random starting population."
          />
          <Project
            title='Portfolio ReactJS App' 
            repo='jackoubridge.github.io/tree/dev' 
            color='FireBrick' 
            langs='JavaScript' 
            imglink='https://cdn-icons-png.flaticon.com/512/12630/12630918.png' 
            text='This very site... how meta. Uses ReactJS and Bootstrap to achieve a useful and visually stunning site. Featured in this app is a card that reads "This very site... how meta. Uses ReactJS and Bootstrap to achieve a useful and visually stunning site. Featured in this app is a card tha-'
          />
        </div>
      </div>
      </>
    )
});

export default Projects

