"use client";
import { FilterContext } from "@/Provider/FilteringProvider";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import Slider from "react-slider";

const PriceRange = ({ redirectPath }: { redirectPath: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  const minValue = 0;
  const maxValue = 5000;

  const { filter, setFilter } = useContext(FilterContext);

  const handleChange = (newValues: number[]) => {
    setFilter({
      ...filter,
      "price[gte]": newValues[0],
      "price[lte]": newValues[1],
    });

    if (pathname !== redirectPath) {
      router.push(redirectPath);
    }
  };

  const min = filter?.["price[gte]"] ? filter["price[gte]"] : minValue;
  const max = filter?.["price[lte]"] ? filter["price[lte]"] : maxValue;

  return (
    <div className="">
      <h2 className="mb-5 md:mb-[30px] font-bold [font-size:_clamp(18px,10vw,24px)]">
        PRICE RANGE
      </h2>
      <div>
        <Slider
          className="w-full h-1.5 bg-gradient-primary rounded-full cursor-pointer slider"
          min={0}
          max={1000}
          value={[min, max]}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center justify-between mt-3.5">
        <span className="text-base">Min Price: ${min}</span>
        <span className="text-base">Max Price: ${max}</span>
      </div>
    </div>
  );
};

export default PriceRange;
