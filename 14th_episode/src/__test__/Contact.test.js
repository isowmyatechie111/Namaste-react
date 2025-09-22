import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../components/Contact";

describe("Contact Us page Test case", () => {
  // beforeAll(() => {
  //   console.log("before All");
  // });

  // beforeEach(() => {
  //   console.log("before Each");
  // });

  // afterAll(() => {
  //   console.log("after all");
  // });

  // afterEach(() => {
  //   console.log("after each");
  // });

  it("Should load contact us component", () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText("name")).toBeInTheDocument();
  });

  it("Should load heading in Contact us page", () => {
    render(<Contact />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });

  describe("For input boxes and submit button", () => {
    it("should load button inside contact component", () => {
      render(<Contact />);
      expect(
        screen.getByRole("button", { name: "Submit" })
      ).toBeInTheDocument();
    });

    it("Should load two input boxes in contact us page", () => {
      render(<Contact />);
      expect(screen.getAllByRole("textbox").length).toBe(2);
    });
  });
});
