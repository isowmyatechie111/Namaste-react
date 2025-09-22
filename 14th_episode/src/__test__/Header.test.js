import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/Header";
import appStore from "../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe("Header page test case", () => {
  it("Should load Header Component with a login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });

  it("Should the cart items to be 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByText(/Cart/)).toBeInTheDocument();
  });

  it("Should change to Logout on click login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const btn = screen.getByRole("button", { name: "Login" });
    fireEvent.click(btn);
    expect(screen.getByRole("button", { name: "Logout" })).toBeInTheDocument();
  });

  it("Should change to login on click logout button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const login = screen.getByRole("button", { name: "Login" });
    fireEvent.click(login);
    const logout = screen.getByRole("button", { name: "Logout" });
    fireEvent.click(logout);
    expect(login).toBeInTheDocument();
  });
});
