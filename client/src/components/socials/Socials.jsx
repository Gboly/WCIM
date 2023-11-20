import "./socials.css";
import { motion } from "framer-motion";
import Animated from "../animated/Animated";
import { useRef } from "react";
import { justReactions, scale } from "../../util/variants";
import { socials } from "../../util/content";

const Socials = () => {
  const socialsRef = useRef();
  return (
    <aside className="socials">
      {socials.map(({ name, src, url }) => (
        <a key={name} href={url} target="_blank" rel="noreferrer">
          <Animated
            element={motion.img}
            src={src}
            alt={`${name} icon`}
            variants={justReactions(scale)}
            ref={socialsRef}
            useVariantHover={true}
          />
        </a>
      ))}
    </aside>
  );
};

export default Socials;
