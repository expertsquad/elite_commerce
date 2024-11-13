"use client";

import { FilterContext } from "@/Provider/BrandProductFilteringProvider";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useEffect, useState, useCallback } from "react";
import Slider from "react-slider";

const PriceRangeFilterForBrand = ({
  redirectPath,
  productMaxPrice,
}: {
  redirectPath: string;
  productMaxPrice?: number;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const minValue = 0;
  const maxValue = productMaxPrice || 500000;

  const { filter, setFilter } = useContext(FilterContext);
  const [values, setValues] = useState([minValue, maxValue]);

  useEffect(() => {
    const min = filter?.["variants.sellingPrice[gte]"] || minValue;
    const max = filter?.["variants.sellingPrice[lte]"] || maxValue;
    setValues([min, max]);
  }, [filter]);

  // Custom debounce function
  const debounce = (func: (...args: any[]) => void, delay: number) => {
    let timeout: ReturnType<typeof setTimeout> | null = null;
    return (...args: any[]) => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  // Handle changes with debouncing
  const handleChange = (newValues: number[]) => {
    setValues(newValues);
    debouncedHandleChange(newValues);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedHandleChange = useCallback(
    debounce((newValues) => {
      setFilter({
        ...filter,
        "variants.sellingPrice[gte]": newValues[0],
        "variants.sellingPrice[lte]": newValues[1],
      });

      if (pathname !== redirectPath) {
        router.push(redirectPath);
      }
    }, 1500),
    [filter, setFilter, pathname, redirectPath, router]
  );

  return (
    <div className="">
      <h2 className="mb-5 md:mb-[30px] font-semibold [font-size:_clamp(14px,10vw,18px)]">
        PRICE RANGE
      </h2>
      <div>
        <Slider
          className="w-full h-1.5 bg-gradient-primary rounded-full cursor-pointer slider"
          min={minValue}
          max={maxValue}
          value={values}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center justify-between mt-3.5">
        <span className="text-base">Min Price: ${values[0]}</span>
        <span className="text-base">Max Price: ${values[1]}</span>
      </div>
    </div>
  );
};

export default PriceRangeFilterForBrand;
