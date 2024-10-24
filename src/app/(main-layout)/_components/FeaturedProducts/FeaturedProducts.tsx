"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import React from "react";
import dynamic from "next/dynamic";
import { IProduct } from "@/interfaces/product.interface";
import Link from "next/link";

const NewestProducts = dynamic(() => import("./NewestProducts"));
const TopSellProducts = dynamic(() => import("./TopSellProduct"));
const PopularProducts = dynamic(() => import("./PopularProducts"));

const FeaturedProducts = ({
  newestProducts,
  topSellProducts,
  popularProducts,
  currencyIcon,
}: {
  newestProducts: IProduct[];
  topSellProducts: IProduct[];
  popularProducts: IProduct[];
  currencyIcon: string;
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
        <Link
          className="flex items-center text-gradient-primary"
          href="/category/page/1"
        >
          See All <b className="px-2">&rarr;</b>
          {/* <GenerateGradientIcon IconComponent={IconArrowNarrowRight} /> */}
        </Link>
      </div>
      {/* layout */}
      <div className="grid grid-cols-product-grid grid-rows-product-grid gap-10 min-h-96 justify-around">
        {filter === "Newest" ? (
          <NewestProducts
            products={newestProducts}
            currencyIcon={currencyIcon}
          />
        ) : filter === "TopSell" ? (
          <TopSellProducts
            products={topSellProducts}
            currencyIcon={currencyIcon}
          />
        ) : (
          <PopularProducts
            products={popularProducts}
            currencyIcon={currencyIcon}
          />
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
