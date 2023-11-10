import "./doingsCameo.css";
import water from "../../assets/water.png";
import { forwardRef } from "react";
import Animated from "../animated/Animated";
import { motion } from "framer-motion";
import { hSlideInLeft, hSlideInRight } from "../../util/variants";

const isLeft = (index) => index % 2 === 0;
const delayByIndex = [0.8, 0.8, 1.3, 1.3, 0, 0];

const DoingsCameoWithRef = ({ index }, ref) => {
  const transition = {
    duration: 1,
    delay: delayByIndex[index],
  };

  return (
    <Animated
      element={motion.div}
      className="doingsCameo"
      variants={
        isLeft(index) ? hSlideInLeft(transition) : hSlideInRight(transition)
      }
      ref={ref}
      useVariantHover={true}
    >
      <img src={water} alt={"water"} />
      <article>
        <header>Hunger relief</header>
        <p>
          In the United States, and around the world, YOU are helping fill
          hungry bellies and fight hunger-related health problems through
          compassionate hunger relief programs in homes, schools, churches, and
          entire communities!
        </p>
      </article>
    </Animated>
  );
};

const DoingsCameo = forwardRef(DoingsCameoWithRef);
export default DoingsCameo;
