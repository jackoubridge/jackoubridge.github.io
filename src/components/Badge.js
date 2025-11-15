const Badge = (props) => {
  return (
    <>
      <span className="badge user-select-none p-1 ps-0 pe-3 d-flex align-items-center">
        {props.lang}
      </span>
    </>
  )
}

export default Badge;