import React from "react";
import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchBox from "./SearchBox";

afterEach(cleanup);

describe("SearchBox component", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<SearchBox />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders SearchBox correctly", () => {
    const { getByTestId } = render(<SearchBox />);
    expect(getByTestId("searchBox")).toBeTruthy();
    expect(getByTestId("searchInput")).toBeTruthy();
    expect(getByTestId("buttonDemo")).toBeTruthy();
  });
});
