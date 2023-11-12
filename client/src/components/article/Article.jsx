import { NavLink } from "react-router-dom";
import "./article.css";

const Article = ({ header, body, url, handleClick }) => {
  return (
    <article className="article">
      <header>{header}</header>
      <p>
        {body}
        {(url || handleClick) && (
          <span onClick={handleClick}>
            <NavLink to={url}>Read more...</NavLink>
          </span>
        )}
      </p>
    </article>
  );
};

export default Article;
