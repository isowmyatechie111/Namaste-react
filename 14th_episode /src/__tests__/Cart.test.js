import { render, act, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import appStore from "../utils/appStore";
import RestaurantMenu from "../components/RestaurantMenu";
import Header from "../components/Header";
import Cart from "../components/Cart";
import MOCK_DATA from "../mocks/restaurantMenuMock.json";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should load Restauarant menu card", async () => {
  await act(async () => render(<RestaurantMenu />));
  expect(screen.getByText(/Rolls/)).toBeInTheDocument();
});

it("Should open the restaurant list on click the accordion Header", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );

  fireEvent.click(screen.getByText(/Rolls/));
  const itemsList = screen.getAllByTestId("itemsList");
  expect(itemsList.length).toBe(15);
});

it("Should load header with 0 items in the cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );
  fireEvent.click(screen.getByText(/Rolls/));
  expect(screen.getByText("Cart -0")).toBeInTheDocument();
});

it("should add 1 item in the cart, on click the add button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  fireEvent.click(screen.getByText(/Rolls/));
  expect(screen.getByText("Cart -0")).toBeInTheDocument();
  const addBtns = screen.getAllByRole("button", { name: "Add" });
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart -1")).toBeInTheDocument();
});

it("Should display the items list in the cart page", async () => {
  await act(async () =>
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
  fireEvent.click(screen.getByText(/Rolls/));
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

  const addBtns = screen.getAllByRole("button", { name: "Add" });
  fireEvent.click(addBtns[8]);
  fireEvent.click(addBtns[4]);
  expect(screen.getAllByTestId("itemsList").length).toBe(17);
});

it("Should clear the cart with 0 items", async () => {
  await act(async () =>
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
  fireEvent.click(screen.getByText(/Rolls/));

  const addBtns = screen.getAllByRole("button", { name: "Add" });
  fireEvent.click(addBtns[1]);
  fireEvent.click(addBtns[2]);
  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(
    screen.getByText("Card is empty. Add Items to the cart.")
  ).toBeInTheDocument();
});

it("Should add 2 items in the cart, on click 2 different items", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );
  fireEvent.click(screen.getByText(/Rolls/));

  const addBtns = screen.getAllByRole("button", { name: "Add" });
  expect(screen.getByText("Cart -0")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  fireEvent.click(addBtns[2]);
  expect(screen.getByText("Cart -2")).toBeInTheDocument();
});
it("Should not display the border class-Name for the last item", async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>
    )
  );

  fireEvent.click(screen.getByText(/Double Down Burger/));
  const allItems = screen.getAllByTestId("itemsList");
  expect(allItems[allItems.length - 1]).not.toHaveClass("border-b-cyan-50");
});
