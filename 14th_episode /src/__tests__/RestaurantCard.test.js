import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard, {
  WithPromotedLabel,
} from "../components/RestaurantCard";
import data from "../mocks/restaurantMock.json";

it("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={data} />);
  expect(screen.getByText("Theobroma")).toBeInTheDocument();
});

it("Should render RestaurantCard Component with Promoted Label", () => {
  const RestaurantPromotion = WithPromotedLabel(RestaurantCard);
  render(<RestaurantPromotion resData={data} />);
  expect(screen.getByText("Promoted")).toBeInTheDocument();
});
