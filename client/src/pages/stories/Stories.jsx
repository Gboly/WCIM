import "./stories.css";
import { useEffect, useRef } from "react";
import CustomSection from "../../components/customSection/CustomSection";
import { useParams } from "react-router-dom";
import AnimatedPage from "../../components/animated/AnimatedPage";
import StoryCameo from "../../components/storyCameo/StoryCameo";
import {
  useGetStoriesByQueryQuery,
  useGetStoryByNameQuery,
} from "../../app/api-slices/story";
import Spinner from "../../components/spinner/Spinner";
import { useErrorBoundary } from "react-error-boundary";

const Stories = () => {
  const storyRef = useRef(null);
  const moreStoriesRef = useRef(null);
  const { name } = useParams();

  const { showBoundary } = useErrorBoundary();

  const { data: story, error } = useGetStoryByNameQuery({
    start: 0,
    end: 1,
    name,
  });
  const { data: moreStories } = useGetStoriesByQueryQuery({
    start: 0,
    end: 3,
    query: `name_ne=${name}`,
  });

  useEffect(() => {
    error && showBoundary(error);
  }, [error, showBoundary, story]);

  const storyMedia = ({ type, src, desc }, index) => (
    <div className="media-container" key={index}>
      {type === "image" ? (
        <img src={src} alt="" className="story-media" />
      ) : (
        <video src={src} className="story-media" controls />
      )}
      <p className="custom-alt">{desc}</p>
    </div>
  );
  return (
    <AnimatedPage className={"story-page"}>
      {story ? (
        <>
          <CustomSection id={story.title || ""} ref={storyRef}>
            <img src={story.poster || ""} alt="" className="story-poster" />
            {/* <p className="date">{new Date(story.createAt).toLocaleString()}</p> */}
            <div>
              {(story.story || []).map((content, index) =>
                content?.type ? (
                  storyMedia(content, index)
                ) : (
                  <p key={index} className="content">
                    {content}
                  </p>
                )
              )}
            </div>
          </CustomSection>
          <CustomSection id="more-stories" ref={moreStoriesRef}>
            {moreStories ? (
              moreStories.map((content, index) => (
                <StoryCameo key={content._id} index={index} content={content} />
              ))
            ) : (
              <Spinner />
            )}
          </CustomSection>
        </>
      ) : (
        <Spinner />
      )}
    </AnimatedPage>
  );
};

export default Stories;
