import { NavLink, useLocation } from "react-router-dom";
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
import Animated from "../animated/Animated";
import { motion } from "framer-motion";
import { spreadOut } from "../../util/variants";
import Brand from "../brand/Brand";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Sidebar from "../sidebar/Sidebar";

function Navbar() {
  const searchBarRef = useRef(null);
  const sidebarRef = useRef(null);
  const [searchIsOpen, openSearch, closeSearch] = usePopUpHandler(searchBarRef);
  const [sidebarIsOpen, openSidebar, closeSidebar] =
    usePopUpHandler(sidebarRef);

  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isSearchPage = location.pathname === "/search";
  const isCheckout = location.pathname === "/donate/checkout";

  return (
    <>
      <section className="nav-container">
        <NavLink to={"/"} reloadDocument={isHomePage}>
          <Brand />
        </NavLink>
        {!isCheckout && (
          <div className="nav-options">
            <div>
              {!isSearchPage && (
                <Icon handleClick={openSearch} className={"search-icon"}>
                  <SearchIcon style={iconStyle} />
                </Icon>
              )}
              <ThemeToggle />
            </div>
            <nav>
              {navOptions.map((option) => (
                <NavOption key={option.desc} option={option} />
              ))}
            </nav>
            <DonateButton />
            {!sidebarIsOpen ? (
              <Icon
                handleClick={openSidebar}
                value={MenuIcon}
                className={"menu-icon"}
              />
            ) : (
              <Icon value={CloseIcon} className={"menu-icon"} />
            )}
          </div>
        )}
        {searchIsOpen && (
          <SearchBar ref={searchBarRef} closeSearch={closeSearch} />
        )}
      </section>
      {sidebarIsOpen && (
        <Sidebar ref={sidebarRef} closeSidebar={closeSidebar} />
      )}
    </>
  );
}

const NavOption = ({ option: { desc, content, columnType } }) => {
  const [isHovered, setIsHovered] = useState(false);
  const subOptionsRef = useRef(null);

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
      <span>{desc}</span>
      <div ref={subOptionsRef} className="sub-options-wrapper">
        {isHovered && (
          <>
            <Animated
              element={motion.div}
              className={"active-bar"}
              variants={spreadOut()}
              ref={subOptionsRef}
            />
            <NavSubOptions
              subOptions={content}
              columnType={columnType}
              ref={subOptionsRef}
              closeSubOption={handleMouseOut}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
