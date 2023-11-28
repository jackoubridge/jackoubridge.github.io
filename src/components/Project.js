import GitHubButton from "./GithubButton";
import Badge from "./Badge";

const Project = (props) => {

    const langs = props.langs.split(', ');
    const list = []
  
    for(const [i, lang] of langs.entries()){
      list.push(<Badge key={i} lang={lang}/>)
    }
  
    return (
      <>
      <div className='project d-inline m-0 p-1'>
        <div className='card projectcard w-100 h-100 text-light' style={{backgroundColor: props.color}}>
          <div className='card-header justify-content-between w-100 user-select-none align-middle ps-3 pe-3 pt-1 pb-1'>
            {props.title}
            <img src={props.imglink} className='header-img m-0 p-0' title="https://flaticon.com" alt=""></img>
          </div>
          <div className='card-body w-100'>
            <span className='project-info d-flex user-select-none w-100 p-0'>
              {props.text}
            </span>
            <div className='project-bottom align-middle d-flex justify-content-between position-absolute bottom-0 start-0 w-100'>
              <div className='badges ms-1 w-auto h-100 d-flex align-middle rounded'>
                {list}
              </div>
              <GitHubButton repo={props.repo}/>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}

export default Project;