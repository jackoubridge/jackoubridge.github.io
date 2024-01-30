import heroImg from '../assets/mugshot.png'
import posterImg from '../assets/poster.jpg';
import videoFile from '../assets/videoplayback.mp4';
import { forwardRef } from 'react';

const Hero = forwardRef(({ scrollToProjects }, ref) => {

  return (
    <>
      <div className='hero position-relative p-3 container-fluid d-flex justify-content-center'>

        <video
          className='background-video w-100 h-100'
          id='background-video'
          poster={posterImg}
          autoPlay loop muted>
          <source src={videoFile} type='video/mp4' />
        </video>

        <div className='hero-container rounded my-auto'>
          <div className='hero-img-container d-flex justify-content-center w-100'>
            <img className='hero-img rounded-circle h-100' src={heroImg} alt="me!" fetchpriority="high"></img>
          </div>
          <div className='hero-heading-container w-100 pb-4'>
            <span className='hero-heading-primary d-block w-100 text-center'>Jack Oubridge</span>
            <span className='hero-heading-secondary d-block w-100 text-center'>Software Developer. Tech Enthusiast.</span>
          </div>
          <div className='hero-buttons-container d-flex justify-content-center w-100'>
            <a href="https://linkedin.com/in/jackoubridge" target='_blank' rel='noreferrer' className="rounded btn btn-dark me-2 hero-button text-dark d-flex"><span className="my-auto">LinkedIn</span><span className="icon fa-brands fa-linkedin p-0 me-1 my-auto"></span></a>
            <a href="https://github.com/jackoubridge" target='_blank' rel='noreferrer' className="rounded btn btn-dark me-2 hero-button text-dark d-flex"><span className="my-auto">GitHub</span><span className="icon fa-brands fa-github p-0 my-auto"></span></a>
          </div>

        </div>

        <span onClick={scrollToProjects} className="user-select-none position-absolute scroll-button material-symbols-outlined">expand_circle_down</span>
      </div>
    </>
  )
});

export default Hero;