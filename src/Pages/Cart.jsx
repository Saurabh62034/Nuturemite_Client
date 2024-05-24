import { useDispatch, useSelector } from "react-redux";
import CartTable from "../Components/CartTable/CartTable";
import { updateOrdersFunction } from "../functions";
import { toast } from "sonner";
import { cartActions } from "../store/store";
import Error from "./Error";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { token } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state) => state.cartReducer);
  const navigate = useNavigate();
  if (!token) {
    return <Error />;
  }
  return (
    <div className="flex flex-col  gap-10 py-10">
      <div className=" bg-[#ece3ca] rounded-2xl shadow-xl max-sm:mt-44 max-sm:mx-2 lg:px-20 lg:pt-10  md:mx-20 md:mt-40">
        <CartTable />
      </div>
      <div className="flex justify-center">
        <button
          className="active:shadow-sm shadow-xl bg-neutral text-white px-16 py-2 rounded-md"
          onClick={async () => {
            await updateOrdersFunction({ token, cartProducts });
            toast("Successfully Placed Order");
            dispatch(cartActions.clearCart());
            navigate("/orders");
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
