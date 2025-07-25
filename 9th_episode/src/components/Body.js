import { useState, useEffect } from "react";
import { Link } from "react-router";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  //Local state variable -super powerful variable
  const [listofRestaurants, setListOfRestaurants] = useState([]);
  const [fullListOfRestaurants, setFullListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
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

  if (!onlineStatus)
    return (
      <div>
        Looks like you're offline <h3>Please check your interne connection!</h3>
      </div>
    );

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
          <Link
            key={resData?.info?.id}
            to={"/restaurantmenu/" + resData?.info?.id}
          >
            <RestaurantCard resData={resData} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
