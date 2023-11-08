import { motion } from "framer-motion";
import Animated from "../animated/Animated";
import "./donate.css";
import { forwardRef } from "react";

function DonateButtonWithRef({ styleClass, variants }, ref) {
  return (
    <>
      {variants ? (
        <Animated
          element={motion.button}
          className={`donate-button ${styleClass || ""}`}
          whileHover={{ scale: 1.05 }}
          variants={variants}
          ref={ref}
        >
          Donate
        </Animated>
      ) : (
        <button className={`donate-button ${styleClass || ""}`}>Donate</button>
      )}
    </>
  );
}

const DonateButton = forwardRef(DonateButtonWithRef);
export default DonateButton;
