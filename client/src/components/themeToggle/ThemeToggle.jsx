import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { iconStyle } from "../../util/style";
import Icon from "../icon/Icon";
import { useEffect, useLayoutEffect, useState } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState(null);

  useLayoutEffect(() => {
    const currentTheme = document
      .querySelector("html")
      .getAttribute("data-theme");
    setTheme(currentTheme);
  }, []);

  useEffect(() => {
    const currentTheme = document
      .querySelector("html")
      .getAttribute("data-theme");

    if (theme && currentTheme !== theme) {
      document.querySelector("html").setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const handleClick = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <Icon {...{ handleClick }}>
      {theme === "dark" ? (
        <DarkModeIcon style={iconStyle} />
      ) : (
        <LightModeIcon style={iconStyle} />
      )}
    </Icon>
  );
}

export default ThemeToggle;
