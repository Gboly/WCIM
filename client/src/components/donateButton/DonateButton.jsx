import { motion } from "framer-motion";
import Animated from "../animated/Animated";
import "./donate.css";
import { forwardRef, useContext } from "react";
import { GeneralContext } from "../../App";

function DonateButtonWithRef({ styleClass, variants }, ref) {
  const { navigateToSection } = useContext(GeneralContext);

  const handleClick = () => {
    navigateToSection("Donate today");
  };

  return (
    <>
      {variants ? (
        <Animated
          element={motion.button}
          className={`donate-button ${styleClass || ""}`}
          whileHover={{ scale: 1.05 }}
          variants={variants}
          ref={ref}
          onClick={handleClick}
        >
          Donate
        </Animated>
      ) : (
        <button
          className={`donate-button ${styleClass || ""}`}
          onClick={handleClick}
        >
          Donate
        </button>
      )}
    </>
  );
}

const DonateButton = forwardRef(DonateButtonWithRef);
export default DonateButton;
