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
  shippingAmount,
  isQuickOrderActive,
}: {
  newestProducts: IProduct[];
  topSellProducts: IProduct[];
  popularProducts: IProduct[];
  currencyIcon: string;
  shippingAmount: number;
  isQuickOrderActive?: boolean;
}) => {
  const [filter, setFilter] = React.useState("Newest");
  return (
    <div>
      <div className="flex justify-between pt-3 border-b border-black-10 mb-10">
        <div className="flex items-center gap-x-5 uppercase">
          <button
            className={`uppercase text-gradient-primary px-5 border-b  pb-2
              ${
                filter === "Newest"
                  ? "text-gradient-primary border-b border-primary-light"
                  : "text-black border-transparent"
              }
            `}
            onClick={() => setFilter("Newest")}
          >
            Newest
          </button>

          <button
            className={`uppercase text-gradient-primary px-5 border-b  pb-2
              ${
                filter === "TopSell"
                  ? "text-gradient-primary border-b border-primary-light"
                  : "text-black border-transparent"
              }
            `}
            onClick={() => setFilter("TopSell")}
          >
            Top Sell
          </button>

          <button
            className={`uppercase text-gradient-primary px-5 border-b  pb-2
              ${
                filter === "Popular"
                  ? "text-gradient-primary border-b border-primary-light"
                  : "text-black border-transparent"
              }
            `}
            onClick={() => setFilter("Popular")}
          >
            Popular
          </button>
        </div>
        <Link
          className="flex items-center text-gradient-primary pb-2"
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
            shippingAmount={shippingAmount}
            isQuickOrderActive={isQuickOrderActive}
          />
        ) : filter === "TopSell" ? (
          <TopSellProducts
            products={topSellProducts}
            currencyIcon={currencyIcon}
            shippingAmount={shippingAmount}
            isQuickOrderActive={isQuickOrderActive}
          />
        ) : (
          <PopularProducts
            products={popularProducts}
            currencyIcon={currencyIcon}
            shippingAmount={shippingAmount}
            isQuickOrderActive={isQuickOrderActive}
          />
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
