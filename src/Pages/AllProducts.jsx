import SideBar from "../Components/SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import ProductsCardSkeleton from "../Skeleton/ProductsCardSkeleton";
import { toast } from "sonner";
import { cartActions } from "../store/store";

const AllProducts = () => {
  const { token } = useSelector((state) => state.userReducer);
  const { searchProducts, isFetching, isError } = useSelector(
    (state) => state.productsReducer
  );
  const dispatch = useDispatch();

  if (isFetching) {
    return (
      <div className="md:px-20 px-4 pt-40 max-sm:pt-44 pb-10">
        <ProductsCardSkeleton />;
      </div>
    );
  }

  return (
    <div className="">
      <div className="flex flex-col gap-4 px-8 md:px-16 py-24 max-sm:pt-44 ">
        <div className="self-end">
          <SideBar />
        </div>
        <div
          data-aos="zoom-out-up"
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10"
        >
          {searchProducts.length > 0 ? (
            searchProducts.map((e, index) => {
              return (
                <div key={index} className="hover:shadow-2xl rounded-2xl">
                  <div className="card w-full h-full bg-[#ece3ca]">
                    <figure>
                      <img
                        src={e.image}
                        alt="car!"
                        className="h-60 w-full object-contain mix-blend-multiply"
                      />
                    </figure>
                    <div className="card-body">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <h2 className="card-title">{e.title.slice(0, 50)}</h2>
                        <h2 className="card-title max-sm:self-end">
                          ${e.price}
                        </h2>
                      </div>
                      <p>{e.description.slice(0, 100)}</p>
                      {token && <div className="card-actions justify-end">
                        <button
                          className="btn btn-neutral"
                          onClick={() => {
                            dispatch(
                              cartActions.AddToCart([
                                {
                                  id: e.id,
                                  image: e.image,
                                  title: e.title,
                                  description: e.description,
                                  price: e.price,
                                  quantity: 1,
                                },
                              ])
                            );
                            toast.success("Successfully added");
                          }}
                        >
                          Add to cart
                        </button>
                      </div>}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <p>No Products found!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
