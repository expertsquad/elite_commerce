"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import React from "react";
import dynamic from "next/dynamic";
import { IProduct } from "@/interfaces/product.interface";

const NewestProducts = dynamic(() => import("./NewestProducts"));
const TopSellProducts = dynamic(() => import("./TopSellProduct"));
const PopularProducts = dynamic(() => import("./PopularProducts"));

const FeaturedProducts = ({
  newestProducts,
  topSellProducts,
  popularProducts,
}: {
  newestProducts: IProduct[];
  topSellProducts: IProduct[];
  popularProducts: IProduct[];
}) => {
  const [filter, setFilter] = React.useState("Newest");
  return (
    <div>
      <div className="flex justify-between p-3 border-b border-black-10 mb-10">
        <div className="flex gap-5 uppercase">
          <button
            className={
              filter === "Newest" ? "border-gradient-primary pb-[2px]" : ""
            }
            onClick={() => setFilter("Newest")}
          >
            Newest
          </button>
          <button
            className={
              filter === "TopSell" ? "border-gradient-primary pb-[2px]" : ""
            }
            onClick={() => setFilter("TopSell")}
          >
            Top Sell
          </button>
          <button
            className={
              filter === "Popular" ? "border-gradient-primary pb-[2px]" : ""
            }
            onClick={() => setFilter("Popular")}
          >
            Popular
          </button>
        </div>
        <button className="flex items-center">
          See All <IconArrowNarrowRight />
          {/* <GenerateGradientIcon IconComponent={IconArrowNarrowRight} /> */}
        </button>
      </div>
      {/* layout */}
      <div className="grid grid-cols-product-grid grid-rows-product-grid gap-10 min-h-96 justify-around">
        {filter === "Newest" ? (
          <NewestProducts products={newestProducts} />
        ) : filter === "TopSell" ? (
          <TopSellProducts products={topSellProducts} />
        ) : (
          <PopularProducts products={popularProducts} />
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
