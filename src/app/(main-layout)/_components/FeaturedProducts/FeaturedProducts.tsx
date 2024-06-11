"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Loading from "@/app/loading";
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
      <div className="flex justify-between p-3 border-b border-black-10 mb-2">
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
      <div className="grid grid-cols-product-grid grid-rows-product-grid gap-5 min-h-96 justify-around">
        {filter === "Newest" ? (
          <Suspense fallback={<Loading />}>
            <NewestProducts products={newestProducts} />
          </Suspense>
        ) : filter === "TopSell" ? (
          <Suspense fallback={<Loading />}>
            <TopSellProducts products={topSellProducts} />
          </Suspense>
        ) : (
          <Suspense fallback={<Loading />}>
            <PopularProducts products={popularProducts} />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
