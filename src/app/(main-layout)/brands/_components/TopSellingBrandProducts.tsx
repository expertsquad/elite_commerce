import React from "react";
import SmallProductCard from "./SmallProductCard";
import { fetchData } from "@/actions/fetchData";
import { IProduct } from "@/interfaces/product.interface";

const TopSellingBrandProducts = async ({
  topSellingBrandProducts,
  currency,
}: {
  topSellingBrandProducts: IProduct[];
  currency: string;
}) => {
  return (
    <div className="flex flex-col gap-7 ">
      <span className="uppercase text-lg font-semibold">
        Top Selling Brands Product
      </span>
      <div className="flex flex-col gap-7">
        {topSellingBrandProducts?.map((product: IProduct) => {
          return (
            <SmallProductCard
              currency={currency}
              product={product}
              key={product?._id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopSellingBrandProducts;
