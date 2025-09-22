import { IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addCart } from "../utils/cartSlice";

const Items = ({ item, lastItem }) => {
  const { info } = item?.card || "";
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addCart(item));
  };

  return (
    <div
      className={`text-left m-8 p-4  ${
        !lastItem && "border-b-cyan-50 border-b-8"
      } flex justify-between`}
      data-testid="items-list"
    >
      <div className="w-9/12">
        <div>{info?.name}</div>
        <div> ₹ {info?.price / 100 || info?.defaultPrice / 100}</div>

        <div className="my-2">
          {info?.ratings?.aggregatedRating?.rating && (
            <>
              <span className="text-green-600 text-l">
                ⭐️ {info?.ratings?.aggregatedRating?.rating}
              </span>
              <span className="text-gray-900 text-xs">
                {" ("}
                {info?.ratings?.aggregatedRating?.ratingCount}
                {")"}
              </span>
            </>
          )}
        </div>
        <div className="text-xs truncate w-100 my-4 overflow-x-hidden">
          {info?.description}
        </div>
      </div>
      <div className="w-3/12">
        <img src={`${IMG_URL}/${info?.imageId}`} alt="food image" />
        <button
          className=" text-green-600 bg-white rounded-lg border px-2 relative bottom-1"
          onClick={() => handleAddItems(item)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Items;
