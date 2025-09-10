import { useEffect, useState } from "react";
import { RESTAURANT_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(RESTAURANT_API_URL + resId);
      const data = await res.json();
      setResInfo(data);
    };
    fetchData();
  }, []);

  return resInfo;
};

export default useRestaurantMenu;
