import { forwardRef, useRef } from "react";
import "./sidebar.css";
import Animated from "../animated/Animated";
import { motion } from "framer-motion";
import { hSlideInRight } from "../../util/variants";
import { SubOption as NavSubOption } from "../navbar/NavSubOptions";
import { navOptions } from "../../util/content";

const SidebarWithRef = (_, ref) => {
  const sidebarInViewRef = useRef(null);
  const setElementRef = (elementNode) =>
    elementNode && (ref.current = elementNode);

  return (
    <aside className="reference-container" id="sidebar" ref={sidebarInViewRef}>
      <Animated
        element={motion.div}
        ref={sidebarInViewRef}
        className="sidebar"
        variants={hSlideInRight({ duration: 0.6 })}
        setElementRef={setElementRef}
      >
        <main>
          {navOptions.map(({ desc, content }) => (
            <section key={desc}>
              <header>{desc}</header>
              {content.map((subOption) => (
                <NavSubOption key={subOption.desc} subOption={subOption} />
              ))}
            </section>
          ))}
        </main>
      </Animated>
    </aside>
  );
};

const Sidebar = forwardRef(SidebarWithRef);
export default Sidebar;
