import { useMemo, useRef, useState } from "react";
import AnimatedPage from "../../components/animated/AnimatedPage";
import CustomSection from "../../components/customSection/customSection";
import "./all-stories.css";
import { storyCategories } from "../../util/content";
import { getStoryCategory } from "../../util/functions";
import StoryCameo from "../../components/storyCameo/StoryCameo";

const AllStories = () => {
  const allStoriesRef = useRef(null);
  const [storyCategory, setStoryCategory] = useState("show all");

  const stories = useMemo(
    () => getStoryCategory(storyCategory),
    [storyCategory]
  );

  const changeStoryCategory = (e) => setStoryCategory(e.target.id);

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
