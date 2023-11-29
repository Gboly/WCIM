import { useRef, useState } from "react";
import DonateButton from "../../components/donateButton/DonateButton";
import "./home.css";
import { AnimatePresence, motion } from "framer-motion";
import Animated from "../../components/animated/Animated";
import {
  fontSizeIncrease,
  hSlideIn,
  reveal,
  vSlideInBottom,
} from "../../util/variants";
import DoingsCameo from "../../components/doingsCameo/DoingsCameo";
import CustomSection from "../../components/customSection/customSection";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Icon from "../../components/icon/Icon";
import { doingsContent, storyContent } from "../../util/content";
import { NavLink } from "react-router-dom";
import giving from "../../assets/giving.png";
import StoryCameo from "../../components/storyCameo/StoryCameo";
import Socials from "../../components/socials/Socials";
import AnimatedPage from "../../components/animated/AnimatedPage";

const ourMissionStatement =
  "At WCIM, our mission is to transform lives and communities through the power of faith, love, and compassion. Inspired by the teachings of Christ, we are dedicated to serving humanity's most vulnerable, providing hope, and facilitating positive change.";

function Home() {
  const introRef = useRef(null);
  const ourMissionRef = useRef(null);
  const whatWeDoRef = useRef(null);
  const givingCatalogRef = useRef(null);
  const ourStoriesRef = useRef(null);

  const [showMore, setshowMore] = useState(false);

  return (
    <AnimatedPage className="home">
      <section ref={introRef} id="intro">
        <div>
          <Animated element={motion.header} variants={reveal()} ref={introRef}>
            Expressing your faith means blessing the poor and helping humanity
          </Animated>
          <DonateButton
            styleClass={"bigger"}
            variants={hSlideIn({ delay: 1 })}
            ref={introRef}
          />
          <Animated
            element={motion.p}
            variants={reveal({ delay: 2 })}
            ref={introRef}
          >
            Join and support us in making the world a better place.
          </Animated>
        </div>
        <Socials />
      </section>
      <CustomSection id="our-mission" ref={ourMissionRef}>
        <Animated
          element={motion.p}
          variants={vSlideInBottom({ duration: 0.5, delay: 0.8 })}
          ref={ourMissionRef}
        >
          {ourMissionStatement}
        </Animated>
      </CustomSection>
      <CustomSection id="what-we-do" ref={whatWeDoRef}>
        <div className="options-container">
          <AnimatePresence>
            {doingsContent.map((doings, index) =>
              index > 3 ? (
                showMore && (
                  <DoingsCameo
                    key={doings.desc}
                    index={index}
                    ref={whatWeDoRef}
                    doings={doings}
                  />
                )
              ) : (
                <DoingsCameo
                  key={doings.desc}
                  index={index}
                  ref={whatWeDoRef}
                  doings={doings}
                />
              )
            )}
          </AnimatePresence>
        </div>
        <Icon
          value={showMore ? ExpandLessIcon : ExpandMoreIcon}
          className={"iconNdesc"}
          size={2.2}
          handleClick={() => setshowMore(!showMore)}
        />
      </CustomSection>
      <section
        ref={givingCatalogRef}
        className="reference-container"
        id="giving-catalog"
      >
        <Animated
          element={motion.div}
          variants={hSlideIn({}, fontSizeIncrease)}
          ref={givingCatalogRef}
          useVariantHover={true}
        >
          <NavLink to={"/get-involved/giving"}>
            <img src={giving} alt="giving icon" />
            Giving catalog
          </NavLink>
        </Animated>
      </section>
      <CustomSection ref={ourStoriesRef} id={"our-stories"}>
        {storyContent.map((content, index) => (
          <StoryCameo key={content.id} index={index} content={content} />
        ))}
      </CustomSection>
    </AnimatedPage>
  );
}

export default Home;
