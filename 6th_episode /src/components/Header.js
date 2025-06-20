// const styleCard = {
//   backgroundColor: "#f0f0f0",
// };

import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("header");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact US</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() =>
              btnName === "login" ? setBtnName("logout") : setBtnName("login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
