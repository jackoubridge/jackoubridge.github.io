import videoFile from '../assets/videoplayback.mp4';
import posterImg from '../assets/poster-1.jpg';
import mugshot from  '../assets/mugshot.png';
import React, { useRef } from 'react';

const Hero = React.forwardRef(({ scrollToProjects }, ref) => {

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
      <div className='hero p-3 container-fluid d-flex justify-content-center'>
  
        <video 
          ref={videoRef} 
          className='background-video' 
          id='background-video' 
          onCanPlay={() => setPlayback()}
          poster={posterImg} 
          autoPlay loop muted>
          <source src={videoFile} type='video/mp4' />
        </video>

        <div className='hero-container row rounded my-auto'>

          {/* HERO LEFT */}
          <div className='hero-l m-0 p-3 col-md-6 col-sm-12'>
            <span className='d-block p-2 display-2 w-100 hi-im-jack'>
              Hi, I'm Jack
            </span>
            <span className='d-block m-0 mt-2 mb-3 p-2 h5 tagline'>
                Software developer. Tech enhusiast.
            </span>
            <div className='hero-buttons mt-2 row m-0 p-0 w-100 d-flex'>
                <button 
                  type="button" 
                  onClick={() => handleClick('https://www.linkedin.com/in/jackoubridge')}
                  className="hero-button external-button m-2 btn btn-lg border border-black text-black align-middle d-flex justify-content-between align-items-center">
                    <span className='h-100 p-0 pe-2'>Linkedin </span>
                    <span className="icon p-0 material-symbols-outlined">captive_portal</span>
                </button>
                <button
                  type="button" 
                  onClick={() => handleClick('https://www.github.com/jackoubridge')}
                  className="hero-button external-button m-2 btn btn-lg border border-black text-black align-middle d-flex justify-content-between align-items-center">
                    <span className='h-100 p-0 pe-2'>Github</span>
                    <span className="icon p-0 material-symbols-outlined">captive_portal</span>
                </button>
            </div>
          </div>

          {/* HERO RIGHT */}
          <div className='hero-r row m-0 p-3 col-md-6 col-sm-12'>
            <div className='col-md-4 col-sm-4 m-0 p-0 imgcol d-flex justify-content-center'>
              <img className='hero-img my-auto w-100 h-100 rounded' loading='lazy' src={mugshot} alt=""></img>
            </div>
            <div className='col-md-8 col-sm-8 m-0 p-0 ps-2 d-flex justify-content-center mylist'>
              <ul class="list-group ps-0 pe-0 my-auto">
                <li class="list-group-item exeter">University of Exeter Graduate</li>
                <li class="list-group-item">- Persistent Learner</li>
                <li class="list-group-item">- Passionate Programmer</li>
                <li class="list-group-item">- Solution Architect</li>
              </ul>
            </div>
          </div>
        </div>

        <span onClick={scrollToProjects} className="user-select-none position-absolute scroll-button material-symbols-outlined">expand_circle_down</span>
      </div>
      </>
    )
  });

  export default Hero;