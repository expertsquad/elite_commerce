import React from "react";
import SmallProductCard from "./SmallProductCard";
import { fetchData } from "@/actions/fetchData";
import { IProduct } from "@/interfaces/product.interface";

const TopSellingBrandProducts = async () => {
  const topSellProducts = await fetchData({
    route: "/product",
    query: "sortBy=totalSoldQuantity",
    limit: 5,
  });

  return (
    <div className="flex flex-col gap-7 ">
      <span className="uppercase text-lg font-semibold">
        Top Selling Brands Product
      </span>
      <div className="flex flex-col gap-7">
        {topSellProducts?.data?.map((product: IProduct, index: number) => {
          return <SmallProductCard product={product} key={index} />;
        })}
      </div>
    </div>
  );
};

export default TopSellingBrandProducts;
