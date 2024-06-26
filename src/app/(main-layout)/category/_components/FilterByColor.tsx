"use client";

import { categoryColor } from "@/constants/categorycolor.constants";
import { FilterContext } from "@/Provider/CategoryProductFilteringProvider";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
type ColorTypes = {
  color: string;
  colorName: string;
};
const FilterByColor = ({ redirectPath }: { redirectPath: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { filter, setFilter } = useContext(FilterContext);

  const getColorName = (color: string) => {
    const isSelected = filter?.["variant.variantName"] === color;
    let updateFilteredColor;
    if (isSelected) {
      updateFilteredColor = "";
    } else {
      updateFilteredColor = color;
    }
    setFilter({
      ...filter,
      "variant.variantName": updateFilteredColor,
    });
    if (pathname !== redirectPath) {
      router.push(redirectPath);
    }
  };

  return (
    <div className="">
      <h2 className="mb-5 md:mb-[30px] font-bold text-lg md:text-2xl">COLOR</h2>
      <div className="flex items-center gap-2 gap-y-3 flex-wrap">
        {categoryColor?.map((color: ColorTypes, index) => (
          <div
            onClick={() => getColorName(color?.colorName)}
            key={index}
            className={`border border-black-10 rounded-full px-2.5 py-1 flex items-center gap-x-2.5 cursor-pointer ${
              filter?.["variant.variantName"] === color?.colorName
                ? "bg-gradient-primary-light"
                : ""
            }`}
          >
            <span
              className="w-[15px] h-[15px] rounded-full flex"
              style={{ backgroundColor: color?.color }}
            ></span>
            <span className="text-[15px]">{color?.colorName}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterByColor;
