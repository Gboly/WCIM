import { createContext, useLayoutEffect, useState } from "react";
import "./App.css";
import { getTheme } from "./util/functions";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { sectionNames } from "./util/content";

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
  const navigateToSection = (section) => {
    scroller.scrollTo(sectionNames[section], { smooth: true });
    section === "Mailing list" && setInitiateMailingList(true);
  };

  // Set story category
  const [storyCategory, setStoryCategory] = useState("show all");
  const changeStoryCategory = (e) => setStoryCategory(e?.target?.id || e);

  // show processing pop-up
  const [processingDesc, setProcessingDesc] = useState("");

  return (
    <GeneralContext.Provider
      value={{
        initiateMailingList,
        navigateToSection,
        setInitiateMailingList,
        storyCategory,
        changeStoryCategory,
        processingDesc,
        setProcessingDesc,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
}

export default App;
