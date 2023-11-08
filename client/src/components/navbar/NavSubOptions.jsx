import { NavLink, useNavigate } from "react-router-dom";
import { forwardRef, useState } from "react";
import Animated from "../animated/Animated";
import { motion } from "framer-motion";
import { reveal } from "../../util/variants";

const NavSubOptionsWithRef = ({ subOptions, columnType }, ref) => {
  return (
    <Animated
      element={motion.div}
      className={`sub-option-container ${columnType}`}
      variants={reveal({ duration: 0.2 })}
      ref={ref}
    >
      {subOptions.map((subOption) => (
        <SubOption key={subOption.desc} subOption={subOption} />
      ))}
    </Animated>
  );
};

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

const NavSubOptions = forwardRef(NavSubOptionsWithRef);
export default NavSubOptions;
