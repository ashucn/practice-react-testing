import React, { useState } from "react";

export const SearchBox = ({ requestSearch }) => {
  const [query, setQuery] = useState("");
  const searchClick = () => {
    console.log("query", query);
    if (query) {
      requestSearch(query);
    }
  };

  const updateQuery = e => {
    setQuery(e.target.value);
  };

  return (
    <div data-testid="searchBox">
      <input
        type="text"
        name="search"
        placeholder="Search"
        value={query}
        onChange={updateQuery}
        data-testid="searchInput"
      />
      <button
        data-testid="buttonDemo"
        className="button-style"
        onClick={searchClick}
      >
        submit
      </button>
    </div>
  );
};

export default SearchBox;
