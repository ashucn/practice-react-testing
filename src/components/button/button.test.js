import React from "react";
import ReactDOM from "react-dom";
import Button from "./button";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// import renderer from "react-test-renderer";

afterEach(cleanup);
//
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Button />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders button correctly", () => {
  const { getByTestId } = render(<Button label="click me please" />);
  expect(getByTestId("buttonDemo")).toHaveTextContent("click me please");
});

it("renders button ", () => {
  const { getByTestId } = render(<Button label="save" />);
  expect(getByTestId("buttonDemo")).toHaveTextContent("save");
});

// we don't use snapshot testing, it's just for code change review.
// it("matches snapshot", () => {
//   const tree = renderer.create(<Button label="save" />).toJSON();
//   expect(tree).toMatchSnapshot(); // yarn test -- --coverage --updateSnapshot
// });
