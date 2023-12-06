// import videoFile from '../assets/background.webm';
import videoFile from '../assets/videoplayback.mp4';
import posterImg from '../assets/poster.jpg';
import React, { useRef } from 'react';

const Hero = () => {

    const videoRef = useRef();
    const setPlayback = () => {
      videoRef.current.playbackRate = 1;
    }

    function handleClick(link){
      console.log('Clicked ' + link);
      window.open(link, '_blank').focus();
    }
  
    return (
      <>
      <div className='hero p-3 container-fluid overflow-hidden'>
  
        <video 
          ref={videoRef} 
          className='background-video' 
          id='background-video' 
          onCanPlay={() => setPlayback()}
          poster={posterImg} 
          autoPlay loop muted>
          
            <source src={videoFile} type='video/webm' />
        </video>
  
        <div className='row h-100 w-100 m-0 p-0 z-1 text-black'>
  
          <div className='hero-left d-flex justify-content-center align-middle col-md-6 col-sm-12 m-0 p-0 vh-75'>
            <div className='hero-left-content my-auto m-0 p-2 rounded user-select-none'>
              <span className='d-block p-2 display-2 w-100 hi-im-jack'>
                Hi, I'm Jack
              </span>
              <span className='d-block m-0 p-2 h5'>
                Software developer. Passionate programmer.
              </span>
              <div className='hero-buttons row m-0 p-0 w-100 d-flex'>
                <button 
                  type="button" 
                  onClick={() => handleClick('https://www.linkedin.com/in/jackoubridge')}
                  className="hero-button external-button m-2 btn btn-lg border border-black text-black align-middle d-flex justify-content-between align-items-center">
                    <span className='h-100 p-0'>Linkedin </span>
                    <span className="icon p-0 material-symbols-outlined">captive_portal</span>
                </button>
                <button
                  type="button" 
                  onClick={() => handleClick('https://www.github.com/jackoubridge')}
                  className="hero-button external-button m-2 btn btn-lg border border-black text-black align-middle d-flex justify-content-between align-items-center">
                    <span className='h-100 p-0'>Github</span>
                    <span className="icon p-0 material-symbols-outlined">captive_portal</span>
                </button>
              </div>
            </div>
          </div>
  
          <div className='hero-right d-flex align-middle col-md-6 col-sm-12 m-0 p-0 vh-75'>
            <div className='hero-right-content my-auto m-0 p-2 rounded user-select-none'>
              <div className='row w-100 h-100 m-0 p-0'>
                <div className='col-4 m-0 p-0 h-100 d-flex'>
                  <img className='hero-img rounded my-auto w-100 h-100' loading='lazy' src='https://avatars.githubusercontent.com/u/116497746' alt=""></img>
                </div>
                <div className='col-8 m-0 p-0 my-auto bullet'>
                  <ul>
                    <li className='p-1 ps-2 pe-2 d-inline exeter border border-light'>University of Exeter Graduate</li>
                    <li className='p-1 mt-2'>— Problem Solver</li>
                    <li className='p-1'>— Tech Enthusiast</li>
                    <li className='p-1'>— Solution Architect</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  
        </div>
      </div>
      </>
    )
  }

  export default Hero;