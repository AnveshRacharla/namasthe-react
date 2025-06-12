import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

describe("To test header", () => {
  beforeEach(() => {
    console.log("Before Each");
  });
  beforeAll(() => {
    console.log("Before Each");
  });
  afterEach(() => {
    console.log("Before Each");
  });
  afterEach(() => {
    console.log("Before Each");
  });

  it("should test cart icon in header component", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartButton = screen.getByText(/🛒/);

    expect(cartButton).toBeInTheDocument();
  });

  it("should test header for login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    expect(loginButton).toBeInTheDocument();
  });

  it("should test login button whether it changes", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
  });
});
