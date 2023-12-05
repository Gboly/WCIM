import { useRef } from "react";
import AnimatedPage from "../../components/animated/AnimatedPage";
import CustomSection from "../../components/customSection/customSection";
import "./our-team.css";
import official1 from "../../assets/wcim-official1.jpg";
import official2 from "../../assets/wcim-official2.jpg";
import official3 from "../../assets/wcim-official3.jpg";

const OurTeam = () => {
  const teamRef = useRef(null);

  return (
    <AnimatedPage className={"our-team"}>
      <CustomSection id={"meet-the-team"} ref={teamRef}>
        <div>
          <div className="official">
            <img src={official1} alt="" />
            <p>John Animashaun</p>
          </div>
          <div className="official">
            <img src={official2} alt="" />
            <p>Angela `Angie`</p>
          </div>
          <div className="official">
            <img src={official3} alt="" />
            <p>Abiodun Ajayi</p>
          </div>
        </div>
        <p>
          Our diverse team shares a common commitment to creating positive
          impact and fostering change. With unique skills, backgrounds, and a
          shared vision, we collaborate tirelessly to bring hope, support, and
          transformative initiatives to those in need. These are the faces
          behind the mission, each contributing their expertise to drive our
          charity forward and make the world a better place.
        </p>
      </CustomSection>
    </AnimatedPage>
  );
};

export default OurTeam;
