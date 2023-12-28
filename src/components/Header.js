

const Header = (props) => {
  return (
    <span className='w-100 p-0 mb-3 myheader position-relative user-select-none d-flex align-items-center justify-content-center text-center display-4'>
      {props.title}
    </span>
  )
}

export default Header;