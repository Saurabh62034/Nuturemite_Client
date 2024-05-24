import React, { useEffect, useState } from "react";
import OrderTable from "../Components/OrderTable/OrderTable";
import { getOrders } from "../functions";
import { useSelector } from "react-redux";
import Error from "./Error";
import Loader from "../Common/Loader";

function MyOrder() {
  const { token } = useSelector((state) => state.userReducer);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getOrders({ token })
      .then((res) => {
        setProducts(res.data.ordersData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen min-w-screen flex justify-center items-center ">
        <Loader />
      </div>
    );
  }

  if (!token) {
    return <Error />;
  }
  return (
    <div className="py-10">
      {products.length > 0
        ? products.map((e) => {
            return (
              <div className="flex flex-col  gap-10 ">
                <div className=" bg-[#ece3ca]  rounded-2xl shadow-xl max-sm:px-5 max-sm:py-5 md:mx-20 md:mt-40 max-sm:mt-44 max-sm:mx-2 md:px-10 md:py-10">
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-60  py-8 max-sm:grid-cols-1 max-sm:gap-10 md:gap-5">
                    <div>
                      <h1 className="text-2xl font-medium  max-lg:text-xl">
                        Order ID:
                      </h1>
                      <p>{e._id}</p>
                    </div>
                    <div>
                      <h1 className="text-2xl  font-medium max-lg:text-xl h-">
                        Payment ID:
                      </h1>
                      <p>6241041055</p>
                    </div>
                    <div>
                      <h1 className="text-2xl  font-medium ">Total Price:</h1>
                      <p>$56.00</p>
                    </div>
                  </div>
                  <div className="py-10">
                    <OrderTable products={e.products} />
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default MyOrder;
