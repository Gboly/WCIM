import "./stories.css";
import { useMemo, useRef } from "react";
import CustomSection from "../../components/customSection/customSection";
import { useParams } from "react-router-dom";
import { storyContent } from "../../util/content";
import AnimatedPage from "../../components/animated/AnimatedPage";
import StoryCameo from "../../components/storyCameo/StoryCameo";

const Stories = () => {
  const storyRef = useRef(null);
  const moreStoriesRef = useRef(null);
  const { name } = useParams();

  const stories = useMemo(
    () => storyContent.find(({ name: storyName }) => storyName === name),
    [name]
  );

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
      <CustomSection id={stories?.desc || ""} ref={storyRef}>
        <img src={stories?.imgSrc || ""} alt="" className="story-poster" />
        <p className="date">{new Date().toLocaleString()}</p>
        <div>
          {(stories?.body || []).map((content, index) =>
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
        {storyContent
          .filter(
            ({ name: storyName }, index) => storyName !== name && index < 3
          )
          .map((content, index) => (
            <StoryCameo key={content.id} index={index} content={content} />
          ))}
      </CustomSection>

      {/* Donate section */}
    </AnimatedPage>
  );
};

export default Stories;
