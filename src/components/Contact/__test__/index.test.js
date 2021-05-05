import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";
afterEach(cleanup);
describe("contact component", () => {
  it("render", () => {
    render(<Contact />);
  });
  it("matches snapshot", () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("match by name", () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId("contacth1")).toHaveTextContent("Contact me");
  });
  it("match button name", () => {
    const { getByTestId } = render(<Contact />);
    expect(getByTestId("contactButton")).toHaveTextContent("Submit");
  });
});
