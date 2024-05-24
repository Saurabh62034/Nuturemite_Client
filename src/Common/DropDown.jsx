import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userActions } from "../store/store";

const DropDown = () => {
  const { token } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1 bg-yellow-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
        </li>
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
                navigate("/orders");
              }}
            >
              My Orders
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
  );
};

export default DropDown;
