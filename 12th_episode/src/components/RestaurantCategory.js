import { useState } from "react";
import Items from "./Items";

const RestaurantCategory = ({ item, showItems, handleShowItems }) => {
  const { card } = item?.card;

  return (
    <div className=" m-2">
      <div className="w-6/12 mx-auto ">
        <div
          className="flex py-4 justify-between border-t-8 border-b-gray-50 border-b-8 border-t-gray-50 cursor-pointer"
          onClick={() => handleShowItems()}
        >
          <div className="font-bold text-2xl ">
            {card?.title} ({card?.itemCards?.length})
          </div>
          <div> ⬇️ </div>
        </div>
        {showItems &&
          card?.itemCards?.map((item, index) => (
            <Items
              item={item}
              lastItem={index === card?.itemCards?.length - 1 ? true : false}
              key={item?.card?.info?.id}
            />
          ))}
      </div>
    </div>
  );
};

export default RestaurantCategory;
