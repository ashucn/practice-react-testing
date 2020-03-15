import React, { useState, useEffect } from "react";
import Button from "../button/button";

export const SearchBox = ({ requestSearch }) => {
  const [query, setQuery] = useState("");
  const searchClick = () => {
    if (query) {
      requestSearch(query);
    }
  };

  const updateQuery = e => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    console.log(query);
  }, [query]);

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

      <Button label="search" onclick={searchClick} />
    </div>
  );
};

export default SearchBox;
