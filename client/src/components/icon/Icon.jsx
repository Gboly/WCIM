import { iconStyle } from "../../util/style";
import "./icon.css";

function Icon({
  style,
  size,
  children,
  handleMouseOver,
  handleMouseOut,
  handleClick,
  value: Value,
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
        {children || <Value style={iconStyle} />}
      </i>
    </button>
  );
}

export default Icon;
