import React from "react";
import BrandCard, { IBrandCardProps } from "../../../Components/BrandCard";
import Category from "./_components/Category";
import SmallProductCard from "./_components/SmallProductCard";
import { fetchData } from "@/actions/fetchData";
import { ICategory } from "@/interfaces/category.interface";
import FilterSort from "./_components/FilterSort";
import Filter from "./_components/Filter";
import WidgetCard from "../../../Components/WidgetCard";

const BrandTest = async () => {
  const brandData = await fetchData({ route: "/brand" });
  const categoryData = await fetchData({ route: "/category" });

  return (
    <div className="">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
        <div className="flex flex-col gap-5 md:gap-7 md:col-span-3">
          <div className="flex items-center justify-between md:hidden">
            <FilterSort />
            <Filter />
          </div>
          <div className="flex items-center justify-between">
            <span className="md:font-semibold md:text-xl text-base">
              106 Brands Found Here
            </span>
            <div className="md:block hidden">
              <FilterSort />
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-5 overflow-y-auto">
            {brandData?.data?.map(
              (
                brand: {
                  brandName: string;
                  brandPhoto: string;
                  productCount: number;
                },
                index: number
              ) => {
                return <BrandCard brandData={brand} key={index.toString()} />;
              }
            )}
          </div>
        </div>
        <div className="flex flex-col gap-7">
          {/* Categories */}
          <div className="hidden md:flex flex-col gap-7">
            <span className="uppercase text-lg font-semibold">Categories</span>

            <div className="flex flex-col gap-5">
              {categoryData?.data?.map((category: ICategory, index: number) => {
                return <Category categoryData={category} key={index} />;
              })}
            </div>
          </div>
          <hr className="border-black-10 hidden md:block" />
          {/* To Selling Brands Product */}
          <div className="hidden md:flex flex-col gap-7 ">
            <span className="uppercase text-lg font-semibold">
              To Selling Brands Product
            </span>
            <div className="flex flex-col gap-7">
              {[...Array(5)].map((_, index) => {
                return <SmallProductCard key={index} />;
              })}
            </div>
          </div>
          <hr className="border-black-10 hidden md:block" />
          {/* Widget Promotion card */}

          <div>
            <WidgetCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandTest;
