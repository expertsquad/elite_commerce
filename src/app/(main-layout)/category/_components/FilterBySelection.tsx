"use client";
import Loading from "@/app/loading";
import Pagination from "@/Components/Pagination";
import { IProduct } from "@/interfaces/product.interface";
import dynamic from "next/dynamic";
import React, { Suspense, useState } from "react";
import ProductEmptyState from "../../_components/ProductEmptyState";
import CustomDropdown from "@/Components/CustomDropdown";
import { selectOptionMenu } from "@/constants/selectOptionMenu";

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
interface ITotal {
  total: number;
  limit: number;
}
interface IResposnseProduct {
  meta: ITotal;
  data: IProduct[];
}

const SortingSection = ({
  mostPopularProducts,
  newProducts,
  highPriceProducts,
  lowPriceProducts,
  shippingAmount,
  isQuickOrderActive,
  currency,
}: {
  mostPopularProducts: IResposnseProduct;
  newProducts: IResposnseProduct;
  highPriceProducts: IResposnseProduct;
  lowPriceProducts: IResposnseProduct;
  shippingAmount: number;
  isQuickOrderActive: boolean;
  currency: string;
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
        {/* <div className="border border-black-10 px-3 rounded-md w-auto ">
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
        </div> */}

        <CustomDropdown
          data={selectOptionMenu}
          onClick={(value) => setSelected(value)}
          className="w-fit border border-black-10 py-2 rounded-lg px-3 "
          itemClassName="py-1 hover:bg-black-10"
          defaultValue={selected}
        />
      </div>

      <div className="grid grid-cols-product-grid grid-rows-product-grid gap-5  justify-around">
        {selected === "MostPopular" ? (
          <Suspense fallback={<Loading />}>
            {mostPopularProducts?.data?.length > 0 ? (
              <MostPopularProducts
                currencyIcon={currency}
                isQuickOrderActive={isQuickOrderActive}
                shippingAmount={shippingAmount}
                products={mostPopularProducts?.data}
              />
            ) : (
              <ProductEmptyState />
            )}
          </Suspense>
        ) : selected === "New" ? (
          <Suspense fallback={<Loading />}>
            {newProducts?.data?.length > 0 ? (
              <NewProducts
                currencyIcon={currency}
                isQuickOrderActive={isQuickOrderActive}
                shippingAmount={shippingAmount}
                products={newProducts?.data}
              />
            ) : (
              <ProductEmptyState />
            )}
          </Suspense>
        ) : selected === "HighPrice" ? (
          <Suspense fallback={<Loading />}>
            {highPriceProducts?.data?.length > 0 ? (
              <HighPriceProducts
                currencyIcon={currency}
                isQuickOrderActive={isQuickOrderActive}
                shippingAmount={shippingAmount}
                products={highPriceProducts?.data}
              />
            ) : (
              <ProductEmptyState />
            )}
          </Suspense>
        ) : selected === "LowPrice" ? (
          <Suspense fallback={<Loading />}>
            {lowPriceProducts?.data?.length > 0 ? (
              <LowPriceProducts
                currencyIcon={currency}
                isQuickOrderActive={isQuickOrderActive}
                shippingAmount={shippingAmount}
                products={lowPriceProducts?.data}
              />
            ) : (
              <ProductEmptyState />
            )}
          </Suspense>
        ) : (
          <></>
        )}
      </div>

      {toatalPages > 1 ? (
        <div className="my-5">
          <Pagination
            totalPages={toatalPages}
            currentPage={1}
            redirectTo="/category/page"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SortingSection;
