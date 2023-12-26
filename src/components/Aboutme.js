import Header from "./Header";

const AboutMe = () => {
  return (
    <>
      <div className='aboutme container-fluid position-relative p-3 d-relative justify-content-center'>
        <Header title="About Me" />

        <div className="about-me-section rounded">
          <div className="about-me-body d-flex justify-content-center">
          </div>

        </div>

        <hr></hr>

        <div className="about-me-section rounded">
        </div>

        <hr></hr>

        <div className="about-me-section rounded">
        </div>

        <hr></hr>

      </div>
    </>
  )
}

export default AboutMe;