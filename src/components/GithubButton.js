const GitHubButton = (props) => {
    return (
      <>
      <button 
        type='button' 
        onClick={(e) => {e.preventDefault();window.open('https://github.com/jackoubridge/' + props.repo, '_blank').focus();}}
        className='github-button m-0 me-2 my-auto p-1 text-dark btn btn-light btn-lg align-middle d-flex justify-content-between align-items-center' title={`https://github.com/jackoubridge/${props.repo}`}>
          <span className='h-100 p-0'>Visit Repository</span>
          <span className="icon p-0 material-symbols-outlined">captive_portal</span>
      </button>
      </>
    )
}

export default GitHubButton;