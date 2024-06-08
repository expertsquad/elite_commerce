import { categoryColor } from "@/constants/categorycolor.constants";
import React from "react";
type ColorTypes = {
  color: string;
  colorName: string;
};
const FilterByColor = () => {
  return (
    <div className="">
      <h2 className="mb-5 md:mb-[30px] font-bold text-lg md:text-2xl">COLOR</h2>
      <div className="flex items-center gap-2 gap-y-3 flex-wrap">
        {categoryColor?.map((color: ColorTypes, index) => (
          <div
            key={index}
            className="border border-black-10 rounded-full px-2.5 py-1 flex items-center gap-x-2.5"
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
