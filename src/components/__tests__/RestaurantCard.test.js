import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json";

it("should render restaurant card component with Data", () => {
  render(<RestaurantCard restaurant={MOCK_DATA.restaurant} />);

  const name = screen.getByText("Theobroma");

  expect(name).toBeInTheDocument();
});
