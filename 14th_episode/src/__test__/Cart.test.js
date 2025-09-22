import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import appStore from "../utils/appStore";
import RestaurantMenu from "../components/RestaurantMenu";
import Header from "../components/Header";
import Cart from "../components/Cart";
import MOCKDATA from "../mockData/menuData.json";
import { Provider } from "react-redux";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCKDATA),
  })
);

it("Should load all the restaurant category items", async () => {
  await act(() => render(<RestaurantMenu />));
  expect(screen.getAllByTestId("restaurant-category").length).toBe(10);
});

it("Should expand the list of items on click the accordion", async () => {
  await act(() =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );
  fireEvent.click(screen.getByText("Veg Pizza (16)"));

  expect(screen.getAllByTestId("items-list").length).toBe(16);
});

it("Should display the cart items to be Cart -0 in the header", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );
  fireEvent.click(screen.getByText("Veg Pizza (16)"));

  expect(screen.getByText("Cart -0")).toBeInTheDocument();
});

it("Should update the cart items  as 1 in the header on click Add", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );
  fireEvent.click(screen.getByText("Veg Pizza (16)"));
  fireEvent.click(screen.getAllByRole("button", { name: "Add" })[1]);
  expect(screen.getByText("Cart -1")).toBeInTheDocument();
});

it("Should display the cart items in the cart page on click cart link", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  fireEvent.click(screen.getByText("Non Veg Pizza (14)"));
  fireEvent.click(screen.getAllByRole("button", { name: "Add" })[3]);
  fireEvent.click(screen.getByText("Cart -2"));
  fireEvent.click(screen.getByText("Non Veg Pizza (14)"));
  expect(screen.getAllByTestId("items-list").length).toBe(2);
});

it("Should clear the cart on click the Clear Cart", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  fireEvent.click(screen.getByText("Cart -2"));
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(
    screen.getByText("Card is empty. Add Items to the cart.")
  ).toBeInTheDocument();
});

it("Should update the cart items as 2 in the header on click Add", async () => {
  await act(() =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );
  fireEvent.click(screen.getByText("Veg Pizza (16)"));
  fireEvent.click(screen.getAllByRole("button", { name: "Add" })[1]);
  fireEvent.click(screen.getAllByRole("button", { name: "Add" })[2]);
  fireEvent.click(screen.getByText("Veg Pizza (16)"));
  expect(screen.getByText("Cart -2")).toBeInTheDocument();
});
