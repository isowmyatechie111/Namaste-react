import { act, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Body from "../components/Body";
import MOCK_DATA from "../mocks/resListMockData.json";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render the Body Component with search", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
});

it("Should Search Res List for Wo input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const ResListBeforeSearch = screen.getAllByTestId("res-card");
  expect(ResListBeforeSearch.length).toBe(8);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("search-input");
  fireEvent.change(searchInput, { target: { value: "wo" } });
  fireEvent.click(searchBtn);
  const ResListAfterSearch = screen.getAllByTestId("res-card");

  expect(ResListAfterSearch.length).toBe(2);
});

it("Should filter top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const ResListBeforeSearch = screen.getAllByTestId("res-card");
  expect(ResListBeforeSearch.length).toBe(8);

  const topRatedResBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(topRatedResBtn);
  const ResListAfterSearch = screen.getAllByTestId("res-card");
  expect(ResListAfterSearch.length).toBe(2);
});
