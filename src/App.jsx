import React from "react";
import Home from "./Pages/Home";
import AllProducts from "./Pages/AllProducts";
import Cart from "./Pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Layout from "./Layout/Layout";
import HomeLayout from "./Layout/HomeLayout";
import ScrollTop from "./Layout/ScrollTop";
import { Toaster } from "sonner";
import MyOrder from "./Pages/MyOrder";

const App = () => {
  return (
    <>
      <Toaster richColors position="top-center" visibleToasts={3} />
      <BrowserRouter>
        <ScrollTop>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<HomeLayout children={<Home />} />} />
            <Route
              path="/products"
              element={<Layout children={<AllProducts />} />}
            />
            <Route path="/cart" element={<Layout children={<Cart />} />} />
            <Route path="/orders" element={<Layout children={<MyOrder />} />} />
          </Routes>
        </ScrollTop>
      </BrowserRouter>
    </>
  );
};

export default App;
