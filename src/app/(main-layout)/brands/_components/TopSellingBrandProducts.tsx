import React from "react";
import SmallProductCard from "./SmallProductCard";
import { IProduct } from "@/interfaces/product.interface";

const TopSellingBrandProducts = async ({
  topSellingBrandProducts,
  currency,
}: {
  topSellingBrandProducts?: IProduct[];
  currency?: string;
}) => {
  return (
    <div className="flex flex-col gap-[clamp(15px,2.5vw,20px)] ">
      <span className="uppercase text-lg font-semibold">
        Top Selling Brands Product
      </span>
      <div className="flex flex-col gap-[clamp(8px,2.5vw,10px)]">
        {topSellingBrandProducts?.map((product: IProduct) => {
          return (
            <SmallProductCard
              currency={currency ? currency : ""}
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
