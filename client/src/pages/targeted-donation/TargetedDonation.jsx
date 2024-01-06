import { useEffect, useMemo, useRef } from "react";
import AnimatedPage from "../../components/animated/AnimatedPage";
import CustomSection from "../../components/customSection/CustomSection";
import "./targeted-donation.css";
import { useOutletContext, useParams } from "react-router-dom";
import Donate from "../../components/donate/Donate";
import { giftCategories } from "../../util/content";
import line from "../../assets/thread-line.png";

const TargetedDonation = () => {
  const donateRef = useRef(null);
  const { id } = useParams();
  // Pardon the naming. Should have made it dynamic.
  const { setIsNoPage } = useOutletContext();

  useEffect(() => {
    setIsNoPage(true);

    return () => setIsNoPage(false);
  }, [setIsNoPage]);

  const { poster, title, desc } = useMemo(() => {
    return giftCategories.find(({ id: giftId }) => giftId === id);
  }, [id]);

  return (
    <AnimatedPage className={"targeted-donation"}>
      <CustomSection id={""} ref={donateRef}>
        <div className="intro">
          <h3>{title}</h3>
          <img src={line} alt="" />
          <p>{desc}</p>
        </div>
      </CustomSection>
      <Donate
        bgImage={poster}
        giftCategory={title}
        isMonthly={id === "support-monthly"}
      />
    </AnimatedPage>
  );
};

export default TargetedDonation;
