import "./what-we-do.css";
import Article from "../../components/article/Article";
import DonateButton from "../../components/donateButton/DonateButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Icon from "../../components/icon/Icon";
import CustomSection from "../../components/customSection/customSection";
import { useRef } from "react";
import { storyContent } from "../../util/content";
import StoryCameo from "../../components/storyCameo/StoryCameo";
import { Link } from "react-scroll";

const WhatWeDo = ({
  content: { id, title, poster, icon, snippet, content, video },
}) => {
  const ourStoriesRef = useRef(null);
  return (
    <main className={`what-we-do ${id}`}>
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
      {/* This section would require a fetch of stories relating to this service - the storyContent */}
      <CustomSection ref={ourStoriesRef} id={"our-stories"}>
        {storyContent.map((content, index) => (
          <StoryCameo key={content.id} index={index} content={content} />
        ))}
      </CustomSection>
    </main>
  );
};

export default WhatWeDo;
