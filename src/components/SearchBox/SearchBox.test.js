import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import SearchBox from "./SearchBox";

afterEach(cleanup);

describe("SearchBox component", () => {
  it("renders SearchBox correctly", () => {
    const { getByTestId } = render(<SearchBox />);
    expect(getByTestId("searchBox")).toBeTruthy();
    expect(getByTestId("searchInput")).toBeTruthy();
    expect(getByTestId("buttonDemo")).toBeTruthy();
  });

  describe("Input value", () => {
    it("updates on change", () => {
      const { getByTestId } = render(<SearchBox />);
      const searchInput = getByTestId("searchInput");
      fireEvent.change(searchInput, { target: { value: "test" } });
      expect(searchInput.value).toBe("test");
    });
  });

  describe("Search button", () => {
    describe("with empty query", () => {
      it("does not trigger requestSearch function", () => {
        const requestSearch = jest.fn();
        const { getByTestId } = render(
          <SearchBox requestSearch={requestSearch} />
        );

        fireEvent.click(getByTestId("buttonDemo"));
        expect(requestSearch).not.toHaveBeenCalled();
      });
    });
    describe("with data inside query", () => {
      it("triggers requestSearch function", () => {
        const requestSearch = jest.fn();
        const { getByTestId } = render(
          <SearchBox requestSearch={requestSearch} />
        );
        const searchInput = getByTestId("searchInput");
        fireEvent.change(searchInput, { target: { value: "test" } });
        fireEvent.click(getByTestId("buttonDemo"));
        expect(requestSearch).toHaveBeenCalled();
      });
    });
  });
});
