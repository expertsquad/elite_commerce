"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Loading from "@/app/loading";

const NewestProducts = dynamic(() => import("./NewestProducts"), {
  ssr: false,
});
const TopSellProducts = dynamic(() => import("./TopSellProduct"));
const PopularProducts = dynamic(() => import("./PopularProducts"));

const FeaturedProducts = () => {
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
      <div className="grid grid-cols-4">
        {filter === "Newest" ? (
          <Suspense fallback={<Loading />}>
            <NewestProducts />
          </Suspense>
        ) : filter === "TopSell" ? (
          <Suspense fallback={<Loading />}>
            <TopSellProducts />
          </Suspense>
        ) : (
          <Suspense fallback={<Loading />}>
            <PopularProducts />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
