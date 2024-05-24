import React from "react";

const ProductsCardSkeleton = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-cols-1 ">
      {[1, 2, 3, 4, 5, 6].map((e) => {
        return (
          <div className="flex flex-col gap-4">
            <div className="skeleton h-48 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsCardSkeleton;
