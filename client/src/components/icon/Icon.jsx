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
    <button className="icon-button">
      <i
        className="icon"
        style={{ ...(style || {}), fontSize: `${size || 1.8}rem` }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        {children}
      </i>
    </button>
  );
}

export default Icon;
