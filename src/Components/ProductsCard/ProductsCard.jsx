import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/store";
import { toast } from "sonner";

const ProductsCard = ({ image, title, description, price, id }) => {
  const { token } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  return (
    <div className="card w-full h-full bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="h-60 mix-blend-multiply object-contain w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title.slice(0, 25)}
          <div className="badge badge-accent">NEW</div>
        </h2>
        <p>{description.slice(0, 100)}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
        <div className="card-actions justify-center md:justify-end pt-5">
          {token && (
            <button
              className="btn btn-neutral"
              onClick={() => {
                dispatch(
                  cartActions.AddToCart([
                    {
                      id,
                      image,
                      title,
                      description,
                      price,
                      quantity: 1,
                    },
                  ])
                );
                toast.success("Added Successfully");
              }}
            >
              Buy Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
