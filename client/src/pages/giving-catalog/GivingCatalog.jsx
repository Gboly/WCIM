import { useMemo, useRef, useState } from "react";
import AnimatedPage from "../../components/animated/AnimatedPage";
import "./giving-catalog.css";
import CustomSection from "../../components/customSection/customSection";
import GiveCard from "../../components/give-card/GiveCard";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Icon from "../../components/icon/Icon";
import { getGiftByCategory } from "../../util/functions";
import { choiceGiftCategories } from "../../util/content";
import Banner from "../../components/banner/Banner";

const GivingCatalog = () => {
  const givingCatalogRef = useRef(null);
  const [showMore, setShowMore] = useState(false);
  const [giftCategory, setGiftCategory] = useState("show all");

  const [mainGiftCategories, otherGiftCategories, isMoreContent] = useMemo(
    () => getGiftByCategory(showMore, giftCategory),
    [giftCategory, showMore]
  );

  const changeGiftCategory = (e) => {
    setGiftCategory(e.target.id);
    setShowMore(false);
  };

  return (
    <AnimatedPage className={"giving-catalog"}>
      <Banner
        ref={givingCatalogRef}
        desc={
          "Your support is filled with warmth and delight, bringing comfort and joy to those who receive them."
        }
      />
      <CustomSection id={"Giving-catalog"} ref={givingCatalogRef}>
        <div>
          {choiceGiftCategories.map((category) => (
            <button
              key={category}
              className={category === giftCategory ? "active-button" : ""}
              id={category}
              onClick={changeGiftCategory}
            >
              #{category}
            </button>
          ))}
        </div>
        <main>
          {mainGiftCategories.map((details) => (
            <GiveCard key={details.id} details={details} />
          ))}
          {otherGiftCategories.map((details) => (
            <GiveCard key={details.id} details={details} />
          ))}
        </main>
        {isMoreContent && !showMore && (
          <Icon
            value={ExpandMoreIcon}
            className={"iconNdesc"}
            size={2.2}
            handleClick={() => setShowMore(!showMore)}
          />
        )}
      </CustomSection>
    </AnimatedPage>
  );
};

export default GivingCatalog;
