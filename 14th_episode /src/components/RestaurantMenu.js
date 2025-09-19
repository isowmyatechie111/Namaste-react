import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showItems, setShowItems] = useState(null);

  const menuData = useRestaurantMenu(resId);
  if (menuData.length === 0) return <Shimmer />;

  const { id, name, cuisines, costForTwoMessage } =
    menuData?.data?.cards[2]?.card.card?.info;

  const itemsCategoryList =
    menuData?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const itemCategory = itemsCategoryList?.filter(
    (category) =>
      category?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="m-5 text-center">
      <h1 className="font-bold mb-2 text-2xl"> {name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {itemCategory.map((item, index) => {
        return (
          // Controlled components
          <RestaurantCategory
            item={item}
            key={item?.card?.card?.categoryId}
            showItems={showItems === index ? true : false}
            handleShowItems={() => {
              if (showItems === index) return setShowItems(null);
              setShowItems(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
