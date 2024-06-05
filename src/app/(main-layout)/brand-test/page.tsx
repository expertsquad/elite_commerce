import React from "react";
import BrandCard from "./_brandComponents/BrandCard";
import Category from "./_brandComponents/Category";
import SmallProductCard from "./_brandComponents/SmallProductCard";

const BrandTest = () => {
  return (
    <div className="h-[calc(100vh-5rem)]">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
        <div className="flex flex-col gap-5 md:gap-7 md:col-span-3">
          <div className="flex items-center justify-between">
            <span>106 Brands Found Here</span>
            <select name="" id="" className="border outline-none">
              <option value="">Sort By</option>
            </select>
          </div>
          <div className="flex flex-wrap gap-5">
            {[...Array(10)].map((_, index) => {
              return <BrandCard key={index} />;
            })}
          </div>
        </div>
        <div>
          {/* Categories */}
          <div className="">
            <span className="uppercase text-lg font-semibold">Categories</span>

            <div className="flex flex-col gap-5">
              <Category />
            </div>
          </div>
          <hr className="border-black-50" />
          {/* To Selling Brands Product */}
          <div className="flex flex-col gap-7">
            <span className="uppercase text-lg font-semibold">
              To Selling Brands Product
            </span>
            <div className="flex flex-col gap-7">
              <SmallProductCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandTest;
