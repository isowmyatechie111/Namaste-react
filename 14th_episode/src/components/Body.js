import { useState, useEffect, useContext } from "react";
import { Link } from "react-router";
import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  //Local state variable -super powerful variable
  const [listofRestaurants, setListOfRestaurants] = useState([]);
  const [fullListOfRestaurants, setFullListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const RestaurantPromotion = WithPromotedLabel(RestaurantCard);

  const { setUserName, logginUser } = useContext(UserContext);
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
    <div className="">
      <div className="flex mb-4">
        <input
          type="text"
          className="border border-black mx-2 w-48 pl-3"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          data-testid="search-input"
        />
        <button
          className="mr-5 w-24 btn bg-sky-500 hover:bg-sky-500 rounded-md text-white cursor-pointer"
          onClick={() => {
            const searchList = fullListOfRestaurants.filter((resdata) => {
              return resdata?.info.name
                ?.toLowerCase()
                ?.includes(searchText?.toLowerCase());
            });
            setListOfRestaurants(searchList);
          }}
        >
          Search
        </button>

        <button
          className="mr-5 btn bg-sky-500 hover:bg-sky-500 rounded-md text-white cursor-pointer p-2"
          onClick={() => {
            //filter logic
            const res = listofRestaurants.filter(
              (resData) => resData?.info?.avgRating > 4.3
            );
            setListOfRestaurants(res);
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="mr-5">
          <label>User Name:</label>
          <input
            className="border p-2 m-2"
            value={logginUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex gap-5 flex-wrap">
        {listofRestaurants?.map((resData, i) => (
          <Link
            key={resData?.info?.id}
            to={"/restaurantmenu/" + resData?.info?.id}
          >
            {resData?.info?.veg ? (
              <RestaurantPromotion resData={resData} />
            ) : (
              <RestaurantCard resData={resData} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
