import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Shimmer from "./components/Shimmer";
import { RESTAURANT_API_URL } from "./utils/constants";

const RestaurantMenu = () => {
  const [menudata, setMenuData] = useState([]);

  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API_URL + resId);
    const json = await data.json();
    setMenuData(json);
    console.log(
      json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
        ?.card?.card
    );
  };

  if (menudata.length === 0) return <Shimmer />;
  const { id, name, cuisines, costForTwoMessage } =
    menudata?.data?.cards[2]?.card.card?.info;
  const { itemCards } =
    menudata?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
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
