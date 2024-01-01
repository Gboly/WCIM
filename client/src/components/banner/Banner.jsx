import { forwardRef } from "react";
import "./banner.css";
import Animated from "../animated/Animated";
import { motion } from "framer-motion";
import { hSlideIn } from "../../util/variants";
import { givingPoster } from "../../util/images";

const BannerWithRef = ({ desc }, ref) => {
  return (
    <section
      ref={ref}
      className="reference-container banner"
      id="giving-catalog"
    >
      <Animated
        element={motion.div}
        variants={hSlideIn({})}
        ref={ref}
        useVariantHover={true}
      >
        <img src={givingPoster} alt="giving icon" />
        <div>
          <p>{desc}</p>
        </div>
      </Animated>
    </section>
  );
};

const Banner = forwardRef(BannerWithRef);
export default Banner;
