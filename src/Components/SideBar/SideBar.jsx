import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { productsActions } from "../../store/store";

const SideBar = () => {
  const dispatch = useDispatch();
  const [priceFilter, setPriceFilter] = useState("");
  const changeHandler = (e) => {
    setPriceFilter(e.target.value);
  };
  useEffect(() => {
    dispatch(productsActions.filterByPrice({ query: priceFilter }));
  }, [priceFilter]);
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button btn btn-neutral">
          Filter
        </label>
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="max-sm:w-1/2 menu p-4 w-80 min-h-full bg-base-200 text-base-content gap-5">
          {/* Sidebar content here */}
          <li>
            <a></a>
          </li>
          <li>
            <select
              value={priceFilter}
              onChange={changeHandler}
              className="select select-bordered w-full max-w-xs rounded-sm"
            >
              <option className="" value="" disabled selected>
                Filter price
              </option>
              <option value="lowTohigh">Low to High</option>
              <option value="highTolow">High to Low</option>
            </select>
          </li>
          <li>
            <select className="select select-bordered w-full max-w-xs rounded-sm">
              <option disabled selected>
                Select Catagory
              </option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
