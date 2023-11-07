import { NavLink } from "react-router-dom";
import logo from "../../assets/brand-logo.png";
import "./navbar.css";
import DonateButton from "../donateButton/DonateButton";
import SearchIcon from "@mui/icons-material/Search";
import { iconStyle } from "../../util/style";
import Icon from "../icon/Icon";
import ThemeToggle from "../themeToggle/ThemeToggle";
import { navOptions } from "../../util/content";
import NavSubOptions from "./NavSubOptions";
import SearchBar from "./SearchBar";
import { useRef, useState } from "react";
import usePopUpHandler from "../../util/cutom-hooks/usePopupHandler";

function Navbar() {
  const searchBarRef = useRef(null);
  const [searchIsOpen, openSearch] = usePopUpHandler(searchBarRef);

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
            <Icon handleClick={openSearch}>
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
        {searchIsOpen && <SearchBar ref={searchBarRef} />}
      </section>
    </>
  );
}

const NavOption = ({ option: { desc, content, columnType } }) => {
  const [isHovered, setIsHovered] = useState(false);

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
