const GitHubButton = (props) => {

  var link = props.url;

  if (props.type === 'Repository') {
    link = 'https://github.com/jackoubridge/' + props.url;
  }

  return (
    <>
      <a
        type='button'
        href={link}
        target="_blank"
        rel="noreferrer"
        className='github-button m-0 p-1 btn btn-light btn-lg align-middle d-flex justify-content-between align-items-center my-auto' title={link}>
        <span className='p-0 visit-text pe-1'>Visit {props.type}</span>
        <GitHubButtonIcon type={props.type} />
      </a>
    </>
  )
}

function GitHubButtonIcon(props) {
  if (props.type === 'Repository') {
    return (
      <>
        <span className="icon p-0 fa-brands fa-github ms-md-1"></span>

      </>
    );
  }
  else {
    return (
      <>
        <span className="icon p-0 material-symbols-outlined">captive_portal</span>
      </>
    )
  }
}

export default GitHubButton;