// const styleCard = {
//   backgroundColor: "#f0f0f0",
// };

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { logginUser } = useContext(UserContext);
  useEffect(() => {
    console.log("Header re-renders");
  }, [btnName]);

  return (
    <div className="flex justify-between  lg:bg-green-400 mb-2  md:bg-amber-500 sm:bg-pink-200 max-sm:bg-blue-200">
      <div>
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex gap-5">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About US</Link>
          </li>
          <li>
            <Link to="/contact">Contact US</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="mr-5 w-24 btn bg-sky-500 hover:bg-sky-500 rounded-md text-white cursor-pointer"
            onClick={() =>
              btnName === "login" ? setBtnName("logout") : setBtnName("login")
            }
          >
            {btnName}
          </button>
          <li className="font-bold text-2xl">{logginUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
