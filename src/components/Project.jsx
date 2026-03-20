import GitHubButton from "./GithubButton";
import Badge from "./Badge";

const Project = (props) => {

  const urlPrefix = "https://cdn-icons-png.flaticon.com/128/"
  const urlSuffix = ".png";

  const imgLink = urlPrefix + props.imgLink + urlSuffix;

  const langs = props.langs.split(', ');
  const list = []

  for (const [i, lang] of langs.entries()) {
    list.push(<Badge key={i} lang={lang} />)
  }

  return (
    <>
      <div className="project d-inline m-2 p-1">
        <div className='card shadow-sm projectcard w-100 h-100' style={{ backgroundColor: 'transparent' }}>
          <div className='card-header justify-content-between w-100 ps-3 pe-3 pt-1 pb-1 d-flex align-items-center'>
            {props.title}
            <img src={imgLink} loading="lazy" className='header-img m-0 mt-1 mb-1 p-0' alt=""></img>
          </div>
          <div className='card-body pb-0 p-0 w-100 d-flex rounded'>
            <span className='project-info d-flex w-100 p-3'>
              {props.text}
            </span>
            <div className='project-bottom p-3 pt-2 pb-2 align-middle d-flex justify-content-between w-100'>
              <div className='badges w-auto h-auto d-flex align-middle'>
                {list}
              </div>
              <GitHubButton url={props.url} type={props.type} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project;