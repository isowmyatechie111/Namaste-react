import { IMG_URL } from "../utils/constants";

export { IMG_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;
  return (
    <div
      className="bg-gray-100 w-[280px] ml-3 p-5 rounded-2xl hover:bg-gray-300"
      // style={{
      //   backgroundColor: "#f0f0f0",
      // }}
    >
      <img
        className="rounded-md pb-5"
        alt="res-logo"
        src={`${IMG_URL}/${cloudinaryImageId}`}
      />
      <h3 className="text-2xl font-bold">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
