import React from "react";
import "./SearchSection.css";

const SearchSection = (props) => {
  return (
    <div className="search-bar">
      <span>Search</span>
      <input
        className="search-input"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Type to search..."
      ></input>
    </div>
  );
};

export default SearchSection;
