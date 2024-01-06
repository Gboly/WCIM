import { useRef } from "react";
import AnimatedPage from "../../components/animated/AnimatedPage";
import "./about-us.css";
import Banner from "../../components/banner/Banner";
import CustomSection from "../../components/customSection/CustomSection";
import { extendedMissionStatement, testimonials } from "../../util/content";
import StoryCameo from "../../components/storyCameo/StoryCameo";

const direction = `A quick navigation to our various "what-we-do" pages would provide insights to the journey that World Care International Ministry has embarked on.`;
const AboutUs = () => {
  const aboutUsRef = useRef();
  return (
    <AnimatedPage className={"about-us"}>
      <Banner desc={"Caring for the world in need"} ref={aboutUsRef} />
      <CustomSection id={"our-mission"} ref={aboutUsRef}>
        <p>{extendedMissionStatement}</p>
      </CustomSection>
      <section className="direction">
        <p>{direction}</p>
      </section>
      <CustomSection id={"testimonials"} ref={aboutUsRef}>
        {testimonials.map((content, index) => (
          <StoryCameo
            key={content.id}
            index={index}
            content={content}
            testimonial={true}
          />
        ))}
      </CustomSection>
      <div className="summon">
        <p>join and support us in making the world a better place ❤</p>
      </div>
    </AnimatedPage>
  );
};

export default AboutUs;
