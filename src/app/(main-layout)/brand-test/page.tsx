import React from "react";
import BrandCard from "./_brandComponents/BrandCard";

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
          <span className="uppercase">Brands Type</span>
        </div>
      </div>
    </div>
  );
};

export default BrandTest;
