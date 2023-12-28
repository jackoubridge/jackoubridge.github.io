const Badge = (props) => {
  return (
    <>
      <span className="badge border user-select-none border-light me-1 my-1 p-1">
        {props.lang}
      </span>
    </>
  )
}

export default Badge;