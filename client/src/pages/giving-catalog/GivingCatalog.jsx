import { useRef } from "react";
import Animated from "../../components/animated/Animated";
import AnimatedPage from "../../components/animated/AnimatedPage";
import { hSlideIn } from "../../util/variants";
import "./giving-catalog.css";
import { motion } from "framer-motion";
import givingPoster from "../../assets/wcim-giving-poster.png";
import CustomSection from "../../components/customSection/customSection";
import GiveCard from "../../components/give-card/GiveCard";

const GivingCatalog = () => {
  const givingCatalogRef = useRef(null);

  return (
    <AnimatedPage className={"giving-catalog"}>
      <section
        ref={givingCatalogRef}
        className="reference-container"
        id="giving-catalog"
      >
        <Animated
          element={motion.div}
          variants={hSlideIn({})}
          ref={givingCatalogRef}
          useVariantHover={true}
        >
          <img src={givingPoster} alt="giving icon" />
          <div>
            <p>
              Your support is filled with warmth and delight, bringing comfort
              and joy to those who receive them.
            </p>
          </div>
        </Animated>
      </section>
      <CustomSection id={"Giving-catalog"} ref={givingCatalogRef}>
        <main>
          <GiveCard />
          <GiveCard />
          <GiveCard />
          <GiveCard />
          <GiveCard />
          <GiveCard />
        </main>
      </CustomSection>
    </AnimatedPage>
  );
};

export default GivingCatalog;
