import Header from "./Header";
import AboutmeSection from "./AboutmeSection";

const AboutMe = () => {
  return (
    <>
      <div className='aboutme container-fluid position-relative p-3 position-relative'>
        <div className="row about-me-row m-0 p-0">
          <Header title="About Me" />
          <AboutmeSection imgLink="https://shorturl.at/jyBE9" posY='30%' order='1' content={"Born and raised in Carmarthenshire, Wales. I've had a passion for Computer Science before I even knew what it was. I spent my early teenage years writing simple batch script games in the school library and trying to get modern games running on my old PC, all the while wishing I knew what 'public static void main(String[] args)' meant. <br><br> I've always been a creator. I love to write software, build hardware, make music and create videos. Having the ability to create things for myself and others is one of my life's biggest motivations, and this is what drives me to continuously learn and update my skillset."} />
          <AboutmeSection imgLink="https://shorturl.at/aqwGN" posY='25%' content={"2024 is the year my career begins. Getting a CS degree and starting a software dev career have been axioms of my existence for as long as I can remember, and now I'm on the path to making it a reality.<br><br>My ambition is to showcase my knowledge and ability in the worlds of software development and computer science and follow my dream. I've always looked up to the people who worked on the products and applications that I used throughout my life, and I want nothing more than to become one of those people and make a difference."} />
        </div>
      </div>
    </>
  )
}

export default AboutMe;