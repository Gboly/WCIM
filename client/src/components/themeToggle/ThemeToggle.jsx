import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { iconStyle } from "../../util/style";
import Icon from "../icon/Icon";

function ThemeToggle() {
  return (
    <Icon>
      {/* <DarkModeIcon style={iconStyle} /> */}
      <LightModeIcon style={iconStyle} />
    </Icon>
  );
}

export default ThemeToggle;
