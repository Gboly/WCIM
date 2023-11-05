import { useLayoutEffect } from "react";
import "./App.css";
import { getTheme } from "./util/functions";

function App({ children }) {
  // Treat top-level states and contexts here

  useLayoutEffect(() => {
    const theme = getTheme();
    document.querySelector("html").setAttribute("data-theme", theme);
  }, []);

  return <>{children}</>;
}

export default App;
