import React from "react";
import { Card } from "../Card/Card";
import banner from "../../Images/banner.jpg";
import phone from "../../Images/phone.jpg";
import earphone from "../../Images/earphone.jpg";

export const HeroSection = () => {
  return (
    <div className="px-4 md:px-10 py-10">
      <div className="flex flex-row gap-20">
        <div className="flex flex-col md:flex-row lg:flex-col max-lg:items-center gap-8 ">
          <div>
            <br />
            <span className="w-full text-xl md:text-4xl font-bold ">
              <span
                style={{
                  color: "#F28482",
                  fontSize: "78px",
                  fontWeight: "800",
                }}
              >
                Y
              </span>
              our Premier Destination for Online Shopping!
            </span>
            <br />
            <span className="max-sm:hidden text-yellow-600">
              <span
                style={{
                  color: "#84A59D",
                  fontSize: "58px",
                  fontWeight: "700",
                }}
              >
                E
              </span>
              xplore a World of Convenience and Choice, Delivered to Your
              Doorstep
            </span>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <div className="">
              <Card />
            </div>
            <div className="max-lg:hidden cursor-pointer bg-rose-400 rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#FFFF"
                className="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="max-lg:hidden flex flex-col lg:px-20">
          <figure id="phoneBanner" className="relative top-10 right-20">
            <img src={phone} className="rounded-full h-32 w-32" alt="" />
          </figure>
          <figure className="banner">
            <img
              src={banner}
              className="h-80 w-96 object-cover rounded-2xl"
              alt=""
            />
          </figure>
          <figure
            id="earphoneBanner"
            className="self-end relative bottom-10 left-20"
          >
            <img src={earphone} className="rounded-full h-32 w-32" alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};
