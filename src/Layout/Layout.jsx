import React from "react";
import PageNavbar from "../Common/PageNavbar";
import Footer from "../Components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-rose-100 min-h-screen flex flex-col ">
      <PageNavbar />
      {children}
      <div className="px-4 md:px-10 pb-10">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
