import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Gallery from "..";

const portrait = {
  name: "portraits",
  description: "Portraits of people in my life",
};

afterEach(cleanup);

describe("Gallery component", () => {
  it("renders", () => {
    render(<Gallery currentCatagory={portrait} />);
  });
  it("matches snapshot", () => {
    const { asFragment } = render(<Gallery currentCatagory={portrait} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

// it("header check", () => {
//     const { getByTestId } = render(<Gallery currentCategory={portrait} />);
//     expect(getByTestId("h1tag")).toHaveTextContent("Portraits");
//   });
