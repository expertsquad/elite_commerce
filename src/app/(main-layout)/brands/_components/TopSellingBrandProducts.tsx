import React from "react";
import SmallProductCard from "./SmallProductCard";

const TopSellingBrandProducts = () => {
  return (
    <div className="flex flex-col gap-7 ">
      <span className="uppercase text-lg font-semibold">
        Top Selling Brands Product
      </span>
      <div className="flex flex-col gap-7">
        {[...Array(5)].map((_, index) => {
          return <SmallProductCard key={index} />;
        })}
      </div>
    </div>
  );
};

export default TopSellingBrandProducts;
