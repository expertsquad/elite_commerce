"use client";
import { FilterContext } from "@/Provider/CategoryProductFilteringProvider";
import { usePathname, useRouter } from "next/navigation";
import React, { useContext } from "react";

const FilterByColor = ({
  redirectPath,
  colors,
}: {
  redirectPath: string;
  colors: string[];
}) => {
  const updatedColors = colors?.filter((color) => color !== "Not specified");

  const router = useRouter();
  const pathname = usePathname();
  const { filter, setFilter } = useContext(FilterContext);

  const getColorName = (color: string) => {
    const isSelected = filter?.["variants.variantName"] === color;
    let updateFilteredColor;
    if (isSelected) {
      updateFilteredColor = "";
    } else {
      updateFilteredColor = color;
    }
    setFilter({
      ...filter,
      "variants.variantName": updateFilteredColor,
    });
    if (pathname !== redirectPath) {
      router.push(redirectPath);
    }
  };

  return (
    <div className="">
      <h2 className="mb-5 md:mb-[30px] font-bold text-lg md:text-2xl">COLOR</h2>
      <div className="flex items-center gap-2 gap-y-3 flex-wrap">
        {updatedColors?.map((color: any, index) => (
          <div
            onClick={() => getColorName(color)}
            key={index}
            className={`border border-black-10 rounded-full px-2.5 py-1 flex items-center gap-x-2.5 cursor-pointer ${
              filter?.["variants.variantName"] === color
                ? "bg-gradient-primary-light"
                : ""
            }`}
          >
            <span
              className="w-[15px] h-[15px] rounded-full flex"
              style={{ backgroundColor: color }}
            ></span>
            <span className="text-[15px]">{color}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterByColor;
