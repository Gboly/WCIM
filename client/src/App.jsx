import { useLayoutEffect } from "react";
import "./App.css";
import { getTheme } from "./util/functions";
import { useLocation } from "react-router-dom";

function App({ children }) {
  // Treat top-level states and contexts here

  const location = useLocation();

  useLayoutEffect(() => {
    const theme = getTheme();
    document.querySelector("html").setAttribute("data-theme", theme);
  }, []);

  // Each page should be rendered from top.
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
}

export default App;
