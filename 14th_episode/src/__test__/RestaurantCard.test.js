import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard, {
  WithPromotedLabel,
} from "../components/RestaurantCard";
import DATA from "../mockData/restaurantCardMock.json";
import PROMOTED_DATA from "../mockData/restCardPromoted.json";

describe("RestaurantCard Test cases", () => {
  it("Should load the Restaurant card component", () => {
    render(<RestaurantCard resData={DATA} />);
    expect(screen.getByText("Domino's Pizza")).toBeInTheDocument();
  });
  it("Should render Rest_Card with Promoted label", () => {
    const PromotedCard = WithPromotedLabel(RestaurantCard);
    render(<PromotedCard resData={PROMOTED_DATA} />);
    expect(screen.getByText("Promoted")).toBeInTheDocument();
  });
});
