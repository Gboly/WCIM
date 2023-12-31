import "./storyCameo.css";
import Article from "../article/Article";
import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Animated from "../animated/Animated";
import {
  hSlideInLeft,
  hSlideInRight,
  imageScale,
  justReactions,
  rotateEnlarge,
} from "../../util/variants";
import { chooseAtRandomFromArray } from "../../util/functions";

const frameColors = [
  "#43409f",
  "#ed1414",
  "#009a00",
  "#ac88bb",
  "#ff9d02",
  "#b7ce00",
];
const StoryCameo = ({
  index,
  content: { poster, title, snippet, url },
  testimonial,
}) => {
  const storyCameoRef = useRef(null);
  const [isReferenceHover, setIsReferenceHover] = useState(false);

  const isReverse = index % 2 === 0;

  return (
    <div
      className={`story-cameo ${isReverse ? "row-reverse" : ""}`}
      ref={storyCameoRef}
    >
      <Animated
        element={motion.div}
        variants={isReverse ? hSlideInRight() : hSlideInLeft()}
        ref={storyCameoRef}
        onMouseOver={() => setIsReferenceHover(true)}
        onMouseOut={() => setIsReferenceHover(false)}
      >
        <Animated
          element={motion.div}
          ref={storyCameoRef}
          variants={justReactions(rotateEnlarge)}
          isReferenceHover={isReferenceHover}
          style={{ backgroundColor: chooseAtRandomFromArray(frameColors) }}
        />
        <NavLink to={url} className={testimonial ? "no-pointer-event" : ""}>
          <Animated
            element={motion.img}
            src={poster}
            alt={"story poster image"}
            ref={storyCameoRef}
            variants={justReactions(imageScale)}
            isReferenceHover={isReferenceHover}
          />
        </NavLink>
      </Animated>
      <Animated
        element={motion.article}
        variants={isReverse ? hSlideInLeft() : hSlideInRight()}
        ref={storyCameoRef}
      >
        <Article header={title} body={snippet} url={url} quote={testimonial} />
      </Animated>
    </div>
  );
};

export default StoryCameo;
