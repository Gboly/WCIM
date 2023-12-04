import { NavLink } from "react-router-dom";
import "./article.css";

const Article = ({ header, body, url, handleClick, quote }) => {
  return (
    <article className="article">
      <header>{header}</header>
      {quote ? (
        <q>
          {body}
          {(url || handleClick) && (
            <span onClick={handleClick}>
              <NavLink to={url}>Read more...</NavLink>
            </span>
          )}
        </q>
      ) : (
        <p>
          {body}
          {(url || handleClick) && (
            <span onClick={handleClick}>
              <NavLink to={url}>Read more...</NavLink>
            </span>
          )}
        </p>
      )}
    </article>
  );
};

export default Article;
