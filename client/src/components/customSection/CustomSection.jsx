import "./customSection.css";
import Animated from "../animated/Animated";
import { motion } from "framer-motion";
import { vSlideInBottom } from "../../util/variants";
import { forwardRef } from "react";

const CustomSectionWithRef = ({ children, id }, ref) => {
  return (
    <section ref={ref} id={id} className="reference-container section">
      <div>
        <Animated
          element={motion.header}
          variants={vSlideInBottom({ duration: 0.5, delay: 0.2 })}
          ref={ref}
        >
          {id.replace(/-/g, " ")} <div className="active-bar"></div>
        </Animated>
        {children}
      </div>
    </section>
  );
};

const CustomSection = forwardRef(CustomSectionWithRef);
export default CustomSection;
