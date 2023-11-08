import { forwardRef, useRef, useState } from "react";
import Icon from "../icon/Icon";
import SearchIcon from "@mui/icons-material/Search";
import Animated from "../animated/Animated";
import { motion } from "framer-motion";
import { vSlideIn } from "../../util/variants";

function SearchBar(_, ref) {
  const [value, setValue] = useState("");

  const searchBarInViewRef = useRef(null);
  const setElementRef = (elementNode) =>
    elementNode && (ref.current = elementNode);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
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
        <div>
          <span>Search :</span>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Enter keyword here"
            value={value}
            onChange={handleChange}
          />
          <Icon value={SearchIcon} />
        </div>
      </Animated>
    </div>
  );
}
const SearchBarWithRef = forwardRef(SearchBar);
export default SearchBarWithRef;
