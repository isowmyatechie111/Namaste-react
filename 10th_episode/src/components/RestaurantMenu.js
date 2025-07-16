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
    <div className="m-5">
      <h1 className="font-bold mb-2"> {name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2 className="my-3 font-bold">Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id} className="pb-3">
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
