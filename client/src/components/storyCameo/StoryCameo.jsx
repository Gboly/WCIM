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

const frameColors = ["#43409f", "#ed1414", "#009a00"];
const StoryCameo = ({ index, content: { imgSrc, desc, body, url } }) => {
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
          style={{ backgroundColor: frameColors[index] }}
        />
        <NavLink to={url}>
          <Animated
            element={motion.img}
            src={imgSrc}
            alt={"stoy poster image"}
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
        <Article header={desc} body={body[0].slice(0, 300)} url={url} />
      </Animated>
    </div>
  );
};

export default StoryCameo;
