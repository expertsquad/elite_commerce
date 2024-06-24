"use client";
import Loading from "@/app/loading";
import Pagination from "@/Components/Pagination";
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

  const pages =
    selected === "MostPopular"
      ? mostPopularProducts?.meta?.total / mostPopularProducts?.meta?.limit
      : selected === "New"
      ? newProducts?.meta?.total / newProducts?.meta?.limit
      : selected === "HighPrice"
      ? highPriceProducts?.meta?.total / highPriceProducts?.meta?.limit
      : selected === "LowPrice"
      ? lowPriceProducts?.meta?.total / lowPriceProducts?.meta?.limit
      : "";
  const toatalPages = Math.ceil(Number(pages));

  // console.log(toatalPages);
  return (
    <div className=" flex flex-col gap-6">
      <div className="flex md:flex-row flex-col-reverse md:gap-1 gap-2.5 md:items-center justify-between">
        <span className="text-lg">
          {selected === "MostPopular"
            ? mostPopularProducts?.meta?.total
            : selected === "New"
            ? newProducts?.meta?.total
            : selected === "HighPrice"
            ? highPriceProducts?.meta?.total
            : selected === "LowPrice"
            ? lowPriceProducts?.meta?.total
            : ""}{" "}
          Items result found-{" "}
        </span>
        <div className="border border-black-10 px-3 rounded-md w-auto ">
          <select
            name="products-sort"
            className="py-2 rounded-md outline-none border-none w-full  bg-transparent text-gray-700 active:text-fuchsia-700 "
            onChange={(e) => setSelected(e.target.value)}
          >
            <option value="MostPopular">Most Popular</option>
            <option value="New">New Product</option>
            <option value="HighPrice">High Price</option>
            <option value="LowPrice">Low Price</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-product-grid grid-rows-product-grid gap-5  justify-around">
        {selected === "MostPopular" ? (
          <Suspense fallback={<Loading />}>
            <MostPopularProducts products={mostPopularProducts?.data} />
          </Suspense>
        ) : selected === "New" ? (
          <Suspense fallback={<Loading />}>
            <NewProducts products={newProducts?.data} />
          </Suspense>
        ) : selected === "HighPrice" ? (
          <Suspense fallback={<Loading />}>
            <HighPriceProducts products={highPriceProducts?.data} />
          </Suspense>
        ) : selected === "LowPrice" ? (
          <Suspense fallback={<Loading />}>
            <LowPriceProducts products={lowPriceProducts?.data} />
          </Suspense>
        ) : (
          <></>
        )}
      </div>

      <div className="my-5">
        <Pagination
          totalPages={toatalPages}
          currentPage={1}
          redirectTo="/category/page"
        />
      </div>
    </div>
  );
};

export default SortingSection;
