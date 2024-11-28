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
  const [selected, setSelected] = useState("Most Popular");

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
          {selected === "Most Popular"
            ? mostPopularProducts?.meta?.total
            : selected === "New Product"
            ? newProducts?.meta?.total
            : selected === "High Price"
            ? highPriceProducts?.meta?.total
            : selected === "Low Price"
            ? lowPriceProducts?.meta?.total
            : ""}{" "}
          Items result found-{" "}
        </span>

        <div className="flex items-end justify-end">
          <CustomDropdown
            data={selectOptionMenu}
            onClick={(value) => setSelected(value)}
            className="w-fit border border-black-10 py-2 rounded-lg px-3 "
            itemClassName="py-1 hover:bg-black-10"
            defaultValue={selected}
          />
        </div>
      </div>

      <div className="grid grid-cols-product-grid grid-rows-product-grid gap-5  justify-around">
        {selected === "Most Popular" ? (
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
        ) : selected === "New Product" ? (
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
        ) : selected === "High Price" ? (
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
        ) : selected === "Low Price" ? (
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
