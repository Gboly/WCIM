import { useContext, useMemo, useRef } from "react";
import AnimatedPage from "../../components/animated/AnimatedPage";
import CustomSection from "../../components/customSection/customSection";
import "./all-stories.css";
import { storyCategories } from "../../util/content";
import { getStoryCategory } from "../../util/functions";
import StoryCameo from "../../components/storyCameo/StoryCameo";
import { GeneralContext } from "../../App";

const AllStories = () => {
  const { storyCategory, changeStoryCategory } = useContext(GeneralContext);
  const allStoriesRef = useRef(null);

  const stories = useMemo(
    () => getStoryCategory(storyCategory),
    [storyCategory]
  );

  return (
    <AnimatedPage className={"all-stories"}>
      <CustomSection id={"news-&-stories"} ref={allStoriesRef}>
        <div className="our-services-options">
          {storyCategories.map((category) => (
            <button
              key={category}
              className={category === storyCategory ? "active-button" : ""}
              id={category}
              onClick={changeStoryCategory}
            >
              #{category}
            </button>
          ))}
        </div>
        {stories.map((content, index) => (
          <StoryCameo key={content.id} index={index} content={content} />
        ))}
      </CustomSection>
    </AnimatedPage>
  );
};

export default AllStories;
