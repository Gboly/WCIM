import "./doingsCameo.css";
import { forwardRef } from "react";
import Animated from "../animated/Animated";
import { motion } from "framer-motion";
import { hSlideInLeft, hSlideInRight } from "../../util/variants";

const isLeft = (index) => index % 2 === 0;
const delayByIndex = [0.8, 0.8, 1.3, 1.3, 0, 0];

const DoingsCameoWithRef = (
  { index, doings: { icon, desc, url, body } },
  ref
) => {
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
      animateExit={index > 3}
    >
      <img src={icon} alt={"water"} />
      <article>
        <header>{desc}</header>
        <p>{body}</p>
      </article>
    </Animated>
  );
};

const DoingsCameo = forwardRef(DoingsCameoWithRef);
export default DoingsCameo;
