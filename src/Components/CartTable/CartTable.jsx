import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/store";
import { toast } from "sonner";
import { UpdateCartFunction } from "../../functions";

const CartTable = () => {
  const { cartProducts, isFetching, isError } = useSelector(
    (state) => state.cartReducer
  );
  const { token } = useSelector((state) => {
    return state.userReducer;
  });
  useEffect(() => {
    UpdateCartFunction({ cartProducts })
      .then((res) => {})
      .catch();
  }, [cartProducts]);
  const dispatch = useDispatch();
  if (cartProducts.length <= 0) {
    return (
      <div className="lg:pb-20 py-5 text-center">
        <p>No Products Found</p>
      </div>
    );
  }
  return (
    <div className="overflow-x-auto ">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Product</th>
            <th>Price(₹)</th>
            <th>Quantity</th>
            <th>Total Price(₹)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {cartProducts.length > 0
            ? cartProducts.map((e) => {
                return (
                  <tr>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={e.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">
                            {e.title.slice(0, 50)}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{e.price}</td>
                    <td>
                      <div>
                        <div className="join">
                          <p>1</p>
                        </div>
                      </div>
                    </td>
                    <td>{Math.round(e.price * 10)}</td>
                    <th>
                      <button
                        className="btn btn-ghost btn-xs"
                        onClick={() => {
                          dispatch(cartActions.RemoveFromCart({ id: e.id }));
                          toast.success("removed successfully");
                        }}
                      >
                        Remove
                      </button>
                    </th>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
