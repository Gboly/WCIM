import "./what-we-do.css";
import Article from "../../components/article/Article";
import DonateButton from "../../components/donateButton/DonateButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Icon from "../../components/icon/Icon";
import CustomSection from "../../components/customSection/CustomSection";
import { useRef } from "react";
import StoryCameo from "../../components/storyCameo/StoryCameo";
import { Link } from "react-scroll";
import AnimatedPage from "../../components/animated/AnimatedPage";
import { useGetStoriesByQueryQuery } from "../../app/api-slices/story";
import Spinner from "../../components/spinner/Spinner";

const range = { start: 0, end: 3 };
const WhatWeDo = ({
  content: { id, title, poster, icon, snippet, content, video },
}) => {
  const ourStoriesRef = useRef(null);

  const { data: stories } = useGetStoriesByQueryQuery({
    ...range,
    query: `category=${id}`,
  });

  return (
    <AnimatedPage className={`what-we-do ${id}`}>
      <section className="wwd-intro">
        <div>
          <img src={poster} alt="clean-water poster image" className="poster" />
        </div>
        <div>
          <img src={icon} alt="" />
          <Article header={title} body={snippet} />
          <DonateButton styleClass={"bigger"} />
        </div>
        <Link to="wwd-desc" smooth="true">
          <Icon value={ExpandMoreIcon} className={"iconNdesc"} size={2.2} />
        </Link>
      </section>
      <section name={"wwd-desc"} className="wwd-desc">
        <div>
          {video && <video src={video} controls></video>}
          {content.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>
      <CustomSection ref={ourStoriesRef} id={"our-stories"}>
        {stories ? (
          stories.map((content, index) => (
            <StoryCameo key={content._id} index={index} content={content} />
          ))
        ) : (
          <Spinner />
        )}
      </CustomSection>
    </AnimatedPage>
  );
};

export default WhatWeDo;
