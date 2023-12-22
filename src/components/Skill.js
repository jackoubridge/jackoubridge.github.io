const Skill = (props) => {
    return(
        <>
        <div className="skill bg-dark rounded d-flex justify-content-between p-2 ps-3 pe-3 m-2">
            <span className="d-flex h-100 skill-content"><img className="skill-img h-75 my-auto me-3" src={props.imageLink}></img><span className="my-auto skill-title">{props.title}</span></span>
        </div>
        </>
    )
}

export default Skill;