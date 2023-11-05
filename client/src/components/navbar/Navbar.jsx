import { NavLink } from "react-router-dom";
import logo from "../../assets/brand-logo.png";
import "./navbar.css";
import DonateButton from "../donateButton/DonateButton";
import SearchIcon from "@mui/icons-material/Search";
import { iconStyle } from "../../util/style";
import Icon from "../icon/Icon";
import ThemeToggle from "../themeToggle/ThemeToggle";

function Navbar() {
  return (
    <section className="nav-container">
      <NavLink reloadDocument>
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
          <NavLink>What we do</NavLink>
          <NavLink>Get involved</NavLink>
          <NavLink>Who we are</NavLink>
        </nav>
        <DonateButton />
      </div>
    </section>
  );
}

export default Navbar;
