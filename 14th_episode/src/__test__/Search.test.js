import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import MOCK_DATA from "../mockData/allRestaurantCards.json";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should load the body component with initial data of length 8", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  expect(screen.getAllByTestId("res-card").length).toBe(8);
});

it("Should load the body component with search input", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  expect(screen.getByTestId("search-input")).toBeInTheDocument();
});

it("Should search the 'wo' in the input box", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  fireEvent.change(screen.getByTestId("search-input"), {
    target: { value: "wo" },
  });
  fireEvent.click(screen.getByRole("button", { name: "Search" }));
  expect(screen.getAllByTestId("res-card").length).toBe(2);
});
it("should search the top restaurants", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  fireEvent.click(
    screen.getByRole("button", { name: "Top Rated Restaurants" })
  );
  expect(screen.getAllByTestId("res-card").length).toBe(1);
});
