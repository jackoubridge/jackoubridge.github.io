import GitHubButton from "./GithubButton";
import Badge from "./Badge";
import Fade from 'react-reveal/Fade';

const Project = (props) => {

  const langs = props.langs.split(', ');
  const list = []

  for (const [i, lang] of langs.entries()) {
    list.push(<Badge key={i} lang={lang} />)
  }

  return (
    <>
      <Fade duration={400}>
        <div className={"project d-inline m-0 p-1"}>
          <div className='card shadow-sm projectcard w-100 h-100 text-light' style={{ backgroundColor: props.color }}>
            <div className='card-header justify-content-between w-100 user-select-none align-middle ps-3 pe-3 pt-1 pb-1'>
              {props.title}
              <img src={props.imglink} loading="lazy" className='header-img m-0 mt-1 mb-1 p-0' alt=""></img>
            </div>
            <div className='card-body pb-0 w-100'>
              <span className='project-info d-flex user-select-none w-100 p-0 pb-2'>
                {props.text}
              </span>
              <div className='project-bottom pb-2 align-middle d-flex justify-content-between w-100'>
                <div className='badges w-auto h-100 d-flex align-middle rounded'>
                  {list}
                </div>
                <GitHubButton url={props.url} type={props.type} />
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  )
}

export default Project;