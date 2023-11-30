import { NavLink, useNavigate } from "react-router-dom";
import { forwardRef, useContext, useState } from "react";
import Animated from "../animated/Animated";
import { motion } from "framer-motion";
import { reveal } from "../../util/variants";
import { GeneralContext } from "../../App";

const NavSubOptionsWithRef = (
  { subOptions, columnType, closeSubOption },
  ref
) => {
  return (
    <Animated
      element={motion.div}
      className={`sub-option-container ${columnType}`}
      variants={reveal({ duration: 0.2 })}
      ref={ref}
    >
      {subOptions.map((subOption) => (
        <SubOption
          key={subOption.desc}
          subOption={subOption}
          closeSubOption={closeSubOption}
        />
      ))}
    </Animated>
  );
};

export const SubOption = ({
  subOption: { icon, desc, url },
  closeSubOption,
}) => {
  const { gotoMailingForm } = useContext(GeneralContext);
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };
  const handleMouseOut = () => {
    setIsHovered(false);
  };
  const handleClick = () => {
    closeSubOption && closeSubOption();
    desc === "Mailing list" ? gotoMailingForm() : navigate(url);
  };

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
