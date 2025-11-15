const Badge = (props) => {
  return (
    <>
      <span className="badge user-select-none p-1 pa-3 pe-3 d-flex align-items-center">
        {props.lang}
      </span>
    </>
  )
}

export default Badge;