import { forwardRef, useRef, useState } from "react";
import Icon from "../icon/Icon";
import SearchIcon from "@mui/icons-material/Search";
import Animated from "../animated/Animated";
import { motion } from "framer-motion";
import { vSlideIn } from "../../util/variants";
import { useNavigate } from "react-router-dom";

function SearchBar({ closeSearch }, ref) {
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const searchBarInViewRef = useRef(null);
  const setElementRef = (elementNode) =>
    elementNode && (ref.current = elementNode);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const handleSubmit = (e) => {
    e && e.preventDefault && e.preventDefault();
    navigate(`/search?searchText=${value}`);
    closeSearch();
  };

  return (
    <div
      className="reference-container"
      id="search-bar"
      ref={searchBarInViewRef}
    >
      <Animated
        element={motion.div}
        ref={searchBarInViewRef}
        className="nav-search-bar"
        variants={vSlideIn({ duration: 0.5 })}
        setElementRef={setElementRef}
      >
        <form onSubmit={handleSubmit}>
          <span>Search:</span>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Enter keyword here"
            value={value}
            onChange={handleChange}
            autoFocus
          />
          <Icon value={SearchIcon} handleClick={handleSubmit} />
        </form>
      </Animated>
    </div>
  );
}
const SearchBarWithRef = forwardRef(SearchBar);
export default SearchBarWithRef;
