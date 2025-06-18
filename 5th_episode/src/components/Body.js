import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";
const Body = () => {
  //Local state variable -super powerful variable
  const [listofRestaurants, setListOfRestaurants] = useState(resList);

  // Normal JS variable
  const list = [
    {
      key: "uyiydweqwnc",
      resName: "The Biriyani Life",
      cusines: ["Biriyani", "Mughali", "Lucknow", "Hyderabadi"],
      rating: 3.8,
      costForTwo: 25000,
      delTime: 45,
      imgSrc:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/15/64a1da6d-3c5e-49fc-b8ee-93fc9f90f9b1_235295.jpg",
    },
    {
      key: "rtwqduq7892",
      resName: "Sangeetha's Desi mane",
      cusines: ["South Indian", "Chettinad", "North Indian", "Snacks"],
      rating: 4.7,
      costForTwo: 30000,
      delTime: 25,
      imgSrc:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/16/0bb71854-7bd8-4b46-b06c-b3f7f87e373a_840601.jpg",
    },
    {
      key: "sdjhbvwfhjy",
      resName: "Theborama",
      cusines: ["Cakes", "pastries", "Indian"],
      rating: 4.6,
      costForTwo: 40000,
      delTime: 30,
      imgSrc:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/11/662a8375-2c46-47ce-8556-b49225508b60_623723.jpg",
    },
    {
      key: "tyuiounknb",
      resName: "KFC",
      cusines: ["Burger", "fries", "fried", "chicken"],
      rating: 4.1,
      costForTwo: 60000,
      delTime: 40,
      imgSrc:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/b0fe2862-f2b2-4d29-998d-1fdb5cfbbf6d_708880.JPG",
    },
  ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("btn clicked");
            //filter logic
            const res = listofRestaurants.filter(
              (resData) => resData.rating > 4.5
            );
            setListOfRestaurants(res);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((resData, i) => (
          <RestaurantCard key={resData.key} resData={resData} />
        ))}
      </div>
    </div>
  );
};

export default Body;
