const GitHubButton = (props) => {

  var link = props.url;

  if (props.type === 'Repository') {
    link = 'https://github.com/jackoubridge/' + props.url;
  }


  function handleClick() {
    window.open(link, '_blank').focus();
  }

  return (
    <>
      <button
        type='button'
        onClick={handleClick}
        className='github-button m-0 p-1 text-dark btn btn-light btn-lg align-middle d-flex justify-content-between align-items-center my-auto' title={link}>
        <span className='p-0 visit-text pe-1'>Visit {props.type}</span>
        <span className="icon p-0 material-symbols-outlined">captive_portal</span>
      </button>
    </>
  )
}

export default GitHubButton;