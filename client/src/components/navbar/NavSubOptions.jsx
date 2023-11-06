import money from "../../assets/money.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function NavSubOptions({ subOptions, columnType }) {
  return (
    <div className={`sub-option-container ${columnType}`}>
      {subOptions.map((subOption) => (
        <SubOption key={subOption.desc} subOption={subOption} />
      ))}
    </div>
  );
}

const SubOption = ({ subOption: { icon, desc, url } }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };
  const handleMouseOut = () => {
    setIsHovered(false);
  };
  const handleClick = () => navigate(url);

  return (
    <div
      className={`sub-option ${isHovered ? "sub-option-hover" : ""}`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      {/* <Icon>
        <SubOptionIcon style={iconStyle} />
      </Icon> */}
      <img src={icon} alt={`Icon for the represention of ${desc}`} />
      <NavLink>{desc}</NavLink>
    </div>
  );
};

export default NavSubOptions;
