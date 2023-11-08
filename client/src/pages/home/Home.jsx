import { useRef } from "react";
import DonateButton from "../../components/donateButton/DonateButton";
import "./home.css";
import { motion } from "framer-motion";
import Animated from "../../components/animated/Animated";
import { hSlideIn, reveal } from "../../util/variants";

function Home() {
  const introRef = useRef(null);

  return (
    <main className="home">
      <section ref={introRef} id="intro">
        <div>
          <Animated element={motion.header} variants={reveal()} ref={introRef}>
            Expressing your faith means blessing the poor and helping humanity
          </Animated>
          <DonateButton
            styleClass={"bigger"}
            variants={hSlideIn({ delay: 1 })}
            ref={introRef}
          />
          <Animated
            element={motion.p}
            variants={reveal({ delay: 2 })}
            ref={introRef}
          >
            Join and support us in making the world a better place.
          </Animated>
        </div>
      </section>
    </main>
  );
}

export default Home;
