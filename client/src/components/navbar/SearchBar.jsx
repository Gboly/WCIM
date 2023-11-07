import { forwardRef, useState } from "react";
import Icon from "../icon/Icon";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar(_, ref) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  return (
    <div ref={ref} className="nav-search-bar">
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
    </div>
  );
}
const SearchBarWithRef = forwardRef(SearchBar);
export default SearchBarWithRef;
