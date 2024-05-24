import React from "react";
import ProductsCard from "../ProductsCard/ProductsCard";
import { useSelector } from "react-redux";
import ProductsCardSkeleton from "../../Skeleton/ProductsCardSkeleton";

const Products = () => {
  const { products, isFetching, isError } = useSelector(
    (state) => state.productsReducer
  );
  if (isFetching || !products) {
    return <ProductsCardSkeleton />;
  }
  return (
    <div
      className="flex flex-col gap-8"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <p className="text-2xl text-slate-700 font-semibold">
        Newly Arrived Products
      </p>
      <div
        data-aos="fade-right"
        className="md:px-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10"
      >
        {products.length > 0
          ? products.slice(0, 100).map((e) => {
              return (
                <div key={e.id}>
                  <ProductsCard
                    title={e.title}
                    image={e.image}
                    description={e.description}
                    price={e.price}
                    id={e.id}
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Products;
