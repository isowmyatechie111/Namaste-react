import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
const Body = () => {
  //Local state variable -super powerful variable
  const [listofRestaurants, setListOfRestaurants] = useState([]);
  const [fullListOfRestaurants, setFullListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log("Body rerenderes");
  useEffect(() => {
    console.log("useeffect");
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0843&lng=80.2705"
    );
    const resData = await res.json();
    setListOfRestaurants(
      resData?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFullListOfRestaurants(
      resData?.data?.cards[4]?.card.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  //conditional rendering
  return listofRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const searchList = fullListOfRestaurants.filter((resdata) => {
                console.log(resdata);

                return resdata?.info.name
                  ?.toLowerCase()
                  ?.includes(searchText?.toLowerCase());
              });
              console.log(searchList);
              setListOfRestaurants(searchList);
            }}
          >
            Search
          </button>
        </div>
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
        {listofRestaurants?.map((resData, i) => (
          <RestaurantCard resData={resData} key={resData?.info?.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
