const GitHubButton = (props) => {

    function handleClick(){
      window.open('https://github.com/jackoubridge/' + props.repo, '_blank').focus();
    }

    return (
      <>
      <button 
        type='button' 
        onClick={handleClick}
        className='github-button m-0 h-100 p-1 text-dark btn btn-light btn-lg align-middle d-flex justify-content-between align-items-center' title={`https://github.com/jackoubridge/${props.repo}`}>
          <span className='h-100 p-0 visit-text'>Visit Repository</span>
          <span className="icon p-0 material-symbols-outlined">captive_portal</span>
      </button>
      </>
    )
}

export default GitHubButton;