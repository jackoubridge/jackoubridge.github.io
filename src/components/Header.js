

const Header = (props) => {
    return(
      <span className='w-100 p-0 mb-3 myheader position-relative d-flex text-center align-items-center justify-content-center display-4 text-dark'>
        {props.title}
      </span>
    )
}

export default Header;