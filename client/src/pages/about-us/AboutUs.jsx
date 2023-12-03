import { useRef } from "react";
import AnimatedPage from "../../components/animated/AnimatedPage";
import "./about-us.css";
import Banner from "../../components/banner/Banner";

const AboutUs = () => {
  const aboutUsRef = useRef();
  return (
    <AnimatedPage className={"about-us"}>
      <Banner desc={"Caring for the world in need."} ref={aboutUsRef} />
    </AnimatedPage>
  );
};

export default AboutUs;
