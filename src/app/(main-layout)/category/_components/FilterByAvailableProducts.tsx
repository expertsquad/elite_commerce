import React from "react";

const FilterByAvailableProducts = () => {
  return (
    <div className="">
      <h1 className="mb-5 md:mb-[30px] font-bold text-lg md:text-2xl uppercase whitespace-nowrap">
        AVAILABILITY
      </h1>
      <div className="flex flex-col gap-5">
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            className="checkbox border checked:border-fuchsia-700 [--chkbg:purple] [--chkfg:white]"
            name="inStock"
            id="inStock"
          />
          <label
            htmlFor="inStock"
            className="text-black-80 text-base cursor-pointer"
          >
            Bulk Order{" "}
          </label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            className="checkbox border checked:border-fuchsia-700 [--chkbg:purple] [--chkfg:white]"
            name="preOrder"
            id="preOrder"
          />
          <label
            htmlFor="preOrder"
            className="text-black-80 text-base cursor-pointer"
          >
            Multiple Order
          </label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            className="checkbox border checked:border-fuchsia-700 [--chkbg:purple] [--chkfg:white]"
            name="upcoming"
            id="upcoming"
          />
          <label
            htmlFor="upcoming"
            className="text-black-80 text-base cursor-pointer"
          >
            Low Stock
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterByAvailableProducts;
