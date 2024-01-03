import { useOutletContext } from "react-router-dom";
import "./no-page.css";
import { useEffect, useRef } from "react";
import AnimatedPage from "../../components/animated/AnimatedPage";
import CustomSection from "../../components/customSection/customSection";
import error404 from "../../assets/404.png";

const NoPage = () => {
  const { setIsNoPage, isNoPage } = useOutletContext();
  const noPageRef = useRef(null);

  useEffect(() => {
    setIsNoPage(true);

    return () => setIsNoPage(false);
  }, [setIsNoPage, isNoPage]);

  return (
    <AnimatedPage className={"no-page"}>
      <CustomSection id={""} ref={noPageRef}>
        <img src={error404} alt="" />
        <h3>Page not found!</h3>
        <p>
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>
        <button onClick={() => (window.location.href = "/")}>
          Go to home page
        </button>
      </CustomSection>
    </AnimatedPage>
  );
};

export default NoPage;
