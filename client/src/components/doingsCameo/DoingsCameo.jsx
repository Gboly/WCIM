import "./doingsCameo.css";
import { forwardRef } from "react";
import Animated from "../animated/Animated";
import { motion } from "framer-motion";
import { hSlideInLeft, hSlideInRight, shadowOut } from "../../util/variants";
import { NavLink } from "react-router-dom";

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
    <NavLink to={url}>
      <Animated
        element={motion.div}
        className="doingsCameo"
        variants={
          isLeft(index)
            ? hSlideInLeft(transition, shadowOut)
            : hSlideInRight(transition, shadowOut)
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
    </NavLink>
  );
};

const DoingsCameo = forwardRef(DoingsCameoWithRef);
export default DoingsCameo;
