import { createContext, useLayoutEffect, useState } from "react";
import "./App.css";
import { getTheme } from "./util/functions";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

export const GeneralContext = createContext();
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

  // Activating mailing form
  const [initiateMailingList, setInitiateMailingList] = useState(false);
  const gotoMailingForm = () => {
    scroller.scrollTo("footer", { smooth: true });
    setInitiateMailingList(true);
  };

  return (
    <GeneralContext.Provider
      value={{ initiateMailingList, gotoMailingForm, setInitiateMailingList }}
    >
      {children}
    </GeneralContext.Provider>
  );
}

export default App;
