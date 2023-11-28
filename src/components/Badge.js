const Badge = (props) => {
    return (
      <>
      <span className="badge text-light border user-select-none border-light m-1 my-auto p-1">
        {props.lang}
      </span>
      </>
    )
}

export default Badge;