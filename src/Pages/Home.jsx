import React from "react";
import { Headers } from "../Components/Header/Headers";
import Products from "../Components/Products/Products";
import Coursel from "../Components/Coursel/Coursel";
import Footer from "../Components/Footer/Footer";
import Users from "../Components/Users/Users";

const Home = () => {
  return (
    <div className="p-4 md:p-10 flex flex-col gap-20">
      <Headers />
      <Products />
      <Coursel />
      <Users />
      <Footer />
    </div>
  );
};

export default Home;
