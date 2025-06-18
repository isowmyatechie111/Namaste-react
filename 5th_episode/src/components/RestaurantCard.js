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

export default RestaurantCard;
