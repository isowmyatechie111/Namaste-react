import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menuData = useRestaurantMenu(resId);

  if (menuData.length === 0) return <Shimmer />;

  const { id, name, cuisines, costForTwoMessage } =
    menuData?.data?.cards[2]?.card.card?.info;
  const { itemCards } =
    menuData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
      ?.card?.card;
  return (
    <div className="menu">
      <h1> {name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu </h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs{" "}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
