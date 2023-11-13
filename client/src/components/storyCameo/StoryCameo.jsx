import "./storyCameo.css";
import placeholder from "../../assets/wcim-main-pic.jpg";
import Article from "../article/Article";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { motion } from "framer-motion";
import Animated from "../animated/Animated";
import { hSlideInLeft, hSlideInRight } from "../../util/variants";

const StoryCameo = ({ index }) => {
  const storyCameoRef = useRef(null);

  const isReverse = index % 2 === 0;

  return (
    <div
      className="story-cameo"
      style={{ flexFlow: isReverse ? "row-reverse" : "row" }}
      ref={storyCameoRef}
    >
      <Animated
        element={motion.div}
        variants={isReverse ? hSlideInRight() : hSlideInLeft()}
        ref={storyCameoRef}
      >
        <div></div>
        <NavLink>
          <img src={placeholder} alt={"stoy poster image"} />
        </NavLink>
      </Animated>
      <Animated
        element={motion.article}
        variants={isReverse ? hSlideInLeft() : hSlideInRight()}
        ref={storyCameoRef}
      >
        <Article
          header={"Borehole water in Modakeke, Osun state, Nigeria."}
          body={
            "ISRAEL – As the war in Israel continues, many families fleeing the conflict are left wondering where their next meal might come from. Because of your faithful support, Operation Blessing is on the ground doing everything we can to provide hot meals for hurting families in Israel. In partnership with CBN Israel, we’re operating a"
          }
          url={`/stories/clean-water/12345`}
        />
      </Animated>
    </div>
  );
};

export default StoryCameo;
