"use client";
import Loading from "@/app/loading";
import { IProduct } from "@/interfaces/product.interface";
import dynamic from "next/dynamic";
import React, { Fragment, Suspense, useState } from "react";

const MostPopularProducts = dynamic(
  () => import("./SortedProducts/MostPopularProducts")
);
const NewProducts = dynamic(() => import("./SortedProducts/NewProducts"));
const HighPriceProducts = dynamic(
  () => import("./SortedProducts/HighPriceProducts")
);
const LowPriceProducts = dynamic(
  () => import("./SortedProducts/LowPriceProducts")
);

const SortingSection = ({
  mostPopularProducts,
  newProducts,
  highPriceProducts,
  lowPriceProducts,
}: {
  mostPopularProducts: IProduct[];
  newProducts: IProduct[];
  highPriceProducts: IProduct[];
  lowPriceProducts: IProduct[];
}) => {
  const [selected, setSelected] = useState("MostPopular");

  return (
    <Fragment>
      <div className="border border-black-10 px-3 rounded-md">
        <select
          name="products-sort"
          className="py-2 rounded-md outline-none border-none w-full md:w-min bg-transparent text-gray-700 active:text-fuchsia-700"
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="MostPopular">Most Popular</option>
          <option value="New">New Product</option>
          <option value="HighPrice">High Price</option>
          <option value="LowPrice">Low Price</option>
        </select>
      </div>

      <div className="grid grid-cols-product-grid grid-rows-product-grid gap-5 min-h-96 justify-around">
        {selected === "MostPopular" ? (
          <Suspense fallback={<Loading />}>
            <MostPopularProducts products={mostPopularProducts} />
          </Suspense>
        ) : selected === "New" ? (
          <Suspense fallback={<Loading />}>
            <NewProducts products={newProducts} />
          </Suspense>
        ) : selected === "HighPrice" ? (
          <Suspense fallback={<Loading />}>
            <HighPriceProducts products={highPriceProducts} />
          </Suspense>
        ) : selected === "LowPrice" ? (
          <Suspense fallback={<Loading />}>
            <LowPriceProducts products={lowPriceProducts} />
          </Suspense>
        ) : (
          <></>
        )}
      </div>
    </Fragment>
  );
};

export default SortingSection;
