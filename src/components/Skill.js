import Fade from 'react-reveal/Fade';

const Skill = (props) => {

    const urlPrefix = "https://cdn-icons-png.flaticon.com/128/"
    const urlSuffix = ".png";

    const imgLink = urlPrefix + props.imgLink + urlSuffix;

    return (
        <>
            <Fade duration={400}>
                <div className="skill w-auto rounded d-flex justify-content-between p-1 ps-3 pe-3 m-1">
                    <span className="d-flex h-100 skill-content"><img className="skill-img h-75 my-auto me-3" src={imgLink} alt={props.title}></img><span className="my-auto skill-title" fetchpriority="low">{props.title}</span></span>
                </div>
            </Fade>
        </>
    )
}

export default Skill;