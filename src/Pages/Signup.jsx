import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignupFunction } from "../functions";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/store";
import Loader from "../Common/Loader";

function Signup() {
  const { isFetching } = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(userActions.fetchUserStart());
      const res = await SignupFunction({ email, username, password });
      console.log(res);
      dispatch(
        userActions.fetchUserSuccess({
          token: res.data.token,
          isAdmin: res.data.data.isAdmin,
        })
      );
      navigate("/");
    } catch (err) {
      dispatch(userActions.fetchUserFail());
      console.log(err);
    }
  };

  if (isFetching) {
    return (
      <div className="min-h-screen min-w-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <div className="">
        <div className="flex flex-row justify-between  mt-16 md:mt-32 border-x-4 h-[450px] shadow-2xl">
          <div className="max-lg:hidden">
            <img
              className="object-cover absolute top-20 w-[400px] h-[530px] mx-20 shadow-2xl"
              src="https://plus.unsplash.com/premium_photo-1709143099855-0fa88e8a6ac3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="w-full h-full lg:w-1/2 bg-slate-800 text-white flex flex-col gap-4 items-center justify-center shadow-xl">
            <button
              onClick={() => {
                navigate("/");
              }}
              className="self-end pr-8 text-3xl font-semibold hover:text-primary hover:cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </button>
            <h1 className="text-center text-3xl font-semibold">Register</h1>
            <form onSubmit={submitHandler} className="px-4 flex flex-col gap-2">
              <div className="flex flex-row max-sm:flex-col max-sm:gap-2 gap-8 border-b-2 border-white">
                <label className="text-xl ">Email ID</label>
                <input
                  className="bg-inherit placeholder:text-white  focus:outline-none"
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={emailHandler}
                />
              </div>
              <div className="flex flex-row gap-12 max-sm:flex-col max-sm:gap-2 border-b-2 border-white">
                <label className="text-xl ">Name</label>
                <input
                  className="bg-inherit placeholder:text-white focus:outline-none"
                  type="text"
                  placeholder="Enter your username"
                  required
                  value={username}
                  onChange={usernameHandler}
                />
              </div>
              <div className="flex flex-row gap-5 max-sm:flex-col max-sm:gap-2 border-b-2 border-white">
                <label className="text-xl ">Password</label>
                <input
                  className="bg-inherit placeholder:text-white focus:outline-none"
                  type="password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={passwordHandler}
                />
              </div>
              <div className="py-2">
                <input className="scale-150 " type="checkbox" />
                <label className="font-medium px-2">Remember me</label>
              </div>
              <div>
                <button
                  className="bg-red-300 w-full py-2 rounded-md text-center font-medium"
                  type="submit"
                >
                  REGISTER
                </button>
              </div>
              <div className="flex flex-row justify-center">
                <p>Already have an account?</p>
                <button
                  className="hover:text-blue-700 font-semibold"
                  type="submit"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
