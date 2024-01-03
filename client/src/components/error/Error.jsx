import "./error.css";
import errorImage from "../../assets/error_image.png";
import AnimatedPage from "../animated/AnimatedPage";
import CustomSection from "../customSection/customSection";
import { useRef } from "react";

const Error = () => {
  const errorRef = useRef(null);

  return (
    <AnimatedPage className={"error-page"}>
      <CustomSection id={""} ref={errorRef}>
        <img src={errorImage} alt="" />
        <h3>Something went wrong...</h3>
        <p>We are working on fixing the problem.</p>
        <button onClick={() => location.reload()}>Try again</button>
        <button onClick={() => (window.location.href = "/")}>
          Go to home page and restart
        </button>
      </CustomSection>
    </AnimatedPage>
  );
};

export default Error;
