import "./search.css";
import { useRef, useState } from "react";
import AnimatedPage from "../../components/animated/AnimatedPage";
import CustomSection from "../../components/customSection/CustomSection";
import { useSearchParams } from "react-router-dom";
import { useSearchStoriesQuery } from "../../app/api-slices/story";
import Spinner from "../../components/spinner/Spinner";
import StoryCameo from "../../components/storyCameo/StoryCameo";

const Search = () => {
  const searchRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [text, setText] = useState(searchParams.get("searchText") || "");

  const { data: stories, isLoading } = useSearchStoriesQuery({
    start: 0,
    end: 10,
    searchText: searchParams.get("searchText") || "",
  });

  const handleInput = (e) => {
    e && e.preventDefault && e.preventDefault();
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e && e.preventDefault && e.preventDefault();
    setSearchParams({ searchText: text });
  };

  return (
    <AnimatedPage className={"search-page"}>
      <CustomSection id={""} ref={searchRef}>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter search word or phrase"
            value={text}
            onInput={handleInput}
          />
        </form>
        <div>
          {stories &&
            stories.map((content, index) => (
              <StoryCameo key={content._id} index={index} content={content} />
            ))}
          {stories?.length === 0 && (
            <p className="invalid">
              Sorry, we have no result for your search.{" "}
              <span>Try another search phrase!</span>
            </p>
          )}
          {(isLoading || !stories) && <Spinner />}
        </div>
      </CustomSection>
    </AnimatedPage>
  );
};

export default Search;
