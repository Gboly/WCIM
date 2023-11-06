import { NavLink } from "react-router-dom";
import logo from "../../assets/brand-logo.png";
import "./navbar.css";
import DonateButton from "../donateButton/DonateButton";
import SearchIcon from "@mui/icons-material/Search";
import { iconStyle } from "../../util/style";
import Icon from "../icon/Icon";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { navOptions } from "../../util/content";
import { useEffect, useState } from "react";
import NavSubOptions from "./NavSubOptions";

function Navbar() {
  return (
    <>
      <section className="nav-container">
        <NavLink to={"/"} reloadDocument>
          <div className="brand">
            <img src={logo} alt="world care international ministry logo" />
            <div className="brand-name">
              <span>World care</span>
              <span>international ministry</span>
            </div>
          </div>
        </NavLink>
        <div className="nav-options">
          <div>
            <Icon>
              <SearchIcon style={iconStyle} />
            </Icon>
            <ThemeToggle />
          </div>
          <nav>
            {navOptions.map((option) => (
              <NavOption key={option.desc} option={option} />
            ))}
          </nav>
          <DonateButton />
        </div>
      </section>
    </>
  );
}

const NavOption = ({ option: { desc, content, columnType } }) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    desc === "What we do" && setIsHovered(true);
  }, [desc]);

  const handleMouseOver = () => {
    setIsHovered(true);
  };
  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div
      key={desc}
      className="nav-option"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <NavLink>{desc}</NavLink>
      <div className="sub-options-wrapper">
        {isHovered && (
          <>
            <div className="active-bar"></div>
            <NavSubOptions subOptions={content} columnType={columnType} />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
