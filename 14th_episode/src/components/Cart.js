import { useDispatch, useSelector } from "react-redux";
import Items from "./Items";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="m-auto w-6/12">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1>Card is empty. Add Items to the cart.</h1>
        )}
        {cartItems.map((item) => (
          <Items item={item} key={item?.card?.info?.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
