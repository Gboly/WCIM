import { useContext, useRef } from "react";
import AnimatedPage from "../../components/animated/AnimatedPage";
import CustomSection from "../../components/customSection/CustomSection";
import "./all-stories.css";
import { storyCategories } from "../../util/content";
import StoryCameo from "../../components/storyCameo/StoryCameo";
import { GeneralContext } from "../../App";
import {
  useGetStoriesByQueryQuery,
  useGetStoriesQuery,
} from "../../app/api-slices/story";
import Spinner from "../../components/spinner/Spinner";

const range = { start: 0, end: 10 };
const AllStories = () => {
  const { storyCategory, changeStoryCategory } = useContext(GeneralContext);
  const allStoriesRef = useRef(null);

  // Implement pagination for this
  const { data: allStories, isLoading: storyIsLoading1 } = useGetStoriesQuery(
    range,
    {
      skip: storyCategory !== "show all",
    }
  );
  const { data: categoryStories, isLoading: storyIsLoading } =
    useGetStoriesByQueryQuery(
      { ...range, query: `category=${storyCategory}` },
      {
        skip: storyCategory === "show all",
      }
    );

  const stories = storyCategory === "show all" ? allStories : categoryStories;

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
        {stories &&
          stories.map((content, index) => (
            <StoryCameo key={content._id} index={index} content={content} />
          ))}
        {(storyIsLoading || storyIsLoading1) && <Spinner />}
      </CustomSection>
    </AnimatedPage>
  );
};

export default AllStories;
