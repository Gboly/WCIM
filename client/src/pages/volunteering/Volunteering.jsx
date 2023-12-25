import { useContext } from "react";
import AnimatedPage from "../../components/animated/AnimatedPage";
import "./volunteering.css";
import { GeneralContext } from "../../App";

const Volunteering = () => {
  const { navigateToSection } = useContext(GeneralContext);

  return (
    <AnimatedPage className={"volunteering"}>
      <section>
        <header>Coming Soon</header>
        <p>
          In the meantime, stay informed with World Care International Ministry
          by joining our mailing list.
        </p>
        <button onClick={() => navigateToSection("Mailing list")}>
          Join mailing list
        </button>
      </section>
    </AnimatedPage>
  );
};

export default Volunteering;
