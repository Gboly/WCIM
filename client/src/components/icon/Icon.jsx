import "./icon.css";

function Icon({
  style,
  size,
  children,
  handleMouseOver,
  handleMouseOut,
  handleClick,
}) {
  return (
    <i
      className="icon"
      style={{ ...(style || {}), fontSize: `${size || 1.8}rem` }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      {children}
    </i>
  );
}

export default Icon;
