import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact Us page Test case", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  it("Should load contact us component", () => {
    render(<Contact />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  it("Should load button inside the contact component", () => {
    render(<Contact />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("Should load input name inside the contact component", () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText("message")).toBeInTheDocument();
  });

  it("Should load 2 input boxes on the Contact component", () => {
    render(<Contact />);

    expect(screen.getAllByRole("textbox").length).toBe(2);
  });
});
