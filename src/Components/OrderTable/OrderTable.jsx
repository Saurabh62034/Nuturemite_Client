import React from "react";
import { useSelector } from "react-redux";

const OrderTable = ({ products }) => {
  return (
    <div className="overflow-x-auto ">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th className="text-lg">Product</th>
            <th className="text-lg">Price(₹)</th>
            <th className=" text-lg">Quantity</th>
            <th className="text-lg">Total Price(₹)</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {products.length > 0
            ? products.map((e) => {
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
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
