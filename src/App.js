import React from "react";
import "./styles.css";
import SearchBox from "./components/SearchBox/SearchBox";

export default function App() {
  const requestSearch = query => {
    console.log("app", query);
  };

  return (
    <div className="App">
      <div className="app-header">
        <SearchBox requestSearch={requestSearch} />
      </div>
    </div>
  );
}
