const { render, act, screen, fireEvent } = require("@testing-library/react");
import MOCK_DATA from "../mocks/mockResList.json";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should find the search bar in our body", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchInput = screen.getByPlaceholderText("Search restaurants/food");

  fireEvent.change(searchInput, { target: { value: "Burger" } });

  const cards = screen.getAllByTestId("resCard");

  //   expect(search).toBeInTheDocument();
  expect(cards.length).toBe(4);
});
