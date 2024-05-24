import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Images/logo1.png";
import { useDispatch, useSelector } from "react-redux";
import { productsActions, userActions } from "../store/store";

const PageNavbar = () => {
  const { token } = useSelector((state) => state.userReducer);
  const { cartProducts } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const changeHandler = (e) => {
    navigate("/products");
    setInput(e.target.value);
  };
  useEffect(() => {
    dispatch(productsActions.searchProducts({ query: input }));
  }, [input]);
  return (
    <div className="max-sm:flex max-sm:flex-col max-sm:gap-4 navbar w-screen bg-transparent backdrop-blur-lg fixed z-50 px-4 md:px-16 py-4 ">
      <div className="flex-1 max-sm:self-start">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="text-xl font-bold italic max-sm:hidden"
        >
          <p className="btn btn-ghost text-xl">Shop-Topia</p>
        </button>
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="Search"
          autoFocus
          value={input}
          onChange={changeHandler}
          className="input input-bordered w-24 md:w-auto max-sm:w-full"
        />
      </div>
      <div className="flex-none max-sm:self-end">
        {token && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cartProducts.length}
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3  z-[1] h-32 card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">
                  {cartProducts.length} Items
                </span>
                <div className="card-actions">
                  <button
                    className="btn btn-primary text-white btn-block"
                    onClick={() => {
                      navigate("/cart");
                    }}
                  >
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {token && (
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
            )}
            <li>
              <button
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </button>
            </li>
            {token && (
              <li>
                <button
                  onClick={() => {
                    navigate("/orders");
                  }}
                >
                  My Orders
                </button>
              </li>
            )}
            <li>
              <button
                onClick={() => {
                  navigate("/products");
                }}
              >
                Products
              </button>
            </li>
            {/* <li>
          <button>About</button>
        </li> */}
            {token && (
              <li>
                <button
                  onClick={() => {
                    navigate("/cart");
                  }}
                >
                  Cart
                </button>
              </li>
            )}
            {token && (
              <li>
                <button
                  onClick={() => {
                    dispatch(userActions.logout());
                    navigate("/");
                    window.location.reload();
                  }}
                >
                  Logout
                </button>
              </li>
            )}
            {!token && (
              <li>
                <button
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </button>
              </li>
            )}
            {!token && (
              <li>
                <button
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Signup
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PageNavbar;
