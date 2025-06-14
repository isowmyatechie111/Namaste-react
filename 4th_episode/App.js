import React from "react";
import ReactDOM from "react-dom/client";

/**
 * // Header
 * -- Logo
 * -- Nav component
 *
 * //Body
 * --Search
 * --RestaurantContainer
 *  ====>restaurantCard
 *      --Img
 *      -- Name of Res, Star Rating,cuisine, delivery time
 *
 * //Footer
 * --copyright
 * --nav links
 */

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        className="logo"
        src="
      https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSrM5InRJkHuGm3QE1FdSxga01FCQFBYnjzA&s"
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About US</li>
        <li>Contact US</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

// const styleCard = {
//   backgroundColor: "#f0f0f0",
// };
const RestaurantCard = ({ resData }) => {
  const { resName, cusines, rating, costForTwo, delTime } = resData;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img className="res-logo" alt="res-logo" src={resData.imgSrc} />
      <h3>{resName}</h3>
      <h4>{cusines.join(", ")}</h4>
      <h4>{rating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{delTime} mins</h4>
    </div>
  );
};

const resList = [
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
  {
    key: "yuiomnbvxcvbnm,",
    resName: "Subway",
    cusines: ["Sandwich", "Salards", "Wraps", "Healthy Food"],
    rating: 4.3,
    costForTwo: 35000,
    delTime: 20,
    imgSrc:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/ba753e6a-9137-47ec-8525-d6c3ff8f6c48_37067.jpg",
  },
  {
    key: "bvnhjhjkklhjhgftdwi",
    resName: "Chaaos chai",
    cusines: ["Bakery", "Beverages", "Chaat", "Home Food"],
    rating: 4.6,
    costForTwo: 25000,
    delTime: 35,
    imgSrc:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/f92c604d-68cb-49db-8dec-9473650c363d_454403.JPG",
  },
  {
    key: "bvbmnpoyiturf",
    resName: "Cafe Cofee Day",
    cusines: ["Beverages", "Cafe", "Snacks", "Desserts"],
    rating: 4.4,
    costForTwo: 40000,
    delTime: 55,
    imgSrc:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/19/0852dfa0-855b-4fa2-88e7-b583bf001bb7_19145.JPG",
  },
];
const Body = () => (
  <div className="body">
    <div className="search">Search</div>
    <div className="res-container">
      {resList.map((resData, i) => (
        <RestaurantCard key={resData.key} resData={resData} />
      ))}
    </div>
  </div>
);
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout />);
